## Resource





## 项目初始化

在项目文件夹下执行

```
npm create vite@latest ./ -- --template react
```

安装tailwindcss依赖

```
npm install -D tailwindcss
npx tailwindcss init
```

安装需要用到的三方库

```
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
```

***包和包之间需要空格隔开，不然会报错***

根据教程，将对应的初始化文件和资源放到指定位置。

## Navbar

解决tailwindcss某些样式失效的问题。

```
npm install --legacy-peer-deps -D postcss autoprefixer
npx tailwindcss init -p
```

代码，Navbar.jsx

```
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles' 
import { navLinks } from '../constants/constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => {
          setActive('')
          window.scrollTo(0, 0)
        }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Adrian &nbsp;
            <span className='sm:block hidden'> | JavaScript Mastery</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
```

## Hero

需要安装three js

```
npm install --legacy-peer-deps three
```

## About



## Tech

