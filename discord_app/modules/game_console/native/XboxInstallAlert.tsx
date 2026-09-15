// === Module 9594: XboxInstallAlert ===

// Module 9594 (XboxInstallAlert)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4334 */;
import common_AlertDefault from "common/Alert" /* 5078 */;
import _modDef9576 from "module_9576" /* 9576 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const GameConsoleConstants = fn(9365);
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: closure_4 } = GameConsoleConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
const obj2 = { externalLinkIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
obj2.externalLinkIcon = size;
let closure_6 = createStyles.createStyles(obj2);
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
    return jsx(native.Icon, { source: _modDef9576, style: closure_0.externalLinkIcon });
  };
  obj.onConfirm = function onConfirm() {
    const obj = closure_0(1364);
    const isAndroidResult = closure_0(1364).isAndroid();
    const openURL = LinkingDefault.openURL;
    if (isAndroidResult) {
      openURL(closure_1_3);
    } else {
      openURL(closure_1_4);
    }
  };
  return jsx(common_AlertDefault, {});
};