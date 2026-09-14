// discord_app/modules/user_settings/account/native/UserSettingsChangeUsername.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function UsernameStatusMessage(showHint) {
  showHint = showHint.showHint;
  const match = showHint(4821).match(showHint.usernameStatus);
  let obj = { type: showHint(14793).NameValidationState.ERROR, message: null };
  const P = showHint(4821).P;
  obj.message = P.select();
  const str = showHint(4821);
  const obj2 = { type: showHint(14793).NameValidationState.AVAILABLE, message: null };
  const P2 = showHint(4821).P;
  obj2.message = P2.select();
  const withResult = match.with(obj, (children) =>
    closure_1_11(showHint(4632).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }),
  );
  return match
    .with(obj, (children) =>
      closure_1_11(showHint(4632).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }),
    )
    .with(obj2, (children) =>
      closure_1_11(showHint(4632).Text, { variant: "text-xs/medium", color: "text-feedback-positive", children }),
    )
    .otherwise(() => {
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
const createStyles = fn(4636);
let obj2 = {
  background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  container: { padding: 16 },
  inputs: { flex: 1, flexDirection: "row", marginTop: 8 },
  username: { flex: 2 },
  discriminator: { flex: 1 },
  divider: null,
  dividerInner: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.divider = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let obj4 = { width: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
obj2.dividerInner = {
  flex: 1,
  marginVertical: 12,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED,
};
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default function UserSettingsChangeUsername() {
  let tmp = closure_13();
  navigation = navigation(value[13]).useNavigation();
  let obj = navigation(value[13]);
  const items = [onSubmitEditing];
  const stateFromStores = navigation(value[14]).useStateFromStores(items, () => callback.getCurrentUser());
  let obj2 = navigation(value[14]);
  let canEditDiscriminatorResult = stateFromStores(value[15]).canEditDiscriminator(stateFromStores);
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
  const obj4 = stateFromStores(value[15]);
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
  const usernameStatus = navigation(value[16]).useUsernameStatus(value, !!hasUniqueUsernameResult1, false, username);
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
      stateFromStores(first[17]).setSection(constants.ACCOUNT_CONFIRM_PASSWORD);
      const obj2 = { onSubmit: null, onSuccess: null };
      navigation = closure_4(function* (arg0) {
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
        yield closure_2_2(7087).saveAccountChanges(user, { close: false });
        closure_129_0 = value;
        if (!closure_129_0.ok) {
          const v6OrEarlierAPIError = new closure_0(1270).V6OrEarlierAPIError(closure_129_0);
          closure_129_1 = v6OrEarlierAPIError;
          const CommonActions = closure_0(1484).CommonActions;
          closure_0.dispatch(CommonActions.navigate(constants.ACCOUNT_CHANGE_USERNAME));
          closure_1_6(closure_129_1);
          c4 = 3;
          return { value: null, done: true };
        }
        return closure_129_0;
      });
      obj2.onSubmit = function () {
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
        const CommonActions = navigation(first[20]).CommonActions;
        closure_0.dispatch(CommonActions.navigate(constants.ACCOUNT));
      };
      navigation.push(constants.ACCOUNT_CONFIRM_PASSWORD, obj2);
      const obj = stateFromStores(first[17]);
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
          tmp = closure_2_11(navigation(first[21]).HeaderTextButton, obj);
        }
        return tmp;
      },
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
      const obj7 = {
        ref,
        containerStyle: tmp.discriminator,
        keyboardType: "numeric",
        value: first1,
        onChange: tmp9Result[1],
        onSubmitEditing,
        placeholder: "1337",
        returnKeyType: "done",
        autoCapitalize: "none",
        isClearable: true,
        leadingText: "#",
        maxLength: 4,
      };
      let obj9 = obj7;
    } else {
      obj9 = { ref, containerStyle: tmp.discriminator, value: `#${tmp13}`, isClearable: false, isDisabled: true };
    }
    const obj10 = {
      style: tmp.background,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      children: null,
    };
    const items4 = [closure_11(tmp5(tmp3[23]), {})];
    const obj11 = { style: tmp.container, children: null };
    const obj12 = { children: null };
    const tmp32Result = closure_11(tmp2(tmp3[22]).TextInput, obj9);
    const tmp35 = isMatch;
    let intl = tmp2(tmp3[12]).intl;
    obj12.children = intl.string(tmp2(tmp3[12]).t.IEpCBQ);
    const items5 = [closure_11(tmp5(tmp3[24]), obj12), ,];
    const obj13 = { style: tmp.inputs, children: null };
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
        noop(null);
      },
      onSubmitEditing: callback1,
      placeholder: null,
      returnKeyType: null,
      autoCapitalize: "none",
      autoFocus: true,
    };
    const intl2 = tmp2(tmp3[12]).intl;
    obj14.placeholder = intl2.string(tmp2(tmp3[12]).t.IEpCBQ);
    let str6 = "done";
    if (canEditDiscriminatorResult) {
      str6 = "next";
    }
    obj14.returnKeyType = str6;
    const items6 = [closure_11(tmp2(tmp3[22]).TextInput, obj14), ,];
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
  const tmp2Result = navigation(value[16]);
}
