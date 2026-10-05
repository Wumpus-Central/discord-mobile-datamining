// discord_app/modules/auth/native/components/RegisterPasswordInput.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import getErrorDefault from "../getError.tsx";
import useFocusRefOnNavigationDefault from "../../../../design/components/Navigator/native/useFocusRefOnNavigation.tsx";
import usePasswordScore from "utils/usePasswordScore.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import PhoneStore from "../../../phone/PhoneStore.tsx";
import RegistrationUIStore from "../RegistrationUIStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let importDefault;

let FadeIn;
let FadeOut;
let c10;
let c9;
let closure_12;
let easingResult;
let map1;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let closure_3 = ["password"];
let closure_4 = ["password"];
({ setRegistrationErrors: c9, useRegistrationUIStore: c10 } = RegistrationUIStore);
({ jsxs: unpackModuleId, jsx: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  weak: obj2,
  medium: obj3,
  strong: obj4,
  passwordStrength: { marginTop: 4, marginBottom: 4 },
  inputHint: { width: "100%" },
};
obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let closure_14 = createStyles(obj);
let obj5 = { entering: FadeIn.duration(300), exiting: FadeOut.duration(300) };
FadeIn = ReanimatedRexport.FadeIn;
FadeOut = ReanimatedRexport.FadeOut;
let obj6 = { layout: easingResult.duration(300) };
const LinearTransition = ReanimatedRexport.LinearTransition;
const easing = LinearTransition.easing;
const Easing = ReanimatedRexport.Easing;
easingResult = easing(Easing.inOut(ReanimatedRexport.Easing.quad));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (passwordScore) => {
      let isPasswordFocused;
      let items;
      let password;
      let passwordError;
      const obj = react2;
      const cResult = obj.c(10);
      passwordScore = passwordScore.passwordScore;
      ({ password, isPasswordFocused, passwordError } = passwordScore);
      const tmp4 = closure_14();
      if (null != passwordScore) {
        if (isPasswordFocused) {
          if (0 !== password.length) {
            if (null == passwordError) {
              let strong;
              let str;
              if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
                let first;
                const _Symbol2 = Symbol;
                if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = intl5.intl;
                  const stringResult = intl3.string(intl5.t["w/8TuV"]);
                  cResult[0] = stringResult;
                  first = stringResult;
                } else {
                  first = cResult[0];
                }
                strong = tmp4.weak;
                str = first;
              } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
                let tmp8;
                const _Symbol = Symbol;
                if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = intl5.intl;
                  const stringResult1 = intl2.string(intl5.t["2fmTpT"]);
                  cResult[1] = stringResult1;
                  tmp8 = stringResult1;
                } else {
                  tmp8 = cResult[1];
                }
                strong = tmp4.medium;
                str = tmp8;
              } else {
                str = "";
                if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
                  let tmp5;
                  const _Symbol4 = Symbol;
                  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = intl5.intl;
                    const stringResult2 = intl.string(intl5.t.Xraqqc);
                    cResult[2] = stringResult2;
                    tmp5 = stringResult2;
                  } else {
                    tmp5 = cResult[2];
                  }
                  strong = tmp4.strong;
                  str = tmp5;
                }
              }
              if (cResult[3] === strong) {
                let tmp13;
                let tmp15;
                if (cResult[4] === tmp4.passwordStrength) {
                  tmp13 = cResult[5];
                }
                const _Symbol3 = Symbol;
                if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = intl5.intl;
                  const stringResult3 = intl4.string(intl5.t["5gbdUX"]);
                  cResult[6] = stringResult3;
                  tmp15 = stringResult3;
                } else {
                  tmp15 = cResult[6];
                }
                if (cResult[7] === str) {
                  let tmp17;
                  if (cResult[8] === tmp13) {
                    tmp17 = cResult[9];
                  }
                  return tmp17;
                }
                const obj2 = { variant: "text-xs/medium", style: tmp13, animated: true, children: items };
                const Text = Text_Text.Text;
                const merged = Object.assign(obj5);
                const merged1 = Object.assign(obj6);
                items = [tmp15, ": ", str];
                const tmp25 = unpackModuleId(Text, obj2);
                cResult[7] = str;
                cResult[8] = tmp13;
                cResult[9] = tmp25;
                tmp17 = tmp25;
              }
              const items1 = [tmp4.passwordStrength, strong];
              cResult[3] = strong;
              cResult[4] = tmp4.passwordStrength;
              cResult[5] = items1;
              tmp13 = items1;
            }
          }
        }
      }
      return null;
    }
  : (passwordScore) => {
      let isPasswordFocused;
      let items;
      let items1;
      let password;
      let passwordError;
      passwordScore = passwordScore.passwordScore;
      ({ password, isPasswordFocused, passwordError } = passwordScore);
      const tmp = closure_14();
      if (null != passwordScore) {
        if (isPasswordFocused) {
          if (0 !== password.length) {
            if (null == passwordError) {
              let str;
              let strong;
              if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
                const intl2 = intl5.intl;
                str = intl2.string(intl5.t["w/8TuV"]);
                strong = tmp.weak;
              } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
                const intl = intl5.intl;
                str = intl.string(intl5.t["2fmTpT"]);
                strong = tmp.medium;
              } else {
                str = "";
                if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
                  const intl4 = intl5.intl;
                  str = intl4.string(intl5.t.Xraqqc);
                  strong = tmp.strong;
                }
              }
              const obj = { variant: "text-xs/medium", style: items, animated: true, children: items1 };
              const Text = Text_Text.Text;
              const merged = Object.assign(obj5);
              const merged1 = Object.assign(obj6);
              items = [tmp.passwordStrength, strong];
              const intl3 = intl5.intl;
              items1 = [intl3.string(intl5.t["5gbdUX"]), ": ", str];
              return unpackModuleId(Text, obj);
            }
          }
        }
      }
      return null;
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let autoFocus;
        let countryCode;
        let onPasswordChange;
        let onSubmitEditing;
        let password;
        let passwordScore;
        let returnKeyType;
        let tmp10;
        let tmp12;
        let tmp6;
        const obj = onPasswordChange(576);
        const cResult = obj.c(48);
        closure_14();
        ({ password, onPasswordChange } = arg0);
        ({ onSubmitEditing, passwordScore, returnKeyType, autoFocus } = arg0);
        ref = react.useRef(null);
        if (autoFocus == null) {
          autoFocus = false;
        }
        if (cResult[0] !== autoFocus) {
          const obj3 = { inputRef: ref, enabled: autoFocus };
          let num = 0;
          cResult[0] = autoFocus;
          cResult[1] = obj3;
          tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        useFocusRefOnNavigationDefault(tmp6);
        [tmp10, importDefault] = react.useState(false);
        _slicedToArray(react.useState(false), 2);
        [tmp12, dependencyMap] = react.useState(false);
        _slicedToArray(react.useState(false), 2);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class M {
            constructor(errors) {
              return errors.errors;
            }
          }
          cResult[2] = M;
        } else {
          class M {
            constructor(errors) {
              return errors.errors;
            }
          }
        }
        const tmp14 = closure_10(M);
        const user = tmp14;
        if (cResult[3] !== tmp14) {
          class M {
            constructor(errors) {
              return errors.errors;
            }
          }
          cResult[3] = tmp14;
          cResult[4] = getErrorDefault("password", tmp14);
          const tmp16 = getErrorDefault("password", tmp14);
        } else {
          class M {
            constructor(errors) {
              return errors.errors;
            }
          }
        }
        if (cResult[5] === tmp14) {
          let tmp19;
          let tmp18;
          let tmp33;
          let tmp32;
          class M {
            constructor(errors) {
              return errors.errors;
            }
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            const items = [PhoneStore];
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
            cResult[8] = items;
            cResult[9] = W;
            tmp19 = W;
            tmp18 = items;
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            tmp19 = cResult[9];
          }
          const tmpResult = onPasswordChange(504);
          const stateFromStores = tmpResult.useStateFromStores(tmp18, tmp19);
          if (tmp12) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            cResult[12] = tmp24;
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            cResult[13] = tmp26;
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            cResult[14] = tmp28;
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          if (cResult[15] !== ref) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            const mergeRefsResult = obj5.mergeRefs(ref, ref);
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
            cResult[16] = mergeRefsResult;
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          const _Symbol5 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            const stringResult = obj6.string(onPasswordChange(1126).t["CIGa+7"]);
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
            const stringResult1 = obj7.string(onPasswordChange(1126).t.cUVsEG);
            cResult[17] = stringResult;
            cResult[18] = stringResult1;
            tmp33 = stringResult1;
            tmp32 = stringResult;
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            tmp33 = cResult[18];
          }
          if (returnKeyType == null) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          if (tmp10) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          if (cResult[19] !== tmp10) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            const string = tmp39.string;
            const t = onPasswordChange(1126).t;
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
            cResult[19] = tmp10;
            cResult[20] = tmp40;
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          const _Symbol6 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            cResult[21] = tmp41;
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          if (cResult[22] !== tmp40) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
            tmp43[0] = tmp40;
            tmp43[1] = tmp27;
            class W {
              constructor() {
                const FRANCE_AND_FRENCH_REGION = onPasswordChange(dependencyMap[16]).CountryCodesSets
                  .FRANCE_AND_FRENCH_REGION;
                let num = 8;
                if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
                  num = 12;
                }
                return num;
              }
            }
            cResult[22] = tmp40;
            cResult[23] = tmp43;
          } else {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          if (null != tmp15) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          if (cResult[24] === tmp17) {
            class M {
              constructor(errors) {
                return errors.errors;
              }
            }
          }
          const obj4 = {
            ref: tmp30,
            textContentType: "newPassword",
            autoComplete: "new-password",
            onChange: tmp17,
            value: password,
            label: tmp32,
            accessibilityHint: tmp33,
            secureTextEntry: !tmp10,
            returnKeyType,
            autoCapitalize: "none",
            onSubmitEditing,
            onFocus: tmp23,
            onBlur: tmp25,
            trailingIcon: tmp37,
            trailingPressableProps: tmp43,
            errorMessage: tmp15,
            status: undefined,
          };
          cResult[24] = tmp17;
          cResult[25] = onSubmitEditing;
          cResult[26] = password;
          cResult[27] = tmp15;
          cResult[28] = tmp30;
          cResult[29] = !tmp10;
          cResult[30] = returnKeyType;
          cResult[31] = tmp37;
          cResult[32] = tmp43;
          cResult[33] = undefined;
          cResult[34] = closure_12(onPasswordChange(6098).TextInput, obj4);
          const tmp47 = closure_12(onPasswordChange(6098).TextInput, obj4);
        }
        const fn = function q(arg0) {
          if (null != user.password) {
            const password = user.password;
            React4(_objectWithoutProperties(user, user));
          }
          onPasswordChange(arg0);
        };
        cResult[5] = tmp14;
        cResult[6] = onPasswordChange;
        cResult[7] = fn;
      }
    : (arg0, ref) => {
        let EyeIcon;
        let autoFocus;
        let closure_1;
        let countryCode;
        let intl;
        let intl2;
        let isPasswordFocused;
        let onPasswordChange;
        let onSubmitEditing;
        let password;
        let passwordScore;
        let returnKeyType;
        let str;
        let stringResult;
        let tmp8;
        let tmp9;
        ({ password, onPasswordChange } = arg0);
        ({ returnKeyType, autoFocus } = arg0);
        ({ onSubmitEditing, passwordScore } = arg0);
        const tmp = closure_14();
        ref = react.useRef(null);
        const obj2 = { inputRef: ref, enabled: autoFocus };
        const tmp3 = importDefault;
        const tmp5 = require("useFocusRefOnNavigation");
        if (autoFocus == null) {
          autoFocus = false;
        }
        tmp5(obj2);
        [tmp8, tmp9] = react.useState(false);
        importDefault = tmp9;
        _slicedToArray(react.useState(false), 2);
        const tmp10 = _slicedToArray(react.useState(false), 2);
        isPasswordFocused = tmp10[0];
        closure_3 = tmp12;
        const tmp13 = closure_10((errors) => errors.errors);
        const user = tmp13;
        const tmp14 = tmp3(isPasswordFocused[15])("password", tmp13);
        const items = [onPasswordChange, tmp13];
        const callback = react.useCallback((arg0) => {
          if (null != user.password) {
            const password = user.password;
            React4(_objectWithoutProperties(user, user));
          }
          onPasswordChange(arg0);
        }, items);
        const items1 = [PhoneStore];
        const obj3 = onPasswordChange(isPasswordFocused[17]);
        const stateFromStores = obj3.useStateFromStores(items1, () => {
          const FRANCE_AND_FRENCH_REGION = onPasswordChange(first[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          let num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        });
        const items2 = [isPasswordFocused, stateFromStores];
        const memo = react.useMemo(() => {
          if (first) {
            const intl = intl5.intl;
            const obj = { minimumLength: stateFromStores };
            return intl.format(intl5.t.VUUJ6V, obj);
          }
        }, items2);
        const items3 = [tmp10[1]];
        const items4 = [tmp10[1]];
        const callback1 = react.useCallback(() => {
          closure_3(true);
        }, items3);
        const items5 = [tmp9];
        const callback2 = react.useCallback(() => {
          closure_3(false);
        }, items4);
        const callback3 = react.useCallback(() => {
          tmp9((arg0) => !arg0);
        }, items5);
        const obj4 = {
          ref: obj5.mergeRefs(ref, ref),
          textContentType: "newPassword",
          autoComplete: "new-password",
          onChange: callback,
          value: password,
          label: intl.string(onPasswordChange(isPasswordFocused[12]).t["CIGa+7"]),
          accessibilityHint: intl2.string(onPasswordChange(isPasswordFocused[12]).t.cUVsEG),
          secureTextEntry: !tmp8,
          returnKeyType,
          autoCapitalize: "none",
          onSubmitEditing,
          onFocus: callback1,
          onBlur: callback2,
          trailingIcon: EyeIcon,
          trailingPressableProps: {
            accessibilityLabel: stringResult,
            onPress: callback3,
            hitSlop: { top: 8, bottom: 8 },
          },
          errorMessage: tmp14,
          status: str,
        };
        const TextInput = onPasswordChange(tmp4[21]).TextInput;
        obj5 = onPasswordChange(isPasswordFocused[18]);
        intl = onPasswordChange(tmp4[12]).intl;
        intl2 = onPasswordChange(tmp4[12]).intl;
        if (returnKeyType == null) {
          returnKeyType = "next";
        }
        if (tmp8) {
          EyeIcon = onPasswordChange(tmp4[19]).EyeSlashIcon;
        } else {
          EyeIcon = onPasswordChange(tmp4[20]).EyeIcon;
        }
        const intl3 = onPasswordChange(tmp4[12]).intl;
        const string = intl3.string;
        const t = onPasswordChange(tmp4[12]).t;
        if (tmp8) {
          stringResult = string(t.Nusip4);
        } else {
          stringResult = string(t.nFzpM5);
        }
        str = undefined;
        if (null != tmp14) {
          str = "error";
        }
        const children = [
          closure_12(TextInput, obj4),
          closure_12(closure_17, { password, isPasswordFocused, passwordError: tmp14, passwordScore }),
        ];
        let tmp24Result = null;
        if (null != memo) {
          tmp24Result = null;
          if (null == tmp14) {
            obj6 = {
              style: tmp.inputHint,
              variant: "text-xs/medium",
              color: "text-muted",
              animated: true,
              children: memo,
            };
            const Text = onPasswordChange(tmp4[13]).Text;
            const merged = Object.assign(obj5);
            const merged1 = Object.assign(obj6);
            tmp24Result = closure_12(Text, obj6);
          }
        }
        children[2] = tmp24Result;
        return closure_11(closure_13, { children });
      },
);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = forwardRefResult;
