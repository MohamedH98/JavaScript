console.log("Test Start"); // synchronous code in the GEC
setTimeout(() => console.log("0 seconds timer")); // asynch code in the callback queue
Promise.resolve("Resolved promise 1").then((res) => console.log(res)); // asynch code in the microtask queue
Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000000; i++) console.log(res);
}); // asynch code in the microtask queue
console.log("Test log"); // synchronous code in the GEC
