// === Module 12331: useResolvedGameOrganizationInvite ===

// Module 12331 (useResolvedGameOrganizationInvite)
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11916 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(11917).GameOrganizationInviteStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useResolvedGameOrganizationInvite.tsx");

export default function useResolvedGameOrganizationInvite(arg0) {
  _require = arg0;
  items = [GameOrganizationInviteStore];
  return require("initialize").useStateFromStores(items, () => {
    const invite = GameOrganizationInviteStore.getInvite(closure_0);
    state = undefined;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  });
};