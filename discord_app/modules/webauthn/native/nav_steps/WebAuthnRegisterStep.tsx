// === Module 14949: WebAuthnRegisterStep ===

// Module 14949 (WebAuthnRegisterStep)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 7192 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AndroidPasskeyRadioGroup(onChange) {
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
}
const View = fn(17).View;
const WebAuthnScreens = fn(14933).WebAuthnScreens;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md } };
let closure_9 = createStyles.createStyles(obj2);
let obj4 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj5 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  navigation = navigation(1484).useNavigation();
  const tmp4 = closure_9();
  const obj = navigation(1484);
  const tmp5 = authenticatorSelection;
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  const tmp6 = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  const tmp9 = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  const tmp5Result = tmp5(onRegisterSuccess.useState(navigation(1364).isAndroid() ? obj4.PASSKEY_CREDENTIAL_MANAGER : obj4.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  const items = [navigation];
  onRegisterSuccess = obj2.useCallback((arg0) => {
    navigation.push(WebAuthnScreens.NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  closure_5 = obj2.useMemo(() => obj5[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  closure_6 = obj2.useMemo(() => ({ onRegisterSuccess, setError, setRegistering }), items2);
  const obj3 = navigation(1364);
  const announceError = navigation(14950).useAnnounceError(tmp10);
  const rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: null };
  obj4 = { style: tmp4.centerFlex, children: null };
  const items3 = [closure_7(navigation(14951).KeyImage, {}), , ];
  obj5 = { style: tmp4.margin, variant: "text-md/normal", children: null };
  const intl = tmp(1115).intl;
  const string = intl.string;
  const t = tmp(1115).t;
  if (tmp7) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj5.children = stringResult;
  items3[1] = closure_7(navigation(4752).Text, obj5);
  let tmp19Result = "" !== tmp10;
  if (tmp19Result) {
    const obj6 = { variant: "text-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp19Result = closure_7(tmp(4752).Text, obj6);
  }
  items3[2] = tmp19Result;
  obj4.children = items3;
  const items4 = [closure_8(closure_5, obj4), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj7 = { authenticatorSelection, registering: tmp7, onChange: tmp5Result[1] };
    shouldDisplayAndroidFidoSelector = closure_7(AndroidPasskeyRadioGroup, obj7);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const intl2 = tmp(1115).intl;
  const string2 = intl2.string;
  const t2 = tmp(1115).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj8 = {
    children: closure_7(navigation(5186).Button, {
      text: string2Result,
      disabled: tmp7,
      loading: tmp7,
      onPress() {
        return closure_5(closure_6);
      },
      size: "lg"
    })
  };
  items4[2] = closure_7(navigation(5650).ButtonGroup, obj8);
  rect.children = items4;
  return closure_8(navigation(7368).SafeAreaPaddingView, rect);
};