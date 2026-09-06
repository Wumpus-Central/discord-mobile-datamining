// === Module 12608: UserProfileMutualsActionSheet ===

// Module 12608 (UserProfileMutualsActionSheet)
import nativeDefault from "native" /* 576 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import GuildIcon from "GuildIcon" /* 5584 */;
import TableRow from "TableRow" /* 5605 */;
import ActivityStatusDefault from "ActivityStatus" /* 10876 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 11151 */;
import useUserProfileMutualsDefault from "useUserProfileMutuals" /* 12602 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4600 */;

require = fn;
function MutualFriendRow(mutualFriend) {
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  let obj = user(8217);
  const avatarDecoration = obj.useAvatarDecoration(user);
  let obj1 = user(504);
  const items = [PresenceStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  obj = { user, size: user(1178).AvatarSizes.REFRESH_MEDIUM_32, avatarDecoration, status, guildId, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj.icon = closure_9(user(1178).Avatar, obj);
  const tmp = closure_11();
  obj.label = NicknameUtilsDefault.getName(guildId, undefined, user);
  obj1 = { userId: user.id, guildId, textStyle: tmp.activityStatusText };
  obj.subLabel = closure_9(ActivityStatusDefault, obj1);
  obj.start = start;
  obj.end = end;
  return closure_9(user(5605).TableRow, obj, user.id);
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
    tmp6 = closure_1(closure_2[14]);
    obj.size = closure_0(closure_2[14]).GuildIconSizes.SMALL_32;
    obj.icon = jsx(tmp6, obj);
    obj.label = guild.name;
    obj1 = { style: tmp.mutualGuildSubLabel, children: null };
    tmp3Result = hasAvatarForGuildResult;
    tmp7 = jsxs;
    tmp8 = View;
    if (hasAvatarForGuildResult) {
      obj2 = { size: null, user: null, guildId: null };
      obj2.size = tmp4(tmp5[11]).AvatarSizes.SIZE_16;
      obj2.user = user;
      obj2.guildId = guild.id;
      tmp3Result = tmp3(tmp4(tmp5[11]).Avatar, obj2);
    }
    items = [, , ];
    items[0] = tmp3Result;
    tmp3Result1 = null != nick;
    if (tmp3Result1) {
      obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj3.children = nick;
      tmp3Result1 = tmp3(tmp4(tmp5[15]).Text, obj3);
    }
    items[1] = tmp3Result1;
    tmp3Result2 = null == nick && hasAvatarForGuildResult;
    if (tmp3Result2) {
      obj4 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj4.children = user.username;
      tmp3Result2 = tmp3(tmp4(tmp5[15]).Text, obj4);
    }
    items[2] = tmp3Result2;
    obj1.children = items;
    obj.subLabel = tmp7(tmp8, obj1);
    obj.start = start;
    obj.end = end;
    return tmp3(closure_0(closure_2[10]).TableRow, obj, guild.id);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(8183).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, loadingState: null, emptyState: null, activityStatusText: null, mutualGuildSubLabel: null };
createStyles = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
createStyles.emptyState = { alignItems: "center" };
let obj1 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
createStyles.activityStatusText = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles.mutualGuildSubLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileMutualsActionSheet.tsx");

export default function UserProfileMutualsActionSheet(user) {
  user = user.user;
  ({ guildId: importDefault, onPressMutualFriend: dependencyMap, onPressMutualGuild: _slicedToArray } = user);
  noop = undefined;
  const tmp = closure_11();
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  noop = tmp2[1];
  ({ mutualFriends, mutualGuilds } = useUserProfileMutualsDefault(user));
  let obj1 = user(9792);
  let obj = { pageWidth: tmp2[0], defaultIndex: null, items: null };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj.defaultIndex = num;
  let length;
  let tmp3Result = tmp3(12609);
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  obj = { id: "mutual-friends", label: tmp3Result(length), page: null };
  if (null == mutualFriends) {
    obj1 = { style: tmp.loadingState, children: closure_9(closure_6, {}) };
    let tmp10 = closure_9(closure_5, obj1);
    let tmp9 = closure_9;
  } else if (0 === mutualFriends.length) {
    const obj2 = { style: tmp.emptyState, children: closure_9(tmp6(12610).NoMutualFriends, {}) };
    tmp10 = closure_9(closure_5, obj2);
    tmp9 = closure_9;
  } else {
    tmp9 = closure_9;
    const obj3 = {
      data: mutualFriends,
      keyExtractor(user) {
          return user.user.id;
        },
      renderItem(start) {
          const item = start.item;
          return closure_1_9(MutualFriendRow, {
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
    tmp10 = closure_9(tmp6(11151).UserProfileStackedActionSheetList, obj3);
  }
  obj.page = tmp10;
  const items = [obj, ];
  let length1;
  tmp3Result = tmp3(12603);
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj4 = { id: "mutual-guilds", label: tmp3Result(length1), page: null };
  if (null == mutualGuilds) {
    const obj5 = { style: tmp.loadingState, children: tmp9(closure_6, {}) };
    let tmp9Result = tmp9(closure_5, obj5);
  } else if (0 === mutualGuilds.length) {
    const obj6 = { style: tmp.emptyState, children: tmp9(tmp6(12604).NoMutualServers, {}) };
    tmp9Result = tmp9(closure_5, obj6);
  } else {
    const obj7 = {
      data: mutualGuilds,
      keyExtractor(guild) {
          return guild.guild.id;
        },
      renderItem(start) {
          const item = start.item;
          return closure_1_9(MutualGuildRow, {
            user: item,
            mutualGuild: item,
            onPress() {
              return _slicedToArray(item.guild.id);
            },
            start: start.start,
            end: start.end
          });
        }
    };
    tmp9Result = tmp9(tmp6(11151).UserProfileStackedActionSheetList, obj7);
  }
  obj4.page = tmp9Result;
  items[1] = obj4;
  obj.items = items;
  const segmentedControlState = obj1.useSegmentedControlState(obj);
  const callback = obj.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj8 = { scrollable: true, title: null, children: null };
  const tmp5 = useUserProfileMutualsDefault(user);
  const intl = tmp6(1114).intl;
  obj8.title = intl.string(user(1114).t["l2/aLi"]);
  const obj9 = { style: tmp.container, onLayout: callback, children: null };
  const tmp3Result1 = UserProfileStackedActionSheetDefault;
  const items1 = [tmp9(closure_5, { children: tmp9(user(12614).Tabs, { state: segmentedControlState }) }), tmp9(user(12616).SegmentedControlPages, { state: segmentedControlState })];
  obj9.children = items1;
  obj8.children = closure_10(closure_5, obj9);
  return tmp9(tmp3Result1, obj8);
};
export { MutualGuildRow };