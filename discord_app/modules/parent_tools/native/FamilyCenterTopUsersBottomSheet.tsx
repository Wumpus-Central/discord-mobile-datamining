// === Module 14503: UserRow ===

// Module 14503 (UserRow)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import messagesProxyDefault from "messagesProxy" /* 2369 */;
import nameFromUserDefault from "nameFromUser" /* 4322 */;
import Text from "Text" /* 4474 */;
import TableRowInner from "TableRowInner" /* 5599 */;
import ActionSheet from "ActionSheet" /* 5989 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5992 */;
import getEmptyActivityFormatter from "getEmptyActivityFormatter" /* 7338 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  const items = [callback(Text.Text, obj), ];
  obj = { hasIcons: true, children: topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id)) };
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj);
  obj[0] = items;
  return callback2(ActionSheet.ActionSheet, obj);
};