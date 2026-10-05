// === Module 1177: RichTextNodeType ===

// Module 1177 (RichTextNodeType)
import FormatBuilder from "FormatBuilder" /* 1169 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function formatToAst(content, arg1) {
  let bindFormatValuesResult;
  let obj;
  if (typeof content === "string") {
    obj = { type: obj.Text, content };
    const items = [obj];
    bindFormatValuesResult = items;
  } else {
    const self = this;
    bindFormatValuesResult = this.bindFormatValues(metroRequire, content, arg1);
  }
  return bindFormatValuesResult;
}
const RichTextNodeType = { Text: "text", Strong: "strong", Emphasis: "em", Strikethrough: "s", Code: "inlineCode", Link: "link", Paragraph: "paragraph" };
let closure_5 = {
  $b(content) {
    let obj;
    obj = { type: obj.Strong, content };
    return obj;
  },
  $i(content) {
    let obj;
    obj = { type: obj.Emphasis, content };
    return obj;
  },
  $del(content) {
    let obj;
    obj = { type: obj.Strikethrough, content };
    return obj;
  },
  $code(content) {
    let obj;
    obj = { type: obj.Code, content };
    return obj;
  },
  $link(content, arg1, arg2) {
    let obj;
    let tmp;
    [tmp] = arg2;
    obj = { type: obj.Link, target: tmp, content };
    return obj;
  },
  $p(content) {
    let obj;
    obj = { type: obj.Paragraph, content };
    return obj;
  }
};
class AstBuilder {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, AstBuilder);
    const obj = _getPrototypeOf(AstBuilder);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = c2(self, constructResult);
    tmp3Result.result = [];
    return tmp3Result;
  }
}
_inherits(AstBuilder, FormatBuilder.FormatBuilder);
const entry = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(formatting, arg1, arg2) {
    if (formatting in closure_5) {
      const self = this;
      const tmp5 = closure_5[formatting](arg1, "", arg2);
      const _Array = Array;
      const result = this.result;
      const push = result.push;
      if (Array.isArray(tmp5)) {
        const items = [];
        HermesBuiltin.arraySpread(items, tmp5, 0);
        HermesBuiltin.apply(push, items, result);
      } else {
        push(tmp5);
      }
    } else {
      const _HermesInternal = HermesInternal;
      throw "" + formatting + " is not a known rich text formatting tag";
    }
  }
};
let items = [
  entry,
  {
    key: "pushLiteralText",
    value: function pushLiteralText(content) {
      let obj;
      if (null != this.result[this.result.length - 1]) {
        if (this.result[this.result.length - 1].type === obj.Text) {
          this.result[this.result.length - 1].content = this.result[this.result.length - 1].content + content;
        }
      }
      const result = this.result;
      obj = { type: obj.Text, content };
      result.push(obj);
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
const metroRequire = _moduleResult;

export { formatToAst };
export { RichTextNodeType };
export const astFormatter = { format: formatToAst, builder: _moduleResult };