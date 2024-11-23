import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import RightSidebar from './components/RightSidebar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            <Sidebar />
            
            <main className="flex-1 min-w-0">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-bold">Top Questions</h1>
                        <button className="px-4 py-2 text-sm text-white bg-[#0a95ff] hover:bg-[#0074cc] rounded-md">
                          Ask Question
                        </button>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
                        <button className="px-3 py-1.5 text-gray-600 bg-white hover:bg-gray-50 border border-gray-300 rounded-md">
                          Interesting
                        </button>
                        <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                          Featured
                        </button>
                        <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                          Hot
                        </button>
                        <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                          Week
                        </button>
                        <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                          Month
                        </button>
                      </div>
                      
                      <QuestionList />
                    </>
                  }
                />
                <Route path="/questions/:id" element={<QuestionDetail />} />
              </Routes>
            </main>

            <RightSidebar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;