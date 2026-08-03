// === Module 10354: memoResult1 ===

// Module 10354 (memoResult1)
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { mainIdentity: { flexDirection: "row", alignItems: "center" }, primaryAvatar: null, mainTag: null };
obj = { marginRight: require("Themes").space.PX_4 };
obj[1] = obj;
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT, fontSize: 12 };
obj[2] = createCacheKey;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((height) => {
  let guildId;
  let user;
  ({ guildId, user } = height);
  const tmp = callback2();
  let obj = importDefault(4445);
  let nickname = obj.getNickname(guildId, undefined, user);
  if (nickname == null) {
    nickname = tmp2(4094).getGlobalName(user);
    const tmp2Result = tmp2(4094);
  }
  const hasAvatarForGuildResult = user.hasAvatarForGuild(guildId);
  obj = { style: { height: height.contentHeight }, children: null };
  const items = [callback(importDefault(9612), { user, nick: nickname }), ];
  if (hasAvatarForGuildResult) {
    obj = { style: null, children: null };
    obj[0] = tmp.mainIdentity;
    let tmp8Result = null;
    if (hasAvatarForGuildResult) {
      const obj1 = { size: null, style: null, user: null, guildId: "Array" };
      obj1[0] = require(1297) /* Button */.AvatarSizes.SIZE_16;
      obj1[1] = tmp.primaryAvatar;
      obj1[2] = user;
      tmp8Result = tmp8(require(1297) /* Button */.Avatar, obj1);
    }
    const items1 = [tmp8Result, ];
    const obj2 = { user: null, usernameStyle: null, hideBotTag: true };
    obj2[0] = user;
    obj2[1] = tmp.mainTag;
    items1[1] = tmp8(tmp2(9612), obj2);
    obj[1] = items1;
    let tmp6Result = tmp6(tmp7, obj);
  } else {
    tmp6Result = null;
  }
  items[1] = tmp6Result;
  obj[1] = items;
  return closure_6(View, obj);
});
const metroImportAll = memoResult;
const memoResult1 = importAllResult.memo(function DetailedGuildIdentityUserRow(arrow) {
  let accessibilityLabel;
  let accessibilityRole;
  let accessibilityState;
  let contentHeight;
  let deprecatedFormRow;
  let disabled;
  let end;
  let guildId;
  let leading;
  let onPress;
  let require;
  let start;
  let subLabel;
  let trailing;
  ({ accessibilityLabel, contentHeight, deprecatedFormRow } = arrow);
  if (deprecatedFormRow === undefined) {
    deprecatedFormRow = false;
  }
  ({ disabled, guildId, leading, onPress, trailing, userId: require, subLabel, accessibilityRole, accessibilityState } = arrow);
  let SMALL = dependencyMap;
  ({ end, start } = arrow);
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUser(closure_0));
  if (null == stateFromStores) {
    return null;
  } else if (deprecatedFormRow) {
    obj = { accessibilityLabel: null, disabled: null, leading: null, label: null, onPress: null, subLabel: null, trailing: null, accessibilityRole: null, accessibilityState: null };
    obj[0] = accessibilityLabel;
    obj[1] = disabled;
    if (leading == null) {
      disabled = { source: null, size: null };
      disabled[0] = stateFromStores.getAvatarSource(guildId);
      SMALL = tmp(1297).AvatarSizes.SMALL;
      disabled[1] = SMALL;
      leading = tmp2(tmp(1297).Avatar, disabled);
    }
    obj[2] = leading;
    leading = closure_8;
    obj = { contentHeight: null, user: null, guildId: null };
    obj[0] = contentHeight;
    obj[1] = stateFromStores;
    obj[2] = guildId;
    obj[3] = tmp2(closure_8, obj);
    obj[4] = onPress;
    obj[5] = subLabel;
    obj[6] = trailing;
    obj[7] = accessibilityRole;
    obj[8] = accessibilityState;
    let tmp2Result = tmp2(tmp(7765).FormRow, obj);
  } else {
    const obj1 = { accessibilityLabel: null, arrow: null, disabled: null, end: null, icon: null, label: null, onPress: null, start: null, subLabel: null, trailing: null, accessibilityRole: null, accessibilityState: null };
    obj1[0] = accessibilityLabel;
    obj1[1] = arrow.arrow;
    obj1[2] = disabled;
    obj1[3] = end;
    tmp2Result = leading;
    if (leading == null) {
      const obj2 = { source: null, size: null };
      obj2[0] = stateFromStores.getAvatarSource(guildId);
      obj2[1] = tmp(1297).AvatarSizes.SMALL;
      tmp2Result = tmp2(tmp(1297).Avatar, obj2);
    }
    obj1[4] = tmp2Result;
    const obj3 = { contentHeight: null, user: null, guildId: null };
    obj3[0] = contentHeight;
    obj3[1] = stateFromStores;
    obj3[2] = guildId;
    obj1[5] = tmp2(closure_8, obj3);
    obj1[6] = onPress;
    obj1[7] = start;
    obj1[8] = subLabel;
    obj1[9] = trailing;
    obj1[10] = accessibilityRole;
    obj1[11] = accessibilityState;
    tmp2Result = tmp2(tmp(5286).TableRow, obj1);
  }
});
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/guild_settings/native/DetailedGuildIdentityUserRow.tsx");

export default memoResult1;
export const DetailedGuildIdentityUser = memoResult;