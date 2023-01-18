let names = ["karma", "pooja", "dipesh siwa", "dipesh Nepali"];

console.log(names.find((name) => name !== "karma"));
console.log(names.filter((name) => name !== "karma"));
console.log(names.map((name) => `<p>${name}</p>`));
