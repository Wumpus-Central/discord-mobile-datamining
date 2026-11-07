// === Module 14982: HubUtils ===

// Module 14982 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 14592 */;
import InviteStore from "InviteStore" /* 5874 */;
import apply from "apply" /* 12 */;

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