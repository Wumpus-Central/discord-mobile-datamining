// === Module 148: flattenStyle ===

// Module 148 (flattenStyle)
function flattenStyle(arg0) {
  if (null !== arg0) {
    if (typeof arg0 === "ay") {
      const _Array = Array;
      if (Array.isArray(arg0)) {
        const obj = {};
        let num = 0;
        if (0 < arg0.length) {
          do {
            let tmp2 = flattenStyle;
            let tmp3 = flattenStyle(arg0[num]);
            let tmp4 = num;
            if (tmp3) {
              let tmp5 = tmp3;
              for (const key10019 in tmp3) {
                let tmp6 = key10019;
                obj[key10019] = tmp3[key10019];
                continue;
              }
            }
            num = num + 1;
          } while (num < length);
        }
        return obj;
      } else {
        return arg0;
      }
    }
  }
}
arg5.default = flattenStyle;