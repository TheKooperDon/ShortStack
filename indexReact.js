const { useState, useEffect } = React;

function Index() {
  const [userName, setUserName] = useState("");
  const [isFirstTime, setIsFirstTime] = useState(false);
  const [lastWorkout, setLastWorkout] = useState(null);

  useEffect(() => {
    // Check if user has set up their name
    const storedName = localStorage.getItem('userName');
    if (!storedName) {
      setIsFirstTime(true);
    } else {
      setUserName(storedName);
    }

    // Find last workout date
    const keys = Object.keys(localStorage).filter(key => key.startsWith('workout_'));
    if (keys.length > 0) {
      keys.sort().reverse();
      setLastWorkout(keys[0].replace('workout_', ''));
    }
  }, []);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    if (name) {
      localStorage.setItem('userName', name);
      setUserName(name);
      setIsFirstTime(false);
    }
  };

  // First-time setup view
  if (isFirstTime) {
    return (
      <main className="flex-1 p-6 flex flex-col gap-8 justify-center items-center text-center">
        <section className="mb-2">
          <h2 className="text-2xl font-semibold mb-2">Welcome to ShortStack</h2>
          <p className="text-lg text-gray-700">Your personal workout tracker</p>
        </section>
        
        <section className="w-full max-w-xs">
          <form onSubmit={handleNameSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-2">What's your name?</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                autoFocus
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </form>
        </section>

        <section className="w-full max-w-xs">
          <h3 className="text-lg font-semibold mb-2">What you'll get:</h3>
          <ul className="text-left text-gray-700 list-disc list-inside space-y-1">
            <li>Quick workout logging</li>
            <li>Progress tracking</li>
            <li>Personal stats</li>
            <li>Workout history</li>
          </ul>
        </section>
      </main>
    );
  }

  // Main dashboard view
  return (
    <main className="flex-1 p-6 flex flex-col gap-8 justify-center items-center text-center">
      <section className="mb-2">
        <h2 className="text-2xl font-semibold mb-2">Welcome back, <span className="text-blue-700">{userName}</span>!</h2>
        <p className="text-lg text-gray-700">Ready to log your next workout?</p>
      </section>
      
      <section className="flex flex-col gap-3 w-full max-w-xs mb-2">
        <a href="logger.html" className="w-full">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition">Log Workout</button>
        </a>
        <a href="profile.html" className="w-full">
          <button className="w-full bg-gray-200 text-blue-700 py-2 rounded-lg text-lg font-semibold shadow hover:bg-blue-300 transition">View Profile</button>
        </a>
      </section>
      
      <section className="bg-gray-50 rounded-lg p-4 shadow-inner w-full max-w-xs flex flex-col items-center mb-2">
        <h3 className="text-lg font-semibold mb-1">Quick Stats</h3>
        {lastWorkout ? (
          <p className="mb-2 text-gray-700">Last workout: <span className="font-semibold">{lastWorkout}</span></p>
        ) : (
          <p className="mb-2 text-gray-700">No workouts logged yet. Let's get started!</p>
        )}
      </section>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);