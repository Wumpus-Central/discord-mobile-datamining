// _runtime/01073_items.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const re3 = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
const re4 = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
const re5 = /\((\S*)(?::(\d+))(?::(\d+))\)/;
const re6 = /at (.+?) ?\(data:(.+?),/;
let items = [
  30,
  (str) => {
    const match = str.match(closure_6);
    if (match) {
      let obj = { filename: null, function: null };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "<data:" + match[2] + ">";
      obj[1] = match[1];
      return obj;
    } else {
      const match1 = regex.exec(str);
      if (match1) {
        const tmp25 = _slicedToArray(match1, 4);
        let UNKNOWN_FUNCTION3 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
        obj = { filename: null, function: null, in_app: true };
        obj[0] = tmp25[1];
        if ("<anonymous>" === UNKNOWN_FUNCTION3) {
          UNKNOWN_FUNCTION3 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
        }
        obj[1] = UNKNOWN_FUNCTION3;
        obj.lineno = +tmp25[2];
        obj.colno = +tmp25[3];
        return obj;
      } else {
        const match2 = regex2.exec(str);
        if (match2) {
          if (match2[2]) {
            if (0 === arr.indexOf("eval")) {
              const match3 = regex3.exec(match2[2]);
              if (match3) {
                match2[2] = match3[1];
                match2[3] = match3[2];
                match2[4] = match3[3];
              }
            }
            arr = match2[2];
          }
          let UNKNOWN_FUNCTION = match2[1];
          if (!UNKNOWN_FUNCTION) {
            UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
          }
          if (typeof extractSafariExtensionDetails !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp12 = -1 !== UNKNOWN_FUNCTION.indexOf("safari-extension");
          if (!tmp12) {
            if (-1 === UNKNOWN_FUNCTION.indexOf("safari-web-extension")) {
              const items = [UNKNOWN_FUNCTION, tmp11];
              const tmp19 = _slicedToArray(items, 2);
              let UNKNOWN_FUNCTION2 = tmp19[0];
              let tmp20;
              if (match2[3]) {
                tmp20 = +match2[3];
              }
              let tmp21;
              if (match2[4]) {
                tmp21 = +match2[4];
              }
              obj = { filename: null, function: null, in_app: true };
              obj[0] = tmp19[1];
              if ("<anonymous>" === UNKNOWN_FUNCTION2) {
                UNKNOWN_FUNCTION2 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
              }
              obj[1] = UNKNOWN_FUNCTION2;
              if (undefined !== tmp20) {
                obj.lineno = tmp20;
              }
              if (undefined !== tmp21) {
                obj.colno = tmp21;
              }
              return obj;
            }
          }
          if (-1 !== UNKNOWN_FUNCTION.indexOf("@")) {
            UNKNOWN_FUNCTION = UNKNOWN_FUNCTION.split("@")[0];
          } else {
            UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
          }
          const items1 = [UNKNOWN_FUNCTION, ];
          const _HermesInternal = HermesInternal;
          if (tmp12) {
            let combined = concat(tmp11);
          } else {
            combined = concat(tmp11);
          }
          items1[1] = combined;
        }
      }
    }
  }
];
const re7 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
const re8 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
let items1 = [
  50,
  (arg0) => {
    const match = regex4.exec(arg0);
    if (match) {
      if (match[3]) {
        if (arr.indexOf(" > eval") > -1) {
          const match1 = regex5.exec(match[3]);
          if (match1) {
            match[1] = match[1] || "eval";
            match[3] = match1[1];
            match[4] = match1[2];
            match[5] = "";
          }
        }
        arr = match[3];
      }
      let UNKNOWN_FUNCTION = match[1];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      if (typeof extractSafariExtensionDetails !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const tmp9 = -1 !== UNKNOWN_FUNCTION.indexOf("safari-extension");
      if (!tmp9) {
        if (-1 === UNKNOWN_FUNCTION.indexOf("safari-web-extension")) {
          const items = [UNKNOWN_FUNCTION, tmp5];
          const tmp16 = _slicedToArray(items, 2);
          let UNKNOWN_FUNCTION2 = tmp16[0];
          let tmp17;
          if (match[4]) {
            tmp17 = +match[4];
          }
          let tmp18;
          if (match[5]) {
            tmp18 = +match[5];
          }
          const obj = { filename: null, function: null, in_app: true };
          obj[0] = tmp16[1];
          if ("<anonymous>" === UNKNOWN_FUNCTION2) {
            UNKNOWN_FUNCTION2 = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
          }
          obj[1] = UNKNOWN_FUNCTION2;
          if (undefined !== tmp17) {
            obj.lineno = tmp17;
          }
          if (undefined !== tmp18) {
            obj.colno = tmp18;
          }
          return obj;
        }
      }
      if (-1 !== UNKNOWN_FUNCTION.indexOf("@")) {
        UNKNOWN_FUNCTION = UNKNOWN_FUNCTION.split("@")[0];
      } else {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      const items1 = [UNKNOWN_FUNCTION, ];
      const _HermesInternal = HermesInternal;
      if (tmp9) {
        let combined = concat(tmp5);
      } else {
        combined = concat(tmp5);
      }
      items1[1] = combined;
    }
  }
];
const re9 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
const items2 = [
  40,
  (arg0) => {
    const match = regex6.exec(arg0);
    let tmp2;
    if (match) {
      let UNKNOWN_FUNCTION = match[1];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      let tmp6;
      if (match[4]) {
        tmp6 = +match[4];
      }
      const obj = { filename: null, function: null, in_app: true };
      obj[0] = match[2];
      if ("<anonymous>" === UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      obj[1] = UNKNOWN_FUNCTION;
      obj.lineno = +match[3];
      tmp2 = obj;
      if (undefined !== tmp6) {
        obj.colno = tmp6;
        tmp2 = obj;
      }
    }
    return tmp2;
  }
];
const re10 = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
const items3 = [
  10,
  (arg0) => {
    const match = regex7.exec(arg0);
    let tmp2;
    if (match) {
      let UNKNOWN_FUNCTION = match[3];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      const obj = { filename: null, function: null, in_app: true };
      obj[0] = match[2];
      if ("<anonymous>" === UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      obj[1] = UNKNOWN_FUNCTION;
      obj.lineno = +match[1];
      tmp2 = obj;
    }
    return tmp2;
  }
];
const re11 = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i;
const items4 = [
  20,
  (arg0) => {
    const match = regex8.exec(arg0);
    let tmp2;
    if (match) {
      let UNKNOWN_FUNCTION = match[3];
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = match[4];
      }
      if (!UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      const obj = { filename: null, function: null, in_app: true };
      obj[0] = match[5];
      if ("<anonymous>" === UNKNOWN_FUNCTION) {
        UNKNOWN_FUNCTION = registerSpanErrorInstrumentation.UNKNOWN_FUNCTION;
      }
      obj[1] = UNKNOWN_FUNCTION;
      obj.lineno = +match[1];
      obj.colno = +match[2];
      tmp2 = obj;
    }
    return tmp2;
  }
];
const items5 = [items, items1];
const items6 = [...items5];
function extractSafariExtensionDetails(arg0, arg1) {

}

export const chromeStackLineParser = items;
export const defaultStackLineParsers = items5;
export const defaultStackParser = registerSpanErrorInstrumentation.createStackParser.apply(items6);
export const geckoStackLineParser = items1;
export const opera10StackLineParser = items3;
export const opera11StackLineParser = items4;
export const winjsStackLineParser = items2;