import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-100 p-4">

            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="mx-auto bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800">Helping Hands</h1>
                    <p className="text-blue-600 mt-1">NGO Volunteer Portal</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Login to Your Account</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="your.email@example.com"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-medium shadow-md hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:-translate-y-0.5"
                            >
                                Sign In
                            </button>
                        </form>
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard")}
                            className="w-full mt-4 bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 rounded-lg font-medium shadow-md hover:from-gray-600 hover:to-gray-800 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            Go to Dashboard
                        </button>
                    </div>

                    <div className="bg-gray-50 px-8 py-6">
                        <div className="text-center">
                            <p className="text-gray-600">
                                Don't have an account?{" "}
                                <span
                                    className="text-blue-600 font-medium cursor-pointer hover:underline"
                                    onClick={() => navigate("/signup")}
                                >
                                    Register now
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Helping Hands NGO. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;