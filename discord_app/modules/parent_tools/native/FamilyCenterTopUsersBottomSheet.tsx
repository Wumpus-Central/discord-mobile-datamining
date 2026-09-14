// === Module 14987: FamilyCenterTopUsersBottomSheet ===

// Module 14987 (FamilyCenterTopUsersBottomSheet)
import util from "util" /* 1114 */;
import native from "native" /* 1176 */;
import _modDef2396 from "module_2396" /* 2396 */;
import UserUtilsDefault from "UserUtils" /* 4481 */;
import Text_Text from "Text/Text" /* 4632 */;
import TableRow from "TableRow" /* 5686 */;
import TableRowGroup from "TableRowGroup" /* 5768 */;
import ActionSheet from "ActionSheet" /* 7300 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 7695 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function UserRow(userActivity) {
  userActivity = userActivity.userActivity;
  const user = UserStore.getUser(userActivity.user_id);
  if (null == user) {
    return null;
  } else {
    const topUserOrGuildDescription = FamilyCenterUtils.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    const obj2 = { label: null, subLabel: null, icon: null };
    obj2.label = UserUtilsDefault.getName(user);
    obj2.subLabel = topUserOrGuildDescription;
    const obj4 = { size: native.AvatarSizes.SMALL, user, guildId: "Array" };
    obj2.icon = React4(native.Avatar, obj4);
    return React4(TableRow.TableRow, obj2);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  const obj = { children: null };
  const obj2 = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2396.BxbvS7);
  const items = [React4(Text_Text.Text, obj2), ];
  const tmp = closure_6();
  items[1] = React4(TableRowGroup.TableRowGroup, { hasIcons: true, children: topUserActivities.map((userActivity) => closure_1_4(UserRow, { userActivity }, userActivity.user_id)) });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};