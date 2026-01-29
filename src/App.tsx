export default function App() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <MultiBranchSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

// ============================================================================
// Navigation
// ============================================================================
function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">Pickd</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="btn-ghost">The Problem</a>
            <a href="#solution" className="btn-ghost">Solution</a>
            <a href="#features" className="btn-ghost">Features</a>
            <a href="#how-it-works" className="btn-ghost">How It Works</a>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#cta" className="btn-primary text-sm">
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============================================================================
// Hero Section
// ============================================================================
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 mesh-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-emerald-300 font-medium">Review Intelligence Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-white">Get</span>{' '}
              <span className="gradient-text">Pickd</span>{' '}
              <span className="text-white">First</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0">
              Transform scattered reviews into actionable insights. Understand what customers really think, 
              fix what matters, and watch your ratings soar.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#cta" className="btn-primary text-lg px-8 py-4">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-secondary text-lg px-8 py-4">
                See How It Works
              </a>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {['KK', 'MN', 'JD', 'SR', 'AL'].map((initials, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-950 flex items-center justify-center text-xs font-bold text-white/60">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-500">Trusted by 200+ restaurants</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Hero visual */}
          <div className="relative">
            <div className="relative">
              {/* Main dashboard mockup */}
              <div className="glass p-6 rounded-3xl glow">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-slate-500">Pickd Dashboard</span>
                </div>
                
                {/* Sentiment score */}
                <div className="bg-slate-800/50 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">Overall Sentiment</span>
                    <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">+12% this month</span>
                  </div>
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-bold text-white">8.4</span>
                    <span className="text-slate-400 mb-2">/10</span>
                    <div className="flex-1 flex items-end gap-1 h-12">
                      {[40, 55, 45, 60, 50, 70, 65, 75, 80, 85, 78, 84].map((h, i) => (
                        <div key={i} className="flex-1 bg-emerald-500/30 rounded-t" style={{ height: `${h}%` }}>
                          <div className="w-full bg-emerald-500 rounded-t" style={{ height: '100%', opacity: 0.5 + (i * 0.04) }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Theme breakdown */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { theme: 'Food Quality', score: 9.2, trend: '+0.8' },
                    { theme: 'Service', score: 7.8, trend: '+1.2' },
                    { theme: 'Atmosphere', score: 8.5, trend: '+0.5' },
                    { theme: 'Value', score: 7.2, trend: '-0.3' },
                  ].map((item) => (
                    <div key={item.theme} className="bg-slate-800/30 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-slate-400">{item.theme}</span>
                        <span className={`text-xs ${item.trend.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>{item.trend}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-white">{item.score}</span>
                        <span className="text-xs text-slate-500">/10</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating notification cards */}
              <div className="absolute -right-4 top-1/4 glass-dark p-4 rounded-xl animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Sentiment Up</p>
                    <p className="text-xs text-slate-400">+18% this week</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-4 bottom-1/4 glass-dark p-4 rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Action Needed</p>
                    <p className="text-xs text-slate-400">3 new recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

// ============================================================================
// Problem Section
// ============================================================================
function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Fragmented Reviews',
      description: 'Reviews scattered across Google, TripAdvisor, Facebook, HelloPeter, and more. No single source of truth.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Time Consuming',
      description: 'Hours spent manually checking each platform, trying to understand what customers really think.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'No Clear Direction',
      description: 'Feedback without context. Which problems should you fix first? What will actually move the needle?',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'No Way to Measure',
      description: "You make changes but have no idea if they're working. Did that service training actually help?",
    },
  ]

  return (
    <section id="problem" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">The Problem</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your reviews are everywhere.<br />Your insights are nowhere.
          </h2>
          <p className="text-lg text-slate-400">
            Restaurant operators spend countless hours chasing reviews across platforms, 
            only to end up with more questions than answers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="group glass-dark p-6 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors">
                {problem.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
        
        {/* Visual representation of the chaos */}
        <div className="mt-20 relative">
          <div className="text-center mb-10">
            <p className="text-slate-500 text-sm">Reviews coming from everywhere...</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Google', color: 'bg-blue-500' },
              { name: 'TripAdvisor', color: 'bg-emerald-500' },
              { name: 'Facebook', color: 'bg-indigo-500' },
              { name: 'HelloPeter', color: 'bg-orange-500' },
              { name: 'Yelp', color: 'bg-red-500' },
              { name: 'Zomato', color: 'bg-pink-500' },
            ].map((platform) => (
              <div key={platform.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50">
                <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                <span className="text-sm text-slate-400">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Solution Section
// ============================================================================
function SolutionSection() {
  return (
    <section id="solution" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">The Solution</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              One dashboard.<br />
              <span className="gradient-text">Crystal clear insights.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Pickd aggregates reviews from every platform, analyzes sentiment and themes with AI, 
              and tells you exactly what to fix—in order of impact.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Unified Review Hub', description: 'All your reviews from every platform in one searchable, filterable dashboard.' },
                { title: 'AI-Powered Analysis', description: 'Automatic sentiment scoring and theme detection. Know what customers love and hate.' },
                { title: 'Prioritized Actions', description: 'Get recommendations ranked by impact. Fix high-severity issues first.' },
                { title: 'Track Your Progress', description: 'See how your changes affect sentiment over time. Proof that your work is paying off.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Solution visual */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-emerald-300">Intelligence Report</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Your Restaurant Name</h3>
                <p className="text-slate-500 text-sm">Based on 847 reviews across 4 platforms</p>
              </div>
              
              {/* TL;DR Section */}
              <div className="bg-slate-800/50 rounded-xl p-5 mb-6">
                <h4 className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  TL;DR
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>Food quality consistently praised, especially the signature dishes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-0.5">•</span>
                    <span>Service speed mentioned as pain point during peak hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>Atmosphere and ambience receiving positive mentions</span>
                  </li>
                </ul>
              </div>
              
              {/* Theme scores */}
              <div className="space-y-3">
                {[
                  { theme: 'Food Quality', score: 9.2, mentions: 423, color: 'bg-emerald-500' },
                  { theme: 'Service', score: 6.8, mentions: 312, color: 'bg-amber-500' },
                  { theme: 'Atmosphere', score: 8.5, mentions: 187, color: 'bg-emerald-500' },
                  { theme: 'Value for Money', score: 7.4, mentions: 156, color: 'bg-emerald-500' },
                ].map((item) => (
                  <div key={item.theme} className="flex items-center gap-4">
                    <div className="w-32 text-sm text-slate-400">{item.theme}</div>
                    <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                        style={{ width: `${item.score * 10}%` }} 
                      />
                    </div>
                    <div className="w-12 text-right">
                      <span className="text-white font-semibold">{item.score}</span>
                      <span className="text-slate-500 text-xs">/10</span>
                    </div>
                    <div className="w-20 text-right text-xs text-slate-500">{item.mentions} mentions</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Features Section
// ============================================================================
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: 'Auto-Ingest Reviews',
      description: 'Connect your platforms once. We pull new reviews automatically every night—or on demand.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Theme Detection',
      description: 'AI identifies what customers talk about: food, service, noise, parking, cleanliness, and 15+ more themes.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sentiment Scoring',
      description: "Every theme gets a 0-10 sentiment score. Instantly see what's working and what's broken.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Smart Recommendations',
      description: 'Get prioritized action items based on severity and impact. Know exactly what to fix first.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Progress Tracking',
      description: 'Mark tasks complete and watch sentiment shift. See before/after proof your changes work.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Beautiful Reports',
      description: 'Export polished PDF reports for stakeholders, investors, or franchise owners. Look professional.',
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32 bg-slate-900/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="gradient-text">rise to the top</span>
          </h2>
          <p className="text-lg text-slate-400">
            From ingestion to insights to action—Pickd handles the entire review intelligence lifecycle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group glass p-6 card-hover">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// How It Works Section
// ============================================================================
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Sources',
      description: 'Link your Google Business, TripAdvisor, Facebook, and other review platforms. Takes 5 minutes.',
      visual: (
        <div className="flex items-center justify-center gap-4">
          {['Google', 'Trip', 'FB', 'HP'].map((p) => (
            <div key={p} className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-600/50">
              {p}
            </div>
          ))}
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      ),
    },
    {
      number: '02',
      title: 'We Analyze Everything',
      description: "Our AI reads every review, detects themes, scores sentiment, and identifies patterns you'd miss.",
      visual: (
        <div className="space-y-2">
          {[
            { label: 'Sentiment Analysis', progress: 100 },
            { label: 'Theme Detection', progress: 85 },
            { label: 'Pattern Recognition', progress: 60 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-xs text-slate-400 w-28">{item.label}</span>
              <div className="flex-1 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full animate-pulse" style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: '03',
      title: 'Get Your Report',
      description: 'Receive a clear intelligence report with your top issues, what people love, and what needs fixing.',
      visual: (
        <div className="bg-slate-800/30 rounded-lg p-4 text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-400">Top Priority</span>
          </div>
          <p className="text-sm text-white font-medium">Reduce wait times during peak hours</p>
          <p className="text-xs text-slate-400 mt-1">Mentioned in 47 reviews • High impact</p>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Take Action & Track',
      description: 'Create tasks from recommendations, assign to your team, and watch your sentiment scores improve.',
      visual: (
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">6.8</div>
            <div className="text-xs text-slate-400">Before</div>
          </div>
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">8.4</div>
            <div className="text-xs text-slate-400">After</div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            From chaos to clarity in <span className="gradient-text">four steps</span>
          </h2>
          <p className="text-lg text-slate-400">
            Get up and running in minutes. Start seeing insights the same day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent -translate-x-4 z-0" />
              )}
              <div className="glass p-6 h-full relative z-10">
                <div className="text-4xl font-bold text-emerald-500/20 mb-4">{step.number}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{step.description}</p>
                <div className="mt-auto pt-4 border-t border-slate-700/50">
                  {step.visual}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Multi-Branch Section
// ============================================================================
function MultiBranchSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-900/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="glass p-6 rounded-3xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Branch Performance</h3>
                <select className="bg-slate-800 text-sm text-slate-300 rounded-lg px-3 py-1.5 border border-slate-700">
                  <option>All Branches</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Downtown Location', score: 8.9, reviews: 423, trend: '+0.8' },
                  { name: 'Mall Branch', score: 7.2, reviews: 287, trend: '-0.3' },
                  { name: 'Airport Terminal', score: 8.1, reviews: 156, trend: '+1.2' },
                  { name: 'Waterfront', score: 8.5, reviews: 312, trend: '+0.5' },
                ].map((branch, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">{branch.name}</span>
                        <span className={`text-sm ${branch.trend.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {branch.trend}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>Score: <span className="text-white">{branch.score}</span>/10</span>
                        <span>{branch.reviews} reviews</span>
                      </div>
                    </div>
                    <div className="w-16">
                      <div className="h-8 flex items-end gap-0.5">
                        {[60, 70, 65, 80, 75, 85].map((h, i) => (
                          <div key={i} className="flex-1 bg-emerald-500/50 rounded-t" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Heatmap preview */}
              <div className="mt-6 p-4 bg-slate-800/30 rounded-xl">
                <div className="text-sm text-slate-400 mb-3">Issue Heatmap Across Branches</div>
                <div className="grid grid-cols-5 gap-1 text-xs">
                  <div className="text-slate-500"></div>
                  {['DT', 'Mall', 'Air', 'WF'].map((b) => (
                    <div key={b} className="text-center text-slate-400">{b}</div>
                  ))}
                  {['Service', 'Food', 'Wait', 'Clean'].map((theme, themeIdx) => (
                    <div key={theme} className="contents">
                      <div className="text-slate-400">{theme}</div>
                      {[0, 1, 2, 3].map((i) => {
                        const colors = ['bg-emerald-500', 'bg-amber-500', 'bg-emerald-500/50', 'bg-emerald-500'];
                        return (
                          <div key={`${theme}-${i}`} className={`h-6 rounded ${colors[(themeIdx + i) % 4]}`} style={{ opacity: 0.5 + (i * 0.15) }} />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">For Franchise Operators</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              One dashboard for <span className="gradient-text">all your locations</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Managing multiple branches? Compare performance across locations, identify which branches 
              need attention, and roll up reports for stakeholders.
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'Branch Comparisons', description: 'See which locations are thriving and which need help at a glance.' },
                { title: 'Roll-up Reports', description: 'Aggregate insights across all branches for executive summaries.' },
                { title: 'Issue Heatmaps', description: 'Visualize problem areas across your entire operation.' },
                { title: 'Per-Branch Tasks', description: 'Assign location-specific action items to the right managers.' },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Testimonials Section
// ============================================================================
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We went from drowning in reviews to having a clear action plan in one afternoon. Our service scores jumped 1.5 points in two months.",
      author: "Sarah M.",
      role: "Owner, The Garden Bistro",
      avatar: "SM",
    },
    {
      quote: "Managing 12 locations used to be a nightmare. Now I can see exactly which branches need attention and why. Game changer.",
      author: "James K.",
      role: "Operations Director, Urban Eats Group",
      avatar: "JK",
    },
    {
      quote: "The before/after tracking is incredible. We can actually prove to investors that our improvements are working.",
      author: "Michelle R.",
      role: "GM, Coastal Kitchen",
      avatar: "MR",
    },
  ]

  return (
    <section className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Restaurants that got <span className="gradient-text">Pickd first</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass p-8 card-hover">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// CTA Section
// ============================================================================
function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Ready to get <span className="gradient-text">Pickd first</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of restaurants using Pickd to understand their customers better, 
            fix what matters, and rise to the top.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#" className="btn-primary text-lg px-10 py-5">
              Start Your Free Trial
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#" className="btn-secondary text-lg px-10 py-5">
              Book a Demo
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Setup in 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// Footer
// ============================================================================
function Footer() {
  return (
    <footer className="py-16 border-t border-slate-800">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Pickd</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              Review intelligence that helps restaurants understand what customers really think and take action to improve.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'facebook'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'API', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Pickd. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made with <span className="text-emerald-400">♥</span> for restaurant operators everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
