import React from 'react'

export default function SideBar({sellsidebar}) {
  return (
    <div className={sellsidebar?"sellsidebar sellsidebar--open":"sellsidebar"}>
    <li>My Profile</li>
    <li>My Orders</li>
    <li>Order History</li>
    <li>My Cart</li>   
     {/* <li>Home</li> */}
    </div>
  )
}
