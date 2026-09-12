// === Module 9592: XboxInstallAlert ===

// Module 9592 (XboxInstallAlert)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import LinkingDefault from "Linking" /* 4331 */;
import common_AlertDefault from "common/Alert" /* 5075 */;
import _modDef9574 from "module_9574" /* 9574 */;
import noop from "module_19" /* 19 */;

require = fn;
const GameConsoleConstants = fn(9362);
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: closure_4 } = GameConsoleConstants);
const jsx = fn(21).jsx;
fn(4636);
const createStyles = { externalLinkIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
createStyles.externalLinkIcon = size;
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default function XboxInstallAlert(arg0) {
  _require = closure_6();
  let obj = {};
  const merged = Object.assign(arg0);
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t["12Kx2v"]);
  const intl2 = require("util").intl;
  obj.body = intl2.string(require("util").t.msZW3j);
  const intl3 = require("util").intl;
  obj.confirmText = intl3.string(require("util").t["n+VrqG"]);
  const intl4 = require("util").intl;
  obj.cancelText = intl4.string(require("util").t.kYaBOg);
  obj.fillCancelText = true;
  obj.renderConfirmRightIcon = function renderConfirmRightIcon() {
    return jsx(native.Icon, { source: _modDef9574, style: closure_0.externalLinkIcon });
  };
  obj.onConfirm = function onConfirm() {
    const obj = closure_0(1150);
    const isAndroidResult = closure_0(1150).isAndroid();
    const openURL = LinkingDefault.openURL;
    if (isAndroidResult) {
      openURL(closure_1_3);
    } else {
      openURL(closure_1_4);
    }
  };
  return jsx(common_AlertDefault, {});
};