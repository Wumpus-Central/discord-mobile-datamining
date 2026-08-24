// discord_app/modules/game_console/native/XboxInstallAlert.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import componentDidMountDefault from "../../../components_native/common/Alert.tsx";
import XBOX_URL_BASE from "../GameConsoleConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const require = arg1;
noopAll;
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: c4 } = XBOX_URL_BASE);
createCacheKey = { externalLinkIcon: null };
createCacheKey = { tintColor: ThemesDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  const _require = callback();
  let obj = {};
  const merged = Object.assign(arg0);
  const intl = _getSystemLocale.intl;
  obj.title = intl.string(_getSystemLocale.t["12Kx2v"]);
  const intl2 = _getSystemLocale.intl;
  obj.body = intl2.string(_getSystemLocale.t.msZW3j);
  const intl3 = _getSystemLocale.intl;
  obj.confirmText = intl3.string(_getSystemLocale.t["n+VrqG"]);
  const intl4 = _getSystemLocale.intl;
  obj.cancelText = intl4.string(_getSystemLocale.t.kYaBOg);
  obj.fillCancelText = true;
  obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
    return closure_1_5(lib(closure_1_2[7]).Icon, { source: closure_1_1(closure_1_2[8]), style: lib.externalLinkIcon });
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
  };
  return jsx(componentDidMountDefault, {});
};