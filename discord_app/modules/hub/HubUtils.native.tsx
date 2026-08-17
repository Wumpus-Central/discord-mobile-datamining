// discord_app/modules/hub/HubUtils.native.tsx
import _modDef11922 from "module_11922" /* 11922 */;
import closure_2 from "updateInvite" /* 4359 */;
import importDefaultResult from "apply" /* 12 */;

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef11922.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;