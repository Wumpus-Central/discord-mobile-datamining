// discord_common/js/packages/i18n/parse.tsx
import _modDef4257 from "../../../../_runtime/metro/04257__.js";
import _modDef17232 from "../../../../_runtime/metro/17232__.js";
import markdownRules from "markdownRules.tsx";
import i18n_updateRules from "updateRules.web.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const Constants = fn(17275);
({ FORMAT_RE: metroRequire, MARKDOWN_RE: closure_7, UNSAFE_RE: closure_8, UNSAFE_RE_ALL: closure_9 } = Constants);
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
prototype["format"] = function format(arg0) {
  const self = this;
  if (this.hasMarkdown) {
    const tmp2 = _slicedToArray(self.getContext(arg0), 2);
    const first = tmp2[0];
    const intlMessage2 = self.intlMessage;
    const formatResult = intlMessage2.format(first);
    if (typeof f119278 === "function") {
      const hasItem = formatResult.includes("\n\n");
      let text = formatResult;
      if (hasItem) {
        text = `${obj}

  `;
      }
      obj = { inline: !hasItem, context: first, unsafeContext: tmp2[1] };
      return closure_131_1(closure_131_0(text, obj));
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const intlMessage = self.intlMessage;
    return intlMessage.format(arg0);
  }
};
prototype["astFormat"] = function astFormat(arg0) {
  const tmp = _slicedToArray(this.getContext(arg0), 2);
  if (typeof f119279 === "function") {
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
prototype["getContext"] = function getContext(arg0) {
  const obj = {};
  if (regex3.test(this.message)) {
    let num = 0;
    const _Object = Object;
    const entries = Object.entries(arg0);
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
        arg0[tmp10] = sum;
      }
      continue;
    }
  }
  const items = [arg0, obj];
  return items;
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export { FormattedMessage };
export const setUpdateRules = function setUpdateRules(fn) {
  const rules = markdownRules.rules;
  _modDef4257.parserFor(fn(rules));
  const obj2 = _modDef4257;
  closure_1 = obj2.reactFor(_modDef4257.ruleOutput(rules, "react"));
  f119278 = (arr, context, unsafeContext) => {
    const hasItem = arr.includes("\n\n");
    let text = arr;
    if (hasItem) {
      text = `${arr}

    `;
    }
    return closure_1(closure_0(text, { inline: !hasItem, context, unsafeContext }));
  };
  closure_0 = _modDef4257.parserFor(markdownRules.rules);
  f119279 = (arg0, context, unsafeContext) => closure_0(arg0 + "\n\n", { inline: false, context, unsafeContext });
};
export const getMessage = function getMessage(str, arg1) {
  if (null == str) {
    return "";
  } else {
    if (null == f119278) {
      const rules = markdownRules.rules;
      let obj = _modDef4257;
      obj.parserFor(i18n_updateRules.default(rules));
      const obj2 = _modDef4257;
      closure_1 = obj2.reactFor(_modDef4257.ruleOutput(rules, "react"));
      f119278 = (arr, context, unsafeContext) => {
        const hasItem = arr.includes("\n\n");
        let text = arr;
        if (hasItem) {
          text = `${arr}

        `;
        }
        return closure_1(closure_0(text, { inline: !hasItem, context, unsafeContext }));
      };
      closure_0 = _modDef4257.parserFor(markdownRules.rules);
      f119279 = (arg0, context, unsafeContext) => closure_0(arg0 + "\n\n", { inline: false, context, unsafeContext });
    }
    const str2 = "".replace(/^\n+|\n+$/g, "");
    const isMatch = regex.test(str2);
    const isMatch1 = regex2.test(str2);
    if (isMatch) {
      if (typeof FormattedMessage === "function") {
        let replaced = str2;
        if (!isMatch1) {
          replaced = str2.replace(React7, "");
        }
        obj = Object.create(FormattedMessage.prototype);
        obj.message = replaced;
        obj.hasMarkdown = isMatch1;
        const tmp15 = new _modDef17232(obj.message, arg1);
        obj.intlMessage = tmp15;
        let tmp5 = obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      tmp5 = str2;
    }
    return tmp5;
  }
};
