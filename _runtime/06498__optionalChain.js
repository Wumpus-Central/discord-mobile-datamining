// _runtime/06498__optionalChain.js
arg5._optionalChain = function _optionalChain(arg0) {
  let first = arg0[0];
  let num = 1;
  let tmp2 = first;
  let tmp3 = first;
  if (1 < arg0.length) {
    while (true) {
      let tmp4 = arg0[num];
      let tmp5 = arg0[num + 1];
      let tmp6 = "optionalAccess" === tmp4;
      let tmp7 = num;
      let tmp8 = tmp2;
      if (tmp6) {
        if (null == tmp2) {
          break;
        }
      }
      if ("access" !== tmp4) {
        if (!tmp6) {
          let tmp9 = "call" !== tmp4 && "optionalCall" !== tmp4;
          let tmp10 = tmp2;
          if (!tmp9) {
            let tmp5Result = tmp5(() => {
              const items = [c0, ...HermesBuiltin.copyRestArgs()];
              return first.call.apply(items);
            });
            first = tmp5Result;
            let c0;
            tmp10 = tmp5Result;
          }
        }
        num = num + 2;
        tmp2 = tmp10;
        tmp3 = tmp10;
      }
      c0 = tmp2;
      tmp5Result = tmp5(tmp2);
      first = tmp5Result;
      tmp10 = tmp5Result;
    }
  }
  return tmp3;
};