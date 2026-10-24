// discord_app/modules/react_asset/native/reactAssetProvider.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import NativeReactAssetModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeReactAssetModule.tsx";
import native_required_assets from "native_required_assets.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const result = size.fileFinishedImporting("modules/react_asset/native/reactAssetProvider.tsx");

export default function reactAssetProvider() {
  return new Promise((arg0) => {
    closure_0 = arg0;
    closure_1(19462).keysRequest((arr) => {
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
}
