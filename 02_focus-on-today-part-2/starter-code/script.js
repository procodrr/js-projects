const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputFields].every(function (input) {
      return input.value
    })

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle('completed')
      progressValue.style.width = '33.33%'
    } else {
        progressBar.classList.add('show-error')
    }
  })
})

inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-error')
    })
})
