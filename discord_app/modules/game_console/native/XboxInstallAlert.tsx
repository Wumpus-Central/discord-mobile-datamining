// === Module 11125: XboxInstallAlert ===

// Module 11125 (XboxInstallAlert)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import LinkingDefault from "Linking" /* 4806 */;
import common_AlertDefault from "common/Alert" /* 5398 */;
import _modDef11126 from "module_11126" /* 11126 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const GameConsoleConstants = fn(9221);
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: closure_4 } = GameConsoleConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { externalLinkIcon: null };
let size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
obj2.externalLinkIcon = size;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function XboxInstallAlert(arg0) {
  const cResult = require("c").c(10);
  const tmp4 = closure_6();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["12Kx2v"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.msZW3j);
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp(1126).t["n+VrqG"]);
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(tmp(1126).t.kYaBOg);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    cResult[2] = stringResult2;
    cResult[3] = stringResult3;
    tmp5 = stringResult;
    tmp6 = stringResult1;
    tmp7 = stringResult2;
    tmp8 = stringResult3;
  } else {
    [tmp5, tmp6, tmp7, tmp8] = cResult;
  }
  if (cResult[4] !== tmp4.externalLinkIcon) {
    const fn = function _() {
      return jsx(native.Icon, { source: _modDef11126, style: closure_0.externalLinkIcon });
    };
    cResult[4] = tmp4.externalLinkIcon;
    cResult[5] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      const obj = closure_0(1382);
      const isAndroidResult = closure_0(1382).isAndroid();
      const openURL = LinkingDefault.openURL;
      if (isAndroidResult) {
        openURL(closure_1_3);
      } else {
        openURL(closure_1_4);
      }
    };
    cResult[6] = fn2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === arg0) {
    if (cResult[8] === tmp13) {
      let tmp15 = cResult[9];
    }
    return tmp15;
  }
  const obj2 = {};
  let obj = require("c");
  const merged = Object.assign(arg0);
  obj2.title = tmp5;
  obj2.body = tmp6;
  obj2.confirmText = tmp7;
  obj2.cancelText = tmp8;
  obj2.fillCancelText = true;
  obj2.renderConfirmRightIcon = tmp13;
  obj2.onConfirm = tmp14;
  const tmp18 = jsx(common_AlertDefault, {});
  cResult[7] = arg0;
  cResult[8] = tmp13;
  cResult[9] = tmp18;
  tmp15 = tmp18;
}) : (function XboxInstallAlert(arg0) {
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
    return jsx(native.Icon, { source: _modDef11126, style: closure_0.externalLinkIcon });
  };
  obj.onConfirm = function onConfirm() {
    const obj = closure_0(1382);
    const isAndroidResult = closure_0(1382).isAndroid();
    const openURL = LinkingDefault.openURL;
    if (isAndroidResult) {
      openURL(closure_1_3);
    } else {
      openURL(closure_1_4);
    }
  };
  return jsx(common_AlertDefault, {});
});