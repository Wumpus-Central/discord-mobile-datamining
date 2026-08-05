// discord_app/modules/hub/HubUtils.native.tsx
import updateInvite from "updateInvite";
import importDefaultResult from "apply";

let closure_3 = require("apply").throttle((code) => {
  invite = invite.getInvite(code.code);
  require("native/components/HubEmailConnectionModalActionCreators.tsx").open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("module_12010").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;