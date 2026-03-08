import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+44 (0)20 7123 4567",
    address: "123 High Street, London, UK",
    joinDate: "2025-01-15",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="Profile" showNavLinks={false} />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-6">
            <Link
              to="/dashboard"
              className="text-gray-600 hover:text-gray-900 text-sm flex items-center"
            >
              ← Back to Dashboard
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {user.name}
                    </h2>
                    <p className="text-gray-600">Store Owner</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">Email</label>
                      <p className="text-gray-900">{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Phone</label>
                      <p className="text-gray-900">{user.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Address</label>
                      <p className="text-gray-900">{user.address}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t mt-6 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Account Information
                  </h3>
                  <div>
                    <label className="text-sm text-gray-600">
                      Member Since
                    </label>
                    <p className="text-gray-900">
                      {new Date(user.joinDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="border-t mt-6 pt-6 flex space-x-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Edit Profile
                  </button>
                  <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300">
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Account Status
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-600">
                        Account Health
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        100%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">✓ Email verified</p>
                    <p className="text-sm text-gray-600">✓ Phone verified</p>
                    <p className="text-sm text-gray-600">
                      ✓ Payment method added
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Settings
                </h3>
                <button className="w-full text-red-600 hover:text-red-800 text-left text-sm">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
