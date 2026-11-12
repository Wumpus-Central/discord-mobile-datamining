// === Module 17190: WebAuthnRegisterStep ===

// Module 17190 (WebAuthnRegisterStep)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 7709 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function AndroidPasskeyRadioGroup(onChange) {
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  const obj = { value: obj4.PASSKEY_CREDENTIAL_MANAGER, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.JQbo8L);
  items = [obj, , ];
  const obj2 = { value: obj4.PASSKEY_DEVICE, name: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(util.t.GjBNMg);
  items[1] = obj2;
  const obj3 = { value: obj4.OTHER_AND_ANDROID_NONDISCOVERABLE, name: null };
  const intl3 = util.intl;
  obj3.name = intl3.string(util.t["OhC77+"]);
  items[2] = obj3;
  obj4 = {
    style: closure_10().radioItem,
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
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = { scrollContent: { flexGrow: 1 }, flexContainer: { flexGrow: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md } };
let closure_10 = createStyles.createStyles(obj2);
let obj4 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj5 = { [PASSKEY_CREDENTIAL_MANAGER]: NativeCeremoniesDefault.registerPasskey, [PASSKEY_DEVICE]: NativeCeremoniesDefault.registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: NativeCeremoniesDefault.registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  navigation = navigation(1499).useNavigation();
  const tmp4 = closure_10();
  const obj = navigation(1499);
  const tmp5 = authenticatorSelection;
  [tmp7, tmp8] = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  importDefault = tmp8;
  const tmp6 = authenticatorSelection(onRegisterSuccess.useState(false), 2);
  [tmp10, tmp11] = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  dependencyMap = tmp11;
  const tmp9 = authenticatorSelection(onRegisterSuccess.useState(""), 2);
  const tmp5Result = tmp5(onRegisterSuccess.useState(navigation(1377).isAndroid() ? obj4.PASSKEY_CREDENTIAL_MANAGER : obj4.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  authenticatorSelection = tmp5Result[0];
  items = [navigation];
  onRegisterSuccess = obj2.useCallback((arg0) => {
    const replaced = navigation.replace(UserSettingsSections.WEBAUTHN_NAME, arg0);
  }, items);
  const items1 = [authenticatorSelection];
  closure_5 = obj2.useMemo(() => obj5[first], items1);
  const items2 = [onRegisterSuccess, tmp11, tmp8];
  closure_6 = obj2.useMemo(() => ({ onRegisterSuccess, setError, setRegistering }), items2);
  const obj3 = navigation(1377);
  const announceError = navigation(17191).useAnnounceError(tmp10);
  obj4 = { contentContainerStyle: tmp4.scrollContent, alwaysBounceVertical: false, children: null };
  const rect = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: null };
  obj5 = { style: tmp4.centerFlex, children: null };
  const items3 = [closure_8(navigation(17192).KeyImage, {}), , ];
  const obj6 = { style: tmp4.margin, variant: "body-md/normal", children: null };
  const intl = tmp(1113).intl;
  const string = intl.string;
  const t = tmp(1113).t;
  if (tmp7) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj6.children = stringResult;
  items3[1] = closure_8(navigation(5866).Text, obj6);
  let tmp17Result = "" !== tmp10;
  if (tmp17Result) {
    const obj7 = { variant: "body-md/normal", color: "text-feedback-critical", children: tmp10 };
    tmp17Result = closure_8(tmp(5866).Text, obj7);
  }
  items3[2] = tmp17Result;
  obj5.children = items3;
  const items4 = [closure_9(closure_6, obj5), , ];
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj8 = { authenticatorSelection, registering: tmp7, onChange: tmp5Result[1] };
    shouldDisplayAndroidFidoSelector = closure_8(AndroidPasskeyRadioGroup, obj8);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const intl2 = tmp(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp(1113).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const obj9 = {
    children: closure_8(navigation(5873).Button, {
      text: string2Result,
      disabled: tmp7,
      loading: tmp7,
      onPress() {
        return closure_5(closure_6);
      },
      size: "lg"
    })
  };
  items4[2] = closure_8(navigation(6888).ButtonGroup, obj9);
  rect.children = items4;
  obj4.children = closure_9(navigation(7351).SafeAreaPaddingView, rect);
  return closure_8(closure_5, obj4);
};