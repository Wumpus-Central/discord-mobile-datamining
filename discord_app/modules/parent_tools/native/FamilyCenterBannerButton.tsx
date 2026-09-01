// discord_app/modules/parent_tools/native/FamilyCenterBannerButton.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import QrCodeIcon from "../../../design/components/Icon/native/redesign/generated/QrCodeIcon.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/UserStore.tsx";
import closure_6 from "../FamilyCenterStore.tsx";
import items from "../FamilyCenterConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { NativePermissionTypes } from "../../native_permissions/NativePermissionConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function FamilyCenterTeenQRCodeButtonInner() {
  let obj = stateFromStores1;
  const callback = stateFromStores1.useCallback(() => {
    const intl = getLinkCode(stateFromStores[12]).intl;
    getLinkCode(stateFromStores[11]).presentFailedToast(intl.string(getLinkCode(stateFromStores[12]).t.R0RpRX));
  }, []);
  obj1 = getLinkCode(stateFromStores[13]);
  getLinkCode = obj1.useFamilyCenterActions().getLinkCode;
  const tmp = callback3();
  const getLinkCode2 = getLinkCode(stateFromStores[13]).useFamilyCenterActions({ onError: callback }).getLinkCode;
  let obj3 = getLinkCode(stateFromStores[13]);
  const items = [closure_5];
  stateFromStores = getLinkCode(stateFromStores[14]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj4 = getLinkCode(stateFromStores[14]);
  const items1 = [closure_6];
  stateFromStores1 = getLinkCode(stateFromStores[14]).useStateFromStores(items1, () => store.getLinkCode());
  const obj5 = getLinkCode(stateFromStores[14]);
  const items2 = [closure_6];
  const stateFromStores2 = getLinkCode(stateFromStores[14]).useStateFromStores(items2, () => store.getLinkCodeExpiresAt());
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
      let obj = getLinkCode2(stateFromStores[16]);
      obj = { action: null };
      obj[0] = closure_1_9.ShareLink;
      obj.track(closure_1_10.FAMILY_CENTER_ACTION, obj);
      const result = getLinkCode(stateFromStores[17]).shareGuardianConnectLink(stateFromStores, stateFromStores1);
      const obj3 = getLinkCode(stateFromStores[17]);
    }
  }, items3);
  const callback2 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores1;
    if (tmp2) {
      tmp2 = null != stateFromStores2;
    }
    if (tmp2) {
      let obj = getLinkCode2(stateFromStores[16]);
      obj = { action: null };
      obj[0] = closure_1_9.ShowQRCodeModal;
      obj.track(closure_1_10.FAMILY_CENTER_ACTION, obj);
      obj = { linkCode: null, expiresAt: null, onRefresh: null };
      obj[0] = stateFromStores1;
      obj[1] = stateFromStores2;
      obj[2] = getLinkCode2;
      getLinkCode2(stateFromStores[18]).openLazy(getLinkCode(stateFromStores[20])(stateFromStores[19], stateFromStores.paths), closure_1_7, obj);
      const obj3 = getLinkCode2(stateFromStores[18]);
    }
  }, items4);
  obj = { direction: "horizontal", spacing: tmp10(tmp4[9]).space.PX_8, style: tmp.container, children: null };
  obj = { grow: true, shrink: true, size: "md", variant: "primary", text: null, disabled: null, onPress: null, icon: null, iconPosition: "start" };
  let intl = tmp3(tmp4[12]).intl;
  obj[4] = intl.string(getLinkCode(stateFromStores[12]).t.Ej3B3Y);
  obj[5] = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj[6] = callback1;
  obj[7] = callback(getLinkCode(stateFromStores[23]).ShareIcon, { size: "sm", color: "control-primary-text-default" });
  const items5 = [callback(getLinkCode(stateFromStores[22]).Button, obj), ];
  obj1 = { grow: true, shrink: true, size: "md", variant: "secondary", text: null, disabled: null, onPress: null, icon: null, iconPosition: "start" };
  const intl2 = tmp3(tmp4[12]).intl;
  obj1[4] = intl2.string(getLinkCode2(stateFromStores[24]).wd4yrz);
  obj1[5] = null == userQRLinkUrl || null == stateFromStores1 || null == stateFromStores2;
  obj1[6] = callback2;
  obj1[7] = callback(getLinkCode(stateFromStores[25]).QrCodeIcon, { size: "sm", color: "control-secondary-text-default" });
  items5[1] = callback(getLinkCode(stateFromStores[22]).Button, obj1);
  obj[3] = items5;
  return callback2(getLinkCode(stateFromStores[21]).Stack, obj);
}
class FamilyCenterBannerButton {
  constructor(arg0) {
    ({ onPress, text, loading } = global);
    tmp = closure_16();
    obj = { style: tmp.button, children: null };
    obj = { grow: true, shrink: true, size: "md", variant: "primary", text, onPress, loading, icon: jsx(require("QrCodeIcon").QrCodeIcon, obj1), iconPosition: "start" };
    obj1 = { style: tmp.art, size: "custom", color: "white" };
    obj[1] = jsx(require("Button").Button, obj);
    return jsx(View, obj);
  }
}
({ CONNECT_GUARDIAN_BOTTOM_SHEET_KEY: error, FAMILY_CENTER_LINK_REQUEST_REGEX: closure_8, FamilyCenterAction: c9 } = items);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_16 = createCacheKey.createStyles({ button: { height: 50, width: "100%", marginTop: 16 }, art: { width: 18, height: 18, marginRight: 6 } });
let result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterBannerButton.tsx");

