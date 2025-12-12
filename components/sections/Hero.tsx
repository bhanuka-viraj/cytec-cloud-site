"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Cpu, Globe } from "lucide-react"

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10 bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 z-10 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <motion.div
                        className="text-left lg:pl-12"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                                Cytec Cloud (PVT) LTD
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 pb-2 leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Engineering <br />
                            <span className="text-foreground">Intelligent</span> <br />
                            Digital Futures
                        </motion.h1>

                        <motion.p
                            className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            A cloud-native software engineering company enabling digital transformation.
                            We design and build intelligent, scalable, and secure enterprise systems powered
                            by modern cloud and microservices architectures.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 shadow-md shadow-primary/20">
                                <span className="mr-2">Start a Project</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                                Explore Services
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        className="relative hidden lg:block"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            {/* Abstract Tech Visual */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl rotate-6 blur-3xl opacity-60" />

                            <div className="relative w-full h-full bg-card/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden group">
                                {/* Grid Pattern Overlay */}
                                <div className="absolute inset-0 opacity-[0.03]"
                                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                                />

                                {/* Floating Elements */}
                                <motion.div
                                    className="absolute top-12 left-12 p-4 bg-background/80 backdrop-blur border border-border rounded-xl shadow-lg"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                >
                                    <Globe className="w-8 h-8 text-primary mb-2" />
                                    <div className="h-2 w-16 bg-muted rounded-full mb-1" />
                                    <div className="h-2 w-8 bg-muted rounded-full" />
                                </motion.div>

                                <motion.div
                                    className="absolute bottom-20 right-12 p-4 bg-background/80 backdrop-blur border border-border rounded-xl shadow-lg z-20"
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                >
                                    <Cpu className="w-8 h-8 text-purple-500 mb-2" />
                                    <div className="h-2 w-20 bg-muted rounded-full mb-1" />
                                    <div className="h-2 w-12 bg-muted rounded-full" />
                                </motion.div>

                                <motion.div
                                    className="absolute top-1/3 right-8 p-4 bg-primary/10 backdrop-blur border border-primary/20 rounded-xl shadow-lg"
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                                >
                                    <Code2 className="w-6 h-6 text-primary" />
                                </motion.div>

                                {/* Central "Code" Block */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 bg-background/90 rounded-lg border border-border shadow-2xl p-6 font-mono text-xs md:text-sm text-muted-foreground">
                                    <div className="flex gap-1.5 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="space-y-1">
                                        <p><span className="text-purple-400">const</span> <span className="text-primary">future</span> = <span className="text-purple-400">await</span> <span className="text-yellow-400">build</span>{"({"}</p>
                                        <p className="pl-4">scalable: <span className="text-primary">true</span>,</p>
                                        <p className="pl-4">secure: <span className="text-primary">true</span>,</p>
                                        <p className="pl-4">cloudNative: <span className="text-primary">true</span>,</p>
                                        <p>{"});"}</p>
                                        <p className="text-emerald-500">{"// Ready to deploy"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
