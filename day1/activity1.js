const greeting = () => {
    console.log("Hello Codenation")
}

const runFiveTimes = (fn) => {
    for (let i = 0; i < 5; i++) {
        fn();
    }
};

runFiveTimes(greeting)

//How can I run this X times?