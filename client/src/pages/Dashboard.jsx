import { useEffect, useState } from "react";
import { FaUser, FaGift, FaHandHoldingUsd, FaTshirt, FaMedal, FaChartLine } from "react-icons/fa";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://fundraising-intern-portal-dmfh.onrender.com/api/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-blue-600 p-2 rounded-full">
              <FaHandHoldingUsd className="text-xl" />
            </div>
            <h1 className="text-2xl font-bold">Helping Hands NGO</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-full">
              <FaUser />
            </div>
            <span className="hidden sm:inline">Volunteer Dashboard</span>
            <a
              href="/leaderboard"
              className="ml-4 bg-white text-blue-600 hover:bg-blue-100 transition px-4 py-2 rounded-xl text-sm font-semibold shadow-sm"
            >
              View Leaderboard
            </a>
            {/* Login Button */}
            <a
              href="/"
              className="ml-2 bg-white text-blue-600 hover:bg-blue-100 transition px-4 py-2 rounded-xl text-sm font-semibold shadow-sm"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Welcome back, {userData ? userData.name.split(' ')[0] : 'Volunteer'}!
          </h1>
          <p className="text-gray-600 mt-2">
            Your contributions are making a real difference in our community
          </p>
        </div>

        {userData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* User Stats Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:col-span-2">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-xl font-bold text-gray-800">Your Profile</h2>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                        <FaUser />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{userData.name}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                        <FaGift />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Referral Code</p>
                        <p className="font-medium">{userData.referral}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-amber-100 text-amber-600 p-2 rounded-lg mr-3">
                        <FaHandHoldingUsd />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Donation</p>
                        <p className="font-medium">₹{userData.donation.toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                        <FaMedal />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Volunteer Level</p>
                        <p className="font-medium">{userData.level}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4">Your Impact</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-white/20 mr-3">
                      <FaHandHoldingUsd />
                    </div>
                    <div>
                      <p className="text-sm">Funds Raised</p>
                      <p className="font-bold text-lg">₹{userData.donation.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">+24% this month</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-white/20 mr-3">
                      <FaUser />
                    </div>
                    <div>
                      <p className="text-sm">Volunteers Recruited</p>
                      <p className="font-bold text-lg">{userData.volunteers}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">+3 this week</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-white/20 mr-3">
                      <FaChartLine />
                    </div>
                    <div>
                      <p className="text-sm">Projects Supported</p>
                      <p className="font-bold text-lg">{userData.projects}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">Active in 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rewards Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:col-span-3">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Your Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-blue-200 rounded-xl p-4 flex items-center bg-blue-50">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    <FaTshirt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Exclusive T-Shirt</h3>
                    <p className="text-sm text-gray-600 mt-1">Unlocked at ₹10,000 donations</p>
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Unlocked 🎉
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-amber-200 rounded-xl p-4 flex items-center bg-amber-50">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-lg mr-4">
                    <FaMedal className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Letter of Recommendation</h3>
                    <p className="text-sm text-gray-600 mt-1">Available at Gold level</p>
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Eligible ✨
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border border-purple-200 rounded-xl p-4 flex items-center bg-purple-50">
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4">
                    <FaGift className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">VIP Event Access</h3>
                    <p className="text-sm text-gray-600 mt-1">Unlock at ₹25,000 donations</p>
                    <div className="mt-2">
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        50% Complete
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse">
              <div className="bg-gray-200 rounded-xl w-16 h-16 mx-auto"></div>
              <p className="mt-4 text-center text-gray-600">Loading your impact data...</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-8 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Helping Hands NGO. Making the world a better place.</p>
          <p className="mt-2 text-sm">Your contributions have helped 1,240+ people this year</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;