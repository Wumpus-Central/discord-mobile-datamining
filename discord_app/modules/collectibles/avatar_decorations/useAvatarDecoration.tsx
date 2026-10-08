// discord_app/modules/collectibles/avatar_decorations/useAvatarDecoration.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
function getAvatarDecoration(user, guildId) {
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
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/useAvatarDecoration.tsx");

export const useAvatarDecoration = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAvatarDecoration(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        if (cResult[2] === arg0) {
          let tmp6 = cResult[3];
        }
        return tmp(573).useStateFromStores(first, tmp6);
      }
      const fn = function u() {
        const items = [GuildMemberStore];
        const first = _slicedToArray(items, 1)[0];
        let member = null;
        if (null != closure_1) {
          member = null;
          if (null != closure_0) {
            member = first.getMember(closure_1, closure_0.id);
          }
        }
        let avatarDecoration;
        if (member != null) {
          avatarDecoration = member.avatarDecoration;
        }
        if (avatarDecoration == null) {
          let avatarDecoration1;
          if (closure_0 != null) {
            avatarDecoration1 = closure_0.avatarDecoration;
          }
          avatarDecoration = avatarDecoration1;
        }
        return avatarDecoration;
      };
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      tmp6 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useAvatarDecoration(arg0, arg1) {
      _require = arg0;
      dependencyMap = arg1;
      let items = [GuildMemberStore];
      return require("useStateFromStores").useStateFromStores(items, () => {
        const items = [GuildMemberStore];
        const first = _slicedToArray(items, 1)[0];
        let member = null;
        if (null != closure_1) {
          member = null;
          if (null != closure_0) {
            member = first.getMember(closure_1, closure_0.id);
          }
        }
        let avatarDecoration;
        if (member != null) {
          avatarDecoration = member.avatarDecoration;
        }
        if (avatarDecoration == null) {
          let avatarDecoration1;
          if (closure_0 != null) {
            avatarDecoration1 = closure_0.avatarDecoration;
          }
          avatarDecoration = avatarDecoration1;
        }
        return avatarDecoration;
      });
    };
export { getAvatarDecoration };
