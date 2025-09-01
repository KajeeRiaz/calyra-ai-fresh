import { Link } from 'react-router-dom'
import { Brain, Target, Users, ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Business Intelligence Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Generate, validate, and analyze business ideas with institutional-grade AI tools. 
          From concept to execution, Calyra.ai helps entrepreneurs build successful ventures.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/browse"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            Browse Ideas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            to="/advanced-tools"
            className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Advanced Tools
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Idea Generation</h3>
          <p className="text-gray-600">Weekly curated business ideas powered by advanced AI analysis</p>
        </div>
        <div className="text-center p-6">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">VC-Grade Validation</h3>
          <p className="text-gray-600">Validate your ideas using Warren Buffett and VC frameworks</p>
        </div>
        <div className="text-center p-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Intelligence</h3>
          <p className="text-gray-600">Real-time market analysis and competitive intelligence</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Next Big Idea?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join thousands of entrepreneurs using Calyra.ai to validate and scale their businesses
        </p>
        <Link
          to="/pricing"
          className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Get Started Today
        </Link>
      </div>
    </div>
  )
}

export default Home

