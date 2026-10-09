// === Module 14044: useFilteredGuilds ===

// Module 14044 (useFilteredGuilds)
import _modDef38 from "module_38" /* 38 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5970 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/useFilteredGuilds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useFilteredGuilds(isGuildIncluded) {
  const cResult = isGuildIncluded(stateFromStores2[5]).c(20);
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
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
  const obj = isGuildIncluded(stateFromStores2[5]);
  const stateFromStores = isGuildIncluded(stateFromStores2[6]).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    const fn2 = function _() {
      return guilds.getGuilds();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = isGuildIncluded(stateFromStores2[6]);
  const stateFromStores1 = isGuildIncluded(stateFromStores2[6]).useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class F {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[4] = items2;
    cResult[5] = F;
    let tmp13 = F;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult3 = isGuildIncluded(stateFromStores2[6]);
  stateFromStores2 = isGuildIncluded(stateFromStores2[6]).useStateFromStores(tmp12, tmp13);
  if (null != stateFromStores2) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === isGuildIncluded) {
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === stateFromStores2) {
            let tmp18 = cResult[11];
          }
          if (cResult[15] !== stateFromStores1) {
            class M {
              constructor(arg0) {
                tmp = closure_1[isGuildIncluded];
                tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
                obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
                return obj;
              }
            }
            cResult[15] = stateFromStores1;
            class F {
              constructor() {
                return closure_1_6.getCurrentUser();
              }
            }
            cResult[16] = M;
          } else {
            class M {
              constructor(arg0) {
                tmp = closure_1[isGuildIncluded];
                tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
                obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
                return obj;
              }
            }
          }
          class F {
            constructor() {
              return closure_1_6.getCurrentUser();
            }
          }
          cResult[12] = tmp18;
          cResult[13] = stateFromStores1;
          cResult[14] = tmp21;
        }
      }
    }
    if (null != isGuildIncluded) {
      class M {
        constructor(arg0) {
          tmp = closure_1[isGuildIncluded];
          tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
          obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
          return obj;
        }
      }
    }
    class F {
      constructor() {
        return closure_1_6.getCurrentUser();
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
      constructor(arg0) {
        tmp = closure_1[isGuildIncluded];
        tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
        obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
        return obj;
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          tmp = closure_1[isGuildIncluded];
          tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
          obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
          return obj;
        }
      }
      cResult[6] = tmp17;
      class F {
        constructor() {
          return closure_1_6.getCurrentUser();
        }
      }
    } else {
      class M {
        constructor(arg0) {
          tmp = closure_1[isGuildIncluded];
          tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
          obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
          return obj;
        }
      }
    }
    class F {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    if (null != isGuildIncluded.selectedGuildId) {
      class M {
        constructor(arg0) {
          tmp = closure_1[isGuildIncluded];
          tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
          obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
          return obj;
        }
      }
    }
    if (cResult[17] === tmp16) {
      class M {
        constructor(arg0) {
          tmp = closure_1[isGuildIncluded];
          tmp2 = closure_1(closure_2[7])(null != tmp, "guild should not be null");
          obj = { id: isGuildIncluded, label: tmp.name, value: tmp.id };
          return obj;
        }
      }
      return tmp25;
    }
    const obj2 = { options: tmp16, selectedGuild: tmp24 };
    cResult[17] = tmp16;
    cResult[18] = tmp24;
    cResult[19] = obj2;
    tmp25 = obj2;
  }
  const tmpResult4 = isGuildIncluded(stateFromStores2[6]);
}) : (function useFilteredGuilds(isGuildIncluded) {
  isGuildIncluded = isGuildIncluded.isGuildIncluded;
  const selectedGuildId = isGuildIncluded.selectedGuildId;
  let stateFromStores1;
  let items = [SortedGuildStore];
  const stateFromStores = isGuildIncluded(stateFromStores1[6]).useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj = isGuildIncluded(stateFromStores1[6]);
  const items1 = [GuildStore];
  stateFromStores1 = isGuildIncluded(stateFromStores1[6]).useStateFromStores(items1, () => guilds.getGuilds());
  const obj2 = isGuildIncluded(stateFromStores1[6]);
  const items2 = [UserStore];
  const stateFromStores2 = isGuildIncluded(stateFromStores1[6]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj4 = { options: null, selectedGuild: null };
  const items3 = [stateFromStores, stateFromStores1, stateFromStores2, isGuildIncluded];
  obj4.options = stateFromStores2.useMemo(() => {
    if (null == stateFromStores2) {
      let items = [];
    } else {
      if (null == isGuildIncluded) {
        let found = stateFromStores;
      } else {
        found = stateFromStores.filter((item) => {
          stateFromStores(stateFromStores1[7])(null != dependencyMap[item], "guild should not be null");
          return isGuildIncluded(dependencyMap[item], stateFromStores2);
        });
      }
      items = found.map((id) => {
        stateFromStores(stateFromStores1[7])(null != dependencyMap[id], "guild should not be null");
        return { id, label: dependencyMap[id].name, value: dependencyMap[id].id };
      });
    }
    return items;
  }, items3);
  let tmp4;
  if (null != selectedGuildId) {
    tmp4 = stateFromStores1[selectedGuildId];
  }
  obj4.selectedGuild = tmp4;
  return obj4;
});