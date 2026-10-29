// === Module 12779: attributeRules ===

// Module 12779 (attributeRules)
import _mod12770 from "module_12770" /* 12770 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const module_12770 = fn(_mod12770);
const re1 = /[-[\]{}()*+?.,\\^$|#\s]/g;
const set = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);

export const attributeRules = {
  equals(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    if (typeof ignoreCase.ignoreCase === "boolean") {
      ignoreCase = ignoreCase.ignoreCase;
    } else if ("quirks" === ignoreCase.ignoreCase) {
      ignoreCase = adapter.quirksMode;
    } else {
      const xmlMode = adapter.xmlMode;
      ignoreCase = !xmlMode;
      if (!xmlMode) {
        ignoreCase = set.has(ignoreCase.name);
      }
    }
    if (ignoreCase) {
      value.toLowerCase();
      let fn = (arg0) => {
        const attributeValue = adapter.getAttributeValue(arg0, set);
        let tmp = null != attributeValue;
        if (tmp) {
          tmp = attributeValue.length === length.length;
        }
        if (tmp) {
          tmp = attributeValue.toLowerCase() === length;
        }
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    } else {
      fn = (arg0) => {
        let tmp = adapter.getAttributeValue(arg0, set) === closure_3;
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    }
    return fn;
  },
  hyphen(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    closure_3 = value;
    if (typeof ignoreCase.ignoreCase === "boolean") {
      ignoreCase = ignoreCase.ignoreCase;
    } else if ("quirks" === ignoreCase.ignoreCase) {
      ignoreCase = adapter.quirksMode;
    } else {
      const xmlMode = adapter.xmlMode;
      ignoreCase = !xmlMode;
      if (!xmlMode) {
        ignoreCase = set.has(ignoreCase.name);
      }
    }
    if (ignoreCase) {
      closure_3 = value.toLowerCase();
      let hyphen = function hyphenIC(arg0) {
        const attributeValue = adapter.getAttributeValue(arg0, set);
        let tmp = null != attributeValue;
        if (tmp) {
          let tmp3 = attributeValue.length === length;
          if (!tmp3) {
            tmp3 = "-" === attributeValue.charAt(tmp2);
          }
          tmp = tmp3;
        }
        if (tmp) {
          tmp = attributeValue.substr(0, length).toLowerCase() === closure_3;
          const str2 = attributeValue.substr(0, length);
        }
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    } else {
      hyphen = function hyphen(arg0) {
        const attributeValue = adapter.getAttributeValue(arg0, set);
        let tmp = null != attributeValue;
        if (tmp) {
          let tmp3 = attributeValue.length === length;
          if (!tmp3) {
            tmp3 = "-" === attributeValue.charAt(tmp2);
          }
          tmp = tmp3;
        }
        if (tmp) {
          tmp = attributeValue.substr(0, length) === closure_3;
        }
        if (tmp) {
          tmp = closure_0(arg0);
        }
        return tmp;
      };
    }
    return hyphen;
  },
  element(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    closure_3 = value;
    if (obj.test(value)) {
      return module_12770.default.falseFunc;
    } else {
      const concat = "(?:^|\\s)".concat;
      const combined = "(?:^|\\s)".concat(value.replace(re1, "\\$&"), "(?:$|\\s)");
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        const xmlMode = adapter.xmlMode;
        ignoreCase = !xmlMode;
        if (!xmlMode) {
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      let str4 = "";
      if (ignoreCase) {
        str4 = "i";
      }
      const regExp = new RegExp(combined, str4);
      return function element(arg0) {
        const attributeValue = adapter.getAttributeValue(arg0, set);
        let isMatch = null != attributeValue;
        if (isMatch) {
          isMatch = attributeValue.length >= value.length;
        }
        if (isMatch) {
          isMatch = regExp.test(attributeValue);
        }
        if (isMatch) {
          isMatch = closure_0(arg0);
        }
        return isMatch;
      };
    }
    obj = /\s/;
  },
  exists(arg0, name, adapter) {
    closure_0 = arg0;
    name = name.name;
    adapter = adapter.adapter;
    return (arg0) => {
      let hasAttribResult = adapter.hasAttrib(arg0, name);
      if (hasAttribResult) {
        hasAttribResult = closure_0(arg0);
      }
      return hasAttribResult;
    };
  },
  start(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    closure_3 = value;
    if (0 === length) {
      let fn = module_12770.default.falseFunc;
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        const xmlMode = adapter.xmlMode;
        ignoreCase = !xmlMode;
        if (!xmlMode) {
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      if (ignoreCase) {
        closure_3 = value.toLowerCase();
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, set);
          let tmp = null != attributeValue;
          if (tmp) {
            tmp = attributeValue.length >= length;
          }
          if (tmp) {
            tmp = attributeValue.substr(0, length).toLowerCase() === closure_3;
            const str = attributeValue.substr(0, length);
          }
          if (tmp) {
            tmp = closure_0(arg0);
          }
          return tmp;
        };
      } else {
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, set);
          let startsWithResult;
          if (null !== attributeValue) {
            if (undefined !== attributeValue) {
              startsWithResult = attributeValue.startsWith(closure_3);
            }
          }
          let tmp3 = startsWithResult;
          if (tmp3) {
            tmp3 = closure_0(arg0);
          }
          return tmp3;
        };
      }
    }
    return fn;
  },
  end(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    closure_3 = value;
    closure_4 = tmp;
    if (0 === -value.length) {
      let fn = module_12770.default.falseFunc;
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        const xmlMode = adapter.xmlMode;
        ignoreCase = !xmlMode;
        if (!xmlMode) {
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      if (ignoreCase) {
        closure_3 = value.toLowerCase();
        fn = (arg0) => {
          const str = adapter.getAttributeValue(arg0, set);
          let formatted;
          if (null !== str) {
            if (undefined !== str) {
              formatted = str.substr(closure_4).toLowerCase();
              const str2 = str.substr(closure_4);
            }
          }
          let tmp3 = formatted === closure_3;
          if (tmp3) {
            tmp3 = closure_0(arg0);
          }
          return tmp3;
        };
      } else {
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, set);
          let endsWithResult;
          if (null !== attributeValue) {
            if (undefined !== attributeValue) {
              endsWithResult = attributeValue.endsWith(closure_3);
            }
          }
          let tmp3 = endsWithResult;
          if (tmp3) {
            tmp3 = closure_0(arg0);
          }
          return tmp3;
        };
      }
    }
    return fn;
  },
  any(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    closure_3 = value;
    if ("" === value) {
      return module_12770.default.falseFunc;
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        const xmlMode = adapter.xmlMode;
        ignoreCase = !xmlMode;
        if (!xmlMode) {
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      if (ignoreCase) {
        const _RegExp = RegExp;
        const regExp = new RegExp(value.replace(re1, "\\$&"), "i");
        return function anyIC(arg0) {
          const attributeValue = adapter.getAttributeValue(arg0, set);
          let isMatch = null != attributeValue;
          if (isMatch) {
            isMatch = attributeValue.length >= value.length;
          }
          if (isMatch) {
            isMatch = regExp.test(attributeValue);
          }
          if (isMatch) {
            isMatch = closure_0(arg0);
          }
          return isMatch;
        };
      } else {
        return (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, set);
          let hasItem;
          if (null !== attributeValue) {
            if (undefined !== attributeValue) {
              hasItem = attributeValue.includes(value);
            }
          }
          let tmp3 = hasItem;
          if (tmp3) {
            tmp3 = closure_0(arg0);
          }
          return tmp3;
        };
      }
    }
  },
  not(arg0, ignoreCase, adapter) {
    closure_0 = arg0;
    adapter = adapter.adapter;
    ({ name: set, value } = ignoreCase);
    if ("" === value) {
      let fn = (arg0) => {
        let attributeValue = adapter.getAttributeValue(arg0, set);
        if (attributeValue) {
          attributeValue = closure_0(arg0);
        }
        return attributeValue;
      };
    } else {
      if (typeof ignoreCase.ignoreCase === "boolean") {
        ignoreCase = ignoreCase.ignoreCase;
      } else if ("quirks" === ignoreCase.ignoreCase) {
        ignoreCase = adapter.quirksMode;
      } else {
        const xmlMode = adapter.xmlMode;
        ignoreCase = !xmlMode;
        if (!xmlMode) {
          ignoreCase = set.has(ignoreCase.name);
        }
      }
      if (ignoreCase) {
        value.toLowerCase();
        fn = (arg0) => {
          const attributeValue = adapter.getAttributeValue(arg0, set);
          let tmp = null == attributeValue;
          if (!tmp) {
            tmp = attributeValue.length !== length.length;
          }
          if (!tmp) {
            tmp = attributeValue.toLowerCase() !== length;
          }
          if (tmp) {
            tmp = closure_0(arg0);
          }
          return tmp;
        };
      } else {
        fn = (arg0) => {
          let tmp = adapter.getAttributeValue(arg0, set) !== closure_3;
          if (tmp) {
            tmp = closure_0(arg0);
          }
          return tmp;
        };
      }
    }
    return fn;
  }
};