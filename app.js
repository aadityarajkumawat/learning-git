const createMeeting = (agenda, problem) => {
    return [agenda, problem];
};

const age = 19;

const newMeeting = createMeeting('Increasing Sales', 'Marketing Department');

if (age > 18) {
    console.log('Agenada:', newMeeting[0]);
} else if (age < 18) {
    console.log('Sorry you are not invited for the meeting');
}

const childAnnualMeet = (festival) => {
    console.log(festival);
};
