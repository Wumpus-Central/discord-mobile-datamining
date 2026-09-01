// discord_app/modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import nameFromUserDefault from "../../../utils/UserUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import TableRowInner from "../../../design/components/TableRow/native/TableRow.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import TableRowGroupTitle from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import getEmptyActivityFormatter from "../FamilyCenterUtils.tsx";
import closure_3 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  user = user.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = getEmptyActivityFormatter;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = nameFromUserDefault.getName(user);
    obj[1] = topUserOrGuildDescription;
    obj = { size: null, user: null, guildId: "r" };
    obj[0] = Button.AvatarSizes.SMALL;
    obj[1] = user;
    obj[2] = callback(Button.Avatar, obj);
    return callback(TableRowInner.TableRow, obj);
  }
}
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(messagesProxyDefault.BxbvS7);
  const items = [callback(Text.Text, obj)];
  obj = {
    hasIcons: true,
    children: topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id)),
  };
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
}
