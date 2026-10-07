// discord_app/modules/react_asset/native/reactAssetProvider.tsx
import NativeReactAssetModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeReactAssetModule.tsx";
import native_required_assets from "native_required_assets.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
