// === Module 17905: reactAssetProvider ===

// Module 17905 (reactAssetProvider)
import NativeReactAssetModuleDefault from "NativeReactAssetModule" /* 17906 */;
import native_required_assets from "native_required_assets" /* 17907 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

({ Image: c2, NativeModules } = get_ActivityIndicator);
if (PlatformUtils.isAndroid()) {
  let NativeReactAssetModule = NativeReactAssetModuleDefault;
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = size.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = native_required_assets.NATIVE_REQUIRED_ASSETS;
      NativeReactAssetModule.valuesResult(arr.map((item) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[item]) {
          str = closure_2_2.resolveAssetSource(tmp[item]).uri;
        }
        return str;
      }));
      closure_0(true);
    });
  });
};