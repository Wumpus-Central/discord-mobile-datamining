// === Module 547: overArg ===

// Module 547 (overArg)

export default function overArg(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return (arg0) => closure_0(closure_1(arg0));
};