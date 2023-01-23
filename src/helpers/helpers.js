/* eslint-disable no-undef */
export const applyMaskPhone = (event) => {
  let value = event.target.value;
  value = value.replace(/[^\d]/g, "");
  let result = "";
  let count = 0;
  for (let i = 0; i < value.length; i++) {
    if (count === 0) {
      result += "+";
    } else if (count === 1) {
      result += "-";
    } else if (count === 4) {
      result += "-";
    } else if (count === 7) {
      result += "-";
    }
    result += value[i];
    count++;
  }
  event.target.value = result.slice(0, 15);
};
