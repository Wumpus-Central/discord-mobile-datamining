// discord_app/modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2484 from "../FamilyCenter.messages.js";
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
    const topUserOrGuildDescription = FamilyCenterUtils.getTopUserOrGuildDescription(
      userActivity.dms_sent,
      userActivity.call_count,
    );
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
const createStyles = fn(4827);
let closure_6 = createStyles.createStyles({ header: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  const obj = { children: null };
  const obj2 = { variant: "text-md/bold", style: closure_6().header, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2484.BxbvS7);
  const items = [React4(Text_Text.Text, obj2)];
  const tmp = closure_6();
  items[1] = React4(TableRowGroup.TableRowGroup, {
    hasIcons: true,
    children: topUserActivities.map((userActivity) => closure_1_4(UserRow, { userActivity }, userActivity.user_id)),
  });
  obj.children = items;
  return hasOwnProperty(ActionSheet.ActionSheet, obj);
}