export default FamilyCenterBannerButton;
export const FamilyCenterTeenQRCodeButton = function FamilyCenterTeenQRCodeButton() {
  let tmp = null;
  if (!obj.useHasMaxConnections()) {
    tmp = callback(FamilyCenterTeenQRCodeButtonInner, {});
  }
  return tmp;
};
export const FamilyCenterParentQRCodeButton = function FamilyCenterParentQRCodeButton() {
  function handleQrCodeScanSucess(url) {
    let arr = callback(4723);
    arr = arr.pop();
    let toURLSafeResult = callback(1486).toURLSafe(url);
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
          if (null !== pathname.match(closure_8)) {
            const result = handleQrCodeScanSucess(11486).handleFamilyCenterQRCodeScan(pathname, "FamilyCenterQRCodeScan");
            const obj4 = handleQrCodeScanSucess(11486);
          }
          tmp4 = tmp6;
        }
        tmpResult = callback(1486);
      }
    }
    return tmp4;
  }
  let obj = handleQrCodeScanSucess(8772);
  if (obj.useHasMaxConnections()) {
    return null;
  } else {
    obj = { text: null, onPress: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(messagesProxyDefault.z4a9HP);
    obj[1] = function onPress() {
      let obj = closure_1_1(closure_1_2[16]);
      obj = { action: closure_1_9.ScanQRCodeButton };
      obj.track(closure_1_10.FAMILY_CENTER_ACTION, obj);
      const obj3 = handleQrCodeScanSucess(closure_1_2[29]);
      const tmp = closure_1_1;
      const tmp2 = closure_1_2;
      const tmp5 = handleQrCodeScanSucess(closure_1_2[29]).isMetaQuest() ? closure_1_11.HEADSET_CAMERA : closure_1_11.CAMERA;
      const permission = tmp(tmp2[30]).requestPermission(tmp5);
      permission.then((arg0) => {
        if (arg0) {
          let obj = closure_1_1(closure_1_2[26]);
          obj = { showHelp: false, onScanSuccess: null };
          obj[1] = closure_0;
          obj.pushLazy(closure_1_0(closure_1_2[20])(closure_1_2[31], closure_1_2.paths), obj);
        }
      });
    };
    return callback(FamilyCenterBannerButton, obj);
  }
  tmp = handleQrCodeScanSucess;
};