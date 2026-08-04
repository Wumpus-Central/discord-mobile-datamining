import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "set";
import { WebAuthnScreens } from "WebAuthnScreens";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let OTHER_AND_ANDROID_NONDISCOVERABLE;
let PASSKEY_CREDENTIAL_MANAGER;
let PASSKEY_DEVICE;
let error;
let metroImportAll;
const require = arg1;
function AndroidPasskeyRadioGroup(onChange) {
  let authenticatorSelection;
  let registering;
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  let obj = { value: obj1.PASSKEY_CREDENTIAL_MANAGER, name: null };
  const intl = onChange(1236).intl;
  obj[1] = intl.string(onChange(1236).t.JQbo8L);
  const items = [obj, , ];
  obj = { value: obj1.PASSKEY_DEVICE, name: null };
  const intl2 = onChange(1236).intl;
  obj[1] = intl2.string(onChange(1236).t.GjBNMg);
  items[1] = obj;
  obj = { value: obj1.OTHER_AND_ANDROID_NONDISCOVERABLE, name: null };
  const intl3 = onChange(1236).intl;
  obj[1] = intl3.string(onChange(1236).t["OhC77+"]);
  items[2] = obj;
  obj1 = {
    style: createCacheKey().radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: null,
    withSpacing: true
  };
  obj1[5] = onChange(1297).RadioGroup.Sizes.LARGE;
  return callback(onChange(1297).RadioGroup, obj1);
}
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { flexContainer: { flex: 1, flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", marginLeft: 16, marginRight: 16, marginTop: 16 }, centerFlex: { display: "flex", alignItems: "center" }, margin: { marginTop: 16, textAlign: "center" }, radioItem: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md };
createCacheKey[3] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { PASSKEY_CREDENTIAL_MANAGER: 0, [0]: "PASSKEY_CREDENTIAL_MANAGER", PASSKEY_DEVICE: 1, [1]: "PASSKEY_DEVICE", OTHER_AND_ANDROID_NONDISCOVERABLE: 2, [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE" };
let obj2 = { [PASSKEY_CREDENTIAL_MANAGER]: require("_promptForRegisterCredential").registerPasskey, [PASSKEY_DEVICE]: require("_promptForRegisterCredential").registerAndroidDevicePasskey, [OTHER_AND_ANDROID_NONDISCOVERABLE]: require("_promptForRegisterCredential").registerSecurityKey };
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj1);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let tmp10;
  let tmp11;
  let tmp7;
  let tmp8;
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const tmp4 = createCacheKey();
  let obj1 = callback;
  [tmp7, tmp8] = first(callback.useState(false), 2);
  const importDefault = tmp8;
  const tmp5 = first;
  const tmp6 = first(callback.useState(false), 2);
  [tmp10, tmp11] = first(callback.useState(""), 2);
  const dependencyMap = tmp11;
  let obj2 = navigation(500);
  const tmp5Result = tmp5(obj1.useState(obj2.isAndroid() ? obj1.PASSKEY_CREDENTIAL_MANAGER : obj1.OTHER_AND_ANDROID_NONDISCOVERABLE), 2);
  first = tmp5Result[0];
  const items = [navigation];
  callback = obj1.useCallback((arg0) => {
    navigation.push(constants.NAME, arg0);
  }, items);
  const items1 = [first];
  let closure_5 = obj1.useMemo(() => outer1_11[first], items1);
  const items2 = [callback, tmp11, tmp8];
  let closure_6 = obj1.useMemo(() => ({ onRegisterSuccess: callback, setError: closure_2, setRegistering: closure_1 }), items2);
  obj = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: null };
  obj = { style: tmp4.centerFlex, children: null };
  const items3 = [callback(navigation(13889).KeyImage, {}), , ];
  obj1 = { style: tmp4.margin, variant: "text-md/normal", children: null };
  const intl = tmp(1236).intl;
  const string = intl.string;
  const t = tmp(1236).t;
  if (tmp7) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj1[2] = stringResult;
  items3[1] = callback(navigation(4281).Text, obj1);
  let tmp18Result = null != tmp10;
  if (tmp18Result) {
    obj2 = { variant: "text-md/normal", color: "text-feedback-critical", children: null };
    obj2[2] = tmp10;
    tmp18Result = tmp18(tmp(4281).Text, obj2);
  }
  items3[2] = tmp18Result;
  obj[1] = items3;
  const items4 = [closure_8(closure_5, obj), , ];
  let shouldDisplayAndroidFidoSelector = importDefault(8287).shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj3 = { authenticatorSelection: null, registering: null, onChange: null };
    obj3[0] = first;
    obj3[1] = tmp7;
    obj3[2] = tmp5Result[1];
    shouldDisplayAndroidFidoSelector = tmp18(AndroidPasskeyRadioGroup, obj3);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const intl2 = tmp(1236).intl;
  const string2 = intl2.string;
  const t2 = tmp(1236).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const tmp17 = closure_5;
  const tmp9 = first(callback.useState(""), 2);
  items4[2] = callback(navigation(5117).ButtonGroup, { children: callback(navigation(4695).Button, obj5) });
  obj[4] = items4;
  return closure_8(navigation(5272).SafeAreaPaddingView, obj);
};