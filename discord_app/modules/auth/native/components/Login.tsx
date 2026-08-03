// === Module 9200: LinkButton ===

// Module 9200 (LinkButton)
import fetchFingerprint from "fetchFingerprint";
import KeyIcon from "KeyIcon";
import handleLogout from "handleLogout";
import { View } from "initialize";
import handleSetLocationMetadata from "handleSetLocationMetadata";
import closure_8 from "fetchFingerprint";
import { AuthStates } from "ME";
import jsxProd from "useAlertStore";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
class LinkButton {
  constructor(arg0) {
    str = global.variant;
    ({ onPress, text, containerStyle, textStyle } = global);
    if (str === undefined) {
      str = "text-xs/medium";
    }
    str2 = global.textColor;
    if (str2 === undefined) {
      str2 = "text-link";
    }
    obj = { style: items, hitSlop: { top: 8, right: 8, bottom: 8 }, accessibilityRole: "button", onPress, children: null };
    items = [];
    items[0] = containerStyle;
    obj[4] = jsx(require("Text").Text, { style: textStyle, variant: str, color: str2, children: text });
    return jsx(require("PressableBase").PressableOpacity, obj);
  }
}
function handlePressPasswordManagerHint() {
  let obj = importDefault(4533);
  obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.lzsy7t);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["TYqh/t"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["9x0iKe"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl4.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  obj[4] = function onConfirm() {
    if (obj.isAndroid()) {
      const result = callback2(table[14]).openAccessibilitySettings();
      const obj2 = callback2(table[14]);
    }
  };
  obj.show(obj);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0) => {
  const obj = { password: { marginTop: 24 }, button: { width: "100%", marginTop: 16 }, hint: { marginTop: 4 }, link: { alignSelf: "flex-start", paddingVertical: 4 }, separator: { paddingHorizontal: 16, paddingVertical: 4 }, content: null };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  obj[5] = { marginTop: 32, marginBottom: num };
  return obj;
});
let result = require("noop").fileFinishedImporting("modules/auth/native/components/Login.tsx");

