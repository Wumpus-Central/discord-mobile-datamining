// === Module 1293: serializeAst ===

// Module 1293 (serializeAst)
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const InternalIntlMessage = require;
function serializeAst(ast, value) {
  const iter = ast[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult !== "string") {
      let first = tmp2[0];
      if (InternalIntlMessage(1279).FormatJsNodeType.Argument === first) {
        value.value = `${value.value}{${tmp2[1]}}`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Date === first) {
        value.value = `${value.value}{${tmp2[1]}, date`;
        if (null != tmp2[2]) {
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Time === first) {
        value.value = `${value.value}{${tmp2[1]}, time`;
        if (null != tmp2[2]) {
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Number === first) {
        value.value = `${value.value}{${tmp2[1]}, number`;
        if (null != tmp2[2]) {
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Plural === first) {
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
          arg1.value = arg1.value + (" " + tmp23[0] + " {");
          let tmp25 = serializeAst(tmp23[1], arg1);
          arg1.value = arg1.value + "}";
          continue;
        }
        value.value = `${value.value}}`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Pound === first) {
        value.value = `${value.value}#`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Select === first) {
        value.value = `${value.value}{${tmp2[1]}, select,`;
        let _Object = Object;
        let entries1 = Object.entries(tmp2[2]);
        for (const item10053 of entries1) {
          let tmp12 = _slicedToArray(item10053, 2);
          arg1.value = arg1.value + (" " + tmp12[0] + " {");
          let tmp14 = serializeAst(tmp12[1], arg1);
          arg1.value = arg1.value + "}";
          continue;
        }
        value.value = `${value.value}}`;
      } else if (InternalIntlMessage(1279).FormatJsNodeType.Tag === first) {
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
  } else if ("$i" === tmp) {
    value.value = `${value.value}*`;
    serializeAst(ast[2], value);
    value.value = `${value.value}*`;
  } else if ("$code" === tmp) {
    value.value = `${value.value}\``;
    serializeAst(ast[2], value);
    value.value = `${value.value}\``;
  } else if ("$p" === tmp) {
    serializeAst(ast[2], value);
    value.value = `${value.value}

  `;
  } else if ("$link" === tmp) {
    value.value = `${value.value}[`;
    serializeAst(ast[2], value);
    value.value = `${value.value}](`;
    if (null != ast[3]) {
      serializeAst(tmp4, value);
    }
    value.value = `${value.value})`;
  } else {
    value.value = `${value.value}$[`;
    serializeAst(ast[2], value);
    value.value = `${value.value}](${ast[1]})`;
  }
}
class InternalIntlMessage {
  constructor(arg0, arg1) {
    tmp = closure_3(this, InternalIntlMessage);
    this.locale = require;
    tmp2 = InternalIntlMessage;
    tmp3 = closure_1;
    result = global;
    if (!require("hydrateSingle").isCompressedAst(global)) {
      result = require("hydrateSingle").compressFormatJsToAst(global);
    }
    this.ast = result;
    return;
  }
}
const items = [
  {
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
    }
  }
];

export const InternalIntlMessage = _createClass(InternalIntlMessage, items);