// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");

                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>Mashed Potatoes are ready!</li>`;
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    obtainInstruction("steak", 1)
      .then((step1) => {
        document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
        obtainInstruction("steak", 2)
          .then((step2) => {
            document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
            obtainInstruction("steak", 3)
              .then((step3) => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>${step3}</li>`;
                obtainInstruction("steak", 4)
                  .then((step4) => {
                    document.querySelector(
                      "#steak"
                    ).innerHTML += `<li>${step4}</li>`;
                    obtainInstruction("steak", 5)
                      .then((step5) => {
                        document.querySelector(
                          "#steak"
                        ).innerHTML += `<li>${step5}</li>`;
                        obtainInstruction("steak", 6)
                          .then((step6) => {
                            document.querySelector(
                              "#steak"
                            ).innerHTML += `<li>${step6}</li>`;
                            obtainInstruction("steak", 7)
                              .then((step7) => {
                                document.querySelector(
                                  "#steak"
                                ).innerHTML += `<li>The steak is ready!</li>`;
                                document
                                  .querySelector("#steakImg")
                                  .removeAttribute("hidden");
                              })
                              .catch((err) => {
                                console.log("error:", err);
                              });
                          })
                          .catch((err) => {
                            console.log("error:", err);
                          });
                      })
                      .catch((err) => {
                        console.log("error:", err);
                      });
                  })
                  .catch((err) => {
                    console.log("error:", err);
                  });
              })
              .catch((err) => {
                console.log("error:", err);
              });
          })
          .catch((err) => {
            console.log("error:", err);
          });
      })
      .catch((err) => {
        console.log("error:", err);
      });
  })
  .catch((err) => {
    console.log("error:", err);
  });

// ...

// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here
  const steps = await Promise.all(
    broccoli.map((instruction, i) => {
      return obtainInstruction("broccoli", i);
    })
  );

  length = steps.length;
  steps.forEach((instruction, i) => {
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    if (i === length - 1) {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>Broccoli is ready!</li>`;
      document.querySelector("#broccoliImg").removeAttribute("hidden");
    }
  });
}
makeBroccoli();

// Bonus 2 - Promise all
// ...
async function makeBrussels() {
  // ... Your code here
  const steps = await Promise.all(
    broccoli.map((instruction, i) => {
      return obtainInstruction("brusselsSprouts", i);
    })
  );

  length = steps.length;
  steps.forEach((instruction, i) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${instruction}</li>`;
    if (i === length - 1) {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>Brussels Sprouts is ready!</li>`;
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    }
  });
}
makeBrussels();
