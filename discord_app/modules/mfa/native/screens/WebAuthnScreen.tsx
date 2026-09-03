// === Module 15511: AndroidAuthRadioGroup ===

// Module 15511 (AndroidAuthRadioGroup)
import ThemesDefault from "Themes" /* 709 */;
import _promptForRegisterCredentialDefault from "_promptForRegisterCredential" /* 7734 */;
import MFAOptionScreenDefault from "MFAOptionScreen" /* 15512 */;
import MFAButtonDefault from "MFAButton" /* 15515 */;
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
  const intl = setAuthenticator(1233).intl;
  obj[1] = intl.string(setAuthenticator(1233).t.PVVXRI);
  const items = [obj, ];
  obj = { value: obj1.AUTHENTICATE, name: null };
  const intl2 = setAuthenticator(1233).intl;
  obj[1] = intl2.string(setAuthenticator(1233).t.TKop3X);
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
  return jsx(setAuthenticator(1296).RadioGroup, {
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

export default function WebAuthnScreen(arg0) {
  ({ mfaChallenge, finish } = arg0);
  importDefault = undefined;
  dependencyMap = undefined;
  let first;
  let React;
  let challenge;
  let memo;
  let obj = React;
  [tmp3, c1] = first(React.useState(false), 2);
  const tmp4 = first(React.useState(undefined), 2);
  dependencyMap = tmp4[1];
  obj1 = finish(1234);
  let tmpResult = tmp(React.useState(obj1.isAndroid() ? tmp7.ANDROID_PASSKEY : tmp7.AUTHENTICATE), 2);
  first = tmpResult[0];
  tmpResult = tmp(obj.useState(false), 2);
  [tmp11, c4] = tmpResult;
  const methods = mfaChallenge.methods;
  challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [first];
  memo = obj.useMemo(() => closure_1_8[first], items);
  const items1 = [memo, challenge, finish];
  const callback = obj.useCallback(() => {
    callback(undefined);
    _undefined(true);
    const promise = memo(challenge);
    const nextPromise = memo(challenge).then((data) => callback({ mfaType: "webauthn", data }));
    const nextPromise1 = memo(challenge).then((data) => callback({ mfaType: "webauthn", data })).then(() => callback4(true));
    memo(challenge).then((data) => callback({ mfaType: "webauthn", data })).then(() => callback4(true)).catch((message) => {
      if (message instanceof closure_1_0(closure_1_2[9]).HTTPResponseError) {
        const intl = tmp(tmp2[6]).intl;
        callback3(intl.string(tmp(tmp2[6]).t.xSCvBf));
      } else {
        const result = tmp(tmp2[10]).captureWebAuthnException(message, {});
        callback3(message.message);
        const tmpResult = tmp(tmp2[10]);
      }
    }).finally(() => callback2(false));
  }, items1);
  obj = { headerText: null, subtitle: null, headerImage: null, content: null, submit: null, screenProps: null, mfaMethod: "webauthn", error: null };
  const tmp15 = importDefault;
  const tmp2 = first(React.useState(false), 2);
  let intl = tmp5(1233).intl;
  obj[0] = intl.string(finish(1233).t.saHocI);
  const intl2 = tmp5(1233).intl;
  obj[1] = intl2.string(finish(1233).t.YpMrqM);
  obj[2] = challenge(finish(14569).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = _promptForRegisterCredentialDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj = { authenticatorSelection: null, setAuthenticator: null, inProgress: null };
    obj[0] = first;
    obj[1] = tmpResult[1];
    let tmp18 = tmp3;
    if (!tmp3) {
      tmp18 = tmp11;
    }
    obj[2] = tmp18;
    shouldDisplayAndroidFidoSelector = tmp14(AndroidAuthRadioGroup, obj);
    const tmp17 = AndroidAuthRadioGroup;
  }
  obj[3] = shouldDisplayAndroidFidoSelector;
  obj1 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const tmp16 = MFAOptionScreenDefault;
  const intl3 = tmp5(1233).intl;
  obj1[1] = intl3.string(finish(1233).t.Xr3Eks);
  let tmp20 = tmp3;
  if (!tmp3) {
    tmp20 = tmp11;
  }
  obj1[2] = tmp20;
  obj1[3] = tmp3;
  obj1[4] = callback;
  obj[4] = challenge(MFAButtonDefault, obj1);
  obj[5] = { mfaChallenge, finish };
  obj[7] = tmp4[0];
  return challenge(tmp16, obj);
};
export const AuthenticatorOption = obj1;