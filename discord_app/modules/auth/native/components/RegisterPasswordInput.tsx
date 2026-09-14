// discord_app/modules/auth/native/components/RegisterPasswordInput.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import usePasswordScore from "utils/usePasswordScore.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneStore from "../../../phone/PhoneStore.tsx";

const require = globalThis.__r;

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
          obj.variant = "text-xs/medium";
          const items = [tmp.passwordStrength, strong];
          obj.style = items;
          obj.animated = true;
          const intl3 = util.intl;
          const items1 = [intl3.string(util.t["5gbdUX"]), ": ", str];
          obj.children = items1;
          return closure_1_10(Text_Text.Text, obj);
        }
      }
    }
  }
  return null;
}
let closure_3 = ["password"];
const RegistrationUIStore = fn(16043);
({ setRegistrationErrors: closure_8, useRegistrationUIStore: closure_9 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsxs: c10, jsx: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4636);
let obj = {
  weak: { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL },
  medium: null,
  strong: null,
  passwordStrength: null,
  inputHint: null,
};
let obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj.medium = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
let obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj.strong = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj.passwordStrength = { marginTop: 4, marginBottom: 4 };
obj.inputHint = { width: "100%" };
let closure_13 = createStyles.createStyles(obj);
let obj6 = { entering: null, exiting: null };
const FadeIn = fn(4373).FadeIn;
obj6.entering = FadeIn.duration(300);
const FadeOut = fn(4373).FadeOut;
obj6.exiting = FadeOut.duration(300);
const obj7 = { layout: null };
const LinearTransition = fn(4373).LinearTransition;
const Easing = fn(4373).Easing;
const obj5 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj7.layout = LinearTransition.easing(Easing.inOut(fn(4373).Easing.quad)).duration(300);
const easingResult = LinearTransition.easing(Easing.inOut(fn(4373).Easing.quad));
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = noop.forwardRef((arg0, ref) => {
  ({ password, onPasswordChange } = arg0);
  ({ returnKeyType, autoFocus } = arg0);
  ({ onSubmitEditing, passwordScore } = arg0);
  ref = noop.useRef(null);
  const obj2 = { inputRef: ref, enabled: null };
  const tmp = closure_13();
  const tmp3 = importDefault;
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj2.enabled = autoFocus;
  require("useFocusRefOnNavigation")(obj2);
  const tmp5 = require("useFocusRefOnNavigation");
  [tmp8, tmp9] = stateFromStores(noop.useState(false), 2);
  importDefault = tmp9;
  const tmp10 = stateFromStores(noop.useState(false), 2);
  isPasswordFocused = tmp10[0];
  closure_3 = tmp12;
  const tmp13 = closure_9((errors) => errors.errors);
  const user = tmp13;
  const tmp14 = tmp3(isPasswordFocused[13])("password", tmp13);
  const items = [onPasswordChange, tmp13];
  const callback = noop.useCallback((arg0) => {
    if (null != user.password) {
      const password = user.password;
      React6(_objectWithoutProperties(user, closure_3));
    }
    onPasswordChange(arg0);
  }, items);
  const tmp7 = stateFromStores(noop.useState(false), 2);
  const items1 = [PhoneStore];
  stateFromStores = onPasswordChange(isPasswordFocused[14]).useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first[15]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
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
  const obj4 = {
    ref: null,
    textContentType: "newPassword",
    autoComplete: "new-password",
    onChange: null,
    value: null,
    label: null,
    accessibilityHint: null,
    secureTextEntry: null,
    returnKeyType: null,
    autoCapitalize: "none",
    onSubmitEditing: null,
    onFocus: null,
    onBlur: null,
    trailingIcon: null,
    trailingPressableProps: null,
    errorMessage: null,
    status: null,
  };
  const obj3 = onPasswordChange(isPasswordFocused[14]);
  obj4.ref = onPasswordChange(isPasswordFocused[17]).mergeRefs(ref, ref);
  obj4.onChange = callback;
  obj4.value = password;
  let intl = onPasswordChange(tmp4[10]).intl;
  obj4.label = intl.string(onPasswordChange(isPasswordFocused[10]).t["CIGa+7"]);
  const intl2 = onPasswordChange(tmp4[10]).intl;
  obj4.accessibilityHint = intl2.string(onPasswordChange(isPasswordFocused[10]).t.cUVsEG);
  obj4.secureTextEntry = !tmp8;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  obj4.returnKeyType = returnKeyType;
  obj4.onSubmitEditing = onSubmitEditing;
  obj4.onFocus = callback1;
  obj4.onBlur = callback2;
  if (tmp8) {
    let EyeIcon = onPasswordChange(tmp4[18]).EyeSlashIcon;
  } else {
    EyeIcon = onPasswordChange(tmp4[19]).EyeIcon;
  }
  obj4.trailingIcon = EyeIcon;
  const intl3 = onPasswordChange(tmp4[10]).intl;
  const string = intl3.string;
  const t = onPasswordChange(tmp4[10]).t;
  if (tmp8) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj4.trailingPressableProps = {
    accessibilityLabel: stringResult,
    onPress: callback3,
    hitSlop: { top: 8, bottom: 8 },
  };
  obj4.errorMessage = tmp14;
  let str;
  if (null != tmp14) {
    str = "error";
  }
  obj4.status = str;
  const children = [
    closure_11(onPasswordChange(isPasswordFocused[16]).TextInput, obj4),
    closure_11(PasswordStrength, { password, isPasswordFocused, passwordError: tmp14, passwordScore }),
  ];
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
      tmp24Result = closure_11(onPasswordChange(tmp4[11]).Text, obj6);
    }
  }
  children[2] = tmp24Result;
  return closure_10(closure_12, { children });
});
