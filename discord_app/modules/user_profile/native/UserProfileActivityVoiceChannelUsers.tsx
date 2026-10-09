// === Module 13099: UserProfileActivityVoiceChannelUsers ===

// Module 13099 (UserProfileActivityVoiceChannelUsers)
import util from "util" /* 1126 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5406 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 10495 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 5107 */;

const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserRow(user) {
  const cResult = user(576).c(20);
  user = user.user;
  ({ channel, onPress, start, end } = user);
  const obj = user(576);
  const avatarDecoration = user(6060).useAvatarDecoration(user, channel.guild_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      return { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = user(6060);
  const stateFromStoresObject = user(504).useStateFromStoresObject(first, tmp7);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (cResult[3] === channel.guild_id) {
    if (cResult[4] === channel.id) {
      if (cResult[5] === user) {
        let tmp9 = cResult[6];
      }
      if (cResult[7] === avatarDecoration) {
        if (cResult[8] === channel.guild_id) {
          if (cResult[9] === isMobileOnline) {
            if (cResult[10] === isVROnline) {
              if (cResult[11] === status) {
                if (cResult[12] === user) {
                  let tmp11 = cResult[13];
                }
                if (cResult[14] === end) {
                  if (cResult[15] === onPress) {
                    if (cResult[16] === start) {
                      if (cResult[17] === tmp9) {
                        if (cResult[18] === tmp11) {
                          let tmp14 = cResult[19];
                        }
                        return tmp14;
                      }
                    }
                  }
                }
                const obj3 = { onPress, label: tmp9, icon: tmp11, start, end };
                const tmp16 = jsx(tmp(6186).TableRow, { onPress, label: tmp9, icon: tmp11, start, end });
                cResult[14] = end;
                cResult[15] = onPress;
                cResult[16] = start;
                cResult[17] = tmp9;
                cResult[18] = tmp11;
                cResult[19] = tmp16;
                tmp14 = tmp16;
              }
            }
          }
        }
      }
      const obj5 = { user, avatarDecoration, size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true };
      const tmp13 = jsx(tmp(1200).Avatar, { user, avatarDecoration, size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
      cResult[7] = avatarDecoration;
      cResult[8] = channel.guild_id;
      cResult[9] = isMobileOnline;
      cResult[10] = isVROnline;
      cResult[11] = status;
      cResult[12] = user;
      cResult[13] = tmp13;
      tmp11 = tmp13;
    }
  }
  const tmpResult = user(504);
  const name = NicknameUtilsDefault.getName(channel.guild_id, channel.id, user);
  cResult[3] = channel.guild_id;
  cResult[4] = channel.id;
  cResult[5] = user;
  cResult[6] = name;
  tmp9 = name;
}) : (function UserRow(user) {
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  const avatarDecoration = user(6060).useAvatarDecoration(user, channel.guild_id);
  const obj = user(6060);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(504);
  obj3.label = NicknameUtilsDefault.getName(channel.guild_id, channel.id, user);
  obj3.icon = jsx(user(1200).Avatar, { user, avatarDecoration, size: user(1200).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  obj3.start = start;
  obj3.end = end;
  return jsx(user(6186).TableRow, { onPress, label: null, icon: null, start: null, end: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityVoiceChannelUsers(arg0) {
  const cResult = channel(576).c(11);
  ({ users, channel } = arg0);
  ({ onBack, onPressUser } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = channel(1126).intl;
    const stringResult = intl.string(channel(1126).t["3xHUJ+"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(id) {
      return id.id;
    };
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === channel) {
    if (cResult[3] === onPressUser) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      if (cResult[6] === users) {
        let tmp8 = cResult[7];
      }
      if (cResult[8] === onBack) {
        if (cResult[9] === tmp8) {
          let tmp11 = cResult[10];
        }
        return tmp11;
      }
      const obj2 = { title: first, onBack, scrollable: true, children: tmp8 };
      const tmp14 = jsx(onPressUser(10495), { title: first, onBack, scrollable: true, children: tmp8 });
      cResult[8] = onBack;
      cResult[9] = tmp8;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { data: users, keyExtractor: tmp6, renderItem: tmp7 };
    const tmp10 = jsx(channel(10495).UserProfileStackedActionSheetList, { data: users, keyExtractor: tmp6, renderItem: tmp7 });
    cResult[5] = tmp7;
    cResult[6] = users;
    cResult[7] = tmp10;
    tmp8 = tmp10;
  }
  const fn2 = function u(start) {
    const item = start.item;
    return <closure_1_5 key={item.id} user={item} channel={item} onPress={function onPress() {
      return onPressUser(item.id);
    }} start={start.start} end={start.end} />;
  };
  cResult[2] = channel;
  cResult[3] = onPressUser;
  cResult[4] = fn2;
  tmp7 = fn2;
  const obj = channel(576);
}) : (function UserProfileActivityVoiceChannelUsers(arg0) {
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
      return <closure_1_5 key={item.id} user={item} channel={item} onPress={function onPress() {
        return importDefault(item.id);
      }} start={start.start} end={start.end} />;
    }
  });
  return jsx(UserProfileStackedActionSheetDefault, { title: null, onBack: null, scrollable: true, children: null });
});