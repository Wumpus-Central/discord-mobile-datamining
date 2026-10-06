// === Module 5005: apply ===

// Module 5005 (apply)

export default function apply(call, arg1, arg2) {
  let tmp;
  let tmp2;
  let tmp3;
  if (0 === arg2.length) {
    return call.call(arg1);
  } else if (1 === arg2.length) {
    return call.call(arg1, arg2[0]);
  } else if (2 === arg2.length) {
    return call.call(arg1, arg2[0], arg2[1]);
  } else if (3 === arg2.length) {
    [tmp, tmp2, tmp3] = arg2;
    return call.call(arg1, tmp, tmp2, tmp3);
  } else {
    return call.apply(arg1, arg2);
  }
};