'use client'

import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton, SidebarMenu } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

import { Plus } from "lucide-react"

const items = [
    {
        title: "Dashboard", 
        url: "/dashboard", 
        icon: LayoutDashboard
    },
    {
        title: "Q&A", 
        url: "/qa", 
        icon: Bot
    },
    {
        title: "Meetings", 
        url: "/meetings", 
        icon: Presentation
    },
    {
        title: "Billing", 
        url: "/billing", 
        icon: CreditCard
    },
]

const projects = [
    {
        name: "project1",
    },
    {
        name: "project2",
    },
    {
        name: "project3",
    },
    {
        name: "project4",
    },
]

export function AppSidebar() {
    const pathname = usePathname()
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                Logo
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        
                            {
                                items.map(item => {
                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton>                  
                                                    <Link href={item.url} className={cn({
                                                        '!bg-primary !text-white': pathname === item.url
                                                    }, 'list-none')}>
                                                    <div className="flex py-2 px-4">
                                                        <item.icon/>
                                                        <span className="px-2 py-1">{item.title}</span>
                                                    </div>
                                            </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                
                <SidebarGroup className="mx-4">
                    <SidebarGroupLabel>
                        Your Projects
                    </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {projects.map(project => {
                                    return (
                                        <SidebarMenuItem key={project.name}>
                                            <SidebarMenuButton asChild>
                                                <div>
                                                    <div className={cn(
                                                        'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary', 
                                                        {
                                                            'bg-primary text-white': true
                                                        }
                                                    )}>
                                                    {
                                                        project.name[0]
                                                    }
                                                    </div>
                                                    <span>{project.name} </span>
                                                </div>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                })}
                                <div className="h-2">
                                    {
                                        open && (
                                        <SidebarMenuItem>
                                            <Link href='/create'>
                                                <Button size="sm" variant={'outline'} className="w-fit mt-2">
                                                    <Plus />
                                                    <b>Create Project</b>
                                                </Button>
                                            </Link>
                                        </SidebarMenuItem>)
                                    }
                                </div>
                            </SidebarMenu>
                        </SidebarGroupContent>
                </SidebarGroup>
               </SidebarContent>
        </Sidebar>
    )
}