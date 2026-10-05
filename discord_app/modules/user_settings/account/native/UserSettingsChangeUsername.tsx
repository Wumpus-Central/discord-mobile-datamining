// === Module 14515: UserSettingsChangeUsername ===

// Module 14515 (UserSettingsChangeUsername)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_1, importAll, navigation;

let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function UsernameStatusMessage(showHint) {
  let P;
  let P2;
  showHint = showHint.showHint;
  const usernameStatus = showHint.usernameStatus;
  const str = showHint(5075);
  const match = str.match(usernameStatus);
  let obj = { type: showHint(14516).NameValidationState.ERROR, message: P.select() };
  const _with = match.with;
  P = showHint(5075).P;
  const _withResult = _with(obj, (children) => {
    const obj = { variant: "text-xs/medium", color: "text-feedback-critical", children };
    return closure_1_11(showHint(dependencyMap[11]).Text, obj);
  });
  const _with2 = _withResult.with;
  const obj2 = { type: showHint(14516).NameValidationState.AVAILABLE, message: P2.select() };
  P2 = showHint(5075).P;
  const _with2Result = _with2(obj2, (children) => {
    const obj = { variant: "text-xs/medium", color: "text-feedback-positive", children };
    return closure_1_11(showHint(dependencyMap[11]).Text, obj);
  });
  return _with2Result.otherwise(() => {
    let intl;
    let tmp = null;
    if (showHint) {
      const obj = { variant: "text-xs/medium", color: "text-default", children: intl.string(intl3.t.z7c4bP) };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      tmp = unpackModuleId(Text, obj);
    }
    return tmp;
  });
}
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, container: { padding: 16 }, inputs: { flex: 1, flexDirection: "row", marginTop: 8 }, username: { flex: 2 }, discriminator: { flex: 1 }, divider: obj3, dividerInner: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
obj4 = { flex: 1, marginVertical: 12, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
let closure_13 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let first;
  let first1;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp9;
  let tmp = navigation;
  let obj = navigation(first[14]);
  const cResult = obj.c(74);
  const tmp4 = closure_13();
  let obj2 = navigation(first[15]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class S {
      constructor() {
        return closure_9.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(first[16]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, S);
  if (cResult[2] !== stateFromStores) {
    let obj5 = stateFromStores(tmp2[17]);
    const canEditDiscriminatorResult = obj5.canEditDiscriminator(stateFromStores);
    class S {
      constructor() {
        return closure_9.getCurrentUser();
      }
    }
    cResult[2] = stateFromStores;
    cResult[3] = canEditDiscriminatorResult;
    tmp9 = canEditDiscriminatorResult;
  } else {
    tmp9 = cResult[3];
  }
  let closure_2 = tmp9;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  const tmp13 = first1(useState(str), 2);
  first = tmp13[0];
  let closure_4 = tmp13[1];
  let str2;
  const useState2 = react.useState;
  if (stateFromStores != null) {
    str2 = stateFromStores.discriminator;
  }
  if (str2 == null) {
    str2 = "";
  }
  first1 = tmp12(useState2(str2), 2)[0];
  first1(useState2(str2), 2);
  const tmp12Result2 = first1(react.useState(null), 2);
  [r10065, react] = tmp12Result2;
  if (cResult[4] !== stateFromStores) {
    let hasUniqueUsernameResult;
    if (stateFromStores != null) {
      hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
    }
    class S {
      constructor() {
        return closure_9.getCurrentUser();
      }
    }
    cResult[5] = hasUniqueUsernameResult;
    tmp18 = hasUniqueUsernameResult;
  } else {
    tmp18 = cResult[5];
  }
  let username;
  const useUsernameStatus = tmp(tmp2[18]).useUsernameStatus;
  const tmp21 = !tmp18;
  tmp(first[18]);
  if (stateFromStores != null) {
    username = stateFromStores.username;
  }
  const usernameStatus = useUsernameStatus(first, !tmp21, false, username);
  const ref = react.useRef(null);
  if (cResult[6] === tmp9) {
    if (cResult[7] === first1) {
      if (stateFromStores != null) {
        const discriminator = stateFromStores.discriminator;
      }
      class S {
        constructor() {
          return closure_9.getCurrentUser();
        }
      }
    }
  }
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  let tmp27 = first !== username1;
  if (!tmp27) {
    let discriminator1;
    if (stateFromStores != null) {
      discriminator1 = stateFromStores.discriminator;
    }
    tmp27 = first1 !== discriminator1;
  }
  if (tmp27) {
    const tmp29 = !tmp9;
    if (tmp9) {
      const obj7 = /^\d+$/;
      let isMatch = obj7.test(first1);
      if (isMatch) {
        const _parseInt = parseInt;
        isMatch = parseInt(first1) > 0;
      }
      class S {
        constructor() {
          return closure_9.getCurrentUser();
        }
      }
    }
    tmp27 = tmp29;
  }
  cResult[6] = tmp9;
  cResult[7] = first1;
  let discriminator2;
  if (stateFromStores != null) {
    discriminator2 = stateFromStores.discriminator;
  }
  cResult[8] = discriminator2;
  let username2;
  if (stateFromStores != null) {
    username2 = stateFromStores.username;
  }
  cResult[9] = username2;
  cResult[10] = first;
  cResult[11] = tmp27;
}) : (() => {
  let first1;
  let intl;
  let intl2;
  let isMatch;
  let items4;
  let items5;
  let items6;
  let obj16;
  let obj6;
  let onSubmitEditing;
  let str6;
  let value;
  let tmp = closure_13();
  const tmp3 = value;
  let obj = navigation(value[15]);
  navigation = obj.useNavigation();
  let obj2 = navigation(value[16]);
  const items = [onSubmitEditing];
  const stateFromStores = obj2.useStateFromStores(items, () => callback.getCurrentUser());
  let obj4 = stateFromStores(value[17]);
  let canEditDiscriminatorResult = obj4.canEditDiscriminator(stateFromStores);
  if (canEditDiscriminatorResult) {
    let hasUniqueUsernameResult;
    if (stateFromStores != null) {
      hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
    }
    canEditDiscriminatorResult = !hasUniqueUsernameResult;
  }
  importAll = canEditDiscriminatorResult;
  let str;
  const useState = react.useState;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  const tmp10 = first1(useState(str), 2);
  value = tmp10[0];
  let closure_4 = tmp10[1];
  let str2;
  const useState2 = react.useState;
  if (stateFromStores != null) {
    str2 = stateFromStores.discriminator;
  }
  if (str2 == null) {
    str2 = "";
  }
  const tmp9Result = first1(useState2(str2), 2);
  first1 = tmp9Result[0];
  const tmp14 = tmp9Result[1];
  const tmp9Result2 = first1(react.useState(null), 2);
  [obj6, react] = tmp9Result2;
  let hasUniqueUsernameResult1;
  const useUsernameStatus = tmp2(tmp3[18]).useUsernameStatus;
  navigation(tmp3[18]);
  if (stateFromStores != null) {
    hasUniqueUsernameResult1 = stateFromStores.hasUniqueUsername();
  }
  let username;
  const tmp18 = !hasUniqueUsernameResult1;
  if (stateFromStores != null) {
    username = stateFromStores.username;
  }
  const usernameStatus = useUsernameStatus(value, !tmp18, false, username);
  const ref = react.useRef(null);
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  let tmp23 = value !== username1;
  if (!tmp23) {
    let discriminator;
    if (stateFromStores != null) {
      discriminator = stateFromStores.discriminator;
    }
    tmp23 = first1 !== discriminator;
  }
  if (tmp23) {
    let tmp25 = !canEditDiscriminatorResult;
    if (canEditDiscriminatorResult) {
      const obj7 = /^\d+$/;
      isMatch = obj7.test(first1);
      if (isMatch) {
        const _parseInt = parseInt;
        isMatch = parseInt(first1) > 0;
      }
      tmp25 = isMatch;
    }
    tmp23 = tmp25;
  }
  isMatch = tmp23;
  const items1 = [tmp23, canEditDiscriminatorResult, first1, navigation, stateFromStores, value];
  onSubmitEditing = react.useCallback(() => {
    let closure_0;
    if (isMatch) {
      const obj = stateFromStores(first[19]);
      obj.setSection(constants.ACCOUNT_CONFIRM_PASSWORD);
      const obj2 = {
        onSubmit: function() {
            return closure_0(...arguments);
          },
        onSuccess() {
            const dispatch = closure_0.dispatch;
            const CommonActions = navigation(first[22]).CommonActions;
            dispatch(CommonActions.navigate(constants.ACCOUNT));
          }
      };
      const push = navigation.push;
      const ACCOUNT_CONFIRM_PASSWORD = constants.ACCOUNT_CONFIRM_PASSWORD;
      navigation = closure_4((value) => {
        let c3 = 0;
        let c4 = 0;
        return (function*(arg0) {
          let obj4;
          let tmp31;
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              let v6OrEarlierAPIError;
              c4 = 2;
              if (0 === username) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  return { value, done: true };
                } else {
                  closure_2 = tmp4;
                  closure_1 = tmp;
                  value = undefined;
                  v6OrEarlierAPIError = undefined;
                  if (null == closure_1) {
                    c4 = 3;
                    return { value: null, done: true };
                  } else {
                    closure_1_6(null);
                    const user = { username, password: tmp40, discriminator: tmp31 };
                    tmp31 = undefined;
                    if (closure_2) {
                      tmp31 = closure_1_5;
                    }
                    username = 1;
                    c4 = 1;
                    const obj5 = { value: obj4.saveAccountChanges(user, { close: false }), done: false };
                    obj4 = closure_2_2(closure_2_3[20]);
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                return { value, done: true };
              } else {
                if (!value.ok) {
                  const self = this;
                  const self2 = this;
                  v6OrEarlierAPIError = new value(closure_2_3[21]).V6OrEarlierAPIError(value);
                  const dispatch = value.dispatch;
                  const CommonActions = value(closure_2_3[22]).CommonActions;
                  dispatch(CommonActions.navigate(constants.ACCOUNT_CHANGE_USERNAME));
                  closure_1_6(v6OrEarlierAPIError);
                  c4 = 3;
                  return { value: null, done: true };
                }
                c4 = 3;
                return { value, done: true };
              }
            } catch (tmp34) {
              c4 = 3;
              throw tmp34;
            }
          }
        })();
      });
      push(ACCOUNT_CONFIRM_PASSWORD, obj2);
    }
  }, items1);
  const items2 = [canEditDiscriminatorResult, onSubmitEditing];
  const items3 = [tmp23, onSubmitEditing, navigation];
  const callback1 = react.useCallback(() => {
    if (importAll) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    } else {
      callback();
    }
  }, items2);
  const layoutEffect = react.useLayoutEffect(() => {
    let onPress;
    let obj = {
      headerRight(arg0) {
        let intl;
        let tmp = null;
        if (isMatch) {
          const obj = { onPress, label: intl.string(navigation(first[12]).t["R3BPH+"]) };
          const HeaderTextButton = navigation(first[23]).HeaderTextButton;
          const merged = Object.assign(arg0);
          intl = navigation(first[12]).intl;
          tmp = closure_2_11(HeaderTextButton, obj);
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    let obj9;
    let fieldMessage;
    if (obj6 != null) {
      fieldMessage = obj6.getFieldMessage("username");
    }
    if (fieldMessage == null) {
      let fieldMessage1;
      if (obj6 != null) {
        fieldMessage1 = obj6.getFieldMessage("discriminator");
      }
      fieldMessage = fieldMessage1;
    }
    let tmp33 = usernameStatus;
    if (null != fieldMessage) {
      const obj3 = { type: tmp2(tmp3[10]).NameValidationState.ERROR, message: fieldMessage };
      tmp33 = obj3;
    }
    const TextInput = tmp2(tmp3[24]).TextInput;
    if (canEditDiscriminatorResult) {
      obj9 = { ref, containerStyle: tmp.discriminator, keyboardType: "numeric", value: first1, onChange: tmp14, onSubmitEditing, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", clearable: true, leadingText: "#", maxLength: 4 };
      const obj8 = { ref, containerStyle: tmp.discriminator, keyboardType: "numeric", value: first1, onChange: tmp14, onSubmitEditing, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", clearable: true, leadingText: "#", maxLength: 4 };
    } else {
      obj9 = { ref, containerStyle: tmp.discriminator, value: `#${tmp13}`, clearable: false, disabled: true };
    }
    const obj10 = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: items4 };
    items4 = [, ];
    const tmp34Result = closure_11(TextInput, obj9);
    items4[0] = closure_11(stateFromStores(tmp3[25]), {});
    const obj11 = { style: tmp.container, children: items5 };
    const obj12 = { children: intl.string(navigation(tmp3[12]).t.IEpCBQ) };
    const tmp5Result = stateFromStores(tmp3[26]);
    intl = tmp2(tmp3[12]).intl;
    items5 = [closure_11(tmp5Result, obj12), , ];
    const obj13 = { style: tmp.inputs, children: items6 };
    const obj14 = {
      containerStyle: tmp.username,
      textContentType: "username",
      value,
      enableAndroidSanitizedInputWorkaround: stateFromStores.hasUniqueUsername(),
      onChange(str) {
          let hasUniqueUsernameResult;
          if (stateFromStores != null) {
            hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
          }
          let formatted = str;
          if (hasUniqueUsernameResult) {
            formatted = str.toLowerCase();
          }
          closure_4(formatted);
          react(null);
        },
      onSubmitEditing: callback1,
      placeholder: intl2.string(navigation(tmp3[12]).t.IEpCBQ),
      returnKeyType: str6,
      autoCapitalize: "none",
      autoFocus: true
    };
    const TextInput2 = tmp2(tmp3[24]).TextInput;
    intl2 = tmp2(tmp3[12]).intl;
    str6 = "done";
    const tmp37 = isMatch;
    if (canEditDiscriminatorResult) {
      str6 = "next";
    }
    items6 = [closure_11(TextInput2, obj14), , ];
    let tmp34Result2 = !stateFromStores.hasUniqueUsername();
    stateFromStores.hasUniqueUsername();
    if (tmp34Result2) {
      const obj15 = { style: tmp.divider, children: closure_11(ref, obj16) };
      obj16 = { style: tmp.dividerInner };
      tmp34Result2 = closure_11(tmp38, obj15);
    }
    items6[1] = tmp34Result2;
    items6[2] = !stateFromStores.hasUniqueUsername() && tmp34Result;
    stateFromStores.hasUniqueUsername();
    items5[1] = closure_12(ref, obj13);
    const obj17 = { usernameStatus: tmp33, showHint: stateFromStores.hasUniqueUsername() };
    items5[2] = closure_11(UsernameStatusMessage, obj17);
    items4[1] = closure_12(ref, obj11);
    return closure_12(tmp37, obj10);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default tmp5;