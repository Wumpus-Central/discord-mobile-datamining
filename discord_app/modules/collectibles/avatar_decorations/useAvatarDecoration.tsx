// discord_app/modules/collectibles/avatar_decorations/useAvatarDecoration.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

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
      if (null != tmp) {
        member = first.getMember(closure_1, tmp.id);
      }
    }
    let avatarDecoration;
    if (member != null) {
      avatarDecoration = member.avatarDecoration;
    }
    if (avatarDecoration == null) {
      let avatarDecoration1;
      if (tmp != null) {
        avatarDecoration1 = tmp.avatarDecoration;
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
