// discord_app/modules/multi_account/native/AccountSwitcherListItem.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../records/UserRecord.tsx";
import closure_6 from "../../../stores/StreamerModeStore.tsx";
import closure_7 from "../../../stores/UserStore.tsx";
import { MultiAccountTokenStatus } from "../MultiAccountStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class AccountStatusIcon {
  constructor(arg0) {
    user = global.user;
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("initialize");
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
      obj[0] = require("Themes").colors.TEXT_BRAND;
      tmp6 = jsx(require("CircleCheckIcon").CircleCheckIcon, obj);
    } else {
      tmp5 = MultiAccountTokenStatus;
      tmp6 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        tmp7 = jsx;
        obj1 = { color: null };
        tmp8 = closure_1;
        obj1[0] = require("Themes").colors.ICON_FEEDBACK_CRITICAL;
        tmp6 = jsx(require("CircleInformationIcon").CircleInformationIcon, obj1);
      }
    }
    return tmp6;
  }
}
noopAll;
({ Pressable: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({
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
const result = require("set").fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default function AccountSwitcherListItem(arg0) {
  ({ user, onPressUser, showActiveAccountLabel } = arg0);
  if (showActiveAccountLabel === undefined) {
    showActiveAccountLabel = false;
  }
  ({ sortHandlers, trailing } = arg0);
  ({ delayLongPress, leading } = arg0);
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => obj.hidePersonalInformation);
  obj1 = initialize;
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  let obj2 = new closure_5(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      obj = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl = tmp2(1233).intl;
      obj[2] = intl.string(tmp2(1233).t.seV8yt);
      let tmp8 = callback(tmp2(4474).Text, obj);
    }
    if (null == onPressUser) {
      let PressableOpacity = closure_3;
    } else {
      PressableOpacity = tmp2(5077).PressableOpacity;
    }
    obj = { selected: null };
    obj[0] = tmp7;
    const radioA11yNative = tmp2(4205).useRadioA11yNative(obj);
    obj1 = {
      accessibilityRole: null,
      accessibilityState: null,
      accessibilityHint: null,
      style: null,
      delayLongPress: null,
      onPress: null,
    };
    ({ accessibilityRole: obj7[0], accessibilityState: obj7[1] } = radioA11yNative);
    let stringResult;
    if (!tmp7) {
      const intl2 = tmp2(1233).intl;
      stringResult = intl2.string(tmp2(1233).t.wY4y0R);
    }
    obj1[2] = stringResult;
    obj1[3] = tmp.accountSwitcherListItem;
    obj1[4] = delayLongPress;
    obj1[5] = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, ,];
    obj2 = { style: null, children: null };
    obj2[0] = tmp.accountInfo;
    const obj3 = { user: null, guildId: "Array" };
    obj3[0] = obj2;
    const items3 = [callback(tmp2(1296).Avatar, obj3)];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.accountListTag;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.tagContainer;
    const obj6 = { variant: "text-md/semibold", color: "text-default", style: null, lineClamp: 1, children: null };
    obj6[2] = tmp.username;
    const tmp2Result = tmp2(4205);
    let str = "always";
    if (stateFromStores) {
      str = "never";
    }
    const obj7 = { mode: "username", identifiable: null };
    obj7[1] = str;
    obj6[4] = nameFromUserDefault.getUserTag(obj2, obj7);
    const items4 = [callback(tmp2(4474).Text, obj6)];
    let tmp18Result = !stateFromStores;
    if (!stateFromStores) {
      tmp18Result = !obj2.hasUniqueUsername();
    }
    if (tmp18Result) {
      const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
      const _HermesInternal = HermesInternal;
      obj8[2] = "#" + obj2.discriminator;
      tmp18Result = tmp18(tmp2(4474).Text, obj8);
    }
    items4[1] = tmp18Result;
    obj5[1] = items4;
    const items5 = [closure_10(closure_4, obj5), tmp8];
    obj4[1] = items5;
    items3[1] = closure_10(closure_4, obj4);
    obj2[1] = items3;
    items2[1] = closure_10(closure_4, obj2);
    if (undefined === trailing) {
      const obj9 = { user: null };
      obj9[0] = user;
      trailing = tmp18(AccountStatusIcon, obj9);
    }
    items2[2] = trailing;
    obj1.children = items2;
    return closure_10(PressableOpacity, obj1, user.id);
  }
  tmp8 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj10 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1233).intl;
    obj10[2] = intl3.string(tmp2(1233).t.tYX2ps);
    tmp8 = callback(tmp2(4474).Text, obj10);
  }
}
export { AccountStatusIcon };
