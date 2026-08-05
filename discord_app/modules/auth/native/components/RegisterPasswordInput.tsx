// discord_app/modules/auth/native/components/RegisterPasswordInput.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import importAllResult from "EyeIcon";
import handleSetLocationMetadata from "handleSetLocationMetadata";
import useRegistrationUIStore from "useRegistrationUIStore";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { FadeIn } from "module_4146";
import { FadeOut } from "module_4146";
import { LinearTransition } from "module_4146";
import { Easing } from "module_4146";

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function PasswordStrength(passwordScore) {
  let isPasswordFocused;
  let password;
  let passwordError;
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = callback3();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          if (passwordScore <= require("utils/usePasswordScore.tsx") /* PasswordScore */.PasswordScore.WEAK) {
            const intl2 = tmp9(1236).intl;
            let str = intl2.string(tmp9(1236).t["w/8TuV"]);
            let strong = tmp.weak;
          } else if (passwordScore === tmp9(15001).PasswordScore.MEDIUM) {
            const intl = tmp9(1236).intl;
            str = intl.string(tmp9(1236).t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === tmp9(15001).PasswordScore.STRONG) {
              const intl4 = tmp9(1236).intl;
              str = intl4.string(tmp9(1236).t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = {};
          const merged = Object.assign(obj3);
          const merged1 = Object.assign(obj4);
          obj.variant = "text-xs/medium";
          const items = [tmp.passwordStrength, strong];
          obj.style = items;
          obj.animated = true;
          const intl3 = tmp9(1236).intl;
          const items1 = [intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["5gbdUX"]), ": ", str];
          obj.children = items1;
          return callback2(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
        }
      }
    }
  }
  return null;
}
let closure_3 = ["password"];
({ setRegistrationErrors: metroImportAll, useRegistrationUIStore: c9 } = useRegistrationUIStore);
({ jsxs: c10, jsx: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { weak: null, medium: null, strong: null, passwordStrength: null, inputHint: null };
obj = { color: require("Themes").colors.TEXT_FEEDBACK_CRITICAL };
obj[0] = obj;
createCacheKey = { color: require("Themes").colors.TEXT_FEEDBACK_WARNING };
obj[1] = createCacheKey;
obj[2] = { color: require("Themes").colors.TEXT_FEEDBACK_POSITIVE };
obj[3] = { marginTop: 4, marginBottom: 4 };
obj[4] = { width: "100%" };
let closure_13 = createCacheKey.createStyles(obj);
let obj3 = { entering: null, exiting: null };
obj3[0] = require("module_300");
obj3[1] = require("module_300");
const obj4 = { layout: null };
const obj2 = { color: require("Themes").colors.TEXT_FEEDBACK_POSITIVE };
obj4[0] = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(require("module_4146").Easing.quad));
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let autoFocus;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  let tmp8;
  let tmp9;
  ({ password, onPasswordChange } = arg0);
  ({ returnKeyType, autoFocus } = arg0);
  let obj = importAllResult;
  ({ onSubmitEditing, passwordScore } = arg0);
  ref = importAllResult.useRef(null);
  obj = { inputRef: ref, enabled: null };
  const tmp = callback3();
  const tmp3 = importDefault;
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj[1] = autoFocus;
  importDefault(first[12])(obj);
  const tmp5 = importDefault(first[12]);
  [tmp8, tmp9] = stateFromStores(obj.useState(false), 2);
  importDefault = tmp9;
  const tmp10 = stateFromStores(obj.useState(false), 2);
  first = tmp10[0];
  let closure_3 = tmp12;
  const tmp13 = callback((errors) => errors.errors);
  let _objectWithoutProperties = tmp13;
  const tmp14 = tmp3(first[13])("password", tmp13);
  const items = [onPasswordChange, tmp13];
  callback = obj.useCallback((arg0) => {
    if (null != tmp13.password) {
      const password = tmp.password;
      outer1_8(tmp13(tmp, closure_3));
    }
    onPasswordChange(arg0);
  }, items);
  const obj3 = onPasswordChange(first[14]);
  const items1 = [handleSetLocationMetadata];
  stateFromStores = obj3.useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first[15]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
    let num = 8;
    if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
      num = 12;
    }
    return num;
  });
  const items2 = [first, stateFromStores];
  const memo = obj.useMemo(() => {
    if (first) {
      const intl = onPasswordChange(first[10]).intl;
      const obj = { minimumLength: null };
      obj[0] = stateFromStores;
      return intl.format(onPasswordChange(first[10]).t.VUUJ6V, obj);
    }
  }, items2);
  const items3 = [tmp10[1]];
  const items4 = [tmp10[1]];
  const callback1 = obj.useCallback(() => {
    tmp12(true);
  }, items3);
  const items5 = [tmp9];
  const callback2 = obj.useCallback(() => {
    tmp12(false);
  }, items4);
  callback3 = obj.useCallback(() => {
    tmp9((arg0) => !arg0);
  }, items5);
  obj = { ref: null, textContentType: "newPassword", autoComplete: "new-password", onChange: null, value: null, label: null, accessibilityHint: null, secureTextEntry: null, returnKeyType: null, autoCapitalize: "none", onSubmitEditing: null, onFocus: null, onBlur: null, trailingIcon: null, trailingPressableProps: null, errorMessage: null, status: null };
  const tmp22 = closure_10;
  const tmp23 = closure_12;
  const tmp7 = stateFromStores(obj.useState(false), 2);
  obj[0] = onPasswordChange(first[17]).mergeRefs(ref, ref);
  obj[3] = callback;
  obj[4] = password;
  let intl = onPasswordChange(tmp4[10]).intl;
  obj[5] = intl.string(onPasswordChange(first[10]).t["CIGa+7"]);
  const intl2 = onPasswordChange(tmp4[10]).intl;
  obj[6] = intl2.string(onPasswordChange(first[10]).t.cUVsEG);
  obj[7] = !tmp8;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  obj[8] = returnKeyType;
  obj[10] = onSubmitEditing;
  obj[11] = callback1;
  obj[12] = callback2;
  if (tmp8) {
    let EyeIcon = tmp16(tmp4[18]).EyeSlashIcon;
  } else {
    EyeIcon = tmp16(tmp4[19]).EyeIcon;
  }
  obj[13] = EyeIcon;
  const intl3 = tmp16(tmp4[10]).intl;
  const string = intl3.string;
  const t = tmp16(tmp4[10]).t;
  if (tmp8) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj[14] = { accessibilityLabel: stringResult, onPress: callback3, hitSlop: { top: 8, bottom: 8 } };
  obj[15] = tmp14;
  let str;
  if (null != tmp14) {
    str = "error";
  }
  obj[16] = str;
  const children = [closure_11(onPasswordChange(first[16]).TextInput, obj), closure_11(PasswordStrength, { password, isPasswordFocused: first, passwordError: tmp14, passwordScore }), ];
  let tmp24Result = null;
  if (null != memo) {
    tmp24Result = null;
    if (null == tmp14) {
      const obj1 = {};
      const merged = Object.assign(obj3);
      const merged1 = Object.assign(obj4);
      obj1.style = tmp.inputHint;
      obj1.variant = "text-xs/medium";
      obj1.color = "text-muted";
      obj1.animated = true;
      obj1.children = memo;
      tmp24Result = tmp24(tmp16(tmp4[11]).Text, obj1);
    }
  }
  children[2] = tmp24Result;
  return tmp22(tmp23, { children });
});
const result = require("noop").fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = forwardRefResult;