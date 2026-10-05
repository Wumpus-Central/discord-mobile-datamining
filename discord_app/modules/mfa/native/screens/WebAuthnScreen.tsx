// === Module 15502: WebAuthnScreen ===

// Module 15502 (WebAuthnScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import react_nativeDefault from "react-native" /* 6089 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6437 */;
import buttonDefault from "button" /* 15503 */;
import MfaOptionScreenDefault from "MfaOptionScreen" /* 15504 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let cleanupPromise, dependencyMap, importDefault;

let ANDROID_PASSKEY;
let AUTHENTICATE;
let obj2;
let react = react_mod;
let jsx = Fragment.jsx;
let obj = { radioItem: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { AUTHENTICATE: 0, [0]: "AUTHENTICATE", ANDROID_PASSKEY: 1, [1]: "ANDROID_PASSKEY" };
let obj4 = { [AUTHENTICATE]: react_nativeDefault.authenticate, [ANDROID_PASSKEY]: react_nativeDefault.authenticatePasskey };
({ AUTHENTICATE, ANDROID_PASSKEY } = obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((inProgress) => {
  let authenticatorSelection;
  let first;
  let intl;
  let intl2;
  let setAuthenticator;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(9);
  ({ authenticatorSelection, setAuthenticator } = inProgress);
  inProgress = inProgress.inProgress;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: obj3.ANDROID_PASSKEY, name: intl.string(intl4.t.PVVXRI) };
    intl = intl4.intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, ];
    obj3 = { value: obj3.AUTHENTICATE, name: intl2.string(intl4.t.TKop3X) };
    intl2 = intl4.intl;
    items[1] = obj3;
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== setAuthenticator) {
    const fn = function f(value) {
      return setAuthenticator(value.value);
    };
    cResult[2] = setAuthenticator;
    cResult[3] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === authenticatorSelection) {
    if (cResult[5] === inProgress) {
      if (cResult[6] === tmp4.radioItem) {
        let tmp10;
        if (cResult[7] === tmp9) {
          tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  const tmp11 = jsx(native.RadioGroup, { style: tmp4.radioItem, options: tmp7, onChange: tmp9, value: authenticatorSelection, disabled: inProgress, withSpacing: true });
  cResult[4] = authenticatorSelection;
  cResult[5] = inProgress;
  cResult[6] = tmp4.radioItem;
  cResult[7] = tmp9;
  cResult[8] = tmp11;
  tmp10 = tmp11;
}) : ((setAuthenticator) => {
  let authenticatorSelection;
  let inProgress;
  let intl;
  let intl2;
  function onChange(value) {
    return setAuthenticator(value.value);
  }
  setAuthenticator = setAuthenticator.setAuthenticator;
  ({ authenticatorSelection, inProgress } = setAuthenticator);
  const obj = { value: obj3.ANDROID_PASSKEY, name: intl.string(intl4.t.PVVXRI) };
  const tmp = closure_6();
  intl = intl4.intl;
  const items = [obj, ];
  const obj2 = { value: obj3.AUTHENTICATE, name: intl2.string(intl4.t.TKop3X) };
  intl2 = intl4.intl;
  items[1] = obj2;
  obj3 = { style: tmp.radioItem, options: items, onChange, value: authenticatorSelection, disabled: inProgress, withSpacing: true };
  return jsx(native.RadioGroup, { style: tmp.radioItem, options: items, onChange, value: authenticatorSelection, disabled: inProgress, withSpacing: true });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let challenge;
  let closure_5;
  let finish;
  let mfaChallenge;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp33;
  let tmp6;
  let tmp8;
  let obj = finish(576);
  const cResult = obj.c(27);
  ({ mfaChallenge, finish } = arg0);
  [tmp6, importDefault] = _slicedToArray(challenge.useState(false), 2);
  const tmp5 = _slicedToArray(challenge.useState(false), 2);
  [tmp8, dependencyMap] = _slicedToArray(challenge.useState(undefined), 2);
  const useState = challenge.useState;
  const tmp7 = _slicedToArray(challenge.useState(undefined), 2);
  obj3 = finish(1369);
  [tmp11, tmp12] = useState(obj3.isAndroid() ? obj3.ANDROID_PASSKEY : obj3.AUTHENTICATE);
  _slicedToArray(useState(obj3.isAndroid() ? obj3.ANDROID_PASSKEY : obj3.AUTHENTICATE), 2);
  const tmp4Result2 = _slicedToArray(challenge.useState(false), 2);
  [tmp14, _slicedToArray] = tmp4Result2;
  if (cResult[0] !== mfaChallenge.methods) {
    let tmp17;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function m(type) {
        return "webauthn" === type.type;
      };
      cResult[2] = fn;
      tmp17 = fn;
    } else {
      tmp17 = cResult[2];
    }
    const methods = mfaChallenge.methods;
    const found = methods.find(tmp17);
    cResult[0] = mfaChallenge.methods;
    cResult[1] = found;
    tmp15 = found;
  } else {
    tmp15 = cResult[1];
  }
  challenge = tmp15.challenge;
  jsx = tmp19;
  if (cResult[3] === obj4[tmp11]) {
    if (cResult[4] === challenge) {
      let tmp20;
      let tmp24;
      let tmp23;
      let tmp22;
      if (cResult[5] === finish) {
        tmp20 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = finish(1126).intl;
        const stringResult = intl.string(finish(1126).t.saHocI);
        const intl2 = finish(1126).intl;
        const stringResult1 = intl2.string(finish(1126).t.YpMrqM);
        const tmp28 = jsx(finish(14596).KeyImage, {});
        cResult[7] = stringResult;
        cResult[8] = stringResult1;
        cResult[9] = tmp28;
        tmp24 = tmp28;
        tmp23 = stringResult1;
        tmp22 = stringResult;
      } else {
        tmp22 = cResult[7];
        tmp23 = cResult[8];
        tmp24 = cResult[9];
      }
      if (cResult[10] === tmp11) {
        if (cResult[11] === tmp14) {
          let tmp29;
          let tmp34;
          if (cResult[12] === tmp14) {
            tmp29 = cResult[13];
          }
          const _Symbol3 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = finish(1126).intl;
            const stringResult2 = intl3.string(finish(1126).t.Xr3Eks);
            cResult[14] = stringResult2;
            tmp34 = stringResult2;
          } else {
            tmp34 = cResult[14];
          }
          if (cResult[15] === tmp20) {
            if (cResult[16] === (tmp14 || tmp14)) {
              let tmp37;
              if (cResult[17] === tmp14) {
                tmp37 = cResult[18];
              }
              if (cResult[19] === finish) {
                let tmp41;
                if (cResult[20] === mfaChallenge) {
                  tmp41 = cResult[21];
                }
                if (cResult[22] === tmp8) {
                  if (cResult[23] === tmp37) {
                    if (cResult[24] === tmp41) {
                      let tmp42;
                      if (cResult[25] === tmp29) {
                        tmp42 = cResult[26];
                      }
                      return tmp42;
                    }
                  }
                }
                const tmp45 = jsx(MfaOptionScreenDefault, { headerText: tmp22, subtitle: tmp23, headerImage: tmp24, content: tmp29, submit: tmp37, screenProps: tmp41, mfaMethod: "webauthn", error: tmp8 });
                cResult[22] = tmp8;
                cResult[23] = tmp37;
                cResult[24] = tmp41;
                cResult[25] = tmp29;
                cResult[26] = tmp45;
                tmp42 = tmp45;
              }
              const obj5 = { mfaChallenge, finish };
              cResult[19] = finish;
              cResult[20] = mfaChallenge;
              cResult[21] = obj5;
              tmp41 = obj5;
            }
          }
          const tmp40 = jsx(buttonDefault, { variant: "primary", text: tmp34, loading: tmp14 || tmp14, disabled: tmp14, onPress: tmp20 });
          cResult[15] = tmp20;
          cResult[16] = tmp14 || tmp14;
          cResult[17] = tmp14;
          cResult[18] = tmp40;
          tmp37 = tmp40;
        }
      }
      let shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
      if (shouldDisplayAndroidFidoSelector) {
        const obj7 = { authenticatorSelection: tmp11, setAuthenticator: tmp12, inProgress: tmp33 };
        tmp33 = tmp14;
        const tmp31 = jsx;
        if (!tmp14) {
          tmp33 = tmp14;
        }
        shouldDisplayAndroidFidoSelector = tmp31(closure_9, obj7);
      }
      cResult[10] = tmp11;
      cResult[11] = tmp14;
      cResult[12] = tmp14;
      cResult[13] = shouldDisplayAndroidFidoSelector;
      tmp29 = shouldDisplayAndroidFidoSelector;
    }
  }
  class O {
    constructor() {
      tmp = closure_2(undefined);
      tmp2 = closure_1(true);
      promise = closure_5(challenge);
      nextPromise = promise.then((data) => {
        const obj = { mfaType: "webauthn", data };
        return finish(obj);
      });
      nextPromise1 = nextPromise.then(() => closure_1_3(true));
      catchPromise = nextPromise1.catch((error) => {
        if (error instanceof finish(dependencyMap[11]).HTTPResponseError) {
          const intl = finish(dependencyMap[8]).intl;
          closure_1_2(intl.string(finish(dependencyMap[8]).t.xSCvBf));
        } else {
          const tmpResult = finish(dependencyMap[12]);
          const result = tmpResult.captureWebAuthnException(error, {});
          closure_1_2(error.message);
        }
      });
      cleanupPromise = catchPromise.finally(() => closure_1_1(false));
      return;
    }
  }
  cResult[3] = obj4[tmp11];
  cResult[4] = challenge;
  cResult[5] = finish;
  cResult[6] = O;
  tmp20 = O;
}) : ((arg0) => {
  let _undefined;
  let c1;
  let c4;
  let closure_2;
  let finish;
  let intl;
  let intl2;
  let intl3;
  let mfaChallenge;
  let obj5;
  let shouldDisplayAndroidFidoSelector;
  let tmp13;
  let tmp17Result;
  let tmp20;
  let tmp3;
  ({ mfaChallenge, finish } = arg0);
  importDefault = undefined;
  let first1;
  react = undefined;
  let obj = react;
  [tmp3, c1] = first1(react.useState(false), 2);
  const tmp2 = first1(react.useState(false), 2);
  const tmp4 = first1(react.useState(undefined), 2);
  dependencyMap = tmp4[1];
  const first = tmp4[0];
  const useState = react.useState;
  const obj2 = finish(1369);
  let tmpResult = tmp(useState(obj2.isAndroid() ? tmp8.ANDROID_PASSKEY : tmp8.AUTHENTICATE), 2);
  first1 = tmpResult[0];
  const tmp11 = tmpResult[1];
  [tmp13, c4] = first1(obj.useState(false), 2);
  const methods = mfaChallenge.methods;
  first1(obj.useState(false), 2);
  const challenge = methods.find((type) => "webauthn" === type.type).challenge;
  const items = [first1];
  const memo = obj.useMemo(() => obj4[first1], items);
  const items1 = [memo, challenge, finish];
  const callback = obj.useCallback(() => {
    closure_2(undefined);
    _undefined(true);
    const promise = memo(challenge);
    const nextPromise = promise.then((data) => {
      const obj = { mfaType: "webauthn", data };
      return finish(obj);
    });
    const nextPromise1 = nextPromise.then(() => closure_1_4(true));
    const catchPromise = nextPromise1.catch((error) => {
      if (error instanceof finish(closure_2[11]).HTTPResponseError) {
        const intl = finish(closure_2[8]).intl;
        closure_1_2(intl.string(finish(closure_2[8]).t.xSCvBf));
      } else {
        const tmpResult = finish(closure_2[12]);
        const result = tmpResult.captureWebAuthnException(error, {});
        closure_1_2(error.message);
      }
    });
    catchPromise.finally(() => _undefined(false));
  }, items1);
  obj3 = { headerText: intl.string(finish(1126).t.saHocI), subtitle: intl2.string(finish(1126).t.YpMrqM), headerImage: challenge(finish(14596).KeyImage, {}), content: shouldDisplayAndroidFidoSelector, submit: challenge(tmp17Result, obj5), screenProps: { mfaChallenge, finish }, mfaMethod: "webauthn", error: first };
  const tmp18 = MfaOptionScreenDefault;
  intl = finish(1126).intl;
  intl2 = finish(1126).intl;
  shouldDisplayAndroidFidoSelector = NativeCeremoniesDefault.shouldDisplayAndroidFidoSelector;
  if (shouldDisplayAndroidFidoSelector) {
    obj4 = { authenticatorSelection: first1, setAuthenticator: tmp11, inProgress: tmp20 };
    tmp20 = tmp13 || tmp13;
    shouldDisplayAndroidFidoSelector = tmp16(closure_9, obj4);
  }
  obj5 = { variant: "primary", text: intl3.string(finish(1126).t.Xr3Eks), loading: tmp13 || tmp13, disabled: tmp13, onPress: callback };
  tmp17Result = buttonDefault;
  intl3 = finish(1126).intl;
  return challenge(tmp18, obj3);
});
let result = size.fileFinishedImporting("modules/mfa/native/screens/WebAuthnScreen.tsx");

export default tmp2;
export const AuthenticatorOption = obj3;