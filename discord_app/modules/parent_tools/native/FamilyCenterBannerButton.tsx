// === Module 14684: FamilyCenterBannerButton ===

// Module 14684 (FamilyCenterBannerButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef2493 from "module_2493" /* 2493 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5099 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7275 */;
import useUserLinks from "useUserLinks" /* 8295 */;
import shareGuardianConnectLink from "shareGuardianConnectLink" /* 14686 */;
import QrCodeIcon from "QrCodeIcon" /* 14690 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
function FamilyCenterTeenQRCodeButtonInner() {
  let currentUser;
  let getLinkCode;
  let intl;
  let intl2;
  let items5;
  let stateFromStores;
  let stateFromStores1;
  let obj = stateFromStores1;
  const tmp = closure_14();
  const callback = stateFromStores1.useCallback(() => {
    const presentFailedToast = getLinkCode(stateFromStores[13]).presentFailedToast;
    getLinkCode(stateFromStores[13]);
    const intl = getLinkCode(stateFromStores[14]).intl;
    presentFailedToast(intl.string(getLinkCode(stateFromStores[14]).t.R0RpRX));
  }, []);
  let obj2 = getLinkCode(stateFromStores[15]);
  getLinkCode = obj2.useFamilyCenterActions().getLinkCode;
  let obj3 = getLinkCode(stateFromStores[15]);
  const getLinkCode2 = obj3.useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj4 = getLinkCode(stateFromStores[16]);
  const items = [UserStore];
  stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [FamilyCenterStore];
  const obj5 = getLinkCode(stateFromStores[16]);
  stateFromStores1 = obj5.useStateFromStores(items1, () => FamilyCenterStore.getLinkCode());
  const items2 = [FamilyCenterStore];
  const obj6 = getLinkCode(stateFromStores[16]);
  const stateFromStores2 = obj6.useStateFromStores(items2, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const obj7 = getLinkCode(stateFromStores[12]);
  const userQRLinkUrl = obj7.useUserQRLinkUrl();
  const effect = stateFromStores1.useEffect(() => {
    getLinkCode();
  }, []);
  getLinkCode2(stateFromStores[17])(stateFromStores2, getLinkCode);
  const items3 = [stateFromStores, stateFromStores1];
  const items4 = [stateFromStores1, stateFromStores2, getLinkCode2];
  const callback1 = obj.useCallback(() => {
    const tmp2 = null != stateFromStores && null != stateFromStores1;
    if (tmp2) {
      const obj2 = { action: React4.ShareLink };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const obj3 = shareGuardianConnectLink;
      const result = obj3.shareGuardianConnectLink(stateFromStores, stateFromStores1);
    }
  }, items3);
  const callback2 = obj.useCallback(() => {
    const tmp2 = null != stateFromStores1 && null != stateFromStores2;
    if (tmp2) {
      const obj2 = { action: React4.ShowQRCodeModal };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const obj4 = { linkCode: stateFromStores1, expiresAt: stateFromStores2, onRefresh: getLinkCode2 };
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(14687, dependencyMap.paths), metroImportDefault, obj4);
    }
  }, items4);
  const obj8 = { direction: "horizontal", spacing: getLinkCode2(stateFromStores[9]).space.PX_8, style: tmp.container, children: items5 };
  const Stack = tmp3(tmp4[23]).Stack;
  const obj9 = { grow: true, shrink: true, size: "md", variant: "primary", text: intl.string(getLinkCode(stateFromStores[14]).t.Ej3B3Y), disabled: null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2, onPress: callback1, icon: closure_12(getLinkCode(stateFromStores[25]).ShareIcon, { size: "sm", color: "control-primary-text-default" }), iconPosition: "start" };
  const Button = tmp3(tmp4[24]).Button;
  intl = tmp3(tmp4[14]).intl;
  items5 = [closure_12(Button, obj9), ];
  const obj10 = { grow: true, shrink: true, size: "md", variant: "secondary", text: intl2.string(getLinkCode2(stateFromStores[26]).wd4yrz), disabled: null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2, onPress: callback2, icon: closure_12(getLinkCode(stateFromStores[27]).QrCodeIcon, { size: "sm", color: "control-secondary-text-default" }), iconPosition: "start" };
  const Button2 = tmp3(tmp4[24]).Button;
  intl2 = tmp3(tmp4[14]).intl;
  items5[1] = closure_12(Button2, obj10);
  return closure_13(Stack, obj8);
}
const View = react_native.View;
({ CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: metroImportDefault, FAMILY_CENTER_LINK_REQUEST_REGEX: metroImportAll, FamilyCenterAction: c9 } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const NativePermissionTypes = NativePermissionConstants.NativePermissionTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = react2;
  const cResult = obj.c(1);
  let tmp2 = null;
  const obj2 = useUserLinks;
  if (!obj2.useHasMaxConnections()) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp7 = closure_12(FamilyCenterTeenQRCodeButtonInner, {});
      cResult[0] = tmp7;
      first = tmp7;
    } else {
      first = cResult[0];
    }
    tmp2 = first;
  }
  return tmp2;
}) : (() => {
  let tmp = null;
  const obj = useUserLinks;
  if (!obj.useHasMaxConnections()) {
    tmp = closure_12(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
});
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles({ button: { height: 50, width: "100%", marginTop: 16 }, art: { width: 18, height: 18, marginRight: 6 } });
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let loading;
  let onPress;
  let text;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(10);
  ({ onPress, text, loading } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] !== tmp4.art) {
    const obj2 = { style: tmp4.art, size: "custom", color: "white" };
    const tmp7 = closure_12(QrCodeIcon.QrCodeIcon, obj2);
    cResult[0] = tmp4.art;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === loading) {
    if (cResult[3] === onPress) {
      if (cResult[4] === tmp5) {
        let tmp8;
        if (cResult[5] === text) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === tmp4.button) {
          let tmp10;
          if (cResult[8] === tmp8) {
            tmp10 = cResult[9];
          }
          return tmp10;
        }
        const obj3 = { style: tmp4.button, children: tmp8 };
        const tmp13 = closure_12(View, obj3);
        cResult[7] = tmp4.button;
        cResult[8] = tmp8;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const tmp9 = closure_12(components_Button_Button.Button, { grow: true, shrink: true, size: "md", variant: "primary", text, onPress, loading, icon: tmp5, iconPosition: "start" });
  cResult[2] = loading;
  cResult[3] = onPress;
  cResult[4] = tmp5;
  cResult[5] = text;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let Button;
  let loading;
  let obj2;
  let obj3;
  let onPress;
  let text;
  ({ onPress, text, loading } = arg0);
  const tmp = closure_16();
  const obj = { style: tmp.button, children: closure_12(Button, obj2) };
  obj2 = { grow: true, shrink: true, size: "md", variant: "primary", text, onPress, loading, icon: closure_12(QrCodeIcon.QrCodeIcon, obj3), iconPosition: "start" };
  Button = components_Button_Button.Button;
  obj3 = { style: tmp.art, size: "custom", color: "white" };
  return closure_12(View, obj);
});
let closure_17 = tmp5;
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default tmp5;
export const FamilyCenterTeenQRCodeButton = tmp4;
export const FamilyCenterParentQRCodeButton = function FamilyCenterParentQRCodeButton() {
  let intl;
  let paths;
  function handleQrCodeScanSucess(dependencyMap) {
    let hostname;
    let pathname;
    const arr = require("ModalActionCreators");
    arr.pop();
    const obj = require("URLUtils");
    let toURLSafeResult = obj.toURLSafe(dependencyMap);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ hostname, pathname } = toURLSafeResult);
    let tmp4 = null;
    if (null != hostname) {
      tmp4 = null;
      if (null != pathname) {
        tmp4 = null;
        const tmpResult = require("URLUtils");
        if (tmpResult.isDiscordHostname(hostname)) {
          if (null !== pathname.match(closure_1_8)) {
            const obj4 = handleQrCodeScanSucess(paths[30]);
            const result = obj4.handleFamilyCenterQRCodeScan(pathname, "FamilyCenterQRCodeScan");
          }
          tmp4 = tmp6;
        }
      }
    }
    return tmp4;
  }
  let tmp = handleQrCodeScanSucess;
  let obj = handleQrCodeScanSucess(8295);
  if (obj.useHasMaxConnections()) {
    const tmp6 = null;
    return null;
  } else {
    let obj2 = {
      text: intl.string(_modDef2493.z4a9HP),
      onPress() {
          let onScanSuccess;
          let obj = AnalyticsUtilsDefault;
          let obj2 = { action: React4.ScanQRCodeButton };
          obj.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
          const obj3 = MetaQuestUtils;
          const tmp5 = obj3.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
          const tmpResult = NativePermissionUtilsDefault;
          const permission = tmpResult.requestPermission(tmp5);
          permission.then((result) => {
            const tmp = result;
            if (tmp) {
              const obj2 = { showHelp: false, onScanSuccess };
              const obj = require("ModalActionCreators");
              obj.pushLazy(handleQrCodeScanSucess(paths[22])(paths[33], paths.paths), obj2);
            }
          });
        }
    };
    intl = tmp(1126).intl;
    return closure_12(closure_17, obj2);
  }
};