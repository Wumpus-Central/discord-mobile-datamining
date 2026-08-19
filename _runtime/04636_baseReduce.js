// _runtime/04636_baseReduce.js

export default function baseReduce(closure_0, closure_0, arg2, arg3, fn) {
  closure_1 = arg2;
  closure_2 = arg3;
  fn(closure_0, (arg0, arg1, arg2) => {
    if (c2) {
      c2 = false;
      let tmp6 = arg0;
    } else {
      tmp6 = callback(closure_1, arg0, arg1, arg2);
    }
    closure_1 = tmp6;
  });
  return closure_1;
};