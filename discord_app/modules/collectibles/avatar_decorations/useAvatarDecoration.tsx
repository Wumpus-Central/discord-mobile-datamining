// === Module 7027: useAvatarDecoration ===

// Module 7027 (useAvatarDecoration)
import _slicedToArray from "module_32" /* 32 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export function useAvatarDecoration(user, guildId) {
  _require = user;
  dependencyMap = guildId;
  items = [GuildMemberStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    items = [GuildMemberStore];
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
}
export function getAvatarDecoration(user, guildId) {
  let tmp = arg2;
  if (arg2 === undefined) {
    items = [GuildMemberStore];
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
}