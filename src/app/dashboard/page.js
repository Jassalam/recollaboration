"use client"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs"

function Dashboard() {
    return (
        <div>
            <div>Dashboard</div>
            <div><LogoutLink>Logout</LogoutLink></div>
        </div>
    )
}

export default Dashboard