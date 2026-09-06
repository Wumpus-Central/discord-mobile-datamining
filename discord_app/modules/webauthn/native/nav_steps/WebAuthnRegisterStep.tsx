// === Module 14674: WebAuthnRegisterStep ===

// Module 14674 (WebAuthnRegisterStep)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6949 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AndroidPasskeyRadioGroup(onChange) {
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  let obj = { value: obj1.PASSKEY_CREDENTIAL_MANAGER, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.JQbo8L);
  const items = [obj, , ];
  obj = { value: obj1.PASSKEY_DEVICE, name: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.GjBNMg);
  items[1] = obj;
  obj = { value: obj1.OTHER_AND_ANDROID_NONDISCOVERABLE, name: null };
  const intl3 = util.intl;
  obj.name = intl3.string(util.t["OhC77+"]);
  items[2] = obj;
  obj1 = {
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
  return React5(native.RadioGroup, obj1);
}
const View = fn(17).View;
const WebAuthnScreens = fn(14657).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
createStyles.radioItem = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
let obj1 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj2 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj1);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const tmp4 = closure_9();
  obj1 = onRegisterSuccess;
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  const tmp5 = authenticatorSelection;
  const tmp6 = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  obj2 = navigation(1115);
  const tmp5Result = tmp5(obj1.useState(obj2.isAndroid() ? obj1.PASSKEY_CREDENTIAL_MANAGER : obj1.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  const items = [navigation];
  onRegisterSuccess = obj1.useCallback((arg0) => {
    navigation.push(WebAuthnScreens.NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  closure_5 = obj1.useMemo(() => obj2[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  closure_6 = obj1.useMemo(() => ({ onRegisterSuccess, setError, setRegistering }), items2);
  const tmp9 = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  const announceError = navigation(14675).useAnnounceError(tmp10);
  const rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: null };
  obj = { style: tmp4.centerFlex, children: null };
  const items3 = [closure_7(navigation(14676).KeyImage, {}), , ];
  obj = { style: tmp4.margin, variant: "text-md/normal", children: null };
  const intl = tmp(1114).intl;
  const string = intl.string;
  const t = tmp(1114).t;
  if (tmp7) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj.children = stringResult;
  items3[1] = closure_7(navigation(4556).Text, obj);
  let tmp19Result = "" !== tmp10;
  if (tmp19Result) {
    obj1 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp19Result = closure_7(tmp(4556).Text, obj1);
  }
  items3[2] = tmp19Result;
  obj.children = items3;
  const items4 = [closure_8(closure_5, obj), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj2 = { authenticatorSelection, registering: tmp7, onChange: tmp5Result[1] };
    shouldDisplayAndroidFidoSelector = closure_7(AndroidPasskeyRadioGroup, obj2);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const intl2 = tmp(1114).intl;
  const string2 = intl2.string;
  const t2 = tmp(1114).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj3 = {
    children: closure_7(navigation(4975).Button, {
      text: string2Result,
      disabled: tmp7,
      loading: tmp7,
      onPress() {
        return closure_5(closure_6);
      },
      size: "lg"
    })
  };
  items4[2] = closure_7(navigation(5433).ButtonGroup, obj3);
  rect.children = items4;
  return closure_8(navigation(7123).SafeAreaPaddingView, rect);
};