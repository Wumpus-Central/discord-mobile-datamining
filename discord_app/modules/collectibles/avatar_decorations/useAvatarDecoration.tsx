// === Module 4797: useAvatarDecoration ===

// Module 4797 (useAvatarDecoration)
import _slicedToArray from "_slicedToArray" /* 32 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
  const _require = user;
  dependencyMap = guildId;
  let items = [closure_3];
  return _require(647).useStateFromStores(items, () => {
    const items = [closure_1_3];
    const first = closure_1_2(items, 1)[0];
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
    const items = [closure_3];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
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