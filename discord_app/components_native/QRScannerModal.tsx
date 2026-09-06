// discord_app/components_native/QRScannerModal.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import util from "../intl/index.native.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import useSafeAreaInsetsDefault from "../modules/safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../_runtime/01896_asyncRequireImpl.js";
import LinkingDefault from "../lib/native/Linking.tsx";
import ModalActionCreatorsDefault from "../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../actions/native/AlertActionCreators.tsx";
import _modDef7089 from "../../_runtime/metro/07089__.js";
import openUserSettings from "../modules/user_settings/core/native/openUserSettings.tsx";
import TouchableHitBoxDefault from "../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import FamilyCenterNativeUtils from "../modules/parent_tools/native/FamilyCenterNativeUtils.tsx";
import QRLoginUtils from "../modules/remote_auth/QRLoginUtils.tsx";
import QRScannerNativeComponentDefault from "../../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
function DCDQRScanner(arg0) {
  const merged = Object.assign(arg0);
  return React6(importDefaultResult, {});
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, requireNativeComponent } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_7 = fn(7538).FAMILY_CENTER_LINK_REQUEST_REGEX;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = QRScannerNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
PlatformUtils = {
  scanner: { position: "absolute", height: "100%", width: "100%" },
  closeButton: { marginLeft: 8 },
  emptyView: null,
  showHelp: null,
  text: null,
};
PlatformUtils = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
PlatformUtils.emptyView = PlatformUtils;
PlatformUtils.showHelp = {
  marginLeft: 16,
  marginRight: 16,
  marginTop: "auto",
  borderRadius: 16,
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 16,
  paddingRight: 16,
};
let obj1 = {
  marginLeft: 16,
  marginRight: 16,
  marginTop: "auto",
  borderRadius: 16,
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500,
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 16,
  paddingRight: 16,
};
PlatformUtils.text = { color: nativeDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  showHelp = showHelp.showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  [tmp3, importDefault] = _slicedToArray(noop.useState(true), 2);
  const effect = noop.useEffect(() => {
    closure_0 = onScanSuccess(dependencyMap[9]).runAfterInteractions(() => {
      closure_1_1(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  const tmp = undefined !== showHelp && showHelp;
  const tmp2 = _slicedToArray(noop.useState(true), 2);
  let obj = { style: { flex: 1 }, children: null };
  ({ bottom, top } = useSafeAreaInsetsDefault());
  if (tmp3) {
    obj = { style: null };
    const items = [,];
    ({ scanner: arr[0], emptyView: arr[1] } = PlatformUtils);
    obj.style = items;
    let tmp10Result = closure_8(closure_5, obj);
    let tmp12 = PlatformUtils;
    let tmp14 = closure_8;
  } else {
    obj = { style: null, pointerEvents: "none", onQRCodeFound: null };
    tmp12 = PlatformUtils;
    obj.style = PlatformUtils.scanner;
    obj.onQRCodeFound = function onQRCodeFound(nativeEvent) {
      if (constants.SUCCEEDED === nativeEvent.nativeEvent.status) {
        if (undefined !== onScanSuccess) {
          tmp2(nativeEvent.nativeEvent.result);
        } else {
          let url = URLUtilsDefault.toURLSafe(nativeEvent.nativeEvent.result);
          if (url == null) {
            url = {};
          }
          let obj = QRLoginUtils;
          const result = obj.findRemoteAuthFingerprint(url.hostname, str);
          if (null != result) {
            let tmp21Result = ModalActionCreatorsDefault;
            tmp21Result.pop();
            tmp21Result = ModalActionCreatorsDefault;
            obj = { remoteAuthFingerprint: result };
            tmp21Result.pushLazy(asyncRequireImpl(13863, dependencyMap.paths), obj);
          } else {
            let match;
            if (str != null) {
              match = str.match(closure_7);
            }
            if (null != match) {
              if (null != str) {
                ModalActionCreatorsDefault.pop();
                let tmp3Result = openUserSettings;
                obj = { screen: UserSettingsSections.FAMILY_CENTER };
                tmp3Result.openUserSettings(obj);
                tmp3Result = FamilyCenterNativeUtils;
                const result1 = tmp3Result.handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
                const tmp21Result1 = ModalActionCreatorsDefault;
              }
            }
            LinkingDefault.openURL(nativeEvent.nativeEvent.result, undefined, false);
            let tmp9 = importDefault;
            const tmp21Result2 = LinkingDefault;
          }
        }
      } else {
        const FAILED = tmp.FAILED;
        const obj1 = { body: null, title: null };
        const intl = util.intl;
        obj1.body = intl.string(util.t.QOQlWa);
        const intl2 = util.intl;
        obj1.title = intl2.string(util.t["6S318H"]);
        actions_AlertActionCreatorsDefault.show(obj1);
        tmp9 = importDefault;
      }
      tmp9(4763).pop();
      const tmp9Result = tmp9(4763);
    };
    tmp10Result = closure_8(DCDQRScanner, obj);
    tmp14 = closure_8;
  }
  const items1 = [tmp10Result, ,];
  let obj1 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp7 = useSafeAreaInsetsDefault();
  let intl = onScanSuccess(1114).intl;
  obj1.accessibilityLabel = intl.string(onScanSuccess(1114).t.cpT0Cq);
  obj1.source = _modDef7089;
  const items2 = [tmp12.closeButton, { marginTop: top }];
  obj1.style = items2;
  obj1.onPress = ModalActionCreatorsDefault.pop;
  items1[1] = tmp14(TouchableHitBoxDefault, obj1);
  let tmp14Result = null;
  if (tmp) {
    tmp14Result = null;
    if (!tmp3) {
      const obj2 = { style: null, children: null };
      const items3 = [tmp12.showHelp];
      const obj3 = { marginBottom: bottom + 8 };
      items3[1] = obj3;
      obj2.style = items3;
      const obj4 = { style: tmp12.text, children: null };
      let intl2 = tmp17(1114).intl;
      obj4.children = intl2.string(tmp17(1114).t.dklV0G);
      obj2.children = tmp14(tmp17(1178).LegacyText, obj4);
      tmp14Result = tmp14(closure_5, obj2);
    }
  }
  items1[2] = tmp14Result;
  obj.children = items1;
  return closure_9(closure_5, obj);
}
