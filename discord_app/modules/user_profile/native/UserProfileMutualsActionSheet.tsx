// === Module 12166: MutualFriendRow ===

// Module 12166 (MutualFriendRow)
import ThemesDefault from "Themes" /* 712 */;
import getNicknameDefault from "getNickname" /* 4573 */;
import TableRowInner from "TableRowInner" /* 5480 */;
import GuildIconSizes from "GuildIconSizes" /* 5885 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 5885 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 9614 */;
import ActivityStatusDefault from "ActivityStatus" /* 9788 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 12160 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "sortActivity" /* 4469 */;
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY" /* 8932 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

require = arg1;
function MutualFriendRow(mutualFriend) {
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  let obj = user(8960);
  const avatarDecoration = obj.useAvatarDecoration(user);
  obj1 = user(589);
  const items = [closure_7];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ status: closure_1_7.getStatus(user.id), isMobileOnline: closure_1_7.isMobileOnline(user.id), isVROnline: closure_1_7.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  obj = { user, size: user(1297).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj[1] = callback2(user(1297).Avatar, obj);
  const tmp = callback4();
  obj[2] = getNicknameDefault.getName(guildId, undefined, user);
  obj1 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  obj[3] = callback2(ActivityStatusDefault, obj1);
  obj[4] = start;
  obj[5] = end;
  return callback2(user(5480).TableRow, obj, user.id);
}
class MutualGuildRow {
  constructor(arg0) {
    ({ guild, nick } = global.mutualGuild);
    user = global.user;
    ({ onPress, start, end } = global);
    tmp = closure_11();
    hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
    tmp3 = jsx;
    tmp4 = closure_0;
    tmp5 = closure_2;
    obj = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
    obj = { guild, size: null };
    tmp6 = require("GuildIconSizes");
    obj[1] = require("GuildIconSizes").GuildIconSizes.SMALL_32;
    obj[1] = jsx(tmp6, obj);
    obj[2] = guild.name;
    obj1 = { style: tmp.mutualGuildSubLabel, children: null };
    tmp3Result = hasAvatarForGuildResult;
    tmp7 = jsxs;
    tmp8 = View;
    if (hasAvatarForGuildResult) {
      obj2 = { size: null, user: null, guildId: null };
      obj2[0] = require("Button").AvatarSizes.SIZE_16;
      obj2[1] = user;
      obj2[2] = guild.id;
      tmp3Result = tmp3(require("Button").Avatar, obj2);
    }
    items = [, , ];
    items[0] = tmp3Result;
    tmp3Result1 = null != nick;
    if (tmp3Result1) {
      obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj3[2] = nick;
      tmp3Result1 = tmp3(require("Text").Text, obj3);
    }
    items[1] = tmp3Result1;
    tmp3Result2 = null == nick && hasAvatarForGuildResult;
    if (tmp3Result2) {
      obj4 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj4[2] = user.username;
      tmp3Result2 = tmp3(require("Text").Text, obj4);
    }
    items[2] = tmp3Result2;
    obj1[1] = items;
    obj[3] = tmp7(tmp8, obj1);
    obj[4] = start;
    obj[5] = end;
    return tmp3(require("TableRowInner").TableRow, obj, guild.id);
  }
}
({ View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, loadingState: null, emptyState: null, activityStatusText: null, mutualGuildSubLabel: null };
createCacheKey = { flex: 1, gap: 20, paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[2] = { alignItems: "center" };
let obj1 = { paddingTop: ThemesDefault.space.PX_8, alignItems: "center" };
createCacheKey[3] = { color: ThemesDefault.colors.TEXT_SUBTLE };
let obj2 = { color: ThemesDefault.colors.TEXT_SUBTLE };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj3 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: closure_3 } = user);
  let React;
  const tmp = callback4();
  let obj = React;
  const tmp2 = callback(React.useState(0), 2);
  React = tmp2[1];
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  obj1 = user(9103);
  obj = { pageWidth: tmp2[0], defaultIndex: null, items: null };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj[1] = num;
  let length;
  let tmp3Result = tmp3(12167);
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  obj = { id: "mutual-friends", label: tmp3Result(length), page: null };
  if (null == mutualFriends) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.loadingState;
    obj1[1] = callback2(closure_6, {});
    let tmp10 = callback2(closure_5, obj1);
    let tmp9 = callback2;
  } else if (0 === mutualFriends.length) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.emptyState;
    obj2[1] = callback2(tmp6(12168).NoMutualFriends, {});
    tmp10 = callback2(closure_5, obj2);
    tmp9 = callback2;
  } else {
    tmp9 = callback2;
    const obj3 = { data: null, keyExtractor: null, renderItem: null };
    obj3[0] = mutualFriends;
    obj3[1] = function keyExtractor(user) {
      return user.user.id;
    };
    obj3[2] = function renderItem(item) {
      item = item.item;
      return closure_1_9(closure_1_12, {
        mutualFriend: item,
        guildId: closure_1,
        onPress() {
          return closure_1_2(item.user.id);
        },
        start: item.start,
        end: item.end
      });
    };
    tmp10 = callback2(tmp6(9614).UserProfileStackedActionSheetList, obj3);
  }
  obj[2] = tmp10;
  const items = [obj, ];
  let length1;
  tmp3Result = tmp3(12161);
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj4 = { id: "mutual-guilds", label: tmp3Result(length1), page: null };
  if (null == mutualGuilds) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.loadingState;
    obj5[1] = tmp9(closure_6, {});
    let tmp9Result = tmp9(closure_5, obj5);
  } else if (0 === mutualGuilds.length) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.emptyState;
    obj6[1] = tmp9(tmp6(12162).NoMutualServers, {});
    tmp9Result = tmp9(closure_5, obj6);
  } else {
    const obj7 = { data: null, keyExtractor: null, renderItem: null };
    obj7[0] = mutualGuilds;
    obj7[1] = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj7[2] = function renderItem(item) {
      item = item.item;
      return closure_1_9(closure_1_13, {
        user: item,
        mutualGuild: item,
        onPress() {
          return closure_1_3(item.guild.id);
        },
        start: item.start,
        end: item.end
      });
    };
    tmp9Result = tmp9(tmp6(9614).UserProfileStackedActionSheetList, obj7);
  }
  obj4[2] = tmp9Result;
  items[1] = obj4;
  obj[2] = items;
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  callback = obj.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj8 = { scrollable: true, title: null, children: null };
  const tmp5 = useUserProfileMutualsDefault(user);
  const intl = tmp6(1236).intl;
  obj8[1] = intl.string(user(1236).t["l2/aLi"]);
  const obj9 = { style: tmp.container, onLayout: callback, children: null };
  const tmp3Result1 = UserProfileStackedActionSheetDefault;
  const items1 = [tmp9(closure_5, { children: tmp9(user(12172).Tabs, { state: segmentedControlState }) }), tmp9(user(12174).SegmentedControlPages, { state: segmentedControlState })];
  obj9[2] = items1;
  obj8[2] = callback3(closure_5, obj9);
  return tmp9(tmp3Result1, obj8);
};
export { MutualGuildRow };