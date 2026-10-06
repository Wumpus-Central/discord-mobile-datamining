// _runtime/08276_SvgAst.js
import Fragment from "react/00021_Fragment.js";
import tags from "08277_tags.js";
import _mod8278 from "metro/08278__.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import c3 from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import "react";
import react from "00019_react.js";

let closure_1, closure_2, closure_7;

let Component;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f96885 = (item) => item.trim();
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function missingTag() {
  return null;
}
class SvgAst {
  constructor(arg0) {
    let ast;
    let children;
    let override;
    let props;
    ({ ast, override } = arg0);
    if (ast) {
      ({ props, children } = ast);
      const svg = tags.tags.svg;
      const merged = Object.assign(props);
      const merged1 = Object.assign(override);
      return <svg>{children}</svg>;
    } else {
      return null;
    }
  }
}
class SvgXml {
  constructor(onError) {
    let fallback;
    let override;
    onError = onError.onError;
    if (undefined === onError) {
      onError = closure_13;
    }
    const xml = onError.xml;
    ({ override, fallback } = onError);
    try {
      const items = [xml];
      if (!override) {
        override = onError;
      }
      return (
        <SvgAst
          ast={closure_7(() => {
            let tmp2 = null;
            if (null !== xml) {
              tmp2 = _parse(tmp);
            }
            return tmp2;
          }, items)}
          override={override}
        />
      );
    } catch (tmp4) {
      onError(tmp4);
      if (fallback == null) {
        fallback = null;
      }
      return fallback;
    }
  }
}
function astToReact(Tag, key) {
  let children;
  let props;
  if (typeof Tag === "object") {
    ({ props, children } = Tag);
    let _class;
    Tag = Tag.Tag;
    if (props != null) {
      _class = props.class;
    }
    if (_class) {
      props.className = props.class;
      delete props["class"];
    }
    const merged = Object.assign(props);
    return <Tag key={key}>{children.map(astToReact)}</Tag>;
  } else {
    return Tag;
  }
}
function _parse(arg0, fn) {
  let element;
  let sum;
  let closure_0 = arg0;
  function error(arg0) {
    let tmp11;
    const parts = closure_0.split("\n");
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
    const obj = /(^|\n).*$/;
    const str = closure_0.slice(0, sum1);
    const match = obj.exec(str.replace(/^\t+/, toSpaces));
    const obj2 = /.*(\n|$)/;
    const match1 = obj2.exec(closure_0.slice(sum1));
    const tmp9 = +((match && match[0]) || "").length;
    let diff1 = tmp9 - 1;
    let str2 = "";
    let str3 = "";
    const tmp8 = match1 && match1[0];
    if (tmp9) {
      do {
        str2 = ` `;
        tmp11 = +diff1;
        diff1 = tmp11 - 1;
        str3 = str2;
      } while (tmp11);
    }
    error = new Error(
      "" +
        arg0 +
        " (" +
        num2 +
        ":" +
        tmp3 +
        "). If this is valid SVG, it's probably a bug. Please raise an issue\n\n" +
        "" +
        arr3 +
        tmp8 +
        "\n" +
        str3 +
        "^",
    );
    throw error;
  }
  function neutral() {
    let str = "";
    if (sum1 < length) {
      str = "";
      if ("<" !== closure_0[sum1]) {
        const text = `${tmp3}`;
        const sum = sum1 + 1;
        sum1 = sum;
        str = text;
        while (sum < length) {
          str = text;
          if ("<" === closure_0[sum1]) {
            break;
          }
        }
      }
    }
    const obj = /\S/;
    if (obj.test(str)) {
      children.push(str);
    }
    return "<" === closure_0[sum1] ? openingTag : neutral;
  }
  function openingTag() {
    let str16;
    let str17;
    if ("?" === closure_0[sum1]) {
      return neutral;
    } else {
      if ("!" === closure_0[sum1]) {
        const sum = sum1 + 1;
        if ("--" === closure_0.slice(sum, sum1 + 3)) {
          return comment;
        } else {
          sum1 = sum1 + 8;
          if ("[CDATA[" === closure_0.slice(sum, sum1)) {
            return cdata;
          } else {
            const obj4 = /doctype/i;
            if (obj4.test(closure_0.slice(sum, sum1))) {
              return neutral;
            }
          }
        }
      }
      if ("/" !== closure_0[sum1]) {
        let tmp5 = length;
        let str3 = "";
        if (sum1 < length) {
          let tmp4 = closure_0[sum1];
          tmp5 = tmp125;
          str3 = "";
          if (re20.test(tmp4)) {
            const text = `${tmp4}`;
            const sum2 = sum1 + 1;
            sum1 = sum2;
            tmp5 = length;
            str3 = text;
            while (sum2 < length) {
              let tmp13 = closure_0[sum1];
              tmp4 = tmp13;
              tmp5 = tmp9;
              str3 = text;
              if (!re20.test(tmp13)) {
                break;
              }
            }
          }
        }
        const obj = {};
        element = { tag: str3, props: obj, children: [], parent, Tag: tags.tags[str3] || missingTag };
        tags.tags[str3] || missingTag;
        const tmp18 = parent;
        if (tmp18) {
          children.push(element);
        }
        if (sum1 < tmp5) {
          while (re22.test(closure_0[sum1])) {
            let tmp27 = length;
            if (sum1 < length) {
              tmp27 = tmp26;
              if (re22.test(closure_0[sum1])) {
                let sum3 = sum1 + 1;
                sum1 = sum3;
                tmp27 = length;
                while (sum3 < length) {
                  tmp27 = tmp31;
                  if (!re22.test(closure_0[sum1])) {
                    break;
                  }
                }
              }
            }
            let tmp36 = tmp27;
            let str9 = "";
            if (sum1 < tmp27) {
              let tmp40 = closure_0[sum1];
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
                  let tmp48 = closure_0[sum1];
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
                if (re22.test(closure_0[sum1])) {
                  let sum5 = sum1 + 1;
                  sum1 = sum5;
                  tmp50 = length;
                  while (sum5 < length) {
                    tmp50 = tmp56;
                    if (!re22.test(closure_0[sum1])) {
                      break;
                    }
                  }
                }
              }
              let flag = true;
              if ("=" === closure_0[sum1]) {
                let str12;
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
                      if (!re22.test(closure_0[sum1])) {
                        break;
                      }
                    }
                  }
                }
                let str11 = "";
                if (re23.test(closure_0[sum1])) {
                  let tmp90;
                  let tmp82 = +sum1;
                  sum1 = tmp82 + 1;
                  let str13 = "";
                  let str14 = "";
                  if (sum1 >= tmp64) {
                    tmp90 = str14;
                  } else {
                    let tmp87 = +sum1;
                    sum1 = tmp87 + 1;
                    let tmp88 = closure_0[tmp87];
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
                  str12 = tmp90;
                } else {
                  let tmp76 = closure_0[sum1];
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
          element.styles = obj.style;
          const obj2 = {};
          const parts = str15.split(";");
          const found = parts.filter(f96885);
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
                  obj2[replaced] = str17.trim();
                }
              }
              num3 = num3 + 1;
            }
            throw new TypeError("Trying to call a non-function");
          }
          obj.style = obj2;
        }
        let flag3 = false;
        if ("/" === closure_0[sum1]) {
          sum1 = sum1 + 1;
          flag3 = true;
        }
        if (">" !== closure_0[sum1]) {
          error("Expected >");
        } else {
          if (!flag3) {
            parent = element;
            children = element.children;
            closure_5.push(element);
          }
          return neutral;
        }
      }
      return closingTag;
    }
  }
  function comment() {
    const index = closure_0.indexOf("-->", sum1);
    if (!~index) {
      error("expected -->");
    }
    sum1 = index + 2;
    return neutral;
  }
  function cdata() {
    const index = closure_0.indexOf("]]>", sum1);
    if (!~index) {
      error("expected ]]>");
    }
    children.push(closure_0.slice(sum1 + 7, index));
    sum1 = index + 2;
    return neutral;
  }
  function closingTag() {
    let tmp2 = length;
    let str = "";
    if (sum1 < length) {
      let tmp6 = closure_0[sum1];
      tmp2 = tmp;
      str = "";
      if (re20.test(tmp6)) {
        const text = `${tmp6}`;
        const sum = sum1 + 1;
        sum1 = sum;
        tmp2 = length;
        str = text;
        while (sum < length) {
          let tmp14 = closure_0[sum1];
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
    const tmp17 = parent && str !== parent.tag;
    if (!tmp17) {
      if (sum1 < tmp2) {
        if (re22.test(closure_0[sum1])) {
          sum1 = sum1 + 1;
          while (sum1 < length) {
            if (!re22.test(closure_0[sum1])) {
              break;
            }
          }
        }
      }
      if (">" !== closure_0[sum1]) {
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
  const length = arg0.length;
  let parent = null;
  function metadata() {
    let tmp2 = length;
    if (sum1 + 1 < length) {
      if ("<" !== closure_0[sum1]) {
        const sum = sum1 + 1;
        sum1 = sum;
        tmp2 = length;
        while (sum + 1 < length) {
          if ("<" !== closure_0[sum1]) {
            continue;
          } else {
            tmp2 = length;
            if (re20.test(closure_0[sum1 + 1])) {
              break;
            } else {
              tmp2 = length;
              if (re21.test(closure_0.slice(sum1, sum1 + 4))) {
                break;
              }
            }
          }
          break;
        }
      } else {
        tmp2 = length;
        if (!re20.test(closure_0[sum1 + 1])) {
          tmp2 = length;
        }
      }
    }
    let str = "";
    if (sum1 < tmp2) {
      str = "";
      if ("<" !== closure_0[sum1]) {
        const text = `${tmp17}`;
        sum1 = sum1 + 1;
        str = text;
        while (sum1 < length) {
          str = text;
          if ("<" === closure_0[sum1]) {
            break;
          }
        }
      }
    }
    const obj = /\S/;
    if (obj.test(str)) {
      children.push(str);
    }
    return "<" === closure_0[sum1] ? openingTag : neutral;
  }
  let children = null;
  let closure_5 = [];
  let sum1 = 0;
  let tmp = metadata;
  if (0 < length) {
    do {
      let tmp2 = metadata;
      if (!tmp2) {
        let str = "Unexpected character";
        let errorResult = error("Unexpected character");
      }
      metadata = metadata();
      let tmp4 = sum1;
      sum = sum1 + 1;
      sum1 = sum;
      tmp = metadata;
    } while (sum < length);
  }
  if (tmp !== neutral) {
    let str2 = "Unexpected end of input";
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
({ Component, useEffect: metroRequire, useMemo: metroImportDefault, useState: metroImportAll } = react);
const jsx = Fragment.jsx;
let closure_13 = error.bind(console);
class SvgFromXml {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, SvgFromXml);
    const items1 = [...items];
    const obj = _getPrototypeOf(SvgFromXml);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.state = { ast: null };
    return tmp3Result;
  }
}
_inherits(SvgFromXml, Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const parsed = this.parse(this.props.xml);
  },
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
    },
  },
  {
    key: "parse",
    value: function parse(arg0) {
      const self = this;
      let onError = this.props.onError;
      if (undefined === onError) {
        onError = closure_13;
      }
      try {
        let tmp2 = null;
        const setState = self.setState;
        if (arg0) {
          tmp2 = _parse(arg0);
        }
        const obj = { ast: tmp2 };
        setState(obj);
      } catch (tmp5) {
        const obj2 = { message: "[RNSVG] Couldn't parse SVG, reason: " + tmp5.message };
        const merged = Object.assign(tmp5);
        const _HermesInternal = HermesInternal;
        onError(obj2);
      }
    },
  },
  {
    key: "render",
    value: function render() {
      const props = this.props;
      const override = props.override || props;
      return <SvgAst ast={this.state.ast} override={override} />;
    },
  },
];
const importDefaultResult1Result = _createClass(SvgFromXml, items);
class SvgFromUri {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    _classCallCheck(this, SvgFromUri);
    const items1 = [...items];
    const obj = _getPrototypeOf(SvgFromUri);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = c3(self, constructResult);
    tmp3Result.state = { xml: null };
    return tmp3Result;
  }
}
_inherits(SvgFromUri, Component);
const entry1 = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const response = this.fetch(this.props.uri);
  },
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
    },
  },
  ,
];
const entry2 = {
  key: "fetch",
  value: function fetch(arg0) {
    return closure_1(...arguments);
  },
};
_asyncToGenerator(async function (arg0) {
  const self = this;
  closure_1 = arg0;
  let c8 = 0;
  let c9 = 0;
  let c6 = 0;
  return (async (arg0) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp4;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            return { value, done: true };
          } else {
            closure_5 = self;
            c6 = 1;
            setState = self.setState;
            closure_2 = {};
            tmp4 = null;
            if (closure_1) {
              const obj2 = self(closure_1[10]);
              text = obj2.fetchText(tmp24);
              c8 = 2;
              c9 = 1;
              return { value: text, done: false };
            } else {
              text = setState;
              closure_2.xml = tmp4;
              setState(closure_2);
              c6 = 0;
            }
          }
        } else if (1 === tmp3) {
          c6 = 0;
          let closure_0 = closure_7;
          const _console = console;
          console.error(closure_0);
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else {
          tmp4 = value;
          if (arg0 === 2) {
            c6 = 0;
            c9 = 3;
            return { value, done: true };
          }
        }
        c9 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        closure_7 = tmp16;
        if (0 === c6) {
          c9 = 3;
          throw tmp16;
        } else {
          c8 = 1;
        }
      }
    }
  })();
});
items1[2] = entry2;
items1[3] = {
  key: "render",
  value: function render() {
    const props = this.props;
    return <importDefaultResult1Result xml={this.state.xml} override={props} onError={props.onError} />;
  },
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
const SvgFromXml_export = importDefaultResult1Result;
const SvgFromUri_export = _createClass(SvgFromUri, items1);
const tags_export = tags.tags;

export { SvgAst };
export { SvgXml };
export const SvgUri = function SvgUri(onError) {
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let tmp9;
  onError = onError.onError;
  if (undefined === onError) {
    onError = closure_13;
  }
  const uri = onError.uri;
  const onLoad = onError.onLoad;
  let fallback = onError.fallback;
  [first, closure_3] = closure_8(null);
  [first1, _slicedToArray] = closure_8(false);
  const items = [onError, uri, onLoad];
  closure_6(() => {
    if (uri) {
      const obj = _mod8278;
      const text = obj.fetchText(tmp);
      const nextPromise = text.then((result) => {
        closure_1_3(result);
        if (first1) {
          closure_1_5(false);
        }
        if (onLoad != null) {
          onLoad();
        }
      });
      nextPromise.catch((error) => {
        onError(error);
        closure_1_5(true);
      });
    } else {
      closure_3(null);
    }
  }, items);
  if (first1) {
    if (fallback == null) {
      fallback = null;
    }
    tmp9 = fallback;
  } else {
    tmp9 = <SvgXml xml={first} override={onError} fallback={fallback} />;
  }
  return tmp9;
};
export { SvgFromXml_export as SvgFromXml };
export { SvgFromUri_export as SvgFromUri };
export { camelCase };
export const getStyle = function getStyle(str) {
  let str2;
  const obj = {};
  const parts = str.split(";");
  const found = parts.filter(f96885);
  let num = 0;
  const length = found.length;
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
export { tags_export as tags };
