// === Module 15669: WebAuthnScreen ===

// Module 15669 (WebAuthnScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6949 */;
import MfaOptionScreenDefault from "MfaOptionScreen" /* 15670 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const buttonDefault = tmp15(15673);
require = fn;
function AndroidAuthRadioGroup(setAuthenticator) {
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  let obj = { value: obj1.ANDROID_PASSKEY, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PVVXRI);
  const items = [obj, ];
  obj = { value: obj1.AUTHENTICATE, name: null };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t.TKop3X);
  items[1] = obj;
  obj = {
    style: closure_6().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  };
  return jsx(native.RadioGroup, {
    style: closure_6().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true
  });
}
const NativeModules = fn(17).NativeModules;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { radioItem: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
createStyles.radioItem = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
let obj1 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let closure_8 = { [obj1.AUTHENTICATE]: NativeModules.DCDSecurityKeyManager.authenticate, [obj1.ANDROID_PASSKEY]: NativeModules.DCDSecurityKeyManager.authenticatePasskey };
const size = fn(2);
let result = size.fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default function WebAuthnScreen(arg0) {
  ({ mfaChallenge, finish } = arg0);
  importDefault = undefined;
  let authenticatorSelection;
  noop = undefined;
  let obj = noop;
  [tmp3, c1] = authenticatorSelection(noop.useState(false), 2);
  const tmp4 = authenticatorSelection(noop.useState(undefined), 2);
  dependencyMap = tmp4[1];
  obj1 = finish(1115);
  let tmpResult = tmp(noop.useState(obj1.isAndroid() ? tmp7.ANDROID_PASSKEY : tmp7.AUTHENTICATE), 2);
  authenticatorSelection = tmpResult[0];
  tmpResult = tmp(obj.useState(false), 2);
  [tmp11, c4] = tmpResult;
  const methods = mfaChallenge.methods;
  const challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [authenticatorSelection];
  const memo = obj.useMemo(() => closure_8[first], items);
  const items1 = [memo, challenge, finish];
  const callback = obj.useCallback(() => {
    dependencyMap(undefined);
    _undefined(true);
    const promise = memo(challenge);
    const nextPromise = memo(challenge).then((data) => finish({ mfaType: "webauthn", data }));
    const nextPromise1 = memo(challenge).then((data) => finish({ mfaType: "webauthn", data })).then(() => closure_1_4(true));
    memo(challenge).then((data) => finish({ mfaType: "webauthn", data })).then(() => closure_1_4(true)).catch((error) => {
      if (error instanceof finish(1272).HTTPResponseError) {
        const intl = tmp(1114).intl;
        dependencyMap(intl.string(tmp(1114).t.xSCvBf));
      } else {
        const result = tmp(6951).captureWebAuthnException(error, {});
        dependencyMap(error.message);
        const tmpResult = tmp(6951);
      }
    }).finally(() => _undefined(false));
  }, items1);
  obj = { headerText: null, subtitle: null, headerImage: null, content: null, submit: null, screenProps: null, mfaMethod: "webauthn", error: null };
  const tmp2 = authenticatorSelection(noop.useState(false), 2);
  let intl = tmp5(1114).intl;
  obj.headerText = intl.string(finish(1114).t.saHocI);
  const intl2 = tmp5(1114).intl;
  obj.subtitle = intl2.string(finish(1114).t.YpMrqM);
  obj.headerImage = challenge(finish(14676).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj = { authenticatorSelection, setAuthenticator: tmpResult[1], inProgress: null };
    let tmp18 = tmp3;
    if (!tmp3) {
      tmp18 = tmp11;
    }
    obj.inProgress = tmp18;
    shouldDisplayAndroidFidoSelector = tmp14(AndroidAuthRadioGroup, obj);
  }
  obj.content = shouldDisplayAndroidFidoSelector;
  obj1 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const tmp16 = MfaOptionScreenDefault;
  const intl3 = tmp5(1114).intl;
  obj1.text = intl3.string(finish(1114).t.Xr3Eks);
  let tmp20 = tmp3;
  if (!tmp3) {
    tmp20 = tmp11;
  }
  obj1.loading = tmp20;
  obj1.disabled = tmp3;
  obj1.onPress = callback;
  obj.submit = challenge(buttonDefault, obj1);
  obj.screenProps = { mfaChallenge, finish };
  obj.error = tmp4[0];
  return challenge(tmp16, obj);
};
export const AuthenticatorOption = obj1;