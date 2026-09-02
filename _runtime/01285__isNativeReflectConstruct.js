// === Module 1285: _isNativeReflectConstruct ===

// Module 1285 (_isNativeReflectConstruct)
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 1277 */;
import closure_1 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_2 from "_possibleConstructorReturn" /* 93 */;
import closure_3 from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
  } catch (err) {
  }
}
function formatToAst(str) {
  if (typeof str === "string") {
    const obj = { type: null, content: null };
    obj[0] = AstBuilder.Text;
    obj[1] = str;
    const items = [obj];
    let bindFormatValuesResult = items;
  } else {
    const self = this;
    bindFormatValuesResult = this.bindFormatValues(closure_6, str, arg1);
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
  $link(content) {
    [tmp] = arg2;
    return { type: AstBuilder.Link, target: tmp, content };
  },
  $p(content) {
    return { type: AstBuilder.Paragraph, content };
  }
};
class AstBuilder {
  constructor() {
    self = this;
    tmp = closure_1(this, AstBuilder);
    tmp2 = closure_3;
    obj = closure_3(AstBuilder);
    tmp3 = closure_2;
    if (_isNativeReflectConstruct()) {
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
_inherits(AstBuilder, _isNativeReflectConstruct2.FormatBuilder);
obj = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(formatting) {
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
  }
};
let items = [
  obj,
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
    }
  },
  {
    key: "pushObject",
    value: function pushObject(arg0) {
      const result = this.result;
      result.push(arg0);
    }
  },
  {
    key: "finish",
    value: function finish() {
      return this.result;
    }
  }
];
const _moduleResult = _createClass(AstBuilder, items);

export { formatToAst };
export const RichTextNodeType = obj;
export const astFormatter = { format: formatToAst, builder: _moduleResult };