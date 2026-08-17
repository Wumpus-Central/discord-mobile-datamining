// discord_app/modules/collectibles/avatar_decorations/useAvatarDecoration.tsx
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../stores/GuildMemberStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = function useAvatarDecoration(user, guildId) {
  const _require = user;
  dependencyMap = guildId;
  let items = [closure_3];
  return _defaultAreStatesEqual.useStateFromStores(items, () => {
    const items = [closure_1_3];
    const first = closure_1_2(items, 1)[0];
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
export const getAvatarDecoration = function getAvatarDecoration(user, closure_2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_3];
    tmp = items;
  }
  const first = callback(tmp, 1)[0];
  let member = null;
  if (null != closure_2) {
    member = null;
    if (null != user) {
      member = first.getMember(closure_2, user.id);
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