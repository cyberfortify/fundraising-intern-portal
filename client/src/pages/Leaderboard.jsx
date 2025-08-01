import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Leaderboard = () => {
  const [topInterns, setTopInterns] = useState([]);
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    axios.get("https://fundraising-intern-portal-dmfh.onrender.com/api/leaderboard")
      .then((res) => setTopInterns(res.data))
      .catch((err) => console.error("Error fetching leaderboard data:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Dashboard
          </button>
        </div>

        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Community Impact Leaderboard
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognizing our top volunteers who are making a difference through donations and community engagement
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Leaderboard Header */}
          <div className="grid grid-cols-12 gap-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 font-semibold">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-5">Volunteer</div>
            <div className="col-span-3 text-center">Donation Impact</div>
            <div className="col-span-3 text-center">Recruitment</div>
          </div>

          {/* Leaderboard List */}
          <ul>
            {topInterns.map((intern, index) => (
              <li
                key={index}
                className={`grid grid-cols-12 gap-4 items-center py-5 px-6 border-b border-gray-100 last:border-0
                  ${index < 3 ? "bg-gradient-to-r from-blue-50/50 to-cyan-50/50" : "hover:bg-gray-50"}`}
              >
                {/* Rank */}
                <div className="col-span-1 flex justify-center">
                  {index === 0 ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center text-white font-bold">
                      <span className="drop-shadow">🥇</span>
                    </div>
                  ) : index === 1 ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold">
                      <span className="drop-shadow">🥈</span>
                    </div>
                  ) : index === 2 ? (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white font-bold">
                      <span className="drop-shadow">🥉</span>
                    </div>
                  ) : (
                    <div className="text-gray-500 font-medium">{index + 1}</div>
                  )}
                </div>

                {/* Volunteer Info */}
                <div className="col-span-5 flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                  <div>
                    <div className="font-medium text-gray-800">{intern.name}</div>
                    <div className="text-sm text-gray-500">Volunteer #{index + 128}</div>
                  </div>
                </div>

                {/* Donation Progress */}
                <div className="col-span-3">
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-xs">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">₹{intern.donation}</span>
                        <span className="text-blue-600 font-medium">{intern.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${index === 0 ? "bg-gradient-to-r from-yellow-400 to-yellow-500" :
                              index === 1 ? "bg-gradient-to-r from-gray-300 to-gray-400" :
                                index === 2 ? "bg-gradient-to-r from-amber-600 to-amber-700" :
                                  "bg-gradient-to-r from-blue-500 to-teal-500"
                            }`}
                          style={{ width: `${intern.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recruitment */}
                <div className="col-span-3 text-center">
                  <div className="inline-flex items-center bg-green-50 text-green-700 py-1 px-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-medium">{intern.volunteers} recruited</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold">₹{topInterns.reduce((sum, intern) => sum + intern.donation, 0).toLocaleString()}</div>
            <div className="mt-1">Total Funds Raised</div>
            <div className="flex items-center mt-3 text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              +24% from last month
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold">{topInterns.reduce((sum, intern) => sum + intern.volunteers, 0)}+</div>
            <div className="mt-1">Volunteers Recruited</div>
            <div className="flex items-center mt-3 text-teal-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Growing community
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold">7</div>
            <div className="mt-1">Active Projects</div>
            <div className="flex items-center mt-3 text-amber-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              3 new initiatives
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} Helping Hands NGO. Every contribution makes a difference.</p>
          <p className="mt-2">Leaderboard updates weekly • Last updated: Today</p>
        </footer>
      </div>
    </div>
  );
};

export default Leaderboard;