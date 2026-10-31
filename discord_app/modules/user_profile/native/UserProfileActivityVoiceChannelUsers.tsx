// === Module 14878: UserProfileActivityVoiceChannelUsers ===

// Module 14878 (UserProfileActivityVoiceChannelUsers)
import util from "util" /* 1113 */;
import NicknameUtilsDefault from "NicknameUtils" /* 6041 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 11411 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 5761 */;

const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

require = fn;
function UserRow(user) {
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  const avatarDecoration = user(6853).useAvatarDecoration(user, channel.guild_id);
  const obj = user(6853);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(504);
  obj3.label = NicknameUtilsDefault.getName(channel.guild_id, channel.id, user);
  obj3.icon = jsx(user(1187).Avatar, { user, avatarDecoration, size: user(1187).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  obj3.start = start;
  obj3.end = end;
  return jsx(user(6975).TableRow, { onPress, label: null, icon: null, start: null, end: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  const obj = { title: null, onBack: null, scrollable: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["3xHUJ+"]);
  obj.onBack = onBack;
  obj.children = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(start) {
      const item = start.item;
      return <UserRow key={item.id} user={item} channel={item} onPress={function onPress() {
        return importDefault(item.id);
      }} start={start.start} end={start.end} />;
    }
  });
  return jsx(UserProfileStackedActionSheetDefault, { title: null, onBack: null, scrollable: true, children: null });
};