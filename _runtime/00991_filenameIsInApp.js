// === Module 991: filenameIsInApp ===

// Module 991 (filenameIsInApp)
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.filenameIsInApp = function filenameIsInApp(str) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    let tmp = str;
    if (str) {
      tmp = !str.startsWith("/");
    }
    if (tmp) {
      tmp = !str.match(/^[A-Z]:/);
    }
    if (tmp) {
      tmp = !str.startsWith(".");
    }
    if (tmp) {
      tmp = !str.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
    }
    flag = tmp;
  }
  let tmp2 = !flag;
  if (!flag) {
    tmp2 = undefined !== str;
  }
  if (tmp2) {
    tmp2 = !str.includes("node_modules/");
  }
  return tmp2;
};
arg5.node = function node(arg0) {
  let closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const re3 = /at (?:async )?(.+?) \(data:(.*?),/;
  return (str) => {
    const match = str.match(closure_3);
    if (match) {
      let obj = { filename: null, function: null };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "<data:" + match[2] + ">";
      obj[1] = match[1];
      return obj;
    } else {
      const match1 = str.match(closure_2);
      if (match1) {
        let tmp6;
        let tmp7;
        if (match1[1]) {
          const lastIndexOfResult = match1[1].lastIndexOf(".");
          let diff = lastIndexOfResult;
          if ("." === match1[1][lastIndexOfResult - 1]) {
            diff = lastIndexOfResult - 1;
          }
          let substr2 = arr;
          let tmp12;
          let substr3;
          if (diff > 0) {
            const substr = arr.slice(0, diff);
            const substr1 = arr.slice(diff + 1);
            const index = substr.indexOf(".Module");
            substr2 = arr;
            tmp12 = substr1;
            substr3 = substr;
            if (index > 0) {
              substr2 = arr.slice(index + 1);
              substr3 = substr.slice(0, index);
              tmp12 = substr1;
            }
          }
          tmp6 = substr2;
          tmp7 = tmp12;
          const tmp8 = substr3;
        }
        if (tmp7) {
          let UNKNOWN_FUNCTION = tmp7;
        }
        if (undefined === tmp6) {
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = callback(re1[0]).UNKNOWN_FUNCTION;
          }
          let combined = UNKNOWN_FUNCTION;
          if (tmp16) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp16 + "." + UNKNOWN_FUNCTION;
          }
          tmp6 = combined;
        }
        let result = callback(re1[0]).normalizeStackTracePath(match1[2]);
        let tmp24 = result;
        if (!result) {
          tmp24 = !match1[5];
        }
        let tmp25 = "native" === match1[5];
        if (!tmp24) {
          tmp24 = tmp25;
        }
        if (!tmp24) {
          result = match1[5];
        }
        let decodeURIResult;
        if (result) {
          const _decodeURI = decodeURI;
          decodeURIResult = decodeURI(result);
        }
        obj = { filename: null, module: null, function: null, lineno: null, colno: null, in_app: null };
        obj[0] = decodeURIResult;
        let tmp28;
        if (callback) {
          tmp28 = callback(result);
        }
        obj[1] = tmp28;
        obj[2] = tmp6;
        let str7 = match1[3];
        if (!str7) {
          str7 = "";
        }
        const obj2 = callback(re1[0]);
        obj[3] = parseInt(str7, 10) || undefined;
        let str8 = match1[4];
        if (!str8) {
          str8 = "";
        }
        const tmp30 = parseInt(str7, 10) || undefined;
        obj[4] = parseInt(str8, 10) || undefined;
        let str9 = result;
        if (!result) {
          str9 = "";
        }
        if (!tmp25) {
          let tmp32 = str9;
          if (str9) {
            tmp32 = !str9.startsWith("/");
          }
          if (tmp32) {
            tmp32 = !str9.match(/^[A-Z]:/);
          }
          if (tmp32) {
            tmp32 = !str9.startsWith(".");
          }
          if (tmp32) {
            tmp32 = !str9.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
          }
          tmp25 = tmp32;
        }
        let tmp33 = !tmp25;
        if (!tmp25) {
          tmp33 = undefined !== str9;
        }
        if (tmp33) {
          tmp33 = !str9.includes("node_modules/");
        }
        obj[5] = tmp33;
        return obj;
      } else {
        let tmp5;
        if (str.match(closure_1)) {
          obj = { filename: null };
          obj[0] = str;
          tmp5 = obj;
        }
        return tmp5;
      }
    }
  };
};
arg5.nodeStackLineParser = function nodeStackLineParser(arg0) {
  let closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const re3 = /at (?:async )?(.+?) \(data:(.*?),/;
  const items = [
    90,
    (str) => {
      const match = str.match(closure_3);
      if (match) {
        let obj = { filename: null, function: null };
        const _HermesInternal2 = HermesInternal;
        obj[0] = "<data:" + match[2] + ">";
        obj[1] = match[1];
        return obj;
      } else {
        const match1 = str.match(closure_2);
        if (match1) {
          let tmp6;
          let tmp7;
          if (match1[1]) {
            const lastIndexOfResult = match1[1].lastIndexOf(".");
            let diff = lastIndexOfResult;
            if ("." === match1[1][lastIndexOfResult - 1]) {
              diff = lastIndexOfResult - 1;
            }
            let substr2 = arr;
            let tmp12;
            let substr3;
            if (diff > 0) {
              const substr = arr.slice(0, diff);
              const substr1 = arr.slice(diff + 1);
              const index = substr.indexOf(".Module");
              substr2 = arr;
              tmp12 = substr1;
              substr3 = substr;
              if (index > 0) {
                substr2 = arr.slice(index + 1);
                substr3 = substr.slice(0, index);
                tmp12 = substr1;
              }
            }
            tmp6 = substr2;
            tmp7 = tmp12;
            const tmp8 = substr3;
          }
          if (tmp7) {
            let UNKNOWN_FUNCTION = tmp7;
          }
          if (undefined === tmp6) {
            if (!UNKNOWN_FUNCTION) {
              UNKNOWN_FUNCTION = callback(re1[0]).UNKNOWN_FUNCTION;
            }
            let combined = UNKNOWN_FUNCTION;
            if (tmp16) {
              const _HermesInternal = HermesInternal;
              combined = "" + tmp16 + "." + UNKNOWN_FUNCTION;
            }
            tmp6 = combined;
          }
          let result = callback(re1[0]).normalizeStackTracePath(match1[2]);
          let tmp24 = result;
          if (!result) {
            tmp24 = !match1[5];
          }
          let tmp25 = "native" === match1[5];
          if (!tmp24) {
            tmp24 = tmp25;
          }
          if (!tmp24) {
            result = match1[5];
          }
          let decodeURIResult;
          if (result) {
            const _decodeURI = decodeURI;
            decodeURIResult = decodeURI(result);
          }
          obj = { filename: null, module: null, function: null, lineno: null, colno: null, in_app: null };
          obj[0] = decodeURIResult;
          let tmp28;
          if (callback) {
            tmp28 = callback(result);
          }
          obj[1] = tmp28;
          obj[2] = tmp6;
          let str7 = match1[3];
          if (!str7) {
            str7 = "";
          }
          const obj2 = callback(re1[0]);
          obj[3] = parseInt(str7, 10) || undefined;
          let str8 = match1[4];
          if (!str8) {
            str8 = "";
          }
          const tmp30 = parseInt(str7, 10) || undefined;
          obj[4] = parseInt(str8, 10) || undefined;
          let str9 = result;
          if (!result) {
            str9 = "";
          }
          if (!tmp25) {
            let tmp32 = str9;
            if (str9) {
              tmp32 = !str9.startsWith("/");
            }
            if (tmp32) {
              tmp32 = !str9.match(/^[A-Z]:/);
            }
            if (tmp32) {
              tmp32 = !str9.startsWith(".");
            }
            if (tmp32) {
              tmp32 = !str9.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
            }
            tmp25 = tmp32;
          }
          let tmp33 = !tmp25;
          if (!tmp25) {
            tmp33 = undefined !== str9;
          }
          if (tmp33) {
            tmp33 = !str9.includes("node_modules/");
          }
          obj[5] = tmp33;
          return obj;
        } else {
          let tmp5;
          if (str.match(closure_1)) {
            obj = { filename: null };
            obj[0] = str;
            tmp5 = obj;
          }
          return tmp5;
        }
      }
    }
  ];
  return items;
};