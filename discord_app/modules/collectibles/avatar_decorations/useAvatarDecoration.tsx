// discord_app/modules/collectibles/avatar_decorations/useAvatarDecoration.tsx
import _slicedToArray from "_slicedToArray";
import trackCommunicationDisabled from "trackCommunicationDisabled";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
  const _require = user;
  const dependencyMap = guildId;
  let items = [trackCommunicationDisabled];
  return _require(647).useStateFromStores(items, () => {
    const items = [outer1_3];
    const first = outer1_2(items, 1)[0];
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
export const getAvatarDecoration = function getAvatarDecoration(user, _slicedToArray) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [trackCommunicationDisabled];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let member = null;
  if (null != _slicedToArray) {
    member = null;
    if (null != user) {
      member = first.getMember(_slicedToArray, user.id);
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