// === Module 16232: FamilyCenterTopUsersBottomSheet ===

// Module 16232 (FamilyCenterTopUsersBottomSheet)
import util from "util" /* 1112 */;
import native from "native" /* 1186 */;
import _modDef2824 from "module_2824" /* 2824 */;
import UserUtilsDefault from "UserUtils" /* 4973 */;
import Text_Text from "Text/Text" /* 5508 */;
import TableRowGroup from "TableRowGroup" /* 6014 */;
import TableRow from "TableRow" /* 6018 */;
import ActionSheet from "ActionSheet" /* 7420 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8077 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;

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
const createStyles = fn(4917);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  const obj = { children: null };
  const obj2 = { variant: "body-md/semibold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2824.BxbvS7);
  items = [React4(Text_Text.Text, obj2), ];
  const tmp = closure_6();
  items[1] = React4(TableRowGroup.TableRowGroup, { hasIcons: true, children: topUserActivities.map((userActivity) => closure_1_4(UserRow, { userActivity }, userActivity.user_id)) });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};