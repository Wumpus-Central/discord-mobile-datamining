// discord_app/modules/auth/native/components/Login.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import NativeDeviceSettingsModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeDeviceSettingsModule.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneStore from "../../../phone/PhoneStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
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
    obj = {
      style: null,
      hitSlop: { top: 8, right: 8, bottom: 8 },
      accessibilityRole: "button",
      onPress,
      children: jsx(closure_0(closure_2[10]).Text, { style: textStyle, variant: str, color: str2, children: text }),
    };
    items = [];
    items[0] = containerStyle;
    obj.style = items;
    return jsx(closure_0(closure_2[9]).PressableOpacity, obj);
  }
}
function handlePressPasswordManagerHint() {
  let obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.lzsy7t);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["TYqh/t"]);
  const intl3 = util.intl;
  obj2.confirmText = intl3.string(util.t["9x0iKe"]);
  const intl4 = util.intl;
  obj2.cancelText = intl4.string(util.t["ETE/oC"]);
  obj2.onConfirm = function onConfirm() {
    if (obj.isAndroid()) {
      const result = NativeDeviceSettingsModuleDefault.openAccessibilitySettings();
    }
    obj = require("PlatformUtils");
  };
  actions_AlertActionCreatorsDefault.show(obj2);
}
const View = fn(17).View;
const AuthStates = fn(1074).AuthStates;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = {
    password: { marginTop: 24 },
    button: { width: "100%", marginTop: 16 },
    hint: { marginTop: 4 },
    link: { alignSelf: "flex-start", paddingVertical: 4 },
    separator: { paddingHorizontal: 16, paddingVertical: 4 },
    content: null,
  };
  let num = 0;
  if (arg0) {
    num = 12;
  }
  obj.content = { marginTop: 32, marginBottom: num };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/Login.tsx");

