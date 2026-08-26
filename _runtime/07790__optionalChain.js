// _runtime/07790__optionalChain.js
arg5._optionalChain = function _optionalChain(arg0) {
  const first = arg0[0];
  closure_1 = first;
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
              const items = [closure_0, ...HermesBuiltin.copyRestArgs()];
              return closure_1.call.apply(items);
            });
            closure_1 = tmp5Result;
            closure_0 = undefined;
            tmp10 = tmp5Result;
          }
        }
        num = num + 2;
        tmp2 = tmp10;
        tmp3 = tmp10;
      }
      closure_0 = tmp2;
      tmp5Result = tmp5(tmp2);
      closure_1 = tmp5Result;
      tmp10 = tmp5Result;
    }
  }
  return tmp3;
};