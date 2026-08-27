// === Module 8933: useGuildProfile ===

// Module 8933 (useGuildProfile)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleUpdateStart" /* 8931 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_profile/hooks/useGuildProfile.tsx");

export const useGuildProfile = function useGuildProfile(guildId) {
  const _require = guildId;
  let obj = _require(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getProfile(closure_0));
  const items1 = [closure_4];
  obj = { guildProfile: stateFromStores, fetchGuildProfile: null, fetchStatus: null };
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => closure_1_4.getFetchStatus(closure_0));
  const items2 = [guildId];
  obj[1] = React.useCallback(callback(() => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*() {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              c3 = 1;
              c4 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj2 = callback(closure_1_1[4]);
              c3 = 2;
              c4 = 1;
              obj2 = { value: null, done: false };
              obj2[0] = obj2.getGuildProfile(flag, flag);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp12) {
          c4 = tmp;
          throw tmp12;
        }
      }
    })();
    iter.next();
    return iter;
  }), items2);
  obj[2] = stateFromStores1;
  return obj;
};