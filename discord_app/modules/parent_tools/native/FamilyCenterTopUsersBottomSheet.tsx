// === Module 17072: FamilyCenterTopUsersBottomSheet ===

// Module 17072 (FamilyCenterTopUsersBottomSheet)
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import _modDef2667 from "module_2667" /* 2667 */;
import UserUtilsDefault from "UserUtils" /* 5197 */;
import Text_Text from "Text/Text" /* 5763 */;
import TableRow from "TableRow" /* 7119 */;
import TableRowGroup from "TableRowGroup" /* 7204 */;
import ActionSheet from "ActionSheet" /* 7504 */;
import FamilyCenterUtils from "FamilyCenterUtils" /* 8518 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

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
const createStyles = fn(5143);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  const obj = { children: null };
  const obj2 = { variant: "body-md/semibold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2667.BxbvS7);
  items = [React4(Text_Text.Text, obj2), ];
  const tmp = closure_6();
  items[1] = React4(TableRowGroup.TableRowGroup, { hasIcons: true, children: topUserActivities.map((userActivity) => closure_1_4(UserRow, { userActivity }, userActivity.user_id)) });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
};