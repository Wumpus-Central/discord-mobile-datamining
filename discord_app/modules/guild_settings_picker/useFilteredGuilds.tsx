// === Module 13707: useFilteredGuilds ===

// Module 13707 (useFilteredGuilds)
import _modDef38 from "module_38" /* 38 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let isGuildIncluded;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isGuildIncluded) => {
  let currentUser;
  let flattenedGuildIds;
  let guilds;
  let obj2;
  let stateFromStores2;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = isGuildIncluded(stateFromStores2[5]);
  const cResult = obj.c(20);
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function o() {
      return flattenedGuildIds.getFlattenedGuildIds();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = isGuildIncluded(stateFromStores2[6]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    const fn2 = function _() {
      return guilds.getGuilds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult3 = isGuildIncluded(stateFromStores2[6]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class F {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[4] = items2;
    cResult[5] = F;
    tmp13 = F;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = isGuildIncluded(stateFromStores2[6]);
  stateFromStores2 = tmpResult4.useStateFromStores(tmp12, tmp13);
  if (null != stateFromStores2) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === isGuildIncluded) {
        if (cResult[9] === stateFromStores) {
          let tmp18;
          if (cResult[10] === stateFromStores2) {
            tmp18 = cResult[11];
          }
          if (cResult[15] !== stateFromStores1) {
            class M {
              constructor(id) {
                _modDef38(null != stateFromStores1[id], "guild should not be null");
                return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
              }
            }
            cResult[15] = stateFromStores1;
            class F {
              constructor() {
                return currentUser.getCurrentUser();
              }
            }
            cResult[16] = M;
          } else {
            class M {
              constructor(id) {
                _modDef38(null != stateFromStores1[id], "guild should not be null");
                return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
              }
            }
          }
          class F {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[12] = tmp18;
          cResult[13] = stateFromStores1;
          cResult[14] = tmp22;
        }
      }
    }
    if (null != isGuildIncluded) {
      class M {
        constructor(id) {
          _modDef38(null != stateFromStores1[id], "guild should not be null");
          return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
        }
      }
    }
    class F {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[7] = stateFromStores1;
    cResult[8] = isGuildIncluded;
    cResult[9] = stateFromStores;
    cResult[10] = stateFromStores2;
    cResult[11] = stateFromStores;
    tmp18 = tmp19;
  } else {
    class M {
      constructor(id) {
        _modDef38(null != stateFromStores1[id], "guild should not be null");
        return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(id) {
          _modDef38(null != stateFromStores1[id], "guild should not be null");
          return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
        }
      }
      cResult[6] = tmp17;
      class F {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
    } else {
      class M {
        constructor(id) {
          _modDef38(null != stateFromStores1[id], "guild should not be null");
          return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
        }
      }
    }
  }
  if (null != selectedGuildId) {
    class M {
      constructor(id) {
        _modDef38(null != stateFromStores1[id], "guild should not be null");
        return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
      }
    }
  }
  if (cResult[17] === tmp16) {
    class M {
      constructor(id) {
        _modDef38(null != stateFromStores1[id], "guild should not be null");
        return { id, label: stateFromStores1[id].name, value: stateFromStores1[id].id };
      }
    }
    return obj2;
  }
  obj2 = { options: tmp16, selectedGuild: undefined };
  cResult[17] = tmp16;
  cResult[18] = undefined;
  cResult[19] = obj2;
}) : ((isGuildIncluded) => {
  let currentUser;
  let flattenedGuildIds;
  let guilds;
  let items3;
  let tmp4;
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores1;
  let items = [SortedGuildStore];
  const obj = isGuildIncluded(stateFromStores1[6]);
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const items1 = [GuildStore];
  const obj2 = isGuildIncluded(stateFromStores1[6]);
  stateFromStores1 = obj2.useStateFromStores(items1, () => guilds.getGuilds());
  const items2 = [UserStore];
  const obj3 = isGuildIncluded(stateFromStores1[6]);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj4 = {
    options: stateFromStores2.useMemo(() => {
      let items;
      if (null == stateFromStores2) {
        items = [];
      } else {
        let found;
        if (null == isGuildIncluded) {
          found = stateFromStores;
        } else {
          found = stateFromStores.filter((item) => {
            stateFromStores(stateFromStores1[7])(null != closure_1_2[item], "guild should not be null");
            return isGuildIncluded(closure_1_2[item], stateFromStores2);
          });
        }
        items = found.map((id) => {
          stateFromStores(stateFromStores1[7])(null != closure_1_2[id], "guild should not be null");
          return { id, label: closure_1_2[id].name, value: closure_1_2[id].id };
        });
      }
      return items;
    }, items3),
    selectedGuild: tmp4
  };
  items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  tmp4 = undefined;
  if (null != selectedGuildId) {
    tmp4 = stateFromStores1[selectedGuildId];
  }
  return obj4;
});
const result = size.fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default tmp2;