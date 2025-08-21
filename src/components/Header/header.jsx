import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Menu, X } from "lucide-react"   // for icons

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { name: 'Home', slug: "/", active: true }, 
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ]

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <Logo width="70px" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full mr-1"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <>
                <li className="mr-1 order-1">
                  <LogoutBtn />
                </li>
                <li className="order-2">
                  <Link to="./Account">
                    <img
                      className="w-10 hover:cursor-pointer"
                      src="https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png"
                      alt="Account"
                    />
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {menu && (
          <ul className="flex flex-col items-center mt-3 md:hidden bg-gray-600 rounded-lg p-4">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className="my-2">
                  <button
                    onClick={() => {
                      navigate(item.slug)
                      setMenu(false) // close menu after click
                    }}
                    className="block w-full text-center px-4 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <>
                <li className="my-2">
                  <LogoutBtn />
                </li>
                <li>
                  <Link to="./Account">
                    <img
                      className="w-10 hover:cursor-pointer"
                      src="https://static.vecteezy.com/system/resources/previews/021/079/672/original/user-account-icon-for-your-design-only-free-png.png"
                      alt="Account"
                    />
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </Container>
    </header>
  )
}

export default Header
