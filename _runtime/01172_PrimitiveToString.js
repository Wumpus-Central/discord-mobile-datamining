// === Module 1172: PrimitiveToString ===

// Module 1172 (PrimitiveToString)
arg5.PrimitiveToString = function PrimitiveToString(arg0) {
  if (null === arg0) {
    return "";
  } else {
    if ("string" !== typeof arg0) {
      if ("boolean" === tmp) {
        let str8 = "False";
        if (1 == arg0) {
          str8 = "True";
        }
        return str8;
      } else {
        if ("number" !== tmp) {
          if ("bigint" !== tmp) {
            if ("undefined" !== tmp) {
              if ("symbol" === tmp) {
                return arg0.toString();
              }
            }
          }
        }
        const _HermesInternal = HermesInternal;
        return "" + arg0;
      }
    }
    return arg0;
  }
};