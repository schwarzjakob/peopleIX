const OfficesChart = () => {
  const offices = [
    { name: 'Lyon', value: 151 },
    { name: 'Berlin', value: 142 },
    { name: 'Munich', value: 135 },
    { name: 'Konstanz', value: 131 },
    { name: 'Cologne', value: 115 },
    { name: 'Lisbon', value: 86 }
  ]

  const maxValue = Math.max(...offices.map(o => o.value))

  return (
    <div className="bg-white p-6 rounded-lg shadow-card border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-600 text-text-black">Offices</h3>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-primary transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-primary rounded-sm"></div>
            <span className="text-sm text-body-color font-400">Number of employees</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {offices.map((office, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-sm font-500 text-text-black w-20 text-right">{office.name}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-7 relative">
              <div 
                className="bg-primary h-7 rounded-full flex items-center justify-end pr-3 transition-all duration-300"
                style={{ width: `${(office.value / maxValue) * 100}%` }}
              >
                <span className="text-white text-sm font-500">{office.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfficesChart