// === Module 470: ? ===

// Module 470
import NativeEventEmitterDefault from "NativeEventEmitter" /* 209 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
    tmp = c2(this, LinkingImpl);
    items = [];
    items[0] = undefined;
    tmp2 = closure_4;
    obj = closure_4(LinkingImpl);
    tmp3 = closure_3;
    if (hasOwnProperty()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(LinkingImpl, NativeEventEmitterDefault);
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    return this.addListener(arg0, arg1);
  }
};
let items = [
  entry,
  {
    key: "openURL",
    value: function openURL(url) {
      this._validateURL(url);
      const tmp2 = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).openURL(url);
    }
  },
  {
    key: "canOpenURL",
    value: function canOpenURL(url) {
      this._validateURL(url);
      const tmp2 = LinkingImpl(70);
      return LinkingImpl(70)(LinkingImpl(471)).canOpenURL(url);
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
    value: function _validateURL(url) {
      LinkingImpl(38)(typeof url === "string", `Invalid URL: should be a string. Was: ${url}`);
      LinkingImpl(38)(url, "Invalid URL: cannot be empty");
    }
  }
];

export default new _createClass(LinkingImpl, items)();