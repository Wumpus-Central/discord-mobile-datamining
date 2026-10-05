// === Module 4618: ModuleNotFoundError ===

// Module 4618 (ModuleNotFoundError)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _wrapNativeSuper from "_wrapNativeSuper" /* 158 */;
import react_native from "react-native" /* 17 */;

let Platform;
let c3;
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
({ NativeModules: c3, Platform } = react_native);
class ModuleNotFoundError {
  constructor(error2) {
    const self = this;
    _classCallCheck(this, ModuleNotFoundError);
    c3 = c3.NativeUnimoduleProxy;
    let ExponentConstants;
    if (c3 != null) {
      const modulesConstants = c3.modulesConstants;
      if (modulesConstants != null) {
        ExponentConstants = modulesConstants.ExponentConstants;
      }
    }
    let str = "react-native";
    if (null != ExponentConstants) {
      let str2 = "expo";
      if ("expo" === ExponentConstants.appOwnership) {
        str2 = "expo-go";
      }
      str = str2;
    }
    if ("expo-go" === str) {
      let constructResult;
      const items = ["NitroModules are not supported in Expo Go! Use EAS (`expo prebuild`) or eject to a bare workflow instead."];
      const obj3 = _getPrototypeOf(ModuleNotFoundError);
      if (_isNativeReflectConstruct()) {
        const _Reflect2 = Reflect;
        constructResult = Reflect.construct(obj3, items, _getPrototypeOf(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      return map(map(self, constructResult));
    } else {
      let constructResult1;
      const items1 = [];
      items1.push("Make sure react-native-nitro-modules/NitroModules is correctly autolinked (run `npx react-native config` to verify)");
      items1.push("Make sure you enabled the new architecture (TurboModules) and CodeGen properly generated the \"NativeNitroModules\"/NitroModules specs. See https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md");
      items1.push("Make sure you are using react-native 0.75.0 or higher.");
      items1.push("Make sure you rebuilt the app.");
      if ("expo" === str) {
        items1.push("Make sure you ran `expo prebuild`.");
      }
      items1.push("Make sure gradle is synced.");
      const items2 = [
        `Failed to get NitroModules: The native "NitroModules" Turbo/Native-Module could not be found.
        * ${arr3.join("\n* ")}`,

      ];
      const obj = { cause: error2 };
      items2[1] = obj;
      const obj2 = _getPrototypeOf(ModuleNotFoundError);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult1 = Reflect.construct(obj2, items2, _getPrototypeOf(self).constructor);
      } else {
        constructResult1 = obj2.apply(self, items2);
      }
      return map(self, constructResult1);
    }
  }
}
_inherits(ModuleNotFoundError, _wrapNativeSuper(Error));
const ModuleNotFoundError_export = _createClass(ModuleNotFoundError);

export { ModuleNotFoundError_export as ModuleNotFoundError };