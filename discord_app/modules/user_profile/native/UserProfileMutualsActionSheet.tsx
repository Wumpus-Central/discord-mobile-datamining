// === Module 14430: UserProfileMutualsActionSheet ===

// Module 14430 (UserProfileMutualsActionSheet)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5751 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6173 */;
import GuildIcon from "GuildIcon" /* 7020 */;
import TableRow from "TableRow" /* 7038 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9069 */;
import ActivityStatusDefault from "ActivityStatus" /* 10864 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 11553 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 14424 */;
import getMutualGuildsLabelDefault from "getMutualGuildsLabel" /* 14425 */;
import getMutualFriendsLabelDefault from "getMutualFriendsLabel" /* 14431 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 5890 */;

require = fn;
function MutualFriendRow(mutualFriend) {
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  const tmp = closure_9();
  const avatarDecoration = user(6908).useAvatarDecoration(user);
  const obj = user(6908);
  items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  const obj2 = user(504);
  obj3.icon = closure_7(user(1187).Avatar, { user, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true });
  const obj4 = { user, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj3.label = NicknameUtilsDefault.getName(guildId, undefined, user);
  obj3.subLabel = closure_7(ActivityStatusDefault, { userId: user.id, guildId, textStyle: tmp.activityStatusText });
  obj3.start = start;
  obj3.end = end;
  return closure_7(user(7038).TableRow, obj3, user.id);
}
class MutualGuildRow {
  constructor(arg0) {
    ({ guild, nick } = global.mutualGuild);
    user = global.user;
    ({ onPress, start, end } = global);
    tmp = closure_9();
    hasAvatarForGuildResult = user.hasAvatarForGuild(guild.id);
    tmp3 = jsx;
    tmp4 = closure_0;
    tmp5 = closure_2;
    obj = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
    obj1 = { guild, size: null };
    tmp6 = closure_1(closure_2[13]);
    obj1.size = closure_0(closure_2[13]).GuildIconSizes.SMALL_32;
    obj.icon = jsx(tmp6, obj1);
    obj.label = guild.name;
    obj7 = { style: tmp.mutualGuildSubLabel, children: null };
    tmp3Result = hasAvatarForGuildResult;
    tmp7 = jsxs;
    tmp8 = View;
    if (hasAvatarForGuildResult) {
      obj8 = { size: null, user: null, guildId: null };
      obj8.size = tmp4(tmp5[10]).AvatarSizes.SIZE_16;
      obj8.user = user;
      obj8.guildId = guild.id;
      tmp3Result = tmp3(tmp4(tmp5[10]).Avatar, obj8);
    }
    items = [, , ];
    items[0] = tmp3Result;
    tmp3Result1 = null != nick;
    if (tmp3Result1) {
      obj9 = { variant: "body-xs/medium", color: "text-subtle", children: null };
      obj9.children = nick;
      tmp3Result1 = tmp3(tmp4(tmp5[14]).Text, obj9);
    }
    items[1] = tmp3Result1;
    tmp3Result2 = null == nick && hasAvatarForGuildResult;
    if (tmp3Result2) {
      obj10 = { variant: "body-xs/medium", color: "text-subtle", children: null };
      obj10.children = user.username;
      tmp3Result2 = tmp3(tmp4(tmp5[14]).Text, obj10);
    }
    items[2] = tmp3Result2;
    obj7.children = items;
    obj.subLabel = tmp7(tmp8, obj7);
    obj.start = start;
    obj.end = end;
    return tmp3(closure_0(closure_2[9]).TableRow, obj, guild.id);
  }
}
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4 } = get_ActivityIndicator);
const UserProfileSections = fn(8825).UserProfileSections;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5140);
let obj2 = { container: { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 }, loadingState: null, emptyState: null, activityStatusText: null, mutualGuildSubLabel: null };
let obj3 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
obj2.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.emptyState = { alignItems: "center" };
let obj4 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.activityStatusText = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.mutualGuildSubLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: closure_3 } = user);
  const tmp = closure_9();
  const tmp4 = useMeasuredLayoutDefault();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  const tmp5 = useUserProfileMutualsDefault(user);
  const obj2 = { pageWidth: num, defaultIndex: null, items: null };
  let num2 = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num2 = 1;
  }
  obj2.defaultIndex = num2;
  let length;
  const obj = user(9059);
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  const obj3 = { id: "mutual-friends", label: getMutualFriendsLabelDefault(length), page: null };
  if (null == mutualFriends) {
    const obj4 = { style: tmp.loadingState, children: closure_7(closure_4, {}) };
    let tmp10 = closure_7(closure_3, obj4);
    let tmp9 = closure_7;
  } else if (0 === mutualFriends.length) {
    const obj5 = { style: tmp.emptyState, children: closure_7(tmp6(14432).NoMutualFriends, {}) };
    tmp10 = closure_7(closure_3, obj5);
    tmp9 = closure_7;
  } else {
    tmp9 = closure_7;
    const obj6 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(start) {
          const item = start.item;
          return closure_1_7(MutualFriendRow, {
            mutualFriend: item,
            guildId,
            onPress() {
              return dependencyMap(item.user.id);
            },
            start: start.start,
            end: start.end
          });
        }
    };
    tmp10 = closure_7(tmp6(11553).UserProfileStackedActionSheetList, obj6);
  }
  obj3.page = tmp10;
  items = [obj3, ];
  let length1;
  const tmp2Result = getMutualFriendsLabelDefault;
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj7 = { id: "mutual-guilds", label: getMutualGuildsLabelDefault(length1), page: null };
  if (null == mutualGuilds) {
    const obj8 = { style: tmp.loadingState, children: tmp9(closure_4, {}) };
    let tmp9Result = tmp9(closure_3, obj8);
  } else if (0 === mutualGuilds.length) {
    const obj9 = { style: tmp.emptyState, children: tmp9(tmp6(14426).NoMutualServers, {}) };
    tmp9Result = tmp9(closure_3, obj9);
  } else {
    const obj10 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(start) {
          const item = start.item;
          return closure_1_7(MutualGuildRow, {
            user: item,
            mutualGuild: item,
            onPress() {
              return closure_2_3(item.guild.id);
            },
            start: start.start,
            end: start.end
          });
        }
    };
    tmp9Result = tmp9(tmp6(11553).UserProfileStackedActionSheetList, obj10);
  }
  obj7.page = tmp9Result;
  items[1] = obj7;
  obj2.items = items;
  const segmentedControlState = obj.useSegmentedControlState(obj2);
  const obj11 = { scrollable: true, title: null, children: null };
  const tmp2Result3 = getMutualGuildsLabelDefault;
  const intl = tmp6(1113).intl;
  obj11.title = intl.string(user(1113).t["l2/aLi"]);
  const obj12 = { style: tmp.container, ref, onLayout, children: null };
  const tmp2Result4 = UserProfileStackedActionSheetDefault;
  const items1 = [tmp9(closure_3, { children: tmp9(user(12342).Tabs, { state: segmentedControlState }) }), tmp9(user(14436).SegmentedControlPages, { state: segmentedControlState })];
  obj12.children = items1;
  obj11.children = closure_8(closure_3, obj12);
  return tmp9(tmp2Result4, obj11);
};
export { MutualGuildRow };