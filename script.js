const formSteps = document.querySelectorAll(".form-step");
const topics = document.querySelectorAll(".topic");

function showStep(step) {
  formSteps.forEach((stepElement, index) => {
    if (index === step) {
      stepElement.classList.add("active");
    } else {
      stepElement.classList.remove("active");
    }
  });

  topics.forEach((topic, index) => {
    if (index === step) {
      topic.classList.add("active-topic");
    } else {
      topic.classList.remove("active-topic");
    }
  });
}

function nextStep() {
  const currentStep = Array.from(formSteps).findIndex((step) =>
    step.classList.contains("active")
  );
  if (currentStep < formSteps.length - 1) {
    showStep(currentStep + 1);
  }
}

function prevStep() {
  const currentStep = Array.from(formSteps).findIndex((step) =>
    step.classList.contains("active")
  );
  if (currentStep > 0) {
    showStep(currentStep - 1);
  }
}

showStep(0);
