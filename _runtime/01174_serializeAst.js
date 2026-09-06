// === Module 1174: serializeAst ===

// Module 1174 (serializeAst)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

const InternalIntlMessage = require;
function serializeAst(ast, value) {
  const iter = ast[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (typeof nextResult !== "string") {
      let tmp3 = nextResult;
      let first = tmp2[0];
      let tmp5 = InternalIntlMessage;
      let tmp6 = dependencyMap;
      if (InternalIntlMessage(1160).FormatJsNodeType.Argument === first) {
        let tmp32 = nextResult;
        value.value = `${value.value}{${tmp2[1]}}`;
      } else if (tmp5(1160).FormatJsNodeType.Date === first) {
        let tmp30 = nextResult;
        value.value = `${value.value}{${tmp2[1]}, date`;
        if (null != tmp2[2]) {
          let tmp31 = nextResult;
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (tmp5(1160).FormatJsNodeType.Time === first) {
        let tmp28 = nextResult;
        value.value = `${value.value}{${tmp2[1]}, time`;
        if (null != tmp2[2]) {
          let tmp29 = nextResult;
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (tmp5(1160).FormatJsNodeType.Number === first) {
        let tmp26 = nextResult;
        value.value = `${value.value}{${tmp2[1]}, number`;
        if (null != tmp2[2]) {
          let tmp27 = nextResult;
          value.value = `${value.value}, ${tmp2[2]}`;
        }
        value.value = `${value.value}}`;
      } else if (tmp5(1160).FormatJsNodeType.Plural === first) {
        let tmp15 = nextResult;
        let str = "plural";
        if ("ordinal" == tmp2[4]) {
          str = "selectordinal";
        }
        let tmp16 = nextResult;
        let _HermesInternal = HermesInternal;
        value.value = value.value + `{${tmp2[1]}` + ", " + str + ",";
        if (tmp2[3]) {
          let tmp17 = nextResult;
          value.value = `${value.value} offset:${tmp2[3]}`;
        }
        let _Object2 = Object;
        let tmp18 = nextResult;
        let entries = Object.entries(tmp2[2]);
        let tmp20 = entries;
        let tmp21 = entries;
        for (const item10098 of entries) {
          let tmp22 = callback;
          let tmp23 = callback(item10098, 2);
          arg1.value = arg1.value + (" " + tmp23[0] + " {");
          let tmp24 = serializeAst;
          let tmp25 = serializeAst(tmp23[1], arg1);
          arg1.value = arg1.value + "}";
          continue;
        }
        value.value = `${value.value}}`;
      } else if (tmp5(1160).FormatJsNodeType.Pound === first) {
        value.value = `${value.value}#`;
      } else if (tmp5(1160).FormatJsNodeType.Select === first) {
        let tmp7 = nextResult;
        value.value = `${value.value}{${tmp2[1]}, select,`;
        let _Object = Object;
        let entries1 = Object.entries(tmp2[2]);
        let tmp9 = entries1;
        let tmp10 = entries1;
        for (const item10053 of entries1) {
          let tmp11 = callback;
          let tmp12 = callback(item10053, 2);
          arg1.value = arg1.value + (" " + tmp12[0] + " {");
          let tmp13 = serializeAst;
          let tmp14 = serializeAst(tmp12[1], arg1);
          arg1.value = arg1.value + "}";
          continue;
        }
        value.value = `${value.value}}`;
      } else if (tmp5(1160).FormatJsNodeType.Tag === first) {
        let tmp34 = serializeAstTag;
        let tmp35 = nextResult;
        let tmp36 = serializeAstTag(tmp2, value);
      }
    } else {
      let tmp33 = nextResult;
      value.value = value.value + tmp2;
    }
    continue;
  }
}
function serializeAstTag(arg0, value) {
  if ("$b" === arg0[1]) {
    value.value = `${value.value}**`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}**`;
  } else if ("$i" === tmp) {
    value.value = `${value.value}*`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}*`;
  } else if ("$code" === tmp) {
    value.value = `${value.value}\``;
    serializeAst(arg0[2], value);
    value.value = `${value.value}\``;
  } else if ("$p" === tmp) {
    serializeAst(arg0[2], value);
    value.value = `${value.value}

  `;
  } else if ("$link" === tmp) {
    value.value = `${value.value}[`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}](`;
    if (null != arg0[3]) {
      tmp5(tmp4, value);
    }
    value.value = `${value.value})`;
    tmp5 = serializeAst;
  } else {
    value.value = `${value.value}$[`;
    serializeAst(arg0[2], value);
    value.value = `${value.value}](${arg0[1]})`;
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