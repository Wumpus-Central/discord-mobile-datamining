// _runtime/04452_apply.js

export default function apply(call) {
  let tmp;
  let tmp2;
  let tmp3;
  let tmp5;
  let tmp6;
  if (0 === arg2.length) {
    const call4 = call.call;
    return typeof call4 === "unknown" ? call() : call4(arg1);
  } else if (1 === length) {
    const call3 = call.call;
    const first = arg2[0];
    return typeof call3 === "unknown" ? call(first) : call3(arg1, first);
  } else if (2 === length) {
    const call2 = call.call;
    [tmp5, tmp6] = arg2;
    return typeof call2 === "unknown" ? call(tmp5, tmp6) : call2(arg1, tmp5, tmp6);
  } else if (3 === length) {
    call = call.call;
    [tmp, tmp2, tmp3] = arg2;
    if (typeof call === "unknown") {
      let callResult = call(tmp, tmp2, tmp3);
    } else {
      callResult = call(arg1, tmp, tmp2, tmp3);
    }
    return callResult;
  } else {
    return call.apply(arg1, arg2);
  }
};