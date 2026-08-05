import { componentDidMount } from "../../../components_native/common/Alert.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
// discord_app/modules/game_console/native/XboxInstallAlert.tsx
import "noop";
import XBOX_URL_BASE from "XBOX_URL_BASE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: c4 } = XBOX_URL_BASE);
createCacheKey = { externalLinkIcon: null };
createCacheKey = { tintColor: require("Themes").colors.WHITE, width: 20, height: 20, marginLeft: 8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  const _require = createCacheKey();
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
    const obj = { source: null, style: null };
    obj[0] = outer1_1(outer1_2[8]);
    obj[1] = lib.externalLinkIcon;
    return outer1_5(lib(outer1_2[7]).Icon, obj);
  };
  obj.onConfirm = function onConfirm() {
    const obj = lib(500);
    const isAndroidResult = lib(500).isAndroid();
    const openURL = callback(3982).openURL;
    if (isAndroidResult) {
      openURL(closure_3);
    } else {
      openURL(closure_4);
    }
  };
  return jsx(componentDidMount, {});
};