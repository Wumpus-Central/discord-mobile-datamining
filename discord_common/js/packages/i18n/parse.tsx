// === Module 2067: parse ===

// Module 2067 (parse)
import _modDef2030 from "module_2030" /* 2030 */;
import _modDef2069 from "module_2069" /* 2069 */;
import markdownRules from "markdownRules" /* 2070 */;
import i18n_updateRules from "i18n/updateRules" /* 2071 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const Constants = fn(2068);
({ FORMAT_RE: closure_6, MARKDOWN_RE: metroImportDefault, UNSAFE_RE: closure_8, UNSAFE_RE_ALL: closure_9 } = Constants);
class FormattedMessage {
  constructor(arg0, arg1, arg2) {
    replaced = global;
    if (!importDefault) {
      tmp2 = UNSAFE_RE_ALL;
      str = "";
      replaced = global.replace(UNSAFE_RE_ALL, "");
    }
    obj = Object.create(new.target.prototype);
    obj.message = replaced;
    obj.hasMarkdown = importDefault;
    tmp4 = new closure_1(closure_2[2])(obj.message, fn);
    obj.intlMessage = tmp4;
    return obj;
  }
}
const prototype = FormattedMessage.prototype;
prototype["format"] = function format(_2d) {
  const self = this;
  if (this.hasMarkdown) {
    const tmp2 = _slicedToArray(self.getContext(_2d), 2);
    const first = tmp2[0];
    const intlMessage2 = self.intlMessage;
    const formatResult = intlMessage2.format(first);
    if (typeof f123278 === "function") {
      const hasItem = formatResult.includes("\n\n");
      let text = formatResult;
      if (hasItem) {
        text = `${obj}

  `;
      }
      const obj2 = { inline: !hasItem, context: first, unsafeContext: tmp2[1] };
      return closure_131_1(closure_131_0(text, obj2));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const intlMessage = self.intlMessage;
    return intlMessage.format(_2d);
  }
};
prototype["astFormat"] = function astFormat(_2d) {
  const tmp = _slicedToArray(this.getContext(_2d), 2);
  if (typeof f123279 === "function") {
    const obj = { inline: false, context: tmp[0], unsafeContext: tmp[1] };
    return closure_132_0(tmp2 + "\n\n", obj);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["plainFormat"] = function plainFormat(arg0) {
  const intlMessage = this.intlMessage;
  return intlMessage.format(arg0);
};
prototype["getContext"] = function getContext(_2d) {
  const obj = {};
  if (regex3.test(this.message)) {
    let num = 0;
    const _Object = Object;
    const entries = Object.entries(_2d);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      [tmp10, tmp12] = tmp9;
      let message = this.message;
      let _HermesInternal = HermesInternal;
      if (message.includes("!!{" + tmp10 + "}!!")) {
        let sum = num + 1;
        num = sum;
        obj[sum] = tmp12;
        _2d[tmp10] = sum;
      }
      continue;
    }
  }
  items = [_2d, obj];
  return items;
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export { FormattedMessage };
export function setUpdateRules(fn) {
  const rules = markdownRules.rules;
  _modDef2069.parserFor(fn(rules));
  const obj2 = _modDef2069;
  closure_1 = obj2.reactFor(_modDef2069.ruleOutput(rules, "react"));
  f123278 = (arr, context, unsafeContext) => {
    const hasItem = arr.includes("\n\n");
    let text = arr;
    if (hasItem) {
      text = `${arr}

    `;
    }
    return closure_1(closure_0(text, { inline: !hasItem, context, unsafeContext }));
  };
  closure_0 = _modDef2069.parserFor(markdownRules.rules);
  f123279 = (arg0, context, unsafeContext) => closure_0(arg0 + "\n\n", { inline: false, context, unsafeContext });
}
export function getMessage(str, arg1) {
  if (null == str) {
    return "";
  } else {
    if (null == f123278) {
      const rules = markdownRules.rules;
      _modDef2069.parserFor(i18n_updateRules.default(rules));
      const obj2 = _modDef2069;
      closure_1 = obj2.reactFor(_modDef2069.ruleOutput(rules, "react"));
      f123278 = (arr, context, unsafeContext) => {
        const hasItem = arr.includes("\n\n");
        let text = arr;
        if (hasItem) {
          text = `${arr}

        `;
        }
        return closure_1(closure_0(text, { inline: !hasItem, context, unsafeContext }));
      };
      closure_0 = _modDef2069.parserFor(markdownRules.rules);
      f123279 = (arg0, context, unsafeContext) => closure_0(arg0 + "\n\n", { inline: false, context, unsafeContext });
    }
    const str2 = "".replace(/^\n+|\n+$/g, "");
    const isMatch = regex.test(str2);
    const isMatch1 = regex2.test(str2);
    if (isMatch) {
      if (typeof FormattedMessage === "function") {
        let replaced = str2;
        if (!isMatch1) {
          replaced = str2.replace(React6, "");
        }
        const obj5 = Object.create(FormattedMessage.prototype);
        obj5.message = replaced;
        obj5.hasMarkdown = isMatch1;
        const tmp15 = new _modDef2030(obj5.message, arg1);
        obj5.intlMessage = tmp15;
        let tmp5 = obj5;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      tmp5 = str2;
    }
    return tmp5;
  }
}