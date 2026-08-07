// discord_app/modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
let result = require("ROBLOX_PROTOCOL_URL").fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx");

export default {
  getRobloxSubgameURL(closure_0) {
    return callback(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp4;
              let obj2 = outer1_0(4475);
              dependencyMap = 1;
              c2 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = obj2.canOpenUrlScheme("roblox");
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = outer1_0(4473);
            if (arg1) {
              obj.ROBLOX_PROTOCOL_URL(closure_0);
            } else {
              const result = obj.ROBLOX_DEFERRED_WEB_URL(closure_0);
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