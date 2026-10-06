// === Module 14610: WebAuthnRegisterStep ===

// Module 14610 (WebAuthnRegisterStep)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6444 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, navigation;

let OTHER_AND_ANDROID_NONDISCOVERABLE;
let PASSKEY_CREDENTIAL_MANAGER;
let PASSKEY_DEVICE;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
let obj3 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj4 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((registering) => {
  let authenticatorSelection;
  let first;
  let intl;
  let intl2;
  let intl3;
  let onChange;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(10);
  ({ authenticatorSelection, onChange } = registering);
  registering = registering.registering;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: obj3.PASSKEY_CREDENTIAL_MANAGER, name: intl.string(intl4.t.JQbo8L) };
    intl = intl4.intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    obj3 = { value: obj3.PASSKEY_DEVICE, name: intl2.string(intl4.t.GjBNMg) };
    intl2 = intl4.intl;
    cResult[1] = obj3;
    tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, tmp7, ];
    obj4 = { value: obj3.OTHER_AND_ANDROID_NONDISCOVERABLE, name: intl3.string(intl4.t["OhC77+"]) };
    intl3 = intl4.intl;
    items[2] = obj4;
    cResult[2] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== onChange) {
    class N {
      constructor(arg0) {
        return onChange(registering.value);
      }
    }
    cResult[3] = onChange;
    cResult[4] = N;
  } else {
    class N {
      constructor(arg0) {
        return onChange(registering.value);
      }
    }
  }
  if (cResult[5] === authenticatorSelection) {
    class N {
      constructor(arg0) {
        return onChange(registering.value);
      }
    }
  }
  const obj5 = { style: tmp4.radioItem, options: tmp9, onChange: N, value: authenticatorSelection, disabled: registering, size: native.RadioGroup.Sizes.LARGE, withSpacing: true };
  const RadioGroup = native.RadioGroup;
  cResult[5] = authenticatorSelection;
  cResult[6] = registering;
  cResult[7] = tmp4.radioItem;
  cResult[8] = N;
  cResult[9] = metroImportDefault(RadioGroup, obj5);
  metroImportDefault(RadioGroup, obj5);
}) : ((onChange) => {
  let authenticatorSelection;
  let intl;
  let intl2;
  let intl3;
  let registering;
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  const obj = { value: obj3.PASSKEY_CREDENTIAL_MANAGER, name: intl.string(intl4.t.JQbo8L) };
  const tmp = closure_9();
  intl = intl4.intl;
  const items = [obj, , ];
  const obj2 = { value: obj3.PASSKEY_DEVICE, name: intl2.string(intl4.t.GjBNMg) };
  intl2 = intl4.intl;
  items[1] = obj2;
  obj3 = { value: obj3.OTHER_AND_ANDROID_NONDISCOVERABLE, name: intl3.string(intl4.t["OhC77+"]) };
  intl3 = intl4.intl;
  items[2] = obj3;
  obj4 = {
    style: tmp.radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: native.RadioGroup.Sizes.LARGE,
    withSpacing: true
  };
  const RadioGroup = native.RadioGroup;
  return metroImportDefault(RadioGroup, obj4);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_1;
  let closure_2;
  let first;
  let items;
  let items1;
  let obj8;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp21;
  let tmp24;
  let tmp9;
  const obj = navigation(576);
  const cResult = obj.c(33);
  const obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  const tmp5 = closure_9();
  [first, tmp9] = react.useState(false);
  [tmp11, tmp12] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  obj4 = navigation(1369);
  [tmp15, tmp16] = react.useState(obj4.isAndroid() ? react.PASSKEY_CREDENTIAL_MANAGER : react.OTHER_AND_ANDROID_NONDISCOVERABLE);
  _slicedToArray(react.useState(obj4.isAndroid() ? react.PASSKEY_CREDENTIAL_MANAGER : react.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  if (cResult[0] !== navigation) {
    const fn = function s(arg0) {
      const replaced = navigation.replace(UserSettingsSections.WEBAUTHN_NAME, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp17 = fn;
  } else {
    tmp17 = cResult[1];
  }
  importDefault = tmp18;
  if (cResult[2] !== tmp17) {
    const obj5 = { onRegisterSuccess: tmp17, setError: tmp12, setRegistering: tmp9 };
    cResult[2] = tmp17;
    cResult[3] = obj5;
    tmp19 = obj5;
  } else {
    tmp19 = cResult[3];
  }
  dependencyMap = tmp19;
  const tmpResult = navigation(14611);
  const announceError = tmpResult.useAnnounceError(tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = closure_7(navigation(14612).KeyImage, {});
    cResult[4] = tmp23;
    tmp21 = tmp23;
  } else {
    tmp21 = cResult[4];
  }
  if (cResult[5] !== first) {
    let stringResult;
    const intl = tmp(1126).intl;
    const string = intl.string;
    const t = tmp(1126).t;
    if (first) {
      stringResult = string(t.aVMiX3);
    } else {
      stringResult = string(t.Lh5vTW);
    }
    cResult[5] = first;
    cResult[6] = stringResult;
    tmp24 = stringResult;
  } else {
    tmp24 = cResult[6];
  }
  if (cResult[7] === tmp5.margin) {
    let tmp26;
    let tmp28;
    if (cResult[8] === tmp24) {
      tmp26 = cResult[9];
    }
    if (cResult[10] !== tmp11) {
      let tmp29 = "" !== tmp11;
      if (tmp29) {
        const obj6 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp11 };
        tmp29 = closure_7(tmp(4892).Text, obj6);
      }
      cResult[10] = tmp11;
      cResult[11] = tmp29;
      tmp28 = tmp29;
    } else {
      tmp28 = cResult[11];
    }
    if (cResult[12] === tmp5.centerFlex) {
      if (cResult[13] === tmp26) {
        let tmp31;
        if (cResult[14] === tmp28) {
          tmp31 = cResult[15];
        }
        if (cResult[16] === tmp15) {
          let tmp35;
          let tmp39;
          if (cResult[17] === first) {
            tmp35 = cResult[18];
          }
          if (cResult[19] !== first) {
            let string2Result;
            const intl2 = tmp(1126).intl;
            const string2 = intl2.string;
            const t2 = tmp(1126).t;
            if (first) {
              string2Result = string2(t2.wePEBF);
            } else {
              string2Result = string2(t2.oibaQa);
            }
            cResult[19] = first;
            cResult[20] = string2Result;
            tmp39 = string2Result;
          } else {
            tmp39 = cResult[20];
          }
          if (cResult[21] === obj4[tmp15]) {
            let tmp41;
            if (cResult[22] === tmp19) {
              tmp41 = cResult[23];
            }
            if (cResult[24] === first) {
              if (cResult[25] === tmp39) {
                let tmp42;
                if (cResult[26] === tmp41) {
                  tmp42 = cResult[27];
                }
                if (cResult[28] === tmp5.flexContainer) {
                  if (cResult[29] === tmp42) {
                    if (cResult[30] === tmp31) {
                      let tmp45;
                      if (cResult[31] === tmp35) {
                        tmp45 = cResult[32];
                      }
                      return tmp45;
                    }
                  }
                }
                const rect = { bottom: true, left: true, right: true, style: tmp5.flexContainer, children: items };
                items = [tmp31, tmp35, tmp42];
                const tmp47 = closure_8(navigation(6626).SafeAreaPaddingView, rect);
                cResult[28] = tmp5.flexContainer;
                cResult[29] = tmp42;
                cResult[30] = tmp31;
                cResult[31] = tmp35;
                cResult[32] = tmp47;
                tmp45 = tmp47;
              }
            }
            const obj7 = { children: closure_7(navigation(5601).Button, obj8) };
            const ButtonGroup = tmp(5599).ButtonGroup;
            obj8 = { text: tmp39, disabled: first, loading: first, onPress: tmp41, size: "lg" };
            const tmp44 = closure_7(ButtonGroup, obj7);
            cResult[24] = first;
            cResult[25] = tmp39;
            cResult[26] = tmp41;
            cResult[27] = tmp44;
            tmp42 = tmp44;
          }
          const fn2 = function k() {
            return closure_1(closure_2);
          };
          cResult[21] = obj4[tmp15];
          cResult[22] = tmp19;
          cResult[23] = fn2;
          tmp41 = fn2;
        }
        let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
        if (shouldDisplayAndroidFidoSelector) {
          const obj9 = { authenticatorSelection: tmp15, registering: first, onChange: tmp16 };
          shouldDisplayAndroidFidoSelector = closure_7(closure_12, obj9);
        }
        cResult[16] = tmp15;
        cResult[17] = first;
        cResult[18] = shouldDisplayAndroidFidoSelector;
        tmp35 = shouldDisplayAndroidFidoSelector;
      }
    }
    const obj10 = { style: tmp5.centerFlex, children: items1 };
    items1 = [tmp21, tmp26, tmp28];
    const tmp34 = closure_8(View, obj10);
    cResult[12] = tmp5.centerFlex;
    cResult[13] = tmp26;
    cResult[14] = tmp28;
    cResult[15] = tmp34;
    tmp31 = tmp34;
  }
  const obj11 = { style: tmp5.margin, variant: "text-md/normal", children: tmp24 };
  const tmp27 = closure_7(navigation(4892).Text, obj11);
  cResult[7] = tmp5.margin;
  cResult[8] = tmp24;
  cResult[9] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  let authenticatorSelection;
  let items3;
  let items4;
  let obj9;
  let onRegisterSuccess;
  let setError;
  let setRegistering;
  let string2Result;
  let stringResult;
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  const obj = navigation(1490);
  navigation = obj.useNavigation();
  const tmp4 = closure_9();
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  authenticatorSelection(onRegisterSuccess.useState(""), 2);
  obj3 = navigation(1369);
  const tmp5Result = authenticatorSelection(onRegisterSuccess.useState(obj3.isAndroid() ? obj3.PASSKEY_CREDENTIAL_MANAGER : obj3.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  const items = [navigation];
  const tmp15 = tmp5Result[1];
  onRegisterSuccess = obj2.useCallback((arg0) => {
    const replaced = navigation.replace(UserSettingsSections.WEBAUTHN_NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  let closure_5 = obj2.useMemo(() => obj4[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  let closure_6 = obj2.useMemo(() => ({ onRegisterSuccess, setError: dependencyMap, setRegistering: importDefault }), items2);
  const tmpResult = navigation(14611);
  const announceError = tmpResult.useAnnounceError(tmp10);
  const rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: items4 };
  obj4 = { style: tmp4.centerFlex, children: items3 };
  const SafeAreaPaddingView = tmp(6626).SafeAreaPaddingView;
  items3 = [closure_7(navigation(14612).KeyImage, {}), , ];
  const obj5 = { style: tmp4.margin, variant: "text-md/normal", children: stringResult };
  const Text = tmp(4892).Text;
  const intl = tmp(1126).intl;
  const string = intl.string;
  const t = tmp(1126).t;
  const tmp19 = closure_5;
  if (tmp7) {
    stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  items3[1] = closure_7(Text, obj5);
  let tmp20Result = "" !== tmp10;
  if (tmp20Result) {
    const obj6 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp20Result = closure_7(tmp(4892).Text, obj6);
  }
  items3[2] = tmp20Result;
  items4 = [closure_8(tmp19, obj4), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj7 = { authenticatorSelection, registering: tmp7, onChange: tmp15 };
    shouldDisplayAndroidFidoSelector = closure_7(closure_12, obj7);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const ButtonGroup = tmp(5599).ButtonGroup;
  const Button = tmp(5601).Button;
  const intl2 = tmp(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp(1126).t;
  if (tmp7) {
    string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj8 = { children: closure_7(Button, obj9) };
  obj9 = {
    text: string2Result,
    disabled: tmp7,
    loading: tmp7,
    onPress() {
      return closure_5(closure_6);
    },
    size: "lg"
  };
  items4[2] = closure_7(ButtonGroup, obj8);
  return closure_8(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default tmp3;