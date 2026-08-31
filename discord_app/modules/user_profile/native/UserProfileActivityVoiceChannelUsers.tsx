// discord_app/modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import getNicknameDefault from "../../../utils/NicknameUtils.tsx";
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet.tsx";
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet.tsx";
import closure_3 from "../../../stores/PresenceStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function UserRow(user) {
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  let obj = user(8867);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [closure_3];
  const stateFromStoresObject = user(589).useStateFromStoresObject(items, () => ({ status: closure_1_3.getStatus(user.id), isMobileOnline: closure_1_3.isMobileOnline(user.id), isVROnline: closure_1_3.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  obj = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(589);
  obj[1] = getNicknameDefault.getName(channel.guild_id, channel.id, user);
  obj = { user, avatarDecoration, size: user(1297).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true };
  obj[2] = jsx(user(1297).Avatar, { user, avatarDecoration, size: user(1297).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  obj[3] = start;
  obj[4] = end;
  return jsx(user(5567).TableRow, { user, avatarDecoration, size: user(1297).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
}
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  let obj = { title: null, onBack: null, scrollable: true, children: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["3xHUJ+"]);
  obj[1] = onBack;
  obj = {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_1_4(closure_1_5, {
        user: item,
        channel: item,
        onPress() {
          return closure_1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  };
  obj[3] = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_1_4(closure_1_5, {
        user: item,
        channel: item,
        onPress() {
          return closure_1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  });
  return jsx(UserProfileStackedActionSheetDefault, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(item) {
      item = item.item;
      return closure_1_4(closure_1_5, {
        user: item,
        channel: item,
        onPress() {
          return closure_1_1(item.id);
        },
        start: item.start,
        end: item.end
      }, item.id);
    }
  });
};