export default function Login(isMultiAccount) {
  let c3;
  let c4;
  let c5;
  let c8;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp9;
  let flag = isMultiAccount.isMultiAccount;
  if (flag === undefined) {
    flag = false;
  }
  let _require = flag;
  let navigation;
  let ref;
  let callback;
  let callback2;
  let React;
  let first;
  let handleSetLocationMetadata;
  c8 = undefined;
  let first1;
  let callback3;
  let closure_11;
  callback = undefined;
  let closure_13;
  let callback1;
  const tmp3 = callback(navigation(ref[15])());
  let obj = _require(ref[16]);
  navigation = obj.useNavigation();
  let obj1 = _require(ref[17]);
  const items = [handleSetLocationMetadata];
  const stateFromStores = obj1.useStateFromStores(items, () => countryCode.getCountryCode());
  ref = React.useRef(null);
  [tmp9, c3] = callback2(React.useState(false), 2);
  const str = stateFromStores.code;
  const tmp8 = callback2(React.useState(false), 2);
  [tmp11, c4] = callback2(React.useState(false), 2);
  const tmp10 = callback2(React.useState(false), 2);
  [tmp13, c5] = callback2(React.useState({}), 2);
  const tmp14 = callback2(React.useState(""), 2);
  first = tmp14[0];
  handleSetLocationMetadata = tmp14[1];
  const tmp12 = callback2(React.useState({}), 2);
  [c8, tmp17] = callback2(React.useState(""), 2);
  const tmp18 = callback2(React.useState(false), 2);
  first1 = tmp18[0];
  callback3 = tmp18[1];
  closure_11 = React.useRef(undefined);
  const effect = React.useEffect(() => () => {
    clearTimeout(ref.current);
  }, []);
  callback = React.useCallback((retry_after) => {
    _undefined3(retry_after);
    if (null != retry_after.retry_after) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      callback(true);
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        callback(false);
      }, 1000 * retry_after.retry_after);
    }
  }, []);
  let obj2 = _require(ref[18]);
  const focusEffect = obj2.useFocusEffect(React.useCallback(() => {
    _undefined2(false);
  }, []));
  const items1 = [callback, first];
  closure_13 = React.useCallback(callback(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c1 = tmp4;
            let closure_0 = tmp8;
            closure_0 = undefined;
            c1 = undefined;
            v0(true);
            v02({});
            let c3 = 2;
            let obj3 = outer1_1(outer1_2[19]);
            v0 = 3;
            v02 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj3.forgotPassword(outer1_6);
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          v0(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            outer1_2 = closure_2;
            let obj2 = outer1_0(outer1_2[23]);
            outer1_1 = obj2.getAuthenticationErrorsFromV6OrEarlierAPIError(outer1_2);
            callback(outer1_1);
            c3 = 0;
            v0(false);
            v02 = 3;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            v0(false);
            v02 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            if (false !== closure_0) {
              if (closure_0 === outer1_0(outer1_2[20]).PasswordResetMethods.ONE_TIME_LOGIN) {
                obj = outer1_0(outer1_2[21]);
                obj.openAlert("one-time-login-forgot-password-confirm", outer1_10(outer1_1(outer1_2[22]), {}));
              } else {
                obj3 = { title: null, body: null };
                const intl = outer1_0(outer1_2[12]).intl;
                obj3[0] = intl.string(outer1_0(outer1_2[12]).t.f5Pi7A);
                const intl2 = outer1_0(outer1_2[12]).intl;
                const obj4 = { email: null };
                obj4[0] = closure_6;
                obj3[1] = intl2.format(outer1_0(outer1_2[12]).t["6u5hQ9"], obj4);
                outer1_1(outer1_2[11]).show(obj3);
                const obj8 = outer1_1(outer1_2[11]);
              }
              c3 = 1;
            }
          }
          c3 = 0;
          v0(false);
          v02 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp47) {
        closure_2 = tmp47;
        if (tmp5 === c3) {
          v02 = tmp3;
          throw tmp47;
        } else if (tmp2 === tmp49) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items1);
  _require = undefined;
  _require = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, arg1) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let KeyIcon = tmp3;
              let authenticationErrorsFromV6OrEarlierAPIError = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              authenticationErrorsFromV6OrEarlierAPIError = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              outer1_4(true);
              outer1_5({});
              let c6 = 1;
              const obj2 = { login: null, password: null, undelete: null, isMultiAccount: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj2[2] = flag;
              obj2[3] = callback;
              c7 = 3;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = navigation(ref[19]).login(obj2);
              return obj3;
            }
          } else {
            if (2 === tmp7) {
              c6 = 0;
              KeyIcon = handleLogout;
              outer1_4(false);
              obj1 = callback(ref[23]);
              authenticationErrorsFromV6OrEarlierAPIError = obj1.getAuthenticationErrorsFromV6OrEarlierAPIError(KeyIcon);
              outer1_12(authenticationErrorsFromV6OrEarlierAPIError);
              c8 = 3;
            } else if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 0;
            }
            c6 = 0;
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp22) {
          handleLogout = tmp22;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp22;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items2 = [callback, flag];
  callback1 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [callback, first1];
  callback2 = React.useCallback(callback(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let message = tmp4;
            let c0 = tmp8;
            c0 = undefined;
            if (!outer1_9) {
              if (!outer1_8.getIsPasswordlessActive()) {
                let obj3 = outer1_1(outer1_2[24]);
                const passkeyAuthenticator = obj3.getPasskeyAuthenticator();
                v0(true);
                v02({});
                let c3 = 2;
                const obj1 = { authenticateFunc: null };
                obj1[0] = passkeyAuthenticator;
                v0 = 3;
                v02 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = outer1_1(outer1_2[19]).authenticatePasswordless(obj1);
                return obj2;
              }
            }
            v02 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c3 = 1;
            message = closure_2;
            if (message instanceof outer1_0(outer1_2[25]).APIError) {
              obj2 = outer1_0(outer1_2[23]);
              outer1_0 = obj2.getAuthenticationErrorsFromAPIError(outer1_1);
              callback(outer1_0);
            } else if (!(outer1_1 instanceof outer1_0(outer1_2[26]).IgnorableWebAuthnError)) {
              obj3 = { message: null };
              obj3[0] = message.message;
              v02(obj3);
            }
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            v0(false);
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          v0(false);
        }
        c3 = 0;
        v0(false);
        throw closure_2;
      } catch (tmp52) {
        closure_2 = tmp52;
        if (tmp5 === c3) {
          v02 = tmp3;
          throw tmp52;
        } else if (tmp2 === tmp54) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items3);
  navigation(ref[27])();
  navigation(ref[28])(navigation, callback1);
  let tmp27 = navigation(ref[29])("login", tmp13);
  if (tmp27 == null) {
    tmp27 = tmp(tmp2[29])("email", tmp13);
  }
  const tmp16 = callback2(React.useState(""), 2);
  let tmp30Result = null;
  if (_require(ref[30]).hasWebAuthn) {
    obj = { icon: null, size: "lg", variant: "tertiary", disabled: null, text: null, onPress: null };
    obj[0] = callback3(tmp4(tmp2[32]).KeyIcon, {});
    let tmp31 = tmp11;
    if (!tmp11) {
      tmp31 = first1;
    }
    obj[3] = tmp31;
    let intl = tmp4(tmp2[12]).intl;
    obj[4] = intl.string(tmp4(tmp2[12]).t.EiwJkN);
    obj[5] = callback2;
    tmp30Result = callback3(tmp4(tmp2[31]).Button, obj);
    const tmp30 = callback3;
  }
  let tmp4Result = tmp4(tmp2[33]);
  if (tmp4Result.isMetaQuest()) {
    obj = { icon: null, size: "lg", variant: "primary", disabled: null, text: null, onPress: null };
    obj[0] = callback3(tmp4(tmp2[34]).MobilePhoneIcon, { color: "control-primary-text-default" });
    obj[3] = tmp11;
    let intl2 = tmp4(tmp2[12]).intl;
    obj[4] = intl2.string(tmp4(tmp2[12]).t.Cc4Mc9);
    obj[5] = function onPress() {
      return navigation.push(first1.COMPANION_REMOTE_AUTH);
    };
    tmp30Result = callback3(tmp4(tmp2[31]).Button, obj);
  }
  obj1 = {
    autoFocus: true,
    textContentType: "emailAddress",
    keyboardType: "email-address",
    alpha2: stateFromStores.alpha2,
    countryCode: callback2(str.split(" "), 1)[0],
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
    label: null,
    errorMessage: null,
    testID: "login_login_input",
    onPressCountrySelector: null,
    isClearable: true,
    autoComplete: "username"
  };
  let tmpResult = tmp(tmp2[35]);
  const intl3 = tmp4(tmp2[12]).intl;
  obj1[9] = intl3.string(_require(ref[12]).t.tUjnxr);
  obj1[10] = tmp27;
  obj1[12] = function onPressCountrySelector() {
    return navigation.push(first1.COUNTRY_SELECT);
  };
  const items4 = [callback3(tmpResult, obj1), , , , ];
  obj2 = {
    containerStyle: tmp3.password,
    ref,
    textContentType: "password",
    secureTextEntry: !tmp9,
    onChange: tmp17,
    autoCapitalize: "none",
    onSubmitEditing() {
      return callback1(first, c8);
    },
    label: null,
    trailingIcon: null,
    trailingPressableProps: null,
    returnKeyType: "done",
    errorMessage: null,
    testID: "login_password_input",
    autoComplete: "current-password"
  };
  const intl4 = tmp4(tmp2[12]).intl;
  obj2[7] = intl4.string(_require(ref[12]).t["CIGa+7"]);
  if (tmp9) {
    let EyeIcon = tmp4(tmp2[37]).EyeSlashIcon;
  } else {
    EyeIcon = tmp4(tmp2[38]).EyeIcon;
  }
  obj2[8] = EyeIcon;
  const intl5 = tmp4(tmp2[12]).intl;
  const string = intl5.string;
  const t = tmp4(tmp2[12]).t;
  if (tmp9) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj2[9] = {
    accessibilityLabel: stringResult,
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    hitSlop: { top: 8, bottom: 8 }
  };
  obj2[11] = navigation(ref[29])("password", tmp13);
  items4[1] = callback3(_require(ref[36]).TextInput, obj2);
  let obj3 = {
    containerStyle: tmp3.link,
    onPress() {
      return callback2();
    },
    text: null
  };
  const intl6 = tmp4(tmp2[12]).intl;
  obj3[2] = intl6.string(_require(ref[12]).t.wWIufs);
  items4[2] = callback3(closure_13, obj3);
  tmp4Result = tmp4(tmp2[13]);
  let tmp35Result = null;
  if (tmp4Result.isAndroid()) {
    tmp35Result = null;
    if (!tmp4Result1.isMetaQuest()) {
      let obj4 = { containerStyle: null, onPress: null, text: null, textColor: "text-link" };
      obj4[0] = tmp3.link;
      obj4[1] = callback1;
      const intl7 = tmp4(tmp2[12]).intl;
      obj4[2] = intl7.string(tmp4(tmp2[12]).t.RL5Fy2);
      tmp35Result = tmp35(tmp38, obj4);
    }
    tmp4Result1 = tmp4(tmp2[33]);
  }
  items4[3] = tmp35Result;
  const obj5 = { style: tmp3.button, children: null };
  const tmp28 = navigation(ref[29])("password", tmp13);
  tmp38 = closure_13;
  let str3 = "primary";
  if (tmp4Result2.isMetaQuest()) {
    str3 = "tertiary";
  }
  const obj6 = { children: null };
  const obj7 = { size: "lg", variant: str3, disabled: first1, loading: tmp11, text: null, onPress: null };
  const intl8 = tmp4(tmp2[12]).intl;
  obj7[4] = intl8.string(_require(ref[12]).t.dKhVQN);
  obj7[5] = function onPress() {
    return callback1(first, c8);
  };
  obj5[1] = callback3(_require(ref[31]).Button, obj7);
  items4[4] = callback3(first, obj5);
  obj6[0] = items4;
  const tmp33Result = closure_11(first, obj6);
  let obj8 = { headerText: null, subHeader: null, children: null };
  tmpResult = tmp(tmp2[39]);
  const intl9 = tmp4(tmp2[12]).intl;
  obj8[0] = intl9.string(_require(ref[12]).t["7fNJgA"]);
  const obj9 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl10 = tmp4(tmp2[12]).intl;
  obj9[2] = intl10.string(_require(ref[12]).t.euS7r4);
  obj8[1] = callback3(_require(ref[10]).Text, obj9);
  const obj10 = { style: tmp3.content, children: null };
  tmp4Result2 = _require(ref[33]);
  let tmp43 = tmp33Result;
  if (tmp4Result3.isMetaQuest()) {
    tmp43 = tmp30Result;
  }
  const items5 = [tmp43, , , ];
  const obj11 = { style: tmp3.separator, children: null };
  obj11[1] = callback3(_require(ref[41]).OrSeparator, {});
  items5[1] = callback3(_require(ref[40]).Stack, obj11);
  tmp4Result3 = _require(ref[33]);
  if (tmp4Result4.isMetaQuest()) {
    tmp30Result = tmp33Result;
  }
  items5[2] = tmp30Result;
  tmp35Result = null;
  if (null != tmp13.message) {
    tmp35Result = null;
    if ("" !== tmp13.message) {
      const obj12 = { style: null, children: null };
      obj12[0] = tmp3.hint;
      obj12[1] = tmp13.message;
      tmp35Result = tmp35(tmp(tmp2[42]), obj12);
    }
  }
  items5[3] = tmp35Result;
  obj10[1] = items5;
  obj8[2] = closure_11(first, obj10);
  return callback3(tmpResult, obj8);
};
export { LinkButton };