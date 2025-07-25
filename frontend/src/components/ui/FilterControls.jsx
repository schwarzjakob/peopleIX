const FilterControls = () => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm font-400 text-body-color focus:border-primary focus:outline-none transition-colors">
        <option>Select department</option>
      </select>
      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm font-400 text-body-color focus:border-primary focus:outline-none transition-colors">
        <option>Select office</option>
      </select>
      <select className="px-3 py-2 border border-gray-300 rounded-md text-sm font-400 text-body-color focus:border-primary focus:outline-none transition-colors">
        <option>Select gender</option>
      </select>
      <button className="px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center gap-2 font-400 text-body-color hover:border-primary hover:text-primary transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add filter
      </button>
    </div>
  )
}

export default FilterControls