// discord_app/modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx
import "noop";
import sortActivity from "sortActivity";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getNickname } from "../../../utils/NicknameUtils.tsx";
import { UserProfileStackedActionSheet } from "UserProfileStackedActionSheet.tsx";

const require = arg1;
function UserRow(user) {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  let obj = user(8735);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [sortActivity];
  const stateFromStoresObject = user(589).useStateFromStoresObject(items, () => ({ status: outer1_3.getStatus(user.id), isMobileOnline: outer1_3.isMobileOnline(user.id), isVROnline: outer1_3.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(589);
  obj[1] = getNickname.getName(channel.guild_id, channel.id, user);
  obj = { user, avatarDecoration, size: null, guildId: null, status: null, isMobileOnline: null, isVROnline: null, autoStatusCutout: true };
  obj[2] = user(1297).AvatarSizes.REFRESH_MEDIUM_32;
  obj[3] = channel.guild_id;
  obj[4] = status;
  obj[5] = isMobileOnline;
  obj[6] = isVROnline;
  obj[2] = jsx(user(1297).Avatar, { user, avatarDecoration, size: null, guildId: null, status: null, isMobileOnline: null, isVROnline: null, autoStatusCutout: true });
  obj[3] = start;
  obj[4] = end;
  return jsx(user(5315).TableRow, { user, avatarDecoration, size: null, guildId: null, status: null, isMobileOnline: null, isVROnline: null, autoStatusCutout: true });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  let importDefault;
  let onBack;
  let require;
  let users;
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  let obj = { title: null, onBack: null, scrollable: true, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["3xHUJ+"]);
  obj[1] = onBack;
  obj = {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_4(outer1_5, {
        user: item,
        channel: item,
        onPress() {
          return outer1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  };
  obj[3] = jsx(UserProfileStackedActionSheet /* UserProfileStackedActionSheet */.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_4(outer1_5, {
        user: item,
        channel: item,
        onPress() {
          return outer1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  });
  return jsx(UserProfileStackedActionSheet, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return outer1_4(outer1_5, {
        user: item,
        channel: item,
        onPress() {
          return outer1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  });
};