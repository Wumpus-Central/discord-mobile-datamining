// === Module 9159: useVadColors ===

// Module 9159 (useVadColors)
import get_initialized from "get initialized" /* 504 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let userId;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let guildId;
  let tmp6;
  let tmp8;
  const tmp = userId;
  const obj = userId(guildId[3]);
  const cResult = obj.c(7);
  userId = userId.userId;
  guildId = userId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function n() {
      let user = null;
      if (null != userId) {
        user = UserStore.getUser(tmp);
      }
      return user;
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(guildId[4]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === guildId) {
    let tmp10;
    if (cResult[5] === userId) {
      tmp10 = cResult[6];
    }
    const tmpResult2 = tmp(guildId[4]);
    const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
    let vadColors;
    if (stateFromStores1 != null) {
      vadColors = stateFromStores1.vadColors;
    }
    if (vadColors == null) {
      let vadColors1;
      if (stateFromStores != null) {
        vadColors1 = stateFromStores.vadColors;
      }
      vadColors = vadColors1;
    }
    if (vadColors == null) {
      vadColors = null;
    }
    return vadColors;
  }
  const fn2 = function f() {
    let member = null;
    if (null != userId) {
      member = null;
      if (null != guildId) {
        member = GuildMemberStore.getMember(tmp3, tmp);
      }
    }
    return member;
  };
  cResult[4] = guildId;
  cResult[5] = userId;
  cResult[6] = fn2;
  tmp10 = fn2;
}) : ((arg0) => {
  ({ userId: require, guildId: dependencyMap } = arg0);
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let user = null;
    if (null != require) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
  const items1 = [GuildMemberStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let member = null;
    if (null != require) {
      member = null;
      if (null != dependencyMap) {
        member = GuildMemberStore.getMember(tmp3, tmp);
      }
    }
    return member;
  });
  let vadColors;
  if (stateFromStores1 != null) {
    vadColors = stateFromStores1.vadColors;
  }
  if (vadColors == null) {
    let vadColors1;
    if (stateFromStores != null) {
      vadColors1 = stateFromStores.vadColors;
    }
    vadColors = vadColors1;
  }
  if (vadColors == null) {
    vadColors = null;
  }
  return vadColors;
});
const result = size.fileFinishedImporting("modules/calls/useVadColors.tsx");

export default tmp2;