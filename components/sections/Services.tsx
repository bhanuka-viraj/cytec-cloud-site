"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Brain, Cloud, Radio, Share2, Rocket, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
    {
        title: "Cloud-Native Software Development",
        description: "Build scalable, resilient applications using cloud-native architectures and modern development practices.",
        icon: Cloud,
        className: "md:col-span-2",
    },
    {
        title: "Microservices & API Engineering",
        description: "Design and implement microservices architectures with robust API gateways and event-driven systems.",
        icon: Share2,
        className: "md:col-span-1",
    },
    {
        title: "Data Engineering & AI Solutions",
        description: "Data streaming, analytics, and AI integration to unlock insights and drive intelligent decision-making.",
        icon: Brain,
        className: "md:col-span-1",
    },
    {
        title: "Enterprise Integrations",
        description: "Seamless integration with Telco, CRM, Billing, and Middleware systems for unified business operations.",
        icon: Radio,
        className: "md:col-span-2",
    },
    {
        title: "DevOps & Cloud Deployment",
        description: "Automated CI/CD pipelines and cloud deployment strategies for rapid, reliable releases.",
        icon: Rocket,
        className: "md:col-span-2 md:row-span-1",
    },
    {
        title: "Web & Mobile Applications",
        description: "Modern web and mobile applications built with cutting-edge technologies and best practices.",
        icon: Smartphone,
        className: "md:col-span-1",
    },
    {
        title: "SaaS Product Engineering",
        description: "End-to-end SaaS product development from concept to scalable cloud-based solutions.",
        icon: Code,
        className: "md:col-span-1",
    },
    {
        title: "IT Resource Outsourcing",
        description: "Dedicated teams and IT resource outsourcing to extend your development capabilities.",
        icon: Users,
        className: "md:col-span-2",
    },
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="container px-4">
                <motion.div
                    className="mb-16 max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground text-lg">
                        Comprehensive cloud-native solutions tailored to accelerate your digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-card p-8 hover:shadow-2xl transition-all duration-300 border border-border/50 flex flex-col",
                                service.className
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                                <service.icon className="w-32 h-32" />
                            </div>

                            <div className="relative z-10 flex flex-col flex-grow">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-xl font-bold mb-2 break-words">{service.title}</h3>
                                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
