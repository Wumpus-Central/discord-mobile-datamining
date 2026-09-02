// === Module 13019: ? ===

// Module 13019
import _modDef12505 from "module_12505" /* 12505 */;
import closure_2 from "updateInvite" /* 4462 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef12505.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;