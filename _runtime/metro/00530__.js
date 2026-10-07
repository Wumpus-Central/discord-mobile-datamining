// === Module 530: ? ===

// Module 530

export default function createBaseFor(arg0) {
  closure_0 = arg0;
  return (arg0, fn, fn2) => {
    const ObjectResult = Object(arg0);
    const arr = fn2(arg0);
    let diff = tmp2 - 1;
    let num = -1;
    if (+arr.length) {
      while (true) {
        let sum = num;
        let tmp8 = diff;
        if (!closure_0) {
          sum = num + 1;
          tmp8 = sum;
        }
        let tmp9 = arr[tmp8];
        if (false === fn(ObjectResult[tmp9], tmp9, ObjectResult)) {
          break;
        } else {
          let tmp10 = +diff;
          diff = tmp10 - 1;
          num = sum;
          if (!tmp10) {
            break;
          }
        }
      }
    }
    return arg0;
  };
};