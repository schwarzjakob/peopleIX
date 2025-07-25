const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-0 py-4 w-full">
      <div className="flex items-center justify-between max-w-full px-6">
        <div className="flex items-center gap-6">
          <img src="/peopleIX_Icon.svg" alt="peopleIX Logo" className="w-8 h-8" />
          <button className="flex items-center gap-1 text-sm text-body-color font-500 hover:text-primary transition-colors focus:outline-none">
            Insights
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex items-center gap-1 text-sm text-body-color font-500 hover:text-primary transition-colors focus:outline-none">
            Boards
            <div className="w-4 h-4 bg-primary rounded-full text-xs text-white flex items-center justify-center ml-1">5</div>
          </button>
          <button className="flex items-center gap-1 text-sm text-body-color font-500 hover:text-primary transition-colors focus:outline-none">
            Data health
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex items-center gap-1 text-sm text-body-color font-500 hover:text-primary transition-colors focus:outline-none">
            Employees
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-80">
            <input 
              type="text" 
              placeholder="Search"
              className="pl-8 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full font-400 focus:border-primary focus:outline-none transition-colors"
            />
            <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <img src="/portrait.jpg" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-500 text-text-black leading-tight">Jakob</span>
            <span className="text-xs text-body-color font-300 leading-tight">Playground Research</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header