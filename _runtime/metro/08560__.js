// === Module 8560: ? ===

// Module 8560
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";

let SvgFromUri = fn;
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
      return jsx(SvgFromUri(closure_1[9]).tags.svg, obj);
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
      obj.ast = useMemo(() => {
        let tmp2 = null;
        if (null !== xml) {
          tmp2 = _parse(tmp);
        }
        return tmp2;
      }, items);
      tmp6 = jsx;
      tmp7 = SvgAst;
      if (override) {
      } else {
        override = global;
      }
      obj.override = override;
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
function astToReact(Tag, key) {
  if (typeof Tag === "object") {
    ({ props, children } = Tag);
    let _class;
    if (props != null) {
      _class = props.class;
    }
    if (_class) {
      props.className = props.class;
      delete tmp2[tmp];
    }
    const obj = {};
    const merged = Object.assign(props);
    obj.children = children.map(astToReact);
    return <Tag.Tag key={key} />;
  } else {
    return Tag;
  }
}
function _parse($ZodRealError, fn) {
  let sum;
  const ZodRealError = $ZodRealError;
  function error(arg0) {
    let tmp11;
    const parts = ZodRealError.split("\n");
    let num = 0;
    let diff = sum1;
    let num2 = 0;
    let tmp3 = sum1;
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
    const match = /(^|\n).*$/.exec(ZodRealError.slice(0, sum1).replace(/^\t+/, toSpaces));
    let str2 = match;
    if (match) {
      str2 = match[0];
    }
    if (!str2) {
      str2 = "";
    }
    const match1 = /.*(\n|$)/.exec(ZodRealError.slice(sum1));
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
  }
  function neutral() {
    let str = "";
    if (sum1 < length) {
      str = "";
      if ("<" !== ZodRealError[sum1]) {
        const text = `${tmp3}`;
        const sum = sum1 + 1;
        sum1 = sum;
        str = text;
        while (sum < length) {
          str = text;
          if ("<" === ZodRealError[sum1]) {
            break;
          }
        }
      }
    }
    if (obj.test(str)) {
      children.push(str);
    }
    return "<" === ZodRealError[sum1] ? openingTag : neutral;
  }
  function openingTag() {
    let arr = ZodRealError;
    if ("?" === ZodRealError[sum1]) {
      return neutral;
    } else {
      if ("!" === tmp) {
        const sum = sum1 + 1;
        if ("--" === arr.slice(sum, sum1 + 3)) {
          return comment;
        } else {
          sum1 = sum1 + 8;
          if ("[CDATA[" === arr.slice(sum, sum1)) {
            return cdata;
          } else {
            if (obj4.test(arr.slice(sum, sum1))) {
              return neutral;
            }
            obj4 = /doctype/i;
          }
        }
      }
      if ("/" !== tmp) {
        let tmp5 = length;
        let str3 = "";
        if (sum1 < length) {
          let tmp4 = arr[sum1];
          tmp5 = tmp125;
          str3 = "";
          if (re20.test(tmp4)) {
            const text = `${tmp4}`;
            const sum2 = sum1 + 1;
            sum1 = sum2;
            tmp5 = length;
            str3 = text;
            while (sum2 < length) {
              let tmp13 = ZodRealError[sum1];
              tmp4 = tmp13;
              tmp5 = tmp9;
              str3 = text;
              if (!re20.test(tmp13)) {
                break;
              }
            }
          }
        }
        let obj = {};
        element = { tag: str3, props: obj, children: [], parent, Tag: null };
        element.Tag = SvgFromUri(element[9]).tags[str3] || missingTag;
        if (parent) {
          arr = children.push(element);
        }
        if (sum1 < tmp5) {
          while (re22.test(ZodRealError[sum1])) {
            let tmp27 = length;
            if (sum1 < length) {
              tmp27 = tmp26;
              if (re22.test(ZodRealError[sum1])) {
                let sum3 = sum1 + 1;
                sum1 = sum3;
                tmp27 = length;
                while (sum3 < length) {
                  tmp27 = tmp31;
                  if (!re22.test(ZodRealError[sum1])) {
                    break;
                  }
                }
              }
            }
            let tmp36 = tmp27;
            let str9 = "";
            if (sum1 < tmp27) {
              let tmp40 = ZodRealError[sum1];
              let str10 = "";
              tmp36 = tmp27;
              str9 = "";
              if (re20.test(tmp40)) {
                let text1 = `${tmp40}`;
                let sum4 = sum1 + 1;
                sum1 = sum4;
                tmp36 = length;
                str9 = text1;
                while (sum4 < length) {
                  let tmp48 = ZodRealError[sum1];
                  tmp40 = tmp48;
                  tmp36 = tmp44;
                  str9 = text1;
                  if (!re20.test(tmp48)) {
                    break;
                  }
                }
              }
            }
            if (!str9) {
              break;
            } else {
              let tmp50 = tmp36;
              if (sum1 < tmp36) {
                tmp50 = tmp36;
                if (re22.test(ZodRealError[sum1])) {
                  let sum5 = sum1 + 1;
                  sum1 = sum5;
                  tmp50 = length;
                  while (sum5 < length) {
                    tmp50 = tmp56;
                    if (!re22.test(ZodRealError[sum1])) {
                      break;
                    }
                  }
                }
              }
              let flag = true;
              if ("=" === ZodRealError[sum1]) {
                let sum6 = sum1 + 1;
                sum1 = sum6;
                let tmp64 = tmp50;
                if (sum6 < tmp50) {
                  tmp64 = tmp50;
                  if (re22.test(tmp60[sum1])) {
                    let sum7 = sum1 + 1;
                    sum1 = sum7;
                    tmp64 = length;
                    while (sum7 < length) {
                      tmp64 = tmp67;
                      if (!re22.test(ZodRealError[sum1])) {
                        break;
                      }
                    }
                  }
                }
                let str11 = "";
                if (re23.test(ZodRealError[sum1])) {
                  let tmp82 = +sum1;
                  sum1 = tmp82 + 1;
                  let str13 = "";
                  let str14 = "";
                  if (sum1 >= tmp64) {
                    let tmp90 = str14;
                  } else {
                    let tmp87 = +sum1;
                    sum1 = tmp87 + 1;
                    let tmp88 = ZodRealError[tmp87];
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
                      str14 = str13;
                    }
                  }
                  let str12 = tmp90;
                } else {
                  let tmp76 = ZodRealError[sum1];
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
                        let sum8 = sum1 + 1;
                        sum1 = sum8;
                        str12 = str11;
                        if (sum8 >= length) {
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
              if (typeof camelCase === "function") {
                obj[str9.replace(/[:-]([a-z])/g, upperCase)] = flag;
                if (sum1 >= length) {
                  break;
                }
              } else {
                let str24 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
        }
        if (typeof obj.style === "string") {
          element.styles = str15;
          obj = {};
          const parts = str15.split(";");
          const found = parts.filter((item) => item.trim());
          let num3 = 0;
          if (0 < found.length) {
            while (true) {
              let arr2 = found[num3];
              if (0 !== arr2.length) {
                let parts1 = arr2.split(":");
                [str16, str17] = parts1;
                let str18 = str16.trim();
                if (typeof camelCase !== "function") {
                  break;
                } else {
                  let replaced = str18.replace(/[:-]([a-z])/g, upperCase);
                  obj[replaced] = str17.trim();
                }
              }
              num3 = num3 + 1;
            }
            throw new TypeError("Trying to call a non-function");
          }
          obj.style = obj;
        }
        let flag3 = false;
        if ("/" === arr[sum1]) {
          sum1 = sum1 + 1;
          flag3 = true;
        }
        if (">" !== arr[sum1]) {
          error("Expected >");
        } else {
          if (!flag3) {
            parent = element;
            children = element.children;
            arr = closure_5.push(element);
          }
          return neutral;
        }
        const tmp17 = SvgFromUri(element[9]).tags[str3] || missingTag;
      }
      return closingTag;
    }
  }
  function comment() {
    const index = ZodRealError.indexOf("-->", sum1);
    if (!~index) {
      error("expected -->");
    }
    sum1 = index + 2;
    return neutral;
  }
  function cdata() {
    let arr = ZodRealError;
    const index = ZodRealError.indexOf("]]>", sum1);
    if (!~index) {
      error("expected ]]>");
    }
    arr = children.push(arr.slice(sum1 + 7, index));
    sum1 = index + 2;
    return neutral;
  }
  function closingTag() {
    let tmp2 = length;
    let str = "";
    if (sum1 < length) {
      let tmp6 = ZodRealError[sum1];
      tmp2 = tmp;
      str = "";
      if (re20.test(tmp6)) {
        const text = `${tmp6}`;
        const sum = sum1 + 1;
        sum1 = sum;
        tmp2 = length;
        str = text;
        while (sum < length) {
          let tmp14 = ZodRealError[sum1];
          tmp6 = tmp14;
          tmp2 = tmp10;
          str = text;
          if (!re20.test(tmp14)) {
            break;
          }
        }
      }
    }
    if (!str) {
      error("Expected tag name");
    }
    let tmp17 = parent;
    if (parent) {
      tmp17 = str !== parent.tag;
    }
    if (!tmp17) {
      if (sum1 < tmp2) {
        if (re22.test(ZodRealError[sum1])) {
          sum1 = sum1 + 1;
          while (sum1 < length) {
            if (!re22.test(ZodRealError[sum1])) {
              break;
            }
          }
        }
      }
      if (">" !== ZodRealError[sum1]) {
        error("Expected >");
      } else {
        closure_5.pop();
        parent = tmp32;
        if (closure_5[closure_5.length - 1]) {
          children = tmp32.children;
        }
        return neutral;
      }
    }
    error("Expected closing tag </" + str + "> to match opening tag <" + parent.tag + ">");
  }
  let parent = null;
  function metadata() {
    let tmp2 = length;
    if (sum1 + 1 < length) {
      if ("<" !== ZodRealError[sum1]) {
        const sum = sum1 + 1;
        sum1 = sum;
        tmp2 = length;
        while (sum + 1 < length) {
          let arr = ZodRealError;
          if ("<" !== ZodRealError[sum1]) {
            continue;
          } else {
            tmp2 = length;
            if (re20.test(arr[sum1 + 1])) {
              break;
            } else {
              tmp2 = length;
              if (re21.test(arr.slice(sum1, sum1 + 4))) {
                break;
              }
            }
          }
          break;
        }
      } else {
        tmp2 = length;
        if (!re20.test(ZodRealError[sum1 + 1])) {
          tmp2 = length;
        }
      }
    }
    let str = "";
    if (sum1 < tmp2) {
      str = "";
      if ("<" !== ZodRealError[sum1]) {
        const text = `${tmp17}`;
        sum1 = sum1 + 1;
        str = text;
        while (sum1 < length) {
          str = text;
          if ("<" === ZodRealError[sum1]) {
            break;
          }
        }
      }
    }
    if (obj.test(str)) {
      arr = children.push(str);
    }
    return "<" === ZodRealError[sum1] ? openingTag : neutral;
  }
  let children = null;
  closure_5 = [];
  let sum1 = 0;
  let tmp = metadata;
  if (0 < $ZodRealError.length) {
    do {
      if (!metadata) {
        let str = "Unexpected character";
        let errorResult = error("Unexpected character");
      }
      metadata = metadata();
      sum = sum1 + 1;
      sum1 = sum;
      tmp = metadata;
    } while (sum < length);
  }
  if (tmp !== neutral) {
    error("Unexpected end of input");
  } else if (element) {
    let tmp8 = element;
    if (fn) {
      tmp8 = fn(element);
    }
    if (!tmp8) {
      tmp8 = element;
    }
    children = tmp8.children;
    tmp8.children = children.map(astToReact);
    return tmp8;
  } else {
    return null;
  }
}
const noop = fn(19);
({ Component, useEffect: metroRequire, useMemo: closure_7, useState: closure_8 } = noop);
const jsx = fn(21).jsx;
let closure_13 = error.bind(console);
class SvgFromXml {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = c2(this, SvgFromUri);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(SvgFromUri);
    tmp3 = closure_3;
    if (c10()) {
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
_inherits(SvgFromXml, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const parsed = this.parse(this.props.xml);
  }
};
let items = [
  entry,
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
    value: function parse($ZodRealError) {
      const self = this;
      try {
        let tmp5 = null;
        if ($ZodRealError) {
          tmp5 = _parse($ZodRealError);
        }
        let obj = { ast: tmp5 };
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
      obj.override = override;
      return <SvgAst ast={this.state.ast} override={null} />;
    }
  }
];
const importDefaultResult1Result = _createClass(SvgFromXml, items);
closure_1 = undefined;
class SvgFromUri {
  constructor() {
    self = this;
    items = [...arguments];
    tmp = c2(this, SvgFromUri);
    items1 = [...items];
    tmp2 = closure_4;
    obj = closure_4(SvgFromUri);
    tmp3 = closure_3;
    if (c10()) {
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
_inherits(SvgFromUri, Component);
const entry1 = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const response = this.fetch(this.props.uri);
  }
};
let items1 = [
  entry1,
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
const entry2 = { key: "fetch", value: null };
closure_1 = asyncGeneratorStep(async function(arg0) {
  const self = this;
  closure_1 = arg0;
  c8 = 0;
  c9 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = self;
            closure_4 = tmp11;
            c6 = 1;
            setState = self.setState;
            closure_2 = {};
            let tmp7 = null;
            if (closure_1) {
              let obj1 = self(closure_1[10]);
              c8 = 2;
              c9 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.fetchText(tmp28);
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
          closure_132_0 = closure_7;
          const _console = console;
          console.error(closure_132_0);
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          tmp7 = value;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            obj = { value, done: true };
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
entry2.value = function fetch(arg0) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items1[2] = entry2;
items1[3] = {
  key: "render",
  value: function render() {
    const props = this.props;
    return <importDefaultResult1Result xml={this.state.xml} override={props} onError={props.onError} />;
  }
};
function upperCase(arg0, str) {
  return str.toUpperCase();
}
function camelCase(item) {
  return item.replace(/[:-]([a-z])/g, upperCase);
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
  const tmp2 = _slicedToArray(closure_8(null), 2);
  closure_3 = tmp2[1];
  const tmp3 = _slicedToArray(closure_8(false), 2);
  const first = tmp3[0];
  _slicedToArray = tmp3[1];
  const items = [onError, uri, onLoad];
  closure_6(() => {
    if (uri) {
      const text = SvgFromUri(uri[10]).fetchText(tmp);
      const obj = SvgFromUri(uri[10]);
      text.then((result) => {
        closure_1_3(result);
        if (first) {
          closure_1_5(false);
        }
        if (onLoad != null) {
          onLoad();
        }
      }).catch((error) => {
        onError(error);
        closure_1_5(true);
      });
      const nextPromise = text.then((result) => {
        closure_1_3(result);
        if (first) {
          closure_1_5(false);
        }
        if (onLoad != null) {
          onLoad();
        }
      });
    } else {
      closure_3(null);
    }
  }, items);
  if (first) {
    if (fallback == null) {
      fallback = null;
    }
    let tmp8 = fallback;
  } else {
    let obj = { xml: tmp2[0], override: onError, fallback };
    tmp8 = <SvgXml xml={tmp2[0]} override={onError} fallback={fallback} />;
  }
  return tmp8;
};
export const SvgFromXml = importDefaultResult1Result;
export const SvgFromUri = _createClass(SvgFromUri, items1);
export { camelCase };
export const getStyle = function getStyle(str) {
  const obj = {};
  const parts = str.split(";");
  const found = parts.filter((item) => item.trim());
  let num = 0;
  if (0 < length) {
    while (true) {
      let arr3 = found[num];
      if (0 !== arr3.length) {
        let parts1 = arr3.split(":");
        [str, str2] = parts1;
        let str3 = str.trim();
        if (typeof camelCase !== "function") {
          break;
        } else {
          let replaced = str3.replace(/[:-]([a-z])/g, upperCase);
          obj[replaced] = str2.trim();
        }
      }
      num = num + 1;
    }
    throw new TypeError("Trying to call a non-function");
  }
  return obj;
};
export { astToReact };
export const parse = _parse;
export const tags = fn(8561).tags;