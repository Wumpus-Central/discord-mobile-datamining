
export default function shortOut(arg0) {
  let closure_0 = arg0;
  let c1 = 0;
  let c2 = 0;
  return () => {
    const tmp = callback();
    let c2 = tmp;
    if (0 < 16 - (tmp - c2)) {
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