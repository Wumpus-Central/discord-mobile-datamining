// === Module 15780: WebAuthnScreen ===

// Module 15780 (WebAuthnScreen)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import NativeSecurityKeyManagerModuleDefault from "NativeSecurityKeyManagerModule" /* 5948 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6622 */;
import MfaOptionScreenDefault from "MfaOptionScreen" /* 15782 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const buttonDefault = tmp15(15781);
require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { radioItem: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md } };
let closure_6 = createStyles.createStyles(obj2);
let obj4 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let obj5 = { [AUTHENTICATE]: NativeSecurityKeyManagerModuleDefault.authenticate, [ANDROID_PASSKEY]: NativeSecurityKeyManagerModuleDefault.authenticatePasskey };
({ AUTHENTICATE, ANDROID_PASSKEY } = obj4);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function AndroidAuthRadioGroup(inProgress) {
  const cResult = c.c(9);
  ({ authenticatorSelection, setAuthenticator } = inProgress);
  inProgress = inProgress.inProgress;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: obj4.ANDROID_PASSKEY, name: null };
    const intl = util.intl;
    obj2.name = intl.string(util.t.PVVXRI);
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, ];
    const obj3 = { value: obj4.AUTHENTICATE, name: null };
    const intl2 = util.intl;
    obj3.name = intl2.string(util.t.TKop3X);
    items[1] = obj3;
    cResult[1] = items;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== setAuthenticator) {
    const fn = function f(value) {
      return setAuthenticator(value.value);
    };
    cResult[2] = setAuthenticator;
    cResult[3] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === authenticatorSelection) {
    if (cResult[5] === inProgress) {
      if (cResult[6] === tmp4.radioItem) {
        if (cResult[7] === tmp9) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  obj4 = { style: tmp4.radioItem, options: tmp7, onChange: tmp9, value: authenticatorSelection, disabled: inProgress, withSpacing: true };
  const tmp11 = jsx(native.RadioGroup, { style: tmp4.radioItem, options: tmp7, onChange: tmp9, value: authenticatorSelection, disabled: inProgress, withSpacing: true });
  cResult[4] = authenticatorSelection;
  cResult[5] = inProgress;
  cResult[6] = tmp4.radioItem;
  cResult[7] = tmp9;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : (function AndroidAuthRadioGroup(setAuthenticator) {
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  const obj = { value: obj4.ANDROID_PASSKEY, name: null };
  const intl = util.intl;
  obj.name = intl.string(util.t.PVVXRI);
  const items = [obj, ];
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
    withSpacing: true
  });
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function WebAuthnScreen(arg0) {
  const cResult = finish(576).c(27);
  ({ mfaChallenge, finish } = arg0);
  let num = 2;
  const obj = finish(576);
  const obj2 = challenge;
  [tmp6, importDefault] = challenge.useState(false);
  const tmp5 = _slicedToArray(challenge.useState(false), 2);
  [r10023, dependencyMap] = challenge.useState(undefined);
  const tmp7 = _slicedToArray(challenge.useState(undefined), 2);
  const obj3 = finish(1381);
  [tmp10, tmp11] = challenge.useState(finish(1381).isAndroid() ? obj4.ANDROID_PASSKEY : obj4.AUTHENTICATE);
  const tmp4Result = _slicedToArray(challenge.useState(finish(1381).isAndroid() ? obj4.ANDROID_PASSKEY : obj4.AUTHENTICATE), num);
  [tmp13, _slicedToArray] = obj2.useState(false);
  if (cResult[0] !== mfaChallenge.methods) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function m(type) {
        return "webauthn" === type.type;
      };
      cResult[num] = fn;
      let tmp15 = fn;
    } else {
      tmp15 = cResult[2];
    }
    const methods = mfaChallenge.methods;
    const found = methods.find(tmp15);
    cResult[0] = mfaChallenge.methods;
    num = 1;
    cResult[1] = found;
  } else {
    challenge = cResult[1].challenge;
    jsx = tmp19;
    if (cResult[3] === obj5[tmp10]) {
      if (cResult[4] === challenge) {
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = finish(1126).intl;
          const stringResult = intl.string(finish(1126).t.saHocI);
          const intl2 = finish(1126).intl;
          const stringResult1 = intl2.string(finish(1126).t.YpMrqM);
          class O {
            constructor() {
              tmp = closure_2(undefined);
              tmp2 = closure_1(true);
              promise = closure_5(challenge);
              nextPromise = promise.then((data) => finish({ mfaType: "webauthn", data }));
              nextPromise1 = nextPromise.then(() => closure_1_3(true));
              catchPromise = nextPromise1.catch((error) => {
                if (error instanceof finish(1294).HTTPResponseError) {
                  const intl = finish(1126).intl;
                  dependencyMap(intl.string(finish(1126).t.xSCvBf));
                } else {
                  const result = finish(6624).captureWebAuthnException(error, {});
                  dependencyMap(error.message);
                  const tmpResult = finish(6624);
                }
              });
              cleanupPromise = catchPromise.finally(() => closure_1_1(false));
              return;
            }
          }
          const tmp27 = jsx(finish(14873).KeyImage, {});
          cResult[7] = stringResult;
          cResult[8] = stringResult1;
          cResult[9] = tmp27;
        }
        class O {
          constructor() {
            tmp = closure_2(undefined);
            tmp2 = closure_1(true);
            promise = closure_5(challenge);
            nextPromise = promise.then((data) => finish({ mfaType: "webauthn", data }));
            nextPromise1 = nextPromise.then(() => closure_1_3(true));
            catchPromise = nextPromise1.catch((error) => {
              if (error instanceof finish(1294).HTTPResponseError) {
                const intl = finish(1126).intl;
                dependencyMap(intl.string(finish(1126).t.xSCvBf));
              } else {
                const result = finish(6624).captureWebAuthnException(error, {});
                dependencyMap(error.message);
                const tmpResult = finish(6624);
              }
            });
            cleanupPromise = catchPromise.finally(() => closure_1_1(false));
            return;
          }
        }
        let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
        if (shouldDisplayAndroidFidoSelector) {
          obj4 = { authenticatorSelection: tmp10, setAuthenticator: tmp11, inProgress: null };
          class O {
            constructor() {
              tmp = closure_2(undefined);
              tmp2 = closure_1(true);
              promise = closure_5(challenge);
              nextPromise = promise.then((data) => finish({ mfaType: "webauthn", data }));
              nextPromise1 = nextPromise.then(() => closure_1_3(true));
              catchPromise = nextPromise1.catch((error) => {
                if (error instanceof finish(1294).HTTPResponseError) {
                  const intl = finish(1126).intl;
                  dependencyMap(intl.string(finish(1126).t.xSCvBf));
                } else {
                  const result = finish(6624).captureWebAuthnException(error, {});
                  dependencyMap(error.message);
                  const tmpResult = finish(6624);
                }
              });
              cleanupPromise = catchPromise.finally(() => closure_1_1(false));
              return;
            }
          }
          obj4.inProgress = tmp6;
          shouldDisplayAndroidFidoSelector = <closure_9 authenticatorSelection={tmp10} setAuthenticator={tmp11} inProgress={null} />;
        }
        cResult[10] = tmp10;
        cResult[11] = tmp13;
        cResult[12] = tmp6;
        cResult[13] = shouldDisplayAndroidFidoSelector;
      }
    }
    class O {
      constructor() {
        tmp = closure_2(undefined);
        tmp2 = closure_1(true);
        promise = closure_5(challenge);
        nextPromise = promise.then((data) => finish({ mfaType: "webauthn", data }));
        nextPromise1 = nextPromise.then(() => closure_1_3(true));
        catchPromise = nextPromise1.catch((error) => {
          if (error instanceof finish(1294).HTTPResponseError) {
            const intl = finish(1126).intl;
            dependencyMap(intl.string(finish(1126).t.xSCvBf));
          } else {
            const result = finish(6624).captureWebAuthnException(error, {});
            dependencyMap(error.message);
            const tmpResult = finish(6624);
          }
        });
        cleanupPromise = catchPromise.finally(() => closure_1_1(false));
        return;
      }
    }
    cResult[3] = obj5[tmp10];
    cResult[4] = challenge;
    cResult[5] = finish;
    cResult[6] = O;
  }
  const tmp4Result2 = _slicedToArray(obj2.useState(false), num);
}) : (function WebAuthnScreen(arg0) {
  ({ mfaChallenge, finish } = arg0);
  importDefault = undefined;
  let authenticatorSelection;
  noop = undefined;
  [tmp3, c1] = authenticatorSelection(noop.useState(false), 2);
  const tmp4 = authenticatorSelection(noop.useState(undefined), 2);
  dependencyMap = tmp4[1];
  const tmp2 = authenticatorSelection(noop.useState(false), 2);
  let tmpResult = authenticatorSelection(noop.useState(finish(1381).isAndroid() ? obj4.ANDROID_PASSKEY : obj4.AUTHENTICATE), 2);
  authenticatorSelection = tmpResult[0];
  const obj2 = finish(1381);
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
    const nextPromise1 = memo(challenge).then((data) => finish({ mfaType: "webauthn", data })).then(() => closure_1_4(true));
    memo(challenge).then((data) => finish({ mfaType: "webauthn", data })).then(() => closure_1_4(true)).catch((error) => {
      if (error instanceof finish(1294).HTTPResponseError) {
        const intl = finish(1126).intl;
        dependencyMap(intl.string(finish(1126).t.xSCvBf));
      } else {
        const result = finish(6624).captureWebAuthnException(error, {});
        dependencyMap(error.message);
        const tmpResult = finish(6624);
      }
    }).finally(() => _undefined(false));
  }, items1);
  const obj3 = { headerText: null, subtitle: null, headerImage: null, content: null, submit: null, screenProps: null, mfaMethod: "webauthn", error: null };
  const tmpResult2 = authenticatorSelection(noop.useState(false), 2);
  let intl = finish(1126).intl;
  obj3.headerText = intl.string(finish(1126).t.saHocI);
  const intl2 = finish(1126).intl;
  obj3.subtitle = intl2.string(finish(1126).t.YpMrqM);
  obj3.headerImage = challenge(finish(14873).KeyImage, {});
  let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj4 = { authenticatorSelection, setAuthenticator: tmpResult[1], inProgress: null };
    let tmp18 = tmp11;
    if (!tmp11) {
      tmp18 = tmp11;
    }
    obj4.inProgress = tmp18;
    shouldDisplayAndroidFidoSelector = tmp14(closure_9, obj4);
  }
  obj3.content = shouldDisplayAndroidFidoSelector;
  obj5 = { variant: "primary", text: null, loading: null, disabled: null, onPress: null };
  const tmp16 = MfaOptionScreenDefault;
  const intl3 = finish(1126).intl;
  obj5.text = intl3.string(finish(1126).t.Xr3Eks);
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
});
export const AuthenticatorOption = obj4;