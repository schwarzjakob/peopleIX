const DepartmentsChart = () => {
  const departments = [
    { name: 'Engineering & Development', value: 193 },
    { name: 'Sales', value: 129 },
    { name: 'Sales', value: 127 },
    { name: 'Product & Customer Support', value: 72 },
    { name: 'Support', value: 65 },
    { name: 'Operations', value: 57 },
    { name: 'Marketing', value: 44 },
    { name: 'Finance', value: 29 },
    { name: 'People & Culture', value: 18 },
    { name: 'Legal & Compliance', value: 15 },
    { name: 'Management', value: 12 }
  ]

  const maxValue = Math.max(...departments.map(d => d.value))

  return (
    <div className="bg-white p-6 rounded-lg shadow-card border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-600 text-text-black">Departments</h3>
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
        {departments.map((dept, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-sm font-500 text-text-black w-40 text-right">{dept.name}</span>
            <div className="flex-1 bg-gray-200 rounded-full h-7 relative">
              <div 
                className="bg-primary h-7 rounded-full flex items-center justify-end pr-3 transition-all duration-300"
                style={{ width: `${(dept.value / maxValue) * 100}%` }}
              >
                <span className="text-white text-sm font-500">{dept.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DepartmentsChart