// discord_app/modules/parent_tools/native/FamilyCenterBannerButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import _modDef2486 from "../FamilyCenter.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import NativePermissionUtilsDefault from "../../native_permissions/NativePermissionUtils.tsx";
import shareGuardianConnectLink from "shareGuardianConnectLink.tsx";
import QrCodeIcon from "../../../design/components/Icon/native/redesign/generated/QrCodeIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

const require = globalThis.__r;

require = fn;
function FamilyCenterTeenQRCodeButtonInner() {
  const callback = stateFromStores1.useCallback(() => {
    const intl = getLinkCode(stateFromStores[12]).intl;
    getLinkCode(stateFromStores[11]).presentFailedToast(intl.string(getLinkCode(stateFromStores[12]).t.R0RpRX));
  }, []);
  const tmp = closure_14();
  getLinkCode = getLinkCode(stateFromStores[13]).useFamilyCenterActions().getLinkCode;
  let obj2 = getLinkCode(stateFromStores[13]);
  const getLinkCode2 = getLinkCode(stateFromStores[13]).useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj3 = getLinkCode(stateFromStores[13]);
  const items = [UserStore];
  stateFromStores = getLinkCode(stateFromStores[14]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = getLinkCode(stateFromStores[14]);
  const items1 = [FamilyCenterStore];
  stateFromStores1 = getLinkCode(stateFromStores[14]).useStateFromStores(items1, () => FamilyCenterStore.getLinkCode());
  const obj5 = getLinkCode(stateFromStores[14]);
  const items2 = [FamilyCenterStore];
  const stateFromStores2 = getLinkCode(stateFromStores[14]).useStateFromStores(items2, () =>
    FamilyCenterStore.getLinkCodeExpiresAt(),
  );
  const obj6 = getLinkCode(stateFromStores[14]);
  const userQRLinkUrl = getLinkCode(stateFromStores[10]).useUserQRLinkUrl();
  const effect = stateFromStores1.useEffect(() => {
    getLinkCode();
  }, []);
  getLinkCode2(stateFromStores[15])(stateFromStores2, getLinkCode);
  const items3 = [stateFromStores, stateFromStores1];
  const items4 = [stateFromStores1, stateFromStores2, getLinkCode2];
  const callback1 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != stateFromStores1;
    }
    if (tmp2) {
      const obj2 = { action: React7.ShareLink };
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
      const obj2 = { action: React7.ShowQRCodeModal };
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, obj2);
      const obj4 = { linkCode: stateFromStores1, expiresAt: stateFromStores2, onRefresh: getLinkCode2 };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14391, dependencyMap.paths), React5, obj4);
    }
  }, items4);
  const obj8 = {
    direction: "horizontal",
    spacing: getLinkCode2(stateFromStores[9]).space.PX_8,
    style: tmp.container,
    children: null,
  };
  const obj9 = {
    grow: true,
    shrink: true,
    size: "md",
    variant: "primary",
    text: null,
    disabled: null,
    onPress: null,
    icon: null,
    iconPosition: "start",
  };
  let intl = tmp3(tmp4[12]).intl;
  obj9.text = intl.string(getLinkCode(stateFromStores[12]).t.Ej3B3Y);
  obj9.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj9.onPress = callback1;
  obj9.icon = closure_12(getLinkCode(stateFromStores[23]).ShareIcon, {
    size: "sm",
    color: "control-primary-text-default",
  });
  const items5 = [closure_12(getLinkCode(stateFromStores[22]).Button, obj9)];
  const obj10 = {
    grow: true,
    shrink: true,
    size: "md",
    variant: "secondary",
    text: null,
    disabled: null,
    onPress: null,
    icon: null,
    iconPosition: "start",
  };
  const intl2 = tmp3(tmp4[12]).intl;
  obj10.text = intl2.string(getLinkCode2(stateFromStores[24]).wd4yrz);
  obj10.disabled = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj10.onPress = callback2;
  obj10.icon = closure_12(getLinkCode(stateFromStores[25]).QrCodeIcon, {
    size: "sm",
    color: "control-secondary-text-default",
  });
  items5[1] = closure_12(getLinkCode(stateFromStores[22]).Button, obj10);
  obj8.children = items5;
  return closure_13(getLinkCode(stateFromStores[21]).Stack, obj8);
}
class FamilyCenterBannerButton {
  constructor(arg0) {
    ({ onPress, text, loading } = global);
    tmp = closure_16();
    obj = { style: tmp.button, children: null };
    obj1 = {
      grow: true,
      shrink: true,
      size: "md",
      variant: "primary",
      text,
      onPress,
      loading,
      icon: null,
      iconPosition: "start",
    };
    obj4 = { style: tmp.art, size: "custom", color: "white" };
    obj1.icon = jsx(closure_0(closure_2[25]).QrCodeIcon, obj4);
    obj.children = jsx(closure_0(closure_2[22]).Button, obj1);
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const FamilyCenterConstants = fn(6953);
({
  CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: closure_7,
  FAMILY_CENTER_LINK_REQUEST_REGEX: closure_8,
  FamilyCenterAction: closure_9,
} = FamilyCenterConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const NativePermissionTypes = fn(5038).NativePermissionTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let createStyles = fn(4829);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 } };
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(4829);
const value = createStyles.createStyles({
  button: { height: 50, width: "100%", marginTop: 16 },
  art: { width: 18, height: 18, marginRight: 6 },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default FamilyCenterBannerButton;
export const FamilyCenterTeenQRCodeButton = function FamilyCenterTeenQRCodeButton() {
  let tmp = null;
  if (!obj.useHasMaxConnections()) {
    tmp = closure_1_12(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
};
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
            const result = handleQrCodeScanSucess(paths[28]).handleFamilyCenterQRCodeScan(
              pathname,
              "FamilyCenterQRCodeScan",
            );
            const obj4 = handleQrCodeScanSucess(paths[28]);
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
    const intl = tmp(1115).intl;
    obj2.text = intl.string(_modDef2486.z4a9HP);
    obj2.onPress = function onPress() {
      AnalyticsUtilsDefault.track(AnalyticEvents.FAMILY_CENTER_ACTION, { action: React7.ScanQRCodeButton });
      let obj2 = { action: React7.ScanQRCodeButton };
      const tmp5 = MetaQuestUtils.isMetaQuest() ? NativePermissionTypes.HEADSET_CAMERA : NativePermissionTypes.CAMERA;
      const permission = NativePermissionUtilsDefault.requestPermission(tmp5);
      permission.then((result) => {
        if (result) {
          const obj2 = { showHelp: false, onScanSuccess };
          require("ModalActionCreators").pushLazy(handleQrCodeScanSucess(paths[20])(paths[31], paths.paths), obj2);
          const obj = require("ModalActionCreators");
        }
      });
      const tmpResult = NativePermissionUtilsDefault;
    };
    return closure_12(FamilyCenterBannerButton, obj2);
  }
  obj = handleQrCodeScanSucess(8097);
  tmp = handleQrCodeScanSucess;
};
