const digits = '9876543210';
const target = 200;

function search(index, expression, sum, term) {
  if (index === digits.length) {
    if (sum + term === target) {
      console.log(`${expression}=${target}`);
    }
    return;
  }

  const digit = Number(digits[index]);

  // Приписываем цифру к текущему числу, сохраняя его знак.
  const joined = term >= 0 ? term * 10 + digit : term * 10 - digit;
  search(index + 1, expression + digit, sum, joined);

  // Завершаем текущее число и начинаем новое со знаком + или -.
  search(index + 1, expression + '+' + digit, sum + term, digit);
  search(index + 1, expression + '-' + digit, sum + term, -digit);
}

search(1, digits[0], 0, Number(digits[0]));
