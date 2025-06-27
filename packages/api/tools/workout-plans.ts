const getWorkoutPlan = {
  name: 'getWorkoutPlan',
  description: 'Returns a 3-day beginner gym workout plan',
  run: async () => ({
    content: [
      {
        type: 'text',
        text: `🏋️‍♀️ 3-Day Beginner Plan:
Day 1: Full Body Strength (Squats, Pushups, Rows)
Day 2: Cardio + Core (Jogging, Plank, Crunches)
Day 3: Active Recovery (Stretching, Yoga)`,
      },
    ],
    isError: false,
  }),
};

export default getWorkoutPlan;
