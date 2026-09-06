// === Module 4683: baseReduce ===

// Module 4683 (baseReduce)

export default function baseReduce(arg0, arg1, arg2, arg3, fn) {
  closure_0 = arg1;
  closure_1 = arg2;
  c2 = arg3;
  fn(arg0, (arg0, arg1, arg2) => {
    if (c2) {
      c2 = false;
      let tmp6 = arg0;
    } else {
      tmp6 = closure_0(closure_1, arg0, arg1, arg2);
    }
    closure_1 = tmp6;
  });
  return closure_1;
};