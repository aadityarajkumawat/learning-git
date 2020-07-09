const createMeeting = (agenda, problem) => {
    return [agenda, problem];
};

const age = 19;

const newMeeting = createMeeting('Increasing Sales', 'Marketing Department');

if (age > 18) {
    console.log('Agenada:', newMeeting[0]);
}
