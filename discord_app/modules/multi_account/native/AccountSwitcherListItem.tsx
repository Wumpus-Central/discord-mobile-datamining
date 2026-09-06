// === Module 15952: AccountSwitcherListItem ===

// Module 15952 (AccountSwitcherListItem)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1385 */;
import StreamerModeStore from "StreamerModeStore" /* 4405 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class AccountStatusIcon {
  constructor(arg0) {
    user = global.user;
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[8]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    id = undefined;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (user.id === id) {
      tmp9 = jsx;
      obj = { color: null };
      tmp10 = closure_1;
      obj.color = closure_1(tmp2[10]).colors.TEXT_BRAND;
      tmp6 = jsx(tmp(tmp2[9]).CircleCheckIcon, obj);
    } else {
      tmp5 = MultiAccountTokenStatus;
      tmp6 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        tmp7 = jsx;
        obj1 = { color: null };
        tmp8 = closure_1;
        obj1.color = closure_1(tmp2[10]).colors.ICON_FEEDBACK_CRITICAL;
        tmp6 = jsx(tmp(tmp2[11]).CircleInformationIcon, obj1);
      }
    }
    return tmp6;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12413).MultiAccountTokenStatus;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ accountListTag: { marginLeft: 12, flex: 1 }, tagContainer: { display: "flex", flexDirection: "row" }, accountSwitcherListItem: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingVertical: 8, paddingHorizontal: 16 }, username: { flexShrink: 1 }, accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default function AccountSwitcherListItem(arg0) {
  ({ user, onPressUser, showActiveAccountLabel } = arg0);
  if (showActiveAccountLabel === undefined) {
    showActiveAccountLabel = false;
  }
  ({ sortHandlers, trailing } = arg0);
  ({ delayLongPress, leading } = arg0);
  const tmp = closure_11();
  let obj = initialize;
  const items = [StreamerModeStore];
  const stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  let obj1 = initialize;
  const items1 = [UserStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  let obj2 = new UserRecord(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      obj = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl = tmp2(1114).intl;
      obj.children = intl.string(tmp2(1114).t.seV8yt);
      let tmp8 = React7(tmp2(4556).Text, obj);
    }
    if (null == onPressUser) {
      let PressableOpacity = React3;
    } else {
      PressableOpacity = tmp2(5123).PressableOpacity;
    }
    obj = { selected: tmp7 };
    const radioA11yNative = tmp2(4277).useRadioA11yNative(obj);
    obj1 = { accessibilityRole: null, accessibilityState: null, accessibilityHint: null, style: null, delayLongPress: null, onPress: null };
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    let stringResult;
    if (!tmp7) {
      const intl2 = tmp2(1114).intl;
      stringResult = intl2.string(tmp2(1114).t.wY4y0R);
    }
    obj1.accessibilityHint = stringResult;
    obj1.style = tmp.accountSwitcherListItem;
    obj1.delayLongPress = delayLongPress;
    obj1.onPress = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, , ];
    obj2 = { style: tmp.accountInfo, children: null };
    const obj3 = { user: obj2, guildId: "a" };
    const items3 = [React7(tmp2(1178).Avatar, obj3), ];
    const obj4 = { style: tmp.accountListTag, children: null };
    const obj5 = { style: tmp.tagContainer, children: null };
    const obj6 = { variant: "text-md/semibold", color: "text-default", style: tmp.username, lineClamp: 1, children: null };
    const tmp2Result = tmp2(4277);
    let str = "always";
    if (stateFromStores) {
      str = "never";
    }
    const obj7 = { mode: "username", identifiable: str };
    obj6.children = UserUtilsDefault.getUserTag(obj2, obj7);
    const items4 = [React7(tmp2(4556).Text, obj6), ];
    let tmp18Result = !stateFromStores;
    if (!stateFromStores) {
      tmp18Result = !obj2.hasUniqueUsername();
    }
    if (tmp18Result) {
      const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
      const _HermesInternal = HermesInternal;
      obj8.children = "#" + obj2.discriminator;
      tmp18Result = tmp18(tmp2(4556).Text, obj8);
    }
    items4[1] = tmp18Result;
    obj5.children = items4;
    const items5 = [closure_1_10(React4, obj5), tmp8];
    obj4.children = items5;
    items3[1] = closure_1_10(React4, obj4);
    obj2.children = items3;
    items2[1] = closure_1_10(React4, obj2);
    if (undefined === trailing) {
      const obj9 = { user };
      trailing = tmp18(AccountStatusIcon, obj9);
    }
    items2[2] = trailing;
    obj1.children = items2;
    return closure_1_10(PressableOpacity, obj1, user.id);
  }
  tmp8 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj10 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1114).intl;
    obj10.children = intl3.string(tmp2(1114).t.tYX2ps);
    tmp8 = React7(tmp2(4556).Text, obj10);
  }
};
export { AccountStatusIcon };