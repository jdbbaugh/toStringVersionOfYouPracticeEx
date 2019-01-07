const Me = Object.create(null, {
  firstName: {
    value: "Joseph",
  },
  lastName: {
    value: "Baugh",
  },
  birthDate: {
    value: "1984-04-14",
  },
  birthPlace: {
    value: "Springerville, AZ",
  },
  currentCity: {
    value: "Nashville",
    writable: true
  },
  currentState: {
    value: "TN",
    writable: true
  },
  toString: {
      value:  () => {
          // Your code goes here
          const coolStory = document.createElement("div")
          coolStory.textContent =`${Me.firstName} ${Me.lastName} was born in ${Me.birthPlace}. He was born ${Me.birthDate}. He currently lives in ${Me.currentCity}, ${Me.currentState}.`
          const containerTarget = document.getElementById("output");
          containerTarget.appendChild(coolStory)
      }
  },
})

Me.toString()

