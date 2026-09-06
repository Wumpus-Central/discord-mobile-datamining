// === Module 16375: ManageAccountsModal ===

// Module 16375 (ManageAccountsModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import timing from "timing" /* 4561 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10925 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 12417 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function RemoveMultiAccountUserButton(user) {
  user = user.user;
  importDefault = undefined;
  closure_2 = async function _handlePressRemove() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj1 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
            const intl = tmp2(1114).intl;
            obj1.title = intl.string(tmp2(1114).t.n0Fbg6);
            const intl2 = tmp2(1114).intl;
            const obj2 = { username };
            obj1.body = intl2.formatToPlainString(tmp2(1114).t.phEQmS, obj2);
            const intl3 = tmp2(1114).intl;
            obj1.confirmText = intl3.string(tmp2(1114).t.N86XcP);
            obj1.confirmColor = tmp2(1178).ButtonColors.RED;
            const intl4 = tmp2(1114).intl;
            obj1.cancelText = intl4.string(tmp2(1114).t["ETE/oC"]);
            v1 = 1;
            v3 = 1;
            const obj3 = { value: v1(4905).confirm(obj1), done: false };
            return obj3;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (value) {
            obj = v3(12417);
            obj.removeAccount(closure_128_0.id);
          }
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        v3 = tmp;
        throw tmp11;
      }
    }
  };
  let obj = user(504);
  const items = [StreamerModeStore];
  let stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [UserStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    return closure_18(tmp(1178).Spacer, { size: 21 });
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
    let intl = tmp(1114).intl;
    obj.accessibilityLabel = intl.string(tmp(1114).t.lSLMaU);
    obj.onPress = function handlePressRemove() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    obj.children = closure_18(tmp(15312).CircleMinusIcon, obj);
    return closure_18(tmp(5123).PressableOpacity, obj);
  }
  let obj2 = user(504);
}
function ManageAccounts(isEditing) {
  isEditing = isEditing.isEditing;
  const navigation = isEditing.navigation;
  let multiAccountUsers;
  const tmp = closure_21();
  closure_2 = tmp;
  let obj = isEditing(multiAccountUsers[22]);
  multiAccountUsers = obj.useMultiAccountUsers().multiAccountUsers;
  let obj1 = isEditing(multiAccountUsers[15]);
  const items = [AuthenticationStore];
  const currentUserId = obj1.useStateFromStoresObject(items, () => ({ currentUserId: id.getId() })).currentUserId;
  let obj2 = isEditing(multiAccountUsers[23]);
  const sharedValue = obj2.useSharedValue(0);
  let obj3 = isEditing(multiAccountUsers[23]);
  let fn = function l() {
    let obj = { width: null };
    obj = { duration };
    obj.width = timing.withTiming(sharedValue.get(), obj);
    return obj;
  };
  obj = { withTiming: isEditing(multiAccountUsers[24]).withTiming, leadingWidth: sharedValue, MANAGE_EDIT_TRANSITION_DURATION: duration };
  fn.__closure = obj;
  fn.__workletHash = 3389178545077;
  fn.__initData = __initData;
  noop = obj3.useAnimatedStyle(fn);
  component = navigation(multiAccountUsers[25])(isEditing);
  const effect = noop.useEffect(() => {
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
      ({ from, to } = arg0);
      closure_2(multiAccountUsers[19]).moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user, arg1) {
      let obj = { user, onPressUser: null, showActiveAccountLabel: true, leading: null, trailing: null, delayLongPress: null };
      let fn = null;
      if (!user) {
        fn = () => {
          if (!isEditing) {
            if (user.id !== currentUserId) {
              if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
                navigation.push(constants3.LOGIN);
                AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                MultiAccountActionCreatorsAll.switchAccount(user.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
            }
          }
        };
      }
      obj.onPressUser = fn;
      obj = { component: navigation(multiAccountUsers[23]).View, transitionEnter: true, transitionLeave: true, style, children: null };
      let tmpResult = tmp5;
      if (user) {
        obj = { duration, children: null };
        const obj1 = { user };
        let tmp2Result = navigation(multiAccountUsers[31]);
        obj.children = closure_1_18(RemoveMultiAccountUserButton, obj1);
        tmpResult = closure_1_18(tmp2Result, obj);
      }
      obj.children = tmpResult;
      obj.leading = closure_1_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj);
      let obj2 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: closure_2.trailingIconContainer, children: null };
      tmp2Result = navigation(multiAccountUsers[31]);
      const obj3 = { duration, style: closure_2.trailingIcon, children: null };
      if (user) {
        obj3.children = closure_1_18(isEditing(multiAccountUsers[32]).DragIcon, {});
        tmpResult = closure_1_18(tmp2Result, obj3, "drag");
      } else {
        const obj4 = { user };
        obj3.children = closure_1_18(isEditing(multiAccountUsers[29]).AccountStatusIcon, obj4);
        tmpResult = closure_1_18(tmp2Result, obj3, "status");
      }
      obj2.children = tmpResult;
      obj.trailing = closure_1_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
      let num;
      if (user) {
        num = 100;
      }
      obj.delayLongPress = num;
      return closure_1_18(navigation(multiAccountUsers[29]), obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
    footer: null
  };
  obj2 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: null };
  let tmp8Result = !isEditing;
  if (!isEditing) {
    obj3 = { duration, children: null };
    let obj4 = { leading: null, label: null, onPress: null };
    const obj5 = { color: tmp6(tmp3[14]).colors.TEXT_LINK };
    obj4.leading = closure_18(tmp2(tmp3[34]).CirclePlusIcon, obj5);
    const obj6 = { style: tmp.addAccountLabel, text: null };
    let intl = tmp2(tmp3[18]).intl;
    obj6.text = intl.string(tmp2(tmp3[18]).t.bPP34Q);
    obj4.label = closure_18(tmp2(tmp3[33]).FormRow.Label, obj6);
    obj4.onPress = function handlePressAddAccount() {
      if (multiAccountUsers.length >= map1) {
        let obj = { title: null, body: null, isDismissable: true };
        const intl = util.intl;
        obj.title = intl.string(util.t.w7wfXi);
        const intl2 = util.intl;
        obj = { maxNumAccounts: tmp };
        obj.body = intl2.formatToPlainString(util.t.WOyelG, obj);
        actions_AlertActionCreatorsDefault.show(obj);
      } else {
        navigation.push(constants3.LOGIN);
        obj = AnalyticsUtilsDefault;
        obj.track(constants2.LOGIN_VIEWED, { source: "multi_account_add_account" });
      }
    };
    obj3.children = closure_18(tmp2(tmp3[33]).FormRow, obj4);
    tmp8Result = closure_18(tmp6(tmp3[31]), obj3);
    const tmp6Result = tmp6(tmp3[31]);
  }
  obj2.children = tmp8Result;
  obj1.footer = closure_18(isEditing(multiAccountUsers[30]).TransitionGroup, obj2);
  obj.children = closure_18(navigation(multiAccountUsers[28]), obj1);
  return closure_18(isEditing(multiAccountUsers[27]).SafeAreaPaddingView, obj);
}
const View = fn(17).View;
const MultiAccountTokenStatus = fn(12413).MultiAccountTokenStatus;
let Constants = fn(12414);
({ MANAGE_EDIT_TRANSITION_DURATION: closure_12, MAX_ACCOUNTS: map1, MultiAccountSwitchLocation: closure_14 } = Constants);
const ManageAccountsScreens = fn(16376).ManageAccountsScreens;
Constants = fn(1074);
({ AnalyticEvents: closure_16, AuthStates: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let NativeStackNavigator = fn(7913);
let closure_20 = NativeStackNavigator.createNativeStackNavigator();
fn(4560);
let obj = { container: null, sortableListView: null, addAccountLabel: null, trailingIconContainer: null, trailingIcon: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
obj.container = obj;
NativeStackNavigator = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.sortableListView = NativeStackNavigator;
const createStyles = { color: nativeDefault.colors.TEXT_LINK };
obj.addAccountLabel = createStyles;
obj.trailingIconContainer = { width: 24, height: 24 };
obj.trailingIcon = { position: "absolute" };
let closure_21 = createStyles.createStyles(obj);
const __initData = { code: "function ManageAccountsModalTsx1(){const{withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION}=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/native/ManageAccountsModal.tsx");

export default noop.memo(function ManageAccountsModal(initialRouteName) {
  let MANAGE_ACCOUNTS = initialRouteName.initialRouteName;
  if (MANAGE_ACCOUNTS === undefined) {
    MANAGE_ACCOUNTS = ManageAccountsScreens.MANAGE_ACCOUNTS;
  }
  _require = undefined;
  c1 = undefined;
  c2 = undefined;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  [c1, c2] = _slicedToArray(noop.useState(false), 2);
  obj = {
    initialRouteName: MANAGE_ACCOUNTS,
    screenOptions(arg0) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_18(closure_1_0(dependencyMap[36]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: null,
        headerTitleAlign: "center"
      };
      let renderModalCloseImage;
      if (!c1) {
        renderModalCloseImage = HeaderShared.getRenderModalCloseImage(tmp);
      }
      obj.headerLeft = renderModalCloseImage;
      let merged = Object.assign(closure_0);
      let merged1 = Object.assign(getNavigationModalPresentationDefault());
      return obj;
    },
    children: null
  };
  obj = {
    name: ManageAccountsScreens.MANAGE_ACCOUNTS,
    options() {
      const obj = { title: null, headerRight: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.WbFpq4);
      const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
      const intl2 = util.intl;
      const string = intl2.string;
      const t = util.t;
      if (c1) {
        let renderHeaderTextButton = getRenderHeaderTextButton(string(t.i4jeWR), () => closure_1_2(false));
      } else {
        renderHeaderTextButton = getRenderHeaderTextButton(string(t.bt75uw), () => closure_1_2(true));
      }
      obj.headerRight = renderHeaderTextButton;
      return obj;
    },
    children(navigation) {
      return collapsedCategories(ManageAccounts, { isEditing, navigation: navigation.navigation });
    }
  };
  const items = [
    closure_18(closure_20.Screen, obj),
    closure_18(closure_20.Screen, {
      name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
      options() {
        const obj = { title: null };
        const intl = closure_0(1114).intl;
        obj.title = intl.string(closure_0(1114).t.WbFpq4);
        return obj;
      },
      children() {
        return closure_1_18(isEditing(15977), {
          handleLogin(login, password, undelete) {
            isEditing(6593);
            const obj = { login, password, undelete };
            obj.login(obj);
          },
          onReset() {
            isEditing(6593).loginReset(true);
          }
        });
      }
    }),
    closure_18(closure_20.Screen, {
      name: ManageAccountsScreens.LOGIN,
      options() {
        return { headerShown: false };
      },
      children() {
        return closure_1_18(isEditing(6942), { isMultiAccount: true });
      }
    }),
    closure_18(closure_20.Screen, {
      name: ManageAccountsScreens.MFA,
      options() {
        return { headerShown: false };
      },
      children() {
        return closure_1_18(isEditing(15976), { isMultiAccount: true });
      }
    })
  ];
  obj.children = items;
  return closure_19(closure_20.Navigator, obj);
});