// _runtime/01287__isNativeReflectConstruct.js
import _isNativeReflectConstruct2 from "_isNativeReflectConstruct" /* 1288 */;
import MarkdownBuilder from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_1 from "_possibleConstructorReturn" /* 93 */;
import closure_2 from "_getPrototypeOf" /* 95 */;
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
    tmp = closure_5;
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