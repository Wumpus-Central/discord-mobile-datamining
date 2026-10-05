// === Module 15155: useDisplayNameStylesPendingName ===

// Module 15155 (useDisplayNameStylesPendingName)
import UserUtilsDefault from "UserUtils" /* 4722 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesPendingName.tsx");

export const useDisplayNameStylesPendingName = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  _require = id;
  importDefault = arg1;
  const cResult = require("c").c(7);
  const obj = require("c");
  const tmp = _require;
  const name = UserUtilsDefault.useName(id);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    if (cResult[2] === id) {
      let tmp10 = cResult[3];
    }
    if (cResult[4] === arg1) {
      if (cResult[5] === id) {
        let tmp12 = cResult[6];
      }
      let str = tmp(504).useStateFromStores(first, tmp10, tmp12);
      if (str == null) {
        str = name;
      }
      if (str == null) {
        str = "";
      }
      return str;
    }
    const items1 = [arg1, id];
    cResult[4] = arg1;
    cResult[5] = id;
    cResult[6] = items1;
    tmp12 = items1;
  }
  cResult[1] = arg1;
  let id1;
  if (id != null) {
    id1 = id.id;
  }
  const fn = function u() {
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        pendingNickname = GuildMemberStore.getNick(closure_1, id);
      }
      let pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  };
  cResult[2] = id1;
  cResult[3] = fn;
  tmp10 = fn;
}) : ((guildId, arg1) => {
  _require = guildId;
  importDefault = arg1;
  const name = UserUtilsDefault.useName(guildId);
  const items = [UserProfileSettingsStore, GuildMemberStore];
  const items1 = [arg1, guildId];
  let str = require("initialize").useStateFromStores(items, () => {
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(closure_1);
    if (null != closure_1) {
      let pendingNickname = pendingChanges.pendingNickname;
      if (pendingNickname == null) {
        let id;
        if (guildId != null) {
          id = guildId.id;
        }
        pendingNickname = GuildMemberStore.getNick(closure_1, id);
      }
      let pendingGlobalName = pendingNickname;
    } else {
      pendingGlobalName = pendingChanges.pendingGlobalName;
    }
    return pendingGlobalName;
  }, items1);
  if (str == null) {
    str = name;
  }
  if (str == null) {
    str = "";
  }
  return str;
});