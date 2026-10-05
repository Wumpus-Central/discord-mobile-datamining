// _runtime/metro/00470__.js
import _modDef38 from "00038__.js";
import nullthrowsDefault from "../00070_nullthrows.js";
import _modDef209 from "00209__.js";
import IntentAndroidDefault from "../00471_IntentAndroid.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";

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
class LinkingImpl {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, LinkingImpl);
    const items = [undefined];
    const obj = _getPrototypeOf(LinkingImpl);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    return c3(self, constructResult);
  }
}
_inherits(LinkingImpl, _modDef209);
const entry = {
  key: "addEventListener",
  value: function addEventListener(arg0, arg1) {
    return this.addListener(arg0, arg1);
  },
};
let items = [
  entry,
  {
    key: "openURL",
    value: function openURL(url) {
      this._validateURL(url);
      const tmp2 = nullthrowsDefault;
      const tmp2Result = tmp2(IntentAndroidDefault);
      return tmp2Result.openURL(url);
    },
  },
  {
    key: "canOpenURL",
    value: function canOpenURL(url) {
      this._validateURL(url);
      const tmp2 = nullthrowsDefault;
      const tmp2Result = tmp2(IntentAndroidDefault);
      return tmp2Result.canOpenURL(url);
    },
  },
  {
    key: "openSettings",
    value: function openSettings() {
      const tmp = nullthrowsDefault;
      const tmpResult = tmp(IntentAndroidDefault);
      return tmpResult.openSettings();
    },
  },
  {
    key: "getInitialURL",
    value: function getInitialURL() {
      const tmp = nullthrowsDefault;
      const tmpResult = tmp(IntentAndroidDefault);
      return tmpResult.getInitialURL();
    },
  },
  {
    key: "sendIntent",
    value: function sendIntent(arg0, items) {
      const tmp = nullthrowsDefault;
      const tmpResult = tmp(IntentAndroidDefault);
      return tmpResult.sendIntent(arg0, items);
    },
  },
  {
    key: "_validateURL",
    value: function _validateURL(url) {
      _modDef38(typeof url === "string", `Invalid URL: should be a string. Was: ${url}`);
      _modDef38(url, "Invalid URL: cannot be empty");
    },
  },
];
const tmp5 = new _createClass(LinkingImpl, items)();

export default new _createClass(LinkingImpl, items)();
