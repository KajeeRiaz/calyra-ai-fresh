import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Browse from './pages/Browse'
import AdvancedTools from './pages/AdvancedTools'
import ValidationTools from './pages/ValidationTools'
import Pricing from './pages/Pricing'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Billing from './pages/Billing'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/advanced-tools" element={<AdvancedTools />} />
            <Route path="/validation-tools" element={<ValidationTools />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
