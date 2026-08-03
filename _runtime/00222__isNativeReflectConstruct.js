import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class File {
  constructor(arg0, arg1, arg2) {
    self = this;
    tmp = File;
    tmp2 = _isNativeReflectConstruct(this, File);
    tmp4 = null != global;
    tmp3 = require("module_38");
    if (tmp4) {
      tmp4 = null != arg1;
    }
    tmp3Result = tmp3(tmp4, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
    items = [, ];
    items[0] = global;
    items[1] = importDefault;
    tmp6 = __esModule;
    obj = __esModule(tmp);
    tmp7 = __esModule;
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
require("_inherits")(File, require("Blob"));
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