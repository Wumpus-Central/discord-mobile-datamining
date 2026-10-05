// === Module 9228: useGuildProfile ===

// Module 9228 (useGuildProfile)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildProfileStore from "GuildProfileStore" /* 9227 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, c3, c4, closure_0;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp10;
  let tmp12;
  let tmp6;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildProfileStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return GuildProfileStore.getProfile(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildProfileStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function c() {
      return GuildProfileStore.getFetchStatus(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10);
  if (cResult[6] !== arg0) {
    _require = _asyncToGenerator(async (arg0) => {
      let obj3;
      closure_0 = arg0;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp4 = undefined !== closure_0 && closure_0;
              c2 = 1;
              c1 = 1;
              const obj5 = { value: obj3.getGuildProfile(closure_0, tmp4), done: false };
              obj3 = closure_0(dependencyMap[6]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c1 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp8) {
          c1 = 3;
          throw tmp8;
        }
      }
    });
    const fn3 = function() {
      return closure_0(...arguments);
    };
    cResult[6] = arg0;
    cResult[7] = fn3;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp12) {
    if (cResult[9] === stateFromStores1) {
      let tmp14;
      if (cResult[10] === stateFromStores) {
        tmp14 = cResult[11];
      }
      return tmp14;
    }
  }
  let obj2 = { guildProfile: stateFromStores, fetchGuildProfile: tmp12, fetchStatus: stateFromStores1 };
  cResult[8] = tmp12;
  cResult[9] = stateFromStores1;
  cResult[10] = stateFromStores;
  cResult[11] = obj2;
  tmp14 = obj2;
}) : ((arg0) => {
  let items2;
  let stateFromStores1;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildProfileStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildProfileStore.getProfile(closure_0));
  let obj2 = require("get initialized");
  const items1 = [GuildProfileStore];
  let obj3 = {
    guildProfile: stateFromStores,
    fetchGuildProfile: react.useCallback(_asyncToGenerator(async () => {
      let obj3;
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
          let flag;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp4;
              closure_1 = tmp;
              flag = closure_0;
              if (closure_0 === undefined) {
                flag = false;
              }
              c3 = 1;
              c4 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c3 = 2;
              c4 = 1;
              const obj6 = { value: obj3.getGuildProfile(closure_130_0, flag), done: false };
              obj3 = closure_0(closure_1[6]);
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    }), items2),
    fetchStatus: stateFromStores1
  };
  stateFromStores1 = obj2.useStateFromStores(items1, () => GuildProfileStore.getFetchStatus(closure_0));
  items2 = [arg0];
  return obj3;
});
const result = size.fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = tmp2;