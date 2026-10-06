// _runtime/05001_shortOut.js

export default function shortOut(arg0) {
  let closure_0 = arg0;
  let c1 = 0;
  let closure_2 = 0;
  return function () {
    const tmp = now();
    closure_2 = tmp;
    if (0 < 16 - (tmp - closure_2)) {
      const sum = c1 + 1;
      c1 = sum;
      if (800 <= sum) {
        return arguments[0];
      }
    } else {
      c1 = 0;
    }
    return closure_0(...arguments);
  };
}
