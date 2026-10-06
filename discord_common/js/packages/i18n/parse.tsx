// === Module 1934: parse ===

// Module 1934 (parse)
import _modDef1892 from "module_1892" /* 1892 */;
import _modDef1936 from "module_1936" /* 1936 */;
import markdownRules from "markdownRules" /* 1937 */;
import updateRules from "updateRules" /* 1938 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 1935 */;
import size from "module_2" /* 2 */;

let f135721, f135722;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ FORMAT_RE: metroRequire, MARKDOWN_RE: metroImportDefault, UNSAFE_RE: metroImportAll, UNSAFE_RE_ALL: c9 } = Constants);
class FormattedMessage {
  constructor(str, arg1, hasMarkdown) {
    let replaced = str;
    const prototype = new.target.prototype;
    if (!hasMarkdown) {
      replaced = str.replace(React4, "");
    }
    const obj = Object.create(prototype);
    obj.message = replaced;
    obj.hasMarkdown = hasMarkdown;
    obj.intlMessage = new _modDef1892(obj.message, arg1);
    new _modDef1892(obj.message, arg1);
    return obj;
  }
  format(arg0) {
    let first;
    let tmp4;
    const self = this;
    if (this.hasMarkdown) {
      [first, tmp4] = self.getContext(arg0);
      const intlMessage2 = self.intlMessage;
      const formatResult = intlMessage2.format(first);
      if (typeof f135721 === "function") {
        const hasItem = formatResult.includes("\n\n");
        let text = formatResult;
        const tmp7 = !hasItem;
        if (hasItem) {
          text = `${obj}

    `;
        }
        const obj2 = { inline: tmp7, context: first, unsafeContext: tmp4 };
        return closure_131_1(closure_131_0(text, obj2));
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const intlMessage = self.intlMessage;
      return intlMessage.format(arg0);
    }
  }
  astFormat(arg0) {
    let first;
    let tmp3;
    [first, tmp3] = this.getContext(arg0);
    if (typeof f135722 === "function") {
      const obj = { inline: false, context: first, unsafeContext: tmp3 };
      return closure_132_0(tmp4 + "\n\n", obj);
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  plainFormat(arg0) {
    const intlMessage = this.intlMessage;
    return intlMessage.format(arg0);
  }
  getContext(arg0) {
    let tmp10;
    let tmp12;
    const obj = {};
    if (metroImportAll.test(this.message)) {
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
  }
}
let prototype = FormattedMessage.prototype;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/parse.tsx");

export { FormattedMessage };
export const setUpdateRules = function setUpdateRules(fn) {
  const rules = markdownRules.rules;
  const obj = _modDef1936;
  obj.parserFor(fn(rules));
  const reactFor = _modDef1936.reactFor;
  _modDef1936;
  const obj2 = _modDef1936;
  let closure_1 = reactFor(obj2.ruleOutput(rules, "react"));
  f135721 = (arr, context, unsafeContext) => {
    const hasItem = arr.includes("\n\n");
    let text = arr;
    const tmp2 = !hasItem;
    if (hasItem) {
      text = `${arr}

    `;
    }
    const obj = { inline: tmp2, context, unsafeContext };
    return closure_1(closure_0(text, obj));
  };
  const rules2 = markdownRules.rules;
  const obj3 = _modDef1936;
  let closure_0 = obj3.parserFor(rules2);
  f135722 = (arg0, context, unsafeContext) => {
    const obj = { inline: false, context, unsafeContext };
    return closure_0(arg0 + "\n\n", obj);
  };
};
export const getMessage = function getMessage(str, arg1) {
  if (null == str) {
    return "";
  } else {
    let tmp5;
    if (null == f135721) {
      const _default = updateRules.default;
      const rules = markdownRules.rules;
      let obj = _modDef1936;
      obj.parserFor(_default(rules));
      const reactFor = _modDef1936.reactFor;
      _modDef1936;
      const obj2 = _modDef1936;
      let closure_1 = reactFor(obj2.ruleOutput(rules, "react"));
      f135721 = (arr, context, unsafeContext) => {
        const hasItem = arr.includes("\n\n");
        let text = arr;
        const tmp2 = !hasItem;
        if (hasItem) {
          text = `${arr}

        `;
        }
        const obj = { inline: tmp2, context, unsafeContext };
        return closure_1(closure_0(text, obj));
      };
      const rules2 = markdownRules.rules;
      const obj3 = _modDef1936;
      let closure_0 = obj3.parserFor(rules2);
      f135722 = (arg0, context, unsafeContext) => {
        const obj = { inline: false, context, unsafeContext };
        return closure_0(arg0 + "\n\n", obj);
      };
    }
    const str2 = "".replace(/^\n+|\n+$/g, "");
    const isMatch = metroRequire.test(str2);
    const isMatch1 = metroImportDefault.test(str2);
    if (isMatch) {
      const self = this;
      if (typeof FormattedMessage === "function") {
        let replaced = str2;
        const prototype = FormattedMessage.prototype;
        if (!isMatch1) {
          replaced = str2.replace(React4, "");
        }
        const obj4 = Object.create(prototype);
        obj4.message = replaced;
        obj4.hasMarkdown = isMatch1;
        const self2 = this;
        const self3 = this;
        obj4.intlMessage = new _modDef1892(obj4.message, arg1);
        tmp5 = obj4;
        const tmp12 = new _modDef1892(obj4.message, arg1);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      tmp5 = str2;
    }
    return tmp5;
  }
};