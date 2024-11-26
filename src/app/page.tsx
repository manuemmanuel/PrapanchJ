'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LinktreePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen h-full bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800/50 backdrop-blur-md p-12 rounded-3xl border border-purple-500/30 shadow-lg shadow-purple-500/10">
          <div className="flex flex-col items-center">
            <div className="animate-spin w-16 h-16 border-[3px] border-purple-500/30 border-t-purple-500 rounded-full"></div>
            <p className="text-purple-300 font-mono mt-6 text-lg tracking-wider">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen h-full bg-gray-900 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Main Content - added opacity to background for better grid visibility */}
      <div className="relative z-10 w-full py-12 px-4">
        {/* Header Section */}
        <header className="max-w-2xl mx-auto text-center mb-12">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
            <Image
              src="/images/profile.jpg"
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-purple-500/20"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-3 font-mono text-white">Prapanch J</h1>
          <p className="text-gray-400 text-xl max-w-md mx-auto font-mono">
            I am a Computer Science and Engineering Student. I am looking forward to my first work experience.
          </p>
        </header>

        {/* Links Section */}
        <section className="max-w-md mx-auto space-y-5">
          {[
            { title: 'Email', url: 'mailto:prapanchmannar@gmail.com', description: 'prapanchmannar@gmail.com' },
            { title: 'LinkedIn', url: 'https://www.linkedin.com/in/prapanch-j-86bb46334/', description: 'Connect with me on LinkedIn' },
            { title: 'Instagram', url: 'https://www.instagram.com/___p_r_j___/', description: 'Follow me on Instagram' },
            // Add more links as needed
          ].map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="block p-6 bg-gray-800/50 backdrop-blur rounded-2xl
                       transition-all duration-300 transform hover:scale-[1.02]
                       border border-gray-700/50 hover:border-purple-500
                       shadow-lg hover:shadow-purple-500/10 font-mono"
            >
              <h2 className="text-2xl font-medium text-white">{link.title}</h2>
              <p className="text-gray-400 text-lg mt-1">{link.description}</p>
            </Link>
          ))}
        </section>

        {/* Footer Section */}
        <footer className="max-w-2xl mx-auto text-center mt-12">
          <p className="text-gray-500 text-lg font-mono">
            © {new Date().getFullYear()} Prapanch J
          </p>
        </footer>
      </div>
    </div>
  )
}
