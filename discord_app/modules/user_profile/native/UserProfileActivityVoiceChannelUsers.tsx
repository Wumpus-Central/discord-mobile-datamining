// === Module 12849: UserProfileActivityVoiceChannelUsers ===

// Module 12849 (UserProfileActivityVoiceChannelUsers)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import UserProfileStackedActionSheetDefault from "UserProfileStackedActionSheet" /* 10841 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let user;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let channel;
  let end;
  let first;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  let tmp7;
  let obj = user(576);
  const cResult = obj.c(20);
  user = user.user;
  ({ channel, onPress, start, end } = user);
  const obj2 = user(7887);
  const avatarDecoration = obj2.useAvatarDecoration(user, channel.guild_id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function o() {
      const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
      return obj;
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = user(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (cResult[3] === channel.guild_id) {
    if (cResult[4] === channel.id) {
      let tmp9;
      if (cResult[5] === user) {
        tmp9 = cResult[6];
      }
      if (cResult[7] === avatarDecoration) {
        if (cResult[8] === channel.guild_id) {
          if (cResult[9] === isMobileOnline) {
            if (cResult[10] === isVROnline) {
              if (cResult[11] === status) {
                let tmp11;
                if (cResult[12] === user) {
                  tmp11 = cResult[13];
                }
                if (cResult[14] === end) {
                  if (cResult[15] === onPress) {
                    if (cResult[16] === start) {
                      if (cResult[17] === tmp9) {
                        let tmp14;
                        if (cResult[18] === tmp11) {
                          tmp14 = cResult[19];
                        }
                        return tmp14;
                      }
                    }
                  }
                }
                const tmp16 = jsx(user(5993).TableRow, { onPress, label: tmp9, icon: tmp11, start, end });
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
      const Avatar = tmp(1188).Avatar;
      const tmp13 = <Avatar user={user} avatarDecoration={avatarDecoration} size={user(1188).AvatarSizes.REFRESH_MEDIUM_32} guildId={channel.guild_id} status={status} isMobileOnline={isMobileOnline} isVROnline={isVROnline} autoStatusCutout />;
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
  const obj4 = NicknameUtilsDefault;
  const name = obj4.getName(channel.guild_id, channel.id, user);
  cResult[3] = channel.guild_id;
  cResult[4] = channel.id;
  cResult[5] = user;
  cResult[6] = name;
  tmp9 = name;
}) : ((user) => {
  let end;
  let isMobileOnline;
  let isVROnline;
  let onPress;
  let start;
  let status;
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  let obj = user(7887);
  const avatarDecoration = obj.useAvatarDecoration(user, channel.guild_id);
  const items = [PresenceStore];
  const obj2 = user(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const obj = { status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) };
    return obj;
  });
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const TableRow = user(5993).TableRow;
  const obj4 = NicknameUtilsDefault;
  ({ user, avatarDecoration, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  const Avatar = user(1188).Avatar;
  return <TableRow onPress={onPress} label={obj4.getName(channel.guild_id, channel.id, user)} icon={null} start={start} end={end} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let onBack;
  let onPressUser;
  let tmp6;
  let users;
  const obj = channel(576);
  const cResult = obj.c(11);
  ({ users, channel } = arg0);
  ({ onBack, onPressUser } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = channel(1126).intl;
    const stringResult = intl.string(channel(1126).t["3xHUJ+"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(id) {
      return id.id;
    };
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === channel) {
    let tmp7;
    if (cResult[3] === onPressUser) {
      tmp7 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      let tmp8;
      if (cResult[6] === users) {
        tmp8 = cResult[7];
      }
      if (cResult[8] === onBack) {
        let tmp11;
        if (cResult[9] === tmp8) {
          tmp11 = cResult[10];
        }
        return tmp11;
      }
      const tmp14 = jsx(onPressUser(10841), { title: first, onBack, scrollable: true, children: tmp8 });
      cResult[8] = onBack;
      cResult[9] = tmp8;
      cResult[10] = tmp14;
      tmp11 = tmp14;
    }
    const tmp10 = jsx(channel(10841).UserProfileStackedActionSheetList, { data: users, keyExtractor: tmp6, renderItem: tmp7 });
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
}) : ((arg0) => {
  let onBack;
  let users;
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  UserProfileStackedActionSheetDefault;
  const intl = intl2.intl;
  return <tmp title={intl.string(intl2.t["3xHUJ+"])} onBack={onBack} scrollable>{null}</tmp>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default tmp3;