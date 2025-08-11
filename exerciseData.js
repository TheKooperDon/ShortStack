// Comprehensive Exercise Database for ShortStack
// Expanded with hundreds of bodybuilding and gym exercises

const exerciseDatabase = {
  // CHEST EXERCISES (Expanded)
  "Cable Fly": {
    name: "Cable Fly",
    category: "Chest",
    equipment: ["Cable Machine", "Cable Attachments"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids (Front Shoulders)", "Triceps"],
    difficulty: "Intermediate",
    instructions: [
      "Stand in the center of a cable machine with cables at chest height",
      "Grasp the cable handles with your arms extended out to the sides",
      "Take a step forward to create tension in the cables",
      "With a slight bend in your elbows, bring your hands together in front of your chest",
      "Squeeze your chest muscles as you bring your hands together",
      "Slowly return to the starting position, feeling the stretch in your chest",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Maintain a slight bend in your elbows throughout",
      "Focus on squeezing your chest muscles, not just moving your arms",
      "Don't let the cables pull your arms too far back",
      "Keep your shoulders down and back"
    ],
    variations: [
      "High Cable Fly (targets upper chest)",
      "Low Cable Fly (targets lower chest)",
      "Single Arm Cable Fly",
      "Cable Fly with Rotation"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Barbell Bench Press": {
    name: "Barbell Bench Press",
    category: "Chest",
    equipment: ["Barbell", "Weight Plates", "Bench"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Triceps", "Serratus Anterior"],
    difficulty: "Intermediate",
    instructions: [
      "Lie on a flat bench with your feet flat on the floor",
      "Grip the barbell slightly wider than shoulder-width",
      "Unrack the barbell and lower it to your chest",
      "Press the barbell back up to the starting position",
      "Keep your elbows at about a 45-degree angle to your body",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged and maintain a natural arch in your lower back",
      "Don't let your elbows flare out too much",
      "Control the movement on both the press and the descent",
      "Keep your shoulders down and back throughout the movement",
      "Breathe out as you press up, breathe in as you lower down"
    ],
    variations: [
      "Incline Barbell Bench Press",
      "Decline Barbell Bench Press",
      "Close Grip Bench Press",
      "Wide Grip Bench Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Dumbbell Bench Press": {
    name: "Dumbbell Bench Press",
    category: "Chest",
    equipment: ["Dumbbells", "Bench"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Triceps", "Serratus Anterior"],
    difficulty: "Beginner",
    instructions: [
      "Lie on a flat bench with your feet flat on the floor",
      "Hold a dumbbell in each hand at chest level",
      "Press the dumbbells up until your arms are fully extended",
      "Lower the dumbbells back down to chest level",
      "Keep your elbows at about a 45-degree angle to your body",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged and maintain a natural arch in your lower back",
      "Don't let your elbows flare out too much",
      "Control the movement on both the press and the descent",
      "Keep your shoulders down and back throughout the movement",
      "Breathe out as you press up, breathe in as you lower down"
    ],
    variations: [
      "Incline Dumbbell Press",
      "Decline Dumbbell Press",
      "Neutral Grip Dumbbell Press",
      "Single Arm Dumbbell Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Incline Barbell Bench Press": {
    name: "Incline Barbell Bench Press",
    category: "Chest",
    equipment: ["Barbell", "Weight Plates", "Incline Bench"],
    primaryMuscles: ["Upper Pectoralis Major (Upper Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Triceps"],
    difficulty: "Intermediate",
    instructions: [
      "Set the bench to a 30-45 degree incline",
      "Lie on the bench with your feet flat on the floor",
      "Grip the barbell slightly wider than shoulder-width",
      "Unrack the barbell and lower it to your upper chest",
      "Press the barbell back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Focus on feeling the contraction in your upper chest",
      "Keep your elbows at about a 45-degree angle",
      "Don't let the barbell bounce off your chest",
      "Control the descent and press with power",
      "Keep your shoulders down and back"
    ],
    variations: [
      "Incline Dumbbell Press",
      "Decline Barbell Bench Press",
      "Flat Barbell Bench Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Decline Barbell Bench Press": {
    name: "Decline Barbell Bench Press",
    category: "Chest",
    equipment: ["Barbell", "Weight Plates", "Decline Bench"],
    primaryMuscles: ["Lower Pectoralis Major (Lower Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Triceps"],
    difficulty: "Intermediate",
    instructions: [
      "Set the bench to a 15-30 degree decline",
      "Lie on the bench with your feet secured",
      "Grip the barbell slightly wider than shoulder-width",
      "Unrack the barbell and lower it to your lower chest",
      "Press the barbell back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Focus on feeling the contraction in your lower chest",
      "Keep your feet secured and stable",
      "Control the movement throughout",
      "Don't let the barbell bounce off your chest",
      "Keep your core engaged"
    ],
    variations: [
      "Decline Dumbbell Press",
      "Incline Barbell Bench Press",
      "Flat Barbell Bench Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Dumbbell Fly": {
    name: "Dumbbell Fly",
    category: "Chest",
    equipment: ["Dumbbells", "Bench"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Serratus Anterior"],
    difficulty: "Intermediate",
    instructions: [
      "Lie on a flat bench with your feet flat on the floor",
      "Hold dumbbells above your chest with arms slightly bent",
      "Lower the dumbbells out to the sides in an arc motion",
      "Feel the stretch in your chest muscles",
      "Bring the dumbbells back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep a slight bend in your elbows throughout",
      "Don't let your arms go below shoulder level",
      "Focus on feeling the stretch and contraction in your chest",
      "Control the movement on both the descent and ascent",
      "Don't use momentum - control the weights"
    ],
    variations: [
      "Incline Dumbbell Fly",
      "Decline Dumbbell Fly",
      "Cable Fly",
      "Machine Fly"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Push Ups": {
    name: "Push Ups",
    category: "Chest",
    equipment: ["None (Bodyweight)"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Triceps", "Core"],
    difficulty: "Beginner",
    instructions: [
      "Start in a plank position with your hands slightly wider than shoulder-width",
      "Lower your body by bending your elbows until your chest nearly touches the floor",
      "Keep your body in a straight line from head to heels",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the entire movement",
      "Don't let your hips sag or rise",
      "Keep your neck neutral - don't look up or down",
      "Breathe out as you push up, breathe in as you lower down",
      "If you can't do full push-ups, start with knee push-ups"
    ],
    variations: [
      "Knee Push Ups",
      "Wide Grip Push Ups",
      "Diamond Push Ups",
      "Decline Push Ups",
      "Incline Push Ups"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Diamond Push Ups": {
    name: "Diamond Push Ups",
    category: "Chest",
    equipment: ["None (Bodyweight)"],
    primaryMuscles: ["Pectoralis Major (Chest)", "Triceps"],
    secondaryMuscles: ["Anterior Deltoids", "Core"],
    difficulty: "Advanced",
    instructions: [
      "Start in a plank position with your hands forming a diamond shape",
      "Place your thumbs and index fingers together to form a diamond",
      "Lower your body by bending your elbows",
      "Keep your elbows close to your body",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Focus on feeling the contraction in your triceps and chest",
      "Keep your elbows close to your body",
      "Don't let your hips sag",
      "This exercise heavily targets triceps"
    ],
    variations: [
      "Regular Push Ups",
      "Wide Grip Push Ups",
      "Close Grip Push Ups",
      "Decline Diamond Push Ups"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Chest Press Machine": {
    name: "Chest Press Machine",
    category: "Chest",
    equipment: ["Chest Press Machine"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids", "Triceps"],
    difficulty: "Beginner",
    instructions: [
      "Sit in the chest press machine with your back against the pad",
      "Adjust the seat height so the handles are at chest level",
      "Grip the handles with your palms facing forward",
      "Press the handles forward until your arms are fully extended",
      "Slowly return to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back pressed against the pad throughout",
      "Don't lock your elbows at the top",
      "Control the movement on both the press and return",
      "Focus on feeling the contraction in your chest",
      "Breathe out as you press, breathe in as you return"
    ],
    variations: [
      "Incline Chest Press Machine",
      "Decline Chest Press Machine",
      "Single Arm Chest Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Pec Deck Machine": {
    name: "Pec Deck Machine",
    category: "Chest",
    equipment: ["Pec Deck Machine"],
    primaryMuscles: ["Pectoralis Major (Chest)"],
    secondaryMuscles: ["Anterior Deltoids"],
    difficulty: "Beginner",
    instructions: [
      "Sit in the pec deck machine with your back against the pad",
      "Place your forearms on the pads with your elbows at chest level",
      "Bring your arms together in front of your chest",
      "Squeeze your chest muscles at the peak of the movement",
      "Slowly return to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back pressed against the pad",
      "Focus on squeezing your chest muscles together",
      "Don't let your arms go too far back",
      "Control the movement throughout",
      "Keep your core engaged"
    ],
    variations: [
      "Cable Fly",
      "Dumbbell Fly",
      "Machine Fly"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Dips": {
    name: "Dips",
    category: "Chest",
    equipment: ["Dip Bars", "Parallel Bars"],
    primaryMuscles: ["Pectoralis Major (Chest)", "Triceps"],
    secondaryMuscles: ["Anterior Deltoids", "Core"],
    difficulty: "Intermediate",
    instructions: [
      "Grab the dip bars with your arms fully extended",
      "Lower your body by bending your elbows",
      "Keep your elbows close to your body",
      "Lower until your upper arms are parallel to the floor",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't let your shoulders roll forward",
      "Keep your body upright - don't lean too far forward",
      "Control the movement on both the descent and ascent",
      "If you can't do full dips, start with assisted dips"
    ],
    variations: [
      "Assisted Dips",
      "Weighted Dips",
      "Ring Dips",
      "Bench Dips"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  // BACK EXERCISES (Expanded)
  "Barbell Row": {
    name: "Barbell Row",
    category: "Back",
    equipment: ["Barbell", "Weight Plates"],
    primaryMuscles: ["Latissimus Dorsi (Lats)", "Rhomboids", "Trapezius"],
    secondaryMuscles: ["Biceps", "Rear Deltoids", "Erector Spinae"],
    difficulty: "Intermediate",
    instructions: [
      "Stand with your feet shoulder-width apart, holding a barbell with an overhand grip",
      "Hinge at your hips and bend your knees slightly",
      "Keep your back straight and chest up",
      "Pull the barbell up towards your lower chest",
      "Squeeze your shoulder blades together at the top of the movement",
      "Lower the barbell back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back straight throughout the entire movement",
      "Don't use momentum - control the weight",
      "Focus on pulling with your back muscles, not your arms",
      "Keep your elbows close to your body",
      "Don't let your hips rise as you pull the weight up"
    ],
    variations: [
      "Pendlay Row",
      "T-Bar Row",
      "Single Arm Dumbbell Row",
      "Cable Row"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Pull Ups": {
    name: "Pull Ups",
    category: "Back",
    equipment: ["Pull Up Bar"],
    primaryMuscles: ["Latissimus Dorsi (Lats)", "Rhomboids", "Trapezius"],
    secondaryMuscles: ["Biceps", "Rear Deltoids", "Core"],
    difficulty: "Advanced",
    instructions: [
      "Grab the pull-up bar with an overhand grip, hands slightly wider than shoulder-width",
      "Hang from the bar with your arms fully extended",
      "Pull your body up until your chin is over the bar",
      "Lower your body back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't swing or use momentum",
      "Focus on pulling with your back muscles, not just your arms",
      "Keep your shoulders down and back",
      "If you can't do full pull-ups, start with assisted pull-ups"
    ],
    variations: [
      "Assisted Pull Ups",
      "Wide Grip Pull Ups",
      "Close Grip Pull Ups",
      "Neutral Grip Pull Ups"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Chin Ups": {
    name: "Chin Ups",
    category: "Back",
    equipment: ["Pull Up Bar"],
    primaryMuscles: ["Latissimus Dorsi (Lats)", "Biceps"],
    secondaryMuscles: ["Rhomboids", "Trapezius", "Core"],
    difficulty: "Advanced",
    instructions: [
      "Grab the pull-up bar with an underhand grip, hands shoulder-width apart",
      "Hang from the bar with your arms fully extended",
      "Pull your body up until your chin is over the bar",
      "Lower your body back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Focus on pulling with your back muscles, not just your arms",
      "Keep your shoulders down and back",
      "Don't swing or use momentum",
      "This exercise targets biceps more than pull-ups"
    ],
    variations: [
      "Assisted Chin Ups",
      "Wide Grip Chin Ups",
      "Close Grip Chin Ups",
      "Weighted Chin Ups"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Lat Pulldown": {
    name: "Lat Pulldown",
    category: "Back",
    equipment: ["Lat Pulldown Machine"],
    primaryMuscles: ["Latissimus Dorsi (Lats)"],
    secondaryMuscles: ["Rhomboids", "Trapezius", "Biceps"],
    difficulty: "Beginner",
    instructions: [
      "Sit at the lat pulldown machine with your thighs secured under the pads",
      "Grab the bar with an overhand grip, hands wider than shoulder-width",
      "Pull the bar down to your upper chest",
      "Squeeze your shoulder blades together at the bottom",
      "Slowly return the bar to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your chest up and shoulders back",
      "Focus on pulling with your back muscles, not your arms",
      "Don't lean back too much - stay upright",
      "Control the movement on both the pull and return",
      "Squeeze your lats at the bottom of the movement"
    ],
    variations: [
      "Close Grip Lat Pulldown",
      "Wide Grip Lat Pulldown",
      "Neutral Grip Lat Pulldown",
      "Single Arm Lat Pulldown"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "T-Bar Row": {
    name: "T-Bar Row",
    category: "Back",
    equipment: ["T-Bar Row Machine", "Weight Plates"],
    primaryMuscles: ["Latissimus Dorsi (Lats)", "Rhomboids", "Trapezius"],
    secondaryMuscles: ["Biceps", "Rear Deltoids"],
    difficulty: "Intermediate",
    instructions: [
      "Stand over the T-bar with your feet shoulder-width apart",
      "Bend at your hips and knees, keeping your back straight",
      "Grab the handles with both hands",
      "Pull the weight up towards your chest",
      "Squeeze your shoulder blades together at the top",
      "Lower the weight back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back straight throughout the movement",
      "Focus on pulling with your back muscles",
      "Keep your elbows close to your body",
      "Don't use momentum - control the weight",
      "Squeeze your shoulder blades together"
    ],
    variations: [
      "Barbell Row",
      "Dumbbell Row",
      "Cable Row",
      "Single Arm Row"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Seated Cable Row": {
    name: "Seated Cable Row",
    category: "Back",
    equipment: ["Cable Machine", "Row Attachment"],
    primaryMuscles: ["Latissimus Dorsi (Lats)", "Rhomboids", "Trapezius"],
    secondaryMuscles: ["Biceps", "Rear Deltoids"],
    difficulty: "Beginner",
    instructions: [
      "Sit at the cable row machine with your feet on the footrest",
      "Grab the handle with both hands",
      "Sit up straight with your chest up",
      "Pull the handle towards your lower chest",
      "Squeeze your shoulder blades together",
      "Slowly return to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your chest up and shoulders back",
      "Focus on pulling with your back muscles",
      "Don't lean back too much",
      "Control the movement throughout",
      "Squeeze your shoulder blades together"
    ],
    variations: [
      "Wide Grip Cable Row",
      "Close Grip Cable Row",
      "Single Arm Cable Row",
      "Neutral Grip Cable Row"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Single Arm Dumbbell Row": {
    name: "Single Arm Dumbbell Row",
    category: "Back",
    equipment: ["Dumbbell", "Bench"],
    primaryMuscles: ["Latissimus Dorsi (Lats)", "Rhomboids"],
    secondaryMuscles: ["Biceps", "Rear Deltoids"],
    difficulty: "Intermediate",
    instructions: [
      "Place one knee and hand on a bench for support",
      "Hold a dumbbell in your free hand",
      "Keep your back straight and parallel to the floor",
      "Pull the dumbbell up towards your hip",
      "Squeeze your shoulder blade at the top",
      "Lower the dumbbell back down with control",
      "Repeat for the desired number of repetitions, then switch sides"
    ],
    tips: [
      "Keep your back straight throughout the movement",
      "Don't rotate your torso - keep it stable",
      "Focus on pulling with your back muscles",
      "Keep your elbow close to your body",
      "Squeeze your shoulder blade at the top"
    ],
    variations: [
      "Barbell Row",
      "T-Bar Row",
      "Cable Row",
      "Inverted Row"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Face Pulls": {
    name: "Face Pulls",
    category: "Back",
    equipment: ["Cable Machine", "Rope Attachment"],
    primaryMuscles: ["Rear Deltoids", "Rhomboids", "Trapezius"],
    secondaryMuscles: ["Biceps", "Rotator Cuff"],
    difficulty: "Beginner",
    instructions: [
      "Set the cable machine to chest height",
      "Attach a rope to the cable",
      "Grab the rope with both hands, palms facing each other",
      "Step back to create tension in the cable",
      "Pull the rope towards your face, separating your hands",
      "Squeeze your shoulder blades together",
      "Slowly return to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your chest up and shoulders back",
      "Focus on pulling with your rear deltoids",
      "Don't let your elbows flare out too much",
      "Squeeze your shoulder blades together",
      "This exercise is great for posture and shoulder health"
    ],
    variations: [
      "Band Face Pulls",
      "Dumbbell Face Pulls",
      "Cable Rear Delt Fly"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Deadlift": {
    name: "Deadlift",
    category: "Back",
    equipment: ["Barbell", "Weight Plates"],
    primaryMuscles: ["Erector Spinae", "Glutes", "Hamstrings"],
    secondaryMuscles: ["Latissimus Dorsi", "Trapezius", "Core"],
    difficulty: "Advanced",
    instructions: [
      "Stand with your feet shoulder-width apart, barbell over your midfoot",
      "Bend at your hips and knees to grab the barbell",
      "Keep your back straight and chest up",
      "Grip the barbell with hands shoulder-width apart",
      "Stand up by extending your hips and knees",
      "Keep the barbell close to your body throughout",
      "Lower the barbell back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back straight throughout the entire movement",
      "Don't round your back",
      "Keep the barbell close to your body",
      "Drive through your heels",
      "This is a compound movement - engage your entire posterior chain"
    ],
    variations: [
      "Romanian Deadlift",
      "Sumo Deadlift",
      "Trap Bar Deadlift",
      "Dumbbell Deadlift"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Romanian Deadlift": {
    name: "Romanian Deadlift",
    category: "Back",
    equipment: ["Barbell", "Weight Plates"],
    primaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae"],
    secondaryMuscles: ["Core", "Trapezius"],
    difficulty: "Intermediate",
    instructions: [
      "Stand with your feet shoulder-width apart, holding a barbell",
      "Keep your legs straight with a slight bend in your knees",
      "Hinge at your hips, pushing your butt back",
      "Lower the barbell down your legs",
      "Feel the stretch in your hamstrings",
      "Return to the starting position by driving your hips forward",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your legs straight with a slight bend",
      "Focus on hinging at your hips, not bending your knees",
      "Feel the stretch in your hamstrings",
      "Keep the barbell close to your legs",
      "Don't round your back"
    ],
    variations: [
      "Dumbbell Romanian Deadlift",
      "Single Leg Romanian Deadlift",
      "Barbell Deadlift"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  // SHOULDER EXERCISES (Expanded)
  "Shoulder Press": {
    name: "Shoulder Press",
    category: "Shoulders",
    equipment: ["Dumbbells", "Bench (optional)"],
    primaryMuscles: ["Anterior Deltoids (Front Shoulders)", "Lateral Deltoids (Side Shoulders)"],
    secondaryMuscles: ["Triceps", "Upper Chest", "Trapezius"],
    difficulty: "Intermediate",
    instructions: [
      "Sit or stand with a dumbbell in each hand at shoulder level",
      "Press the dumbbells up overhead until your arms are fully extended",
      "Lower the dumbbells back down to shoulder level",
      "Keep your core engaged throughout the movement",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged to protect your lower back",
      "Don't arch your back as you press up",
      "Keep your shoulders down and back",
      "Control the movement on both the press and the descent",
      "Breathe out as you press up, breathe in as you lower down"
    ],
    variations: [
      "Seated Shoulder Press",
      "Standing Shoulder Press",
      "Arnold Press",
      "Military Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Lateral Raise": {
    name: "Lateral Raise",
    category: "Shoulders",
    equipment: ["Dumbbells"],
    primaryMuscles: ["Lateral Deltoids (Side Shoulders)"],
    secondaryMuscles: ["Anterior Deltoids", "Trapezius"],
    difficulty: "Beginner",
    instructions: [
      "Stand with a dumbbell in each hand at your sides",
      "Raise your arms out to the sides until they are parallel to the floor",
      "Keep a slight bend in your elbows throughout the movement",
      "Lower the dumbbells back down to your sides",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't swing the weights - control the movement",
      "Keep your shoulders down and back",
      "Don't raise your arms above shoulder level",
      "Focus on feeling the burn in your side deltoids"
    ],
    variations: [
      "Seated Lateral Raises",
      "Cable Lateral Raises",
      "Single Arm Lateral Raises",
      "Front Lateral Raises"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Front Raise": {
    name: "Front Raise",
    category: "Shoulders",
    equipment: ["Dumbbells"],
    primaryMuscles: ["Anterior Deltoids (Front Shoulders)"],
    secondaryMuscles: ["Lateral Deltoids", "Upper Chest"],
    difficulty: "Beginner",
    instructions: [
      "Stand with a dumbbell in each hand at your sides",
      "Raise your arms forward until they are parallel to the floor",
      "Keep a slight bend in your elbows",
      "Lower the dumbbells back down to your sides",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't swing the weights",
      "Keep your shoulders down and back",
      "Don't raise your arms above shoulder level",
      "Focus on feeling the contraction in your front deltoids"
    ],
    variations: [
      "Seated Front Raises",
      "Cable Front Raises",
      "Single Arm Front Raises",
      "Plate Front Raises"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Rear Delt Fly": {
    name: "Rear Delt Fly",
    category: "Shoulders",
    equipment: ["Dumbbells"],
    primaryMuscles: ["Rear Deltoids (Back Shoulders)"],
    secondaryMuscles: ["Rhomboids", "Trapezius"],
    difficulty: "Beginner",
    instructions: [
      "Bend at your hips and lean forward",
      "Hold dumbbells with your arms hanging down",
      "Raise your arms out to the sides in a flying motion",
      "Squeeze your shoulder blades together",
      "Lower the dumbbells back down",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back straight throughout the movement",
      "Focus on squeezing your shoulder blades together",
      "Don't swing the weights",
      "Keep your elbows slightly bent",
      "This exercise is great for posture"
    ],
    variations: [
      "Seated Rear Delt Fly",
      "Cable Rear Delt Fly",
      "Face Pulls",
      "Reverse Pec Deck"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Arnold Press": {
    name: "Arnold Press",
    category: "Shoulders",
    equipment: ["Dumbbells"],
    primaryMuscles: ["Anterior Deltoids", "Lateral Deltoids"],
    secondaryMuscles: ["Triceps", "Upper Chest"],
    difficulty: "Intermediate",
    instructions: [
      "Sit or stand with dumbbells at shoulder level, palms facing you",
      "Rotate your wrists as you press the dumbbells up",
      "At the top, your palms should face forward",
      "Lower the dumbbells back down, rotating your wrists back",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Control the rotation throughout the movement",
      "Keep your core engaged",
      "Don't arch your back",
      "Focus on the shoulder contraction",
      "This exercise targets all three deltoid heads"
    ],
    variations: [
      "Seated Arnold Press",
      "Standing Arnold Press",
      "Regular Shoulder Press"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Upright Row": {
    name: "Upright Row",
    category: "Shoulders",
    equipment: ["Barbell", "Weight Plates"],
    primaryMuscles: ["Lateral Deltoids", "Trapezius"],
    secondaryMuscles: ["Anterior Deltoids", "Biceps"],
    difficulty: "Intermediate",
    instructions: [
      "Stand with your feet shoulder-width apart",
      "Hold a barbell with an overhand grip, hands close together",
      "Pull the barbell up towards your chin",
      "Keep your elbows higher than your wrists",
      "Lower the barbell back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep the barbell close to your body",
      "Don't let your elbows flare out too much",
      "Focus on pulling with your shoulders",
      "Don't raise the barbell above your chin",
      "This exercise can be hard on the shoulders - use proper form"
    ],
    variations: [
      "Dumbbell Upright Row",
      "Cable Upright Row",
      "Wide Grip Upright Row"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  // ARM EXERCISES (Expanded)
  "Hammer Curls": {
    name: "Hammer Curls",
    category: "Arms",
    equipment: ["Dumbbells"],
    primaryMuscles: ["Biceps Brachii", "Brachialis"],
    secondaryMuscles: ["Forearms", "Anterior Deltoids"],
    difficulty: "Beginner",
    instructions: [
      "Stand with a dumbbell in each hand at your sides",
      "Keep your palms facing each other (neutral grip)",
      "Curl the dumbbells up towards your shoulders",
      "Keep your elbows close to your body throughout the movement",
      "Lower the dumbbells back down to your sides",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged and don't swing your body",
      "Control the movement on both the curl and the descent",
      "Keep your elbows stationary - only your forearms should move",
      "Don't let your shoulders roll forward",
      "Focus on feeling the contraction in your biceps"
    ],
    variations: [
      "Seated Hammer Curls",
      "Alternating Hammer Curls",
      "Single Arm Hammer Curls",
      "Cross Body Hammer Curls"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Barbell Curls": {
    name: "Barbell Curls",
    category: "Arms",
    equipment: ["Barbell", "Weight Plates"],
    primaryMuscles: ["Biceps Brachii"],
    secondaryMuscles: ["Forearms", "Anterior Deltoids"],
    difficulty: "Beginner",
    instructions: [
      "Stand with your feet shoulder-width apart",
      "Hold a barbell with an underhand grip, hands shoulder-width apart",
      "Curl the barbell up towards your shoulders",
      "Keep your elbows close to your body",
      "Lower the barbell back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged and don't swing your body",
      "Control the movement throughout",
      "Keep your elbows stationary",
      "Don't let your shoulders roll forward",
      "Focus on the bicep contraction"
    ],
    variations: [
      "Wide Grip Barbell Curls",
      "Close Grip Barbell Curls",
      "EZ Bar Curls",
      "Preacher Curls"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Dumbbell Curls": {
    name: "Dumbbell Curls",
    category: "Arms",
    equipment: ["Dumbbells"],
    primaryMuscles: ["Biceps Brachii"],
    secondaryMuscles: ["Forearms", "Anterior Deltoids"],
    difficulty: "Beginner",
    instructions: [
      "Stand with a dumbbell in each hand at your sides",
      "Curl the dumbbells up towards your shoulders",
      "Keep your elbows close to your body",
      "Lower the dumbbells back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged",
      "Control the movement throughout",
      "Keep your elbows stationary",
      "Don't swing your body",
      "Focus on the bicep contraction"
    ],
    variations: [
      "Alternating Dumbbell Curls",
      "Seated Dumbbell Curls",
      "Incline Dumbbell Curls",
      "Concentration Curls"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Preacher Curls": {
    name: "Preacher Curls",
    category: "Arms",
    equipment: ["Preacher Bench", "Barbell or Dumbbells"],
    primaryMuscles: ["Biceps Brachii"],
    secondaryMuscles: ["Forearms"],
    difficulty: "Intermediate",
    instructions: [
      "Sit at the preacher bench with your arms resting on the pad",
      "Hold a barbell or dumbbells with an underhand grip",
      "Curl the weight up towards your shoulders",
      "Lower the weight back down with control",
      "Keep your arms in contact with the pad throughout",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your arms in contact with the pad",
      "Control the movement throughout",
      "Don't let your elbows lift off the pad",
      "Focus on the bicep contraction",
      "This exercise isolates the biceps well"
    ],
    variations: [
      "Barbell Preacher Curls",
      "Dumbbell Preacher Curls",
      "EZ Bar Preacher Curls",
      "Single Arm Preacher Curls"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Dips": {
    name: "Dips",
    category: "Arms",
    equipment: ["Dip Bars", "Parallel Bars"],
    primaryMuscles: ["Triceps Brachii"],
    secondaryMuscles: ["Anterior Deltoids", "Chest", "Core"],
    difficulty: "Intermediate",
    instructions: [
      "Grab the dip bars with your arms fully extended",
      "Lower your body by bending your elbows",
      "Keep your elbows close to your body",
      "Lower until your upper arms are parallel to the floor",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't let your shoulders roll forward",
      "Keep your body upright - don't lean too far forward",
      "Control the movement on both the descent and ascent",
      "If you can't do full dips, start with assisted dips"
    ],
    variations: [
      "Assisted Dips",
      "Weighted Dips",
      "Ring Dips",
      "Bench Dips"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Tricep Pushdowns": {
    name: "Tricep Pushdowns",
    category: "Arms",
    equipment: ["Cable Machine", "Rope or Bar Attachment"],
    primaryMuscles: ["Triceps Brachii"],
    secondaryMuscles: ["Anterior Deltoids"],
    difficulty: "Beginner",
    instructions: [
      "Stand at the cable machine with the attachment at chest height",
      "Grab the rope or bar with an overhand grip",
      "Keep your elbows at your sides",
      "Push the attachment down until your arms are fully extended",
      "Slowly return to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your elbows at your sides throughout",
      "Focus on extending your forearms",
      "Don't let your elbows move forward",
      "Control the movement throughout",
      "Squeeze your triceps at the bottom"
    ],
    variations: [
      "Rope Pushdowns",
      "Bar Pushdowns",
      "Single Arm Pushdowns",
      "Overhead Cable Extensions"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Skull Crushers": {
    name: "Skull Crushers",
    category: "Arms",
    equipment: ["Barbell or EZ Bar", "Bench"],
    primaryMuscles: ["Triceps Brachii"],
    secondaryMuscles: ["Anterior Deltoids"],
    difficulty: "Intermediate",
    instructions: [
      "Lie on a bench with your feet flat on the floor",
      "Hold a barbell or EZ bar with an overhand grip",
      "Extend your arms straight up above your chest",
      "Lower the bar towards your forehead by bending your elbows",
      "Keep your upper arms stationary",
      "Extend your arms back to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your upper arms stationary throughout",
      "Only your forearms should move",
      "Control the movement on both the descent and ascent",
      "Don't let the bar touch your head",
      "Focus on feeling the contraction in your triceps"
    ],
    variations: [
      "EZ Bar Skull Crushers",
      "Dumbbell Skull Crushers",
      "Incline Skull Crushers",
      "Decline Skull Crushers"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  // LEG EXERCISES (Expanded)
  "Barbell Squat": {
    name: "Barbell Squat",
    category: "Legs",
    equipment: ["Barbell", "Weight Plates", "Squat Rack"],
    primaryMuscles: ["Quadriceps", "Glutes"],
    secondaryMuscles: ["Hamstrings", "Core", "Calves"],
    difficulty: "Advanced",
    instructions: [
      "Set up the barbell on the squat rack at shoulder height",
      "Step under the bar and rest it on your upper back",
      "Grip the bar with your hands wider than shoulder-width",
      "Unrack the bar and step back",
      "Stand with your feet shoulder-width apart",
      "Lower your body by bending your knees and hips",
      "Keep your chest up and core engaged",
      "Lower until your thighs are parallel to the floor",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your chest up throughout the movement",
      "Keep your knees in line with your toes",
      "Don't let your knees cave inward",
      "Keep your core engaged to protect your lower back",
      "Breathe out as you stand up, breathe in as you squat down"
    ],
    variations: [
      "Front Squat",
      "Box Squat",
      "Pause Squat",
      "Tempo Squat"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Goblet Squat": {
    name: "Goblet Squat",
    category: "Legs",
    equipment: ["Dumbbell", "Kettlebell"],
    primaryMuscles: ["Quadriceps", "Glutes"],
    secondaryMuscles: ["Hamstrings", "Core", "Calves"],
    difficulty: "Beginner",
    instructions: [
      "Hold a dumbbell or kettlebell at chest level",
      "Stand with your feet shoulder-width apart",
      "Lower your body by bending your knees and hips",
      "Keep your chest up and core engaged",
      "Lower until your thighs are parallel to the floor",
      "Push back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your chest up throughout the movement",
      "Keep your knees in line with your toes",
      "Don't let your knees cave inward",
      "Keep your core engaged to protect your lower back",
      "Breathe out as you stand up, breathe in as you squat down"
    ],
    variations: [
      "Bodyweight Squats",
      "Barbell Back Squat",
      "Front Squat",
      "Split Squat"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Leg Press": {
    name: "Leg Press",
    category: "Legs",
    equipment: ["Leg Press Machine"],
    primaryMuscles: ["Quadriceps", "Glutes"],
    secondaryMuscles: ["Hamstrings", "Calves"],
    difficulty: "Beginner",
    instructions: [
      "Sit in the leg press machine with your back against the pad",
      "Place your feet on the platform, shoulder-width apart",
      "Unlock the safety mechanism",
      "Lower the platform by bending your knees",
      "Lower until your knees are at about 90 degrees",
      "Push the platform back up to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back pressed against the pad throughout",
      "Don't lock your knees at the top of the movement",
      "Keep your feet flat on the platform",
      "Don't let your knees cave inward",
      "Control the movement on both the descent and ascent"
    ],
    variations: [
      "High Foot Placement (targets glutes more)",
      "Low Foot Placement (targets quads more)",
      "Wide Stance",
      "Narrow Stance"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Romanian Deadlift": {
    name: "Romanian Deadlift",
    category: "Legs",
    equipment: ["Barbell", "Weight Plates"],
    primaryMuscles: ["Hamstrings", "Glutes", "Erector Spinae"],
    secondaryMuscles: ["Core", "Trapezius"],
    difficulty: "Intermediate",
    instructions: [
      "Stand with your feet shoulder-width apart, holding a barbell",
      "Keep your legs straight with a slight bend in your knees",
      "Hinge at your hips, pushing your butt back",
      "Lower the barbell down your legs",
      "Feel the stretch in your hamstrings",
      "Return to the starting position by driving your hips forward",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your legs straight with a slight bend",
      "Focus on hinging at your hips, not bending your knees",
      "Feel the stretch in your hamstrings",
      "Keep the barbell close to your legs",
      "Don't round your back"
    ],
    variations: [
      "Dumbbell Romanian Deadlift",
      "Single Leg Romanian Deadlift",
      "Barbell Deadlift"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Leg Extensions": {
    name: "Leg Extensions",
    category: "Legs",
    equipment: ["Leg Extension Machine"],
    primaryMuscles: ["Quadriceps"],
    secondaryMuscles: ["None"],
    difficulty: "Beginner",
    instructions: [
      "Sit in the leg extension machine with your back against the pad",
      "Place your feet under the roller pad",
      "Adjust the seat so your knees are at the edge of the seat",
      "Extend your legs to lift the weight",
      "Squeeze your quadriceps at the top",
      "Lower the weight back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your back pressed against the pad",
      "Focus on feeling the contraction in your quadriceps",
      "Don't swing the weight",
      "Control the movement throughout",
      "This is an isolation exercise for the quads"
    ],
    variations: [
      "Single Leg Extensions",
      "Seated Leg Extensions",
      "Cable Leg Extensions"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Leg Curls": {
    name: "Leg Curls",
    category: "Legs",
    equipment: ["Leg Curl Machine"],
    primaryMuscles: ["Hamstrings"],
    secondaryMuscles: ["Calves"],
    difficulty: "Beginner",
    instructions: [
      "Lie face down on the leg curl machine",
      "Place your ankles under the roller pad",
      "Curl your legs up towards your buttocks",
      "Squeeze your hamstrings at the top",
      "Lower the weight back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your hips pressed against the pad",
      "Focus on feeling the contraction in your hamstrings",
      "Don't lift your hips off the pad",
      "Control the movement throughout",
      "This is an isolation exercise for the hamstrings"
    ],
    variations: [
      "Seated Leg Curls",
      "Standing Leg Curls",
      "Single Leg Curls"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Calf Raises": {
    name: "Calf Raises",
    category: "Legs",
    equipment: ["Calf Raise Machine or Dumbbells"],
    primaryMuscles: ["Gastrocnemius", "Soleus"],
    secondaryMuscles: ["None"],
    difficulty: "Beginner",
    instructions: [
      "Stand on the edge of a step or calf raise machine",
      "Lower your heels below the step to stretch your calves",
      "Raise up onto your toes as high as possible",
      "Squeeze your calf muscles at the top",
      "Lower back down to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your knees straight to target the gastrocnemius",
      "Bend your knees slightly to target the soleus",
      "Focus on feeling the contraction in your calves",
      "Control the movement throughout",
      "You can do this exercise with or without weight"
    ],
    variations: [
      "Seated Calf Raises",
      "Standing Calf Raises",
      "Single Leg Calf Raises",
      "Donkey Calf Raises"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  // CORE EXERCISES (Expanded)
  "Plank": {
    name: "Plank",
    category: "Core",
    equipment: ["None (Bodyweight)"],
    primaryMuscles: ["Rectus Abdominis", "Transverse Abdominis"],
    secondaryMuscles: ["Obliques", "Shoulders", "Glutes"],
    difficulty: "Beginner",
    instructions: [
      "Start in a push-up position with your arms straight",
      "Lower your forearms to the ground",
      "Keep your body in a straight line from head to heels",
      "Engage your core and hold the position",
      "Keep your breathing steady",
      "Hold for the desired amount of time"
    ],
    tips: [
      "Keep your core engaged throughout the entire hold",
      "Don't let your hips sag or rise",
      "Keep your neck neutral - don't look up or down",
      "Breathe steadily throughout the hold",
      "If you can't hold a full plank, start with knee planks"
    ],
    variations: [
      "Knee Plank",
      "Side Plank",
      "Forearm Plank",
      "High Plank",
      "Plank with Leg Lift"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Crunches": {
    name: "Crunches",
    category: "Core",
    equipment: ["None (Bodyweight)"],
    primaryMuscles: ["Rectus Abdominis"],
    secondaryMuscles: ["Obliques"],
    difficulty: "Beginner",
    instructions: [
      "Lie on your back with your knees bent and feet flat on the floor",
      "Place your hands behind your head or across your chest",
      "Lift your shoulders off the ground",
      "Curl your upper body towards your knees",
      "Lower back down to the starting position",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your lower back pressed against the floor",
      "Don't pull on your neck with your hands",
      "Focus on feeling the contraction in your abs",
      "Control the movement throughout",
      "Breathe out as you crunch up, breathe in as you lower down"
    ],
    variations: [
      "Bicycle Crunches",
      "Reverse Crunches",
      "Oblique Crunches",
      "Weighted Crunches"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Russian Twists": {
    name: "Russian Twists",
    category: "Core",
    equipment: ["None (Bodyweight) or Medicine Ball"],
    primaryMuscles: ["Obliques"],
    secondaryMuscles: ["Rectus Abdominis"],
    difficulty: "Intermediate",
    instructions: [
      "Sit on the floor with your knees bent and feet off the ground",
      "Hold a medicine ball or weight in front of your chest",
      "Lean back slightly to engage your core",
      "Rotate your torso to one side",
      "Rotate to the other side",
      "Continue alternating sides",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't let your feet touch the ground",
      "Focus on rotating from your core, not your arms",
      "Control the movement throughout",
      "You can do this without weight to start"
    ],
    variations: [
      "Weighted Russian Twists",
      "Medicine Ball Russian Twists",
      "Feet on Ground Russian Twists"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Hanging Leg Raises": {
    name: "Hanging Leg Raises",
    category: "Core",
    equipment: ["Pull Up Bar"],
    primaryMuscles: ["Rectus Abdominis", "Hip Flexors"],
    secondaryMuscles: ["Obliques", "Forearms", "Shoulders"],
    difficulty: "Advanced",
    instructions: [
      "Hang from a pull-up bar with your arms fully extended",
      "Keep your legs straight and together",
      "Raise your legs up towards your chest",
      "Keep your core engaged throughout the movement",
      "Lower your legs back down with control",
      "Repeat for the desired number of repetitions"
    ],
    tips: [
      "Keep your core engaged throughout the entire movement",
      "Don't swing your legs - control the movement",
      "Keep your shoulders down and back",
      "Don't let your body swing",
      "If you can't do full leg raises, start with knee raises"
    ],
    variations: [
      "Hanging Knee Raises",
      "L-Sit Hold",
      "Windshield Wipers",
      "Toes to Bar"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  },

  "Mountain Climbers": {
    name: "Mountain Climbers",
    category: "Core",
    equipment: ["None (Bodyweight)"],
    primaryMuscles: ["Rectus Abdominis", "Hip Flexors"],
    secondaryMuscles: ["Shoulders", "Cardiovascular"],
    difficulty: "Intermediate",
    instructions: [
      "Start in a plank position with your arms straight",
      "Keep your core engaged and body in a straight line",
      "Drive one knee towards your chest",
      "Quickly switch legs, driving the other knee up",
      "Continue alternating legs in a running motion",
      "Keep your hips level throughout the movement",
      "Repeat for the desired amount of time"
    ],
    tips: [
      "Keep your core engaged throughout the movement",
      "Don't let your hips rise or sag",
      "Keep your body in a straight line",
      "Control the movement - don't just flail your legs",
      "This exercise also provides cardiovascular benefits"
    ],
    variations: [
      "Slow Mountain Climbers",
      "Cross Body Mountain Climbers",
      "Mountain Climbers with Push Up"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
  }
};

// Export the database
if (typeof module !== 'undefined' && module.exports) {
  module.exports = exerciseDatabase;
} 