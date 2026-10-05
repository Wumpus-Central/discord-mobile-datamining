// _runtime/metro/00222__.js
import _modDef203 from "00203__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

const require = globalThis.__r;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
class File {
  constructor(items, filename, arg2) {
    let constructResult;
    const self = this;
    _classCallCheck(this, File);
    let tmp4 = null != items;
    const tmp3 = require("00038__.js");
    if (tmp4) {
      tmp4 = null != filename;
    }
    tmp3(tmp4, "Failed to construct `File`: Must pass both `parts` and `name` arguments.");
    items = [,];
    items[0] = items;
    items[1] = arg2;
    const obj = _getPrototypeOf(File);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp7Result = c3(self, constructResult);
    tmp7Result.data.name = filename;
    return tmp7Result;
  }
}
_inherits(File, _modDef203);
let obj = {
  key: "name",
  get() {
    require("00038__.js")(null != this.data.name, "Files must have a name set.");
    return this.data.name;
  },
};
let items = [
  obj,
  {
    key: "lastModified",
    get() {
      return this.data.lastModified || 0;
    },
  },
];

export default _createClass(File, items);
