// === Module 9859: XboxInstallAlert ===

// Module 9859 (XboxInstallAlert)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import componentDidMountDefault from "componentDidMount" /* 4763 */;
import registerAssetDefault from "registerAsset" /* 9841 */;
import XBOX_URL_BASE from "XBOX_URL_BASE" /* 9763 */;
import { jsx } from "jsxProd" /* 21 */;
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