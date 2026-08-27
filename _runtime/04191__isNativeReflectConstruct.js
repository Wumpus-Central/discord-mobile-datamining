// _runtime/04191__isNativeReflectConstruct.js
import _wrapNativeSuperDefault from "metro/00158__wrapNativeSuper.js";
import ModuleNotFoundError from "metro/00041__classCallCheck.js";
import closure_1 from "metro/00093__possibleConstructorReturn.js";
import closure_2 from "00095__getPrototypeOf.js";
import importDefaultResult from "metro/00042__createClass.js";
import importDefaultResult1 from "00098__inherits.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

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
({ NativeModules: c3, Platform } = get_ActivityIndicator);
class ModuleNotFoundError {
  constructor(arg0) {
    self = this;
    tmp = ModuleNotFoundError;
    tmp2 = ModuleNotFoundError(this, ModuleNotFoundError);
    NativeUnimoduleProxy = NativeModules.NativeUnimoduleProxy;
    ExponentConstants = undefined;
    if (NativeUnimoduleProxy != null) {
      modulesConstants = NativeUnimoduleProxy.modulesConstants;
      if (modulesConstants != null) {
        ExponentConstants = modulesConstants.ExponentConstants;
      }
    }
    str = "react-native";
    if (null != ExponentConstants) {
      str2 = "expo";
      if ("expo" === ExponentConstants.appOwnership) {
        str2 = "expo-go";
      }
      str = str2;
    }
    if ("expo-go" === str) {
      items = ["NitroModules are not supported in Expo Go! Use EAS (`expo prebuild`) or eject to a bare workflow instead."];
      tmp12 = closure_2;
      obj3 = closure_2(tmp);
      tmp13 = closure_1;
      tmp14 = _isNativeReflectConstruct;
      if (_isNativeReflectConstruct()) {
        tmp16 = globalThis;
        _Reflect2 = Reflect;
        constructResult = Reflect.construct(obj3, items, tmp12(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      return tmp13(tmp13(self, constructResult));
    } else {
      items1 = [];
      str7 = "Make sure react-native-nitro-modules/NitroModules is correctly autolinked (run `npx react-native config` to verify)";
      arr = items1.push("Make sure react-native-nitro-modules/NitroModules is correctly autolinked (run `npx react-native config` to verify)");
      str8 = "Make sure you enabled the new architecture (TurboModules) and CodeGen properly generated the \"NativeNitroModules\"/NitroModules specs. See https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md";
      arr1 = items1.push("Make sure you enabled the new architecture (TurboModules) and CodeGen properly generated the \"NativeNitroModules\"/NitroModules specs. See https://github.com/reactwg/react-native-new-architecture/blob/main/docs/enable-apps.md");
      str9 = "Make sure you are using react-native 0.75.0 or higher.";
      arr2 = items1.push("Make sure you are using react-native 0.75.0 or higher.");
      str10 = "Make sure you rebuilt the app.";
      arr3 = items1.push("Make sure you rebuilt the app.");
      str11 = "expo";
      if ("expo" === str) {
        str3 = "Make sure you ran `expo prebuild`.";
        arr4 = items1.push("Make sure you ran `expo prebuild`.");
      }
      tmp5 = global;
      str4 = "Make sure gradle is synced.";
      arr5 = items1.push("Make sure gradle is synced.");
      str5 = "\n* ";
      str6 = "Failed to get NitroModules: The native \"NitroModules\" Turbo/Native-Module could not be found.\n* ";
      items2 = [, ];
      items2[0] = `Failed to get NitroModules: The native "NitroModules" Turbo/Native-Module could not be found.
* ${arr3.join("\n* ")}`;
      obj = { cause: null };
      obj[0] = global;
      items2[1] = obj;
      tmp7 = closure_2;
      obj2 = closure_2(tmp);
      tmp9 = _isNativeReflectConstruct;
      tmp8 = closure_1;
      if (_isNativeReflectConstruct()) {
        tmp11 = globalThis;
        _Reflect = Reflect;
        constructResult1 = Reflect.construct(obj2, items2, tmp7(self).constructor);
      } else {
        constructResult1 = obj2.apply(self, items2);
      }
      return tmp8(self, constructResult1);
    }
  }
}
importDefaultResult1(ModuleNotFoundError, _wrapNativeSuperDefault(Error));

export const ModuleNotFoundError = importDefaultResult(ModuleNotFoundError);