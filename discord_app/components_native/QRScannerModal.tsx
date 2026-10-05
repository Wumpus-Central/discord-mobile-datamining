// discord_app/components_native/QRScannerModal.tsx
import react2 from "../../_runtime/00576_react.js";
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../Constants.tsx";
import intl3 from "../intl/index.native.tsx";
import URLUtilsDefault from "../utils/URLUtils.tsx";
import useSafeAreaInsetsDefault from "../modules/safe_area/useSafeAreaInsets.native.tsx";
import asyncRequire from "../../_runtime/01987_asyncRequire.js";
import LinkingDefault from "../lib/native/Linking.tsx";
import ModalActionCreatorsDefault from "../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../actions/native/AlertActionCreators.tsx";
import AssetRegistryDefault from "../../_runtime/06584_AssetRegistry.js";
import openUserSettings from "../modules/user_settings/core/native/openUserSettings.tsx";
import FamilyCenterConstants from "../modules/parent_tools/FamilyCenterConstants.tsx";
import TouchableHitBoxDefault from "../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import FamilyCenterNativeUtils from "../modules/parent_tools/native/FamilyCenterNativeUtils.tsx";
import QRLoginUtils from "../modules/remote_auth/QRLoginUtils.tsx";
import QRScannerNativeComponentDefault from "../../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import react from "../../_runtime/00019_react.js";
import react_native from "../../_runtime/00017_react-native.js";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import PlatformUtils from "../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

let c9;
let hasOwnProperty;
let importDefaultResult;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let requireNativeComponent;
({ View: hasOwnProperty, requireNativeComponent } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
let closure_7 = FamilyCenterConstants.FAMILY_CENTER_LINK_REQUEST_REGEX;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
if (PlatformUtils.isAndroid()) {
  importDefaultResult = QRScannerNativeComponentDefault;
} else {
  const str = "DCDQRScanner";
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      obj = react2;
      const cResult = obj.c(2);
      if (cResult[0] !== arg0) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        const tmp8 = metroImportAll(c10, obj2);
        cResult[0] = arg0;
        cResult[1] = tmp8;
        tmp2 = tmp8;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      return metroImportAll(c10, obj);
    };
let obj = {
  scanner: { position: "absolute", height: "100%", width: "100%" },
  closeButton: { marginLeft: 8 },
  emptyView: obj2,
  showHelp: obj3,
  text: obj4,
};
obj2 = { backgroundColor: nativeDefault.unsafe_rawColors.BLACK };
obj3 = {
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
obj4 = { color: nativeDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
let result = size.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  let LegacyText;
  let bottom;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let obj7;
  let tmp10Result;
  let tmp12;
  let tmp14;
  let tmp3;
  let top;
  showHelp = showHelp.showHelp;
  const tmp = undefined !== showHelp && showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  const tmp2 = _slicedToArray(react.useState(true), 2);
  [tmp3, importDefault] = tmp2;
  const effect = react.useEffect(() => {
    obj = onScanSuccess(dependencyMap[11]);
    let closure_0 = obj.runAfterInteractions(() => {
      closure_1_1(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  obj = { style: { flex: 1 }, children: items1 };
  ({ bottom, top } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  if (tmp3) {
    let obj2 = { style: items };
    items = [,];
    ({ scanner: arr[0], emptyView: arr[1] } = obj);
    tmp10Result = closure_8(closure_5, obj2);
    tmp12 = obj;
    tmp14 = closure_8;
  } else {
    let obj3 = {
      style: obj.scanner,
      pointerEvents: "none",
      onQRCodeFound(nativeEvent) {
        let intl;
        let intl2;
        let tmp9;
        if (constants.SUCCEEDED === nativeEvent.nativeEvent.status) {
          if (undefined !== onScanSuccess) {
            tmp2(nativeEvent.nativeEvent.result);
          } else {
            const obj9 = URLUtilsDefault;
            let url = obj9.toURLSafe(nativeEvent.nativeEvent.result);
            if (url == null) {
              url = {};
            }
            const hostname = url.hostname;
            obj = QRLoginUtils;
            const result = obj.findRemoteAuthFingerprint(hostname, str);
            if (null != result) {
              const tmp22Result = ModalActionCreatorsDefault;
              tmp22Result.pop();
              const obj2 = { remoteAuthFingerprint: result };
              const tmp22Result4 = ModalActionCreatorsDefault;
              tmp22Result4.pushLazy(asyncRequire(13676, dependencyMap.paths), obj2);
            } else {
              let match;
              if (url.pathname != null) {
                match = str.match(closure_7);
              }
              if (null != match) {
                if (null != url.pathname) {
                  const tmp22Result5 = ModalActionCreatorsDefault;
                  tmp22Result5.pop();
                  const obj3 = { screen: UserSettingsSections.FAMILY_CENTER };
                  const tmp3Result = openUserSettings;
                  tmp3Result.openUserSettings(obj3);
                  const tmp3Result2 = FamilyCenterNativeUtils;
                  const result1 = tmp3Result2.handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
                }
              }
              const tmp22Result6 = LinkingDefault;
              tmp22Result6.openURL(nativeEvent.nativeEvent.result, undefined, false);
              tmp9 = importDefault;
            }
          }
        } else {
          const FAILED = tmp.FAILED;
          const obj4 = { body: intl.string(intl3.t.QOQlWa), title: intl2.string(intl3.t["6S318H"]) };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl3.intl;
          intl2 = intl3.intl;
          show(obj4);
          tmp9 = importDefault;
        }
        const tmp9Result = tmp9(5093);
        tmp9Result.pop();
      },
    };
    tmp12 = obj;
    tmp10Result = closure_8(closure_11, obj3);
    tmp14 = closure_8;
  }
  items1 = [tmp10Result, ,];
  let obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(onScanSuccess(1126).t.cpT0Cq),
    source: AssetRegistryDefault,
    style: items2,
    onPress: ModalActionCreatorsDefault.pop,
  };
  const tmp5Result = TouchableHitBoxDefault;
  intl = onScanSuccess(1126).intl;
  items2 = [tmp12.closeButton, { marginTop: top }];
  items1[1] = tmp14(tmp5Result, obj4);
  let tmp14Result = null;
  if (tmp) {
    tmp14Result = null;
    if (!tmp3) {
      const obj5 = { style: items3, children: tmp14(LegacyText, obj7) };
      items3 = [tmp12.showHelp];
      const obj6 = { marginBottom: bottom + 8 };
      items3[1] = obj6;
      obj7 = { style: tmp12.text, children: intl2.string(onScanSuccess(1126).t.dklV0G) };
      LegacyText = tmp17(1188).LegacyText;
      intl2 = tmp17(1126).intl;
      tmp14Result = tmp14(closure_5, obj5);
    }
  }
  items1[2] = tmp14Result;
  return closure_9(closure_5, obj);
}
