const { useState } = React;

// Exercise data with all exercises from the expanded database
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

// Stock image URLs for each muscle group
const muscleGroupImages = {
  "Chest": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
  "Back": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
  "Shoulders": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
  "Arms": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
  "Legs": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
  "Core": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
};

function ExerciseLibrary() {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const groupedExercises = groupExercisesByCategory(exerciseMap);

  // Filter exercises based on search term
  const filteredExercises = selectedGroup 
    ? groupedExercises[selectedGroup]?.filter(ex => 
        ex.toLowerCase().includes(searchTerm.toLowerCase())
      ) || []
    : Object.values(exerciseMap).filter(ex => 
        ex.toLowerCase().includes(searchTerm.toLowerCase())
      );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Exercise Library</h2>
        <p className="text-gray-600">Browse all available exercises by muscle group</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search exercises..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Muscle Group Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedGroup("")}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedGroup === "" 
                ? "bg-blue-600 text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {Object.keys(groupedExercises).map(group => (
            <button
              key={group}
              onClick={() => setSelectedGroup(group)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedGroup === group 
                  ? "bg-blue-600 text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise Grid */}
      {selectedGroup ? (
        // Show exercises for selected muscle group
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{selectedGroup} Exercises</h3>
          <div className="grid grid-cols-1 gap-4">
            {groupedExercises[selectedGroup]?.map(exercise => (
              <div key={exercise} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="flex">
                  <img 
                    src={muscleGroupImages[selectedGroup]} 
                    alt={exercise}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <h4 className="font-semibold text-gray-800 mb-1">{exercise}</h4>
                    <p className="text-sm text-gray-600">{selectedGroup}</p>
                    <button 
                      onClick={() => {
                        const exerciseName = exercise.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
                        window.location.href = `exercises/${selectedGroup.toLowerCase()}/${exerciseName}.html`;
                      }}
                      className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Show all muscle groups
        <div className="space-y-6">
          {Object.keys(groupedExercises).map(group => (
            <div key={group} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">{group}</h3>
                <p className="text-sm text-gray-600">{groupedExercises[group].length} exercises</p>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 gap-3">
                  {groupedExercises[group].slice(0, 3).map(exercise => (
                    <div key={exercise} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-800">{exercise}</span>
                      <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition">
                        View
                      </button>
                    </div>
                  ))}
                  {groupedExercises[group].length > 3 && (
                    <button 
                      onClick={() => setSelectedGroup(group)}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700 transition"
                    >
                      View all {groupedExercises[group].length} {group} exercises →
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Search Results */}
      {searchTerm && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Search Results</h3>
          <div className="grid grid-cols-1 gap-3">
            {filteredExercises.map(exercise => (
              <div key={exercise} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <h4 className="font-semibold text-gray-800">{exercise}</h4>
                <p className="text-sm text-gray-600">{exerciseMap[exercise]}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExerciseLibrary />); 