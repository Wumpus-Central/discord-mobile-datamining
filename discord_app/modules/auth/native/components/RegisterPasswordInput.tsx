// === Module 16308: RegisterPasswordInput ===

// Module 16308 (RegisterPasswordInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import getErrorDefault from "getError" /* 6637 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 14210 */;
import usePasswordScore from "usePasswordScore" /* 16305 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import PhoneStore from "PhoneStore" /* 6622 */;

const require = globalThis.__r;

require = fn;
let user = ["ref"];
let closure_4 = ["password"];
let closure_5 = ["password"];
const RegistrationUIStore = fn(16281);
({ setRegistrationErrors: c10, useRegistrationUIStore: closure_11 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsxs: closure_12, jsx: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { weak: { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL }, medium: null, strong: null, passwordStrength: null, inputHint: null };
let obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.medium = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.strong = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.passwordStrength = { marginTop: 4, marginBottom: 4 };
obj2.inputHint = { width: "100%" };
let closure_15 = createStyles.createStyles(obj2);
let obj6 = { entering: null, exiting: null };
const FadeIn = fn(4811).FadeIn;
obj6.entering = FadeIn.duration(300);
const FadeOut = fn(4811).FadeOut;
obj6.exiting = FadeOut.duration(300);
const obj7 = { layout: null };
const LinearTransition = fn(4811).LinearTransition;
const Easing = fn(4811).Easing;
const obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj7.layout = LinearTransition.easing(Easing.inOut(fn(4811).Easing.quad)).duration(300);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function PasswordStrength(passwordScore) {
  const cResult = c.c(10);
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp4 = closure_15();
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
              const tmp26 = __initData(Text_Text.Text, obj2);
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
}) : (function PasswordStrength(passwordScore) {
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = closure_15();
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
          return __initData(Text_Text.Text, obj);
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = fn(558);
const easingResult = LinearTransition.easing(Easing.inOut(fn(4811).Easing.quad));
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = ReactCompilerGating.isReactCompilerEnabled() ? (function RegisterPasswordInput(ref) {
  const cResult = onPasswordChange(576).c(51);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, user);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  closure_15();
  ({ password, onPasswordChange } = tmp4);
  ({ onSubmitEditing, passwordScore, returnKeyType, autoFocus } = tmp4);
  const ref1 = noop.useRef(null);
  if (autoFocus == null) {
    autoFocus = false;
  }
  if (cResult[3] !== autoFocus) {
    const obj3 = { inputRef: ref1, enabled: autoFocus };
    cResult[3] = autoFocus;
    cResult[4] = obj3;
    let tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  useFocusRefOnNavigationDefault(tmp11);
  const obj = onPasswordChange(576);
  [tmp15, importDefault] = noop.useState(false);
  const tmp14 = _slicedToArray(noop.useState(false), 2);
  [tmp17, dependencyMap] = noop.useState(false);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
    cResult[5] = V;
  } else {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
  }
  const tmp19 = closure_11(V);
  user = tmp19;
  if (cResult[6] !== tmp19) {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
    const tmp21 = getErrorDefault("password", tmp19);
    cResult[6] = tmp19;
    cResult[7] = tmp21;
  } else {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
  }
  if (cResult[8] === tmp19) {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      const items = [PhoneStore];
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      cResult[11] = items;
      cResult[12] = Y;
      let tmp24 = Y;
      const tmp23 = items;
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      tmp24 = cResult[12];
    }
    const stateFromStores = onPasswordChange(504).useStateFromStores(tmp23, tmp24);
    if (!tmp17) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        cResult[15] = tmp29;
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      }
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        cResult[16] = tmp31;
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        cResult[17] = tmp33;
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      }
      if (cResult[18] !== tmp5) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        const mergeRefsResult = obj5.mergeRefs(tmp5, ref1);
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        cResult[19] = mergeRefsResult;
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        const stringResult = obj6.string(onPasswordChange(1126).t["CIGa+7"]);
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        const stringResult1 = obj7.string(onPasswordChange(1126).t.cUVsEG);
        cResult[20] = stringResult;
        cResult[21] = stringResult1;
        let tmp37 = stringResult1;
        const tmp36 = stringResult;
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        tmp37 = cResult[21];
      }
      if (returnKeyType == null) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      }
      if (tmp15) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
      }
      if (cResult[22] !== tmp15) {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        const string = tmp43.string;
        const t = onPasswordChange(1126).t;
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        cResult[22] = tmp15;
        cResult[23] = tmp44;
      } else {
        class V {
          constructor(arg0) {
            return ref.errors;
          }
        }
        const _Symbol4 = Symbol;
        class Y {
          constructor() {
            FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
            num = 8;
            if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
              num = 12;
            }
            return num;
          }
        }
        if (cResult[25] !== tmp42) {
          class V {
            constructor(arg0) {
              return ref.errors;
            }
          }
          tmp48[0] = tmp42;
          tmp48[1] = tmp32;
          class Y {
            constructor() {
              FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
              num = 8;
              if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
                num = 12;
              }
              return num;
            }
          }
          cResult[25] = tmp42;
          cResult[26] = tmp48;
        } else {
          class V {
            constructor(arg0) {
              return ref.errors;
            }
          }
        }
        if (null != tmp20) {
          class V {
            constructor(arg0) {
              return ref.errors;
            }
          }
        }
        if (cResult[27] === W) {
          class V {
            constructor(arg0) {
              return ref.errors;
            }
          }
        }
        const obj4 = { ref: tmp34, textContentType: "newPassword", autoComplete: "new-password", onChange: W, value: password, label: tmp36, accessibilityHint: tmp37, secureTextEntry: tmp40, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: tmp28, onBlur: tmp30, trailingIcon: tmp41, trailingPressableProps: tmp48, errorMessage: tmp20, status: undefined };
        const tmp52 = closure_13(onPasswordChange(6290).TextInput, obj4);
        cResult[27] = W;
        cResult[28] = onSubmitEditing;
        cResult[29] = password;
        cResult[30] = tmp20;
        cResult[31] = tmp34;
        cResult[32] = tmp40;
        cResult[33] = returnKeyType;
        cResult[34] = tmp41;
        cResult[35] = tmp48;
        class W {
          constructor(arg0) {
            tmp = closure_3;
            if (null != closure_3.password) {
              password = tmp.password;
              tmp2 = closure_7;
              tmp3 = closure_4;
              tmp4 = setRegistrationErrors;
              tmp5 = setRegistrationErrors(closure_7(tmp, closure_4));
            }
            tmp6 = onPasswordChange(ref);
            return;
          }
        }
        cResult[36] = undefined;
        cResult[37] = tmp52;
      }
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const tmpResult = onPasswordChange(504);
  }
  class W {
    constructor(arg0) {
      tmp = closure_3;
      if (null != closure_3.password) {
        password = tmp.password;
        tmp2 = closure_7;
        tmp3 = closure_4;
        tmp4 = setRegistrationErrors;
        tmp5 = setRegistrationErrors(closure_7(tmp, closure_4));
      }
      tmp6 = onPasswordChange(ref);
      return;
    }
  }
  cResult[8] = tmp19;
  cResult[9] = onPasswordChange;
  cResult[10] = W;
  const tmp16 = _slicedToArray(noop.useState(false), 2);
}) : (function RegisterPasswordInput(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  onPasswordChange = undefined;
  importDefault = undefined;
  let isPasswordFocused;
  closure_3 = undefined;
  user = undefined;
  let stateFromStores;
  ({ password, onPasswordChange } = merged);
  ({ returnKeyType, autoFocus } = merged);
  ({ onSubmitEditing, passwordScore } = merged);
  ref = noop.useRef(null);
  const obj2 = { inputRef: ref, enabled: null };
  const tmp2 = closure_15();
  const tmp4 = importDefault;
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj2.enabled = autoFocus;
  require("useFocusRefOnNavigation")(obj2);
  const tmp6 = require("useFocusRefOnNavigation");
  [tmp9, tmp10] = noop.useState(false);
  importDefault = tmp10;
  const tmp11 = _slicedToArray(noop.useState(false), 2);
  isPasswordFocused = tmp11[0];
  closure_3 = tmp13;
  const tmp14 = closure_11((errors) => errors.errors);
  user = tmp14;
  const tmp15 = tmp4(isPasswordFocused[15])("password", tmp14);
  const items = [onPasswordChange, tmp14];
  const callback = noop.useCallback((arg0) => {
    if (null != user.password) {
      const password = user.password;
      collapsed(_objectWithoutProperties(user, closure_5));
    }
    onPasswordChange(arg0);
  }, items);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const items1 = [PhoneStore];
  stateFromStores = onPasswordChange(isPasswordFocused[17]).useStateFromStores(items1, () => {
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
  const items3 = [tmp11[1]];
  const items4 = [tmp11[1]];
  const callback1 = noop.useCallback(() => {
    closure_3(true);
  }, items3);
  const items5 = [tmp10];
  const callback2 = noop.useCallback(() => {
    closure_3(false);
  }, items4);
  const callback3 = noop.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, items5);
  const obj4 = { ref: null, textContentType: "newPassword", autoComplete: "new-password", onChange: null, value: null, label: null, accessibilityHint: null, secureTextEntry: null, returnKeyType: null, autoCapitalize: "none", onSubmitEditing: null, onFocus: null, onBlur: null, trailingIcon: null, trailingPressableProps: null, errorMessage: null, status: null };
  const obj3 = onPasswordChange(isPasswordFocused[17]);
  obj4.ref = onPasswordChange(isPasswordFocused[18]).mergeRefs(ref.ref, ref);
  obj4.onChange = callback;
  obj4.value = password;
  let intl = onPasswordChange(tmp5[12]).intl;
  obj4.label = intl.string(onPasswordChange(isPasswordFocused[12]).t["CIGa+7"]);
  const intl2 = onPasswordChange(tmp5[12]).intl;
  obj4.accessibilityHint = intl2.string(onPasswordChange(isPasswordFocused[12]).t.cUVsEG);
  obj4.secureTextEntry = !tmp9;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  obj4.returnKeyType = returnKeyType;
  obj4.onSubmitEditing = onSubmitEditing;
  obj4.onFocus = callback1;
  obj4.onBlur = callback2;
  if (tmp9) {
    let EyeIcon = tmp17(tmp5[19]).EyeSlashIcon;
  } else {
    EyeIcon = tmp17(tmp5[20]).EyeIcon;
  }
  obj4.trailingIcon = EyeIcon;
  const intl3 = tmp17(tmp5[12]).intl;
  const string = intl3.string;
  const t = tmp17(tmp5[12]).t;
  if (tmp9) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj4.trailingPressableProps = { accessibilityLabel: stringResult, onPress: callback3, hitSlop: { top: 8, bottom: 8 } };
  obj4.errorMessage = tmp15;
  let str;
  if (null != tmp15) {
    str = "error";
  }
  obj4.status = str;
  const children = [closure_13(onPasswordChange(isPasswordFocused[21]).TextInput, obj4), closure_13(closure_18, { password, isPasswordFocused, passwordError: tmp15, passwordScore }), ];
  let tmp25Result = null;
  if (null != memo) {
    tmp25Result = null;
    if (null == tmp15) {
      obj6 = {};
      const merged1 = Object.assign(obj6);
      const merged2 = Object.assign(obj7);
      obj6.style = tmp2.inputHint;
      obj6.variant = "text-xs/medium";
      obj6.color = "text-muted";
      obj6.animated = true;
      obj6.children = memo;
      tmp25Result = closure_13(tmp17(tmp5[13]).Text, obj6);
    }
  }
  children[2] = tmp25Result;
  return closure_12(closure_14, { children });
});