export default function Login(isMultiAccount) {
  let flag = isMultiAccount.isMultiAccount;
  if (flag === undefined) {
    flag = false;
  }
  _require = flag;
  let navigation;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  first = undefined;
  countryCode = undefined;
  c8 = undefined;
  first1 = undefined;
  closure_10 = undefined;
  let ref;
  let callback;
  const tmp3 = callback(navigation(ref[15])());
  navigation = require("useNavigation").useNavigation();
  let obj = require("useNavigation");
  const items = [countryCode];
  const stateFromStores = require("initialize").useStateFromStores(items, () => countryCode.getCountryCode());
  ref = noop.useRef(null);
  let obj2 = require("initialize");
  const str = stateFromStores.code;
  [tmp9, c3] = noop.useState(false);
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  [tmp11, c4] = noop.useState(false);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  [tmp13, c5] = noop.useState({});
  [first, countryCode] = noop.useState("");
  const tmp12 = _slicedToArray(noop.useState({}), 2);
  [c8, tmp17] = noop.useState("");
  [first1, closure_10] = noop.useState(false);
  ref = noop.useRef(undefined);
  const effect = noop.useEffect(
    () => () => {
      clearTimeout(ref.current);
    },
    [],
  );
  callback = noop.useCallback((retry_after) => {
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
  const tmp16 = _slicedToArray(noop.useState(""), 2);
  const focusEffect = require("BaseNavigationContainer").useFocusEffect(
    noop.useCallback(() => {
      _undefined2(false);
    }, []),
  );
  const items1 = [callback, first];
  closure_13 = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v32 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = tmp8;
              closure_128_0 = undefined;
              let authenticationErrorsFromV6OrEarlierAPIError;
              v3(true);
              v32({});
              c3 = 2;
              v3 = 3;
              v32 = 1;
              const obj6 = { value: tmp4(tmp47[19]).forgotPassword(first), done: false };
              return obj6;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_4(false);
            throw tmp47;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_2 = tmp47;
              authenticationErrorsFromV6OrEarlierAPIError = closure_0(
                tmp47[23],
              ).getAuthenticationErrorsFromV6OrEarlierAPIError(closure_128_2);
              closure_129_12(authenticationErrorsFromV6OrEarlierAPIError);
              c3 = 0;
              closure_129_4(false);
              v32 = 3;
              const obj3 = closure_0(tmp47[23]);
            } else if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_4(false);
              v32 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_128_0 = value;
              if (false !== closure_128_0) {
                if (closure_128_0 === closure_0(tmp47[20]).PasswordResetMethods.ONE_TIME_LOGIN) {
                  closure_0(tmp47[21]).openAlert(
                    "one-time-login-forgot-password-confirm",
                    closure_1_10(tmp4(tmp47[22]), {}),
                  );
                  const obj = closure_0(tmp47[21]);
                } else {
                  const obj9 = { title: null, body: null };
                  const intl = closure_0(tmp47[12]).intl;
                  obj9.title = intl.string(closure_0(tmp47[12]).t.f5Pi7A);
                  const intl2 = closure_0(tmp47[12]).intl;
                  const obj10 = { email: closure_129_6 };
                  obj9.body = intl2.format(closure_0(tmp47[12]).t["6u5hQ9"], obj10);
                  tmp4(tmp47[11]).show(obj9);
                  const obj8 = tmp4(tmp47[11]);
                }
                c3 = 1;
              }
            }
            c3 = 0;
            closure_129_4(false);
            v32 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp47) {
          if (tmp5 === c3) {
            v32 = tmp3;
            throw tmp47;
          } else if (tmp2 === tmp49) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items1,
  );
  _require = asyncGeneratorStep(async (isMultiAccount, arg1) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (isMultiAccount === 1) {
        throw value;
      } else if (isMultiAccount === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (isMultiAccount === 1) {
            c8 = 3;
            throw value;
          } else if (isMultiAccount === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp7;
            closure_131_2 = undefined;
            closure_131_0 = isMultiAccount;
            closure_131_1 = closure_1;
            let flag = closure_2;
            if (closure_2 === undefined) {
              flag = false;
            }
            closure_131_2 = flag;
            let authenticationErrorsFromV6OrEarlierAPIError;
            c7 = 1;
            c8 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp7) {
          if (isMultiAccount === 1) {
            c8 = 3;
            throw value;
          } else if (isMultiAccount === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp3(true);
            tmp22({});
            c6 = 1;
            const obj6 = { login: closure_131_0, password: closure_131_1, undelete: closure_131_2, isMultiAccount };
            c7 = 3;
            c8 = 1;
            const obj8 = { value: navigation(ref[19]).login(obj6), done: false };
            return obj8;
          }
        } else {
          if (2 === tmp7) {
            c6 = 0;
            closure_131_4 = tmp22;
            tmp3(false);
            authenticationErrorsFromV6OrEarlierAPIError = isMultiAccount(
              ref[23],
            ).getAuthenticationErrorsFromV6OrEarlierAPIError(closure_131_4);
            callback(authenticationErrorsFromV6OrEarlierAPIError);
            c8 = 3;
            const obj2 = isMultiAccount(ref[23]);
          } else if (isMultiAccount === 1) {
            c8 = 3;
            throw value;
          } else if (isMultiAccount !== 2) {
            c6 = 0;
          }
          c6 = 0;
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp22) {
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp22;
        } else {
          c7 = tmp;
        }
      }
    }
  });
  const items2 = [callback, flag];
  const callback1 = noop.useCallback(function () {
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
  const callback2 = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v32 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_0 = tmp8;
              let authenticationErrorsFromAPIError;
              if (!first1) {
                if (!isPasswordlessActive.getIsPasswordlessActive()) {
                  const passkeyAuthenticator = tmp4(tmp52[24]).getPasskeyAuthenticator();
                  v3(true);
                  v32({});
                  c3 = 2;
                  const obj4 = tmp4(tmp52[24]);
                  const obj7 = { authenticateFunc: passkeyAuthenticator };
                  v3 = 3;
                  v32 = 1;
                  const obj8 = { value: tmp4(tmp52[19]).authenticatePasswordless(obj7), done: false };
                  return obj8;
                }
              }
              v32 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_1 = tmp52;
              if (closure_128_1 instanceof closure_0(tmp52[25]).APIError) {
                authenticationErrorsFromAPIError = closure_0(tmp52[23]).getAuthenticationErrorsFromAPIError(
                  closure_128_1,
                );
                closure_129_12(authenticationErrorsFromAPIError);
                const obj3 = closure_0(tmp52[23]);
              } else if (!(closure_128_1 instanceof closure_0(tmp52[26]).IgnorableWebAuthnError)) {
                const obj9 = { message: closure_128_1.message };
                closure_129_5(obj9);
              }
            } else if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_4(false);
              v32 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              c3 = 1;
            }
            c3 = 0;
            closure_129_4(false);
          }
          c3 = 0;
          closure_129_4(false);
          throw tmp52;
        } catch (tmp52) {
          if (tmp5 === c3) {
            v32 = tmp3;
            throw tmp52;
          } else if (tmp2 === tmp54) {
            v3 = tmp2;
          } else {
            v3 = tmp;
          }
        }
      }
    }),
    items3,
  );
  navigation(ref[27])();
  navigation(ref[28])(navigation, callback1);
  let tmp27 = navigation(ref[29])("login", tmp13);
  if (tmp27 == null) {
    tmp27 = tmp(tmp2[29])("email", tmp13);
  }
  let obj3 = require("BaseNavigationContainer");
  let tmp30Result = null;
  if (require("MFAUtils").hasWebAuthn) {
    let obj4 = {
      icon: closure_10(tmp4(tmp2[32]).KeyIcon, {}),
      size: "lg",
      variant: "tertiary",
      disabled: null,
      text: null,
      onPress: null,
    };
    let tmp31 = tmp11;
    if (!tmp11) {
      tmp31 = first1;
    }
    obj4.disabled = tmp31;
    let intl = tmp4(tmp2[12]).intl;
    obj4.text = intl.string(tmp4(tmp2[12]).t.EiwJkN);
    obj4.onPress = callback2;
    tmp30Result = closure_10(tmp4(tmp2[31]).Button, obj4);
  }
  const tmp28 = navigation(ref[29])("password", tmp13);
  if (tmp4Result.isMetaQuest()) {
    let obj5 = {
      icon: closure_10(tmp4(tmp2[34]).MobilePhoneIcon, { color: "control-primary-text-default" }),
      size: "lg",
      variant: "primary",
      disabled: tmp11,
      text: null,
      onPress: null,
    };
    let intl2 = tmp4(tmp2[12]).intl;
    obj5.text = intl2.string(tmp4(tmp2[12]).t.Cc4Mc9);
    obj5.onPress = function onPress() {
      return navigation.push(AuthStates.COMPANION_REMOTE_AUTH);
    };
    tmp30Result = closure_10(tmp4(tmp2[31]).Button, obj5);
  }
  let obj6 = {
    autoFocus: true,
    textContentType: "emailAddress",
    keyboardType: "email-address",
    alpha2: stateFromStores.alpha2,
    countryCode: _slicedToArray(str.split(" "), 1)[0],
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
    autoComplete: "username",
  };
  tmp4Result = require("MetaQuestUtils");
  const intl3 = tmp4(tmp2[12]).intl;
  obj6.label = intl3.string(require("util").t.tUjnxr);
  obj6.errorMessage = tmp27;
  obj6.onPressCountrySelector = function onPressCountrySelector() {
    return navigation.push(AuthStates.COUNTRY_SELECT);
  };
  const items4 = [closure_10(navigation(ref[35]), obj6), , , ,];
  let obj7 = {
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
    autoComplete: "current-password",
  };
  const intl4 = tmp4(tmp2[12]).intl;
  obj7.label = intl4.string(require("util").t["CIGa+7"]);
  if (tmp9) {
    let EyeIcon = tmp4(tmp2[37]).EyeSlashIcon;
  } else {
    EyeIcon = tmp4(tmp2[38]).EyeIcon;
  }
  obj7.trailingIcon = EyeIcon;
  const intl5 = tmp4(tmp2[12]).intl;
  const string = intl5.string;
  const t = tmp4(tmp2[12]).t;
  if (tmp9) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj7.trailingPressableProps = {
    accessibilityLabel: stringResult,
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    hitSlop: { top: 8, bottom: 8 },
  };
  obj7.errorMessage = tmp28;
  items4[1] = closure_10(require("TextInput").TextInput, obj7);
  let obj8 = {
    containerStyle: tmp3.link,
    onPress() {
      return closure_13();
    },
    text: null,
  };
  const intl6 = tmp4(tmp2[12]).intl;
  obj8.text = intl6.string(require("util").t.wWIufs);
  items4[2] = closure_10(closure_13, obj8);
  const tmp38 = closure_13;
  const tmpResult = navigation(ref[35]);
  let tmp35Result = null;
  if (tmp4Result6.isAndroid()) {
    tmp35Result = null;
    if (!tmp4Result7.isMetaQuest()) {
      let obj9 = { containerStyle: tmp3.link, onPress: callback1, text: null, textColor: "text-link" };
      const intl7 = tmp4(tmp2[12]).intl;
      obj9.text = intl7.string(tmp4(tmp2[12]).t.RL5Fy2);
      tmp35Result = tmp35(tmp38, obj9);
    }
    tmp4Result7 = tmp4(tmp2[33]);
  }
  items4[3] = tmp35Result;
  let obj10 = { style: tmp3.button, children: null };
  tmp4Result6 = require("PlatformUtils");
  let str3 = "primary";
  if (tmp4Result8.isMetaQuest()) {
    str3 = "tertiary";
  }
  const obj11 = { children: null };
  const obj12 = { size: "lg", variant: str3, disabled: first1, loading: tmp11, text: null, onPress: null };
  const intl8 = tmp4(tmp2[12]).intl;
  obj12.text = intl8.string(require("util").t.dKhVQN);
  obj12.onPress = function onPress() {
    return callback1(first, c8);
  };
  obj10.children = closure_10(require("components/Button/Button").Button, obj12);
  items4[4] = closure_10(first, obj10);
  obj11.children = items4;
  const tmp33Result = ref(first, obj11);
  const obj13 = { headerText: null, subHeader: null, children: null };
  tmp4Result8 = require("MetaQuestUtils");
  const intl9 = tmp4(tmp2[12]).intl;
  obj13.headerText = intl9.string(require("util").t["7fNJgA"]);
  const obj14 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl10 = tmp4(tmp2[12]).intl;
  obj14.children = intl10.string(require("util").t.euS7r4);
  obj13.subHeader = closure_10(require("Text/Text").Text, obj14);
  const obj15 = { style: tmp3.content, children: null };
  const tmpResult2 = navigation(ref[39]);
  let tmp43 = tmp33Result;
  if (tmp4Result9.isMetaQuest()) {
    tmp43 = tmp30Result;
  }
  const items5 = [tmp43, , ,];
  tmp4Result9 = require("MetaQuestUtils");
  items5[1] = closure_10(require("Stack/Stack").Stack, {
    style: tmp3.separator,
    children: closure_10(require("JoinServer").OrSeparator, {}),
  });
  const obj16 = { style: tmp3.separator, children: closure_10(require("JoinServer").OrSeparator, {}) };
  if (tmp4Result10.isMetaQuest()) {
    tmp30Result = tmp33Result;
  }
  items5[2] = tmp30Result;
  let tmp35Result2 = null;
  if (null != tmp13.message) {
    tmp35Result2 = null;
    if ("" !== tmp13.message) {
      const obj17 = { style: tmp3.hint, children: tmp13.message };
      tmp35Result2 = tmp35(tmp(tmp2[42]), obj17);
    }
  }
  items5[3] = tmp35Result2;
  obj15.children = items5;
  obj13.children = ref(first, obj15);
  return closure_10(tmpResult2, obj13);
}
export { LinkButton };
