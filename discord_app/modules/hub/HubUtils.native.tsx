// === Module 13027: HubUtils ===

// Module 13027 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12836 */;
import InviteStore from "InviteStore" /* 4590 */;
import apply from "module_12" /* 12 */;

let closure_3 = apply.throttle((code) => {
  const invite = InviteStore.getInvite(code.code);
  HubEmailConnectionModalActionCreatorsDefault.open({ invite });
}, 1000, { trailing: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubUtils.native.tsx");

export default {
  onOpenHubInvite(invite) {
    closure_3(invite);
  }
};