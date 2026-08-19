// discord_app/components_native/QRScannerModal.tsx
import ThemesDefault from "../../discord_common/js/packages/tokens/native.tsx";
import isDiscordProxiedAssetUrlDefault from "../utils/URLUtils.tsx";
import useSafeAreaInsetsDefault from "../modules/safe_area/useSafeAreaInsets.native.tsx";
import _modDef4090 from "../lib/native/Linking.tsx";
import _modDef4656 from "../actions/native/AlertActionCreators.tsx";
import _modDef5260 from "../actions/ModalActionCreators.tsx";
import registerAssetDefault from "../../_runtime/08176_registerAsset.js";
import renderDefault from "../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import __INTERNAL_VIEW_CONFIGDefault from "../../discord_common/js/packages/rtn-codegen/js/QRScannerNativeComponent.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../_runtime/00017_get_ActivityIndicator.js";
import { UserSettingsSections } from "../Constants.tsx";
import { FAMILY_CENTER_LINK_REQUEST_REGEX as closure_7 } from "../modules/parent_tools/FamilyCenterConstants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import obj132 from "../utils/PlatformUtils.tsx";

const require = fn;
function DCDQRScanner(arg0) {
  const merged = Object.assign(arg0);
  return callback2(closure_10, {});
}
({ View: c5, requireNativeComponent } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
if (obj132.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
obj132 = { backgroundColor: ThemesDefault.unsafe_rawColors.BLACK };
obj132[2] = obj132;
obj132[3] = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
obj132[4] = { color: ThemesDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
let result = obj132.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  showHelp = showHelp.showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  [tmp3, importDefault] = callback(React.useState(true), 2);
  const effect = React.useEffect(() => {
    closure_0 = onScanSuccess(dependencyMap[9]).runAfterInteractions(() => {
      callback(false);
    });
    return () => {
      closure_0.cancel();
    };
  }, []);
  const tmp = undefined !== showHelp && showHelp;
  const tmp2 = callback(React.useState(true), 2);
  let obj = { style: { flex: 1 }, children: null };
  ({ bottom, top } = useSafeAreaInsetsDefault());
  if (tmp3) {
    obj = { style: null };
    const items = [, ];
    ({ scanner: arr[0], emptyView: arr[1] } = obj132);
    obj[0] = items;
    let tmp10Result = callback(closure_5, obj);
    let tmp12 = obj132;
    let tmp14 = callback;
  } else {
    obj = { style: null, pointerEvents: "none", onQRCodeFound: null };
    tmp12 = obj132;
    obj[0] = obj132.scanner;
    obj[2] = function onQRCodeFound(nativeEvent) {
      if (closure_1_13.SUCCEEDED === nativeEvent.nativeEvent.status) {
        if (undefined !== onScanSuccess) {
          tmp2(nativeEvent.nativeEvent.result);
        } else {
          let url = isDiscordProxiedAssetUrlDefault.toURLSafe(nativeEvent.nativeEvent.result);
          if (url == null) {
            url = {};
          }
          let obj = onScanSuccess(dependencyMap[12]);
          const result = obj.findRemoteAuthFingerprint(url.hostname, str);
          if (null != result) {
            let tmp21Result = _modDef5260;
            tmp21Result.pop();
            tmp21Result = _modDef5260;
            obj = { remoteAuthFingerprint: null };
            obj[0] = result;
            tmp21Result.pushLazy(onScanSuccess(dependencyMap[15])(dependencyMap[14], dependencyMap.paths), obj);
          } else {
            let match;
            if (str != null) {
              match = str.match(closure_1_7);
            }
            if (null != match) {
              if (null != str) {
                _modDef5260.pop();
                let tmp3Result = onScanSuccess(dependencyMap[16]);
                obj = { screen: null };
                obj[0] = UserSettingsSections.FAMILY_CENTER;
                tmp3Result.openUserSettings(obj);
                tmp3Result = onScanSuccess(dependencyMap[17]);
                const result1 = tmp3Result.handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
                const tmp21Result1 = _modDef5260;
              }
            }
            _modDef4090.openURL(nativeEvent.nativeEvent.result, undefined, false);
            let tmp8 = dependencyMap;
            let tmp9 = importDefault;
            const tmp21Result2 = _modDef4090;
          }
        }
      } else {
        const FAILED = tmp.FAILED;
        tmp8 = dependencyMap;
        obj1 = { body: null, title: null };
        const intl = onScanSuccess(dependencyMap[20]).intl;
        obj1[0] = intl.string(onScanSuccess(dependencyMap[20]).t.QOQlWa);
        const intl2 = onScanSuccess(dependencyMap[20]).intl;
        obj1[1] = intl2.string(onScanSuccess(dependencyMap[20]).t["6S318H"]);
        _modDef4656.show(obj1);
        tmp9 = importDefault;
      }
      tmp9(tmp8[13]).pop();
      const tmp9Result = tmp9(tmp8[13]);
    };
    tmp10Result = callback(DCDQRScanner, obj);
    tmp14 = callback;
  }
  const items1 = [tmp10Result, , ];
  obj1 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp7 = useSafeAreaInsetsDefault();
  let intl = onScanSuccess(1236).intl;
  obj1[1] = intl.string(onScanSuccess(1236).t.cpT0Cq);
  obj1[2] = registerAssetDefault;
  const items2 = [tmp12.closeButton, { marginTop: top }];
  obj1[3] = items2;
  obj1[4] = _modDef5260.pop;
  items1[1] = tmp14(renderDefault, obj1);
  let tmp14Result = null;
  if (tmp) {
    tmp14Result = null;
    if (!tmp3) {
      const obj2 = { style: null, children: null };
      const items3 = [tmp12.showHelp, ];
      const obj3 = { marginBottom: null };
      obj3[0] = bottom + 8;
      items3[1] = obj3;
      obj2[0] = items3;
      const obj4 = { style: null, children: null };
      obj4[0] = tmp12.text;
      let intl2 = tmp17(1236).intl;
      obj4[1] = intl2.string(tmp17(1236).t.dklV0G);
      obj2[1] = tmp14(tmp17(1297).LegacyText, obj4);
      tmp14Result = tmp14(closure_5, obj2);
    }
  }
  items1[2] = tmp14Result;
  obj[1] = items1;
  return callback2(closure_5, obj);
};