// _runtime/01287__isNativeReflectConstruct.js
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _isNativeReflectConstruct2 from "01288__isNativeReflectConstruct.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _inherits from "00098__inherits.js";

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
    tmp = closure_5;
  }
  let first = _1Ww0Hi;
  if (typeof _1Ww0Hi !== "string") {
    const self = this;
    first = this.bindFormatValues(tmp, _1Ww0Hi, arg1)[0];
  }
  return first;
}
_possibleConstructorReturn;
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
  $link(join) {
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
    tmp = MarkdownBuilder(this, MarkdownBuilder);
    tmp2 = closure_2;
    obj = closure_2(MarkdownBuilder);
    tmp3 = closure_1;
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
    tmp3Result.result = "";
    return tmp3Result;
  }
}
_classCallCheck = MarkdownBuilder;
_inherits(MarkdownBuilder, _isNativeReflectConstruct2.StringBuilder);
const items = [
  {
    key: "pushRichTextTag",
    value: function pushRichTextTag(arg0, arg1, arg2) {
      this.result = this.result + dependencyMap[arg0](arg1, "", arg2);
    }
  }
];
const _moduleResult = _createClass(MarkdownBuilder, items);
let c5 = _moduleResult;

export { formatToMarkdownString };
export const markdownFormatter = { format: formatToMarkdownString, builder: _moduleResult };