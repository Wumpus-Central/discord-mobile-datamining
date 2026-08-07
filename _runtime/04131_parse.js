// _runtime/04131_parse.js
import { 04132__ } from "metro/04132__.js";
function parse(str, delimiter) {
  str = delimiter;
  if (delimiter) {
    str = delimiter.delimiter;
  }
  if (!str) {
    str = "/";
  }
  const items = [];
  let match = regExp.exec(str);
  let num = 0;
  let num2 = 0;
  let str2 = "";
  let num3 = 0;
  while (null != match) {
    let tmp3 = match[1];
    let index = match.index;
    let text = `${str.slice(num, index)}`;
    let sum = index + match[0].length;
    let tmp6 = num2;
    let tmp7 = match;
    if (tmp3) {
      let str5 = `${str.slice(num, index)}${tmp3[1]}`;
      let sum1 = num2;
    } else {
      let tmp8 = str[sum];
      let str3 = match[2];
      let tmp9 = match[3];
      let str4 = match[4];
      let tmp10 = match[6];
      let tmp11 = match[7];
      str5 = text;
      if (`${str.slice(num, index)}`) {
        let arr = items.push(`${str.slice(num, index)}`);
        str5 = "";
      }
      let tmp13 = null != str3 && null != tmp8 && tmp8 !== str3;
      let tmp14 = "+" === tmp10 || "*" === tmp10;
      let tmp15 = "?" === tmp10 || "*" === tmp10;
      let str6 = match[2] || str;
      if (!str4) {
        str4 = match[5];
      }
      sum1 = num2;
      if (!tmp9) {
        sum1 = num2 + 1;
        tmp9 = num2;
      }
      let obj = { name: null, prefix: null, delimiter: null, optional: null, repeat: null, partial: null, asterisk: null, pattern: null };
      obj[0] = tmp9;
      if (!str3) {
        str3 = "";
      }
      obj[1] = str3;
      obj[2] = str6;
      obj[3] = tmp15;
      obj[4] = tmp14;
      obj[5] = tmp13;
      obj[6] = tmp11;
      if (str4) {
        let str7 = str4.replace(/([=!:$\/()])/g, "\\$1");
      } else {
        str7 = ".*";
        if (!tmp11) {
          str7 = `${"[^" + str6.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")}]+?`;
        }
      }
      obj[7] = str7;
      arr = items.push(obj);
    }
    let tmp18 = regExp;
    match = regExp.exec(str);
    let tmp2 = str5;
    num2 = sum1;
    num = sum;
    str2 = str5;
    num3 = sum;
  }
  let sum2 = str2;
  if (num3 < str.length) {
    sum2 = str2 + str.substr(num3);
  }
  if (sum2) {
    items.push(sum2);
  }
  return items;
}
function encodeURIComponentPretty(arg0) {
  return encodeURI(arg0).replace(/[\/?#]/g, (str) => {
    str = str.charCodeAt(0);
    return "%" + str.charCodeAt(0).toString(16).toUpperCase();
  });
}
function tokensToRegExp(arg0, items, arg2) {
  let combined;
  let str3;
  let obj = arg2;
  if (!04132__(items)) {
    let tmp = items;
    if (!items) {
      tmp = arg2;
    }
    items = [];
    obj = tmp;
  }
  if (!obj) {
    obj = {};
  }
  const strict = obj.strict;
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arg0.length) {
    while (true) {
      str3 = arg0[num];
      let tmp2 = num;
      let tmp3 = str;
      if (typeof str3 === "string") {
        let text = `${str3.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")}`;
      } else {
        let str11 = str3.prefix;
        let concat = str11.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
        let text1 = `${"(?:" + str3.pattern})`;
        let arr = items.push(str3);
        combined = text1;
        if (str3.repeat) {
          let _HermesInternal = HermesInternal;
          combined = `${"(?:" + str3.pattern})` + `(?:${concat}` + `${"(?:" + str3.pattern})` + ")*";
        }
        if (str3.optional) {
          break;
        } else {
          let _HermesInternal2 = HermesInternal;
          text = str + `${concat}(` + combined + ")";
        }
      }
      num = num + 1;
      str = text;
      str2 = text;
    }
    if (str3.partial) {
      const _HermesInternal4 = HermesInternal;
      const text2 = `${concat}(`;
      concat = HermesInternal.concat;
      let combined1 = concat(combined, ")?");
    } else {
      const _HermesInternal3 = HermesInternal;
      combined1 = `(?:${concat}` + "(" + combined + "))?";
    }
  }
  const replaced = obj.delimiter || "/".replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  const tmp9 = str2.slice(-replaced.length) === replaced;
  let text3 = str2;
  if (!strict) {
    let substr = str2;
    if (tmp9) {
      substr = str2.slice(0, -replaced.length);
    }
    text3 = `${tmp11 + "(?:" + arr2}(?=$))?`;
  }
  let str6 = "$";
  if (false === obj.end) {
    if (!strict) {
      let str7 = `${"(?=" + arr2}|$)`;
    } else {
      str7 = "";
    }
    str6 = str7;
  }
  const combined2 = "^" + text3 + str6;
  let str10 = "i";
  if (obj.sensitive) {
    str10 = "";
  }
  const regExp = new RegExp(combined2, str10);
  regExp.keys = items;
  return regExp;
}
function pathToRegexp(source, items, arg2) {
  let length;
  let length2;
  let obj = arg2;
  if (!04132__(items)) {
    let tmp3 = items;
    if (!items) {
      tmp3 = arg2;
    }
    items = [];
    obj = tmp3;
  }
  if (!obj) {
    obj = {};
  }
  if (source instanceof RegExp) {
    const match = source.source.match(/\((?!\?)/g);
    if (match) {
      let num3 = 0;
      if (0 < match.length) {
        do {
          obj = { name: null, prefix: null, delimiter: null, optional: false, repeat: false, partial: false, asterisk: false, pattern: null };
          obj[0] = num3;
          let arr = items.push(obj);
          num3 = num3 + 1;
          length2 = match.length;
        } while (num3 < length2);
      }
    }
    source.keys = items;
    let tmp6 = source;
    const str5 = source.source;
  } else if (04132__(source)) {
    const items1 = [];
    let num = 0;
    if (0 < source.length) {
      do {
        let tmp7 = pathToRegexp;
        arr = items1.push(pathToRegexp(source[num], items, obj).source);
        num = num + 1;
        length = source.length;
      } while (num < length);
    }
    let str3 = "i";
    const text = `(?:${arr2.join("|")}`;
    if (obj.sensitive) {
      str3 = "";
    }
    const regExp = new RegExp(text + ")", str3);
    regExp.keys = items;
    tmp6 = regExp;
  } else {
    tmp6 = tokensToRegExp(parse(source, obj), items, obj);
  }
  return tmp6;
}
module.exports.parse = parse;
module.exports.compile = function compile(arg0, arg1) {
  let arr = parse(arg0, arg1);
  let array;
  array = new Array(arr.length);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = num;
    if (typeof arr[num] === "object") {
      let _RegExp = RegExp;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let regExp = new RegExp("^(?:" + arr[num].pattern + ")$");
      let tmp6 = regExp;
      array[num] = regExp;
    }
  }
  return (arg0, arg1) => {
    let arr;
    let replaced;
    let tmp3;
    let obj = arg0;
    if (!arg0) {
      obj = {};
    }
    obj = arg1;
    if (!arg1) {
      obj = {};
    }
    if (obj.pretty) {
      let _encodeURIComponent = outer1_4;
    } else {
      _encodeURIComponent = encodeURIComponent;
    }
    let str = "";
    let num = 0;
    let str2 = "";
    if (0 < arr.length) {
      while (true) {
        let tmp2 = arr;
        tmp3 = arr[num];
        let tmp4 = num;
        let tmp5 = str;
        if (typeof tmp3 !== "string") {
          arr = obj[tmp3.name];
          if (null == arr) {
            if (tmp3.optional) {
              let text = str;
              if (tmp3.partial) {
                text = `${tmp3.prefix}`;
              }
            } else {
              let _TypeError5 = TypeError;
              let str17 = "Expected \"";
              let tmp32 = new.target;
              let str18 = "\" to be defined";
              let tmp33 = new.target;
              let typeError = new TypeError("Expected \"" + tmp3.name + "\" to be defined");
              let tmp35 = typeError;
              throw typeError;
            }
          } else {
            let tmp37 = arr;
            let tmp38 = array;
            if (arr(array[0])(arr)) {
              if (tmp3.repeat) {
                if (0 === arr.length) {
                  text = str;
                  if (!tmp3.optional) {
                    let _TypeError4 = TypeError;
                    let str15 = "Expected \"";
                    let tmp28 = new.target;
                    let str16 = "\" to not be empty";
                    let tmp29 = new.target;
                    let typeError1 = new TypeError("Expected \"" + tmp3.name + "\" to not be empty");
                    let tmp31 = typeError1;
                    throw typeError1;
                  }
                } else {
                  let num2 = 0;
                  let sum = str;
                  text = str;
                  if (0 < arr.length) {
                    let _encodeURIComponentResult = _encodeURIComponent(arr[num2]);
                    let tmp19 = array;
                    let obj4 = array[num];
                    let tmp20 = num2;
                    let tmp21 = sum;
                    while (obj4.test(_encodeURIComponentResult)) {
                      sum = sum + ((0 === num2 ? tmp3.prefix : tmp3.delimiter) + _encodeURIComponentResult);
                      num2 = num2 + 1;
                      text = sum;
                      continue;
                    }
                    let _TypeError3 = TypeError;
                    let str11 = "Expected all \"";
                    let str12 = "\" to match \"";
                    let _JSON2 = JSON;
                    let text1 = `Expected all "${tmp3.name}" to match "${tmp3.pattern}`;
                    let str13 = "\", but received `";
                    let tmp23 = new.target;
                    let str14 = "`";
                    let tmp24 = new.target;
                    let typeError2 = new TypeError(text1 + "\", but received `" + JSON.stringify(_encodeURIComponentResult) + "`");
                    let tmp26 = typeError2;
                    throw typeError2;
                  }
                }
              } else {
                let _TypeError2 = TypeError;
                let str8 = "Expected \"";
                let _JSON = JSON;
                let text2 = `Expected "${tmp3.name}`;
                let str9 = "\" to not repeat, but received `";
                let tmp14 = new.target;
                let str10 = "`";
                let tmp15 = new.target;
                let typeError3 = new TypeError(`Expected "${tmp3.name}` + "\" to not repeat, but received `" + JSON.stringify(arr) + "`");
                let tmp17 = typeError3;
                throw typeError3;
              }
            } else {
              if (tmp3.asterisk) {
                let _encodeURI = encodeURI;
                let str3 = encodeURI(arr);
                replaced = str3.replace(/[?#]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
                });
              } else {
                replaced = _encodeURIComponent(arr);
              }
              let tmp7 = array;
              let obj3 = array[num];
              if (!obj3.test(replaced)) {
                break;
              } else {
                text = str + (tmp3.prefix + replaced);
              }
            }
          }
        } else {
          text = str + tmp3;
        }
        num = num + 1;
        let tmp36 = arr;
        str = text;
        str2 = text;
      }
      const _TypeError = TypeError;
      const typeError4 = new TypeError("Expected \"" + tmp3.name + "\" to match \"" + tmp3.pattern + "\", but received \"" + replaced + "\"");
      throw typeError4;
    }
    return str2;
  };
};
module.exports.tokensToFunction = function tokensToFunction(arg0) {
  let closure_0 = arg0;
  const array = new Array(arg0.length);
  for (let num = 0; num < arg0.length; num = num + 1) {
    let tmp2 = num;
    if (typeof arg0[num] === "object") {
      let _RegExp = RegExp;
      let tmp3 = new.target;
      let tmp4 = new.target;
      let regExp = new RegExp("^(?:" + arg0[num].pattern + ")$");
      let tmp6 = regExp;
      array[num] = regExp;
    }
  }
  return (arg0, arg1) => {
    let arr;
    let replaced;
    let tmp3;
    let obj = arg0;
    if (!arg0) {
      obj = {};
    }
    obj = arg1;
    if (!arg1) {
      obj = {};
    }
    if (obj.pretty) {
      let _encodeURIComponent = outer1_4;
    } else {
      _encodeURIComponent = encodeURIComponent;
    }
    let str = "";
    let num = 0;
    let str2 = "";
    if (0 < arr.length) {
      while (true) {
        let tmp2 = arr;
        tmp3 = arr[num];
        let tmp4 = num;
        let tmp5 = str;
        if (typeof tmp3 !== "string") {
          arr = obj[tmp3.name];
          if (null == arr) {
            if (tmp3.optional) {
              let text = str;
              if (tmp3.partial) {
                text = `${tmp3.prefix}`;
              }
            } else {
              let _TypeError5 = TypeError;
              let str17 = "Expected \"";
              let tmp32 = new.target;
              let str18 = "\" to be defined";
              let tmp33 = new.target;
              let typeError = new TypeError("Expected \"" + tmp3.name + "\" to be defined");
              let tmp35 = typeError;
              throw typeError;
            }
          } else {
            let tmp37 = arr;
            let tmp38 = array;
            if (arr(array[0])(arr)) {
              if (tmp3.repeat) {
                if (0 === arr.length) {
                  text = str;
                  if (!tmp3.optional) {
                    let _TypeError4 = TypeError;
                    let str15 = "Expected \"";
                    let tmp28 = new.target;
                    let str16 = "\" to not be empty";
                    let tmp29 = new.target;
                    let typeError1 = new TypeError("Expected \"" + tmp3.name + "\" to not be empty");
                    let tmp31 = typeError1;
                    throw typeError1;
                  }
                } else {
                  let num2 = 0;
                  let sum = str;
                  text = str;
                  if (0 < arr.length) {
                    let _encodeURIComponentResult = _encodeURIComponent(arr[num2]);
                    let tmp19 = array;
                    let obj4 = array[num];
                    let tmp20 = num2;
                    let tmp21 = sum;
                    while (obj4.test(_encodeURIComponentResult)) {
                      sum = sum + ((0 === num2 ? tmp3.prefix : tmp3.delimiter) + _encodeURIComponentResult);
                      num2 = num2 + 1;
                      text = sum;
                      continue;
                    }
                    let _TypeError3 = TypeError;
                    let str11 = "Expected all \"";
                    let str12 = "\" to match \"";
                    let _JSON2 = JSON;
                    let text1 = `Expected all "${tmp3.name}" to match "${tmp3.pattern}`;
                    let str13 = "\", but received `";
                    let tmp23 = new.target;
                    let str14 = "`";
                    let tmp24 = new.target;
                    let typeError2 = new TypeError(text1 + "\", but received `" + JSON.stringify(_encodeURIComponentResult) + "`");
                    let tmp26 = typeError2;
                    throw typeError2;
                  }
                }
              } else {
                let _TypeError2 = TypeError;
                let str8 = "Expected \"";
                let _JSON = JSON;
                let text2 = `Expected "${tmp3.name}`;
                let str9 = "\" to not repeat, but received `";
                let tmp14 = new.target;
                let str10 = "`";
                let tmp15 = new.target;
                let typeError3 = new TypeError(`Expected "${tmp3.name}` + "\" to not repeat, but received `" + JSON.stringify(arr) + "`");
                let tmp17 = typeError3;
                throw typeError3;
              }
            } else {
              if (tmp3.asterisk) {
                let _encodeURI = encodeURI;
                let str3 = encodeURI(arr);
                replaced = str3.replace(/[?#]/g, (str) => {
                  str = str.charCodeAt(0);
                  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
                });
              } else {
                replaced = _encodeURIComponent(arr);
              }
              let tmp7 = array;
              let obj3 = array[num];
              if (!obj3.test(replaced)) {
                break;
              } else {
                text = str + (tmp3.prefix + replaced);
              }
            }
          }
        } else {
          text = str + tmp3;
        }
        num = num + 1;
        let tmp36 = arr;
        str = text;
        str2 = text;
      }
      const _TypeError = TypeError;
      const typeError4 = new TypeError("Expected \"" + tmp3.name + "\" to match \"" + tmp3.pattern + "\", but received \"" + replaced + "\"");
      throw typeError4;
    }
    return str2;
  };
};
module.exports.tokensToRegExp = tokensToRegExp;
let items = ["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"];
let regExp = new RegExp(items.join("|"), "g");

export default pathToRegexp;