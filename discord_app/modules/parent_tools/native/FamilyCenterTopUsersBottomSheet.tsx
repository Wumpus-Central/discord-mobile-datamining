import { ActionSheet } from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { TableRowInner } from "../../../design/components/TableRow/native/TableRow.native.tsx";
import { TableRowGroupTitle } from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { nameFromUser } from "../../../utils/UserUtils.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
// discord_app/modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx
import "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  user = user.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = getEmptyActivityFormatter /* getEmptyActivityFormatter */;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = nameFromUser.getName(user);
    obj[1] = topUserOrGuildDescription;
    obj = { size: null, user: null, guildId: "disabled" };
    obj[0] = Button /* Button */.AvatarSizes.SMALL;
    obj[1] = user;
    obj[2] = callback(Button /* Button */.Avatar, obj);
    return callback(TableRowInner /* TableRowInner */.TableRow, obj);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.string(messagesProxy.BxbvS7);
  const items = [callback(Text /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: null };
  obj[1] = topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id));
  items[1] = callback(TableRowGroupTitle /* TableRowGroupTitle */.TableRowGroup, obj);
  obj[0] = items;
  return callback2(ActionSheet /* ActionSheet */.ActionSheet, obj);
};