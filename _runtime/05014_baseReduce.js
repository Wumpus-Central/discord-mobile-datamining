// === Module 5014: baseReduce ===

// Module 5014 (baseReduce)

export default function baseReduce(arg0, arg1, arg2, arg3, fn) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let c2 = arg3;
  let tmp = fn(arg0, (arg0, arg1, arg2) => {
    let tmp7;
    const tmp = c2;
    if (tmp) {
      c2 = false;
      tmp7 = arg0;
    } else {
      tmp7 = closure_0(closure_1, arg0, arg1, arg2);
    }
    closure_1 = tmp7;
  });
  return closure_1;
};