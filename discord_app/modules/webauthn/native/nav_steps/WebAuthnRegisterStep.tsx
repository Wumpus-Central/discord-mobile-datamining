// discord_app/modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _promptForRegisterCredentialDefault from "../NativeCeremonies.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { WebAuthnScreens } from "../../WebAuthnConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function AndroidPasskeyRadioGroup(onChange) {
  onChange = onChange.onChange;
  ({ authenticatorSelection, registering } = onChange);
  let obj = { value: obj1.PASSKEY_CREDENTIAL_MANAGER, name: null };
  const intl = onChange(1233).intl;
  obj[1] = intl.string(onChange(1233).t.JQbo8L);
  const items = [obj, ,];
  obj = { value: obj1.PASSKEY_DEVICE, name: null };
  const intl2 = onChange(1233).intl;
  obj[1] = intl2.string(onChange(1233).t.GjBNMg);
  items[1] = obj;
  obj = { value: obj1.OTHER_AND_ANDROID_NONDISCOVERABLE, name: null };
  const intl3 = onChange(1233).intl;
  obj[1] = intl3.string(onChange(1233).t["OhC77+"]);
  items[2] = obj;
  obj1 = {
    style: callback2().radioItem,
    options: items,
    onChange(value) {
      return onChange(value.value);
    },
    value: authenticatorSelection,
    disabled: registering,
    size: onChange(1296).RadioGroup.Sizes.LARGE,
    withSpacing: true,
  };
  return callback(onChange(1296).RadioGroup, obj1);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = {
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
  },
  centerFlex: { display: "flex", alignItems: "center" },
  margin: { marginTop: 16, textAlign: "center" },
  radioItem: null,
};
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: ThemesDefault.radii.md,
};
createCacheKey[3] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj1 = {
  PASSKEY_CREDENTIAL_MANAGER: 0,
  [0]: "PASSKEY_CREDENTIAL_MANAGER",
  PASSKEY_DEVICE: 1,
  [1]: "PASSKEY_DEVICE",
  OTHER_AND_ANDROID_NONDISCOVERABLE: 2,
  [2]: "OTHER_AND_ANDROID_NONDISCOVERABLE",
};
let obj2 = {
  [PASSKEY_CREDENTIAL_MANAGER]: _promptForRegisterCredentialDefault.registerPasskey,
  [PASSKEY_DEVICE]: _promptForRegisterCredentialDefault.registerAndroidDevicePasskey,
  [OTHER_AND_ANDROID_NONDISCOVERABLE]: _promptForRegisterCredentialDefault.registerSecurityKey,
};
({ PASSKEY_CREDENTIAL_MANAGER, PASSKEY_DEVICE, OTHER_AND_ANDROID_NONDISCOVERABLE } = obj1);
const result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnRegisterStep.tsx");

export default function WebAuthnRegisterStep() {
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const tmp4 = callback2();
  obj1 = callback;
  [tmp7, tmp8] = first(callback.useState(false), 2);
  importDefault = tmp8;
  const tmp5 = first;
  const tmp6 = first(callback.useState(false), 2);
  [tmp10, tmp11] = first(callback.useState(""), 2);
  dependencyMap = tmp11;
  obj2 = navigation(1234);
  const tmp5Result = tmp5(
    obj1.useState(obj2.isAndroid() ? obj1.PASSKEY_CREDENTIAL_MANAGER : obj1.OTHER_AND_ANDROID_NONDISCOVERABLE),
    2,
  );
  first = tmp5Result[0];
  const items = [navigation];
  callback = obj1.useCallback((arg0) => {
    navigation.push(constants.NAME, arg0);
  }, items);
  const items1 = [first];
  closure_5 = obj1.useMemo(() => closure_1_11[first], items1);
  const items2 = [callback, tmp11, tmp8];
  closure_6 = obj1.useMemo(
    () => ({ onRegisterSuccess: callback, setError: closure_2, setRegistering: closure_1 }),
    items2,
  );
  const tmp9 = first(callback.useState(""), 2);
  const announceError = navigation(14552).useAnnounceError(tmp10);
  obj = { bottom: true, left: true, right: true, style: tmp4.flexContainer, children: null };
  obj = { style: tmp4.centerFlex, children: null };
  const items3 = [callback(navigation(14553).KeyImage, {}), ,];
  obj1 = { style: tmp4.margin, variant: "text-md/normal", children: null };
  const intl = tmp(1233).intl;
  const string = intl.string;
  const t = tmp(1233).t;
  if (tmp7) {
    let stringResult = string(t.aVMiX3);
  } else {
    stringResult = string(t.Lh5vTW);
  }
  obj1[2] = stringResult;
  items3[1] = callback(navigation(4474).Text, obj1);
  let tmp19Result = "" !== tmp10;
  if (tmp19Result) {
    obj2 = { variant: "text-md/normal", color: "text-feedback-critical", children: null };
    obj2[2] = tmp10;
    tmp19Result = tmp19(tmp(4474).Text, obj2);
  }
  items3[2] = tmp19Result;
  obj[1] = items3;
  const items4 = [closure_8(closure_5, obj), ,];
  let shouldDisplayAndroidFidoSelector = _promptForRegisterCredentialDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    const obj3 = { authenticatorSelection: null, registering: null, onChange: null };
    obj3[0] = first;
    obj3[1] = tmp7;
    obj3[2] = tmp5Result[1];
    shouldDisplayAndroidFidoSelector = tmp19(AndroidPasskeyRadioGroup, obj3);
  }
  items4[1] = shouldDisplayAndroidFidoSelector;
  const intl2 = tmp(1233).intl;
  const string2 = intl2.string;
  const t2 = tmp(1233).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.oibaQa);
  }
  const tmp18 = closure_5;
  const tmpResult = navigation(14552);
  items4[2] = callback(navigation(5384).ButtonGroup, { children: callback(navigation(4928).Button, obj5) });
  obj[4] = items4;
  return closure_8(navigation(5561).SafeAreaPaddingView, obj);
}
