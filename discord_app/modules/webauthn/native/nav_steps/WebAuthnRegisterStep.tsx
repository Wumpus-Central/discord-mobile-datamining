// === Module 14871: WebAuthnRegisterStep ===

// Module 14871 (WebAuthnRegisterStep)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6622 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md } };
let closure_9 = createStyles.createStyles(obj2);
let obj4 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj5 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj4);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function AndroidPasskeyRadioGroup(registering) {
  const cResult = c.c(10);
  ({ authenticatorSelection, onChange } = registering);
  registering = registering.registering;
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: obj4.PASSKEY_CREDENTIAL_MANAGER, name: null };
    const intl = util.intl;
    obj2.name = intl.string(util.t.JQbo8L);
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { value: obj4.PASSKEY_DEVICE, name: null };
    const intl2 = util.intl;
    obj3.name = intl2.string(util.t.GjBNMg);
    cResult[1] = obj3;
    let tmp7 = obj3;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, tmp7, ];
    obj4 = { value: null, name: null };
    obj4.value = obj4.OTHER_AND_ANDROID_NONDISCOVERABLE;
    const intl3 = util.intl;
    obj4.name = intl3.string(util.t["OhC77+"]);
    items[2] = obj4;
    cResult[2] = items;
    let tmp9 = items;
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
  obj5 = { style: tmp4.radioItem, options: tmp9, onChange: N, value: authenticatorSelection, disabled: registering, size: native.RadioGroup.Sizes.LARGE, withSpacing: true };
  cResult[5] = authenticatorSelection;
  cResult[6] = registering;
  cResult[7] = tmp4.radioItem;
  cResult[8] = N;
  cResult[9] = React5(native.RadioGroup, { style: tmp4.radioItem, options: tmp9, onChange: N, value: authenticatorSelection, disabled: registering, size: native.RadioGroup.Sizes.LARGE, withSpacing: true });
  const tmp12 = React5(native.RadioGroup, { style: tmp4.radioItem, options: tmp9, onChange: N, value: authenticatorSelection, disabled: registering, size: native.RadioGroup.Sizes.LARGE, withSpacing: true });
}) : (function AndroidPasskeyRadioGroup(onChange) {
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  const obj = { value: obj4.PASSKEY_CREDENTIAL_MANAGER, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.JQbo8L);
  const items = [obj, , ];
  const obj2 = { value: obj4.PASSKEY_DEVICE, name: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(util.t.GjBNMg);
  items[1] = obj2;
  const obj3 = { value: obj4.OTHER_AND_ANDROID_NONDISCOVERABLE, name: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(util.t["OhC77+"]);
  items[2] = obj3;
  obj4 = {
    style: closure_9().radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: native.RadioGroup.Sizes.LARGE,
    withSpacing: true
  };
  return React5(native.RadioGroup, obj4);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WebAuthnRegisterStep() {
  const cResult = navigation(576).c(33);
  const obj = navigation(576);
  navigation = navigation(1502).useNavigation();
  const tmp5 = closure_9();
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const first = tmp7[0];
  const obj2 = navigation(1502);
  [tmp10, tmp11] = noop.useState("");
  obj4 = navigation(1381);
  const tmp9 = _slicedToArray(noop.useState(""), 2);
  [tmp14, tmp15] = noop.useState(obj4.isAndroid() ? obj4.PASSKEY_CREDENTIAL_MANAGER : obj4.OTHER_AND_ANDROID_NONDISCOVERABLE);
  if (cResult[0] !== navigation) {
    const fn = function l(arg0) {
      const replaced = navigation.replace(UserSettingsSections.WEBAUTHN_NAME, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[1];
  }
  importDefault = tmp17;
  if (cResult[2] !== tmp16) {
    obj5 = { onRegisterSuccess: tmp16, setError: tmp11, setRegistering: tmp7[1] };
    cResult[2] = tmp16;
    cResult[3] = obj5;
    let tmp18 = obj5;
  } else {
    tmp18 = cResult[3];
  }
  dependencyMap = tmp18;
  const tmp6Result = _slicedToArray(noop.useState(obj4.isAndroid() ? obj4.PASSKEY_CREDENTIAL_MANAGER : obj4.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  const announceError = navigation(14872).useAnnounceError(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = closure_7(tmp(14873).KeyImage, {});
    cResult[4] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] !== first) {
    const intl = tmp(1126).intl;
    const string = intl.string;
    let aVMiX3 = tmp(1126).t;
    if (first) {
      aVMiX3 = aVMiX3.aVMiX3;
      let stringResult = string(aVMiX3);
    } else {
      stringResult = string(aVMiX3.Lh5vTW);
    }
    cResult[5] = first;
    cResult[6] = stringResult;
  } else {
    if (cResult[7] === tmp5.margin) {
      if (cResult[8] === tmp23) {
        let tmp26 = cResult[9];
      }
      if (cResult[10] !== tmp10) {
        let tmp29 = "" !== tmp10;
        if (tmp29) {
          const obj6 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp10 };
          tmp29 = closure_7(tmp(5086).Text, obj6);
        }
        cResult[10] = tmp10;
        cResult[11] = tmp29;
        let tmp28 = tmp29;
      } else {
        tmp28 = cResult[11];
      }
      if (cResult[12] === tmp5.centerFlex) {
        if (cResult[13] === tmp26) {
          if (cResult[14] === tmp28) {
            let tmp31 = cResult[15];
          }
          if (cResult[16] === tmp14) {
            if (cResult[17] === first) {
              let tmp35 = cResult[18];
            }
            if (cResult[19] !== first) {
              const intl2 = tmp(1126).intl;
              const string2 = intl2.string;
              let wePEBF = tmp(1126).t;
              if (first) {
                wePEBF = wePEBF.wePEBF;
                let string2Result = string2(wePEBF);
              } else {
                string2Result = string2(wePEBF.oibaQa);
              }
              cResult[19] = first;
              cResult[20] = string2Result;
            } else {
              if (cResult[21] === tmp17) {
                if (cResult[22] === tmp18) {
                  let tmp42 = cResult[23];
                }
                if (cResult[24] === first) {
                  if (cResult[25] === tmp39) {
                    if (cResult[26] === tmp42) {
                      let tmp43 = cResult[27];
                    }
                    if (cResult[28] === tmp5.flexContainer) {
                      if (cResult[29] === tmp43) {
                        if (cResult[30] === tmp31) {
                          if (cResult[31] === tmp35) {
                            let tmp45 = cResult[32];
                          }
                          return tmp45;
                        }
                      }
                    }
                    class W {
                      constructor() {
                        return closure_1(closure_2);
                      }
                    }
                    const rect = { bottom: true, left: true, right: true, style: tmp5.flexContainer, children: null };
                    const items = [tmp31, tmp35, tmp43];
                    rect.children = items;
                    const tmp46 = closure_8(tmp(6803).SafeAreaPaddingView, rect);
                    cResult[28] = tmp5.flexContainer;
                    cResult[29] = tmp43;
                    cResult[30] = tmp31;
                    cResult[31] = tmp35;
                    cResult[32] = tmp46;
                    tmp45 = tmp46;
                  }
                }
                class W {
                  constructor() {
                    return closure_1(closure_2);
                  }
                }
                const obj7 = { children: null };
                const obj8 = { text: tmp39, disabled: first, loading: first, onPress: tmp42, size: "lg" };
                obj7.children = closure_7(tmp(5375).Button, obj8);
                const tmp44 = closure_7(tmp(5963).ButtonGroup, obj7);
                cResult[24] = first;
                cResult[25] = tmp39;
                cResult[26] = tmp42;
                cResult[27] = tmp44;
                tmp43 = tmp44;
              }
              class W {
                constructor() {
                  return closure_1(closure_2);
                }
              }
              cResult[21] = tmp17;
              cResult[22] = tmp18;
              cResult[23] = W;
              tmp42 = W;
            }
          }
          let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
          if (shouldDisplayAndroidFidoSelector) {
            class W {
              constructor() {
                return closure_1(closure_2);
              }
            }
            tmp38[0] = tmp14;
            tmp38[1] = first;
            tmp38[2] = tmp15;
            shouldDisplayAndroidFidoSelector = closure_7(closure_12, tmp38);
          }
          cResult[16] = tmp14;
          cResult[17] = first;
          cResult[18] = shouldDisplayAndroidFidoSelector;
          tmp35 = shouldDisplayAndroidFidoSelector;
        }
      }
      const obj9 = { style: tmp5.centerFlex, children: null };
      const items1 = [tmp20, tmp26, tmp28];
      obj9.children = items1;
      const tmp34 = closure_8(View, obj9);
      cResult[12] = tmp5.centerFlex;
      cResult[13] = tmp26;
      cResult[14] = tmp28;
      cResult[15] = tmp34;
      tmp31 = tmp34;
    }
    const obj10 = { style: tmp5.margin, variant: "text-md/normal", children: cResult[6] };
    const tmp27 = closure_7(tmp(5086).Text, obj10);
    cResult[7] = tmp5.margin;
    cResult[8] = cResult[6];
    cResult[9] = tmp27;
    tmp26 = tmp27;
  }
  const tmpResult = navigation(14872);
}) : (function WebAuthnRegisterStep() {
  navigation = navigation(1502).useNavigation();
  const tmp4 = closure_9();
  const obj = navigation(1502);
  const tmp5 = authenticatorSelection;
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  const tmp6 = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  const tmp9 = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  const tmp5Result = tmp5(onRegisterSuccess.useState(navigation(1381).isAndroid() ? obj4.PASSKEY_CREDENTIAL_MANAGER : obj4.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  const items = [navigation];
  onRegisterSuccess = obj2.useCallback((arg0) => {
    const replaced = navigation.replace(UserSettingsSections.WEBAUTHN_NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  closure_5 = obj2.useMemo(() => obj5[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  closure_6 = obj2.useMemo(() => ({ onRegisterSuccess, setError, setRegistering }), items2);
  const obj3 = navigation(1381);
  const announceError = navigation(14872).useAnnounceError(tmp10);
  const rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: null };
  obj4 = { style: tmp4.centerFlex, children: null };
  const items3 = [closure_7(navigation(14873).KeyImage, {}), , ];
  obj5 = { style: tmp4.margin, variant: "text-md/normal", children: null };
  const intl = tmp(1126).intl;
  const string = intl.string;
  const t = tmp(1126).t;
  if (tmp7) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj5.children = stringResult;
  items3[1] = closure_7(navigation(5086).Text, obj5);
  let tmp19Result = "" !== tmp10;
  if (tmp19Result) {
    const obj6 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp19Result = closure_7(tmp(5086).Text, obj6);
  }
  items3[2] = tmp19Result;
  obj4.children = items3;
  const items4 = [closure_8(closure_5, obj4), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj7 = { authenticatorSelection, registering: tmp7, onChange: tmp5Result[1] };
    shouldDisplayAndroidFidoSelector = closure_7(closure_12, obj7);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const intl2 = tmp(1126).intl;
  const string2 = intl2.string;
  const t2 = tmp(1126).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj8 = {
    children: closure_7(navigation(5375).Button, {
      text: string2Result,
      disabled: tmp7,
      loading: tmp7,
      onPress() {
        return closure_5(closure_6);
      },
      size: "lg"
    })
  };
  items4[2] = closure_7(navigation(5963).ButtonGroup, obj8);
  rect.children = items4;
  return closure_8(navigation(6803).SafeAreaPaddingView, rect);
});