import ProgressEvent from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";

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
class ProgressEvent {
  constructor(arg0, arg1) {
    self = this;
    tmp = ProgressEvent(this, ProgressEvent);
    items = [, ];
    items[0] = global;
    items[1] = arg1;
    tmp2 = __esModule;
    obj = __esModule(ProgressEvent);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    lengthComputable = undefined;
    if (arg1 != null) {
      lengthComputable = arg1.lengthComputable;
    }
    tmp3Result._lengthComputable = Boolean(lengthComputable);
    loaded = undefined;
    if (arg1 != null) {
      loaded = arg1.loaded;
    }
    tmp9 = Number(loaded) || 0;
    tmp3Result._loaded = tmp9;
    total = undefined;
    if (arg1 != null) {
      total = arg1.total;
    }
    tmp11 = Number(total) || 0;
    tmp3Result._total = tmp11;
    return tmp3Result;
  }
}
require("_inherits")(ProgressEvent, require("Event"));
let items = [
  {
    key: "lengthComputable",
    get() {
      return this._lengthComputable;
    }
  },
  {
    key: "loaded",
    get() {
      return this._loaded;
    }
  },
  {
    key: "total",
    get() {
      return this._total;
    }
  }
];

export default importDefaultResult(ProgressEvent, items);