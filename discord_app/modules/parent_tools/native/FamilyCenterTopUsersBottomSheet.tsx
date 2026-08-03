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
    let obj = require(5858) /* getEmptyActivityFormatter */;
    const topUserOrGuildDescription = obj.getTopUserOrGuildDescription(userActivity.dms_sent, userActivity.call_count);
    obj = { label: null, subLabel: null, icon: null };
    obj[0] = importDefault(4032).getName(user);
    obj[1] = topUserOrGuildDescription;
    obj = { size: null, user: null, guildId: "Array" };
    obj[0] = require(1297) /* Button */.AvatarSizes.SMALL;
    obj[1] = user;
    obj[2] = callback(require(1297) /* Button */.Avatar, obj);
    return callback(require(5224) /* TableRowInner */.TableRow, obj);
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ header: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopUsersBottomSheet.tsx");

export default function FamilyCenterTopUsersBottomSheet(topUserActivities) {
  topUserActivities = topUserActivities.topUserActivities;
  let obj = { children: null };
  obj = { variant: "text-md/bold", style: callback3().header, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(importDefault(2225).BxbvS7);
  const items = [callback(require(4189) /* Text */.Text, obj), ];
  obj = { hasIcons: true, children: null };
  obj[1] = topUserActivities.map((userActivity) => callback(closure_7, { userActivity }, userActivity.user_id));
  items[1] = callback(require(5558) /* TableRowGroupTitle */.TableRowGroup, obj);
  obj[0] = items;
  return callback2(require(5555) /* ActionSheet */.ActionSheet, obj);
};