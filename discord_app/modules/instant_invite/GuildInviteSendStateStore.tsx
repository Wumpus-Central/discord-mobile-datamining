// === Module 12791: GuildInviteSendStateStore ===

// Module 12791 (GuildInviteSendStateStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const useGuildInviteSendStates = module_570.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    let obj;
    obj.setState((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const obj2 = {};
      const merged1 = Object.assign(arg0[closure_1_0]);
      obj2[closure_1_1] = closure_1_2;
      obj[closure_1_0] = obj2;
      return obj;
    });
  });
};
export { useGuildInviteSendStates };