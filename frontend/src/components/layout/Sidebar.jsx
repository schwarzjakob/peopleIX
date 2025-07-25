const Sidebar = () => {
  const menuItems = [
    { name: 'Overview', active: true },
    { name: 'Headcount' },
    { name: 'Tenure & age' },
    { name: 'Span & layers' },
    { name: 'Sick days' },
    { name: 'Vacation days' },
    { name: 'Absence' },
    { name: 'Recruiting', badge: true },
    { name: 'Retention', badge: true },
    { name: 'DEI', badge: true },
    { name: 'Performance' },
    { name: 'Engagement' },
    { name: 'Compensation' }
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
      <div className="p-6">
        <h3 className="text-xs font-600 text-body-color uppercase tracking-wider mb-4">FAVORITES</h3>
        <p className="text-sm font-300 text-body-color mb-8">Add favorites with ⭐</p>
        
        <h3 className="text-xs font-600 text-body-color uppercase tracking-wider mb-4">STORYBOARDS</h3>
        <p className="text-sm font-300 text-body-color mb-8">Create storyboards with ➕</p>
        
        <h3 className="text-xs font-600 text-body-color uppercase tracking-wider mb-4">DISCOVER</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-500 text-text-black">👥 People</span>
        </div>
        
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex items-center justify-between px-3 py-2 text-sm rounded-md cursor-pointer transition-all ${
              item.active ? 'bg-primary text-white' : 'text-body-color hover:bg-gray-bg hover:text-primary'
            }`}>
              <span className="font-400">{item.name}</span>
              {item.badge && (
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              )}
            </div>
          ))}
        </nav>
        
        <h3 className="text-xs font-600 text-body-color uppercase tracking-wider mt-8 mb-4">SHARED</h3>
        <p className="text-sm font-300 text-body-color">No boards have been shared with you</p>
      </div>
    </div>
  )
}

export default Sidebar