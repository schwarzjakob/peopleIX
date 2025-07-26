import { useState } from 'react'
import Header from './layout/Header'
import Sidebar from './layout/Sidebar'
import FilterControls from './ui/FilterControls'
import KPICards from './ui/KPICards'
import DepartmentsChart from './charts/DepartmentsChart'
import OfficesChart from './charts/OfficesChart'
import GenderChart from './charts/GenderChart'
import ContractTypesChart from './charts/ContractTypesChart'
import ChatBar from './chat/ChatBar'
import TIRAAnswer from './chat/TIRAAnswer'

const Dashboard = () => {
  return (
    <div className="h-screen bg-gray-bg flex flex-col font-sans">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-0">
          <MainContent />
        </div>
      </div>
    </div>
  )
}

const MainContent = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4 mb-6 relative">
          <h1 className="text-xl font-600 flex items-center gap-2 text-center mx-auto text-text-black">
            👥 People
          </h1>
          <div className="absolute right-0 flex items-center gap-2">
            <button className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-4 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6l-4-4-4 4m4-4v16" />
              </svg>
            </button>
          </div>
        </div>
        
        {!showAnswer && <FilterControls />}
      </div>
      
      <ChatBar onAsk={() => setShowAnswer(true)} />
      
      {showAnswer ? (
        <TIRAAnswer onClose={() => setShowAnswer(false)} />
      ) : (
        <>
          <KPICards />
          <Charts />
        </>
      )}
    </div>
  )
}

const Charts = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <DepartmentsChart />
      <OfficesChart />
      <GenderChart />
      <ContractTypesChart />
    </div>
  )
}

export default Dashboard