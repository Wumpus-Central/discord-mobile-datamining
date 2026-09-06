// _runtime/metro/01167__.js
import _mod1159 from "01159__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function formatToAst(content, arg1) {
  if (typeof content === "string") {
    const obj = { type: AstBuilder.Text, content };
    const items = [obj];
    let bindFormatValuesResult = items;
  } else {
    const self = this;
    bindFormatValuesResult = this.bindFormatValues(_moduleResult, content, arg1);
  }
  return bindFormatValuesResult;
}
let obj = {};
const AstBuilder = obj;
obj.Text = "text";
obj.Strong = "strong";
obj.Emphasis = "em";
obj.Strikethrough = "s";
obj.Code = "inlineCode";
obj.Link = "link";
obj.Paragraph = "paragraph";
let closure_5 = {
  $b(content) {
    return { type: AstBuilder.Strong, content };
  },
  $i(content) {
    return { type: AstBuilder.Emphasis, content };
  },
  $del(content) {
    return { type: AstBuilder.Strikethrough, content };
  },
  $code(content) {
    return { type: AstBuilder.Code, content };
  },
  $link(content, arg1, arg2) {
    [tmp] = arg2;
    return { type: AstBuilder.Link, target: tmp, content };
  },
  $p(content) {
    return { type: AstBuilder.Paragraph, content };
  },
};
class AstBuilder {
  constructor() {
    self = this;
    tmp = closure_1(this, AstBuilder);
    tmp2 = closure_3;
    obj = closure_3(AstBuilder);
    tmp3 = c2;
    if (closure_4()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result.result = [];
    return tmp3Result;
  }
}
_inherits(AstBuilder, _mod1159.FormatBuilder);
const entry = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(formatting, arg1, arg2) {
    if (formatting in closure_5) {
      const self = this;
      const tmp4 = tmp[formatting](arg1, "", arg2);
      const _Array = Array;
      const result = this.result;
      const push = result.push;
      if (Array.isArray(tmp4)) {
        const items = [];
        HermesBuiltin.arraySpread(tmp4, 0);
        HermesBuiltin.apply(items, result);
      } else {
        push(tmp4);
      }
    } else {
      const _HermesInternal = HermesInternal;
      throw "" + formatting + " is not a known rich text formatting tag";
    }
    tmp = closure_5;
  },
};
let items = [
  entry,
  {
    key: "pushLiteralText",
    value: function pushLiteralText(content) {
      if (null != this.result[this.result.length - 1]) {
        if (tmp.type === AstBuilder.Text) {
          tmp.content = tmp.content + content;
        }
      }
      const result = this.result;
      result.push({ type: AstBuilder.Text, content });
    },
  },
  {
    key: "pushObject",
    value: function pushObject(arg0) {
      const result = this.result;
      result.push(arg0);
    },
  },
  {
    key: "finish",
    value: function finish() {
      return this.result;
    },
  },
];
const _moduleResult = _createClass(AstBuilder, items);
const metroRequire = _moduleResult;

export { formatToAst };
export const RichTextNodeType = obj;
export const astFormatter = { format: formatToAst, builder: _moduleResult };
