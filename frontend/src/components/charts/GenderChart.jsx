const GenderChart = () => {
  const genders = [
    { name: 'Male', value: 66, color: '#5e2ced' },
    { name: 'Female', value: 34, color: '#FF0A78' }
  ]
  const total = genders.reduce((sum, g) => sum + g.value, 0)
  let cumulativePercentage = 0

  return (
    <div className="bg-white p-6 rounded-lg shadow-card border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-600 text-text-black">Gender split</h3>
        <button className="text-gray-400 hover:text-primary transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center h-40">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
            {genders.map((g, index) => {
              const percentage = (g.value / total) * 100
              const strokeDasharray = `${percentage * 0.75} ${100 * 0.75 - percentage * 0.75}`
              const strokeDashoffset = -cumulativePercentage * 0.75
              cumulativePercentage += percentage
              return (
                <circle
                  key={index}
                  cx="16"
                  cy="16"
                  r="12"
                  fill="none"
                  stroke={g.color}
                  strokeWidth="8"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              )
            })}
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-6">
        {genders.map((g, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: g.color }}></div>
            <span className="text-xs font-400 text-body-color flex-1">{g.name}</span>
            <span className="text-xs font-500 text-text-black">{g.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GenderChart