// === Module 13153: useResolvedGameOrganizationInvite ===

// Module 13153 (useResolvedGameOrganizationInvite)
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11326 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(11327).GameOrganizationInviteStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useResolvedGameOrganizationInvite.tsx");

export default function useResolvedGameOrganizationInvite(arg0) {
  _require = arg0;
  const items = [GameOrganizationInviteStore];
  return require("initialize").useStateFromStores(items, () => {
    const invite = GameOrganizationInviteStore.getInvite(closure_0);
    let state;
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