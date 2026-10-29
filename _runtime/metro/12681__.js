// === Module 12681: ? ===

// Module 12681
import _mod12661 from "module_12661" /* 12661 */;
import _mod12677 from "module_12677" /* 12677 */;

function fromLoc(loc, start) {
  if (loc) {
    loc = loc.loc;
  }
  if (loc) {
    loc = loc.loc[start];
  }
  let tmp2 = null;
  if (loc) {
    let tmp3 = loc;
    if ("line" in loc) {
      const obj = { offset: null, line: null, column: null };
      ({ offset: obj.offset, line: obj.line, column: obj.column } = loc);
      tmp3 = obj;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
let closure_2 = { offset: 0, line: 1, column: 1 };

export default {
  SyntaxReferenceError(arg0, reference) {
    let str = "";
    if (reference) {
      str = `${" `" + reference}\``;
    }
    const tmpResult = _mod12661("SyntaxReferenceError", arg0 + str);
    tmpResult.reference = reference;
    return tmpResult;
  },
  SyntaxMatchError(reason, syntax, loc, arg3) {
    const tmp3 = _mod12661("SyntaxMatchError", reason);
    ({ tokens, longestMatch } = arg3);
    let tmp5 = null;
    if ((longestMatch < tokens.length && tokens[longestMatch].node || null) !== loc) {
      tmp5 = tmp4;
    }
    let str = "";
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let str2 = "";
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    if (0 < tokens.length) {
      do {
        value = tokens[num].value;
        let length = num3;
        let length2 = num4;
        if (num === longestMatch) {
          length = value.length;
          length2 = ``.length;
        }
        let tmp10 = tmp6;
        if (tmp6) {
          tmp10 = tokens[num].node === tmp5;
        }
        let tmp11 = num2;
        if (tmp10) {
          let num8 = 0;
          if (num <= longestMatch) {
            num8 = num2 + 1;
          }
          tmp11 = num8;
        }
        str = str + value;
        num = num + 1;
        num2 = tmp11;
        num3 = length;
        num4 = length2;
        str2 = str;
        num5 = tmp11;
        num6 = length;
        num7 = length2;
      } while (num < tokens.length);
    }
    if (longestMatch !== tokens.length) {
      if (1 >= num5) {
        let tmp13 = fromLoc(tmp5, "start");
        if (!tmp13) {
          let str3 = str2.slice(0, num7);
          const obj = { offset: null, line: null, column: null };
          ({ offset: obj.offset, line: obj.line, column: obj.column } = fromLoc(loc, "start") || closure_2);
          tmp13 = obj;
          if (str3) {
            const parts = str3.split(/\n|\r\n?|\f/);
            obj.offset = obj.offset + str3.length;
            obj.line = obj.line + (parts.length - 1);
            if (1 === parts.length) {
              str3 = str3.length;
              let sum = obj.column + str3;
            } else {
              sum = parts.pop().length + 1;
            }
            obj.column = sum;
          }
          const tmp12 = fromLoc(loc, "start") || closure_2;
        }
        let tmp33Result = fromLoc(tmp5, "end");
        if (!tmp33Result) {
          let str5 = str2.substr(num7, num6);
          const obj4 = { offset: null, line: null, column: null };
          ({ offset: obj2.offset, line: obj2.line, column: obj2.column } = tmp13);
          tmp33Result = obj4;
          if (str5) {
            const parts1 = str5.split(/\n|\r\n?|\f/);
            obj4.offset = obj4.offset + str5.length;
            obj4.line = obj4.line + (parts1.length - 1);
            if (1 === parts1.length) {
              str5 = str5.length;
              let sum1 = obj4.column + str5;
            } else {
              sum1 = parts1.pop().length + 1;
            }
            obj4.column = sum1;
          }
        }
      }
      tmp3.rawMessage = reason;
      let str6 = "<generic>";
      if (syntax) {
        str6 = _mod12677(syntax);
      }
      tmp3.syntax = str6;
      tmp3.css = str2;
      tmp3.mismatchOffset = num7;
      tmp3.mismatchLength = num6;
      let str8 = str2;
      const text = `${reason}
      syntax: ${tmp3.syntax}`;
      if (!str2) {
        str8 = "<empty string>";
      }
      const _HermesInternal = HermesInternal;
      const _Array = Array;
      const combined = `${tmp26}
       value: ` + str8 + "\n  --------";
      const array = new Array(tmp3.mismatchOffset + 1);
      tmp3.message = `${tmp28}${obj5.join("-")}^`;
      const _Object = Object;
      const merged = Object.assign(tmp3, tmp13);
      let str13 = loc;
      if (loc) {
        str13 = loc.loc;
      }
      if (str13) {
        str13 = loc.loc.source;
      }
      if (!str13) {
        str13 = "<unknown>";
      }
      const obj6 = { source: str13, start: tmp13, end: tmp33Result };
      tmp3.loc = obj6;
      return tmp3;
    }
    let tmp20 = tmp5;
    if (!tmp5) {
      tmp20 = loc;
    }
    let tmp19Result = fromLoc(tmp20, "end");
    if (!tmp19Result) {
      const obj10 = { offset: null, line: null, column: null };
      ({ offset: obj3.offset, line: obj3.line, column: obj3.column } = closure_2);
      tmp19Result = obj10;
      if (str2) {
        const parts2 = str2.split(/\n|\r\n?|\f/);
        obj10.offset = obj10.offset + str2.length;
        obj10.line = obj10.line + (parts2.length - 1);
        if (1 === parts2.length) {
          let sum2 = obj10.column + str2.length;
        } else {
          sum2 = parts2.pop().length + 1;
        }
        obj10.column = sum2;
      }
    }
    tmp13 = tmp19Result;
    tmp33Result = { offset: tmp19Result.offset, line: tmp19Result.line, column: tmp19Result.column };
    const obj11 = { offset: tmp19Result.offset, line: tmp19Result.line, column: tmp19Result.column };
  }
};