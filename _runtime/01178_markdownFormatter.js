// === Module 1178: markdownFormatter ===

// Module 1178 (markdownFormatter)
import StringBuilder from "StringBuilder" /* 1179 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
function formatToMarkdownString(_1Ww0Hi, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = hasOwnProperty;
  }
  let first = _1Ww0Hi;
  if (typeof _1Ww0Hi !== "string") {
    const self = this;
    first = this.bindFormatValues(tmp, _1Ww0Hi, arg1)[0];
  }
  return first;
}
let closure_4 = {
  $b(join) {
    return "**" + join.join("") + "**";
  },
  $i(join) {
    return "*" + join.join("") + "*";
  },
  $del(join) {
    return "~~" + join.join("") + "~~";
  },
  $code(join) {
    return "`" + join.join("") + "`";
  },
  $link(join, arg1, arg2) {
    let tmp;
    [tmp] = arg2;
    return "[" + join.join("") + "](" + tmp + ")";
  },
  $p(join) {
    return join.join("") + "\n\n";
  }
};
class MarkdownBuilder {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, MarkdownBuilder);
    const obj = _getPrototypeOf(MarkdownBuilder);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    const tmp3Result = map(self, constructResult);
    tmp3Result.result = "";
    return tmp3Result;
  }
}
_inherits(MarkdownBuilder, StringBuilder.StringBuilder);
const entry = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(arg0, arg1, arg2) {
    this.result = this.result + closure_4[arg0](arg1, "", arg2);
  }
};
const items = [entry];
const _moduleResult = _createClass(MarkdownBuilder, items);
const hasOwnProperty = _moduleResult;

export { formatToMarkdownString };
export const markdownFormatter = { format: formatToMarkdownString, builder: _moduleResult };