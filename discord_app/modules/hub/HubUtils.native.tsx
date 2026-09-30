// === Module 12690: HubUtils ===

// Module 12690 (HubUtils)
import HubEmailConnectionModalActionCreatorsDefault from "HubEmailConnectionModalActionCreators" /* 12460 */;
import InviteStore from "InviteStore" /* 4847 */;
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