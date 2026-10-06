// === Module 5028: RobloxSubgamePlatformUtils ===

// Module 5028 (RobloxSubgamePlatformUtils)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = {
  getRobloxSubgameURL(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let ROBLOX_PROTOCOL_URLResult;
      let c2;
      const obj4 = tmp3(c1[1]);
      await obj4.canOpenUrlScheme("roblox");
      const obj = tmp3(c1[2]);
      if (value) {
        ROBLOX_PROTOCOL_URLResult = obj.ROBLOX_PROTOCOL_URL(closure_128_0);
      } else {
        ROBLOX_PROTOCOL_URLResult = obj.ROBLOX_DEFERRED_WEB_URL(closure_128_0);
      }
      return ROBLOX_PROTOCOL_URLResult;
    })();
  }
};
const result = size.fileFinishedImporting("modules/roblox_subgame_detection/RobloxSubgamePlatformUtils.native.tsx");

export default obj;