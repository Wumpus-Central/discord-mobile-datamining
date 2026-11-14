// === Module 19151: ManageAccountsModal ===

// Module 19151 (ManageAccountsModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 6269 */;
import HeaderShared from "HeaderShared" /* 9051 */;
import getNavigationModalPresentationDefault from "getNavigationModalPresentation" /* 10908 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 14833 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import StreamerModeStore from "StreamerModeStore" /* 5373 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, isDismissable: true };
            const intl = tmp2(1113).intl;
            obj4.title = intl.string(tmp2(1113).t.n0Fbg6);
            const intl2 = tmp2(1113).intl;
            const obj5 = { username };
            obj4.body = intl2.formatToPlainString(tmp2(1113).t.phEQmS, obj5);
            const intl3 = tmp2(1113).intl;
            obj4.confirmText = intl3.string(tmp2(1113).t.N86XcP);
            obj4.confirmColor = tmp2(1187).ButtonColors.RED;
            const intl4 = tmp2(1113).intl;
            obj4.cancelText = intl4.string(tmp2(1113).t["ETE/oC"]);
            v1 = 1;
            v3 = 1;
            const obj7 = { value: v1(6269).confirm(obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          if (value) {
            v3(14833).removeAccount(closure_128_0.id);
            const obj = v3(14833);
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
  items = [StreamerModeStore];
  let stateFromStores = user(504).useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  let obj = user(504);
  const items1 = [UserStore];
  const stateFromStores1 = user(504).useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (id === user.id) {
    return closure_18(tmp(1187).Spacer, { size: 21 });
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
    let obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    let intl = tmp(1113).intl;
    obj3.accessibilityLabel = intl.string(tmp(1113).t.lSLMaU);
    obj3.onPress = function handlePressRemove() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    let obj4 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
    obj3.children = closure_18(tmp(17933).CircleMinusIcon, obj4);
    return closure_18(tmp(7428).PressableOpacity, obj3);
  }
  let obj2 = user(504);
}
function ManageAccounts(isEditing) {
  isEditing = isEditing.isEditing;
  _require = isEditing;
  let multiAccountUsers;
  noop = undefined;
  component = undefined;
  const tmp = closure_21();
  multiAccountUsers = require("useMultiAccount").useMultiAccountUsers().multiAccountUsers;
  let obj = require("useMultiAccount");
  items = [AuthenticationStore];
  const currentUserId = require("initialize").useStateFromStoresObject(items, () => ({ currentUserId: id.getId() })).currentUserId;
  let obj2 = require("initialize");
  const sharedValue = require("module_1655").useSharedValue(0);
  let obj3 = require("module_1655");
  const items1 = [closure_23, require("timing/timing").withTiming, sharedValue, duration2];
  _require = undefined;
  importDefault = undefined;
  c2 = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items1;
  class ManageAccountsModalTsx1 {
    constructor() {
      obj = { width: null };
      obj1 = { duration: closure_2 };
      obj.width = closure_0(closure_1.get(), obj1);
      return obj;
    }
  }
  const items2 = [tmp7, tmp8, tmp9];
  ManageAccountsModalTsx1.__closure = items2;
  ManageAccountsModalTsx1.__workletHash = 6360953709676;
  ManageAccountsModalTsx1.__initData = tmp6;
  noop = require("module_1655").useAnimatedStyle(ManageAccountsModalTsx1);
  component = require("usePrevious")(isEditing);
  const effect = noop.useEffect(() => {
    let tmp2 = null != closure_7;
    if (tmp2) {
      tmp2 = tmp !== c0;
    }
    if (tmp2) {
      let num = 0;
      if (c0) {
        num = 37;
      }
      const result = sharedValue.set(num);
    }
  });
  let obj5 = { style: tmp.container, bottom: true, children: null };
  let obj6 = {
    data: multiAccountUsers,
    keyExtractor(id) {
      return id.id;
    },
    onRowMoved: function handleUserMove(arg0) {
      ({ from, to } = arg0);
      duration(multiAccountUsers[19]).moveAccount(from, to);
    },
    disableSorting: !isEditing,
    wrapperStyles: tmp.sortableListView,
    renderRow(user, arg1) {
      let obj = { user, onPressUser: null, showActiveAccountLabel: true, leading: null, trailing: null, delayLongPress: null };
      let fn = null;
      if (!user) {
        fn = () => {
          if (!c0) {
            if (user.id !== currentUserId) {
              if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
                c1.push(constants3.LOGIN);
                AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_invalid_user" });
              } else {
                MultiAccountActionCreatorsAll.switchAccount(user.id, undefined, constants.MANAGE_ACCOUNTS_MODAL);
              }
            }
          }
        };
      }
      obj.onPressUser = fn;
      let obj2 = { component: _undefined2(multiAccountUsers[23]).View, transitionEnter: true, transitionLeave: true, style, children: null };
      let tmpResult = tmp5;
      if (user) {
        const obj3 = { duration: duration2, children: null };
        const obj4 = { user };
        obj3.children = closure_1_18(RemoveMultiAccountUserButton, obj4);
        tmpResult = closure_1_18(_undefined2(multiAccountUsers[31]), obj3);
        const tmp2Result = _undefined2(multiAccountUsers[31]);
      }
      obj2.children = tmpResult;
      obj.leading = closure_1_18(_undefined(multiAccountUsers[30]).TransitionGroup, obj2);
      const obj5 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, style: duration.trailingIconContainer, children: null };
      const tmp2Result2 = _undefined2(multiAccountUsers[31]);
      const obj6 = { duration: duration2, style: duration.trailingIcon, children: null };
      if (user) {
        obj6.children = closure_1_18(_undefined(multiAccountUsers[32]).DragIcon, {});
        let tmpResult2 = closure_1_18(tmp2Result2, obj6, "drag");
      } else {
        const obj7 = { user };
        obj6.children = closure_1_18(_undefined(multiAccountUsers[29]).AccountStatusIcon, obj7);
        tmpResult2 = closure_1_18(tmp2Result2, obj6, "status");
      }
      obj5.children = tmpResult2;
      obj.trailing = closure_1_18(_undefined(multiAccountUsers[30]).TransitionGroup, obj5);
      let num;
      if (user) {
        num = 100;
      }
      obj.delayLongPress = num;
      return closure_1_18(_undefined2(multiAccountUsers[29]), obj, arg1);
    },
    keyboardShouldPersistTaps: "handled",
    scrollEventThrottle: 16,
    scrollEnabled: true,
    footer: null
  };
  let obj4 = require("module_1655");
  let obj7 = { component, transitionEnter: true, transitionLeave: true, transitionAppear: true, children: null };
  let tmp12Result = !isEditing;
  if (!isEditing) {
    const obj8 = { duration: duration2, children: null };
    const obj9 = { leading: null, label: null, onPress: null };
    const obj10 = { color: tmp10(tmp3[14]).colors.TEXT_LINK };
    obj9.leading = closure_18(tmp2(tmp3[34]).CirclePlusIcon, obj10);
    const obj11 = { style: tmp.addAccountLabel, text: null };
    let intl = tmp2(tmp3[18]).intl;
    obj11.text = intl.string(tmp2(tmp3[18]).t.bPP34Q);
    obj9.label = closure_18(tmp2(tmp3[33]).FormRow.Label, obj11);
    obj9.onPress = function handlePressAddAccount() {
      if (multiAccountUsers.length >= state) {
        const obj3 = { title: null, body: null, isDismissable: true };
        const intl = util.intl;
        obj3.title = intl.string(util.t.w7wfXi);
        const intl2 = util.intl;
        const obj4 = { maxNumAccounts: tmp };
        obj3.body = intl2.formatToPlainString(util.t.WOyelG, obj4);
        actions_AlertActionCreatorsDefault.show(obj3);
      } else {
        _undefined2.push(constants3.LOGIN);
        AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "multi_account_add_account" });
      }
    };
    obj8.children = closure_18(tmp2(tmp3[33]).FormRow, obj9);
    tmp12Result = closure_18(tmp10(tmp3[31]), obj8);
    const tmp10Result = tmp10(tmp3[31]);
  }
  obj7.children = tmp12Result;
  obj6.footer = closure_18(require("TransitionGroup").TransitionGroup, obj7);
  obj5.children = closure_18(require("SortableListView"), obj6);
  return closure_18(require("common/SafeAreaView").SafeAreaPaddingView, obj5);
}
const View = fn(17).View;
const MultiAccountTokenStatus = fn(14829).MultiAccountTokenStatus;
let Constants = fn(14830);
({ MANAGE_EDIT_TRANSITION_DURATION: closure_12, MAX_ACCOUNTS: map1, MultiAccountSwitchLocation: closure_14 } = Constants);
const ManageAccountsScreens = fn(19152).ManageAccountsScreens;
Constants = fn(1072);
({ AnalyticEvents: closure_16, AuthStates: closure_17 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
const NativeStackNavigator = fn(9128);
let closure_20 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5306);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 }, sortableListView: null, addAccountLabel: null, trailingIconContainer: null, trailingIcon: null };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1, paddingTop: 16 };
obj.sortableListView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.addAccountLabel = { color: nativeDefault.colors.TEXT_LINK };
obj.trailingIconContainer = { width: 24, height: 24 };
obj.trailingIcon = { position: "absolute" };
let closure_21 = createStyles.createStyles(obj);
let closure_23 = { code: "(function ManageAccountsModalTsx1(){let[withTiming,leadingWidth,MANAGE_EDIT_TRANSITION_DURATION]=this.__closure;return{width:withTiming(leadingWidth.get(),{duration:MANAGE_EDIT_TRANSITION_DURATION})};})" };
let obj6 = { color: nativeDefault.colors.TEXT_LINK };
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
  _require = require("Navigator").useAccessibilityNativeStackOptions();
  let obj = require("Navigator");
  [c1, c2] = noop.useState(false);
  let obj2 = {
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
  items = [
    closure_18(closure_20.Screen, {
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
    }),
    closure_18(closure_20.Screen, {
      name: ManageAccountsScreens.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED,
      options() {
        const obj = { title: null };
        const intl = closure_0(1113).intl;
        obj.title = intl.string(closure_0(1113).t.WbFpq4);
        return obj;
      },
      children() {
        return closure_1_18(isEditing(18680), {
          handleLogin(login, password, undelete) {
            isEditing(6844).login({ login, password, undelete });
          },
          onReset() {
            isEditing(6844).loginReset(true);
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
        return closure_1_18(isEditing(7767), { isMultiAccount: true });
      }
    }),
    closure_18(closure_20.Screen, {
      name: ManageAccountsScreens.MFA,
      options() {
        return { headerShown: false };
      },
      children() {
        return closure_1_18(isEditing(18679), { isMultiAccount: true });
      }
    })
  ];
  obj2.children = items;
  return closure_19(closure_20.Navigator, obj2);
});