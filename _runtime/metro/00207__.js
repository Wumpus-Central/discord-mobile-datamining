// === Module 207: ? ===

// Module 207
import _modDef133 from "module_133" /* 133 */;
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
class ProgressEvent {
  constructor(arg0, lengthComputable) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ProgressEvent);
    const items = [arg0, lengthComputable];
    const obj = _getPrototypeOf(ProgressEvent);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = map(self, constructResult);
    lengthComputable = undefined;
    const _Boolean = Boolean;
    if (lengthComputable != null) {
      lengthComputable = lengthComputable.lengthComputable;
    }
    tmp3Result._lengthComputable = _Boolean(lengthComputable);
    let loaded;
    const _Number = Number;
    if (lengthComputable != null) {
      loaded = lengthComputable.loaded;
    }
    tmp3Result._loaded = _Number(loaded) || 0;
    let total;
    const _Number2 = Number;
    _Number(loaded) || 0;
    if (lengthComputable != null) {
      total = lengthComputable.total;
    }
    tmp3Result._total = _Number2(total) || 0;
    _Number2(total) || 0;
    return tmp3Result;
  }
}
_inherits(ProgressEvent, _modDef133);
let obj = {
  key: "lengthComputable",
  get() {
    return this._lengthComputable;
  }
};
let items = [
  obj,
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

export default _createClass(ProgressEvent, items);