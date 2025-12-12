"use client"

import { motion } from "framer-motion"
import { CheckCircle2, ShieldCheck, Globe2, Rocket, Award, Users } from "lucide-react"

const features = [
    {
        title: "Engineering Excellence",
        description: "Quality and reliability above all — we deliver solutions built to last.",
        icon: Award,
    },
    {
        title: "Cloud-Native DNA",
        description: "Built for scalability, performance, and resilience from the ground up.",
        icon: Rocket,
    },
    {
        title: "Global Delivery Approach",
        description: "Adaptable to business demands with flexible engagement models.",
        icon: Globe2,
    },
    {
        title: "Proven Experience",
        description: "Track record in mission-critical enterprise projects across industries.",
        icon: CheckCircle2,
    },
    {
        title: "Security-First Approach",
        description: "Compliance-aligned delivery processes with ISO-based best practices.",
        icon: ShieldCheck,
    },
    {
        title: "Highly Skilled Talent",
        description: "Flexible engagement models with expert teams ready to deliver.",
        icon: Users,
    },
]

export function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4">
                <motion.div
                    className="mb-16 max-w-3xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Cytec Cloud</h2>
                    <p className="text-muted-foreground text-lg">
                        Engineering excellence and cloud-native expertise for your digital transformation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="group p-6 rounded-2xl bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-primary/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
