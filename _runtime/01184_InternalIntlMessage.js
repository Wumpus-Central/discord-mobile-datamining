// _runtime/01184_InternalIntlMessage.js
import FormatJsNodeType from "01170_FormatJsNodeType.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

function serializeAst(ast, value) {
  const iter = ast[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult !== "string") {
      let first = tmp2[0];
      if (FormatJsNodeType.FormatJsNodeType.Argument === first) {
        value.value = `${value.value}{${tmp2[1]}}`;
      } else if (FormatJsNodeType.FormatJsNodeType.Date === first) {
        value.value = `${value.value}{${tmp2[1]}, date`;
        if (null != tmp2[2]) {
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (FormatJsNodeType.FormatJsNodeType.Time === first) {
        value.value = `${value.value}{${tmp2[1]}, time`;
        if (null != tmp2[2]) {
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (FormatJsNodeType.FormatJsNodeType.Number === first) {
        value.value = `${value.value}{${tmp2[1]}, number`;
        if (null != tmp2[2]) {
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (FormatJsNodeType.FormatJsNodeType.Plural === first) {
        let str = "plural";
        if ("ordinal" == tmp2[4]) {
          str = "selectordinal";
        }
        let _HermesInternal = HermesInternal;
        value.value = value.value + `{${tmp2[1]}` + ", " + str + ",";
        if (tmp2[3]) {
          value.value = `${value.value} offset:${tmp2[3]}`;
        }
        let _Object2 = Object;
        let entries = Object.entries(tmp2[2]);
        for (const item10098 of entries) {
          let tmp23 = _slicedToArray(item10098, 2);
          value.value = value.value + (" " + tmp23[0] + " {");
          let tmp25 = serializeAst(tmp23[1], value);
          value.value = value.value + "}";
          continue;
        }
        value.value = `${value.value}}`;
      } else if (FormatJsNodeType.FormatJsNodeType.Pound === first) {
        value.value = `${value.value}#`;
      } else if (FormatJsNodeType.FormatJsNodeType.Select === first) {
        value.value = `${value.value}{${tmp2[1]}, select,`;
        let _Object = Object;
        let entries1 = Object.entries(tmp2[2]);
        for (const item10053 of entries1) {
          let tmp12 = _slicedToArray(item10053, 2);
          value.value = value.value + (" " + tmp12[0] + " {");
          let tmp14 = serializeAst(tmp12[1], value);
          value.value = value.value + "}";
          continue;
        }
        value.value = `${value.value}}`;
      } else if (FormatJsNodeType.FormatJsNodeType.Tag === first) {
        let tmp36 = serializeAstTag(tmp2, value);
      }
    } else {
      value.value = value.value + tmp2;
    }
    continue;
  }
}
function serializeAstTag(ast, value) {
  if ("$b" === ast[1]) {
    value.value = `${value.value}**`;
    serializeAst(ast[2], value);
    value.value = `${value.value}**`;
  } else if ("$i" === ast[1]) {
    value.value = `${value.value}*`;
    serializeAst(ast[2], value);
    value.value = `${value.value}*`;
  } else if ("$code" === ast[1]) {
    value.value = `${value.value}\``;
    serializeAst(ast[2], value);
    value.value = `${value.value}\``;
  } else if ("$p" === ast[1]) {
    serializeAst(ast[2], value);
    value.value = `${value.value}

  `;
  } else if ("$link" === ast[1]) {
    value.value = `${value.value}[`;
    serializeAst(ast[2], value);
    value.value = `${value.value}](`;
    if (null != ast[3]) {
      serializeAst(ast[3], value);
    }
    value.value = `${value.value})`;
  } else {
    value.value = `${value.value}$[`;
    serializeAst(ast[2], value);
    value.value = `${value.value}](${ast[1]})`;
  }
}
class InternalIntlMessage {
  constructor(value, defaultLocale) {
    _classCallCheck(this, InternalIntlMessage);
    this.locale = defaultLocale;
    let result = value;
    if (!FormatJsNodeType.isCompressedAst(value)) {
      result = FormatJsNodeType.compressFormatJsToAst(value);
    }
    this.ast = result;
  }
}
const entry = {
  key: "reserialize",
  value: function reserialize() {
    const self = this;
    if (typeof this.ast === "string") {
      return self.ast;
    } else {
      const obj = { value: "" };
      serializeAst(self.ast, obj);
      return obj.value;
    }
  },
};
const items = [entry];
const InternalIntlMessage_export = _createClass(InternalIntlMessage, items);

export { InternalIntlMessage_export as InternalIntlMessage };
