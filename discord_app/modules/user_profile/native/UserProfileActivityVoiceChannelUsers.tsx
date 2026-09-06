// discord_app/modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx
import util from "../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../utils/NicknameUtils.tsx";
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../stores/PresenceStore.tsx";

const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

require = fn;
function UserRow(user) {
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  let obj = user(8217);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({
    status: PresenceStore.getStatus(user.id),
    isMobileOnline: PresenceStore.isMobileOnline(user.id),
    isVROnline: PresenceStore.isVROnline(user.id),
  }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(504);
  obj.label = NicknameUtilsDefault.getName(channel.guild_id, channel.id, user);
  obj = {
    user,
    avatarDecoration,
    size: user(1178).AvatarSizes.REFRESH_MEDIUM_32,
    guildId: channel.guild_id,
    status,
    isMobileOnline,
    isVROnline,
    autoStatusCutout: true,
  };
  obj.icon = jsx(user(1178).Avatar, {
    user,
    avatarDecoration,
    size: user(1178).AvatarSizes.REFRESH_MEDIUM_32,
    guildId: channel.guild_id,
    status,
    isMobileOnline,
    isVROnline,
    autoStatusCutout: true,
  });
  obj.start = start;
  obj.end = end;
  return jsx(user(5605).TableRow, {
    user,
    avatarDecoration,
    size: user(1178).AvatarSizes.REFRESH_MEDIUM_32,
    guildId: channel.guild_id,
    status,
    isMobileOnline,
    isVROnline,
    autoStatusCutout: true,
  });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  let obj = { title: null, onBack: null, scrollable: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["3xHUJ+"]);
  obj.onBack = onBack;
  obj = {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(start) {
      const item = start.item;
      return (
        <UserRow
          key={item.id}
          user={item}
          channel={item}
          onPress={function onPress() {
            return importDefault(item.id);
          }}
          start={start.start}
          end={start.end}
        />
      );
    },
  };
  obj.children = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(start) {
      const item = start.item;
      return (
        <UserRow
          key={item.id}
          user={item}
          channel={item}
          onPress={function onPress() {
            return importDefault(item.id);
          }}
          start={start.start}
          end={start.end}
        />
      );
    },
  });
  return jsx(UserProfileStackedActionSheetDefault, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(start) {
      const item = start.item;
      return (
        <UserRow
          key={item.id}
          user={item}
          channel={item}
          onPress={function onPress() {
            return importDefault(item.id);
          }}
          start={start.start}
          end={start.end}
        />
      );
    },
  });
}
