// discord_common/js/packages/i18n/parse.tsx
import tDefault from "../../../../_runtime/04192_t.js";
import _modDef17066 from "../../../../_runtime/metro/17066__.js";
import closure_5 from "../../../../_runtime/metro/00032__slicedToArray.js";
import FORMAT_RE from "Constants.tsx";

const require = arg1;
({ FORMAT_RE: closure_6, MARKDOWN_RE: error, UNSAFE_RE: closure_8, UNSAFE_RE_ALL: c9 } = FORMAT_RE);
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
    tmp4 = new require("../../../../_runtime/metro/17066__.js")(obj.message, arg1);
    obj.intlMessage = tmp4;
    return obj;
  }
}
const prototype = FormattedMessage.prototype;
prototype["format"] = function format(arg0) {
  const self = this;
  if (this.hasMarkdown) {
    const tmp2 = callback(self.getContext(arg0), 2);
    const first = tmp2[0];
    const intlMessage2 = self.intlMessage;
    const formatResult = intlMessage2.format(first);
    if (typeof closure_3 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const hasItem = formatResult.includes("\n\n");
    let text = formatResult;
    if (hasItem) {
      text = `${obj}

  `;
    }
    obj = { inline: null, context: null, unsafeContext: null };
    obj[0] = !hasItem;
    obj[1] = first;
    obj[2] = tmp2[1];
    return importDefault(require(text, obj));
  } else {
    const intlMessage = self.intlMessage;
    return intlMessage.format(arg0);
  }
};
prototype["astFormat"] = function astFormat(arg0) {
  const unsafeContext = callback(this.getContext(arg0), 2);
  const context = unsafeContext[0];
  const intlMessage = this.intlMessage;
  if (typeof closure_4 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  return require(intlMessage.format(context) + "\n\n", { inline: false, context, unsafeContext: unsafeContext[1] });
};
prototype["plainFormat"] = function plainFormat(arg0) {
  const intlMessage = this.intlMessage;
  return intlMessage.format(arg0);
};
prototype["getContext"] = function getContext(arg0) {
  const obj = {};
  if (regex3.test(this.message)) {
    let num = 0;
    const _Object = Object;
    const entries = Object.entries(arg0);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp8 = callback;
      let tmp9 = callback(tmp6, 2);
      [tmp10, tmp12] = tmp9;
      let message = this.message;
      let _HermesInternal = HermesInternal;
      let tmp11 = tmp10;
      if (message.includes("!!{" + tmp10 + "}!!")) {
        let tmp13 = num;
        let sum = num + 1;
        num = sum;
        let tmp15 = tmp12;
        obj[sum] = tmp12;
        let tmp16 = tmp10;
        arg0[tmp11] = sum;
      }
      continue;
    }
  }
  const items = [arg0, obj];
  return items;
};
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export { FormattedMessage };
export const setUpdateRules = function setUpdateRules(arg0) {
  const rules = require("markdownRules.tsx").rules;
  _require = undefined;
  importDefault = undefined;
  _require = tDefault.parserFor(arg0(rules));
  const obj = tDefault;
  const obj2 = tDefault;
  importDefault = obj2.reactFor(tDefault.ruleOutput(rules, "react"));
  const f118649 = (arr, context, unsafeContext) => {
    const hasItem = arr.includes("\n\n");
    let text = arr;
    if (hasItem) {
      text = `${arr}

    `;
    }
    return callback2(callback(text, { inline: !hasItem, context, unsafeContext }));
  };
  _require = undefined;
  const obj3 = tDefault;
  _require = tDefault.parserFor(require("markdownRules.tsx").rules);
  const f118650 = (arg0, context, unsafeContext) => callback(arg0 + "\n\n", { inline: false, context, unsafeContext });
};
export const getMessage = function getMessage(str) {
  if (null == str) {
    return "";
  } else {
    if (null == f118649) {
      const rules = require("markdownRules.tsx").rules;
      _require = undefined;
      importDefault = undefined;
      let obj = tDefault;
      _require = obj.parserFor(require("updateRules.web.tsx").default(rules));
      const obj2 = tDefault;
      importDefault = obj2.reactFor(tDefault.ruleOutput(rules, "react"));
      f118649 = (arr, context, unsafeContext) => {
        const hasItem = arr.includes("\n\n");
        let text = arr;
        if (hasItem) {
          text = `${arr}

        `;
        }
        return callback2(callback(text, { inline: !hasItem, context, unsafeContext }));
      };
      _require = undefined;
      const obj3 = tDefault;
      _require = tDefault.parserFor(require("markdownRules.tsx").rules);
      const f118650 = (arg0, context, unsafeContext) =>
        callback(arg0 + "\n\n", { inline: false, context, unsafeContext });
      const obj4 = tDefault;
    }
    const str2 = str.replace(/^\n+|\n+$/g, "");
    const isMatch = regex.test(str2);
    const isMatch1 = regex2.test(str2);
    if (isMatch) {
      if (typeof FormattedMessage !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let replaced = str2;
      if (!isMatch1) {
        replaced = str2.replace(closure_9, "");
      }
      obj = Object.create(FormattedMessage.prototype);
      obj.message = replaced;
      obj.hasMarkdown = isMatch1;
      const tmp16 = new _modDef17066(obj.message, arg1);
      obj.intlMessage = tmp16;
      let tmp5 = obj;
      const tmp6 = FormattedMessage;
    } else {
      tmp5 = str2;
    }
    return tmp5;
  }
};
