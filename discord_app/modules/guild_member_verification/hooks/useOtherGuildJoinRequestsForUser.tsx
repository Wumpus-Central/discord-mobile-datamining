// === Module 16958: useOtherGuildJoinRequestsForUser ===

// Module 16958 (useOtherGuildJoinRequestsForUser)
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6123 */;
import noop from "module_19" /* 19 */;
import GuildJoinRequestStore from "GuildJoinRequestStore" /* 6124 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/hooks/useOtherGuildJoinRequestsForUser.tsx");

export const useOtherGuildJoinRequestsForUser = ReactCompilerGating.isReactCompilerEnabled() ? (function useOtherGuildJoinRequestsForUser(guildId) {
  const cResult = guildId(selectedJoinRequestId[3]).c(16);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  selectedJoinRequestId = guildId.selectedJoinRequestId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildJoinRequestStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === userId) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[4]).useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] === guildId) {
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === userId) {
          let tmp9 = cResult[8];
          let tmp10 = cResult[9];
        }
        const effect = stateFromStores.useEffect(tmp9, tmp10);
        if (cResult[10] === stateFromStores) {
          if (cResult[11] === selectedJoinRequestId) {
            let tmp13 = cResult[12];
          }
          return tmp13;
        }
        if (cResult[13] !== selectedJoinRequestId) {
          const fn3 = function _(joinRequestId) {
            return joinRequestId.joinRequestId !== selectedJoinRequestId;
          };
          cResult[13] = selectedJoinRequestId;
          cResult[14] = fn3;
          let tmp14 = fn3;
        } else {
          tmp14 = cResult[14];
        }
        const _Symbol = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0, arg1) {
              date = new Date(arg1.createdAt);
              time = date.getTime();
              date1 = new Date(guildId.createdAt);
              return time - date1.getTime();
            }
          }
          cResult[15] = I;
        } else {
          class I {
            constructor(arg0, arg1) {
              date = new Date(arg1.createdAt);
              time = date.getTime();
              date1 = new Date(guildId.createdAt);
              return time - date1.getTime();
            }
          }
        }
        if (stateFromStores == null) {
          class I {
            constructor(arg0, arg1) {
              date = new Date(arg1.createdAt);
              time = date.getTime();
              date1 = new Date(guildId.createdAt);
              return time - date1.getTime();
            }
          }
        }
        const found = stateFromStores.filter(tmp14);
        const substr = found.slice();
        const sorted = substr.sort(I);
        cResult[10] = stateFromStores;
        cResult[11] = selectedJoinRequestId;
        cResult[12] = sorted;
        tmp13 = sorted;
      }
    }
    const fn2 = function q() {
      if (null == stateFromStores) {
        const guildJoinRequestsForUser = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequestsForUser(guildId, userId);
      }
    };
    const items1 = [guildId, userId, stateFromStores];
    cResult[5] = guildId;
    cResult[6] = stateFromStores;
    cResult[7] = userId;
    cResult[8] = fn2;
    cResult[9] = items1;
    tmp10 = items1;
    tmp9 = fn2;
    const tmpResult = tmp(tmp2[4]);
  }
  const fn = function n() {
    return GuildJoinRequestStore.getRequestsForUser(guildId, userId);
  };
  const items2 = [guildId, userId];
  cResult[1] = guildId;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items2;
  tmp7 = items2;
  tmp6 = fn;
  let obj = guildId(selectedJoinRequestId[3]);
  tmp = guildId;
  tmp2 = selectedJoinRequestId;
}) : (function useOtherGuildJoinRequestsForUser(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const selectedJoinRequestId = guildId.selectedJoinRequestId;
  let items = [GuildJoinRequestStore];
  const items1 = [guildId, userId];
  const stateFromStores = guildId(selectedJoinRequestId[4]).useStateFromStores(items, () => GuildJoinRequestStore.getRequestsForUser(guildId, userId), items1);
  const items2 = [guildId, userId, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null == stateFromStores) {
      const guildJoinRequestsForUser = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequestsForUser(guildId, userId);
    }
  }, items2);
  const items3 = [stateFromStores, selectedJoinRequestId];
  return stateFromStores.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const found = items.filter((joinRequestId) => joinRequestId.joinRequestId !== selectedJoinRequestId);
    const substr = found.slice();
    return substr.sort((createdAt, createdAt2) => {
      const time = new Date(createdAt2.createdAt).getTime();
      const date = new Date(createdAt2.createdAt);
      return time - new Date(createdAt.createdAt).getTime();
    });
  }, items3);
});