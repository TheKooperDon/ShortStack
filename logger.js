//not being used. 

// ===========================
// 🔁 Global Setup
// ===========================
const logList = document.getElementById("logList");
const form = document.getElementById("loggerForm");
const repeatBtn = document.getElementById("repeatSet");

let lastSet = null;
let setCount = 0;

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

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");

  const logList = document.getElementById("logList");
  const form = document.getElementById("loggerForm");
  const repeatBtn = document.getElementById("repeatSet");
  const exerciseSelect = document.getElementById("exercise");
  const groupButtons = document.querySelectorAll("#muscleGroupBtns button");
  const togglePadBtn = document.getElementById("togglePadBtn");
  const weightInput = document.getElementById("weight");
  const weightPad = document.getElementById("weightQuickPad");

  let lastSet = null;
  let setCount = 0;

  // 💪 Group exercise dropdown
  const groupedExercises = {};
  for (let exercise in exerciseMap) {
    const group = exerciseMap[exercise];
    if (!groupedExercises[group]) groupedExercises[group] = [];
    groupedExercises[group].push(exercise);
  }

  groupButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.dataset.group;
      exerciseSelect.innerHTML = `<option value="">-- Select an exercise from ${group} --</option>`;
      groupedExercises[group].forEach((exercise) => {
        const option = document.createElement("option");
        option.value = exercise;
        option.textContent = exercise;
        exerciseSelect.appendChild(option);
      });
    });
  });

 // ===========================
// ➕➖  Buttons for Weight & Reps
// ===========================
document.querySelectorAll("button[data-action]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const inputId = btn.dataset.target;
    const action = btn.dataset.action;
    const input = document.getElementById(inputId);
    if (!input) return;

    let value = parseFloat(input.value) || 0;
    const step = inputId === "weight" ? 5 : 1;

    if (action === "increase") {
      value += step;
    } else if (action === "decrease") {
      value = Math.max(0, value - step);
    }

    input.value = inputId === "weight" ? value : Math.round(value);
  });
});
  // Quick weight pad
  if (togglePadBtn && weightPad && weightInput) {
    togglePadBtn.addEventListener("click", () => {
      weightPad.style.display = (weightPad.style.display === "flex") ? "none" : "flex";
    });

    document.querySelectorAll("#weightQuickPad .pad-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.textContent;
        weightInput.value = val === "Clear" ? "" : val;
      });
    });
  }

  // 📝 Form submit
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const exercise = document.getElementById("exercise").value.trim();
      const weight = document.getElementById("weight").value;
      const reps = document.getElementById("reps").value;
      if (!exercise || !weight || !reps) return;

      setCount++;
      const logBody = document.getElementById("logBody");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${setCount}</td>
        <td>${exercise}</td>
        <td>${weight} lbs</td>
        <td>${reps}</td>
      `;
      logBody.appendChild(row);
      lastSet = { exercise, weight, reps };
      form.reset();
    });
  }

  // 🔁 Repeat set
  if (repeatBtn) {
    repeatBtn.addEventListener("click", () => {
      if (!lastSet) return;
      setCount++;
      const logBody = document.getElementById("logBody");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${setCount}</td>
        <td>${lastSet.exercise}</td>
        <td>${lastSet.weight} lbs</td>
        <td>${lastSet.reps}</td>
      `;
      logBody.appendChild(row);
    });
  }

  // 🏁 Finish workout
  document.getElementById("finishWorkout").addEventListener("click", function () {
    const logBody = document.getElementById("logBody");
    const rows = logBody.querySelectorAll("tr");
    if (rows.length === 0) return alert("Bruh... log at least one set.");

    const grouped = {};
    let totalReps = 0;
    let totalVolume = 0;
    let totalSets = 0;

    rows.forEach(row => {
      const exercise = row.cells[1].textContent.trim();
      const weight = parseInt(row.cells[2].textContent.trim());
      const reps = parseInt(row.cells[3].textContent.trim());
      const key = `${exercise}|${weight}|${reps}`;
      if (!grouped[key]) {
        grouped[key] = { exercise, weight, reps, sets: 1 };
      } else {
        grouped[key].sets++;
      }
    });

    for (const entry of Object.values(grouped)) {
      totalSets += entry.sets;
      totalReps += entry.reps * entry.sets;
      totalVolume += entry.reps * entry.weight * entry.sets;
    }

    const today = new Date().toLocaleDateString();
    const summarySection = document.getElementById("summarySection");
    const summaryText = document.getElementById("summaryText");
    summaryText.textContent = `Workout saved for ${today} — ${totalSets} sets, ${totalReps} reps, ${totalVolume} lbs lifted.`;
    summarySection.style.display = "block";

    // Save workout to localStorage for profile page - Use American date format
    const todayDate = new Date();
    const dateKey = `${String(todayDate.getMonth() + 1).padStart(2, '0')}/${String(todayDate.getDate()).padStart(2, '0')}/${todayDate.getFullYear()}`;
    localStorage.setItem(
      `workout_${dateKey}`,
      JSON.stringify(grouped)
    );

    alert("Workout saved! 💾 Time to go flex 💪");
  });

}); // End DOMContentLoaded

//END OF WORKOUT OVERVIEW DISPLAY

//end of quick pad 
/*
togglePadBtn.addEventListener("click", () => {
  console.log("Quick Pick button clicked");
});


window.addEventListener("DOMContentLoaded", () => {
  const weightInput = document.getElementById("weight");
  const weightPad = document.getElementById("weightQuickPad");
  const togglePadBtn = document.getElementById("togglePadBtn");

  togglePadBtn.addEventListener("click", () => {
    weightPad.style.display = (weightPad.style.display === "flex") ? "none" : "flex";
  });

  document.querySelectorAll("#weightQuickPad .pad-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.textContent;
      if (val === "Clear") {
        weightInput.value = "";
      } else {
        weightInput.value = val;
      }
    });
  });
});
*/
/*
const weightInput = document.getElementById("weight");
const weightPad = document.getElementById("weightQuickPad");
const togglePadBtn = document.getElementById("togglePadBtn");

// Toggle pad on button click
togglePadBtn.addEventListener("click", () => {
  weightPad.style.display = (weightPad.style.display === "flex") ? "none" : "flex";
});

// Handle pad button clicks
document.querySelectorAll("#weightQuickPad .pad-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    if (val === "Clear") {
      weightInput.value = "";
    } else {
      weightInput.value = val;
    }
  });
});




*/


// Toggle pad visibility when weight input is focused
/* 
const weightInput = document.getElementById("weight");
const weightPad = document.getElementById("weightQuickPad");

weightInput.addEventListener("focus", () => {
  weightPad.style.display = "flex";
});

weightInput.addEventListener("blur", () => {
  setTimeout(() => weightPad.style.display = "none", 200);
});

// Handle pad button clicks
document.querySelectorAll("#weightQuickPad .pad-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.textContent;
    if (val === "Clear") {
      weightInput.value = "";
    } else {
      weightInput.value = val;
      weightInput.focus(); // keep pad open in case user keeps tapping
    }
  });
});
*/
//end of toggle pad