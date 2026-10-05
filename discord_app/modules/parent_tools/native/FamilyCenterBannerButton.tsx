// === Module 14684: FamilyCenterBannerButton ===

// Module 14684 (FamilyCenterBannerButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import _modDef2493 from "module_2493" /* 2493 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import NativePermissionUtilsDefault from "NativePermissionUtils" /* 7275 */;
import useUserLinks from "useUserLinks" /* 8295 */;
import shareGuardianConnectLink from "shareGuardianConnectLink" /* 14686 */;
import QrCodeIcon from "QrCodeIcon" /* 14690 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;

const require = globalThis.__r;

require = fn;
function FamilyCenterTeenQRCodeButtonInner() {
  const callback = stateFromStores1.useCallback(() => {
    const intl = getLinkCode(stateFromStores[14]).intl;
    getLinkCode(stateFromStores[13]).presentFailedToast(intl.string(getLinkCode(stateFromStores[14]).t.R0RpRX));
  }, []);
  const tmp = closure_14();
  getLinkCode = getLinkCode(stateFromStores[15]).useFamilyCenterActions().getLinkCode;
  let obj2 = getLinkCode(stateFromStores[15]);
  const getLinkCode2 = getLinkCode(stateFromStores[15]).useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj3 = getLinkCode(stateFromStores[15]);
  const items = [UserStore];
  stateFromStores = getLinkCode(stateFromStores[16]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = getLinkCode(stateFromStores[16]);
  const items1 = [FamilyCenterStore];
  stateFromStores1 = getLinkCode(stateFromStores[16]).useStateFromStores(items1, () => FamilyCenterStore.getLinkCode());
  const obj5 = getLinkCode(stateFromStores[16]);
  const items2 = [FamilyCenterStore];
  const stateFromStores2 = getLinkCode(stateFromStores[16]).useStateFromStores(items2, () => FamilyCenterStore.getLinkCodeExpiresAt());
  const obj6 = getLinkCode(stateFromStores[16]);
  const userQRLinkUrl = getLinkCode(stateFromStores[12]).useUserQRLinkUrl();
  const effect = stateFromStores1.useEffect(() => {
    getLinkCode();
  }, []);
  getLinkCode2(stateFromStores[17])(stateFromStores2, getLinkCode);
  const items3 = [stateFromStores, stateFromStores1];
  const items4 = [stateFromStores1, stateFromStores2, getLinkCode2];
  const callback1 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != stateFromStores1;
    }
    if (tmp2) {
      const obj2 = { action: options.ShareLink };
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const result = shareGuardianConnectLink.shareGuardianConnectLink(stateFromStores, stateFromStores1);
    }
  }, items3);
  const callback2 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores1;
    if (tmp2) {
      tmp2 = null != stateFromStores2;
    }
    if (tmp2) {
      const obj2 = { action: options.ShowQRCodeModal };
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const obj4 = { linkCode: stateFromStores1, expiresAt: stateFromStores2, onRefresh: getLinkCode2 };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14687, dependencyMap.paths), React5, obj4);
    }
  }, items4);
  const obj8 = { direction: "horizontal", spacing: getLinkCode2(stateFromStores[9]).space.PX_8, style: tmp.container, children: null };
  const obj9 = { grow: true, shrink: true, size: "md", variant: "primary", text: null, disabled: null, onPress: null, icon: null, iconPosition: "start" };
  let intl = tmp3(tmp4[14]).intl;
  obj9.text = intl.string(getLinkCode(stateFromStores[14]).t.Ej3B3Y);
  obj9.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj9.onPress = callback1;
  obj9.icon = closure_12(getLinkCode(stateFromStores[25]).ShareIcon, { size: "sm", color: "control-primary-text-default" });
  const items5 = [closure_12(getLinkCode(stateFromStores[24]).Button, obj9), ];
  const obj10 = { grow: true, shrink: true, size: "md", variant: "secondary", text: null, disabled: null, onPress: null, icon: null, iconPosition: "start" };
  const intl2 = tmp3(tmp4[14]).intl;
  obj10.text = intl2.string(getLinkCode2(stateFromStores[26]).wd4yrz);
  obj10.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj10.onPress = callback2;
  obj10.icon = closure_12(getLinkCode(stateFromStores[27]).QrCodeIcon, { size: "sm", color: "control-secondary-text-default" });
  items5[1] = closure_12(getLinkCode(stateFromStores[24]).Button, obj10);
  obj8.children = items5;
  return closure_13(getLinkCode(stateFromStores[23]).Stack, obj8);
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7049);
({ CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: closure_7, FAMILY_CENTER_LINK_REQUEST_REGEX: closure_8, FamilyCenterAction: closure_9 } = FamilyCenterConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const NativePermissionTypes = fn(5099).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4890);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 } };
let closure_14 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_16 };
createStyles = fn(4890);
let closure_16 = createStyles.createStyles({ button: { height: 50, width: "100%", marginTop: 16 }, art: { width: 18, height: 18, marginRight: 6 } });
const ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(10);
  ({ onPress, text, loading } = arg0);
  const tmp4 = closure_16();
  if (cResult[0] !== tmp4.art) {
    const obj2 = { style: tmp4.art, size: "custom", color: "white" };
    const tmp7 = __initData(QrCodeIcon.QrCodeIcon, obj2);
    cResult[0] = tmp4.art;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === loading) {
    if (cResult[3] === onPress) {
      if (cResult[4] === tmp5) {
        if (cResult[5] === text) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === tmp4.button) {
          if (cResult[8] === tmp8) {
            let tmp10 = cResult[9];
          }
          return tmp10;
        }
        const obj3 = { style: tmp4.button, children: tmp8 };
        const tmp13 = __initData(View, obj3);
        cResult[7] = tmp4.button;
        cResult[8] = tmp8;
        cResult[9] = tmp13;
        tmp10 = tmp13;
      }
    }
  }
  const tmp9 = __initData(components_Button_Button.Button, { grow: true, shrink: true, size: "md", variant: "primary", text, onPress, loading, icon: tmp5, iconPosition: "start" });
  cResult[2] = loading;
  cResult[3] = onPress;
  cResult[4] = tmp5;
  cResult[5] = text;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  ({ onPress, text, loading } = arg0);
  const tmp = closure_16();
  const obj = { style: tmp.button, children: null };
  const obj2 = { grow: true, shrink: true, size: "md", variant: "primary", text, onPress, loading, icon: __initData(QrCodeIcon.QrCodeIcon, { style: tmp.art, size: "custom", color: "white" }), iconPosition: "start" };
  obj.children = __initData(components_Button_Button.Button, obj2);
  return __initData(View, obj);
});
let closure_17 = tmp5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default tmp5;
export const FamilyCenterTeenQRCodeButton = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (obj2.useHasMaxConnections()) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp6 = __initData(FamilyCenterTeenQRCodeButtonInner, {});
      cResult[0] = tmp6;
      let first = tmp6;
    } else {
      first = cResult[0];
    }
  }
  obj2 = useUserLinks;
}) : (() => {
  let tmp = null;
  if (!obj.useHasMaxConnections()) {
    tmp = __initData(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
});
export const FamilyCenterParentQRCodeButton = function FamilyCenterParentQRCodeButton() {
  function handleQrCodeScanSucess(dependencyMap) {
    require("ModalActionCreators").pop();
    const arr = require("ModalActionCreators");
    let toURLSafeResult = require("URLUtils").toURLSafe(dependencyMap);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ hostname, pathname } = toURLSafeResult);
    let tmp4 = null;
    if (null != hostname) {
      tmp4 = null;
      if (null != pathname) {
        tmp4 = null;
        if (tmpResult.isDiscordHostname(hostname)) {
          if (null !== pathname.match(closure_1_8)) {
            const result = handleQrCodeScanSucess(paths[30]).handleFamilyCenterQRCodeScan(pathname, "FamilyCenterQRCodeScan");
            const obj4 = handleQrCodeScanSucess(paths[30]);
          }
          tmp4 = tmp6;
        }
        tmpResult = require("URLUtils");
      }
    }
    return tmp4;
  }
  if (obj.useHasMaxConnections()) {
    return null;
  } else {
    let obj2 = { text: null, onPress: null };
    const intl = tmp(1126).intl;
    obj2.text = intl.string(_modDef2493.z4a9HP);
    obj2.onPress = function onPress() {
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, { action: options.ScanQRCodeButton });
      let obj2 = { action: options.ScanQRCodeButton };
      const tmp5 = MetaQuestUtils.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
      const permission = NativePermissionUtilsDefault.requestPermission(tmp5);
      permission.then((result) => {
        if (result) {
          const obj2 = { showHelp: false, onScanSuccess };
          require("ModalActionCreators").pushLazy(handleQrCodeScanSucess(paths[22])(paths[33], paths.paths), obj2);
          const obj = require("ModalActionCreators");
        }
      });
      const tmpResult = NativePermissionUtilsDefault;
    };
    return closure_12(closure_17, obj2);
  }
  obj = handleQrCodeScanSucess(8295);
  tmp = handleQrCodeScanSucess;
};