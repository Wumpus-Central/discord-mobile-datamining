// discord_app/modules/game_console/native/XboxInstallAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import componentDidMountDefault from "../../../components_native/common/Alert.tsx";
import registerAssetDefault from "../../../../_runtime/09841_registerAsset.js";
import XBOX_URL_BASE from "../GameConsoleConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: c4 } = XBOX_URL_BASE);
const createCacheKey = { tintColor: ThemesDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  const _require = callback();
  let obj = {};
  const merged = Object.assign(arg0);
  const intl = require("../../../intl/index.native.tsx").intl;
  obj.title = intl.string(require("../../../intl/index.native.tsx").t["12Kx2v"]);
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj.body = intl2.string(require("../../../intl/index.native.tsx").t.msZW3j);
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj.confirmText = intl3.string(require("../../../intl/index.native.tsx").t["n+VrqG"]);
  const intl4 = require("../../../intl/index.native.tsx").intl;
  obj.cancelText = intl4.string(require("../../../intl/index.native.tsx").t.kYaBOg);
  obj.fillCancelText = true;
  obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
    return jsx(lib(dependencyMap[7]).Icon, { source: registerAssetDefault, style: lib.externalLinkIcon });
  };
  obj.onConfirm = function onConfirm() {
    const obj = lib(500);
    const isAndroidResult = lib(500).isAndroid();
    const openURL = callback(4090).openURL;
    if (isAndroidResult) {
      openURL(closure_3);
    } else {
      openURL(closure_4);
    }
    const tmp2 = callback(4090);
  };
  return jsx(componentDidMountDefault, {});
};