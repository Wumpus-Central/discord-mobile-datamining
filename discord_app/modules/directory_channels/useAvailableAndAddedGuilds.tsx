// === Module 11970: useAvailableAndAddedGuilds ===

// Module 11970 (useAvailableAndAddedGuilds)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import SortedGuildStore from "SortedGuildStore" /* 5970 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11964 */;

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useAvailableAndAddedGuilds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAvailableAndAddedGuilds(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const cResult = require("c").c(24);
  let obj = require("c");
  [tmp5, importAll] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildDirectoryStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    const fn = function h() {
      return GuildDirectoryStore.getAdminGuildEntryIds(closure_1);
    };
    cResult[1] = arg1;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  stateFromStores = require("initialize").useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SortedGuildStore, GuildStore, PermissionStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function p() {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const items = [];
      const item = flattenedGuildIds.forEach((item) => {
        guild = GuildStore.getGuild(item);
        let canResult = null != guild;
        if (canResult) {
          canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
        }
        if (canResult) {
          canResult = guild.id !== closure_0;
        }
        if (canResult) {
          items.push(guild);
        }
      });
      return items;
    };
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp15 = items2;
    let tmp14 = fn2;
  } else {
    tmp14 = cResult[5];
    tmp15 = cResult[6];
  }
  const tmpResult = require("initialize");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp10, tmp14, tmp15);
  if (cResult[7] === stateFromStoresArray) {
    if (cResult[8] === arg1) {
      let tmp16 = cResult[9];
    }
    require("useMountEffect")(tmp16);
    if (cResult[10] === stateFromStores) {
      if (cResult[11] === stateFromStoresArray) {
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStoresArray) {
            if (cResult[20] === cResult[17]) {
              if (cResult[21] === tmp19) {
                if (cResult[22] === tmp5) {
                  let tmp27 = cResult[23];
                }
                return tmp27;
              }
            }
            const obj2 = { availableGuilds: tmp19, addedGuilds: cResult[17], loading: tmp5 };
            cResult[20] = cResult[17];
            cResult[21] = tmp19;
            cResult[22] = tmp5;
            cResult[23] = obj2;
            tmp27 = obj2;
          }
        }
        if (cResult[18] !== stateFromStores) {
          class P {
            constructor(arg0) {
              obj = closure_3;
              hasItem = undefined;
              if (closure_3 != null) {
                tmp2 = arg0;
                hasItem = obj.has(arg0.id);
              }
              return hasItem;
            }
          }
          cResult[18] = stateFromStores;
          cResult[19] = P;
        } else {
          class P {
            constructor(arg0) {
              obj = closure_3;
              hasItem = undefined;
              if (closure_3 != null) {
                tmp2 = arg0;
                hasItem = obj.has(arg0.id);
              }
              return hasItem;
            }
          }
        }
        const found = stateFromStoresArray.filter(P);
        cResult[15] = stateFromStores;
        cResult[16] = stateFromStoresArray;
        cResult[17] = found;
      }
    }
    if (cResult[13] !== stateFromStores) {
      class P {
        constructor(arg0) {
          obj = closure_3;
          hasItem = undefined;
          if (closure_3 != null) {
            tmp2 = arg0;
            hasItem = obj.has(arg0.id);
          }
          return hasItem;
        }
      }
      cResult[13] = stateFromStores;
      cResult[14] = O;
    } else {
      class P {
        constructor(arg0) {
          obj = closure_3;
          hasItem = undefined;
          if (closure_3 != null) {
            tmp2 = arg0;
            hasItem = obj.has(arg0.id);
          }
          return hasItem;
        }
      }
    }
    const found1 = stateFromStoresArray.filter(O);
    cResult[10] = stateFromStores;
    cResult[11] = stateFromStoresArray;
    cResult[12] = found1;
  }
  class R {
    constructor() {
      tmp = closure_4(async () => {
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            v3 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = tmp2;
                importAll(true);
                c1 = 1;
                v3 = 1;
                const obj5 = { value: v3(stateFromStores[11]).fetchGuildEntriesForIds(closure_2_1, stateFromStoresArray.map((id) => id.id)), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_2(false);
              v3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp15) {
            v3 = tmp;
            throw tmp15;
          }
        }
      })();
      return;
    }
  }
  cResult[7] = stateFromStoresArray;
  cResult[8] = arg1;
  cResult[9] = R;
  tmp16 = R;
  const tmpResult2 = require("initialize");
}) : (function useAvailableAndAddedGuilds(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_2 = tmp[1];
  let items = [GuildDirectoryStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildDirectoryStore.getAdminGuildEntryIds(closure_1));
  let obj = require("initialize");
  const items1 = [SortedGuildStore, GuildStore, PermissionStore];
  const items2 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
    const items = [];
    const item = flattenedGuildIds.forEach((item) => {
      guild = GuildStore.getGuild(item);
      let canResult = null != guild;
      if (canResult) {
        canResult = PermissionStore.can(Permissions.ADMINISTRATOR, guild);
      }
      if (canResult) {
        canResult = guild.id !== closure_0;
      }
      if (canResult) {
        items.push(guild);
      }
    });
    return items;
  }, items2);
  require("useMountEffect")(() => {
    (async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp2;
              closure_2_2(true);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: v3(stateFromStores[11]).fetchGuildEntriesForIds(closure_2_1, stateFromStoresArray.map((id) => id.id)), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_2(false);
            v3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp15) {
          v3 = tmp;
          throw tmp15;
        }
      }
    })();
  });
  let obj3 = { availableGuilds: null, addedGuilds: null, loading: tmp[0] };
  const items3 = [stateFromStoresArray, stateFromStores];
  obj3.availableGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return !hasItem;
  }), items3);
  const items4 = [stateFromStoresArray, stateFromStores];
  obj3.addedGuilds = noop.useMemo(() => stateFromStoresArray.filter((id) => {
    let hasItem;
    if (stateFromStores != null) {
      hasItem = stateFromStores.has(id.id);
    }
    return hasItem;
  }), items4);
  return obj3;
});