// _runtime/04508_baseReduce.js

export default function baseReduce(arg0, arg1, arg2, arg3, arg4) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  arg4(arg0, (arg0, arg1, arg2) => {
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