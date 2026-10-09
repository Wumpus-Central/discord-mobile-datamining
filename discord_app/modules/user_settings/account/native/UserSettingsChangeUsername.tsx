// === Module 14900: UserSettingsChangeUsername ===

// Module 14900 (UserSettingsChangeUsername)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
function UsernameStatusMessage(showHint) {
  showHint = showHint.showHint;
  const match = showHint(5742).match(showHint.usernameStatus);
  let obj = { type: showHint(14901).NameValidationState.ERROR, message: null };
  const P = showHint(5742).P;
  obj.message = P.select();
  const str = showHint(5742);
  const obj2 = { type: showHint(14901).NameValidationState.AVAILABLE, message: null };
  const P2 = showHint(5742).P;
  obj2.message = P2.select();
  const withResult = match.with(obj, (children) => closure_1_11(showHint(5087).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }));
  return match.with(obj, (children) => closure_1_11(showHint(5087).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })).with(obj2, (children) => closure_1_11(showHint(5087).Text, { variant: "text-xs/medium", color: "text-feedback-positive", children })).otherwise(() => {
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
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: { padding: 16 }, inputs: { flex: 1, flexDirection: "row", marginTop: 8 }, username: { flex: 2 }, discriminator: { flex: 1 }, divider: null, dividerInner: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.divider = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let obj4 = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
obj2.dividerInner = { flex: 1, marginVertical: 12, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { flex: 1, marginVertical: 12, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsChangeUsername() {
  const cResult = navigation(first[14]).c(74);
  closure_13();
  let obj = navigation(first[14]);
  navigation = navigation(first[15]).useNavigation();
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
  let obj2 = navigation(first[15]);
  const stateFromStores = navigation(first[16]).useStateFromStores(tmp6, S);
  if (cResult[2] !== stateFromStores) {
    const canEditDiscriminatorResult = stateFromStores(tmp2[17]).canEditDiscriminator(stateFromStores);
    class S {
      constructor() {
        return closure_9.getCurrentUser();
      }
    }
    cResult[2] = stateFromStores;
    cResult[3] = canEditDiscriminatorResult;
    let tmp9 = canEditDiscriminatorResult;
    const obj5 = stateFromStores(tmp2[17]);
  } else {
    tmp9 = cResult[3];
  }
  closure_2 = tmp9;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  const tmp13 = first1(noop.useState(str), 2);
  first = tmp13[0];
  closure_4 = tmp13[1];
  let str2;
  if (stateFromStores != null) {
    str2 = stateFromStores.discriminator;
  }
  if (str2 == null) {
    str2 = "";
  }
  const tmpResult = navigation(first[16]);
  first1 = first1(noop.useState(str2), 2)[0];
  const tmp12Result = first1(noop.useState(str2), 2);
  [r10065, noop] = first1(noop.useState(null), 2);
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
    let tmp18 = hasUniqueUsernameResult;
  } else {
    tmp18 = cResult[5];
  }
  const tmp12Result2 = first1(noop.useState(null), 2);
  let username;
  if (stateFromStores != null) {
    username = stateFromStores.username;
  }
  const usernameStatus = navigation(first[18]).useUsernameStatus(first, !!tmp18, false, username);
  noop.useRef(null);
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
  let tmp26 = first !== username1;
  if (!tmp26) {
    let discriminator1;
    if (stateFromStores != null) {
      discriminator1 = stateFromStores.discriminator;
    }
    tmp26 = first1 !== discriminator1;
  }
  if (tmp26) {
    if (tmp9) {
      let isMatch = /^\d+$/.test(first1);
      if (isMatch) {
        const _parseInt = parseInt;
        isMatch = parseInt(first1) > 0;
      }
      class S {
        constructor() {
          return closure_9.getCurrentUser();
        }
      }
      const obj8 = /^\d+$/;
    }
    tmp26 = !tmp9;
    const tmp28 = !tmp9;
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
  cResult[11] = tmp26;
  const tmp20 = !tmp18;
  const tmpResult2 = navigation(first[18]);
}) : (function UserSettingsChangeUsername() {
  let tmp = closure_13();
  navigation = navigation(value[15]).useNavigation();
  let obj = navigation(value[15]);
  const items = [onSubmitEditing];
  const stateFromStores = navigation(value[16]).useStateFromStores(items, () => callback.getCurrentUser());
  let obj2 = navigation(value[16]);
  let canEditDiscriminatorResult = stateFromStores(value[17]).canEditDiscriminator(stateFromStores);
  if (canEditDiscriminatorResult) {
    let hasUniqueUsernameResult;
    if (stateFromStores != null) {
      hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
    }
    canEditDiscriminatorResult = !hasUniqueUsernameResult;
  }
  importAll = canEditDiscriminatorResult;
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
  const tmp9Result = first1(noop.useState(str2), 2);
  first1 = tmp9Result[0];
  const obj4 = stateFromStores(value[17]);
  [obj6, noop] = first1(noop.useState(null), 2);
  const tmp9Result2 = first1(noop.useState(null), 2);
  let hasUniqueUsernameResult1;
  if (stateFromStores != null) {
    hasUniqueUsernameResult1 = stateFromStores.hasUniqueUsername();
  }
  let username;
  if (stateFromStores != null) {
    username = stateFromStores.username;
  }
  const usernameStatus = navigation(value[18]).useUsernameStatus(value, !!hasUniqueUsernameResult1, false, username);
  const ref = noop.useRef(null);
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
      let isMatch = /^\d+$/.test(first1);
      if (isMatch) {
        const _parseInt = parseInt;
        isMatch = parseInt(first1) > 0;
      }
      tmp23 = isMatch;
      const obj8 = /^\d+$/;
    }
    tmp21 = tmp23;
  }
  isMatch = tmp21;
  const items1 = [tmp21, canEditDiscriminatorResult, first1, navigation, stateFromStores, value];
  onSubmitEditing = noop.useCallback(() => {
    if (isMatch) {
      stateFromStores(first[19]).setSection(constants.ACCOUNT_CONFIRM_PASSWORD);
      const obj2 = { onSubmit: null, onSuccess: null };
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
        yield closure_2_2(6669).saveAccountChanges(user, { close: false });
        closure_129_0 = value;
        if (!closure_129_0.ok) {
          const v6OrEarlierAPIError = new closure_0(1295).V6OrEarlierAPIError(closure_129_0);
          closure_129_1 = v6OrEarlierAPIError;
          const CommonActions = closure_0(1504).CommonActions;
          closure_0.dispatch(CommonActions.navigate(constants.ACCOUNT_CHANGE_USERNAME));
          closure_1_6(closure_129_1);
          c4 = 3;
          return { value: null, done: true };
        }
        return closure_129_0;
      });
      obj2.onSubmit = function onSubmit() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj2.onSuccess = function onSuccess() {
        const CommonActions = navigation(first[22]).CommonActions;
        closure_0.dispatch(CommonActions.navigate(constants.ACCOUNT));
      };
      navigation.push(constants.ACCOUNT_CONFIRM_PASSWORD, obj2);
      const obj = stateFromStores(first[19]);
    }
  }, items1);
  const items2 = [canEditDiscriminatorResult, onSubmitEditing];
  const items3 = [tmp21, onSubmitEditing, navigation];
  const callback1 = noop.useCallback(() => {
    if (canEditDiscriminatorResult) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    } else {
      callback();
    }
  }, items2);
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let tmp = null;
        if (isMatch) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = onPress;
          const intl = navigation(first[12]).intl;
          obj.label = intl.string(navigation(first[12]).t["R3BPH+"]);
          tmp = closure_2_11(navigation(first[23]).HeaderTextButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
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
    let tmp31 = usernameStatus;
    if (null != fieldMessage) {
      const obj3 = { type: tmp2(tmp3[10]).NameValidationState.ERROR, message: fieldMessage };
      tmp31 = obj3;
    }
    if (canEditDiscriminatorResult) {
      const obj7 = { ref, containerStyle: tmp.discriminator, keyboardType: "numeric", value: first1, onChange: tmp9Result[1], onSubmitEditing, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", clearable: true, leadingText: "#", maxLength: 4 };
      let obj9 = obj7;
    } else {
      obj9 = { ref, containerStyle: tmp.discriminator, value: `#${tmp13}`, clearable: false, disabled: true };
    }
    const obj10 = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    const items4 = [closure_11(tmp5(tmp3[25]), {}), ];
    const obj11 = { style: tmp.container, children: null };
    const obj12 = { children: null };
    const tmp32Result = closure_11(tmp2(tmp3[24]).TextInput, obj9);
    const tmp35 = isMatch;
    let intl = tmp2(tmp3[12]).intl;
    obj12.children = intl.string(tmp2(tmp3[12]).t.IEpCBQ);
    const items5 = [closure_11(tmp5(tmp3[26]), obj12), , ];
    const obj13 = { style: tmp.inputs, children: null };
    const obj14 = {
      containerStyle: tmp.username,
      textContentType: "username",
      value,
      enableAndroidSanitizedInputWorkaround: stateFromStores.hasUniqueUsername(),
      onChange: function onChangeUsername(str) {
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
    obj14.placeholder = intl2.string(tmp2(tmp3[12]).t.IEpCBQ);
    let str6 = "done";
    if (canEditDiscriminatorResult) {
      str6 = "next";
    }
    obj14.returnKeyType = str6;
    const items6 = [closure_11(tmp2(tmp3[24]).TextInput, obj14), , ];
    const hasUniqueUsernameResult2 = stateFromStores.hasUniqueUsername();
    let tmp32Result2 = !hasUniqueUsernameResult2;
    if (!hasUniqueUsernameResult2) {
      const obj15 = { style: tmp.divider, children: null };
      const obj16 = { style: tmp.dividerInner };
      obj15.children = closure_11(tmp36, obj16);
      tmp32Result2 = closure_11(tmp36, obj15);
    }
    items6[1] = tmp32Result2;
    const hasUniqueUsernameResult3 = stateFromStores.hasUniqueUsername();
    let tmp41 = !hasUniqueUsernameResult3;
    if (!hasUniqueUsernameResult3) {
      tmp41 = tmp32Result;
    }
    items6[2] = tmp41;
    obj13.children = items6;
    items5[1] = closure_12(ref, obj13);
    const obj17 = { usernameStatus: tmp31, showHint: stateFromStores.hasUniqueUsername() };
    items5[2] = closure_11(UsernameStatusMessage, obj17);
    obj11.children = items5;
    items4[1] = closure_12(ref, obj11);
    obj10.children = items4;
    return closure_12(tmp35, obj10);
  }
  const tmp16 = !hasUniqueUsernameResult1;
  const tmp2Result = navigation(value[18]);
});