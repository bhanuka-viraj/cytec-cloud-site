"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer id="contact" className="bg-background border-t border-border pt-16 pb-8">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative w-36 h-10">
                                <Image
                                    src={logo}
                                    alt="Cytec Cloud Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Engineering Intelligent Digital Futures. Enabling digital transformation with cloud-native technologies.
                        </p>
                        <div className="flex gap-4">
                            <Link href="mailto:hello@cyteccloud.com" className="text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-5 h-5" />
                            </Link>
                            <Link href="tel:+94763006300" className="text-muted-foreground hover:text-primary transition-colors">
                                <Phone className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Cloud-Native Dev</Link></li>
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Microservices</Link></li>
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">AI Solutions</Link></li>
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Enterprise Systems</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Why Choose Us</Link></li>
                            <li><Link href="mailto:hello@cyteccloud.com" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:hello@cyteccloud.com" className="hover:text-primary transition-colors">hello@cyteccloud.com</a>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                <a href="tel:+94763006300" className="hover:text-primary transition-colors">+94 76 300 6300</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
                    <p>&copy; {currentYear} Cytec Cloud (PVT) LTD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
