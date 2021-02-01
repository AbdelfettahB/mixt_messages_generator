const randomIndex = (num) => Math.floor(Math.random() * num);
const messages = {
  name: ["Abdelfettah", "Asmaa", "Nusseibah", "Nora"],
  quality: [
    "super star",
    "coder",
    "math genius",
    "very strong",
    "mashaa allah",
  ],
  hobby: ["pasta", "chess", "treadmill", "reading", "tuna"],
};
let mixtMessages = [];

for (let arr in messages) {
  const message = messages[arr][randomIndex(messages[arr].length)];
  if (arr == "name") {
    let random = `My name is ${message}`;
    mixtMessages.push(random);
  } else if (arr == "quality") {
    let random = `I am ${message}`;
    mixtMessages.push(random);
  } else {
    let random = `I love ${message}`;
    mixtMessages.push(random);
  }
  //console.log(arr);
}
console.log(mixtMessages.join("\n"));
