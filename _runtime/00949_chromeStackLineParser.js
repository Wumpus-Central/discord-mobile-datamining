// _runtime/00949_chromeStackLineParser.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import registerSpanErrorInstrumentation from "metro/00693__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re3 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const re4 =
  /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const re5 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const re6 = /at (.+?) ?\(data:(.+?),/;
let items = [
  30,
  (str) => {
    let UNKNOWN_FUNCTION2;
    let tmp19;
    let tmp26;
    let tmp27;
    let tmp28;
    let tmp31;
    let tmp32;
    const match = str.match(re6);
    if (match) {
      const _HermesInternal2 = HermesInternal;
      const obj2 = { filename: "<data:" + match[2] + ">", function: match[1] };
      return obj2;
    } else {
      const match1 = re3.exec(str);
      if (match1) {
        [, tmp26, tmp27, tmp28] = match1;
        let UNKNOWN_FUNCTION3 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
        const obj3 = { filename: tmp26, function: UNKNOWN_FUNCTION3, in_app: true, lineno: tmp31, colno: tmp32 };
        tmp31 = +tmp27;
        tmp32 = +tmp28;
        if ("<anonymous>" === UNKNOWN_FUNCTION3) {
          UNKNOWN_FUNCTION3 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
        }
        return obj3;
      } else {
        const match2 = re4.exec(str);
        if (match2) {
          if (match2[2]) {
            const arr = match2[2];
            if (0 === arr.indexOf("eval")) {
              const match3 = re5.exec(match2[2]);
              if (match3) {
                match2[2] = match3[1];
                match2[3] = match3[2];
                match2[4] = match3[3];
              }
            }
          }
          const UNKNOWN_FUNCTION1 = match2[1] || registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
          if (typeof extractSafariExtensionDetails === "function") {
            let UNKNOWN_FUNCTION;
            let combined;
            const tmp12 = -1 !== UNKNOWN_FUNCTION1.indexOf("safari-extension");
            if (!tmp12) {
              let items;
              if (-1 === UNKNOWN_FUNCTION1.indexOf("safari-web-extension")) {
                items = [UNKNOWN_FUNCTION1, match2[2]];
              }
              [UNKNOWN_FUNCTION2, tmp19] = items;
              let tmp20;
              if (match2[3]) {
                tmp20 = +match2[3];
              }
              let tmp21;
              if (match2[4]) {
                tmp21 = +match2[4];
              }
              const obj = { filename: tmp19, function: UNKNOWN_FUNCTION2, in_app: true };
              if ("<anonymous>" === UNKNOWN_FUNCTION2) {
                UNKNOWN_FUNCTION2 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
              }
              if (undefined !== tmp20) {
                obj.lineno = tmp20;
              }
              if (undefined !== tmp21) {
                obj.colno = tmp21;
              }
              return obj;
            }
            if (-1 !== UNKNOWN_FUNCTION1.indexOf("@")) {
              UNKNOWN_FUNCTION = UNKNOWN_FUNCTION1.split("@")[0];
            } else {
              UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
            }
            const items1 = [UNKNOWN_FUNCTION];
            const _HermesInternal = HermesInternal;
            if (tmp12) {
              combined = concat(tmp11);
            } else {
              combined = concat(tmp11);
            }
            items1[1] = combined;
            items = items1;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
  },
];
const re7 =
  /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const re8 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
let items1 = [
  50,
  (arg0) => {
    let UNKNOWN_FUNCTION2;
    let tmp16;
    const match = re7.exec(arg0);
    if (match) {
      if (match[3]) {
        const arr = match[3];
        if (arr.indexOf(" > eval") > -1) {
          const match1 = re8.exec(match[3]);
          if (match1) {
            const tmp4 = match[1] || "eval";
            match[1] = tmp4;
            match[3] = match1[1];
            match[4] = match1[2];
            match[5] = "";
          }
        }
      }
      const UNKNOWN_FUNCTION1 = match[1] || registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      if (typeof extractSafariExtensionDetails === "function") {
        let UNKNOWN_FUNCTION;
        let combined;
        const tmp9 = -1 !== UNKNOWN_FUNCTION1.indexOf("safari-extension");
        if (!tmp9) {
          let items;
          if (-1 === UNKNOWN_FUNCTION1.indexOf("safari-web-extension")) {
            items = [UNKNOWN_FUNCTION1, match[3]];
          }
          [UNKNOWN_FUNCTION2, tmp16] = items;
          let tmp17;
          if (match[4]) {
            tmp17 = +match[4];
          }
          let tmp18;
          if (match[5]) {
            tmp18 = +match[5];
          }
          const obj = { filename: tmp16, function: UNKNOWN_FUNCTION2, in_app: true };
          if ("<anonymous>" === UNKNOWN_FUNCTION2) {
            UNKNOWN_FUNCTION2 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
          }
          if (undefined !== tmp17) {
            obj.lineno = tmp17;
          }
          if (undefined !== tmp18) {
            obj.colno = tmp18;
          }
          return obj;
        }
        if (-1 !== UNKNOWN_FUNCTION1.indexOf("@")) {
          UNKNOWN_FUNCTION = UNKNOWN_FUNCTION1.split("@")[0];
        } else {
          UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
        }
        const items1 = [UNKNOWN_FUNCTION];
        const _HermesInternal = HermesInternal;
        if (tmp9) {
          combined = concat(tmp5);
        } else {
          combined = concat(tmp5);
        }
        items1[1] = combined;
        items = items1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  },
];
const re9 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const items2 = [
  40,
  (arg0) => {
    const match = re9.exec(arg0);
    let tmp2;
    if (match) {
      let UNKNOWN_FUNCTION = match[1];
      const tmp3 = match[2];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      let tmp7;
      const tmp6 = +match[3];
      if (match[4]) {
        tmp7 = +match[4];
      }
      const obj = { filename: tmp3, function: UNKNOWN_FUNCTION, in_app: true, lineno: tmp6 };
      if ("<anonymous>" === UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      tmp2 = obj;
      if (undefined !== tmp7) {
        obj.colno = tmp7;
        tmp2 = obj;
      }
    }
    return tmp2;
  },
];
const re10 = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
const items3 = [
  10,
  (arg0) => {
    let tmp6;
    const match = re10.exec(arg0);
    let tmp2;
    if (match) {
      let UNKNOWN_FUNCTION = match[3];
      const tmp3 = match[2];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      const obj = { filename: tmp3, function: UNKNOWN_FUNCTION, in_app: true, lineno: tmp6 };
      tmp6 = +match[1];
      if ("<anonymous>" === UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      tmp2 = obj;
    }
    return tmp2;
  },
];
const re11 = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
const items4 = [
  20,
  (arg0) => {
    let tmp6;
    let tmp7;
    const match = re11.exec(arg0);
    let tmp2;
    if (match) {
      let UNKNOWN_FUNCTION = match[3];
      const tmp3 = match[5];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = match[4];
      }
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      const obj = { filename: tmp3, function: UNKNOWN_FUNCTION, in_app: true, lineno: tmp6, colno: tmp7 };
      tmp6 = +match[1];
      tmp7 = +match[2];
      if ("<anonymous>" === UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      tmp2 = obj;
    }
    return tmp2;
  },
];
const items5 = [items, items1];
const items6 = [...items5];
function extractSafariExtensionDetails(arg0, arg1) {}

export const chromeStackLineParser = items;
export const defaultStackLineParsers = items5;
export const defaultStackParser = registerSpanErrorInstrumentation.createStackParser.apply(items6);
export const geckoStackLineParser = items1;
export const opera10StackLineParser = items3;
export const opera11StackLineParser = items4;
export const winjsStackLineParser = items2;
