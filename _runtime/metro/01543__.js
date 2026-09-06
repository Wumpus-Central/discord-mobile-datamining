// === Module 1543: ? ===

// Module 1543

export default (arg0, arr) => {
  const obj = {};
  const keys = Object.keys(arg0);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp2 = keys[num];
    let tmp3 = arg0[tmp2];
    let tmp4 = num;
    if (tmp) {
      let tmp5 = -1 !== arr.indexOf(tmp2);
    } else {
      tmp5 = arr(tmp2, tmp3, arg0);
    }
    if (tmp5) {
      obj[tmp2] = tmp3;
    }
  }
  return obj;
};