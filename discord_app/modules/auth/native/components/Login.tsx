// === Module 6436: Login ===

// Module 6436 (Login)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl11 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4892 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import Pressables from "Pressables" /* 5916 */;
import react_nativeDefault from "react-native" /* 6438 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 6437 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c7, navigation;

let c10;
let unpackModuleId;
function handlePressPasswordManagerHint() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj = {
    title: intl.string(intl11.t.lzsy7t),
    body: intl2.string(intl11.t["TYqh/t"]),
    confirmText: intl3.string(intl11.t["9x0iKe"]),
    cancelText: intl4.string(intl11.t["ETE/oC"]),
    onConfirm() {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const obj2 = react_nativeDefault;
        const result = obj2.openAccessibilitySettings();
      }
    }
  };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl11.intl;
  intl2 = intl11.intl;
  intl3 = intl11.intl;
  intl4 = intl11.intl;
  show(obj);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const AuthStates = Constants.AuthStates;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { password: { marginTop: 24 }, button: { width: "100%", marginTop: 16 }, hint: { marginTop: 4 }, link: { alignSelf: "flex-start", paddingVertical: 4 }, separator: { paddingHorizontal: 16, paddingVertical: 4 }, content: { marginTop: 32, marginBottom: num } };
  num = 0;
  if (arg0) {
    num = 12;
  }
  return obj;
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let onPress;
  let text;
  let textColor;
  let textStyle;
  let tmp4;
  let tmp5;
  let variant;
  const obj = react2;
  const cResult = obj.c(12);
  ({ onPress, text, containerStyle, textStyle, variant, textColor } = arg0);
  let str = "text-xs/medium";
  if (undefined !== variant) {
    str = variant;
  }
  let str2 = "text-link";
  if (undefined !== textColor) {
    str2 = textColor;
  }
  if (cResult[0] !== containerStyle) {
    const items = [containerStyle];
    cResult[0] = containerStyle;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const rect = { top: 8, right: 8, bottom: 8 };
    cResult[2] = rect;
    tmp5 = rect;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === text) {
    if (cResult[4] === str2) {
      if (cResult[5] === textStyle) {
        let tmp6;
        if (cResult[6] === str) {
          tmp6 = cResult[7];
        }
        if (cResult[8] === onPress) {
          if (cResult[9] === tmp4) {
            let tmp8;
            if (cResult[10] === tmp6) {
              tmp8 = cResult[11];
            }
            return tmp8;
          }
        }
        const obj2 = { style: tmp4, hitSlop: tmp5, accessibilityRole: "button", onPress, children: tmp6 };
        const tmp10 = authStore(Pressables.PressableOpacity, obj2);
        cResult[8] = onPress;
        cResult[9] = tmp4;
        cResult[10] = tmp6;
        cResult[11] = tmp10;
        tmp8 = tmp10;
      }
    }
  }
  const tmp7 = authStore(Text_Text.Text, { style: textStyle, variant: str, color: str2, children: text });
  cResult[3] = text;
  cResult[4] = str2;
  cResult[5] = textStyle;
  cResult[6] = str;
  cResult[7] = tmp7;
  tmp6 = tmp7;
}) : ((variant) => {
  let containerStyle;
  let items;
  let onPress;
  let text;
  let textStyle;
  let str = variant.variant;
  ({ onPress, text, containerStyle, textStyle } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  let str2 = variant.textColor;
  if (str2 === undefined) {
    str2 = "text-link";
  }
  const obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", onPress, children: authStore(Text_Text.Text, { style: textStyle, variant: str, color: str2, children: text }) };
  items = [containerStyle];
  const PressableOpacity = Pressables.PressableOpacity;
  return authStore(PressableOpacity, obj);
});
let closure_13 = tmp3;
let result = size.fileFinishedImporting("modules/auth/native/components/Login.tsx");

export default function Login(isMultiAccount) {
  let Button3;
  let EyeIcon;
  let Text;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c3;
  let c4;
  let c5;
  let c8;
  let closure_10;
  let countryCode;
  let first1;
  let first2;
  let intl;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items5;
  let obj12;
  let obj14;
  let obj15;
  let stringResult;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp18;
  let flag = isMultiAccount.isMultiAccount;
  if (flag === undefined) {
    flag = false;
  }
  navigation = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  countryCode = undefined;
  c8 = undefined;
  first2 = undefined;
  closure_10 = undefined;
  let ref;
  let callback;
  let tmp = navigation;
  const tmp3 = callback(navigation(ref[17])());
  const tmp4 = flag;
  let obj = flag(ref[18]);
  navigation = obj.useNavigation();
  let obj2 = flag(ref[19]);
  const items = [countryCode];
  const stateFromStores = obj2.useStateFromStores(items, () => countryCode.getCountryCode());
  const str = stateFromStores.code;
  const first = _slicedToArray(str.split(" "), 1)[0];
  react.useRef(null);
  [tmp10, c3] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [tmp12, c4] = _slicedToArray(react.useState(false), 2);
  const tmp11 = _slicedToArray(react.useState(false), 2);
  [tmp14, c5] = _slicedToArray(react.useState({}), 2);
  const tmp13 = _slicedToArray(react.useState({}), 2);
  [first1, countryCode] = react.useState("");
  [c8, tmp18] = _slicedToArray(react.useState(""), 2);
  const tmp17 = _slicedToArray(react.useState(""), 2);
  [first2, closure_10] = react.useState(false);
  ref = react.useRef(undefined);
  const effect = react.useEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  callback = react.useCallback((retry_after) => {
    _undefined3(retry_after);
    if (null != retry_after.retry_after) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      closure_10(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        closure_1_10(false);
      }, 1000 * retry_after.retry_after);
    }
  }, []);
  let obj3 = flag(ref[20]);
  const focusEffect = obj3.useFocusEffect(react.useCallback(() => {
    _undefined2(false);
  }, []));
  const items1 = [callback, first1];
  closure_13 = react.useCallback(_asyncToGenerator(async () => {
    let closure_1;
    let closure_2;
    let intl;
    let intl2;
    let obj4;
    let obj9;
    let v2;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
        let tmp;
        v3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = undefined;
            tmp = undefined;
            v2(true);
            v3({});
            c3 = 2;
            v2 = 3;
            v3 = 1;
            const obj6 = { value: obj4.forgotPassword(first1), done: false };
            obj4 = tmp(ref[21]);
            return obj6;
          }
        } else if (1 === v2) {
          c3 = 0;
          closure_129_4(false);
          throw ref;
        } else {
          if (2 === v2) {
            c3 = 1;
            const obj3 = closure_0(ref[25]);
            tmp = obj3.getAuthenticationErrorsFromV6OrEarlierAPIError(ref);
            closure_129_12(tmp);
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4(false);
            v3 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            if (false === closure_0) {
              c3 = 0;
              closure_129_4(false);
              v3 = 3;
              return { value: "IconComponent", done: null };
            } else {
              if (closure_0 === closure_0(ref[22]).PasswordResetMethods.ONE_TIME_LOGIN) {
                const obj = closure_0(ref[23]);
                obj.openAlert("one-time-login-forgot-password-confirm", closure_1_10(tmp(ref[24]), {}));
              } else {
                const obj8 = { title: intl.string(closure_0(ref[14]).t.f5Pi7A), body: intl2.format(closure_0(ref[14]).t["6u5hQ9"], obj9) };
                const show = tmp(ref[13]).show;
                const tmp58 = tmp(ref[13]);
                intl = closure_0(ref[14]).intl;
                intl2 = closure_0(ref[14]).intl;
                obj9 = { email: closure_129_6 };
                show(obj8);
              }
              c3 = 1;
            }
          }
          c3 = 0;
          closure_129_4(false);
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp43) {
        ref = tmp43;
        if (0 === c3) {
          v3 = 3;
          throw tmp43;
        } else if (1 === tmp45) {
          v2 = 1;
        } else {
          v2 = 2;
        }
      }
    }
  }), items1);
  const useCallback = react.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, password) => {
    let closure_3;
    let closure_4;
    let closure_5;
    let obj7;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      try {
        let authenticationErrorsFromV6OrEarlierAPIError;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            authenticationErrorsFromV6OrEarlierAPIError = tmp4;
            flag = closure_2;
            if (closure_2 === undefined) {
              flag = false;
            }
            authenticationErrorsFromV6OrEarlierAPIError = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp19(true);
            tmp19({});
            c6 = 1;
            const obj6 = { login: isMultiAccount, password, undelete: flag, isMultiAccount };
            c7 = 3;
            c8 = 1;
            const obj8 = { value: obj7.login(obj6), done: false };
            obj7 = navigation(ref[21]);
            return obj8;
          }
        } else {
          if (2 === c7) {
            c6 = 0;
            tmp19(false);
            const obj2 = isMultiAccount(ref[25]);
            authenticationErrorsFromV6OrEarlierAPIError = obj2.getAuthenticationErrorsFromV6OrEarlierAPIError(tmp19);
            callback(authenticationErrorsFromV6OrEarlierAPIError);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp19) {
        if (0 === c6) {
          c8 = 3;
          throw tmp19;
        } else {
          c7 = 2;
        }
      }
    }
  });
  const items2 = [callback, flag];
  const callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items2);
  const items3 = [callback, first2];
  const callback2 = react.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj5;
    let v2;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let authenticationErrorsFromAPIError;
        v3 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            authenticationErrorsFromAPIError = undefined;
            if (!first2) {
              if (!isPasswordlessActive.getIsPasswordlessActive()) {
                const obj4 = tmp(ref[26]);
                const passkeyAuthenticator = obj4.getPasskeyAuthenticator();
                v2(true);
                v3({});
                c3 = 2;
                const obj7 = { authenticateFunc: passkeyAuthenticator };
                v2 = 3;
                v3 = 1;
                const obj8 = { value: obj5.authenticatePasswordless(obj7), done: false };
                obj5 = tmp(ref[21]);
                return obj8;
              }
            }
          }
        } else if (1 === v2) {
          c3 = 0;
          closure_129_4(false);
          throw ref;
        } else {
          if (2 === v2) {
            c3 = 1;
            if (ref instanceof authenticationErrorsFromAPIError(ref[27]).APIError) {
              const obj3 = authenticationErrorsFromAPIError(ref[25]);
              authenticationErrorsFromAPIError = obj3.getAuthenticationErrorsFromAPIError(tmp);
              closure_129_12(authenticationErrorsFromAPIError);
            } else if (!(ref instanceof authenticationErrorsFromAPIError(ref[28]).IgnorableWebAuthnError)) {
              const obj9 = { message: ref.message };
              closure_129_5(obj9);
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4(false);
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_4(false);
        }
        v3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp48) {
        ref = tmp48;
        if (0 === c3) {
          v3 = 3;
          throw tmp48;
        } else if (1 === tmp50) {
          v2 = 1;
        } else {
          v2 = 2;
        }
      }
    }
  }), items3);
  navigation(ref[29])();
  navigation(ref[30])(navigation, callback1);
  let tmp28 = navigation(ref[31])("login", tmp14);
  if (tmp28 == null) {
    tmp28 = tmp(tmp2[31])("email", tmp14);
  }
  let tmp31Result = null;
  const tmp29 = tmp(ref[31])("password", tmp14);
  if (tmp4(ref[32]).hasWebAuthn) {
    let obj4 = { icon: closure_10(tmp4(tmp2[34]).KeyIcon, {}), size: "lg", variant: "tertiary", disabled: tmp12 || first2, text: intl.string(tmp4(tmp2[14]).t.EiwJkN), onPress: callback2 };
    const Button = tmp4(tmp2[33]).Button;
    intl = tmp4(tmp2[14]).intl;
    tmp31Result = closure_10(Button, obj4);
  }
  const tmp4Result = tmp4(ref[35]);
  if (tmp4Result.isMetaQuest()) {
    let obj5 = {
      icon: closure_10(tmp4(tmp2[36]).MobilePhoneIcon, { color: "control-primary-text-default" }),
      size: "lg",
      variant: "primary",
      disabled: tmp12,
      text: intl2.string(tmp4(tmp2[14]).t.Cc4Mc9),
      onPress() {
          return navigation.push(AuthStates.COMPANION_REMOTE_AUTH);
        }
    };
    const Button2 = tmp4(tmp2[33]).Button;
    intl2 = tmp4(tmp2[14]).intl;
    tmp31Result = closure_10(Button2, obj5);
  }
  let obj6 = {
    autoFocus: true,
    textContentType: "emailAddress",
    keyboardType: "email-address",
    alpha2: stateFromStores.alpha2,
    countryCode: first,
    onChange(arg0, arg1) {
      countryCode(arg1 + arg0);
    },
    onSubmitEditing() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    },
    returnKeyType: "next",
    autoCapitalize: "none",
    label: intl3.string(tmp4(tmp2[14]).t.tUjnxr),
    errorMessage: tmp28,
    testID: "login_login_input",
    onPressCountrySelector() {
      return navigation.push(AuthStates.COUNTRY_SELECT);
    },
    clearable: true,
    autoComplete: "username"
  };
  const tmpResult = tmp(ref[37]);
  intl3 = tmp4(tmp2[14]).intl;
  const items4 = [closure_10(tmpResult, obj6), , , , ];
  let obj7 = {
    containerStyle: tmp3.password,
    ref,
    textContentType: "password",
    secureTextEntry: !tmp10,
    onChange: tmp18,
    autoCapitalize: "none",
    onSubmitEditing() {
      return callback1(first1, c8);
    },
    label: intl4.string(tmp4(tmp2[14]).t["CIGa+7"]),
    trailingIcon: EyeIcon,
    trailingPressableProps: {
      accessibilityLabel: stringResult,
      onPress() {
        return _undefined((arg0) => !arg0);
      },
      hitSlop: { top: 8, bottom: 8 }
    },
    returnKeyType: "done",
    errorMessage: tmp29,
    testID: "login_password_input",
    autoComplete: "current-password"
  };
  const TextInput = tmp4(tmp2[38]).TextInput;
  intl4 = tmp4(tmp2[14]).intl;
  if (tmp10) {
    EyeIcon = tmp4(tmp2[39]).EyeSlashIcon;
  } else {
    EyeIcon = tmp4(tmp2[40]).EyeIcon;
  }
  const intl5 = tmp4(tmp2[14]).intl;
  const string = intl5.string;
  const t = tmp4(tmp2[14]).t;
  if (tmp10) {
    stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  items4[1] = closure_10(TextInput, obj7);
  let obj8 = {
    containerStyle: tmp3.link,
    onPress() {
      return closure_13();
    },
    text: intl6.string(tmp4(tmp2[14]).t.wWIufs)
  };
  intl6 = tmp4(tmp2[14]).intl;
  items4[2] = closure_10(closure_13, obj8);
  let tmp35Result = null;
  const tmp38 = closure_13;
  const tmp4Result6 = tmp4(ref[15]);
  if (tmp4Result6.isAndroid()) {
    tmp35Result = null;
    const tmp4Result7 = tmp4(ref[35]);
    if (!tmp4Result7.isMetaQuest()) {
      let obj9 = { containerStyle: tmp3.link, onPress: callback1, text: intl7.string(tmp4(tmp2[14]).t.RL5Fy2), textColor: "text-link" };
      intl7 = tmp4(tmp2[14]).intl;
      tmp35Result = tmp35(tmp38, obj9);
    }
  }
  items4[3] = tmp35Result;
  const obj10 = { style: tmp3.button, children: closure_10(Button3, obj12) };
  Button3 = tmp4(tmp2[33]).Button;
  let str3 = "primary";
  const tmp4Result8 = tmp4(ref[35]);
  if (tmp4Result8.isMetaQuest()) {
    str3 = "tertiary";
  }
  const obj11 = { children: items4 };
  obj12 = {
    size: "lg",
    variant: str3,
    disabled: first2,
    loading: tmp12,
    text: intl8.string(tmp4(ref[14]).t.dKhVQN),
    onPress() {
      return callback1(first1, c8);
    }
  };
  intl8 = tmp4(tmp2[14]).intl;
  items4[4] = closure_10(first1, obj10);
  const tmp33Result = ref(first1, obj11);
  const obj13 = { headerText: intl9.string(tmp4(ref[14]).t["7fNJgA"]), subHeader: closure_10(Text, obj14), children: ref(first1, obj15) };
  const tmpResult2 = tmp(ref[41]);
  intl9 = tmp4(tmp2[14]).intl;
  obj14 = { variant: "text-sm/medium", color: "text-default", children: intl10.string(tmp4(ref[14]).t.euS7r4) };
  Text = tmp4(tmp2[11]).Text;
  intl10 = tmp4(tmp2[14]).intl;
  let tmp43 = tmp33Result;
  obj15 = { style: tmp3.content, children: items5 };
  const tmp4Result9 = tmp4(ref[35]);
  if (tmp4Result9.isMetaQuest()) {
    tmp43 = tmp31Result;
  }
  items5 = [tmp43, , , ];
  const obj16 = { style: tmp3.separator, children: closure_10(tmp4(ref[43]).OrSeparator, {}) };
  const Stack = tmp4(tmp2[42]).Stack;
  items5[1] = closure_10(Stack, obj16);
  const tmp4Result10 = tmp4(ref[35]);
  if (tmp4Result10.isMetaQuest()) {
    tmp31Result = tmp33Result;
  }
  items5[2] = tmp31Result;
  let tmp35Result2 = null;
  if (null != tmp14.message) {
    tmp35Result2 = null;
    if ("" !== tmp14.message) {
      const obj17 = { style: tmp3.hint, children: tmp14.message };
      tmp35Result2 = tmp35(tmp(tmp2[44]), obj17);
    }
  }
  items5[3] = tmp35Result2;
  return closure_10(tmpResult2, obj13);
};
export const LinkButton = tmp3;