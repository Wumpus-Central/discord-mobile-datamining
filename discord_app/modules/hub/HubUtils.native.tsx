// discord_app/modules/hub/HubUtils.native.tsx
import _modDef12371 from "native/components/HubEmailConnectionModalActionCreators.tsx";
import closure_2 from "../../stores/InviteStore.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";

let closure_3 = importDefaultResult.throttle((code) => {
  invite = invite.getInvite(code.code);
  _modDef12371.open({ invite });
}, 1000, { trailing: false });
const obj = {
  onOpenHubInvite(invite) {
    callback(invite);
  }
};
const result = require("set").fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default obj;