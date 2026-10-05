// _runtime/metro/01480__.js

export default (arg0, arg1, arg2, arg3) => {
  let _undefined;
  let str11;
  let c0 = arg0;
  let str = arg1;
  let str2 = arg2;
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
    let mapped = keys.map((item) => {
      let joined;
      str = item;
      let _encodeURIComponent = encodeURIComponent;
      if ("string" !== typeof item) {
        if ("boolean" === typeof item) {
          let str5 = "false";
          if (item) {
            str5 = "true";
          }
          str = str5;
        } else if ("number" === typeof item) {
          let _isFinite = isFinite;
          let str4 = "";
          if (isFinite(item)) {
            str4 = item;
          }
          str = str4;
        } else {
          str = "";
        }
      }
      const sum = _encodeURIComponent(str) + str2;
      if (Array.isArray(c0[item])) {
        const arr = c0[item];
        const mapped = arr.map((item) => {
          str = item;
          const _encodeURIComponent = encodeURIComponent;
          if ("string" !== typeof item) {
            if ("boolean" === typeof item) {
              let str5 = "false";
              if (item) {
                str5 = "true";
              }
              str = str5;
            } else if ("number" === typeof item) {
              const _isFinite = isFinite;
              let str4 = "";
              if (isFinite(item)) {
                str4 = item;
              }
              str = str4;
            } else {
              str = "";
            }
          }
          return sum + _encodeURIComponent(str);
        });
        joined = mapped.join(str);
      } else {
        let str6 = tmp4;
        const _encodeURIComponent2 = encodeURIComponent;
        if ("string" !== typeof c0[item]) {
          if ("boolean" === typeof c0[item]) {
            let str10 = "false";
            if (c0[item]) {
              str10 = "true";
            }
            str6 = str10;
          } else if ("number" === typeof c0[item]) {
            const _isFinite2 = isFinite;
            let str9 = "";
            if (isFinite(c0[item])) {
              str9 = tmp4;
            }
            str6 = str9;
          } else {
            str6 = "";
          }
        }
        joined = sum + _encodeURIComponent2(str6);
      }
      return joined;
    });
    const _Boolean = Boolean;
    const found = mapped.filter(Boolean);
    str11 = found.join(str);
  } else {
    let str9 = "";
    str11 = "";
    if (arg3) {
      const str3 = "string";
      let tmp4 = arg3;
      let _encodeURIComponent = encodeURIComponent;
      if ("string" !== typeof arg3) {
        let str4 = "boolean";
        if ("boolean" === typeof arg3) {
          let str6 = "false";
          if (arg3) {
            str6 = "true";
          }
          tmp4 = str6;
        } else {
          let str5 = "number";
          if ("number" === typeof arg3) {
            let _isFinite = isFinite;
            let tmp5 = str9;
            if (isFinite(arg3)) {
              tmp5 = arg3;
            }
            tmp4 = tmp5;
          } else {
            tmp4 = str9;
          }
        }
      }
      let tmp8 = tmp;
      let sum = _encodeURIComponent(tmp4) + str2;
      let _encodeURIComponent2 = encodeURIComponent;
      if ("string" !== typeof arg0) {
        if ("boolean" === typeof arg0) {
          let str10 = "false";
          if (arg0) {
            str10 = "true";
          }
          tmp8 = str10;
        } else if ("number" === typeof arg0) {
          let _isFinite2 = isFinite;
          if (isFinite(arg0)) {
            str9 = tmp;
          }
          tmp8 = str9;
        } else {
          tmp8 = str9;
        }
      }
      str11 = sum + _encodeURIComponent2(tmp8);
    }
  }
  return str11;
};
