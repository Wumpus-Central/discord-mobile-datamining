// === Module 17121: NativeReactAssetModule ===

// Module 17121 (NativeReactAssetModule)
import enforcingDefault from "enforcing" /* 17122 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj132 from "obj132" /* 500 */;

({ Image: obj1, NativeModules } = get_ActivityIndicator);
if (obj132.isAndroid()) {
  let NativeReactAssetModule = enforcingDefault;
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = obj132.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = callback(closure_1_1[3]).NATIVE_REQUIRED_ASSETS;
      closure_1_3.valuesResult(arr.map((item, index) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[item]) {
          str = closure_1_2.resolveAssetSource(tmp[item]).uri;
        }
        return str;
      }));
      NATIVE_REQUIRED_ASSETS(true);
    });
  });
};