const KPICards = () => {
  const kpis = [
    { title: 'Headcount (today)', value: '761', subtitle: 'As of today' },
    { title: 'FTE (today)', value: '745.5', subtitle: 'As of today' },
    { title: 'New joiners (last 3 months)', value: '71', subtitle: 'As of last 3 months from today' },
    { title: 'Exits (last 3 months)', value: '86', subtitle: 'As of last 3 months from today' }
  ]

  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-card border-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-body-color">{kpi.title}</h3>
            <button className="text-gray-400 hover:text-primary transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
          <div className="text-3xl font-bold text-text-black mb-1 font-700">{kpi.value}</div>
          <div className="text-xs text-body-color font-300">{kpi.subtitle}</div>
        </div>
      ))}
    </div>
  )
}

export default KPICards