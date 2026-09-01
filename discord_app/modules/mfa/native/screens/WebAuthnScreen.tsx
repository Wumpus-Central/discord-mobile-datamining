// === Module 15269: AndroidAuthRadioGroup ===

// Module 15269 (AndroidAuthRadioGroup)
import ThemesDefault from "Themes" /* 712 */;
import _promptForRegisterCredentialDefault from "_promptForRegisterCredential" /* 7722 */;
import MFAOptionScreenDefault from "MFAOptionScreen" /* 15270 */;
import MFAButtonDefault from "MFAButton" /* 15273 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function AndroidAuthRadioGroup(setAuthenticator) {
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  let obj = { value: obj1.ANDROID_PASSKEY, name: null };
  const intl = setAuthenticator(1236).intl;
  obj[1] = intl.string(setAuthenticator(1236).t.PVVXRI);
  const items = [obj, ];
  obj = { value: obj1.AUTHENTICATE, name: null };
  const intl2 = setAuthenticator(1236).intl;
  obj[1] = intl2.string(setAuthenticator(1236).t.TKop3X);
  items[1] = obj;
  obj = {
    style: callback().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  };
  return jsx(setAuthenticator(1297).RadioGroup, {
    style: callback().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  });
}
createCacheKey = { radioItem: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let closure_8 = { [obj1.AUTHENTICATE]: NativeModules.DCDSecurityKeyManager.authenticate, [obj1.ANDROID_PASSKEY]: NativeModules.DCDSecurityKeyManager.authenticatePasskey };
let result = require("set").fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default function WebAuthnScreen() {
  let obj = finish(15268);
  const mfaChallenge = obj.useMfaChallenge();
  finish = mfaChallenge.finish;
  obj1 = React;
  [tmp6, importDefault] = first(React.useState(false), 2);
  const tmp5 = first(React.useState(false), 2);
  [tmp8, dependencyMap] = first(React.useState(undefined), 2);
  const tmp7 = first(React.useState(undefined), 2);
  let tmp4Result = tmp4(React.useState(finish(500).isAndroid() ? tmp9.ANDROID_PASSKEY : tmp9.AUTHENTICATE), 2);
  first = tmp4Result[0];
  tmp4Result = tmp4(obj1.useState(false), 2);
  [tmp13, closure_4] = tmp4Result;
  const methods = mfaChallenge.mfaChallenge.methods;
  const challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [first];
  const memo = obj1.useMemo(() => closure_1_8[first], items);
  const items1 = [memo, challenge, finish];
  const callback = obj1.useCallback(() => {
    callback2(undefined);
    callback(true);
    const promise = memo(challenge);
    const nextPromise = memo(challenge).then((data) => callback({ mfaType: "webauthn", data }));
    const nextPromise1 = memo(challenge).then((data) => callback({ mfaType: "webauthn", data })).then(() => callback4(true));
    memo(challenge).then((data) => callback({ mfaType: "webauthn", data })).then(() => callback4(true)).catch((message) => {
      if (message instanceof closure_1_0(closure_1_2[10]).HTTPResponseError) {
        const intl = tmp(tmp2[6]).intl;
        callback3(intl.string(tmp(tmp2[6]).t.xSCvBf));
      } else {
        const result = tmp(tmp2[11]).captureWebAuthnException(message, {});
        callback3(message.message);
        const tmpResult = tmp(tmp2[11]);
      }
    }).finally(() => callback2(false));
  }, items1);
  obj = { headerText: null, subtitle: null, headerImage: null, content: null, submit: null, mfaMethod: "webauthn", error: null };
  const obj3 = finish(500);
  const tmp17 = importDefault;
  let intl = tmp(1236).intl;
  obj[0] = intl.string(finish(1236).t.saHocI);
  const intl2 = tmp(1236).intl;
  obj[1] = intl2.string(finish(1236).t.YpMrqM);
  obj[2] = challenge(finish(14330).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = _promptForRegisterCredentialDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj = { authenticatorSelection: null, setAuthenticator: null, inProgress: null };
    obj[0] = first;
    obj[1] = tmp4Result[1];
    let tmp20 = tmp6;
    if (!tmp6) {
      tmp20 = tmp13;
    }
    obj[2] = tmp20;
    shouldDisplayAndroidFidoSelector = tmp16(AndroidAuthRadioGroup, obj);
    const tmp19 = AndroidAuthRadioGroup;
  }
  obj[3] = shouldDisplayAndroidFidoSelector;
  obj1 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const tmp18 = MFAOptionScreenDefault;
  const intl3 = tmp(1236).intl;
  obj1[1] = intl3.string(finish(1236).t.Xr3Eks);
  let tmp22 = tmp6;
  if (!tmp6) {
    tmp22 = tmp13;
  }
  obj1[2] = tmp22;
  obj1[3] = tmp6;
  obj1[4] = callback;
  obj[4] = challenge(MFAButtonDefault, obj1);
  obj[6] = tmp8;
  return challenge(tmp18, obj);
};
export const AuthenticatorOption = obj1;