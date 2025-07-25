# peopleIX - AI-Powered HR Analytics Platform

peopleIX is a modern HR analytics dashboard that transforms raw HR data into actionable insights through interactive visualizations and AI-powered natural language queries. Think "ChatGPT for HR data" - ask questions like "Why was engineering churn high last quarter?" and get data-driven insights with recommendations.

## What We Do

**Current Capabilities:**
- 📊 Interactive HR dashboard with KPI cards and charts
- 🎨 Modern, responsive UI with professional design system
- 📈 Department, office, gender, and contract type visualizations

**Vision:**
- 🤖 Natural language querying of HR data ("Show me satisfaction trends in engineering")
- 💡 AI-powered insights and recommendations for HR decisions
- 🔍 Predictive analytics for employee retention and satisfaction
- 📋 Automated reporting and trend analysis

## What We Do Next - Development Checklist

### Phase 1: Functional Frontend ⏳
- [ ] Add chart libraries (Chart.js/Recharts) for interactive visualizations
- [ ] Implement state management for filters and data
- [ ] Create working filter controls (department, office, gender dropdowns)
- [ ] Add mock data service to simulate backend responses
- [ ] Make KPI cards display dynamic data based on filters

### Phase 2: Backend & Database 📅
- [ ] Create Python/FastAPI backend structure
- [ ] Set up PostgreSQL database with Docker
- [ ] Design HR database schema (employees, departments, performance, etc.)
- [ ] Implement REST API endpoints for data retrieval
- [ ] Add data seeding scripts with realistic HR sample data

### Phase 3: AI Integration 🤖
- [ ] Create chat interface component for natural language queries
- [ ] Set up LLM integration (OpenAI/Anthropic API)
- [ ] Implement context system for HR data queries
- [ ] Create prompt templates for common HR analytics questions
- [ ] Add recommendation engine for actionable insights

### Phase 4: Advanced Features 🚀
- [ ] Implement user authentication and role-based access
- [ ] Add real-time data synchronization
- [ ] Create exportable reports and dashboards
- [ ] Implement predictive analytics models
- [ ] Add integration with common HRIS systems

## Quick Start

```bash
# Frontend development
cd frontend
npm install
npm run dev
# Visit http://localhost:5173
```

## Current Status

✅ **Completed**: Static frontend with professional UI design  
⏳ **In Progress**: Adding interactive functionality and chart libraries  
📅 **Next**: Backend API and database setup  

## Technology Stack

**Frontend:** React 18, Vite, Tailwind CSS, Chart.js  
**Backend:** Python 3.11+, FastAPI, PostgreSQL  
**AI/ML:** OpenAI/Anthropic APIs, Custom analytics models  
**Infrastructure:** Docker, PostgreSQL

## Example AI Queries (Future)

- *"What are the main reasons for high churn in engineering last quarter?"*
- *"Which teams need urgent attention for employee satisfaction?"*
- *"Show me diversity trends across departments over the past year"*
- *"What factors correlate with high-performing employees?"*
- *"Generate recommendations to improve retention in sales"*

---

*Continue development by working through the checklist above. Each phase builds on the previous one to create a comprehensive AI-powered HR analytics platform.*