// discord_app/modules/mfa/native/screens/WebAuthnScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import NativeSecurityKeyManagerModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeSecurityKeyManagerModule.tsx";
import NativeCeremoniesDefault from "../../../webauthn/native/NativeCeremonies.tsx";
import MfaOptionScreenDefault from "MfaOptionScreen.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const buttonDefault = tmp15(15206);
require = fn;
function AndroidAuthRadioGroup(setAuthenticator) {
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  const obj = { value: obj4.ANDROID_PASSKEY, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PVVXRI);
  const items = [obj];
  const obj2 = { value: obj4.AUTHENTICATE, name: null };
  const intl2 = util.intl;
  obj2.name = intl2.string(util.t.TKop3X);
  items[1] = obj2;
  const tmp = closure_6();
  return jsx(native.RadioGroup, {
    style: closure_6().radioItem,
    options: items,
    onChange(value) {
      return setAuthenticator(value.value);
    },
    value: authenticatorSelection,
    disabled: inProgress,
    withSpacing: true,
  });
}
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = {
  radioItem: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md },
};
let closure_6 = createStyles.createStyles(obj2);
let obj4 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let obj5 = {
  [AUTHENTICATE]: NativeSecurityKeyManagerModuleDefault.authenticate,
  [ANDROID_PASSKEY]: NativeSecurityKeyManagerModuleDefault.authenticatePasskey,
};
({ AUTHENTICATE, ANDROID_PASSKEY } = obj4);
const size = fn(2);
let result = size.fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default function WebAuthnScreen(arg0) {
  ({ mfaChallenge, finish } = arg0);
  importDefault = undefined;
  let authenticatorSelection;
  noop = undefined;
  [tmp3, c1] = authenticatorSelection(noop.useState(false), 2);
  const tmp4 = authenticatorSelection(noop.useState(undefined), 2);
  dependencyMap = tmp4[1];
  const tmp2 = authenticatorSelection(noop.useState(false), 2);
  let tmpResult = authenticatorSelection(
    noop.useState(finish(1364).isAndroid() ? obj4.ANDROID_PASSKEY : obj4.AUTHENTICATE),
    2,
  );
  authenticatorSelection = tmpResult[0];
  const obj2 = finish(1364);
  [tmp11, c4] = authenticatorSelection(noop.useState(false), 2);
  const methods = mfaChallenge.methods;
  const challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [authenticatorSelection];
  const memo = obj.useMemo(() => obj5[first], items);
  const items1 = [memo, challenge, finish];
  const callback = obj.useCallback(() => {
    dependencyMap(undefined);
    _undefined(true);
    const promise = memo(challenge);
    const nextPromise = memo(challenge).then((data) => finish({ mfaType: "webauthn", data }));
    const nextPromise1 = memo(challenge)
      .then((data) => finish({ mfaType: "webauthn", data }))
      .then(() => closure_1_4(true));
    memo(challenge)
      .then((data) => finish({ mfaType: "webauthn", data }))
      .then(() => closure_1_4(true))
      .catch((error) => {
        if (error instanceof finish(1271).HTTPResponseError) {
          const intl = finish(1115).intl;
          dependencyMap(intl.string(finish(1115).t.xSCvBf));
        } else {
          const result = finish(6365).captureWebAuthnException(error, {});
          dependencyMap(error.message);
          const tmpResult = finish(6365);
        }
      })
      .finally(() => _undefined(false));
  }, items1);
  const obj3 = {
    headerText: null,
    subtitle: null,
    headerImage: null,
    content: null,
    submit: null,
    screenProps: null,
    mfaMethod: "webauthn",
    error: null,
  };
  const tmpResult2 = authenticatorSelection(noop.useState(false), 2);
  let intl = finish(1115).intl;
  obj3.headerText = intl.string(finish(1115).t.saHocI);
  const intl2 = finish(1115).intl;
  obj3.subtitle = intl2.string(finish(1115).t.YpMrqM);
  obj3.headerImage = challenge(finish(14211).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj4 = { authenticatorSelection, setAuthenticator: tmpResult[1], inProgress: null };
    let tmp18 = tmp11;
    if (!tmp11) {
      tmp18 = tmp11;
    }
    obj4.inProgress = tmp18;
    shouldDisplayAndroidFidoSelector = tmp14(AndroidAuthRadioGroup, obj4);
  }
  obj3.content = shouldDisplayAndroidFidoSelector;
  obj5 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const tmp16 = MfaOptionScreenDefault;
  const intl3 = finish(1115).intl;
  obj5.text = intl3.string(finish(1115).t.Xr3Eks);
  let tmp20 = tmp11;
  if (!tmp11) {
    tmp20 = tmp11;
  }
  obj5.loading = tmp20;
  obj5.disabled = tmp11;
  obj5.onPress = callback;
  obj3.submit = challenge(buttonDefault, obj5);
  obj3.screenProps = { mfaChallenge, finish };
  obj3.error = tmp4[0];
  return challenge(tmp16, obj3);
}
export const AuthenticatorOption = obj4;
