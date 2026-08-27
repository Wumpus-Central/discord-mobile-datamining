// === Module 17398: NativeReactAssetModule ===

// Module 17398 (NativeReactAssetModule)
import enforcingDefault from "enforcing" /* 17399 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 500 */;

({ Image: obj1, NativeModules } = get_ActivityIndicator);
if (set.isAndroid()) {
  let NativeReactAssetModule = enforcingDefault;
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = set.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = callback(closure_1_1[3]).NATIVE_REQUIRED_ASSETS;
      closure_1_3.valuesResult(arr.map((arg0) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[arg0]) {
          str = closure_1_2.resolveAssetSource(tmp[arg0]).uri;
        }
        return str;
      }));
      NATIVE_REQUIRED_ASSETS(true);
    });
  });
};