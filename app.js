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

// Printing numbers from 1 to 20

for (let index = 0; index < 30; index++) {
    console.log(index);
}

// Loading Resources

const loadResources = () => {
    return ['data', 'timeTaken', 'assets', 'speeds'];
};

const RecievedData = loadResources();
console.log(RecievedData);

// Unload Resources
const unloadRes = () => [];
const em = unloadRes();
