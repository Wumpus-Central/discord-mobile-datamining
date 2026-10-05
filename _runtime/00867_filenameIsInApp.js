// _runtime/00867_filenameIsInApp.js
import UNKNOWN_FUNCTION2 from "00709_UNKNOWN_FUNCTION.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const filenameIsInApp = function filenameIsInApp(replaced) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    flag =
      replaced &&
      !replaced.startsWith("/") &&
      !replaced.match(/^[A-Z]:/) &&
      !replaced.startsWith(".") &&
      !replaced.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
    const tmp =
      replaced &&
      !replaced.startsWith("/") &&
      !replaced.match(/^[A-Z]:/) &&
      !replaced.startsWith(".") &&
      !replaced.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
  }
  const tmp2 = !flag && undefined !== replaced && !replaced.includes("node_modules/");
  return tmp2;
};
export function node(arg0) {
  let closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const re3 = /at (?:async )?(.+?) \(data:(.*?),/;
  return (filename) => {
    let _parseInt;
    let _parseInt2;
    let str7;
    let str8;
    let tmp29;
    let tmp34;
    const match = filename.match(re3);
    if (match) {
      const _HermesInternal2 = HermesInternal;
      const obj3 = { filename: "<data:" + match[2] + ">", function: match[1] };
      return obj3;
    } else {
      const match1 = filename.match(re2);
      if (match1) {
        let UNKNOWN_FUNCTION;
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
        }
        if (tmp7) {
          UNKNOWN_FUNCTION = tmp7;
        }
        if (undefined === tmp6) {
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = UNKNOWN_FUNCTION2.UNKNOWN_FUNCTION;
          }
          let combined = UNKNOWN_FUNCTION;
          if (tmp16) {
            const _HermesInternal = HermesInternal;
            combined = "" + tmp16 + "." + UNKNOWN_FUNCTION;
          }
          tmp6 = combined;
        }
        const obj2 = UNKNOWN_FUNCTION2;
        let result = obj2.normalizeStackTracePath(match1[2]);
        let tmp25 = result;
        const tmp24 = match1[5];
        if (!result) {
          tmp25 = !match1[5];
        }
        let tmp26 = "native" === tmp24;
        if (!tmp25) {
          tmp25 = tmp26;
        }
        if (!tmp25) {
          result = match1[5];
        }
        let decodeURIResult;
        if (result) {
          const _decodeURI = decodeURI;
          decodeURIResult = decodeURI(result);
        }
        const obj4 = {
          filename: decodeURIResult,
          module: tmp29,
          function: tmp6,
          lineno: _parseInt(str7, 10) || undefined,
          colno: _parseInt2(str8, 10) || undefined,
          in_app: tmp34,
        };
        tmp29 = undefined;
        if (closure_0) {
          tmp29 = closure_0(result);
        }
        str7 = match1[3];
        _parseInt = parseInt;
        if (!str7) {
          str7 = "";
        }
        str8 = match1[4];
        _parseInt2 = parseInt;
        _parseInt(str7, 10) || undefined;
        if (!str8) {
          str8 = "";
        }
        _parseInt2(str8, 10) || undefined;
        if (!tmp26) {
          tmp26 =
            str9 &&
            !str9.startsWith("/") &&
            !str9.match(/^[A-Z]:/) &&
            !str9.startsWith(".") &&
            !str9.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
          const tmp33 =
            str9 &&
            !str9.startsWith("/") &&
            !str9.match(/^[A-Z]:/) &&
            !str9.startsWith(".") &&
            !str9.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
        }
        tmp34 = !tmp26 && undefined !== str9 && !str9.includes("node_modules/");
        return obj4;
      } else {
        let tmp5;
        if (filename.match(re1)) {
          tmp5 = { filename };
          const obj = { filename };
        }
        return tmp5;
      }
    }
  };
}
export function nodeStackLineParser(arg0) {
  let closure_0 = arg0;
  const re1 = /^\s*[-]{4,}$/;
  const re2 = /at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;
  const re3 = /at (?:async )?(.+?) \(data:(.*?),/;
  const items = [
    90,
    (filename) => {
      let _parseInt;
      let _parseInt2;
      let str7;
      let str8;
      let tmp29;
      let tmp34;
      const match = filename.match(re3);
      if (match) {
        const _HermesInternal2 = HermesInternal;
        const obj3 = { filename: "<data:" + match[2] + ">", function: match[1] };
        return obj3;
      } else {
        const match1 = filename.match(re2);
        if (match1) {
          let UNKNOWN_FUNCTION;
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
          }
          if (tmp7) {
            UNKNOWN_FUNCTION = tmp7;
          }
          if (undefined === tmp6) {
            if (!UNKNOWN_FUNCTION) {
              UNKNOWN_FUNCTION = UNKNOWN_FUNCTION2.UNKNOWN_FUNCTION;
            }
            let combined = UNKNOWN_FUNCTION;
            if (tmp16) {
              const _HermesInternal = HermesInternal;
              combined = "" + tmp16 + "." + UNKNOWN_FUNCTION;
            }
            tmp6 = combined;
          }
          const obj2 = UNKNOWN_FUNCTION2;
          let result = obj2.normalizeStackTracePath(match1[2]);
          let tmp25 = result;
          const tmp24 = match1[5];
          if (!result) {
            tmp25 = !match1[5];
          }
          let tmp26 = "native" === tmp24;
          if (!tmp25) {
            tmp25 = tmp26;
          }
          if (!tmp25) {
            result = match1[5];
          }
          let decodeURIResult;
          if (result) {
            const _decodeURI = decodeURI;
            decodeURIResult = decodeURI(result);
          }
          const obj4 = {
            filename: decodeURIResult,
            module: tmp29,
            function: tmp6,
            lineno: _parseInt(str7, 10) || undefined,
            colno: _parseInt2(str8, 10) || undefined,
            in_app: tmp34,
          };
          tmp29 = undefined;
          if (closure_0) {
            tmp29 = closure_0(result);
          }
          str7 = match1[3];
          _parseInt = parseInt;
          if (!str7) {
            str7 = "";
          }
          str8 = match1[4];
          _parseInt2 = parseInt;
          _parseInt(str7, 10) || undefined;
          if (!str8) {
            str8 = "";
          }
          _parseInt2(str8, 10) || undefined;
          if (!tmp26) {
            tmp26 =
              str9 &&
              !str9.startsWith("/") &&
              !str9.match(/^[A-Z]:/) &&
              !str9.startsWith(".") &&
              !str9.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
            const tmp33 =
              str9 &&
              !str9.startsWith("/") &&
              !str9.match(/^[A-Z]:/) &&
              !str9.startsWith(".") &&
              !str9.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//);
          }
          tmp34 = !tmp26 && undefined !== str9 && !str9.includes("node_modules/");
          return obj4;
        } else {
          let tmp5;
          if (filename.match(re1)) {
            tmp5 = { filename };
            const obj = { filename };
          }
          return tmp5;
        }
      }
    },
  ];
  return items;
}
