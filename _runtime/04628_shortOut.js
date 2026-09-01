// _runtime/04628_shortOut.js

export default function shortOut(arg0) {
  closure_0 = arg0;
  c1 = 0;
  c2 = 0;
  return () => {
    const tmp = callback();
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
    return callback(...arguments);
  };
};