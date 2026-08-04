import _slicedToArray from "_slicedToArray";
import FORMAT_RE from "FORMAT_RE";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ FORMAT_RE: closure_6, MARKDOWN_RE: error, UNSAFE_RE: metroImportAll, UNSAFE_RE_ALL: c9 } = FORMAT_RE);
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
    tmp4 = new require("module_16170")(obj.message, arg1);
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
  let tmp10;
  let tmp12;
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
const result = require("module_16170").fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export { FormattedMessage };
export const setUpdateRules = function setUpdateRules(arg0) {
  const rules = _require(16214).rules;
  _require = undefined;
  let importDefault;
  _require = importDefault(3984).parserFor(arg0(rules));
  const obj = importDefault(3984);
  const obj2 = importDefault(3984);
  importDefault = obj2.reactFor(importDefault(3984).ruleOutput(rules, "react"));
  const f113053 = (arr, context, unsafeContext) => {
    const hasItem = arr.includes("\n\n");
    let text = arr;
    if (hasItem) {
      text = `${arr}

    `;
    }
    return callback2(callback(text, { inline: !hasItem, context, unsafeContext }));
  };
  _require = undefined;
  const obj3 = importDefault(3984);
  _require = importDefault(3984).parserFor(_require(16214).rules);
  const f113054 = (arg0, context, unsafeContext) => callback(arg0 + "\n\n", { inline: false, context, unsafeContext });
};
export const getMessage = function getMessage(str) {
  if (null == str) {
    return "";
  } else {
    if (null == f113053) {
      const rules = _require(16214).rules;
      _require = undefined;
      let importDefault;
      let obj = importDefault(3984);
      _require = obj.parserFor(_require(16215).default(rules));
      const obj2 = importDefault(3984);
      importDefault = obj2.reactFor(importDefault(3984).ruleOutput(rules, "react"));
      f113053 = (arr, context, unsafeContext) => {
        const hasItem = arr.includes("\n\n");
        let text = arr;
        if (hasItem) {
          text = `${arr}

        `;
        }
        return callback2(callback(text, { inline: !hasItem, context, unsafeContext }));
      };
      _require = undefined;
      const obj3 = importDefault(3984);
      _require = importDefault(3984).parserFor(_require(16214).rules);
      const f113054 = (arg0, context, unsafeContext) => callback(arg0 + "\n\n", { inline: false, context, unsafeContext });
      const obj4 = importDefault(3984);
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
      const tmp16 = new importDefault(16170)(obj.message, arg1);
      obj.intlMessage = tmp16;
      let tmp5 = obj;
      const tmp6 = FormattedMessage;
    } else {
      tmp5 = str2;
    }
    return tmp5;
  }
};