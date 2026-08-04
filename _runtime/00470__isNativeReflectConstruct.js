import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";

const LinkingImpl = importDefault;
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
class LinkingImpl {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, LinkingImpl);
    items = [];
    items[0] = undefined;
    tmp2 = __esModule;
    obj = __esModule(LinkingImpl);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return tmp3(self, constructResult);
  }
}
require("_inherits")(LinkingImpl, require("NativeEventEmitter"));
let items = [
  {
    key: "addEventListener",
    value: function addEventListener(arg0, arg1) {
      return this.addListener(arg0, arg1);
    }
  },
  {
    key: "openURL",
    value: function openURL(closure_0) {
      this._validateURL(closure_0);
      const tmp2 = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).openURL(closure_0);
    }
  },
  {
    key: "canOpenURL",
    value: function canOpenURL(closure_0) {
      this._validateURL(closure_0);
      const tmp2 = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).canOpenURL(closure_0);
    }
  },
  {
    key: "openSettings",
    value: function openSettings() {
      const tmp = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).openSettings();
    }
  },
  {
    key: "getInitialURL",
    value: function getInitialURL() {
      const tmp = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).getInitialURL();
    }
  },
  {
    key: "sendIntent",
    value: function sendIntent(arg0, arg1) {
      const tmp = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).sendIntent(arg0, arg1);
    }
  },
  {
    key: "_validateURL",
    value: function _validateURL(closure_0) {
      LinkingImpl(38)(typeof closure_0 === "string", `Invalid URL: should be a string. Was: ${closure_0}`);
      LinkingImpl(38)(closure_0, "Invalid URL: cannot be empty");
    }
  }
];
let obj = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    return this.addListener(arg0, arg1);
  }
};

export default new importDefaultResult(LinkingImpl, items)();