// === Module 11051: XboxInstallAlert ===

// Module 11051 (XboxInstallAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import componentDidMountDefault from "componentDidMount" /* 4898 */;
import XBOX_URL_BASE from "XBOX_URL_BASE" /* 10647 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

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
  const intl = _require(1236).intl;
  obj.title = intl.string(_require(1236).t["12Kx2v"]);
  const intl2 = _require(1236).intl;
  obj.body = intl2.string(_require(1236).t.msZW3j);
  const intl3 = _require(1236).intl;
  obj.confirmText = intl3.string(_require(1236).t["n+VrqG"]);
  const intl4 = _require(1236).intl;
  obj.cancelText = intl4.string(_require(1236).t.kYaBOg);
  obj.fillCancelText = true;
  obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
    return closure_1_5(lib(closure_1_2[7]).Icon, { source: closure_1_1(closure_1_2[8]), style: lib.externalLinkIcon });
  };
  obj.onConfirm = function onConfirm() {
    const obj = lib(500);
    const isAndroidResult = lib(500).isAndroid();
    const openURL = callback(4158).openURL;
    if (isAndroidResult) {
      openURL(closure_3);
    } else {
      openURL(closure_4);
    }
  };
  return jsx(componentDidMountDefault, {});
};