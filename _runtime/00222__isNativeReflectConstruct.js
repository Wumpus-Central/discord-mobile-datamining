// _runtime/00222__isNativeReflectConstruct.js
import _inheritsDefault from "00098__inherits.js";
import BlobDefault from "00203_Blob.js";
import closure_2 from "metro/00041__classCallCheck.js";
import closure_3 from "metro/00093__possibleConstructorReturn.js";
import closure_4 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";

const File = arg1;
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
class File {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = File;
    tmp2 = closure_2(this, File);
    tmp4 = null != global;
    tmp3 = require("module_38");
    if (tmp4) {
      tmp4 = null != arg1;
    }
    tmp3Result = tmp3(tmp4, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
    items = [, ];
    items[0] = global;
    items[1] = importDefault;
    tmp6 = closure_4;
    obj = closure_4(tmp);
    tmp7 = closure_3;
    if (_isNativeReflectConstruct()) {
      tmp9 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp6(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp7Result = tmp7(self, constructResult);
    tmp7Result.data.name = arg1;
    return tmp7Result;
  }
}
_inheritsDefault(File, BlobDefault);
let items = [
  {
    key: "name",
    get() {
      File(38)(null != this.data.name, "Files must have a name set.");
      return this.data.name;
    }
  },
  {
    key: "lastModified",
    get() {
      return this.data.lastModified || 0;
    }
  }
];

export default importDefaultResult(File, items);