// _runtime/01486_str2.js

export default (arg0, arg1, arg2, arg3) => {
  let c0 = arg0;
  let str = arg1;
  str = arg1;
  let str2 = arg2;
  str2 = arg2;
  if (!arg1) {
    str = "&";
  }
  if (!str2) {
    str2 = "=";
  }
  if (null === arg0) {
    c0 = undefined;
  }
  if (typeof arg0 === "object") {
    const _Object = Object;
    const keys = Object.keys(tmp);
    let mapped = keys.map((arg0) => {
      let str = arg0;
      if ("string" !== typeof arg0) {
        if ("boolean" === tmp) {
          let str5 = "false";
          if (arg0) {
            str5 = "true";
          }
          str = str5;
        } else if ("number" === tmp) {
          let _isFinite = isFinite;
          let str4 = "";
          if (isFinite(arg0)) {
            str4 = arg0;
          }
          str = str4;
        } else {
          str = "";
        }
      }
      const sum = encodeURIComponent(str) + str2;
      const _undefined = sum;
      if (Array.isArray(_undefined[arg0])) {
        const mapped = tmp3[arg0].map((arg0) => {
          let str = arg0;
          if ("string" !== typeof arg0) {
            if ("boolean" === tmp2) {
              let str5 = "false";
              if (arg0) {
                str5 = "true";
              }
              str = str5;
            } else if ("number" === tmp2) {
              const _isFinite = isFinite;
              let str4 = "";
              if (isFinite(arg0)) {
                str4 = arg0;
              }
              str = str4;
            } else {
              str = "";
            }
          }
          return closure_0 + encodeURIComponent(str);
        });
        let joined = mapped.join(str);
        const arr = tmp3[arg0];
      } else {
        let str6 = tmp4;
        if ("string" !== typeof tmp3[arg0]) {
          if ("boolean" === tmp5) {
            let str10 = "false";
            if (tmp4) {
              str10 = "true";
            }
            str6 = str10;
          } else if ("number" === tmp5) {
            const _isFinite2 = isFinite;
            let str9 = "";
            if (isFinite(tmp4)) {
              str9 = tmp4;
            }
            str6 = str9;
          } else {
            str6 = "";
          }
        }
        joined = sum + encodeURIComponent(str6);
      }
      return joined;
    });
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    let str10 = found.join(str);
  } else {
    let str9 = "";
    str10 = "";
    if (arg3) {
      let isFiniteResult = globalThis;
      const _encodeURIComponent = encodeURIComponent;
      if ("string" !== typeof arg3) {
        if ("boolean" === tmp2) {
          let str6 = "false";
          if (arg3) {
            str6 = "true";
          }
        } else if ("number" === tmp2) {
          let _isFinite = isFinite;
          let tmp4 = str9;
          if (isFinite(arg3)) {
            tmp4 = arg3;
          }
        }
      }
      let tmp7 = tmp;
      if ("string" === typeof tmp) {
        let sum = tmp5 + encodeURIComponent(tmp7);
      } else if ("boolean" === tmp6) {
        str9 = "false";
        if (tmp) {
          str9 = "true";
        }
        tmp7 = str9;
      } else if ("number" !== tmp6) {
        tmp7 = str9;
      }
      isFiniteResult = isFiniteResult.isFinite(tmp);
      if (isFiniteResult) {
        str9 = tmp;
      }
      tmp7 = str9;
    }
  }
  return str10;
};