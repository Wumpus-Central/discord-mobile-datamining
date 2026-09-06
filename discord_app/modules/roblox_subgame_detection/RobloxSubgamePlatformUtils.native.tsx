// discord_app/modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx");

export default {
  getRobloxSubgameURL(arg0) {
    closure_0 = arg0;
    return (async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              let obj2 = tmp4(4693);
              dependencyMap = 1;
              c2 = 1;
              const obj1 = { value: obj2.canOpenUrlScheme("roblox"), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            obj = tmp4(4691);
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
  },
};
