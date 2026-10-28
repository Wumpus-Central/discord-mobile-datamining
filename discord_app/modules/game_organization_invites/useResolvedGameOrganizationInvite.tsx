// discord_app/modules/game_organization_invites/useResolvedGameOrganizationInvite.tsx
import GameOrganizationInviteStore from "GameOrganizationInviteStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(11068).GameOrganizationInviteStates;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useResolvedGameOrganizationInvite.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useResolvedGameOrganizationInvite(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GameOrganizationInviteStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
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
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : function useResolvedGameOrganizationInvite(arg0) {
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
