// === Module 15893: RegisterPasswordInput ===

// Module 15893 (RegisterPasswordInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import getErrorDefault from "getError" /* 6445 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 14271 */;
import usePasswordScore from "usePasswordScore" /* 15890 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PhoneStore from "PhoneStore" /* 6430 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["password"];
let closure_4 = ["password"];
const RegistrationUIStore = fn(15867);
({ setRegistrationErrors: closure_9, useRegistrationUIStore: c10 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsxs: closure_11, jsx: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4890);
let obj = { weak: { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL }, medium: null, strong: null, passwordStrength: null, inputHint: null };
let obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj.medium = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj.strong = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj.passwordStrength = { marginTop: 4, marginBottom: 4 };
obj.inputHint = { width: "100%" };
let closure_14 = createStyles.createStyles(obj);
let obj6 = { entering: null, exiting: null };
const FadeIn = fn(4612).FadeIn;
obj6.entering = FadeIn.duration(300);
const FadeOut = fn(4612).FadeOut;
obj6.exiting = FadeOut.duration(300);
const obj7 = { layout: null };
const LinearTransition = fn(4612).LinearTransition;
const Easing = fn(4612).Easing;
const obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj7.layout = LinearTransition.easing(Easing.inOut(fn(4612).Easing.quad)).duration(300);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((passwordScore) => {
  const cResult = c.c(10);
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp4 = closure_14();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
            const _Symbol2 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult = intl3.string(util.t["w/8TuV"]);
              cResult[0] = stringResult;
              let first = stringResult;
            } else {
              first = cResult[0];
            }
            const weak = tmp4.weak;
          } else {
            if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
              const _Symbol = Symbol;
              if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = util.intl;
                const stringResult1 = intl2.string(util.t["2fmTpT"]);
                cResult[1] = stringResult1;
                let tmp8 = stringResult1;
              } else {
                tmp8 = cResult[1];
              }
              let strong = tmp4.medium;
              let str = tmp8;
            } else {
              str = "";
              if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
                const _Symbol4 = Symbol;
                if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = util.intl;
                  const stringResult2 = intl.string(util.t.Xraqqc);
                  cResult[2] = stringResult2;
                  let tmp5 = stringResult2;
                } else {
                  tmp5 = cResult[2];
                }
                strong = tmp4.strong;
                str = tmp5;
              }
            }
            if (cResult[3] === strong) {
              if (cResult[4] === tmp4.passwordStrength) {
                let tmp14 = cResult[5];
              }
              const _Symbol3 = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const intl4 = util.intl;
                const stringResult3 = intl4.string(util.t["5gbdUX"]);
                cResult[6] = stringResult3;
                let tmp16 = stringResult3;
              } else {
                tmp16 = cResult[6];
              }
              if (cResult[7] === str) {
                if (cResult[8] === tmp14) {
                  let tmp18 = cResult[9];
                }
                return tmp18;
              }
              const obj2 = {};
              const merged = Object.assign(obj6);
              const merged1 = Object.assign(obj7);
              obj2.variant = "text-xs/medium";
              obj2.style = tmp14;
              obj2.animated = true;
              const items = [tmp16, ": ", str];
              obj2.children = items;
              const tmp26 = closure_1_11(Text_Text.Text, obj2);
              cResult[7] = str;
              cResult[8] = tmp14;
              cResult[9] = tmp26;
              tmp18 = tmp26;
            }
            const items1 = [tmp4.passwordStrength, strong];
            cResult[3] = strong;
            cResult[4] = tmp4.passwordStrength;
            cResult[5] = items1;
            tmp14 = items1;
          }
        }
      }
    }
  }
  return null;
}) : ((passwordScore) => {
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = closure_14();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
            const intl2 = util.intl;
            let str = intl2.string(util.t["w/8TuV"]);
            let strong = tmp.weak;
          } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
            const intl = util.intl;
            str = intl.string(util.t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
              const intl4 = util.intl;
              str = intl4.string(util.t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = {};
          const merged = Object.assign(obj6);
          const merged1 = Object.assign(obj7);
          obj.variant = "text-xs/medium";
          const items = [tmp.passwordStrength, strong];
          obj.style = items;
          obj.animated = true;
          const intl3 = util.intl;
          const items1 = [intl3.string(util.t["5gbdUX"]), ": ", str];
          obj.children = items1;
          return closure_1_11(Text_Text.Text, obj);
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
const easingResult = LinearTransition.easing(Easing.inOut(fn(4612).Easing.quad));
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = onPasswordChange(576).c(48);
  closure_14();
  ({ password, onPasswordChange } = arg0);
  ({ onSubmitEditing, passwordScore, returnKeyType, autoFocus } = arg0);
  ref = noop.useRef(null);
  if (autoFocus == null) {
    autoFocus = false;
  }
  if (cResult[0] !== autoFocus) {
    const obj3 = { inputRef: ref, enabled: autoFocus };
    cResult[0] = autoFocus;
    cResult[1] = obj3;
    let tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  useFocusRefOnNavigationDefault(tmp6);
  const obj = onPasswordChange(576);
  [tmp10, importDefault] = noop.useState(false);
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  [tmp12, dependencyMap] = noop.useState(false);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor(arg0) {
        return arg0.errors;
      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor(arg0) {
        return arg0.errors;
      }
    }
  }
  const tmp14 = closure_10(M);
  const user = tmp14;
  if (cResult[3] !== tmp14) {
    class M {
      constructor(arg0) {
        return arg0.errors;
      }
    }
    const tmp16 = getErrorDefault("password", tmp14);
    cResult[3] = tmp14;
    cResult[4] = tmp16;
  } else {
    class M {
      constructor(arg0) {
        return arg0.errors;
      }
    }
  }
  if (cResult[5] === tmp14) {
    class M {
      constructor(arg0) {
        return arg0.errors;
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          return arg0.errors;
        }
      }
      const items = [PhoneStore];
      class W {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      cResult[8] = items;
      cResult[9] = W;
      let tmp19 = W;
      const tmp18 = items;
    } else {
      class M {
        constructor(arg0) {
          return arg0.errors;
        }
      }
      tmp19 = cResult[9];
    }
    const stateFromStores = onPasswordChange(504).useStateFromStores(tmp18, tmp19);
    if (!tmp12) {
      class M {
        constructor(arg0) {
          return arg0.errors;
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        cResult[12] = tmp24;
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      class W {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        cResult[13] = tmp26;
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        cResult[14] = tmp28;
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      if (cResult[15] !== ref) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        const mergeRefsResult = obj5.mergeRefs(ref, ref);
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        cResult[16] = mergeRefsResult;
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        const stringResult = obj6.string(onPasswordChange(1126).t["CIGa+7"]);
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        const stringResult1 = obj7.string(onPasswordChange(1126).t.cUVsEG);
        cResult[17] = stringResult;
        cResult[18] = stringResult1;
        let tmp33 = stringResult1;
        const tmp32 = stringResult;
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        tmp33 = cResult[18];
      }
      if (returnKeyType == null) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      if (tmp10) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
      }
      if (cResult[19] !== tmp10) {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        const string = tmp39.string;
        const t = onPasswordChange(1126).t;
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        cResult[19] = tmp10;
        cResult[20] = tmp40;
      } else {
        class M {
          constructor(arg0) {
            return arg0.errors;
          }
        }
        const _Symbol4 = Symbol;
        class W {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        if (cResult[22] !== tmp38) {
          class M {
            constructor(arg0) {
              return arg0.errors;
            }
          }
          tmp44[0] = tmp38;
          tmp44[1] = tmp27;
          class W {
            constructor() {
              FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
              num = 8;
              if (FRANCE_AND_FRENCH_REGION.has(closure_1_8.getCountryCode().alpha2)) {
                num = 12;
              }
              return num;
            }
          }
          cResult[22] = tmp38;
          cResult[23] = tmp44;
        } else {
          class M {
            constructor(arg0) {
              return arg0.errors;
            }
          }
        }
        if (null != tmp15) {
          class M {
            constructor(arg0) {
              return arg0.errors;
            }
          }
        }
        if (cResult[24] === tmp17) {
          class M {
            constructor(arg0) {
              return arg0.errors;
            }
          }
        }
        const obj4 = { ref: tmp30, textContentType: "newPassword", autoComplete: "new-password", onChange: tmp17, value: password, label: tmp32, accessibilityHint: tmp33, secureTextEntry: tmp36, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: tmp23, onBlur: tmp25, trailingIcon: tmp37, trailingPressableProps: tmp44, errorMessage: tmp15, status: undefined };
        const tmp48 = closure_12(onPasswordChange(6098).TextInput, obj4);
        cResult[24] = tmp17;
        cResult[25] = onSubmitEditing;
        cResult[26] = password;
        cResult[27] = tmp15;
        cResult[28] = tmp30;
        cResult[29] = tmp36;
        cResult[30] = returnKeyType;
        cResult[31] = tmp37;
        cResult[32] = tmp44;
        cResult[33] = undefined;
        cResult[34] = tmp48;
      }
    } else {
      class M {
        constructor(arg0) {
          return arg0.errors;
        }
      }
    }
    const tmpResult = onPasswordChange(504);
  }
  const fn = function q(arg0) {
    if (null != user.password) {
      const password = user.password;
      options(_objectWithoutProperties(user, user));
    }
    onPasswordChange(arg0);
  };
  cResult[5] = tmp14;
  cResult[6] = onPasswordChange;
  cResult[7] = fn;
  const tmp11 = _slicedToArray(noop.useState(false), 2);
}) : ((arg0, ref) => {
  ({ password, onPasswordChange } = arg0);
  ({ returnKeyType, autoFocus } = arg0);
  ({ onSubmitEditing, passwordScore } = arg0);
  ref = noop.useRef(null);
  const obj2 = { inputRef: ref, enabled: null };
  const tmp = closure_14();
  const tmp3 = importDefault;
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj2.enabled = autoFocus;
  require("useFocusRefOnNavigation")(obj2);
  const tmp5 = require("useFocusRefOnNavigation");
  [tmp8, tmp9] = noop.useState(false);
  importDefault = tmp9;
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  isPasswordFocused = tmp10[0];
  closure_3 = tmp12;
  const tmp13 = closure_10((errors) => errors.errors);
  const user = tmp13;
  const tmp14 = tmp3(isPasswordFocused[15])("password", tmp13);
  const items = [onPasswordChange, tmp13];
  const callback = noop.useCallback((arg0) => {
    if (null != user.password) {
      const password = user.password;
      options(_objectWithoutProperties(user, user));
    }
    onPasswordChange(arg0);
  }, items);
  const tmp7 = _slicedToArray(noop.useState(false), 2);
  const items1 = [PhoneStore];
  const stateFromStores = onPasswordChange(isPasswordFocused[17]).useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
    let num = 8;
    if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
      num = 12;
    }
    return num;
  });
  const items2 = [isPasswordFocused, stateFromStores];
  const memo = noop.useMemo(() => {
    if (first) {
      const intl = util.intl;
      const obj = { minimumLength: stateFromStores };
      return intl.format(util.t.VUUJ6V, obj);
    }
  }, items2);
  const items3 = [tmp10[1]];
  const items4 = [tmp10[1]];
  const callback1 = noop.useCallback(() => {
    closure_3(true);
  }, items3);
  const items5 = [tmp9];
  const callback2 = noop.useCallback(() => {
    closure_3(false);
  }, items4);
  const callback3 = noop.useCallback(() => {
    tmp9((arg0) => !arg0);
  }, items5);
  const obj4 = { ref: null, textContentType: "newPassword", autoComplete: "new-password", onChange: null, value: null, label: null, accessibilityHint: null, secureTextEntry: null, returnKeyType: null, autoCapitalize: "none", onSubmitEditing: null, onFocus: null, onBlur: null, trailingIcon: null, trailingPressableProps: null, errorMessage: null, status: null };
  const obj3 = onPasswordChange(isPasswordFocused[17]);
  obj4.ref = onPasswordChange(isPasswordFocused[18]).mergeRefs(ref, ref);
  obj4.onChange = callback;
  obj4.value = password;
  let intl = onPasswordChange(tmp4[12]).intl;
  obj4.label = intl.string(onPasswordChange(isPasswordFocused[12]).t["CIGa+7"]);
  const intl2 = onPasswordChange(tmp4[12]).intl;
  obj4.accessibilityHint = intl2.string(onPasswordChange(isPasswordFocused[12]).t.cUVsEG);
  obj4.secureTextEntry = !tmp8;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  obj4.returnKeyType = returnKeyType;
  obj4.onSubmitEditing = onSubmitEditing;
  obj4.onFocus = callback1;
  obj4.onBlur = callback2;
  if (tmp8) {
    let EyeIcon = onPasswordChange(tmp4[19]).EyeSlashIcon;
  } else {
    EyeIcon = onPasswordChange(tmp4[20]).EyeIcon;
  }
  obj4.trailingIcon = EyeIcon;
  const intl3 = onPasswordChange(tmp4[12]).intl;
  const string = intl3.string;
  const t = onPasswordChange(tmp4[12]).t;
  if (tmp8) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj4.trailingPressableProps = { accessibilityLabel: stringResult, onPress: callback3, hitSlop: { top: 8, bottom: 8 } };
  obj4.errorMessage = tmp14;
  let str;
  if (null != tmp14) {
    str = "error";
  }
  obj4.status = str;
  const children = [closure_12(onPasswordChange(isPasswordFocused[21]).TextInput, obj4), closure_12(closure_17, { password, isPasswordFocused, passwordError: tmp14, passwordScore }), ];
  let tmp24Result = null;
  if (null != memo) {
    tmp24Result = null;
    if (null == tmp14) {
      obj6 = {};
      const merged = Object.assign(obj6);
      const merged1 = Object.assign(obj7);
      obj6.style = tmp.inputHint;
      obj6.variant = "text-xs/medium";
      obj6.color = "text-muted";
      obj6.animated = true;
      obj6.children = memo;
      tmp24Result = closure_12(onPasswordChange(tmp4[13]).Text, obj6);
    }
  }
  children[2] = tmp24Result;
  return closure_11(closure_13, { children });
}));