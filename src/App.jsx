import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BOMsOverview from './BOMsOverview';
import BOMsOverviewView from './BOMsOverviewView';
import BOMsOverviewEdit from './BOMsOverviewEdit';
import BOMsOverviewAdd from './BOMsOverviewAdd';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<div>Welcome to the Home Page</div>} />
            <Route path="/boms-overview" element={<BOMsOverview />} />
            <Route path="/boms-overview-view" element={<BOMsOverviewView />} />
            <Route path="/boms-overview-edit" element={<BOMsOverviewEdit />} />
            <Route path="/boms-overview-add" element={<BOMsOverviewAdd />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
