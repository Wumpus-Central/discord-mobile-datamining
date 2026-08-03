import ME from "ME";
import _slicedToArray from "_slicedToArray";
import sendRequest from "sendRequest";
import get_ActivityIndicator from "dispatcher";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserSettingsSections } from "ME";
import jsxProd from "GenericHeaderTitle";
import createCacheKey from "createCacheKey";

let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function UsernameStatusMessage(showHint) {
  showHint = showHint.showHint;
  const match = showHint(4455).match(showHint.usernameStatus);
  let obj = { type: showHint(13876).NameValidationState.ERROR, message: null };
  const P = showHint(4455).P;
  obj[1] = P.select();
  const str = showHint(4455);
  obj = { type: showHint(13876).NameValidationState.AVAILABLE, message: null };
  const P2 = showHint(4455).P;
  obj[1] = P2.select();
  const withResult = match.with(obj, (children) => callback(showHint(4251).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }));
  return match.with(obj, (children) => callback(showHint(4251).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })).with(obj, (children) => callback(showHint(4251).Text, { variant: "text-xs/medium", color: "text-feedback-positive", children })).otherwise(() => {
    let tmp = null;
    if (showHint) {
      const obj = { variant: "text-xs/medium", color: "text-default", children: null };
      const intl = showHint(outer1_3[12]).intl;
      obj[2] = intl.string(showHint(outer1_3[12]).t.z7c4bP);
      tmp = outer1_11(showHint(outer1_3[11]).Text, obj);
    }
    return tmp;
  });
}
({ View: error, ScrollView: metroImportAll } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { background: null, container: null, inputs: null, username: null, discriminator: null, divider: null, dividerInner: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
createCacheKey[2] = { flex: 1, flexDirection: "row", marginTop: 8 };
createCacheKey[3] = { flex: 2 };
createCacheKey[4] = { flex: 1 };
createCacheKey[5] = { width: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
let obj1 = { width: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
createCacheKey[6] = { flex: 1, marginVertical: 12, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_SELECTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flex: 1, marginVertical: 12, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_SELECTED };
const result = require("noop").fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default function UserSettingsChangeUsername() {
  let sendRequest;
  let obj6;
  let tmp = createCacheKey();
  let obj = navigation(first[13]);
  navigation = obj.useNavigation();
  let obj1 = navigation(first[14]);
  const items = [callback];
  const stateFromStores = obj1.useStateFromStores(items, () => callback.getCurrentUser());
  let obj3 = stateFromStores(first[15]);
  let canEditDiscriminatorResult = obj3.canEditDiscriminator(stateFromStores);
  if (canEditDiscriminatorResult) {
    let hasUniqueUsernameResult;
    if (stateFromStores != null) {
      hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
    }
    canEditDiscriminatorResult = !hasUniqueUsernameResult;
  }
  const importAll = canEditDiscriminatorResult;
  let obj4 = React;
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.username;
  }
  if (str == null) {
    str = "";
  }
  const tmp10 = first1(React.useState(str), 2);
  first = tmp10[0];
  let ME = tmp10[1];
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
  [obj6, sendRequest] = tmp9Result;
  let hasUniqueUsernameResult1;
  if (stateFromStores != null) {
    hasUniqueUsernameResult1 = stateFromStores.hasUniqueUsername();
  }
  let username;
  if (stateFromStores != null) {
    username = stateFromStores.username;
  }
  const usernameStatus = navigation(first[16]).useUsernameStatus(first, !!hasUniqueUsernameResult1, false, username);
  const ref = obj4.useRef(null);
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  let tmp21 = first !== username1;
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
  let closure_8 = tmp21;
  const items1 = [tmp21, canEditDiscriminatorResult, first1, navigation, stateFromStores, first];
  callback = obj4.useCallback(() => {
    if (closure_8) {
      let obj = stateFromStores(first[17]);
      obj.setSection(outer1_10.ACCOUNT_CONFIRM_PASSWORD);
      obj = { onSubmit: null, onSuccess: null };
      const navigation = callback((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
        return (function*(arg0) {
          if (c4 === 2) {
            c4 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp4 === 3) {
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
              c4 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let closure_2 = tmp5;
                  let v6OrEarlierAPIError = tmp2;
                  let lib;
                  v6OrEarlierAPIError = undefined;
                  if (null == outer1_1) {
                    c4 = 3;
                    return { value: null, done: true };
                  } else {
                    outer1_6(null);
                    const obj1 = { username: null, password: null, discriminator: null };
                    obj1[0] = c3;
                    obj1[1] = tmp45;
                    let tmp34;
                    if (outer1_2) {
                      tmp34 = outer1_5;
                    }
                    obj1[2] = tmp34;
                    let obj4 = outer2_2(outer2_3[18]);
                    c3 = 1;
                    c4 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj4.saveAccountChanges(obj1, { close: false });
                    return obj2;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                lib = arg1;
                if (!lib.ok) {
                  v6OrEarlierAPIError = new lib(outer2_3[19]).V6OrEarlierAPIError(lib);
                  const CommonActions = lib(outer2_3[20]).CommonActions;
                  obj = { name: null };
                  obj[0] = outer2_10.ACCOUNT_CHANGE_USERNAME;
                  lib.dispatch(CommonActions.navigate(obj));
                  outer1_6(v6OrEarlierAPIError);
                  c4 = 3;
                  return { value: null, done: true };
                }
                c4 = 3;
                obj4 = { value: null, done: true };
                obj4[0] = lib;
                return obj4;
              }
            } catch (tmp37) {
              c4 = tmp;
              throw tmp37;
            }
          }
        })();
      });
      obj[0] = function() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[1] = function onSuccess() {
        const CommonActions = lib(outer1_3[20]).CommonActions;
        lib.dispatch(CommonActions.navigate({ name: outer1_10.ACCOUNT }));
      };
      navigation.push(outer1_10.ACCOUNT_CONFIRM_PASSWORD, obj);
    }
  }, items1);
  const items2 = [canEditDiscriminatorResult, callback];
  const items3 = [tmp21, callback, navigation];
  const callback1 = obj4.useCallback(() => {
    if (closure_2) {
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
        if (closure_8) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.onPress = mergeGuildAvatar;
          const intl = outer1_0(outer1_3[12]).intl;
          obj.label = intl.string(outer1_0(outer1_3[12]).t["R3BPH+"]);
          tmp = outer1_11(outer1_0(outer1_3[21]).HeaderTextButton, obj);
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
      obj = { type: null, message: null };
      obj[0] = tmp2(tmp3[10]).NameValidationState.ERROR;
      obj[1] = fieldMessage;
      tmp31 = obj;
    }
    if (canEditDiscriminatorResult) {
      obj = { ref: null, containerStyle: null, keyboardType: "numeric", value: null, onChange: null, onSubmitEditing: null, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", isClearable: true, leadingText: "#", maxLength: 4 };
      obj[0] = ref;
      obj[1] = tmp.discriminator;
      obj[3] = first1;
      obj[4] = tmp9Result[1];
      obj[5] = callback;
      obj1 = obj;
    } else {
      obj1 = { ref: null, containerStyle: null, value: null, isClearable: false, isDisabled: true };
      obj1[0] = ref;
      obj1[1] = tmp.discriminator;
      obj1[2] = `#${tmp13}`;
    }
    let obj2 = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    obj2[0] = tmp.background;
    let tmp32Result = tmp32(tmp2(tmp3[22]).TextInput, obj1);
    const items4 = [closure_11(tmp5(tmp3[23]), {}), ];
    obj3 = { style: null, children: null };
    obj3[0] = tmp.container;
    obj4 = { children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj4[0] = intl.string(tmp2(tmp3[12]).t.IEpCBQ);
    const items5 = [closure_11(tmp5(tmp3[24]), obj4), , ];
    obj5 = { style: null, children: null };
    obj5[0] = tmp.inputs;
    obj6 = { containerStyle: null, textContentType: "username", value: null, enableAndroidSanitizedInputWorkaround: null, onChange: null, onSubmitEditing: null, placeholder: null, returnKeyType: null, autoCapitalize: "none", autoFocus: true };
    obj6[0] = tmp.username;
    obj6[2] = first;
    obj6[3] = stateFromStores.hasUniqueUsername();
    obj6[4] = function onChange(str) {
      let hasUniqueUsernameResult;
      if (stateFromStores != null) {
        hasUniqueUsernameResult = stateFromStores.hasUniqueUsername();
      }
      let formatted = str;
      if (hasUniqueUsernameResult) {
        formatted = str.toLowerCase();
      }
      callback(formatted);
      callback2(null);
    };
    obj6[5] = callback1;
    const intl2 = tmp2(tmp3[12]).intl;
    obj6[6] = intl2.string(tmp2(tmp3[12]).t.IEpCBQ);
    let str6 = "done";
    if (canEditDiscriminatorResult) {
      str6 = "next";
    }
    obj6[7] = str6;
    const items6 = [closure_11(tmp2(tmp3[22]).TextInput, obj6), , ];
    const hasUniqueUsernameResult2 = stateFromStores.hasUniqueUsername();
    tmp32Result = !hasUniqueUsernameResult2;
    if (!hasUniqueUsernameResult2) {
      obj7 = { style: null, children: null };
      obj7[0] = tmp.divider;
      const obj8 = { style: null };
      obj8[0] = tmp.dividerInner;
      obj7[1] = tmp32(tmp36, obj8);
      tmp32Result = tmp32(tmp36, obj7);
    }
    items6[1] = tmp32Result;
    const hasUniqueUsernameResult3 = stateFromStores.hasUniqueUsername();
    let tmp41 = !hasUniqueUsernameResult3;
    if (!hasUniqueUsernameResult3) {
      tmp41 = tmp32Result;
    }
    items6[2] = tmp41;
    obj5[1] = items6;
    items5[1] = closure_12(ref, obj5);
    const obj9 = { usernameStatus: null, showHint: null };
    obj9[0] = tmp31;
    obj9[1] = stateFromStores.hasUniqueUsername();
    items5[2] = closure_11(UsernameStatusMessage, obj9);
    obj3[1] = items5;
    items4[1] = closure_12(ref, obj3);
    obj2[3] = items4;
    return closure_12(closure_8, obj2);
  }
  const tmp16 = !hasUniqueUsernameResult1;
  const tmp2Result = navigation(first[16]);
};