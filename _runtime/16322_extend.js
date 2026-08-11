// _runtime/16322_extend.js
arg5.extend = function extend(arg0) {
  const call = slice.call;
  if (typeof call === "unknown") {
    let substr = slice(1);
  } else {
    substr = call(arguments, 1);
  }
  for (let num2 = 0; num2 < length; num2 = num2 + 1) {
    let tmp2 = substr[num2];
    let tmp3 = num2;
    if (tmp2) {
      let tmp4 = tmp2;
      for (const key10018 in tmp2) {
        let tmp8 = key10018;
        let tmp9 = hasOwnProperty;
        let call2 = hasOwnProperty.call;
        if (typeof call2 === "unknown") {
          let call2Result = tmp9(key10018);
        } else {
          call2Result = call2(tmp2, key10018);
        }
        if (!call2Result) {
          continue;
        } else {
          arg0[key10018] = tmp2[key10018];
          continue;
        }
        continue;
      }
    }
  }
  return arg0;
};
arg5.hop = hasOwnProperty;