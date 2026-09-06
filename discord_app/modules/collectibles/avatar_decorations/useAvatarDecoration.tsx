// === Module 8217: useAvatarDecoration ===

// Module 8217 (useAvatarDecoration)
import _slicedToArray from "module_32" /* 32 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
  _require = user;
  dependencyMap = guildId;
  let items = [GuildMemberStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const items = [GuildMemberStore];
    const first = _slicedToArray(items, 1)[0];
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != user) {
        member = first.getMember(closure_1, user.id);
      }
    }
    let avatarDecoration;
    if (member != null) {
      avatarDecoration = member.avatarDecoration;
    }
    if (avatarDecoration == null) {
      let avatarDecoration1;
      if (user != null) {
        avatarDecoration1 = user.avatarDecoration;
      }
      avatarDecoration = avatarDecoration1;
    }
    return avatarDecoration;
  });
};
export const getAvatarDecoration = function getAvatarDecoration(user, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildMemberStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != user) {
      member = first.getMember(guildId, user.id);
    }
  }
  let avatarDecoration;
  if (member != null) {
    avatarDecoration = member.avatarDecoration;
  }
  if (avatarDecoration == null) {
    let avatarDecoration1;
    if (user != null) {
      avatarDecoration1 = user.avatarDecoration;
    }
    avatarDecoration = avatarDecoration1;
  }
  return avatarDecoration;
};