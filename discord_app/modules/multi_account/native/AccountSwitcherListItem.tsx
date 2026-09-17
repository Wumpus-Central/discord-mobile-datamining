// discord_app/modules/multi_account/native/AccountSwitcherListItem.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useA11yRolesNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

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
      obj1 = { color: null };
      tmp10 = closure_1;
      obj1.color = closure_1(tmp2[10]).colors.TEXT_BRAND;
      tmp6 = jsx(tmp(tmp2[9]).CircleCheckIcon, obj1);
    } else {
      tmp5 = MultiAccountTokenStatus;
      tmp6 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        tmp7 = jsx;
        obj4 = { color: null };
        tmp8 = closure_1;
        obj4.color = closure_1(tmp2[10]).colors.ICON_FEEDBACK_CRITICAL;
        tmp6 = jsx(tmp(tmp2[11]).CircleInformationIcon, obj4);
      }
    }
    return tmp6;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12565).MultiAccountTokenStatus;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4640);
let closure_11 = createStyles.createStyles({
  accountListTag: { marginLeft: 12, flex: 1 },
  tagContainer: { display: "flex", flexDirection: "row" },
  accountSwitcherListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  username: { flexShrink: 1 },
  accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" },
});
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
  const items = [StreamerModeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj3 = new UserRecord(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.seV8yt);
      let tmp8 = React7(Text_Text.Text, obj4);
    }
    if (null == onPressUser) {
      let PressableOpacity = React3;
    } else {
      PressableOpacity = Pressables.PressableOpacity;
    }
    const obj5 = { selected: tmp7 };
    const radioA11yNative = useA11yRolesNative.useRadioA11yNative(obj5);
    const obj6 = {
      accessibilityRole: null,
      accessibilityState: null,
      accessibilityHint: null,
      style: null,
      delayLongPress: null,
      onPress: null,
    };
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    let stringResult;
    if (!tmp7) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.wY4y0R);
    }
    obj6.accessibilityHint = stringResult;
    obj6.style = tmp.accountSwitcherListItem;
    obj6.delayLongPress = delayLongPress;
    obj6.onPress = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, ,];
    const obj8 = { style: tmp.accountInfo, children: null };
    const obj9 = { user: obj3, guildId: "a" };
    const items3 = [React7(native.Avatar, obj9)];
    const obj10 = { style: tmp.accountListTag, children: null };
    const obj11 = { style: tmp.tagContainer, children: null };
    const obj12 = {
      variant: "text-md/semibold",
      color: "text-default",
      style: tmp.username,
      lineClamp: 1,
      children: null,
    };
    const tmp2Result = useA11yRolesNative;
    let str = "always";
    if (stateFromStores) {
      str = "never";
    }
    const obj14 = { mode: "username", identifiable: str };
    obj12.children = UserUtilsDefault.getUserTag(obj3, obj14);
    const items4 = [React7(Text_Text.Text, obj12)];
    let tmp18Result = !stateFromStores;
    if (!stateFromStores) {
      tmp18Result = !obj3.hasUniqueUsername();
    }
    if (tmp18Result) {
      const obj15 = { variant: "text-md/normal", color: "text-muted", children: null };
      const _HermesInternal = HermesInternal;
      obj15.children = "#" + obj3.discriminator;
      tmp18Result = React7(Text_Text.Text, obj15);
    }
    items4[1] = tmp18Result;
    obj11.children = items4;
    const items5 = [closure_1_10(React4, obj11), tmp8];
    obj10.children = items5;
    items3[1] = closure_1_10(React4, obj10);
    obj8.children = items3;
    items2[1] = closure_1_10(React4, obj8);
    if (undefined === trailing) {
      const obj16 = { user };
      trailing = React7(AccountStatusIcon, obj16);
    }
    items2[2] = trailing;
    obj6.children = items2;
    return closure_1_10(PressableOpacity, obj6, user.id);
  }
  tmp8 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj17 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
    const intl3 = util.intl;
    obj17.children = intl3.string(util.t.tYX2ps);
    tmp8 = React7(Text_Text.Text, obj17);
  }
}
export { AccountStatusIcon };
