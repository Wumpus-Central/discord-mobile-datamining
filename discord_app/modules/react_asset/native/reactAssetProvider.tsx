// === Module 19168: reactAssetProvider ===

// Module 19168 (reactAssetProvider)
import _mod17 from "module_17" /* 17 */;
import NativeReactAssetModuleDefault from "NativeReactAssetModule" /* 19169 */;
import native_required_assets from "native_required_assets" /* 19170 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1(19169).keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = native_required_assets.NATIVE_REQUIRED_ASSETS;
      const mapped = arr.map((item) => {
        let str = "";
        if (null != NATIVE_REQUIRED_ASSETS[item]) {
          str = closure_2_3.resolveAssetSource(tmp[item]).uri;
        }
        return str;
      });
      NativeReactAssetModuleDefault.valuesResult(mapped);
      closure_0(true);
    });
  });
};