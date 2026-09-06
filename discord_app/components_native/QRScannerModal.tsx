// === Module 13868: DCDQRScanner ===

// Module 13868 (DCDQRScanner)
import ThemesDefault from "Themes" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import _modDef4763 from "module_4763" /* 4763 */;
import registerAssetDefault from "registerAsset" /* 7089 */;
import renderDefault from "render" /* 9050 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 13869 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 1074 */;
import { FAMILY_CENTER_LINK_REQUEST_REGEX as closure_7 } from "items" /* 7538 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 1115 */;

const require = arg1;
function DCDQRScanner(arg0) {
  const merged = Object.assign(arg0);
  return callback2(closure_10, {});
}
({ View: c5, requireNativeComponent } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
if (set.isAndroid()) {
  let importDefaultResult = __INTERNAL_VIEW_CONFIGDefault;
} else {
  importDefaultResult = requireNativeComponent("DCDQRScanner");
}
let c10 = importDefaultResult;
set = { scanner: { position: "absolute", height: "100%", width: "100%" }, closeButton: { marginLeft: 8 }, emptyView: null, showHelp: null, text: null };
set = { backgroundColor: ThemesDefault.unsafe_rawColors.BLACK };
set[2] = set;
set[3] = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
let obj1 = { marginLeft: 16, marginRight: 16, marginTop: "auto", borderRadius: 16, backgroundColor: ThemesDefault.unsafe_rawColors.BRAND_500, paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16 };
set[4] = { color: ThemesDefault.unsafe_rawColors.WHITE, textAlign: "center" };
let closure_13 = { SUCCEEDED: "SUCCEEDED", FAILED: "FAILED" };
let result = set.fileFinishedImporting("components_native/QRScannerModal.tsx");

export default function QRScannerModal(showHelp) {
  showHelp = showHelp.showHelp;
  const onScanSuccess = showHelp.onScanSuccess;
  [tmp3, importDefault] = callback(React.useState(true), 2);
  const effect = React.useEffect(() => {
    closure_0 = onScanSuccess(closure_1_2[9]).runAfterInteractions(() => {
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
    ({ scanner: arr[0], emptyView: arr[1] } = set);
    obj[0] = items;
    let tmp10Result = tmp10(tmp9, obj);
    let tmp12 = set;
    let tmp14 = tmp10;
  } else {
    obj = { style: null, pointerEvents: "none", onQRCodeFound: null };
    tmp12 = set;
    obj[0] = set.scanner;
    obj[2] = function onQRCodeFound(nativeEvent) {
      if (closure_1_13.SUCCEEDED === nativeEvent.nativeEvent.status) {
        if (undefined !== onScanSuccess) {
          tmp2(nativeEvent.nativeEvent.result);
        } else {
          let url = closure_1_1(closure_1_2[11]).toURLSafe(nativeEvent.nativeEvent.result);
          if (url == null) {
            url = {};
          }
          let obj = onScanSuccess(tmp22[12]);
          const result = obj.findRemoteAuthFingerprint(url.hostname, str);
          if (null != result) {
            let tmp21Result = tmp21(tmp22[13]);
            tmp21Result.pop();
            tmp21Result = tmp21(tmp22[13]);
            obj = { remoteAuthFingerprint: null };
            obj[0] = result;
            tmp21Result.pushLazy(tmp3(tmp22[15])(tmp22[14], tmp22.paths), obj);
          } else {
            let match;
            if (str != null) {
              match = str.match(closure_1_7);
            }
            if (null != match) {
              if (null != str) {
                tmp21(tmp22[13]).pop();
                let tmp3Result = tmp3(tmp22[16]);
                obj = { screen: null };
                obj[0] = closure_1_6.FAMILY_CENTER;
                tmp3Result.openUserSettings(obj);
                tmp3Result = tmp3(tmp22[17]);
                const result1 = tmp3Result.handleFamilyCenterQRCodeScan(str, "UserSettingsQRCodeScan");
              }
            }
            tmp21(tmp22[18]).openURL(nativeEvent.nativeEvent.result, undefined, false);
            let tmp8 = tmp22;
            let tmp9 = tmp21;
            const tmp21Result2 = tmp21(tmp22[18]);
          }
          const obj10 = closure_1_1(closure_1_2[11]);
        }
      } else {
        const FAILED = tmp.FAILED;
        tmp8 = closure_1_2;
        obj1 = { body: null, title: null };
        const intl = onScanSuccess(closure_1_2[20]).intl;
        obj1[0] = intl.string(onScanSuccess(closure_1_2[20]).t.QOQlWa);
        const intl2 = onScanSuccess(closure_1_2[20]).intl;
        obj1[1] = intl2.string(onScanSuccess(closure_1_2[20]).t["6S318H"]);
        closure_1_1(closure_1_2[19]).show(obj1);
        tmp9 = closure_1_1;
        const obj8 = closure_1_1(closure_1_2[19]);
      }
      tmp9(tmp8[13]).pop();
    };
    tmp10Result = tmp10(DCDQRScanner, obj);
    tmp14 = tmp10;
  }
  const items1 = [tmp10Result, , ];
  obj1 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp7 = useSafeAreaInsetsDefault();
  let tmp8 = closure_9;
  let intl = onScanSuccess(1114).intl;
  obj1[1] = intl.string(onScanSuccess(1114).t.cpT0Cq);
  obj1[2] = registerAssetDefault;
  const items2 = [tmp12.closeButton, { marginTop: top }];
  obj1[3] = items2;
  obj1[4] = _modDef4763.pop;
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
      let intl2 = tmp17(1114).intl;
      obj4[1] = intl2.string(tmp17(1114).t.dklV0G);
      obj2[1] = tmp14(tmp17(1178).LegacyText, obj4);
      tmp14Result = tmp14(tmp9, obj2);
    }
  }
  items1[2] = tmp14Result;
  obj[1] = items1;
  return tmp8(closure_5, obj);
};