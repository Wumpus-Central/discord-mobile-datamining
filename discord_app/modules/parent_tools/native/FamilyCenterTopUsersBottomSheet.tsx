// === Module 14926: FamilyCenterTopUsersBottomSheet ===

// Module 14926 (FamilyCenterTopUsersBottomSheet)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import _modDef2396 from "module_2396" /* 2396 */;
import UserUtilsDefault from "UserUtils" /* 4418 */;
import Text_Text from "Text/Text" /* 4570 */;
import TableRow from "TableRow" /* 5619 */;
import TableRowGroup from "TableRowGroup" /* 5701 */;
import ActionSheet from "ActionSheet" /* 7211 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7607 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  const user = UserStore.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    let obj = FamilyCenterUtils;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: UserUtilsDefault.getName(user), subLabel: topUserOrGuildDescription, icon: null };
    obj = { size: native.AvatarSizes.SMALL, user, guildId: "Array" };
    obj.icon = React4(native.Avatar, obj);
    return React4(TableRow.TableRow, obj);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4574);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef2396.BxbvS7);
  const items = [React4(Text_Text.Text, obj), ];
  obj = { hasIcons: true, children: topUserActivities.map((userActivity) => closure_1_4(UserRow, { userActivity }, userActivity.user_id)) };
  items[1] = React4(TableRowGroup.TableRowGroup, obj);
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};