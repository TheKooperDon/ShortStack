// loggerReact.js
// ===========================
// React Logger Component for Short Stack
// ===========================
// This file contains the main workout logger UI and logic using React.
// It handles exercise selection, set logging, local state, and localStorage saving.

const { useState } = React;

// Helper function to format dates consistently as MM/DD/YYYY
function formatDateMMDDYYYY(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// ===========================
// 🧠 Exercise Map: All Exercises Grouped by Category
// ===========================
const exerciseMap = {
  // CHEST EXERCISES
  "Cable Fly": "Chest",
  "Barbell Bench Press": "Chest",
  "Dumbbell Bench Press": "Chest",
  "Incline Barbell Bench Press": "Chest",
  "Decline Barbell Bench Press": "Chest",
  "Dumbbell Fly": "Chest",
  "Push Ups": "Chest",
  "Diamond Push Ups": "Chest",
  "Chest Press Machine": "Chest",
  "Pec Deck Machine": "Chest",
  "Dips": "Chest",
  
  // BACK EXERCISES
  "Barbell Row": "Back",
  "Pull Ups": "Back",
  "Chin Ups": "Back",
  "Lat Pulldown": "Back",
  "T-Bar Row": "Back",
  "Seated Cable Row": "Back",
  "Single Arm Dumbbell Row": "Back",
  "Face Pulls": "Back",
  "Deadlift": "Back",
  "Romanian Deadlift": "Back",
  
  // SHOULDER EXERCISES
  "Shoulder Press": "Shoulders",
  "Lateral Raise": "Shoulders",
  "Front Raise": "Shoulders",
  "Rear Delt Fly": "Shoulders",
  "Arnold Press": "Shoulders",
  "Upright Row": "Shoulders",
  
  // ARM EXERCISES
  "Hammer Curls": "Arms",
  "Barbell Curls": "Arms",
  "Dumbbell Curls": "Arms",
  "Preacher Curls": "Arms",
  "Dips": "Arms",
  "Tricep Pushdowns": "Arms",
  "Skull Crushers": "Arms",
  
  // LEG EXERCISES
  "Barbell Squat": "Legs",
  "Goblet Squat": "Legs",
  "Leg Press": "Legs",
  "Romanian Deadlift": "Legs",
  "Leg Extensions": "Legs",
  "Leg Curls": "Legs",
  "Calf Raises": "Legs",
  
  // CORE EXERCISES
  "Plank": "Core",
  "Crunches": "Core",
  "Russian Twists": "Core",
  "Hanging Leg Raises": "Core",
  "Mountain Climbers": "Core",
  "Cable Woodchoppers": "Core"
};

// Helper to group exercises by muscle group
function groupExercisesByCategory(map) {
  const grouped = {};
  for (let exercise in map) {
    const group = map[exercise];
    if (!grouped[group]) grouped[group] = [];
    grouped[group].push(exercise);
  }
  return grouped;
}

// ===========================
// 💪 Logger Component
// ===========================
function Logger() {
  // State hooks for UI and form
  const groupedExercises = groupExercisesByCategory(exerciseMap);
  const [selectedGroup, setSelectedGroup] = useState(""); // Muscle group selected
  const [exercise, setExercise] = useState(""); // Exercise selected
  const [weight, setWeight] = useState(""); // Weight input
  const [reps, setReps] = useState(""); // Reps input
  const [log, setLog] = useState([]); // List of sets for this session
  const [lastSet, setLastSet] = useState(null); // Last set added (for repeat)
  const [summary, setSummary] = useState(""); // Workout summary after saving
  const [showPad, setShowPad] = useState(false); // Show/hide quick weight pad

  // Add a set to the log
  function addSet(e) {
    e.preventDefault();
    if (!exercise || !weight || !reps) return;
    const newSet = { exercise, weight: Number(weight), reps: Number(reps) };
    setLog([...log, newSet]);
    setLastSet(newSet);
    setExercise("");
    setWeight("");
    setReps("");
  }

  // Repeat the last set
  function repeatSet() {
    if (!lastSet) return;
    setLog([...log, lastSet]);
  }

  // Finish workout: group sets, calculate stats, save to localStorage
  function finishWorkout() {
    if (log.length === 0) {
      alert("Bruh... log at least one set.");
      return;
    }
    // Group sets by unique (exercise, weight, reps)
    const grouped = {};
    let totalSets = 0, totalReps = 0, totalVolume = 0;
    log.forEach(({ exercise, weight, reps }) => {
      const key = `${exercise}|${weight}|${reps}`;
      if (!grouped[key]) {
        grouped[key] = { exercise, weight, reps, sets: 1 };
      } else {
        grouped[key].sets++;
      }
    });
    // Calculate totals
    for (const entry of Object.values(grouped)) {
      totalSets += entry.sets;
      totalReps += entry.reps * entry.sets;
      totalVolume += entry.reps * entry.weight * entry.sets;
    }
    const today = new Date().toLocaleDateString();
    setSummary(`Workout saved for ${today} — ${totalSets} sets, ${totalReps} reps, ${totalVolume} lbs lifted.`);
    // Save to localStorage by date using consistent YYYY-MM-DD format
    const d = new Date();
    const dateKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    localStorage.setItem(`workout_${dateKey}`, JSON.stringify(grouped));
    alert("Workout saved! 💾 Time to go flex 💪");
  }

  // Handle quick weight pad selection
  function handlePad(val) {
    if (val === "Clear") setWeight("");
    else setWeight(val);
    setShowPad(false);
  }

  // ===========================
  // 🖼️ Render Logger UI
  // ===========================
  return (
    <div className="w-full">
      {/* Page Title */}
      <h2 className="text-center text-2xl font-semibold mb-4">Log Workout</h2>
      {/* Workout Form */}
      <form onSubmit={addSet} className="w-full max-w-[400px] mx-auto">
        {/* Muscle Group Selection */}
        <div className="flex flex-col items-center mb-4 w-full">
          <label className="text-center mb-1">Select Muscle Group:</label>
          <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
            {Object.keys(groupedExercises).map(group => (
              <button
                type="button"
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`flex-1 min-w-[90px] px-3 py-2 rounded font-medium border border-gray-300 bg-gray-100 hover:bg-gray-200 transition ${selectedGroup === group ? 'bg-blue-200 border-blue-400' : ''}`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>
        {/* Exercise Dropdown */}
        <div className="flex flex-col items-center mb-4 w-full">
          <label htmlFor="exercise" className="mb-1">Exercise:</label>
          <select
            id="exercise"
            name="exercise"
            value={exercise}
            onChange={e => setExercise(e.target.value)}
            required
            className="w-full max-w-xs px-2 py-2 border border-gray-300 rounded text-center"
          >
            <option value="">
              {selectedGroup
                ? `-- Select ${selectedGroup} Exercise --`
                : "-- Select a muscle group first --"}
            </option>
            {selectedGroup && groupedExercises[selectedGroup].map(ex => (
              <option key={ex} value={ex}>{ex}</option>
            ))}
          </select>
        </div>
        {/* Weight Input & Quick Pad */}
        <div className="flex flex-col items-center mb-4 w-full">
          <label htmlFor="weight" className="mb-1">Weight (lbs):</label>
          <div className="flex justify-center items-center gap-2 w-full mb-2">
            {/* Decrease weight */}
            <button type="button" onClick={() => setWeight(w => Math.max(0, Number(w) - 5))} className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">-</button>
            {/* Weight input */}
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              className="flex-1 max-w-[100px] text-center text-lg p-2 border border-gray-300 rounded"
            />
            {/* Increase weight */}
            <button type="button" onClick={() => setWeight(w => Number(w) + 5)} className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">+</button>
          </div>
          {/* Quick Pick Pad Toggle */}
          <button type="button" className="flex-0 max-w-[150px] px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={() => setShowPad(p => !p)}>Quick Pick</button>
          {/* Quick Pick Pad */}
          {showPad && (
            <div className="flex gap-2 mt-2 flex-wrap justify-center">
              {[5, 10, 15, 20, 25, 30, 35, 40].map(val => (
                <button type="button" className="px-4 py-2 text-base bg-gray-100 rounded cursor-pointer border border-gray-300" key={val} onClick={() => handlePad(val)}>{val}</button>
              ))}
              <button type="button" className="px-4 py-2 text-base bg-gray-100 rounded cursor-pointer border border-gray-300" onClick={() => handlePad("Clear")}>Clear</button>
            </div>
          )}
        </div>
        {/* Reps Input */}
        <div className="flex flex-col items-center mb-4 w-full">
          <label htmlFor="reps" className="mb-1">Reps:</label>
          <div className="flex justify-center items-center gap-2 w-full">
            {/* Decrease reps */}
            <button type="button" onClick={() => setReps(r => Math.max(0, Number(r) - 1))} className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">-</button>
            {/* Reps input */}
            <input
              type="number"
              id="reps"
              name="reps"
              value={reps}
              onChange={e => setReps(e.target.value)}
              className="flex-1 max-w-[100px] text-center text-lg p-2 border border-gray-300 rounded"
            />
            {/* Increase reps */}
            <button type="button" onClick={() => setReps(r => Number(r) + 1)} className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300">+</button>
          </div>
        </div>
        {/* Add/Repeat/Finish Buttons */}
        <div className="flex justify-center gap-4 mb-4 w-full">
          {/* Add Set */}
          <button type="submit" className="flex-1 max-w-[150px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">+ Add Set</button>
          {/* Repeat Last Set */}
          <button type="button" onClick={repeatSet} className="flex-1 max-w-[150px] px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Repeat Last Set</button>
        </div>
        {/* Finish Workout Button */}
        <div className="flex flex-col items-center mb-4 w-full">
          <button type="button" onClick={finishWorkout} className="w-full max-w-xs px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Finish Workout</button>
        </div>
      </form>
      {/* Workout Summary (after saving) */}
      {summary && <div className="mt-4 text-center font-semibold text-green-700"><strong>{summary}</strong></div>}
      {/* Workout Log Table */}
      <h3 className="text-center text-lg font-semibold mt-6 mb-2">Workout Log</h3>
      <table id="logTable" className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">#</th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">Exercise</th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">Weight</th>
            <th className="border border-gray-300 p-2 text-center bg-gray-100">Reps</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each set in the log */}
          {log.map((set, idx) => (
            <tr key={idx}>
              <td className="border border-gray-300 p-2 text-center">{idx + 1}</td>
              <td className="border border-gray-300 p-2 text-center">{set.exercise}</td>
              <td className="border border-gray-300 p-2 text-center">{set.weight} lbs</td>
              <td className="border border-gray-300 p-2 text-center">{set.reps}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Log Clear/Remove Buttons */}
      <div className="flex justify-center gap-4 mt-6 mb-2">
        {/* Remove Last Set */}
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => {
            if (log.length > 0) setLog(log.slice(0, -1));
          }}
        >
          Remove Last Set
        </button>
        {/* Clear All Sets */}
        <button
          type="button"
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => {
            if (log.length > 0 && window.confirm('Clear all sets?')) setLog([]);
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

// ===========================
// Mount Logger to #root
// ===========================
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Logger />);