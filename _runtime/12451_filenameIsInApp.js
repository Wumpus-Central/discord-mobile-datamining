// === Module 12451: filenameIsInApp ===

// Module 12451 (filenameIsInApp)
const require = arg1;
const dependencyMap = arg6;
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
  closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  return (str) => {
    const match = str.match(closure_2);
    if (match) {
      let tmp3;
      let tmp4;
      if (match[1]) {
        const lastIndexOfResult = match[1].lastIndexOf(".");
        let diff = lastIndexOfResult;
        if ("." === match[1][lastIndexOfResult - 1]) {
          diff = lastIndexOfResult - 1;
        }
        let substr2 = arr;
        let tmp9;
        let substr3;
        if (diff > 0) {
          const substr = arr.slice(0, diff);
          const substr1 = arr.slice(diff + 1);
          const index = substr.indexOf(".Module");
          substr2 = arr;
          tmp9 = substr1;
          substr3 = substr;
          if (index > 0) {
            substr2 = arr.slice(index + 1);
            substr3 = substr.slice(0, index);
            tmp9 = substr1;
          }
        }
        tmp3 = substr2;
        tmp4 = tmp9;
        const tmp5 = substr3;
      }
      if (tmp4) {
        let UNKNOWN_FUNCTION = tmp4;
      }
      if (undefined === tmp3) {
        if (!UNKNOWN_FUNCTION) {
          UNKNOWN_FUNCTION = callback(re1[0]).UNKNOWN_FUNCTION;
        }
        let combined = UNKNOWN_FUNCTION;
        if (tmp13) {
          const _HermesInternal = HermesInternal;
          combined = "" + tmp13 + "." + UNKNOWN_FUNCTION;
        }
        tmp3 = combined;
      }
      if (match[2]) {
        if (obj2.startsWith("file://")) {
          let str7 = match[2].slice(7);
          const arr3 = match[2];
        }
        let match1 = str7;
        if (str7) {
          match1 = str7.match(/\/[A-Z]:/);
        }
        let substr4 = str7;
        if (match1) {
          substr4 = str7.slice(1);
        }
        let tmp20 = substr4;
        if (!substr4) {
          tmp20 = !match[5];
        }
        let tmp21 = "native" === match[5];
        if (!tmp20) {
          tmp20 = tmp21;
        }
        if (!tmp20) {
          substr4 = match[5];
        }
        let decodeURIResult;
        if (substr4) {
          const _decodeURI = decodeURI;
          decodeURIResult = decodeURI(substr4);
        }
        let obj = { filename: null, module: null, function: null, lineno: null, colno: null, in_app: null };
        obj[0] = decodeURIResult;
        let tmp24;
        if (callback) {
          tmp24 = callback(substr4);
        }
        obj[1] = tmp24;
        obj[2] = tmp3;
        let str9 = match[3];
        if (!str9) {
          str9 = "";
        }
        obj[3] = parseInt(str9, 10) || undefined;
        let str10 = match[4];
        if (!str10) {
          str10 = "";
        }
        obj2 = match[2];
        const tmp26 = parseInt(str9, 10) || undefined;
        obj[4] = parseInt(str10, 10) || undefined;
        let str11 = substr4;
        if (!substr4) {
          str11 = "";
        }
        if (!tmp21) {
          let tmp28 = str11;
          if (str11) {
            tmp28 = !str11.startsWith("/");
          }
          if (tmp28) {
            tmp28 = !str11.match(/^[A-Z]:/);
          }
          if (tmp28) {
            tmp28 = !str11.startsWith(".");
          }
          if (tmp28) {
            tmp28 = !str11.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
          }
          tmp21 = tmp28;
        }
        let tmp29 = !tmp21;
        if (!tmp21) {
          tmp29 = undefined !== str11;
        }
        if (tmp29) {
          tmp29 = !str11.includes("node_modules/");
        }
        obj[5] = tmp29;
        return obj;
      }
      str7 = match[2];
    } else if (str.match(closure_1)) {
      obj = { filename: null };
      obj[0] = str;
      return obj;
    }
  };
};
arg5.nodeStackLineParser = function nodeStackLineParser(arg0) {
  closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const items = [
    90,
    (str) => {
      const match = str.match(closure_2);
      if (match) {
        let tmp3;
        let tmp4;
        if (match[1]) {
          const lastIndexOfResult = match[1].lastIndexOf(".");
          let diff = lastIndexOfResult;
          if ("." === match[1][lastIndexOfResult - 1]) {
            diff = lastIndexOfResult - 1;
          }
          let substr2 = arr;
          let tmp9;
          let substr3;
          if (diff > 0) {
            const substr = arr.slice(0, diff);
            const substr1 = arr.slice(diff + 1);
            const index = substr.indexOf(".Module");
            substr2 = arr;
            tmp9 = substr1;
            substr3 = substr;
            if (index > 0) {
              substr2 = arr.slice(index + 1);
              substr3 = substr.slice(0, index);
              tmp9 = substr1;
            }
          }
          tmp3 = substr2;
          tmp4 = tmp9;
          const tmp5 = substr3;
        }
        if (tmp4) {
          let UNKNOWN_FUNCTION = tmp4;
        }
        if (undefined === tmp3) {
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = callback(re1[0]).UNKNOWN_FUNCTION;
          }
          let combined = UNKNOWN_FUNCTION;
          if (tmp13) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp13 + "." + UNKNOWN_FUNCTION;
          }
          tmp3 = combined;
        }
        if (match[2]) {
          if (obj2.startsWith("file://")) {
            let str7 = match[2].slice(7);
            const arr3 = match[2];
          }
          let match1 = str7;
          if (str7) {
            match1 = str7.match(/\/[A-Z]:/);
          }
          let substr4 = str7;
          if (match1) {
            substr4 = str7.slice(1);
          }
          let tmp20 = substr4;
          if (!substr4) {
            tmp20 = !match[5];
          }
          let tmp21 = "native" === match[5];
          if (!tmp20) {
            tmp20 = tmp21;
          }
          if (!tmp20) {
            substr4 = match[5];
          }
          let decodeURIResult;
          if (substr4) {
            const _decodeURI = decodeURI;
            decodeURIResult = decodeURI(substr4);
          }
          let obj = { filename: null, module: null, function: null, lineno: null, colno: null, in_app: null };
          obj[0] = decodeURIResult;
          let tmp24;
          if (callback) {
            tmp24 = callback(substr4);
          }
          obj[1] = tmp24;
          obj[2] = tmp3;
          let str9 = match[3];
          if (!str9) {
            str9 = "";
          }
          obj[3] = parseInt(str9, 10) || undefined;
          let str10 = match[4];
          if (!str10) {
            str10 = "";
          }
          obj2 = match[2];
          const tmp26 = parseInt(str9, 10) || undefined;
          obj[4] = parseInt(str10, 10) || undefined;
          let str11 = substr4;
          if (!substr4) {
            str11 = "";
          }
          if (!tmp21) {
            let tmp28 = str11;
            if (str11) {
              tmp28 = !str11.startsWith("/");
            }
            if (tmp28) {
              tmp28 = !str11.match(/^[A-Z]:/);
            }
            if (tmp28) {
              tmp28 = !str11.startsWith(".");
            }
            if (tmp28) {
              tmp28 = !str11.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
            }
            tmp21 = tmp28;
          }
          let tmp29 = !tmp21;
          if (!tmp21) {
            tmp29 = undefined !== str11;
          }
          if (tmp29) {
            tmp29 = !str11.includes("node_modules/");
          }
          obj[5] = tmp29;
          return obj;
        }
        str7 = match[2];
      } else if (str.match(closure_1)) {
        obj = { filename: null };
        obj[0] = str;
        return obj;
      }
    }
  ];
  return items;
};