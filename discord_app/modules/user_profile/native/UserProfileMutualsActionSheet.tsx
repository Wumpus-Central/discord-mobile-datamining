// discord_app/modules/user_profile/native/UserProfileMutualsActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import getNoMutualFriendsSource from "getNoMutualFriendsSource";
import get_ActivityIndicator from "useSegmentedControlState";
import sortActivity from "sortActivity";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "getMutualGuildsLabel";
import createCacheKey from "createCacheKey";
import { getNickname } from "../../../utils/NicknameUtils.tsx";
import { ActivityStatus } from "../../activity_status/native/ActivityStatus.tsx";
import { useUserProfileMutuals } from "../hooks/useUserProfileMutuals.tsx";
import { UserProfileStackedActionSheet } from "UserProfileStackedActionSheet.tsx";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
function MutualFriendRow(mutualFriend) {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  let obj = user(4797);
  const avatarDecoration = obj.useAvatarDecoration(user);
  let obj1 = user(589);
  const items = [sortActivity];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ status: outer1_7.getStatus(user.id), isMobileOnline: outer1_7.isMobileOnline(user.id), isVROnline: outer1_7.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  obj = { user, size: null, avatarDecoration: null, status: null, guildId: null, isMobileOnline: null, isVROnline: null, autoStatusCutout: true };
  obj[1] = user(1297).AvatarSizes.REFRESH_MEDIUM_32;
  obj[2] = avatarDecoration;
  obj[3] = status;
  obj[4] = guildId;
  obj[5] = isMobileOnline;
  obj[6] = isVROnline;
  obj[1] = callback2(user(1297).Avatar, obj);
  const tmp = createCacheKey();
  obj[2] = getNickname.getName(guildId, undefined, user);
  obj1 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  obj[3] = callback2(ActivityStatus, obj1);
  obj[4] = start;
  obj[5] = end;
  return callback2(user(6291).TableRow, obj, user.id);
}
class MutualGuildRow {
  constructor(arg0) {
    ({ guild, nick } = global.mutualGuild);
    user = global.user;
    ({ onPress, start, end } = global);
    tmp = jsxs();
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
createCacheKey = { flex: 1, gap: 20, paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: require("Themes").space.PX_8, alignItems: "center" };
createCacheKey[2] = { alignItems: "center" };
let obj1 = { paddingTop: require("Themes").space.PX_8, alignItems: "center" };
createCacheKey[3] = { color: require("Themes").colors.TEXT_SUBTLE };
let obj2 = { color: require("Themes").colors.TEXT_SUBTLE };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let mutualFriends;
  let mutualGuilds;
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: _slicedToArray } = user);
  let React;
  const tmp = createCacheKey();
  let obj = React;
  const tmp2 = callback(React.useState(0), 2);
  React = tmp2[1];
  ({ mutualFriends, mutualGuilds } = useUserProfileMutuals(user));
  let obj1 = user(8799);
  obj = { pageWidth: tmp2[0], defaultIndex: null, items: null };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj[1] = num;
  let length;
  let tmp3Result = tmp3(11778);
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
    obj2[1] = callback2(tmp6(11779).NoMutualFriends, {});
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
      return outer1_9(outer1_12, {
        mutualFriend: item,
        guildId: closure_1,
        onPress() {
          return outer1_2(item.user.id);
        },
        start: item.start,
        end: item.end
      });
    };
    tmp10 = callback2(tmp6(9450).UserProfileStackedActionSheetList, obj3);
  }
  obj[2] = tmp10;
  const items = [obj, ];
  let length1;
  tmp3Result = tmp3(11772);
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
    obj6[1] = tmp9(tmp6(11773).NoMutualServers, {});
    tmp9Result = tmp9(closure_5, obj6);
  } else {
    const obj7 = { data: null, keyExtractor: null, renderItem: null };
    obj7[0] = mutualGuilds;
    obj7[1] = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj7[2] = function renderItem(item) {
      item = item.item;
      return outer1_9(outer1_13, {
        user: item,
        mutualGuild: item,
        onPress() {
          return outer1_3(item.guild.id);
        },
        start: item.start,
        end: item.end
      });
    };
    tmp9Result = tmp9(tmp6(9450).UserProfileStackedActionSheetList, obj7);
  }
  obj4[2] = tmp9Result;
  items[1] = obj4;
  obj[2] = items;
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  callback = obj.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj8 = { scrollable: true, title: null, children: null };
  const tmp5 = useUserProfileMutuals(user);
  const intl = tmp6(1236).intl;
  obj8[1] = intl.string(user(1236).t["l2/aLi"]);
  const obj9 = { style: tmp.container, onLayout: callback, children: null };
  const tmp3Result1 = UserProfileStackedActionSheet;
  const items1 = [tmp9(closure_5, { children: tmp9(user(11783).Tabs, { state: segmentedControlState }) }), tmp9(user(11785).SegmentedControlPages, { state: segmentedControlState })];
  obj9[2] = items1;
  obj8[2] = callback3(closure_5, obj9);
  return tmp9(tmp3Result1, obj8);
};
export { MutualGuildRow };