// === Module 12696: ? ===

// Module 12696
import _mod12583 from "module_12583" /* 12583 */;


export const filenameIsInApp = function filenameIsInApp(replaced) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    flag = replaced && !replaced.startsWith("/") && !replaced.match(/^[A-Z]:/) && !replaced.startsWith(".") && !replaced.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
    const tmp = replaced && !replaced.startsWith("/") && !replaced.match(/^[A-Z]:/) && !replaced.startsWith(".") && !replaced.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  }
  const tmp2 = !flag && undefined !== replaced && !replaced.includes("node_modules/");
  return tmp2;
};
export function node(arg0) {
  let closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  return (filename) => {
    let _parseInt;
    let _parseInt2;
    let str10;
    let str9;
    let tmp25;
    let tmp30;
    const match = filename.match(re2);
    if (match) {
      let UNKNOWN_FUNCTION;
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
      }
      if (tmp4) {
        UNKNOWN_FUNCTION = tmp4;
      }
      if (undefined === tmp3) {
        if (!UNKNOWN_FUNCTION) {
          UNKNOWN_FUNCTION = _mod12583.UNKNOWN_FUNCTION;
        }
        let combined = UNKNOWN_FUNCTION;
        if (tmp13) {
          const _HermesInternal = HermesInternal;
          combined = "" + tmp13 + "." + UNKNOWN_FUNCTION;
        }
        tmp3 = combined;
      }
      if (match[2]) {
        let str7;
        const obj2 = match[2];
        if (obj2.startsWith("file://")) {
          const arr3 = match[2];
          str7 = arr3.slice(7);
        }
        let match1 = str7;
        const tmp18 = match[5];
        if (str7) {
          match1 = str7.match(/\/[A-Z]:/);
        }
        let substr4 = str7;
        if (match1) {
          substr4 = str7.slice(1);
        }
        let tmp21 = substr4 || !match[5];
        let tmp22 = "native" === tmp18;
        if (!tmp21) {
          tmp21 = tmp22;
        }
        if (!tmp21) {
          substr4 = match[5];
        }
        let decodeURIResult;
        if (substr4) {
          const _decodeURI = decodeURI;
          decodeURIResult = decodeURI(substr4);
        }
        const obj3 = { filename: decodeURIResult, module: tmp25, function: tmp3, lineno: _parseInt(str9, 10) || undefined, colno: _parseInt2(str10, 10) || undefined, in_app: tmp30 };
        tmp25 = undefined;
        if (closure_0) {
          tmp25 = closure_0(substr4);
        }
        str9 = match[3];
        _parseInt = parseInt;
        if (!str9) {
          str9 = "";
        }
        str10 = match[4];
        _parseInt2 = parseInt;
        _parseInt(str9, 10) || undefined;
        if (!str10) {
          str10 = "";
        }
        _parseInt2(str10, 10) || undefined;
        if (!tmp22) {
          tmp22 = str11 && !str11.startsWith("/") && !str11.match(/^[A-Z]:/) && !str11.startsWith(".") && !str11.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
          const tmp29 = str11 && !str11.startsWith("/") && !str11.match(/^[A-Z]:/) && !str11.startsWith(".") && !str11.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
        }
        tmp30 = !tmp22 && undefined !== str11 && !str11.includes("node_modules/");
        return obj3;
      }
      str7 = match[2];
    } else if (filename.match(re1)) {
      return { filename };
    }
  };
}
export function nodeStackLineParser(arg0) {
  let closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const items = [
    90,
    (filename) => {
      let _parseInt;
      let _parseInt2;
      let str10;
      let str9;
      let tmp25;
      let tmp30;
      const match = filename.match(re2);
      if (match) {
        let UNKNOWN_FUNCTION;
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
        }
        if (tmp4) {
          UNKNOWN_FUNCTION = tmp4;
        }
        if (undefined === tmp3) {
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = _mod12583.UNKNOWN_FUNCTION;
          }
          let combined = UNKNOWN_FUNCTION;
          if (tmp13) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp13 + "." + UNKNOWN_FUNCTION;
          }
          tmp3 = combined;
        }
        if (match[2]) {
          let str7;
          const obj2 = match[2];
          if (obj2.startsWith("file://")) {
            const arr3 = match[2];
            str7 = arr3.slice(7);
          }
          let match1 = str7;
          const tmp18 = match[5];
          if (str7) {
            match1 = str7.match(/\/[A-Z]:/);
          }
          let substr4 = str7;
          if (match1) {
            substr4 = str7.slice(1);
          }
          let tmp21 = substr4 || !match[5];
          let tmp22 = "native" === tmp18;
          if (!tmp21) {
            tmp21 = tmp22;
          }
          if (!tmp21) {
            substr4 = match[5];
          }
          let decodeURIResult;
          if (substr4) {
            const _decodeURI = decodeURI;
            decodeURIResult = decodeURI(substr4);
          }
          const obj3 = { filename: decodeURIResult, module: tmp25, function: tmp3, lineno: _parseInt(str9, 10) || undefined, colno: _parseInt2(str10, 10) || undefined, in_app: tmp30 };
          tmp25 = undefined;
          if (closure_0) {
            tmp25 = closure_0(substr4);
          }
          str9 = match[3];
          _parseInt = parseInt;
          if (!str9) {
            str9 = "";
          }
          str10 = match[4];
          _parseInt2 = parseInt;
          _parseInt(str9, 10) || undefined;
          if (!str10) {
            str10 = "";
          }
          _parseInt2(str10, 10) || undefined;
          if (!tmp22) {
            tmp22 = str11 && !str11.startsWith("/") && !str11.match(/^[A-Z]:/) && !str11.startsWith(".") && !str11.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
            const tmp29 = str11 && !str11.startsWith("/") && !str11.match(/^[A-Z]:/) && !str11.startsWith(".") && !str11.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
          }
          tmp30 = !tmp22 && undefined !== str11 && !str11.includes("node_modules/");
          return obj3;
        }
        str7 = match[2];
      } else if (filename.match(re1)) {
        return { filename };
      }
    }
  ];
  return items;
}