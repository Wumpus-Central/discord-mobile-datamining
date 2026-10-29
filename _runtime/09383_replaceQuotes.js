// === Module 9383: replaceQuotes ===

// Module 9383 (replaceQuotes)
import ElementType from "ElementType" /* 9380 */;
import elementNames2 from "elementNames" /* 9388 */;

let self = this;
function replaceQuotes(str) {
  return str.replace(/"/g, "&quot;");
}
function render(arg0, arg1) {
  let attribs;
  let tmp4;
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  let arr = arg0;
  if (!("length" in arg0)) {
    const items = [arg0];
    arr = items;
  }
  let num = 0;
  let str = "";
  let str2 = "";
  if (0 < arr.length) {
    while (true) {
      let element = arr[num];
      let type = element.type;
      if (Root.Root === type) {
        let combined = render(element.children, obj);
      } else {
        if (Root.Doctype !== type) {
          if (Root.Directive !== type) {
            if (Root.Comment === type) {
              let concat5 = "<!--".concat;
              combined = "<!--".concat(element.data, "-->");
            } else if (Root.CDATA === type) {
              let concat4 = "<![CDATA[".concat;
              combined = "<![CDATA[".concat(element.children[0].data, "]]>");
            } else {
              if (Root.Script !== type) {
                if (Root.Style !== type) {
                  if (Root.Tag !== type) {
                    if (Root.Text === type) {
                      tmp4 = element.data || "";
                      let decodeEntities = obj.encodeEntities;
                      if (null === decodeEntities) {
                        decodeEntities = obj.decodeEntities;
                      }
                      let tmp5 = false === decodeEntities;
                      if (!tmp5) {
                        let xmlMode = obj.xmlMode;
                        let parent = !xmlMode;
                        if (!xmlMode) {
                          parent = element.parent;
                        }
                        if (parent) {
                          parent = set.has(element.parent.name);
                        }
                        tmp5 = parent;
                      }
                      if (!tmp5) {
                        break;
                      } else {
                        combined = tmp4;
                      }
                    }
                  }
                }
              }
              let tmp15 = obj;
              if ("foreign" === obj.xmlMode) {
                let elementNames = attribs(9388).elementNames;
                let name = elementNames.get(element.name);
                if (null === name) {
                  name = element.name;
                }
                element.name = name;
                let parent2 = element.parent;
                if (parent2) {
                  parent2 = set2.has(element.parent.name);
                }
                let tmp17 = obj;
                if (parent2) {
                  tmp17 = encodeXML(encodeXML({}, obj), { xmlMode: false });
                }
                tmp15 = tmp17;
              }
              let xmlMode2 = tmp15.xmlMode;
              let hasItem = !xmlMode2;
              if (!xmlMode2) {
                hasItem = set3.has(element.name);
              }
              let tmp21 = tmp15;
              if (hasItem) {
                tmp21 = encodeXML(encodeXML({}, tmp15), { xmlMode: "foreign" });
              }
              let concat = "<".concat;
              let combined1 = "<".concat(element.name);
              attribs = element.attribs;
              dependencyMap = tmp21;
              encodeXML = undefined;
              if (!attribs) {
                let sum = combined1;
                if (undefined) {
                  let concat2 = " ".concat;
                  sum = combined1 + " ".concat(undefined);
                }
                if (0 === element.children.length) {
                  let selfClosingTags = tmp21.selfClosingTags;
                  if (tmp21.xmlMode) {
                    let hasItem1 = false !== selfClosingTags;
                  } else {
                    hasItem1 = selfClosingTags;
                    if (selfClosingTags) {
                      hasItem1 = set1.has(element.name);
                    }
                  }
                  if (hasItem1) {
                    let text = sum;
                    if (!tmp21.xmlMode) {
                      text = `${tmp29} `;
                    }
                    let text1 = `${tmp38}/>`;
                    combined = text1;
                  }
                }
                let text2 = `${tmp29}>`;
                let text3 = text2;
                if (element.children.length > 0) {
                  text3 = `${tmp29}>${render(element.children, tmp21)}`;
                }
                let xmlMode3 = tmp21.xmlMode;
                let hasItem2 = !xmlMode3;
                if (!xmlMode3) {
                  hasItem2 = set1.has(element.name);
                }
                text1 = text3;
                if (!hasItem2) {
                  let concat3 = "</".concat;
                  text1 = text3 + "</".concat(element.name, ">");
                }
              } else {
                let decodeEntities2 = tmp21.encodeEntities;
                if (null === decodeEntities2) {
                  decodeEntities2 = tmp21.decodeEntities;
                }
                if (false === decodeEntities2) {
                  encodeXML = replaceQuotes;
                } else {
                  if (!tmp21.xmlMode) {
                    if ("utf8" === tmp21.encodeEntities) {
                      encodeXML = attribs(9384).escapeAttribute;
                    }
                  }
                  encodeXML = attribs(9384).encodeXML;
                }
                let _Object = Object;
                let keys = Object.keys(attribs);
                let mapped = keys.map((item) => {
                  let str = "";
                  if (null !== attribs[item]) {
                    str = "";
                    if (undefined !== tmp) {
                      str = tmp;
                    }
                  }
                  let tmp3 = item;
                  if ("foreign" === xmlMode.xmlMode) {
                    const attributeNames = elementNames2.attributeNames;
                    value = attributeNames.get(item);
                    let tmp7 = item;
                    if (null !== value) {
                      tmp7 = item;
                      if (undefined !== value) {
                        tmp7 = value;
                      }
                    }
                    tmp3 = tmp7;
                  }
                  if (!xmlMode.emptyAttrs) {
                    if (!xmlMode.xmlMode) {
                      let combined1 = tmp3;
                    }
                    return combined1;
                  }
                  const combined = "".concat(tmp3, "=\"");
                  combined1 = combined.concat(encodeXML(str), "\"");
                });
                let joined = mapped.join(" ");
              }
            }
          }
        }
        let concat6 = "<".concat;
        combined = "<".concat(element.data, ">");
      }
      str = str + combined;
      num = num + 1;
      str2 = str;
    }
    if (!obj.xmlMode) {
      if ("utf8" === obj.encodeEntities) {
        let escapeTextResult = attribs(9384).escapeText(tmp4);
      }
    }
    escapeTextResult = attribs(9384).encodeXML(tmp4);
  }
  return str2;
}
let fn = this;
if (this) {
  fn = self.__assign;
}
if (!fn) {
  fn = function() {
    let tmp = Object.assign || ((arg0) => {
      for (let num = 1; num < length; num = num + 1) {
        let tmp = arguments[num];
        for (const key10012 in tmp) {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10012);
          } else {
            hasOwnPropertyResult = call(tmp, key10012);
          }
          if (!hasOwnPropertyResult) {
            continue;
          } else {
            arg0[key10012] = tmp[key10012];
            continue;
          }
          continue;
        }
      }
      return arg0;
    });
    const self = this;
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
}
let closure_2 = fn;
let __createBinding = self;
if (self) {
  __createBinding = self.__createBinding;
}
if (__createBinding) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn2 = self;
    if (self) {
      fn2 = self.__importStar;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = __createBinding(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    const _Object3 = Object;
    exports.render = undefined;
    const Root = fn2(ElementType);
    const _Set = Set;
    const _Set2 = Set;
    const set = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
    exports.render = render;
    exports.default = render;
    const _Set3 = Set;
    const set1 = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
    const _Set4 = Set;
    const set2 = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
    const set3 = new Set(["svg", "math"]);
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}