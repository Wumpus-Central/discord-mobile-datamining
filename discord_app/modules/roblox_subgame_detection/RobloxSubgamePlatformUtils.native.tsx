// === Module 4961: RobloxSubgamePlatformUtils ===

// Module 4961 (RobloxSubgamePlatformUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx");

export default {
  getRobloxSubgameURL(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              dependencyMap = 1;
              c2 = 1;
              const obj5 = { value: tmp4(4962).canOpenUrlScheme("roblox"), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj = tmp4(4960);
            if (value) {
              obj.ROBLOX_PROTOCOL_URL(closure_128_0);
            } else {
              const result = obj.ROBLOX_DEFERRED_WEB_URL(closure_128_0);
            }
            c2 = 3;
          }
        } catch (tmp14) {
          c2 = tmp;
          throw tmp14;
        }
      }
    })();
  }
};