// discord_app/modules/react_asset/native/reactAssetProvider.tsx
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeReactAssetModule.tsx";
import native_required_assets from "native_required_assets.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let NativeModules;
let c2;
({ Image: c2, NativeModules } = react_native);
if (PlatformUtils.isAndroid()) {
  let NativeReactAssetModule = react_nativeDefault;
} else {
  NativeReactAssetModule = NativeModules.NativeReactAssetModule;
}
const result = size.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  const promise = new Promise((arg0) => {
    let closure_0 = arg0;
    closure_3.keysRequest((arr) => {
      const NATIVE_REQUIRED_ASSETS = native_required_assets.NATIVE_REQUIRED_ASSETS;
      NativeReactAssetModule.valuesResult(
        arr.map((item) => {
          let str = "";
          if (null != NATIVE_REQUIRED_ASSETS[item]) {
            str = closure_2_2.resolveAssetSource(tmp[item]).uri;
          }
          return str;
        }),
      );
      closure_0(true);
    });
  });
  return promise;
}
