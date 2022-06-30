import Image from 'next/image'
import React from 'react'
import logo from '../../public/reacticon.svg'
import style from  './style.module.css';

export default function Logotype() {
  return (
    <div className={style.logotype}>
      <Image width={200} height={200} src={logo} alt="logotipo react" />
    </div>
  )
}
