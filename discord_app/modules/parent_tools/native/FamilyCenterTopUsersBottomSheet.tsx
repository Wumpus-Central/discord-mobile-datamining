// discord_app/modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

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
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj.children = intl.string(_modDef2396.BxbvS7);
  const items = [React4(Text_Text.Text, obj)];
  obj = {
    hasIcons: true,
    children: topUserActivities.map((userActivity) => closure_1_4(UserRow, { userActivity }, userActivity.user_id)),
  };
  items[1] = React4(TableRowGroup.TableRowGroup, obj);
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
