// === Module 1168: ? ===

// Module 1168
import _mod1169 from "module_1169" /* 1169 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
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
function formatToMarkdownString(_1Ww0Hi, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = _moduleResult;
  }
  let first = _1Ww0Hi;
  if (typeof _1Ww0Hi !== "string") {
    const self = this;
    first = this.bindFormatValues(tmp, _1Ww0Hi, arg1)[0];
  }
  return first;
}
const dependencyMap = {
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
    [tmp] = arg2;
    return "[" + join.join("") + "](" + tmp + ")";
  },
  $p(join) {
    return join.join("") + "\n\n";
  }
};
class MarkdownBuilder {
  constructor() {
    self = this;
    tmp = closure_0(this, MarkdownBuilder);
    tmp2 = c2;
    obj = c2(MarkdownBuilder);
    tmp3 = closure_1;
    if (closure_3()) {
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
    tmp3Result.result = "";
    return tmp3Result;
  }
}
_classCallCheck = MarkdownBuilder;
_inherits(MarkdownBuilder, _mod1169.StringBuilder);
const entry = {
  key: "pushRichTextTag",
  value: function pushRichTextTag(arg0, arg1, arg2) {
    this.result = this.result + dependencyMap[arg0](arg1, "", arg2);
  }
};
const items = [entry];
const _moduleResult = _createClass(MarkdownBuilder, items);
const hasOwnProperty = _moduleResult;

export { formatToMarkdownString };
export const markdownFormatter = { format: formatToMarkdownString, builder: _moduleResult };