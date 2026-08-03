// === Module 16763: NativeReactAssetModule ===

// Module 16763 (NativeReactAssetModule)
import get_ActivityIndicator from "get ActivityIndicator";
import set from "set";
import set from "enforcing";

let NativeModules;
let obj1;
({ Image: obj1, NativeModules } = get_ActivityIndicator);
if (set.isAndroid()) {
  let NativeReactAssetModule = require("enforcing");
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = set.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    let closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = callback(outer1_1[3]).NATIVE_REQUIRED_ASSETS;
      outer1_3.valuesResult(arr.map((arg0) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[arg0]) {
          str = outer1_2.resolveAssetSource(tmp[arg0]).uri;
        }
        return str;
      }));
      NATIVE_REQUIRED_ASSETS(true);
    });
  });
};