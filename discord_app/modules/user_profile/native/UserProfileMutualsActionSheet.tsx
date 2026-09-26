// discord_app/modules/user_profile/native/UserProfileMutualsActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import GuildIcon from "../../guild/native/GuildIcon.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import ActivityStatusDefault from "../../activity_status/native/ActivityStatus.tsx";
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet.tsx";
import useUserProfileMutualsDefault from "../hooks/useUserProfileMutuals.tsx";
import getMutualGuildsLabelDefault from "../utils/getMutualGuildsLabel.tsx";
import getMutualFriendsLabelDefault from "../utils/getMutualFriendsLabel.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";

require = fn;
function MutualFriendRow(mutualFriend) {
  const user = mutualFriend.mutualFriend.user;
  const guildId = mutualFriend.guildId;
  ({ onPress, start, end } = mutualFriend);
  const tmp = closure_11();
  const avatarDecoration = user(7661).useAvatarDecoration(user);
  const obj = user(7661);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({
    status: PresenceStore.getStatus(user.id),
    isMobileOnline: PresenceStore.isMobileOnline(user.id),
    isVROnline: PresenceStore.isVROnline(user.id),
  }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, icon: null, label: null, subLabel: null, start: null, end: null };
  const obj2 = user(504);
  obj3.icon = closure_9(user(1177).Avatar, {
    user,
    size: user(1177).AvatarSizes.REFRESH_MEDIUM_32,
    avatarDecoration,
    status,
    guildId,
    isMobileOnline,
    isVROnline,
    autoStatusCutout: true,
  });
  const obj4 = {
    user,
    size: user(1177).AvatarSizes.REFRESH_MEDIUM_32,
    avatarDecoration,
    status,
    guildId,
    isMobileOnline,
    isVROnline,
    autoStatusCutout: true,
  };
  obj3.label = NicknameUtilsDefault.getName(guildId, undefined, user);
  obj3.subLabel = closure_9(ActivityStatusDefault, { userId: user.id, guildId, textStyle: tmp.activityStatusText });
  obj3.start = start;
  obj3.end = end;
  return closure_9(user(5917).TableRow, obj3, user.id);
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
    obj1 = { guild, size: null };
    tmp6 = closure_1(closure_2[14]);
    obj1.size = closure_0(closure_2[14]).GuildIconSizes.SMALL_32;
    obj.icon = jsx(tmp6, obj1);
    obj.label = guild.name;
    obj7 = { style: tmp.mutualGuildSubLabel, children: null };
    tmp3Result = hasAvatarForGuildResult;
    tmp7 = jsxs;
    tmp8 = View;
    if (hasAvatarForGuildResult) {
      obj8 = { size: null, user: null, guildId: null };
      obj8.size = tmp4(tmp5[11]).AvatarSizes.SIZE_16;
      obj8.user = user;
      obj8.guildId = guild.id;
      tmp3Result = tmp3(tmp4(tmp5[11]).Avatar, obj8);
    }
    items = [, ,];
    items[0] = tmp3Result;
    tmp3Result1 = null != nick;
    if (tmp3Result1) {
      obj9 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj9.children = nick;
      tmp3Result1 = tmp3(tmp4(tmp5[15]).Text, obj9);
    }
    items[1] = tmp3Result1;
    tmp3Result2 = null == nick && hasAvatarForGuildResult;
    if (tmp3Result2) {
      obj10 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj10.children = user.username;
      tmp3Result2 = tmp3(tmp4(tmp5[15]).Text, obj10);
    }
    items[2] = tmp3Result2;
    obj7.children = items;
    obj.subLabel = tmp7(tmp8, obj7);
    obj.start = start;
    obj.end = end;
    return tmp3(closure_0(closure_2[10]).TableRow, obj, guild.id);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const UserProfileSections = fn(7628).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4836);
let obj2 = {
  container: { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 },
  loadingState: null,
  emptyState: null,
  activityStatusText: null,
  mutualGuildSubLabel: null,
};
let obj3 = { flex: 1, gap: 20, paddingTop: nativeDefault.space.PX_8 };
obj2.loadingState = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.emptyState = { alignItems: "center" };
let obj4 = { paddingTop: nativeDefault.space.PX_8, alignItems: "center" };
obj2.activityStatusText = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj5 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.mutualGuildSubLabel = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles.createStyles(obj2);
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
  const obj = noop;
  const tmp5 = useUserProfileMutualsDefault(user);
  const obj3 = { pageWidth: tmp2[0], defaultIndex: null, items: null };
  let num = 0;
  if (user.section === UserProfileSections.MUTUAL_GUILDS) {
    num = 1;
  }
  obj3.defaultIndex = num;
  let length;
  const obj2 = user(9083);
  if (mutualFriends != null) {
    length = mutualFriends.length;
  }
  const obj4 = { id: "mutual-friends", label: getMutualFriendsLabelDefault(length), page: null };
  if (null == mutualFriends) {
    const obj5 = { style: tmp.loadingState, children: closure_9(closure_6, {}) };
    let tmp10 = closure_9(closure_5, obj5);
    let tmp9 = closure_9;
  } else if (0 === mutualFriends.length) {
    const obj6 = { style: tmp.emptyState, children: closure_9(tmp6(12107).NoMutualFriends, {}) };
    tmp10 = closure_9(closure_5, obj6);
    tmp9 = closure_9;
  } else {
    tmp9 = closure_9;
    const obj7 = {
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
          end: start.end,
        });
      },
    };
    tmp10 = closure_9(tmp6(10613).UserProfileStackedActionSheetList, obj7);
  }
  obj4.page = tmp10;
  const items = [obj4];
  let length1;
  const tmp3Result = getMutualFriendsLabelDefault;
  if (mutualGuilds != null) {
    length1 = mutualGuilds.length;
  }
  const obj8 = { id: "mutual-guilds", label: getMutualGuildsLabelDefault(length1), page: null };
  if (null == mutualGuilds) {
    const obj9 = { style: tmp.loadingState, children: tmp9(closure_6, {}) };
    let tmp9Result = tmp9(closure_5, obj9);
  } else if (0 === mutualGuilds.length) {
    const obj10 = { style: tmp.emptyState, children: tmp9(tmp6(12101).NoMutualServers, {}) };
    tmp9Result = tmp9(closure_5, obj10);
  } else {
    const obj11 = {
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
          end: start.end,
        });
      },
    };
    tmp9Result = tmp9(tmp6(10613).UserProfileStackedActionSheetList, obj11);
  }
  obj8.page = tmp9Result;
  items[1] = obj8;
  obj3.items = items;
  const segmentedControlState = obj2.useSegmentedControlState(obj3);
  const callback = obj.useCallback((nativeEvent) => {
    closure_4(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj12 = { scrollable: true, title: null, children: null };
  const tmp3Result3 = getMutualGuildsLabelDefault;
  const intl = tmp6(1115).intl;
  obj12.title = intl.string(user(1115).t["l2/aLi"]);
  const obj13 = { style: tmp.container, onLayout: callback, children: null };
  const tmp3Result4 = UserProfileStackedActionSheetDefault;
  const items1 = [
    tmp9(closure_5, { children: tmp9(user(12111).Tabs, { state: segmentedControlState }) }),
    tmp9(user(12113).SegmentedControlPages, { state: segmentedControlState }),
  ];
  obj13.children = items1;
  obj12.children = closure_10(closure_5, obj13);
  return tmp9(tmp3Result4, obj12);
}
export { MutualGuildRow };
