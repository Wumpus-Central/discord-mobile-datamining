// _runtime/00470__isNativeReflectConstruct.js
import NativeEventEmitterDefault from "NativeEventEmitter" /* 209 */;
import closure_2 from "_classCallCheck" /* 41 */;
import closure_3 from "_possibleConstructorReturn" /* 93 */;
import closure_4 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;

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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class LinkingImpl {
  constructor() {
    self = this;
    tmp = closure_2(this, LinkingImpl);
    items = [];
    items[0] = undefined;
    tmp2 = closure_4;
    obj = closure_4(LinkingImpl);
    tmp3 = closure_3;
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
importDefaultResult1(LinkingImpl, NativeEventEmitterDefault);
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