const quizData = [
    {
      question: "It is illegal for a person 21 years of age or older to drive with a blood alcohol concentration (BAC) that is ____ or higher.",
      options: ["0.08%", "0.10%", "0.05%", "0.02%"],
      correct: "0.08%",
      complexity: "easy"
    },
    {
      question: "You must notify DMV within 5 days if you:",
      options: ["sell or transfer your vehicle", "get a new driver's license", "move to another state", "replace your car tires"],
      correct: "sell or transfer your vehicle",
      complexity: "easy"
    },
    {
      question: "You are getting ready to make a right turn. You should:",
      options: ["signal during the last 100 feet before you turn", "signal 300 feet before the turn", "signal as you start the turn", "signal after making the turn"],
      correct: "signal during the last 100 feet before you turn",
      complexity: "medium"
    },
    {
      question: "For which of the following traffic lights must you always stop your vehicle?",
      options: ["solid red lights", "flashing yellow lights", "green lights", "flashing yellow lights"],
      correct: "solid red lights",
      complexity: "easy"
    },
    {
      question: "When is it legal to use a cell phone without a hands-free device while driving?",
      options: ["when making a call for emergency assistance", "while driving in a school zone", "when listening to music", "when stopped at a traffic signal"],
      correct: "when making a call for emergency assistance",
      complexity: "medium"
    },
    {
      question: "When a traffic signal light isn't working at an intersection, you should:",
      options: ["come to a complete stop then proceed when it is safe", "proceed with caution", "slow down but keep moving", "follow other vehicles through the intersection"],
      correct: "come to a complete stop then proceed when it is safe",
      complexity: "medium"
    },
    {
      question: "You should adjust your rear view and side view mirrors:",
      options: ["before you start driving", "after you start driving", "only when you can't see clearly", "when you hear a horn from behind"],
      correct: "before you start driving",
      complexity: "easy"
    },
    {
      question: "Smoking inside a vehicle when a person younger than 18 years of age is present is:",
      options: ["illegal at all times", "only illegal on highways", "illegal if the car is moving", "illegal at night"],
      correct: "illegal at all times",
      complexity: "easy"
    },
    {
      question: "You must make a written report of a traffic accident occurring in California (SR 1) to DMV if you:",
      options: ["are involved in a collision and there is more than $750 in damages", "injure a pedestrian", "are involved in a collision with a parked car", "are involved in a collision with a bicycle"],
      correct: "are involved in a collision and there is more than $750 in damages",
      complexity: "medium"
    },
    {
      question: "It is a good habit to signal continuously during the last 100 feet before you turn at an intersection:",
      options: ["even if you do not see any other vehicles around", "only when there are other vehicles around", "only if you are driving at night", "if you are changing lanes in a parking lot"],
      correct: "even if you do not see any other vehicles around",
      complexity: "medium"
    },
    {
      question: "When sharing the road with a light rail vehicle:",
      options: ["never turn in front of an approaching light rail vehicle", "always pass the vehicle", "turn in front of the light rail if it's stopped", "stop at all signals regardless of the direction"],
      correct: "never turn in front of an approaching light rail vehicle",
      complexity: "hard"
    },
    {
      question: "You are driving at night on a dimly lit street and using high beams. You should dim your lights when you are within 500 feet of:",
      options: ["a vehicle approaching you from behind", "an intersection", "a school bus", "a stop sign"],
      correct: "a vehicle approaching you from behind",
      complexity: "medium"
    },
    {
      question: "Allow extra space in front of your vehicle when following a:",
      options: ["large tour bus", "motorcycle", "sports car", "bicycle"],
      correct: "large tour bus",
      complexity: "easy"
    },
    {
      question: "Even if you know your vehicle can maneuver a sharp curve at the legal speed limit, you should still slow down because:",
      options: ["there may be a stalled car or collision ahead that you can't see", "it is illegal to go faster than the posted speed limit", "you may encounter a police officer", "the road is slippery"],
      correct: "there may be a stalled car or collision ahead that you can't see",
      complexity: "medium"
    },
    {
      question: "You park your car at the curb on a level two-way street. Before getting out of your car, you should:",
      options: ["look for cars or bicycles on the traffic side of your vehicle", "open the door without looking", "use your horn to signal cars", "check your rearview mirror only"],
      correct: "look for cars or bicycles on the traffic side of your vehicle",
      complexity: "easy"
    },
    {
      question: "Who has the right-of-way at an intersection with no crosswalks?",
      options: ["pedestrians always have the right-of-way", "vehicles on the main road", "bicycles have the right-of-way", "vehicles turning left"],
      correct: "pedestrians always have the right-of-way",
      complexity: "medium"
    },
    {
      question: "If you approach a curve or the top of a hill and you do not have a clear view of the road ahead, you should:",
      options: ["slow down so you can stop if necessary", "accelerate to get through quickly", "stay in your lane and speed up", "maintain your speed and lane position"],
      correct: "slow down so you can stop if necessary",
      complexity: "medium"
    },
    {
      question: "Whose responsibility is it to know how your medications affect your driving?",
      options: ["yours", "your doctor's", "your employer's", "your passenger's"],
      correct: "yours",
      complexity: "easy"
    },
    {
      question: "Which of the following is true about safety belts and collisions?",
      options: ["they increase your chances of survival in most types of collisions", "they are optional in cars built after 2000", "they only protect you in minor collisions", "they are not effective during rollovers"],
      correct: "they increase your chances of survival in most types of collisions",
      complexity: "easy"
    },
    {
      question: "If you are unable to see the road ahead while driving because of heavy fog and your wipers do not help, you should:",
      options: ["pull off the road completely until visibility improves", "continue driving at a slower speed", "turn on your high beams", "stop in the middle of the road"],
      correct: "pull off the road completely until visibility improves",
      complexity: "hard"
    },
    {
      question: "This red and white sign means:",
      options: ["you may not enter the road from your direction", "you must stop immediately", "you must yield", "you can enter the road but must slow down"],
      correct: "you may not enter the road from your direction",
      complexity: "medium"
    },
    {
      question: "You are required to wear your safety belt in a moving vehicle:",
      options: ["and failure to do so will result in a traffic ticket", "but only if driving on highways", "unless you are sitting in the back seat", "if you are under 18 years of age"],
      correct: "and failure to do so will result in a traffic ticket",
      complexity: "easy"
    },
    {
      question: "You are crossing an intersection and an emergency vehicle is approaching with a siren and flashing lights. You should:",
      options: ["pull to the right in the intersection and stop", "continue crossing and then pull over", "stop immediately in the intersection", "proceed without stopping"],
      correct: "pull to the right in the intersection and stop",
      complexity: "medium"
    },
    {
      question: "You are on a two-way road and the vehicle ahead of you is turning left into a driveway. You may legally pass on the right:",
      options: ["if there is enough road between the curb and the vehicle", "if the vehicle is a large truck", "if there is a designated lane", "only if the left turn is taking too long"],
      correct: "if there is enough road between the curb and the vehicle",
      complexity: "medium"
    },
    {
      question: "If you have a green light, but traffic is blocking the intersection:",
      options: ["stay out of the intersection and wait until traffic clears", "proceed with caution", "block the intersection so you can move forward", "move to the shoulder and wait"],
      correct: "stay out of the intersection and wait until traffic clears",
      complexity: "easy"
    }
  ];
  
  export default quizData;
  