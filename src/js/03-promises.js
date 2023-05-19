import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const refs = {
  inputFirstDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  labelRef: document.querySelectorAll('.form label')

};
console.log("labelRef:", refs.labelRef);
refs.labelRef.forEach(x=>x.classList.add('label-form'));
form.addEventListener('submit', createPromises);

function createPromises(event) {
  event.preventDefault();
  let { inputFirstDelay, inputStep, inputAmount } = refs;
  let position = 1;
  let delay = Number(inputFirstDelay.value);

  for (let i = 0; i < inputAmount.value; i++) {
      createPromise(position, delay).then(({ position, delay }) => {
      successNotiflix(position, delay);
    }).catch(({ position, delay }) => {
      failNotiflix(position, delay);
    })
    position++;
    delay += Number(inputStep.value);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function successNotiflix(position, delay) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
    clickToClose: true,
    timeout: 4000,
  });
}

function failNotiflix(position, delay) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
    clickToClose: true,
    timeout: 4000,
  });
}
