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
    let obj = require("../FamilyCenterUtils.tsx") /* getEmptyActivityFormatter */;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = require("../../../utils/UserUtils.tsx").getName(user);
    obj[1] = topUserOrGuildDescription;
    obj = { size: null, user: null, guildId: "disabled" };
    obj[0] = require("../../../design/void/native.tsx") /* Button */.AvatarSizes.SMALL;
    obj[1] = user;
    obj[2] = callback(require("../../../design/void/native.tsx") /* Button */.Avatar, obj);
    return callback(require("../../../design/components/TableRow/native/TableRow.native.tsx") /* TableRowInner */.TableRow, obj);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../FamilyCenter.messages.js").BxbvS7);
  const items = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: null };
  obj[1] = topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id));
  items[1] = callback(require("../../../design/components/TableRow/native/TableRowGroup.native.tsx") /* TableRowGroupTitle */.TableRowGroup, obj);
  obj[0] = items;
  return callback2(require("../../../design/components/Sheet/native/ActionSheet.native.tsx") /* ActionSheet */.ActionSheet, obj);
};