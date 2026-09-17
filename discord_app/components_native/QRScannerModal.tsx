// === Module 13982: QRScannerModal ===

// Module 13982 (QRScannerModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import URLUtilsDefault from "URLUtils" /* 1366 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import LinkingDefault from "Linking" /* 4334 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4843 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4985 */;
import _modDef7203 from "module_7203" /* 7203 */;
import openUserSettings from "openUserSettings" /* 7496 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9204 */;
import FamilyCenterNativeUtils from "FamilyCenterNativeUtils" /* 12065 */;
import QRLoginUtils from "QRLoginUtils" /* 13963 */;
import QRScannerNativeComponentDefault from "QRScannerNativeComponent" /* 13983 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function DCDQRScanner(arg0) {
  const merged = Object.assign(arg0);
  return React6(importDefaultResult, {});
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, requireNativeComponent } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
let closure_7 = fn(7652).FAMILY_CENTER_LINK_REQUEST_REGEX;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PlatformUtils = fn(1364);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = QRScannerNativeComponentDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
let obj2 = { scanner: { position: "absolute", height: "100%", width: "100%" }, closeButton: { marginLeft: 8 }, emptyView: { backgroundColor: nativeDefault.unsafe_rawColors.BLACK }, showHelp: null, text: null };
let obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj2.showHelp = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
let obj4 = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: nativeDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
obj2.text = { color: nativeDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  showHelp = showHelp.showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  [tmp3, importDefault] = noop.useState(true);
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
    obj2 = { style: null };
    const items = [, ];
    ({ scanner: arr[0], emptyView: arr[1] } = obj2);
    obj2.style = items;
    let tmp10Result = closure_8(closure_5, obj2);
    let tmp12 = obj2;
    let tmp14 = closure_8;
  } else {
    let obj3 = { style: null, pointerEvents: "none", onQRCodeFound: null };
    tmp12 = obj2;
    obj3.style = obj2.scanner;
    obj3.onQRCodeFound = function onQRCodeFound(nativeEvent) {
      if (constants.SUCCEEDED === nativeEvent.nativeEvent.status) {
        if (undefined !== onScanSuccess) {
          tmp2(nativeEvent.nativeEvent.result);
        } else {
          let url = URLUtilsDefault.toURLSafe(nativeEvent.nativeEvent.result);
          if (url == null) {
            url = {};
          }
          const result = QRLoginUtils.findRemoteAuthFingerprint(url.hostname, str);
          if (null != result) {
            ModalActionCreatorsDefault.pop();
            const tmp21Result = ModalActionCreatorsDefault;
            obj2 = { remoteAuthFingerprint: result };
            ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13978, dependencyMap.paths), obj2);
            const tmp21Result4 = ModalActionCreatorsDefault;
          } else {
            let match;
            if (str != null) {
              match = str.match(closure_7);
            }
            if (null != match) {
              if (null != str) {
                ModalActionCreatorsDefault.pop();
                const tmp21Result5 = ModalActionCreatorsDefault;
                const obj3 = { screen: UserSettingsSections.FAMILY_CENTER };
                openUserSettings.openUserSettings(obj3);
                const tmp3Result = openUserSettings;
                const result1 = FamilyCenterNativeUtils.handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
                const tmp3Result2 = FamilyCenterNativeUtils;
              }
            }
            LinkingDefault.openURL(nativeEvent.nativeEvent.result, undefined, false);
            let tmp9 = importDefault;
            const tmp21Result6 = LinkingDefault;
          }
        }
      } else {
        const FAILED = tmp.FAILED;
        const obj4 = { body: null, title: null };
        const intl = util.intl;
        obj4.body = intl.string(util.t.QOQlWa);
        const intl2 = util.intl;
        obj4.title = intl2.string(util.t["6S318H"]);
        actions_AlertActionCreatorsDefault.show(obj4);
        tmp9 = importDefault;
      }
      tmp9(4843).pop();
      const tmp9Result = tmp9(4843);
    };
    tmp10Result = closure_8(DCDQRScanner, obj3);
    tmp14 = closure_8;
  }
  const items1 = [tmp10Result, , ];
  let obj4 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp7 = useSafeAreaInsetsDefault();
  let intl = onScanSuccess(1115).intl;
  obj4.accessibilityLabel = intl.string(onScanSuccess(1115).t.cpT0Cq);
  obj4.source = _modDef7203;
  const items2 = [tmp12.closeButton, { marginTop: top }];
  obj4.style = items2;
  obj4.onPress = ModalActionCreatorsDefault.pop;
  items1[1] = tmp14(TouchableHitBoxDefault, obj4);
  let tmp14Result = null;
  if (tmp) {
    tmp14Result = null;
    if (!tmp3) {
      const obj5 = { style: null, children: null };
      const items3 = [tmp12.showHelp, ];
      const obj6 = { marginBottom: bottom + 8 };
      items3[1] = obj6;
      obj5.style = items3;
      const obj7 = { style: tmp12.text, children: null };
      let intl2 = tmp17(1115).intl;
      obj7.children = intl2.string(tmp17(1115).t.dklV0G);
      obj5.children = tmp14(tmp17(1177).LegacyText, obj7);
      tmp14Result = tmp14(closure_5, obj5);
    }
  }
  items1[2] = tmp14Result;
  obj.children = items1;
  return closure_9(closure_5, obj);
};