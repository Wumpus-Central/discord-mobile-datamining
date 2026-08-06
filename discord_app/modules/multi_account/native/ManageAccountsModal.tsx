// discord_app/modules/multi_account/native/ManageAccountsModal.tsx
import DragIcon from "DragIcon";
import initialize from "initialize";
import importAllResult from "validateMultiAccountTokens";
import { View } from "module_4624";
import fetchFingerprint from "fetchFingerprint";
import closure_9 from "initialize";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MultiAccountTokenStatus } from "initialize";
import MAX_ACCOUNTS from "MAX_ACCOUNTS";
import { ManageAccountsScreens } from "ManageAccountsScreens";
import ME from "ME";
import jsxProd from "CircleMinusIcon";
import createNativeStackNavigator from "createNativeStackNavigator";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { NavigationStack } from "../../../design/components/Navigator/native/Navigator.native.tsx";

let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
const require = arg1;
function RemoveMultiAccountUserButton(user) {
  user = user.user;
  let importDefault;
  function _handlePressRemove() {
    const self = this;
    const tmp = outer1_5(function*() {
      if (v02 === 2) {
        v02 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
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
              const id = tmp2;
              const obj1 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
              const intl = outer1_0(outer1_3[18]).intl;
              obj1[0] = intl.string(outer1_0(outer1_3[18]).t.n0Fbg6);
              const intl2 = outer1_0(outer1_3[18]).intl;
              const obj2 = { username: null };
              obj2[0] = v0;
              obj1[1] = intl2.formatToPlainString(outer1_0(outer1_3[18]).t.phEQmS, obj2);
              const intl3 = outer1_0(outer1_3[18]).intl;
              obj1[2] = intl3.string(outer1_0(outer1_3[18]).t.N86XcP);
              obj1[3] = outer1_0(outer1_3[16]).ButtonColors.RED;
              const intl4 = outer1_0(outer1_3[18]).intl;
              obj1[4] = intl4.string(outer1_0(outer1_3[18]).t["ETE/oC"]);
              v0 = 1;
              v02 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = v0(outer1_3[17]).confirm(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            if (arg1) {
              obj = v02(outer1_3[19]);
              obj.removeAccount(id.id);
            }
            v02 = 3;
            return { value: "T", done: null };
          }
        } catch (tmp11) {
          v02 = tmp;
          throw tmp11;
        }
      }
    });
    const _handlePressRemove = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = user(589);
  const items = [closure_9];
  let stateFromStores = obj.useStateFromStores(items, () => obj.hidePersonalInformation);
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = user(589).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    return callback2(tmp(1297).Spacer, { size: 21 });
  } else {
    const username = user.username;
    importDefault = username;
    if (!stateFromStores) {
      stateFromStores = "0" === user.discriminator;
    }
    if (!stateFromStores) {
      const _HermesInternal = HermesInternal;
      importDefault = username + "#" + user.discriminator;
    }
    obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    let intl = tmp(1236).intl;
    obj[1] = intl.string(tmp(1236).t.lSLMaU);
    obj[2] = function handlePressRemove() {
      const self = this;
      const apply = _handlePressRemove.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj = { color: null };
    obj[0] = Themes.colors.ICON_FEEDBACK_CRITICAL;
    obj[3] = callback2(tmp(14460).CircleMinusIcon, obj);
    return callback2(tmp(4827).PressableOpacity, obj);
  }
  let obj2 = user(589);
}
function ManageAccounts(isEditing) {
  isEditing = isEditing.isEditing;
  const navigation = isEditing.navigation;
  let c2;
  let multiAccountUsers;
  let currentUserId;
  let sharedValue;
  let importAllResult;
  let closure_7;
  const tmp = callback4();
  c2 = tmp;
  let obj = isEditing(multiAccountUsers[22]);
  multiAccountUsers = obj.useMultiAccountUsers().multiAccountUsers;
  let obj1 = isEditing(multiAccountUsers[15]);
  const items = [fetchFingerprint];
  currentUserId = obj1.useStateFromStoresObject(items, () => ({ currentUserId: id.getId() })).currentUserId;
  let obj2 = isEditing(multiAccountUsers[23]);
  sharedValue = obj2.useSharedValue(0);
  let obj3 = isEditing(multiAccountUsers[23]);
  let fn = function l() {
    let obj = { width: null };
    obj = { duration: outer1_12 };
    obj[0] = isEditing(multiAccountUsers[24]).withTiming(sharedValue.get(), obj);
    return obj;
  };
  obj = { withTiming: isEditing(multiAccountUsers[24]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: closure_12 };
  fn.__closure = obj;
  fn.__workletHash = 3389178545077;
  fn.__initData = closure_23;
  importAllResult = obj3.useAnimatedStyle(fn);
  closure_7 = navigation(multiAccountUsers[25])(isEditing);
  const effect = importAllResult.useEffect(() => {
    let tmp2 = null != closure_7;
    if (tmp2) {
      tmp2 = tmp !== isEditing;
    }
    if (tmp2) {
      let num = 0;
      if (isEditing) {
        num = 37;
      }
      const result = sharedValue.set(num);
    }
  });
  obj = { style: tmp.container, bottom: true, children: null };
  obj1 = {
    data: multiAccountUsers,
    onRowMoved: function handleUserMove(arg0) {
      let from;
      let to;
      ({ from, to } = arg0);
      _undefined(multiAccountUsers[19]).moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user) {
      let closure_0 = user;
      let obj = { user, onPressUser: null, showActiveAccountLabel: true, leading: null, trailing: null, delayLongPress: null };
      let fn = null;
      if (!closure_0) {
        fn = () => {
          if (!closure_0) {
            if (tmp.id !== outer1_4) {
              if (tmp.tokenStatus === outer2_11.INVALID) {
                outer1_1.push(outer2_17.LOGIN);
                navigation(multiAccountUsers[26]).track(outer2_16.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
                const obj2 = navigation(multiAccountUsers[26]);
              } else {
                callback(multiAccountUsers[19]).switchAccount(tmp.id, undefined, outer2_14.MANAGE_ACCOUNTS_MODAL);
                const obj = callback(multiAccountUsers[19]);
              }
            }
          }
        };
      }
      obj[1] = fn;
      obj = { component: null, transitionEnter: true, transitionLeave: true, style: null, children: null };
      obj[0] = navigation(multiAccountUsers[23]).View;
      obj[3] = closure_6;
      let tmpResult = tmp5;
      if (closure_0) {
        obj = { duration: null, children: null };
        obj[0] = outer1_12;
        const obj1 = { user: null };
        obj1[0] = user;
        let tmp2Result = tmp2(tmp3[31]);
        obj[1] = tmp(outer1_22, obj1);
        tmpResult = tmp(tmp2Result, obj);
      }
      obj[4] = tmpResult;
      obj[3] = outer1_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj);
      let obj2 = { component: closure_7, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: _undefined.trailingIconContainer, children: null };
      tmp2Result = tmp2(tmp3[31]);
      const obj3 = { duration: outer1_12, style: _undefined.trailingIcon, children: null };
      if (closure_0) {
        obj3[2] = tmp(tmp6(tmp3[32]).DragIcon, {});
        tmpResult = tmp(tmp2Result, obj3, "drag");
      } else {
        const obj4 = { user: null };
        obj4[0] = user;
        obj3[2] = tmp(tmp6(tmp3[29]).AccountStatusIcon, obj4);
        tmpResult = tmp(tmp2Result, obj3, "status");
      }
      obj2[5] = tmpResult;
      obj[4] = outer1_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
      let num;
      if (closure_0) {
        num = 100;
      }
      obj[5] = num;
      return outer1_18(navigation(multiAccountUsers[29]), obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
    footer: null
  };
  obj2 = { component: closure_7, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: null };
  let tmp8Result = !isEditing;
  if (!isEditing) {
    obj3 = { duration: null, children: null };
    obj3[0] = closure_12;
    let obj4 = { leading: null, label: null, onPress: null };
    const obj5 = { color: null };
    obj5[0] = tmp6(tmp3[14]).colors.TEXT_LINK;
    obj4[0] = tmp8(tmp2(tmp3[34]).CirclePlusIcon, obj5);
    const obj6 = { style: null, text: null };
    obj6[0] = tmp.addAccountLabel;
    let intl = tmp2(tmp3[18]).intl;
    obj6[1] = intl.string(tmp2(tmp3[18]).t.bPP34Q);
    obj4[1] = tmp8(tmp2(tmp3[33]).FormRow.Label, obj6);
    obj4[2] = function handlePressAddAccount() {
      if (multiAccountUsers.length >= outer1_13) {
        let obj = { title: null, body: null, isDismissable: true };
        const intl = isEditing(multiAccountUsers[18]).intl;
        obj[0] = intl.string(isEditing(multiAccountUsers[18]).t.w7wfXi);
        const intl2 = isEditing(multiAccountUsers[18]).intl;
        obj = { maxNumAccounts: null };
        obj[0] = tmp;
        obj[1] = intl2.formatToPlainString(isEditing(multiAccountUsers[18]).t.WOyelG, obj);
        navigation(multiAccountUsers[17]).show(obj);
        const obj2 = navigation(multiAccountUsers[17]);
      } else {
        navigation.push(outer1_17.LOGIN);
        obj = navigation(multiAccountUsers[26]);
        obj.track(outer1_16.LOGIN_VIEWED, { source: "multi_account_add_account" });
      }
    };
    obj3[1] = tmp8(tmp2(tmp3[33]).FormRow, obj4);
    tmp8Result = tmp8(tmp6(tmp3[31]), obj3);
    const tmp6Result = tmp6(tmp3[31]);
  }
  obj2[4] = tmp8Result;
  obj1[8] = closure_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
  obj[2] = closure_18(navigation(multiAccountUsers[28]), obj1);
  return closure_18(isEditing(multiAccountUsers[27]).SafeAreaPaddingView, obj);
}
({ MANAGE_EDIT_TRANSITION_DURATION: closure_12, MAX_ACCOUNTS: map1, MultiAccountSwitchLocation: closure_14 } = MAX_ACCOUNTS);
({ AnalyticEvents: closure_16, AuthStates: closure_17 } = ME);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let obj = { container: null, sortableListView: null, addAccountLabel: null, trailingIconContainer: null, trailingIcon: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
obj[0] = obj;
createNativeStackNavigator = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[1] = createNativeStackNavigator;
createCacheKey = { color: require("Themes").colors.TEXT_LINK };
obj[2] = createCacheKey;
obj[3] = { width: 24, height: 24 };
obj[4] = { position: "absolute" };
let closure_21 = createCacheKey.createStyles(obj);
let closure_23 = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const memoResult = importAllResult.memo(function ManageAccountsModal(initialRouteName) {
  let c1;
  let c2;
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  let _require;
  c1 = undefined;
  c2 = undefined;
  let obj = _NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  [c1, c2] = callback(importAllResult.useState(false), 2);
  obj = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[36]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      let renderModalCloseImage;
      if (!_undefined) {
        renderModalCloseImage = callback(outer1_3[36]).getRenderModalCloseImage(tmp);
        const obj2 = callback(outer1_3[36]);
      }
      obj[1] = renderModalCloseImage;
      let merged = Object.assign(callback);
      let merged1 = Object.assign(_undefined(outer1_3[37])());
      return obj;
    },
    children: null
  };
  obj = {
    name: ManageAccountsScreens.MANAGE_ACCOUNTS,
    options() {
      const obj = { title: null, headerRight: null };
      const intl = callback(outer1_3[18]).intl;
      obj[0] = intl.string(callback(outer1_3[18]).t.WbFpq4);
      const getRenderHeaderTextButton = callback(outer1_3[36]).getRenderHeaderTextButton;
      const intl2 = callback(outer1_3[18]).intl;
      const string = intl2.string;
      const t = callback(outer1_3[18]).t;
      if (c1) {
        let renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => callback(false));
      } else {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => callback(true));
      }
      obj[1] = renderHeaderTextButton;
      return obj;
    },
    children(navigation) {
      return outer1_18(outer1_24, { isEditing: c1, navigation: navigation.navigation });
    }
  };
  const items = [
    callback2(createNativeStackNavigator.Screen, obj),
    callback2(createNativeStackNavigator.Screen, {
      name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
      options() {
        const obj = { title: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.WbFpq4);
        return obj;
      },
      children() {
        return callback2(_undefined(15026), {
          handleLogin(login, password, undelete) {
            let obj = callback(5748);
            obj = { login, password, undelete };
            obj.login(obj);
          },
          onReset(arg0, arg1, arg2) {
            callback(5748).loginReset(true);
          }
        });
      }
    }),
    callback2(createNativeStackNavigator.Screen, {
      name: ManageAccountsScreens.LOGIN,
      options() {
        return { headerShown: false };
      },
      children() {
        return callback2(_undefined(8393), { isMultiAccount: true });
      }
    }),
    callback2(createNativeStackNavigator.Screen, {
      name: ManageAccountsScreens.MFA,
      options() {
        return { headerShown: false };
      },
      children() {
        return callback2(_undefined(15025), { isMultiAccount: true });
      }
    })
  ];
  obj[2] = items;
  return callback3(createNativeStackNavigator.Navigator, obj);
});
let result = require("noop").fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default memoResult;