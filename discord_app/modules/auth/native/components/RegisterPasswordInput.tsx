// discord_app/modules/auth/native/components/RegisterPasswordInput.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import usePasswordScore from "utils/usePasswordScore.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneStore from "../../../phone/PhoneStore.tsx";

require = fn;
function PasswordStrength(passwordScore) {
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = closure_13();
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
          obj.variant = "body-xs/medium";
          items = [tmp.passwordStrength, strong];
          obj.style = items;
          obj.animated = true;
          const intl3 = util.intl;
          const items1 = [intl3.string(util.t["5gbdUX"]), ": ", str];
          obj.children = items1;
          return refs(Text_Text.Text, obj);
        }
      }
    }
  }
  return null;
}
let closure_3 = ["password"];
const RegistrationUIStore = fn(18519);
({ setRegistrationErrors: closure_8, useRegistrationUIStore: closure_9 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsxs: closure_10, jsx: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  weak: { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL },
  medium: null,
  strong: null,
  passwordStrength: null,
  inputHint: null,
};
let obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.medium = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj2.strong = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj2.passwordStrength = { marginTop: 4, marginBottom: 4 };
obj2.inputHint = { width: "100%" };
let closure_13 = createStyles.createStyles(obj2);
let obj6 = { entering: null, exiting: null };
const FadeIn = fn(1652).FadeIn;
obj6.entering = FadeIn.duration(300);
const FadeOut = fn(1652).FadeOut;
obj6.exiting = FadeOut.duration(300);
const obj7 = { layout: null };
const LinearTransition = fn(1652).LinearTransition;
const Easing = fn(1652).Easing;
const obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj7.layout = LinearTransition.easing(Easing.inOut(fn(1652).Easing.quad)).duration(300);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export function RegisterPasswordInput(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  onPasswordChange = undefined;
  let isPasswordFocused;
  dependencyMap = undefined;
  let user;
  let stateFromStores;
  ({ password, onPasswordChange } = merged);
  ({ returnKeyType, autoFocus } = merged);
  ({ onSubmitEditing, passwordScore } = merged);
  ref = noop.useRef(null);
  const obj2 = { inputRef: ref, enabled: null };
  const tmp2 = closure_13();
  const tmp4 = isPasswordFocused;
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj2.enabled = autoFocus;
  isPasswordFocused(16370)(obj2);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  isPasswordFocused = tmp8[0];
  dependencyMap = tmp10;
  const tmp11 = closure_9((errors) => errors.errors);
  user = tmp11;
  const tmp12 = tmp4(7717)("password", tmp11);
  items = [onPasswordChange, tmp11];
  const callback = noop.useCallback((arg0) => {
    if (null != user.password) {
      const password = user.password;
      React5(_objectWithoutProperties(user, user));
    }
    onPasswordChange(arg0);
  }, items);
  const tmp14 = onPasswordChange;
  const tmp6 = isPasswordFocused(16370);
  const items1 = [PhoneStore];
  stateFromStores = onPasswordChange(504).useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(5936).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
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
  const items3 = [tmp8[1]];
  const items4 = [tmp8[1]];
  const callback1 = noop.useCallback(() => {
    dependencyMap(true);
  }, items3);
  const callback2 = noop.useCallback(() => {
    dependencyMap(false);
  }, items4);
  const obj4 = {
    ref: null,
    textContentType: "newPassword",
    autoComplete: "new-password",
    onChange: null,
    value: null,
    label: null,
    accessibilityHint: null,
    secureTextEntry: true,
    revealable: true,
    returnKeyType: null,
    autoCapitalize: "none",
    onSubmitEditing: null,
    onFocus: null,
    onBlur: null,
    errorMessage: null,
    status: null,
  };
  const obj3 = onPasswordChange(504);
  obj4.ref = onPasswordChange(5420).mergeRefs(ref.ref, ref);
  obj4.onChange = callback;
  obj4.value = password;
  let intl = onPasswordChange(1113).intl;
  obj4.label = intl.string(onPasswordChange(1113).t["CIGa+7"]);
  const intl2 = onPasswordChange(1113).intl;
  obj4.accessibilityHint = intl2.string(onPasswordChange(1113).t.cUVsEG);
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  obj4.returnKeyType = returnKeyType;
  obj4.onSubmitEditing = onSubmitEditing;
  obj4.onFocus = callback1;
  obj4.onBlur = callback2;
  obj4.errorMessage = tmp12;
  let str;
  if (null != tmp12) {
    str = "error";
  }
  obj4.status = str;
  const children = [
    closure_11(onPasswordChange(7553).TextInput, obj4),
    closure_11(PasswordStrength, { password, isPasswordFocused, passwordError: tmp12, passwordScore }),
  ];
  let tmp21Result = null;
  if (null != memo) {
    tmp21Result = null;
    if (null == tmp12) {
      obj6 = {};
      const merged1 = Object.assign(obj6);
      const merged2 = Object.assign(obj7);
      obj6.style = tmp2.inputHint;
      obj6.variant = "body-xs/medium";
      obj6.color = "text-muted";
      obj6.animated = true;
      obj6.children = memo;
      tmp21Result = closure_11(tmp14(5866).Text, obj6);
    }
  }
  children[2] = tmp21Result;
  return closure_10(closure_12, { children });
}
