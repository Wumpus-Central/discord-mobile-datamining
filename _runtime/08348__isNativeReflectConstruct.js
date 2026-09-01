// _runtime/08348__isNativeReflectConstruct.js
import asyncGeneratorStepDefault from "00005_asyncGeneratorStep.js";
import noopAll from "00019_noop.js";
import closure_2 from "metro/00041__classCallCheck.js";
import importDefaultResult1 from "metro/00042__createClass.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult2 from "00098__inherits.js";
import closure_5 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

let SvgFromUri = arg1;
let closure_1 = dependencyMap;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function missingTag() {
  return null;
}
class SvgAst {
  constructor(arg0) {
    ({ ast, override } = global);
    if (ast) {
      tmp2 = SvgFromUri;
      tmp3 = closure_1;
      ({ props, children } = ast);
      tmp4 = jsx;
      obj = {};
      tmp5 = obj;
      merged = Object.assign(props);
      tmp7 = obj;
      tmp8 = override;
      merged1 = Object.assign(override);
      obj.children = children;
      return jsx(require("Circle").tags.svg, obj);
    } else {
      tmp = null;
      return null;
    }
  }
}
class SvgXml {
  constructor(arg0) {
    if (undefined === global.onError) {
      tmp4 = closure_13;
    }
    xml = global.xml;
    ({ override, fallback } = global);
    try {
      tmp5 = useMemo;
      items = [];
      items[0] = xml;
      obj = { ast: null, override: null };
      obj[0] = useMemo(() => {
        let tmp2 = null;
        if (null !== xml) {
          tmp2 = closure_1_24(tmp);
        }
        return tmp2;
      }, items);
      tmp6 = jsx;
      tmp7 = SvgAst;
      if (override) {
      } else {
        override = global;
      }
      obj[1] = override;
      return tmp6(tmp7, obj);
    } catch (tmp8) {
      tmp3Result = tmp3(tmp8);
      tmp10 = null;
      if (tmp != null) {
      } else {
        tmp11 = null;
      }
      return null;
    }
    return;
  }
}
function astToReact(obj) {
  if (typeof obj === "object") {
    ({ props, children } = obj);
    let _class;
    if (props != null) {
      _class = props.class;
    }
    if (_class) {
      props.className = props.class;
      delete tmp2[tmp];
    }
    obj = {};
    const merged = Object.assign(props);
    obj.children = children.map(astToReact);
    return jsx(obj.Tag, {}, arg1);
  } else {
    return obj;
  }
}
function _parse(closure_0) {
  let sum;
  error = function error(arg0) {
    let tmp11;
    const parts = lib.split("\n");
    let num = 0;
    let diff = c12;
    let num2 = 0;
    let tmp3 = c12;
    if (0 < parts.length) {
      num2 = num;
      tmp3 = diff;
      while (diff >= parts[num].length) {
        diff = diff - length2;
        num = num + 1;
        tmp3 = diff;
        num2 = num;
        if (num >= length) {
          break;
        }
      }
    }
    const match = /(^|\n).*$/.exec(lib.slice(0, c12).replace(/^\t+/, closure_1_19));
    let str2 = match;
    if (match) {
      str2 = match[0];
    }
    if (!str2) {
      str2 = "";
    }
    const match1 = /.*(\n|$)/.exec(arr.slice(tmp));
    let first = match1;
    if (match1) {
      first = match1[0];
    }
    let diff1 = tmp9 - 1;
    let str3 = "";
    let str4 = "";
    if (+str2.length) {
      do {
        str3 = ` `;
        tmp11 = +diff1;
        diff1 = tmp11 - 1;
        str4 = str3;
      } while (tmp11);
    }
    error = new Error("" + arg0 + " (" + num2 + ":" + tmp3 + "). If this is valid SVG, it's probably a bug. Please raise an issue\n\n" + "" + str2 + first + "\n" + str4 + "^");
    throw error;
  };
  function neutral() {
    let str = "";
    if (c12 < length) {
      str = "";
      if ("<" !== lib[c12]) {
        const text = `${tmp3}`;
        const sum = c12 + 1;
        c12 = sum;
        str = text;
        while (sum < length) {
          let tmp8 = lib;
          let tmp9 = c12;
          let str3 = text;
          str = text;
          if ("<" === lib[c12]) {
            break;
          }
        }
      }
    }
    if (obj.test(str)) {
      _null2.push(str);
    }
    return "<" === lib[c12] ? openingTag : neutral;
  }
  function openingTag() {
    let arr = lib;
    let sum = lib[closure_12];
    if ("?" === sum) {
      sum = neutral;
      return neutral;
    } else {
      if ("!" === sum) {
        sum = closure_12;
        sum = closure_12 + 1;
        sum = closure_12;
        if ("--" === arr.slice(sum, closure_12 + 3)) {
          sum = comment;
          return comment;
        } else {
          sum = closure_12;
          sum = closure_12 + 8;
          if ("[CDATA[" === arr.slice(sum, sum)) {
            sum = cdata;
            return cdata;
          } else {
            if (obj4.test(arr.slice(sum, sum))) {
              sum = neutral;
              return neutral;
            }
            obj4 = /doctype/i;
          }
        }
      }
      if ("/" !== sum) {
        sum = closure_12;
        let tmp5 = length;
        let str3 = "";
        if (closure_12 < length) {
          let tmp4 = arr[closure_12];
          tmp5 = sum;
          str3 = "";
          if (closure_1_20.test(tmp4)) {
            const text = `${tmp4}`;
            const sum1 = closure_12 + 1;
            closure_12 = sum1;
            tmp5 = length;
            str3 = text;
            while (sum1 < length) {
              let tmp10 = closure_1_20;
              let tmp11 = lib;
              let tmp12 = closure_12;
              let tmp13 = lib[closure_12];
              let str2 = text;
              tmp4 = tmp13;
              tmp5 = tmp9;
              str3 = text;
              if (!closure_1_20.test(tmp13)) {
                break;
              }
            }
          }
        }
        let obj = {};
        obj = { tag: null, props: null, children: null, parent: null, Tag: null };
        obj[0] = str3;
        obj[1] = obj;
        obj[2] = [];
        obj[3] = obj;
        obj[4] = lib(closure_1_1[9]).tags[str3] || closingTag;
        if (obj) {
          arr = children.push(obj);
        }
        if (closure_12 < tmp5) {
          while (closure_1_22.test(lib[closure_12])) {
            let tmp25 = closure_12;
            let tmp27 = length;
            if (closure_12 < length) {
              let tmp28 = closure_12;
              tmp27 = tmp26;
              if (obj3.test(tmp23[closure_12])) {
                let tmp29 = closure_12;
                let sum2 = closure_12 + 1;
                closure_12 = sum2;
                tmp27 = length;
                while (sum2 < length) {
                  let tmp32 = closure_1_22;
                  let tmp33 = lib;
                  let tmp34 = closure_12;
                  tmp27 = tmp31;
                  if (!closure_1_22.test(lib[closure_12])) {
                    break;
                  }
                }
              }
            }
            let tmp35 = closure_12;
            let tmp36 = tmp27;
            let str9 = "";
            if (closure_12 < tmp27) {
              let tmp37 = closure_1_20;
              let tmp38 = lib;
              let tmp39 = closure_12;
              let tmp40 = lib[closure_12];
              let str10 = "";
              tmp36 = tmp27;
              str9 = "";
              if (closure_1_20.test(tmp40)) {
                let text1 = `${tmp40}`;
                let tmp42 = closure_12;
                let sum3 = closure_12 + 1;
                closure_12 = sum3;
                tmp36 = length;
                str9 = text1;
                while (sum3 < length) {
                  let tmp45 = closure_1_20;
                  let tmp46 = lib;
                  let tmp47 = closure_12;
                  let tmp48 = lib[closure_12];
                  str10 = text1;
                  tmp40 = tmp48;
                  tmp36 = tmp44;
                  str9 = text1;
                  if (!closure_1_20.test(tmp48)) {
                    break;
                  }
                }
              }
            }
            if (!str9) {
              break;
            } else {
              let tmp49 = closure_12;
              let tmp50 = tmp36;
              if (closure_12 < tmp36) {
                let tmp51 = closure_1_22;
                let tmp52 = lib;
                let tmp53 = closure_12;
                tmp50 = tmp36;
                if (closure_1_22.test(lib[closure_12])) {
                  let tmp54 = closure_12;
                  let sum4 = closure_12 + 1;
                  closure_12 = sum4;
                  tmp50 = length;
                  while (sum4 < length) {
                    let tmp57 = closure_1_22;
                    let tmp58 = lib;
                    let tmp59 = closure_12;
                    tmp50 = tmp56;
                    if (!closure_1_22.test(lib[closure_12])) {
                      break;
                    }
                  }
                }
              }
              let tmp61 = closure_12;
              let flag = true;
              if ("=" === lib[closure_12]) {
                sum = closure_12;
                sum = closure_12 + 1;
                closure_12 = sum;
                let tmp64 = tmp50;
                if (sum < tmp50) {
                  let tmp62 = closure_1_22;
                  let tmp63 = closure_12;
                  tmp64 = tmp50;
                  if (closure_1_22.test(tmp60[closure_12])) {
                    let tmp65 = closure_12;
                    let sum5 = closure_12 + 1;
                    closure_12 = sum5;
                    tmp64 = length;
                    while (sum5 < length) {
                      let tmp68 = closure_1_22;
                      let tmp69 = lib;
                      let tmp70 = closure_12;
                      tmp64 = tmp67;
                      if (!closure_1_22.test(lib[closure_12])) {
                        break;
                      }
                    }
                  }
                }
                let tmp71 = closure_1_23;
                let tmp73 = closure_12;
                let tmp72 = lib;
                let str11 = "";
                if (closure_1_23.test(lib[closure_12])) {
                  let tmp81 = closure_12;
                  let tmp82 = +closure_12;
                  closure_12 = tmp82 + 1;
                  let tmp84 = closure_12;
                  let str13 = "";
                  let str14 = "";
                  if (closure_12 >= tmp64) {
                    let tmp90 = str14;
                  } else {
                    let tmp85 = lib;
                    let tmp86 = closure_12;
                    let tmp87 = +closure_12;
                    closure_12 = tmp87 + 1;
                    let tmp88 = lib[tmp87];
                    let tmp89 = str13;
                    tmp90 = str13;
                    while (tmp88 !== tmp83) {
                      let tmp91 = "\\" !== tmp88 || false;
                      let flag2 = false;
                      if (!tmp91) {
                        flag2 = true;
                      }
                      let combined = tmp88;
                      if (flag2) {
                        let _HermesInternal = HermesInternal;
                        combined = "\\" + tmp88;
                      }
                      str13 = str13 + combined;
                      let tmp93 = closure_12;
                      let tmp94 = length;
                      str14 = str13;
                    }
                  }
                  let str12 = tmp90;
                } else {
                  let tmp74 = lib;
                  let tmp75 = closure_12;
                  let tmp76 = lib[closure_12];
                  let tmp77 = str11;
                  str12 = str11;
                  while (" " !== tmp76) {
                    str12 = str11;
                    if (">" === tmp76) {
                      break;
                    } else {
                      str12 = str11;
                      if ("/" === tmp76) {
                        break;
                      } else {
                        str11 = str11 + tmp76;
                        let tmp78 = closure_12;
                        let sum6 = closure_12 + 1;
                        closure_12 = sum6;
                        let tmp80 = length;
                        str12 = str11;
                        if (sum6 >= length) {
                          break;
                        }
                      }
                    }
                  }
                }
                let isNaNResult = "id" === str9;
                if (!isNaNResult) {
                  let _isNaN = isNaN;
                  isNaNResult = isNaN(+str12);
                }
                if (!isNaNResult) {
                  isNaNResult = "" === str12.trim();
                }
                let tmp96 = str12;
                if (!isNaNResult) {
                  tmp96 = +str12;
                }
                flag = tmp96;
              }
              let tmp97 = closure_1_17;
              if (typeof closure_1_17 !== "function") {
                let str24 = "Trying to call a non-function";
                sum = HermesBuiltin.throwTypeError();
              }
              let tmp98 = closure_1_16;
              obj[str9.replace(/[:-]([a-z])/g, closure_1_16)] = flag;
              let tmp99 = closure_12;
              sum = length;
              if (closure_12 >= length) {
                break;
              }
            }
          }
          obj3 = closure_1_22;
          tmp23 = lib;
        }
        if (typeof obj.style === "string") {
          obj.styles = str15;
          obj = {};
          const parts = str15.split(";");
          const found = parts.filter((str) => str.trim());
          for (let num3 = 0; num3 < length; num3 = num3 + 1) {
            let arr2 = found[num3];
            sum = num3;
            if (0 !== arr2.length) {
              sum = arr2.split(":");
              [str16, str17] = sum;
              sum = closure_1_17;
              let str18 = str16.trim();
              if (typeof closure_1_17 !== "function") {
                let str27 = "Trying to call a non-function";
                sum = HermesBuiltin.throwTypeError();
              }
              sum = closure_1_16;
              sum = str18.replace(/[:-]([a-z])/g, closure_1_16);
              obj[sum] = str17.trim();
            }
          }
          obj.style = obj;
        }
        sum = closure_12;
        let flag3 = false;
        if ("/" === arr[closure_12]) {
          sum = closure_12;
          closure_12 = closure_12 + 1;
          flag3 = true;
        }
        sum = closure_12;
        if (">" !== arr[closure_12]) {
          sum = error;
          sum = error("Expected >");
        } else {
          if (!flag3) {
            children = obj.children;
            sum = arr;
            sum = arr.push(obj);
          }
          sum = neutral;
          return neutral;
        }
        const tmp17 = lib(closure_1_1[9]).tags[str3] || closingTag;
      }
      sum = closingTag;
      return closingTag;
    }
  }
  function comment() {
    const index = lib.indexOf("-->", closure_12);
    if (!~index) {
      error("expected -->");
    }
    closure_12 = index + 2;
    return neutral;
  }
  function cdata() {
    let arr = lib;
    const index = lib.indexOf("]]>", closure_12);
    if (!~index) {
      error("expected ]]>");
    }
    arr = _null2.push(arr.slice(closure_12 + 7, index));
    closure_12 = index + 2;
    return neutral;
  }
  function closingTag() {
    let tmp2 = length;
    let str = "";
    if (sum1 < length) {
      let tmp6 = lib[sum1];
      tmp2 = tmp;
      str = "";
      if (closure_1_20.test(tmp6)) {
        const text = `${tmp6}`;
        const sum = sum1 + 1;
        sum1 = sum;
        tmp2 = length;
        str = text;
        while (sum < length) {
          let tmp11 = closure_1_20;
          let tmp12 = lib;
          let tmp13 = sum1;
          let tmp14 = lib[sum1];
          let str2 = text;
          tmp6 = tmp14;
          tmp2 = tmp10;
          str = text;
          if (!closure_1_20.test(tmp14)) {
            break;
          }
        }
      }
    }
    if (!str) {
      error("Expected tag name");
    }
    let tmp17 = _null;
    if (_null) {
      tmp17 = str !== _null.tag;
    }
    if (!tmp17) {
      if (sum1 < tmp2) {
        if (closure_1_22.test(lib[sum1])) {
          sum1 = sum1 + 1;
          while (sum1 < length) {
            let tmp25 = closure_1_22;
            let tmp26 = lib;
            let tmp27 = sum1;
            if (!closure_1_22.test(lib[sum1])) {
              break;
            }
          }
        }
      }
      if (">" !== lib[sum1]) {
        error("Expected >");
      } else {
        arr = arr.pop();
        _null = tmp32;
        if (arr[arr.length - 1]) {
          const children = tmp32.children;
        }
        return neutral;
      }
    }
    error("Expected closing tag </" + str + "> to match opening tag <" + _null.tag + ">");
  }
  const length = closure_0.length;
  c3 = null;
  function metadata(arg0, arg1) {
    let tmp2 = length;
    if (sum1 + 1 < length) {
      if ("<" !== lib[sum1]) {
        const sum = sum1 + 1;
        sum1 = sum;
        tmp2 = length;
        while (sum + 1 < length) {
          let arr = lib;
          let tmp10 = sum1;
          if ("<" !== lib[sum1]) {
            continue;
          } else {
            let tmp11 = closure_1_20;
            let tmp12 = sum1;
            tmp2 = tmp9;
            if (closure_1_20.test(arr[sum1 + 1])) {
              break;
            } else {
              let tmp13 = closure_1_21;
              let tmp14 = sum1;
              let num2 = 4;
              tmp2 = tmp9;
              if (closure_1_21.test(arr.slice(sum1, sum1 + 4))) {
                break;
              }
            }
          }
          break;
        }
      } else {
        tmp2 = tmp;
        if (!closure_1_20.test(arr2[sum1 + 1])) {
          tmp2 = tmp;
        }
      }
    }
    let str = "";
    if (sum1 < tmp2) {
      str = "";
      if ("<" !== lib[sum1]) {
        const text = `${tmp17}`;
        sum1 = sum1 + 1;
        str = text;
        while (sum1 < length) {
          let tmp22 = lib;
          let tmp23 = sum1;
          let str3 = text;
          str = text;
          if ("<" === lib[sum1]) {
            break;
          }
        }
      }
    }
    if (obj.test(str)) {
      arr = _null2.push(str);
    }
    return "<" === lib[sum1] ? openingTag : neutral;
  }
  c4 = null;
  closure_5 = [];
  c12 = 0;
  let tmp = metadata;
  if (0 < length) {
    do {
      let tmp2 = metadata;
      if (!metadata) {
        let str = "Unexpected character";
        let errorResult = error("Unexpected character");
      }
      metadata = metadata();
      let tmp4 = c12;
      sum = c12 + 1;
      c12 = sum;
      tmp = metadata;
    } while (sum < length);
  }
  if (tmp !== neutral) {
    error("Unexpected end of input");
  } else if (closure_1) {
    let tmp8 = tmp6;
    if (arg1) {
      tmp8 = arg1(tmp6);
    }
    if (!tmp8) {
      tmp8 = closure_1;
    }
    let children = tmp8.children;
    tmp8.children = children.map(astToReact);
    return tmp8;
  } else {
    return null;
  }
}
noopAll;
({ Component, useEffect: closure_6, useMemo: error, useState: closure_8 } = noop);
error = console.error;
let closure_13 = error.bind(console);
class SvgFromXml {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, SvgFromUri);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(SvgFromUri);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { ast: null };
    return tmp3Result;
  }
}
SvgFromUri = SvgFromXml;
importDefaultResult2(SvgFromXml, Component);
let obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const parsed = this.parse(this.props.xml);
  }
};
let items = [
  obj,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(xml) {
      const self = this;
      xml = this.props.xml;
      if (xml !== xml.xml) {
        const parsed = self.parse(xml);
      }
    }
  },
  {
    key: "parse",
    value: function parse(closure_0) {
      const self = this;
      try {
        let tmp5 = null;
        if (closure_0) {
          tmp5 = _parse(closure_0);
        }
        let obj = { ast: null };
        obj[0] = tmp5;
        self.setState(obj);
      } catch (tmp8) {
        obj = {};
        const merged = Object.assign(tmp8);
        const _HermesInternal = HermesInternal;
        obj.message = "[RNSVG] Couldn't parse SVG, reason: " + tmp8.message;
        tmp2(obj);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      const obj = { ast: this.state.ast, override: null };
      let override = props.override;
      if (!override) {
        override = props;
      }
      obj[1] = override;
      return <SvgAst ast={this.state.ast} override={null} />;
    }
  }
];
const importDefaultResult1Result = importDefaultResult1(SvgFromXml, items);
closure_1 = undefined;
class SvgFromUri {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = closure_2(this, SvgFromUri);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(SvgFromUri);
    tmp3 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.state = { xml: null };
    return tmp3Result;
  }
}
importDefaultResult2(SvgFromUri, Component);
obj = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const response = this.fetch(this.props.uri);
  }
};
let items1 = [
  obj,
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(uri) {
      const self = this;
      uri = this.props.uri;
      if (uri !== uri.uri) {
        const response = self.fetch(uri);
      }
    }
  },
