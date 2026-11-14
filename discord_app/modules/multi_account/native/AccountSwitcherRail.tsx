// === Module 19582: AccountSwitcherRail ===

// Module 19582 (AccountSwitcherRail)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import FastImageDefault from "FastImage" /* 6020 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7937 */;
import SettingsIcon from "SettingsIcon" /* 10569 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 14833 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 19150 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1407 */;
import StreamerModeStore from "StreamerModeStore" /* 5373 */;
import UserStore from "UserStore" /* 1388 */;
import MultiAccountStore from "MultiAccountStore" /* 14829 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 16118 */;

const CircleInformationIcon = CheckmarkSmallIcon(6037);
const CheckmarkSmallIcon2 = CheckmarkSmallIcon(7897);
require = fn;
function RailButton(arg0) {
  closure_0 = closure_22();
  const obj = {};
  const merged = Object.assign(arg0);
  obj.style = function style(pressed) {
    pressed = pressed.pressed;
    items = [closure_0.button, ];
    if (pressed) {
      pressed = closure_0.pressed;
    }
    items[1] = pressed;
    return items;
  };
  return closure_1_17(hasOwnProperty, obj);
}
function AccountButton(user) {
  user = user.user;
  const selected = user.selected;
  ({ disabled, onSelect: importAll } = user);
  dependencyMap = closure_22();
  const radioA11yNative = user(5378).useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  let obj = user(5378);
  closure_4 = tmp5;
  let obj2 = { accessibilityRole, accessibilityState, accessibilityLabel: null, accessibilityHint: null, disabled: null, onPress: null, children: null };
  const tmp4 = new UserRecord(user);
  let str = "always";
  if (user.hidePersonalInformation) {
    str = "never";
  }
  obj2.accessibilityLabel = selected(5372).getUserTag(tmp4, { mode: "username", identifiable: str });
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const intl2 = tmp(1113).intl;
    let stringResult = intl2.string(tmp(1113).t.tYX2ps);
  } else if (!selected) {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t.wY4y0R);
  }
  obj2.accessibilityHint = stringResult;
  obj2.disabled = disabled;
  obj2.onPress = function onPress() {
    return importAll(user);
  };
  obj2.children = function children(pressed) {
    items = [, , ];
    ({ circle: arr[0], accountRing: arr[1] } = closure_3);
    let activeRing = selected;
    if (!selected) {
      activeRing = pressed.pressed;
    }
    if (activeRing) {
      activeRing = closure_3.activeRing;
    }
    items[2] = activeRing;
    const items1 = [closure_2_17(timestampProducer, { style: items, pointerEvents: "none" }), , ];
    let ICON_OVERLAY_LIGHT = dependencyMap;
    const obj = { accessible: false, source: null, style: null, resizeMode: "cover", fadeDuration: 0 };
    const tmp8 = FastImageDefault;
    obj.source = AvatarUtilsDefault.getUserAvatarSource(user, false, diff);
    obj.style = closure_3.avatar;
    items1[1] = closure_2_17(tmp8, obj);
    if (!selected) {
      if (!closure_4) {
        const obj3 = { children: null };
        items1[2] = null;
        obj3.children = items1;
        return expandedHeight(collapsedCategories, obj3);
      }
    }
    const items2 = [closure_3.indicator, ];
    let invalidIndicator = !selected;
    if (!selected) {
      invalidIndicator = closure_3.invalidIndicator;
    }
    const obj4 = { style: items2, pointerEvents: "none", children: null };
    items2[1] = invalidIndicator;
    let CheckmarkSmallIcon = require;
    if (selected) {
      CheckmarkSmallIcon = CheckmarkSmallIcon2.CheckmarkSmallIcon;
      const obj5 = { size: "xxs", color: null, accessible: false };
      ICON_OVERLAY_LIGHT = nativeDefault.colors.ICON_OVERLAY_LIGHT;
      obj5.color = ICON_OVERLAY_LIGHT;
      let tmp3Result = closure_2_17(CheckmarkSmallIcon, obj5);
    } else {
      const obj6 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessible: false };
      tmp3Result = closure_2_17(CircleInformationIcon.CircleInformationIcon, obj6);
    }
    obj4.children = tmp3Result;
    closure_2_17(timestampProducer, obj4);
  };
  return closure_17(RailButton, obj2);
}
function AccountSwitcherRailContent() {
  function handleSelect(id) {
    if (id.id !== stateFromStores) {
      if (!MultiAccountSwitchStore.getIsSwitchingAccount()) {
        if (id.tokenStatus === MultiAccountTokenStatus.INVALID) {
          openManageAccountsModalDefault(constants3.LOGIN);
          AnalyticsUtilsDefault.track(constants2.LOGIN_VIEWED, { source: "account_switcher_rail_invalid_user" });
        } else {
          const obj2 = { location: AnalyticsLocationDefault.ACCOUNT_SWITCHER_RAIL };
          AnalyticsUtilsDefault.track(constants2.MULTI_ACCOUNT_SWITCH_ATTEMPT, obj2);
          MultiAccountActionCreatorsAll.switchAccount(id.id, undefined, constants.ACCOUNT_SWITCHER_RAIL);
        }
      }
    }
  }
  const tmp = closure_22();
  _require = tmp;
  ({ right, bottom } = multiAccountUsers(stateFromStores1[19])());
  const tmp3 = multiAccountUsers(stateFromStores1[19])();
  const token = require("useToken").useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  let obj = require("useToken");
  const token1 = require("useToken").useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj2 = require("useToken");
  const token2 = require("useToken").useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  let obj3 = require("useToken");
  const token3 = require("useToken").useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = require("useToken");
  const tmp9 = closure_21(right, Math.max(bottom, token) + token1 + token2 + (token3 - 44) / 2);
  multiAccountUsers = require("useMultiAccount").useMultiAccountUsers().multiAccountUsers;
  const obj5 = require("useMultiAccount");
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const obj6 = require("initialize");
  let items1 = [MultiAccountSwitchStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => isSwitchingAccount.getIsSwitchingAccount());
  const obj7 = require("initialize");
  const items2 = [StreamerModeStore];
  noop = require("initialize").useStateFromStores(items2, () => StreamerModeStore.hidePersonalInformation);
  const items3 = [multiAccountUsers, stateFromStores];
  const memo = noop.useMemo(() => {
    const substr = multiAccountUsers.slice(0, 5);
    if (null != stateFromStores) {
      if (!substr.some((id) => id.id === stateFromStores)) {
        const found = multiAccountUsers.find((id) => id.id === stateFromStores);
        if (null != found) {
          substr[substr.length - 1] = found;
        }
      }
    }
    return substr;
  }, items3);
  if (null != stateFromStores) {
    if (memo.length >= 2) {
      if (multiAccountUsers.length < closure_13) {
        const obj9 = { label: null, IconComponent: null, action: null };
        let intl = tmp4(tmp2[14]).intl;
        obj9.label = intl.string(tmp4(tmp2[14]).t.bPP34Q);
        obj9.IconComponent = tmp4(tmp2[27]).UserPlusIcon;
        obj9.action = function action() {
          multiAccountUsers(stateFromStores1[23])(constants2.LOGIN);
          multiAccountUsers(stateFromStores1[24]).track(constants.LOGIN_VIEWED, { source: "account_switcher_rail_add_account" });
        };
        const items4 = [obj9];
        let items5 = items4;
      } else {
        items5 = [];
      }
      const items6 = [];
      const obj10 = { label: null, IconComponent: null, action: null };
      const intl2 = tmp4(tmp2[14]).intl;
      obj10.label = intl2.string(tmp4(tmp2[14]).t.WbFpq4);
      obj10.IconComponent = tmp4(tmp2[28]).SettingsIcon;
      obj10.action = function action() {
        return multiAccountUsers(stateFromStores1[23])();
      };
      items6[HermesBuiltin.arraySpread(items5, 0)] = obj10;
      const obj11 = { style: tmp9.gutter, pointerEvents: "box-none", children: null };
      const obj12 = { style: tmp.accounts, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
      const intl3 = tmp4(tmp2[14]).intl;
      obj12.accessibilityLabel = intl3.string(tmp4(tmp2[14]).t.oMNyYN);
      obj12.children = memo.map((user) => closure_2_17(AccountButton, { user, selected: user.id === stateFromStores, disabled: stateFromStores1, hidePersonalInformation, onSelect: handleSelect }, user.id));
      const items7 = [closure_17(closure_6, obj12), ];
      const obj13 = {
        items: items6,
        triggerOnTap: true,
        align: "left",
        enabled: !stateFromStores1,
        children(arg0) {
              const obj = {};
              const merged = Object.assign(arg0);
              obj.disabled = stateFromStores1;
              obj.accessibilityRole = "button";
              const intl = util.intl;
              obj.accessibilityLabel = intl.string(util.t.WbFpq4);
              const obj2 = { style: null, pointerEvents: "none" };
              items = [, ];
              ({ circle: arr[0], neutralCircle: arr[1] } = manageIcon);
              obj2.style = items;
              const items1 = [closure_2_17(timestampProducer, obj2), closure_2_17(SettingsIcon.SettingsIcon, { size: "custom", style: manageIcon.manageIcon, color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, accessible: false })];
              obj.children = items1;
              return expandedHeight(RailButton, obj);
            }
      };
      items7[1] = closure_17(tmp4(tmp2[29]).ContextMenu, obj13);
      obj11.children = items7;
      return closure_19(closure_6, obj11);
    }
  }
  return null;
}
get_ActivityIndicator = fn(17);
({ Pressable: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(14829).MultiAccountTokenStatus;
let Constants = fn(14830);
({ MAX_ACCOUNTS: map1, MultiAccountSwitchLocation: closure_14 } = Constants);
Constants = fn(1072);
({ AnalyticEvents: closure_15, AuthStates: closure_16 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = jsxProd);
const diff = 41 - 2 * nativeDefault.space.PX_4;
let createStyles = fn(5306);
let closure_21 = createStyles.createStyles((width, bottom) => {
  const obj = { gutter: null };
  const rect = { position: "absolute", right: nativeDefault.space.PX_6, bottom, width, alignItems: "center" };
  obj.gutter = rect;
  return obj;
});
createStyles = fn(5306);
let obj = { accounts: { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 }, button: null, pressed: null, avatar: null, circle: null, neutralCircle: null, accountRing: null, activeRing: null, indicator: null, invalidIndicator: null, manageIcon: null };
let size = { width: 44, height: 44, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj.button = size;
let obj4 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
obj.pressed = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
const size1 = { width: diff, height: diff, borderRadius: nativeDefault.radii.round };
obj.avatar = size1;
const size2 = { position: "absolute", width: 41, height: 41, borderRadius: nativeDefault.radii.round };
obj.circle = size2;
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.neutralCircle = { borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
let obj6 = { borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.accountRing = { borderWidth: 2, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
let obj7 = { borderWidth: 2, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj.activeRing = { borderColor: nativeDefault.colors.TEXT_BRAND };
const size3 = { position: "absolute", bottom: 0, right: 0, width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.indicator = size3;
const obj8 = { borderColor: nativeDefault.colors.TEXT_BRAND };
obj.invalidIndicator = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size4 = { width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
obj.manageIcon = size4;
let closure_22 = createStyles.createStyles(obj);
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherRail.tsx");

export default noop.memo(function AccountSwitcherRail() {
  items = [MultiAccountStore];
  let tmp = null;
  if (obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile())) {
    tmp = closure_1_17(AccountSwitcherRailContent, {});
  }
  return tmp;
});