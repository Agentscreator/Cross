"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Shield, Target, Gauge } from "lucide-react"
import Image from "next/image"

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const highlights = [
    { icon: Smartphone, label: "Mobile Optimized" },
    { icon: Gauge, label: "Battle-Tested Speed" },
    { icon: Shield, label: "Fortress Security" },
    { icon: Target, label: "Tactical Precision" },
  ]

  return (
    <div className="min-h-screen bg-[#2A2A2A] text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00FF41]/10 via-transparent to-[#FF6B35]/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00FF41]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6B35]/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative z-10 p-4 sm:p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <Image src="/logo-green.png" alt="CrosspointX" width={40} height={40} className="rounded-xl" />
            <span className="text-xl sm:text-2xl font-bold text-white">CrosspointX</span>
          </div>
          <Button
            variant="outline"
            onClick={onGetStarted}
            className="border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41] hover:text-black bg-transparent rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-glow-green transition-all duration-300"
          >
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div
          className={`text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
              Find. Play.{" "}
              <span className="bg-gradient-to-r from-[#00FF41] to-[#FF6B35] bg-clip-text text-transparent">
                Dominate.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The ultimate paintball community where serious players connect, compete, and conquer.
            </p>
          </div>
        </div>
      </div>

      {/* Experience CrosspointX */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Experience CrosspointX</h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Created by gamers for gamers. A true community-driven platform.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#00FF41]/20 to-[#FF6B35]/20 rounded-3xl p-6 sm:p-8 border border-[#00FF41]/30 shadow-soft backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div key={index} className="text-center p-4 rounded-2xl bg-[#404040]/50 backdrop-blur-sm">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF41] mx-auto mb-2 sm:mb-3" />
                    <div className="text-xs sm:text-sm font-medium text-white">{highlight.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#00FF41]/20 to-[#FF6B35]/20 rounded-3xl p-6 sm:p-8 border border-[#00FF41]/30 shadow-soft backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Ready to Dominate?</h2>
            <p className="text-gray-300 text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join the elite community that's redefining competitive paintball.
            </p>
            <Button
              onClick={onGetStarted}
              className="bg-[#00FF41] text-black hover:bg-[#00FF41]/90 font-semibold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-2xl shadow-glow-green transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 sm:py-12 px-4 sm:px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image src="/logo-green.png" alt="CrosspointX" width={32} height={32} className="rounded-xl" />
            <span className="text-lg sm:text-xl font-bold text-white">CrosspointX</span>
          </div>
          <div className="text-sm text-gray-500">© 2025 CrosspointX. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