,

];
obj = { key: "fetch", value: null };
closure_1 = asyncGeneratorStepDefault(function(arg0) {
  const self = this;
  closure_1 = arg0;
  c8 = 0;
  c9 = 0;
  c6 = 0;
  return (function*(arg0) {
    if (c9 === 2) {
      c9 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_5 = _self;
            closure_4 = tmp11;
            c6 = 1;
            const setState = _self.setState;
            closure_2 = {};
            let tmp7 = null;
            if (table) {
              obj1 = self(table[10]);
              c8 = 2;
              c9 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.fetchText(tmp29);
              return obj1;
            } else {
              closure_2.xml = tmp7;
              setState(closure_2);
              c6 = 0;
              tmp11 = setState;
            }
          }
        } else if (1 === tmp6) {
          c6 = 0;
          _self = closure_7;
          const _console = console;
          console.error(_self);
        } else if (arg0 === 1) {
          c9 = 3;
          throw arg1;
        } else {
          tmp7 = arg1;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        }
        c9 = 3;
      } catch (tmp19) {
        closure_7 = tmp19;
        if (tmp3 === c6) {
          c9 = tmp2;
          throw tmp19;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
});
obj[1] = function fetch(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items1[2] = obj;
items1[3] = {
  key: "render",
  value: function render() {
    const props = this.props;
    return <closure_15 xml={this.state.xml} override={props} onError={props.onError} />;
  }
};
function upperCase(arg0, str) {
  return str.toUpperCase();
}
function camelCase(key10009) {
  return key10009.replace(/[:-]([a-z])/g, upperCase);
}
function toSpaces(arg0) {
  let tmp3;
  let diff = tmp - 1;
  let str = "";
  let str2 = "";
  if (+arg0.length) {
    do {
      str = `  `;
      tmp3 = +diff;
      diff = tmp3 - 1;
      str2 = str;
    } while (tmp3);
  }
  return str2;
}
const re20 = /[a-zA-Z0-9:_-]/;
const re21 = /<!--/;
const re22 = /[\s\t\r\n]/;
const re23 = /['"]/;

export { SvgAst };
export { SvgXml };
export const SvgUri = function SvgUri(onError) {
  onError = onError.onError;
  if (undefined === onError) {
    onError = closure_13;
  }
  const uri = onError.uri;
  const onLoad = onError.onLoad;
  let fallback = onError.fallback;
  const tmp2 = callback3(callback6(null), 2);
  closure_3 = tmp2[1];
  const tmp3 = callback3(callback6(false), 2);
  const first = tmp3[0];
  callback3 = tmp3[1];
  const items = [onError, uri, onLoad];
  callback4(() => {
    if (uri) {
      const text = onError(uri[10]).fetchText(tmp);
      const obj = onError(uri[10]);
      text.then((arg0) => {
        callback3(arg0);
        if (closure_4) {
          callback4(false);
        }
        if (callback2 != null) {
          callback2();
        }
      }).catch((arg0) => {
        callback(arg0);
        callback4(true);
      });
      const nextPromise = text.then((arg0) => {
        callback3(arg0);
        if (closure_4) {
          callback4(false);
        }
        if (callback2 != null) {
          callback2();
        }
      });
    } else {
      callback(null);
    }
  }, items);
  if (first) {
    if (fallback == null) {
      fallback = null;
    }
    let tmp8 = fallback;
  } else {
    let obj = { xml: null, override: null, fallback: null };
    obj[0] = tmp2[0];
    obj[1] = onError;
    obj[2] = fallback;
    tmp8 = <SvgXml xml={null} override={null} fallback={null} />;
  }
  return tmp8;
};
export const SvgFromXml = importDefaultResult1Result;
export const SvgFromUri = importDefaultResult1(SvgFromUri, items1);
export { camelCase };
export const getStyle = function getStyle(str) {
  const obj = {};
  const parts = str.split(";");
  const found = parts.filter((str) => str.trim());
  for (let num = 0; num < length; num = num + 1) {
    let arr3 = found[num];
    let tmp = num;
    if (0 !== arr3.length) {
      let parts1 = arr3.split(":");
      [str, str2] = parts1;
      let tmp3 = camelCase;
      let str3 = str.trim();
      if (typeof camelCase !== "function") {
        let str4 = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      let tmp4 = upperCase;
      let replaced = str3.replace(/[:-]([a-z])/g, upperCase);
      obj[replaced] = str2.trim();
    }
  }
  return obj;
};
export { astToReact };
export const parse = _parse;
export const tags = require("Circle").tags;