// === Module 14705: UserSettingsChangeUsername ===

// Module 14705 (UserSettingsChangeUsername)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function UsernameStatusMessage(showHint) {
  showHint = showHint.showHint;
  const match = showHint(4745).match(showHint.usernameStatus);
  let obj = { type: showHint(14706).NameValidationState.ERROR, message: null };
  const P = showHint(4745).P;
  obj.message = P.select();
  const str = showHint(4745);
  obj = { type: showHint(14706).NameValidationState.AVAILABLE, message: null };
  const P2 = showHint(4745).P;
  obj.message = P2.select();
  const withResult = match.with(obj, (children) => closure_1_11(showHint(4556).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }));
  return match.with(obj, (children) => closure_1_11(showHint(4556).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })).with(obj, (children) => closure_1_11(showHint(4556).Text, { variant: "text-xs/medium", color: "text-feedback-positive", children })).otherwise(() => {
    let tmp = null;
    if (showHint) {
      const obj = { variant: "text-xs/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj.children = intl.string(util.t.z7c4bP);
      tmp = closure_2_11(Text_Text.Text, obj);
    }
    return tmp;
  });
}
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { background: null, container: null, inputs: null, username: null, discriminator: null, divider: null, dividerInner: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.background = createStyles;
createStyles.container = { padding: 16 };
createStyles.inputs = { flex: 1, flexDirection: "row", marginTop: 8 };
createStyles.username = { flex: 2 };
createStyles.discriminator = { flex: 1 };
createStyles.divider = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let obj1 = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
createStyles.dividerInner = { flex: 1, marginVertical: 12, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default function UserSettingsChangeUsername() {
  let tmp = closure_13();
  let obj = navigation(value[13]);
  navigation = obj.useNavigation();
  let obj1 = navigation(value[14]);
  const items = [onSubmitEditing];
  const stateFromStores = obj1.useStateFromStores(items, () => callback.getCurrentUser());
  let obj3 = stateFromStores(value[15]);
  let canEditDiscriminatorResult = obj3.canEditDiscriminator(stateFromStores);
  if (canEditDiscriminatorResult) {
    let hasUniqueUsernameResult;
    if (stateFromStores != null) {
      hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
    }
    canEditDiscriminatorResult = !hasUniqueUsernameResult;
  }
  importAll = canEditDiscriminatorResult;
  let obj4 = noop;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  const tmp10 = first1(noop.useState(str), 2);
  value = tmp10[0];
  closure_4 = tmp10[1];
  let str2;
  if (stateFromStores != null) {
    str2 = stateFromStores.discriminator;
  }
  if (str2 == null) {
    str2 = "";
  }
  let tmp9Result = tmp9(obj4.useState(str2), 2);
  first1 = tmp9Result[0];
  tmp9Result = tmp9(obj4.useState(null), 2);
  [obj6, noop] = tmp9Result;
  let hasUniqueUsernameResult1;
  if (stateFromStores != null) {
    hasUniqueUsernameResult1 = stateFromStores.hasUniqueUsername();
  }
  let username;
  if (stateFromStores != null) {
    username = stateFromStores.username;
  }
  const usernameStatus = navigation(value[16]).useUsernameStatus(value, !!hasUniqueUsernameResult1, false, username);
  const ref = obj4.useRef(null);
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  let tmp21 = value !== username1;
  if (!tmp21) {
    let discriminator;
    if (stateFromStores != null) {
      discriminator = stateFromStores.discriminator;
    }
    tmp21 = first1 !== discriminator;
  }
  if (tmp21) {
    let tmp23 = !canEditDiscriminatorResult;
    if (canEditDiscriminatorResult) {
      let obj7 = /^\d+$/;
      let isMatch = obj7.test(first1);
      if (isMatch) {
        const _parseInt = parseInt;
        isMatch = parseInt(first1) > 0;
      }
      tmp23 = isMatch;
    }
    tmp21 = tmp23;
  }
  isMatch = tmp21;
  const items1 = [tmp21, canEditDiscriminatorResult, first1, navigation, stateFromStores, value];
  onSubmitEditing = obj4.useCallback(() => {
    if (isMatch) {
      let obj = stateFromStores(first[17]);
      obj.setSection(constants.ACCOUNT_CONFIRM_PASSWORD);
      obj = { onSubmit: null, onSuccess: null };
      navigation = closure_4(function*(arg0) {
        closure_2 = tmp5;
        closure_1 = tmp2;
        if (null == closure_1) {
          return null;
        }
        closure_1_6(null);
        const user = { username, password: tmp44, discriminator: null };
        if (closure_2) {
          const tmp34 = first1;
        }
        user.discriminator = tmp34;
        closure_129_0 = yield closure_2_2(6984).saveAccountChanges(user, { close: false });
        if (!closure_129_0.ok) {
          const v6OrEarlierAPIError = new closure_0(1272).V6OrEarlierAPIError(closure_129_0);
          closure_129_1 = v6OrEarlierAPIError;
          const CommonActions = closure_0(1484).CommonActions;
          closure_0.dispatch(CommonActions.navigate(constants.ACCOUNT_CHANGE_USERNAME));
          closure_1_6(closure_129_1);
          c4 = 3;
          return { value: null, done: true };
        }
        return closure_129_0;
      });
      obj.onSubmit = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.onSuccess = function onSuccess() {
        const CommonActions = navigation(first[20]).CommonActions;
        closure_0.dispatch(CommonActions.navigate(constants.ACCOUNT));
      };
      navigation.push(constants.ACCOUNT_CONFIRM_PASSWORD, obj);
    }
  }, items1);
  const items2 = [canEditDiscriminatorResult, onSubmitEditing];
  const items3 = [tmp21, onSubmitEditing, navigation];
  const callback1 = obj4.useCallback(() => {
    if (canEditDiscriminatorResult) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    } else {
      callback();
    }
  }, items2);
  const layoutEffect = obj4.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let tmp = null;
        if (isMatch) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = onPress;
          const intl = navigation(first[12]).intl;
          obj.label = intl.string(navigation(first[12]).t["R3BPH+"]);
          tmp = closure_2_11(navigation(first[21]).HeaderTextButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    let fieldMessage;
    if (obj5 != null) {
      fieldMessage = obj5.getFieldMessage("username");
    }
    if (fieldMessage == null) {
      let fieldMessage1;
      if (obj5 != null) {
        fieldMessage1 = obj5.getFieldMessage("discriminator");
      }
      fieldMessage = fieldMessage1;
    }
    let tmp31 = usernameStatus;
    if (null != fieldMessage) {
      obj = { type: tmp2(tmp3[10]).NameValidationState.ERROR, message: fieldMessage };
      tmp31 = obj;
    }
    if (canEditDiscriminatorResult) {
      obj = { ref, containerStyle: tmp.discriminator, keyboardType: "numeric", value: first1, onChange: tmp9Result[1], onSubmitEditing, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", isClearable: true, leadingText: "#", maxLength: 4 };
      obj1 = obj;
    } else {
      obj1 = { ref, containerStyle: tmp.discriminator, value: `#${tmp13}`, isClearable: false, isDisabled: true };
    }
    const obj2 = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    let tmp32Result = tmp32(tmp2(tmp3[22]).TextInput, obj1);
    const items4 = [closure_11(tmp5(tmp3[23]), {}), ];
    obj3 = { style: tmp.container, children: null };
    obj4 = { children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj4.children = intl.string(tmp2(tmp3[12]).t.IEpCBQ);
    const items5 = [closure_11(tmp5(tmp3[24]), obj4), , ];
    obj5 = { style: tmp.inputs, children: null };
    obj6 = {
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
          noop(null);
        },
      onSubmitEditing: callback1,
      placeholder: null,
      returnKeyType: null,
      autoCapitalize: "none",
      autoFocus: true
    };
    const intl2 = tmp2(tmp3[12]).intl;
    obj6.placeholder = intl2.string(tmp2(tmp3[12]).t.IEpCBQ);
    let str6 = "done";
    if (canEditDiscriminatorResult) {
      str6 = "next";
    }
    obj6.returnKeyType = str6;
    const items6 = [closure_11(tmp2(tmp3[22]).TextInput, obj6), , ];
    const hasUniqueUsernameResult2 = stateFromStores.hasUniqueUsername();
    tmp32Result = !hasUniqueUsernameResult2;
    if (!hasUniqueUsernameResult2) {
      obj7 = { style: tmp.divider, children: null };
      const obj8 = { style: tmp.dividerInner };
      obj7.children = tmp32(tmp36, obj8);
      tmp32Result = tmp32(tmp36, obj7);
    }
    items6[1] = tmp32Result;
    const hasUniqueUsernameResult3 = stateFromStores.hasUniqueUsername();
    let tmp41 = !hasUniqueUsernameResult3;
    if (!hasUniqueUsernameResult3) {
      tmp41 = tmp32Result;
    }
    items6[2] = tmp41;
    obj5.children = items6;
    items5[1] = closure_12(ref, obj5);
    const obj9 = { usernameStatus: tmp31, showHint: stateFromStores.hasUniqueUsername() };
    items5[2] = closure_11(UsernameStatusMessage, obj9);
    obj3.children = items5;
    items4[1] = closure_12(ref, obj3);
    obj2.children = items4;
    return closure_12(isMatch, obj2);
  }
  const tmp16 = !hasUniqueUsernameResult1;
  const tmp2Result = navigation(value[16]);
};