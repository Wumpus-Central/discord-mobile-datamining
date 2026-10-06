// === Module 9475: XboxInstallAlert ===

// Module 9475 (XboxInstallAlert)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import LinkingDefault from "Linking" /* 4571 */;
import AlertDefault from "Alert" /* 5790 */;
import AssetRegistryDefault from "AssetRegistry" /* 8788 */;
import react from "react" /* 19 */;
import GameConsoleConstants from "GameConsoleConstants" /* 8781 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let size;
({ XBOX_ANDROID_APP_LINK: c3, XBOX_IOS_APP_LINK: closure_4 } = GameConsoleConstants);
const jsx = Fragment.jsx;
let obj = { externalLinkIcon: size };
size = { tintColor: nativeDefault.colors.WHITE, width: 20, height: 20, marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(10);
  const tmp4 = closure_6();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t["12Kx2v"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(require("intl").t.msZW3j);
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(require("intl").t["n+VrqG"]);
    const intl4 = tmp(1126).intl;
    const stringResult3 = intl4.string(require("intl").t.kYaBOg);
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
      const Icon = native.Icon;
      return <Icon source={AssetRegistryDefault} style={closure_0.externalLinkIcon} />;
    };
    cResult[4] = tmp4.externalLinkIcon;
    cResult[5] = fn;
    tmp13 = fn;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      const obj = closure_0(dependencyMap[10]);
      const isAndroidResult = obj.isAndroid();
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      if (isAndroidResult) {
        openURL(closure_1_3);
      } else {
        openURL(closure_1_4);
      }
    };
    cResult[6] = fn2;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === arg0) {
    let tmp15;
    if (cResult[8] === tmp13) {
      tmp15 = cResult[9];
    }
    return tmp15;
  }
  AlertDefault;
  const merged = Object.assign(arg0);
  const tmp18 = <tmp16 title={tmp5} body={tmp6} confirmText={tmp7} cancelText={tmp8} fillCancelText renderConfirmRightIcon={tmp13} onConfirm={tmp14} />;
  cResult[7] = arg0;
  cResult[8] = tmp13;
  cResult[9] = tmp18;
  tmp15 = tmp18;
}) : ((arg0) => {
  let closure_0;
  _require = closure_6();
  AlertDefault;
  const merged = Object.assign(arg0);
  const intl = require("intl").intl;
  const intl2 = require("intl").intl;
  const intl3 = require("intl").intl;
  const intl4 = require("intl").intl;
  return <tmp title={intl.string(require("intl").t["12Kx2v"])} body={intl2.string(require("intl").t.msZW3j)} confirmText={intl3.string(require("intl").t["n+VrqG"])} cancelText={intl4.string(require("intl").t.kYaBOg)} fillCancelText renderConfirmRightIcon={function renderConfirmRightIcon() {
    const Icon = native.Icon;
    return <Icon source={AssetRegistryDefault} style={closure_0.externalLinkIcon} />;
  }} onConfirm={function onConfirm() {
    const obj = closure_0(dependencyMap[10]);
    const isAndroidResult = obj.isAndroid();
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    if (isAndroidResult) {
      openURL(closure_1_3);
    } else {
      openURL(closure_1_4);
    }
  }} />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_console/native/XboxInstallAlert.tsx");

export default tmp4;