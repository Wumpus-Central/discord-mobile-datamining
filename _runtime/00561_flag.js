// _runtime/00561_flag.js
let flag = tmp;
if (Object.defineProperty || false) {
  try {
    tmp({}, "a", { value: 1 });
    flag = tmp;
  } catch (err) {
    flag = false;
  }
}

export default flag;
