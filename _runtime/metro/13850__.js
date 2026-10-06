// === Module 13850: ? ===

// Module 13850
let closure_0 = Object.freeze({ loose: true });
let closure_1 = Object.freeze({});

export default (arg0) => {
  let tmp2;
  let tmp = arg0;
  if (tmp) {
    if (typeof tmp !== "object") {
      tmp = closure_0;
    }
    tmp2 = tmp;
  } else {
    tmp2 = closure_1;
  }
  return tmp2;
};