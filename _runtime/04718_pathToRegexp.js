// === Module 4718: pathToRegexp ===

// Module 4718 (pathToRegexp)
import _mod4719 from "module_4719" /* 4719 */;

function parse(str, delimiter) {
  let str6;
  const items = [];
  const tmp = delimiter && delimiter.delimiter || "/";
  let match = regExp.exec(str);
  let num = 0;
  let num2 = 0;
  str = "";
  let num3 = 0;
  while (null != match) {
    let str4;
    let sum1;
    let tmp4 = match[1];
    let index = match.index;
    let first = match[0];
    let text = `${str.slice(num, index)}`;
    let sum = index + first.length;
    if (tmp4) {
      str4 = `${str.slice(num, index)}${tmp4[1]}`;
      sum1 = num2;
    } else {
      let tmp9 = str[sum];
      let str2 = match[2];
      let tmp10 = match[3];
      let str3 = match[4];
      let tmp12 = match[6];
      let tmp13 = match[7];
      str4 = text;
      let tmp11 = match[5];
      if (`${str.slice(num, index)}`) {
        let arr = items.push(`${str.slice(num, index)}`);
        str4 = "";
      }
      let tmp15 = null != str2 && null != tmp9 && tmp9 !== str2;
      let tmp16 = "+" === tmp12 || "*" === tmp12;
      let tmp17 = "?" === tmp12 || "*" === tmp12;
      let str5 = match[2] || tmp;
      if (!str3) {
        str3 = tmp11;
      }
      sum1 = num2;
      let push = items.push;
      if (!tmp10) {
        sum1 = num2 + 1;
        tmp10 = num2;
      }
      let obj = { name: tmp10, prefix: str2, delimiter: str5, optional: tmp17, repeat: tmp16, partial: tmp15, asterisk: tmp13, pattern: str6 };
      if (!str2) {
        str2 = "";
      }
      if (str3) {
        str6 = str3.replace(/([=!:$\/()])/g, "\\$1");
      } else {
        str6 = ".*";
        if (!tmp13) {
          str6 = `${"[^" + str5.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")}]+?`;
        }
      }
      let arr2 = push(obj);
    }
    match = regExp.exec(str);
    num2 = sum1;
    num = sum;
    str = str4;
    num3 = sum;
  }
  let sum2 = str;
  if (num3 < str.length) {
    sum2 = str + str.substr(num3);
  }
  if (sum2) {
    items.push(sum2);
  }
  return items;
}
function encodeURIComponentPretty(arg0) {
  let str = encodeURI(arg0);
  return str.replace(/[\/?#]/g, (str) => {
    str = str.charCodeAt(0);
    const str2 = str.toString(16);
    return "%" + str2.toUpperCase();
  });
}
function tokensToRegExp(arg0, items, arg2) {
  let obj = arg2;
  if (!_mod4719(items)) {
    const tmp = items || arg2;
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
  const end = obj.end;
  if (0 < arg0.length) {
    do {
      let text;
      let str3 = arg0[num];
      if (typeof str3 === "string") {
        text = `${str3.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")}`;
      } else {
        let combined2;
        let str11 = str3.prefix;
        let replaced = str11.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
        let text1 = `${"(?:" + str3.pattern})`;
        let arr = items.push(str3);
        let combined = text1;
        if (str3.repeat) {
          let _HermesInternal = HermesInternal;
          combined = `${"(?:" + str3.pattern})` + `(?:${tmp13}` + `${"(?:" + str3.pattern})` + ")*";
        }
        if (str3.optional) {
          let combined1;
          if (str3.partial) {
            let _HermesInternal4 = HermesInternal;
            combined1 = `${tmp13}(` + combined + ")?";
          } else {
            let _HermesInternal3 = HermesInternal;
            combined1 = `(?:${tmp13}` + "(" + combined + "))?";
          }
          combined2 = combined1;
        } else {
          let _HermesInternal2 = HermesInternal;
          combined2 = `${tmp13}(` + combined + ")";
        }
        text = str + combined2;
      }
      num = num + 1;
      str = text;
      str2 = text;
    } while (num < arg0.length);
  }
  const str4 = obj.delimiter || "/";
  const replaced1 = str4.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
  let text2 = str2;
  const tmp8 = str2.slice(-replaced1.length) === replaced1;
  if (!strict) {
    let substr = str2;
    if (tmp8) {
      substr = str2.slice(0, -replaced1.length);
    }
    text2 = `${tmp10 + "(?:" + arr2}(?=$))?`;
  }
  let str6 = "$";
  if (false === end) {
    let str7;
    if (!strict) {
      str7 = `${"(?=" + arr2}|$)`;
    } else {
      str7 = "";
    }
    str6 = str7;
  }
  const _RegExp = RegExp;
  const combined3 = "^" + text2 + str6;
  let str10 = "i";
  if (obj.sensitive) {
    str10 = "";
  }
  const _RegExp1 = new _RegExp(combined3, str10);
  _RegExp1.keys = items;
  return _RegExp1;
}
function pathToRegexp(source, items, arg2) {
  let length;
  let length2;
  let tmp6;
  let obj = arg2;
  if (!_mod4719(items)) {
    const tmp3 = items || arg2;
    items = [];
    obj = tmp3;
  }
  if (!obj) {
    obj = {};
  }
  if (source instanceof RegExp) {
    const str5 = source.source;
    const match = str5.match(/\((?!\?)/g);
    if (match) {
      let num3 = 0;
      if (0 < match.length) {
        do {
          let obj2 = { name: num3, prefix: null, delimiter: null, optional: false, repeat: false, partial: false, asterisk: false, pattern: null };
          let arr = items.push(obj2);
          num3 = num3 + 1;
          length2 = match.length;
        } while (num3 < length2);
      }
    }
    source.keys = items;
    tmp6 = source;
  } else if (_mod4719(source)) {
    const items1 = [];
    let num = 0;
    if (0 < source.length) {
      do {
        let arr3 = items1.push(pathToRegexp(source[num], items, obj).source);
        num = num + 1;
        length = source.length;
      } while (num < length);
    }
    const _RegExp = RegExp;
    let str3 = "i";
    const text = `(?:${arr2.join("|")}`;
    if (obj.sensitive) {
      str3 = "";
    }
    const self = this;
    const self2 = this;
    const _RegExp1 = new _RegExp(text + ")", str3);
    _RegExp1.keys = items;
    tmp6 = _RegExp1;
  } else {
    tmp6 = tokensToRegExp(parse(source, obj), items, obj);
  }
  return tmp6;
}
module.exports.parse = parse;
module.exports.compile = function compile(arg0, arg1) {
  let num;
  let arr = parse(arg0, arg1);
  const array = new Array(arr.length);
  for (let num = 0; num < arr.length; num = num + 1) {
    let tmp2 = num;
    if (typeof arr[num] === "object") {
      let _RegExp = RegExp;
      let self = this;
      let self2 = this;
      regExp = new RegExp("^(?:" + arr[num].pattern + ")$");
      let tmp4 = regExp;
      array[num] = regExp;
    }
  }
  return function(arg0, arg1) {
    let _encodeURIComponent;
    let replaced;
    let tmp5;
    const tmp = arg0 || {};
    const tmp2 = arg1 || {};
    if (tmp2.pretty) {
      _encodeURIComponent = encodeURIComponentPretty;
    } else {
      _encodeURIComponent = encodeURIComponent;
    }
    let str = "";
    let num = 0;
    let str2 = "";
    if (0 < arr.length) {
      while (true) {
        let text;
        tmp5 = arr[num];
        if (typeof tmp5 !== "string") {
          arr = tmp[tmp5.name];
          if (null == arr) {
            if (tmp5.optional) {
              text = str;
              if (tmp5.partial) {
                text = `${tmp5.prefix}`;
              }
            } else {
              let _TypeError5 = TypeError;
              let str17 = "Expected \"";
              let self9 = this;
              let str18 = "\" to be defined";
              let self10 = this;
              let typeError = new TypeError("Expected \"" + tmp5.name + "\" to be defined");
              throw typeError;
            }
          } else if (_mod4719(arr)) {
            if (tmp5.repeat) {
              if (0 === arr.length) {
                text = str;
                if (!tmp5.optional) {
                  let _TypeError4 = TypeError;
                  let str15 = "Expected \"";
                  let self7 = this;
                  let str16 = "\" to not be empty";
                  let self8 = this;
                  let typeError1 = new TypeError("Expected \"" + tmp5.name + "\" to not be empty");
                  throw typeError1;
                }
              } else {
                let num2 = 0;
                let sum = str;
                text = str;
                if (0 < arr.length) {
                  let _encodeURIComponentResult = _encodeURIComponent(arr[num2]);
                  let obj2 = array[num];
                  while (obj2.test(_encodeURIComponentResult)) {
                    sum = sum + ((0 === num2 ? tmp5.prefix : tmp5.delimiter) + _encodeURIComponentResult);
                    num2 = num2 + 1;
                    text = sum;
                    continue;
                  }
                  let _TypeError3 = TypeError;
                  let str11 = "Expected all \"";
                  let str12 = "\" to match \"";
                  let _JSON2 = JSON;
                  let text1 = `Expected all "${tmp5.name}" to match "${tmp5.pattern}`;
                  let str13 = "\", but received `";
                  let self5 = this;
                  let str14 = "`";
                  let self6 = this;
                  let typeError2 = new TypeError(text1 + "\", but received `" + JSON.stringify(_encodeURIComponentResult) + "`");
                  throw typeError2;
                }
              }
            } else {
              let _TypeError2 = TypeError;
              let str8 = "Expected \"";
              let _JSON = JSON;
              let text2 = `Expected "${tmp5.name}`;
              let str9 = "\" to not repeat, but received `";
              let self3 = this;
              let str10 = "`";
              let self4 = this;
              let typeError3 = new TypeError(`Expected "${tmp5.name}` + "\" to not repeat, but received `" + JSON.stringify(arr) + "`");
              throw typeError3;
            }
          } else {
            if (tmp5.asterisk) {
              let _encodeURI = encodeURI;
              let str3 = encodeURI(arr);
              replaced = str3.replace(/[?#]/g, (str) => {
                str = str.charCodeAt(0);
                const str2 = str.toString(16);
                return "%" + str2.toUpperCase();
              });
            } else {
              replaced = _encodeURIComponent(arr);
            }
            let obj = array[num];
            if (!obj.test(replaced)) {
              break;
            } else {
              text = str + (tmp5.prefix + replaced);
            }
          }
        } else {
          text = str + tmp5;
        }
        num = num + 1;
        str = text;
        str2 = text;
      }
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError4 = new TypeError("Expected \"" + tmp5.name + "\" to match \"" + tmp5.pattern + "\", but received \"" + replaced + "\"");
      throw typeError4;
    }
    return str2;
  };
};
module.exports.tokensToFunction = function tokensToFunction(arg0) {
  let num;
  let closure_0 = arg0;
  const array = new Array(arg0.length);
  for (let num = 0; num < arg0.length; num = num + 1) {
    if (typeof arg0[num] === "object") {
      let _RegExp = RegExp;
      let self = this;
      let self2 = this;
      regExp = new RegExp("^(?:" + arg0[num].pattern + ")$");
      array[num] = regExp;
    }
  }
  return function(arg0, arg1) {
    let _encodeURIComponent;
    let replaced;
    let tmp5;
    const tmp = arg0 || {};
    const tmp2 = arg1 || {};
    if (tmp2.pretty) {
      _encodeURIComponent = encodeURIComponentPretty;
    } else {
      _encodeURIComponent = encodeURIComponent;
    }
    let str = "";
    let num = 0;
    let str2 = "";
    if (0 < arr.length) {
      while (true) {
        let text;
        tmp5 = arr[num];
        if (typeof tmp5 !== "string") {
          arr = tmp[tmp5.name];
          if (null == arr) {
            if (tmp5.optional) {
              text = str;
              if (tmp5.partial) {
                text = `${tmp5.prefix}`;
              }
            } else {
              let _TypeError5 = TypeError;
              let str17 = "Expected \"";
              let self9 = this;
              let str18 = "\" to be defined";
              let self10 = this;
              let typeError = new TypeError("Expected \"" + tmp5.name + "\" to be defined");
              throw typeError;
            }
          } else if (_mod4719(arr)) {
            if (tmp5.repeat) {
              if (0 === arr.length) {
                text = str;
                if (!tmp5.optional) {
                  let _TypeError4 = TypeError;
                  let str15 = "Expected \"";
                  let self7 = this;
                  let str16 = "\" to not be empty";
                  let self8 = this;
                  let typeError1 = new TypeError("Expected \"" + tmp5.name + "\" to not be empty");
                  throw typeError1;
                }
              } else {
                let num2 = 0;
                let sum = str;
                text = str;
                if (0 < arr.length) {
                  let _encodeURIComponentResult = _encodeURIComponent(arr[num2]);
                  let obj2 = array[num];
                  while (obj2.test(_encodeURIComponentResult)) {
                    sum = sum + ((0 === num2 ? tmp5.prefix : tmp5.delimiter) + _encodeURIComponentResult);
                    num2 = num2 + 1;
                    text = sum;
                    continue;
                  }
                  let _TypeError3 = TypeError;
                  let str11 = "Expected all \"";
                  let str12 = "\" to match \"";
                  let _JSON2 = JSON;
                  let text1 = `Expected all "${tmp5.name}" to match "${tmp5.pattern}`;
                  let str13 = "\", but received `";
                  let self5 = this;
                  let str14 = "`";
                  let self6 = this;
                  let typeError2 = new TypeError(text1 + "\", but received `" + JSON.stringify(_encodeURIComponentResult) + "`");
                  throw typeError2;
                }
              }
            } else {
              let _TypeError2 = TypeError;
              let str8 = "Expected \"";
              let _JSON = JSON;
              let text2 = `Expected "${tmp5.name}`;
              let str9 = "\" to not repeat, but received `";
              let self3 = this;
              let str10 = "`";
              let self4 = this;
              let typeError3 = new TypeError(`Expected "${tmp5.name}` + "\" to not repeat, but received `" + JSON.stringify(arr) + "`");
              throw typeError3;
            }
          } else {
            if (tmp5.asterisk) {
              let _encodeURI = encodeURI;
              let str3 = encodeURI(arr);
              replaced = str3.replace(/[?#]/g, (str) => {
                str = str.charCodeAt(0);
                const str2 = str.toString(16);
                return "%" + str2.toUpperCase();
              });
            } else {
              replaced = _encodeURIComponent(arr);
            }
            let obj = array[num];
            if (!obj.test(replaced)) {
              break;
            } else {
              text = str + (tmp5.prefix + replaced);
            }
          }
        } else {
          text = str + tmp5;
        }
        num = num + 1;
        str = text;
        str2 = text;
      }
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError4 = new TypeError("Expected \"" + tmp5.name + "\" to match \"" + tmp5.pattern + "\", but received \"" + replaced + "\"");
      throw typeError4;
    }
    return str2;
  };
};
module.exports.tokensToRegExp = tokensToRegExp;
let items = ["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"];
let regExp = new RegExp(items.join("|"), "g");

export default pathToRegexp;