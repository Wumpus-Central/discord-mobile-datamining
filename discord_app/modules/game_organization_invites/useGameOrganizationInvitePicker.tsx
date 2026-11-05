// === Module 11854: useGameOrganizationInvitePicker ===

// Module 11854 (useGameOrganizationInvitePicker)
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11853 */;
import groupInvitableGameOrganizationsByApplicationDefault from "groupInvitableGameOrganizationsByApplication" /* 11860 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11861 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11864 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;

const require = globalThis.__r;
const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationInvitePicker.tsx");

export default function useGameOrganizationInvitePicker(arg0) {
  _require = arg0;
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0));
  let tmp2 = stateFromStores(data[3])("game_organization_invite_picker");
  data = tmp2.data;
  const items1 = [data];
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let tmp2 = null;
    if (null != data) {
      tmp2 = groupInvitableGameOrganizationsByApplicationDefault(tmp);
    }
    return tmp2;
  }, items1);
  let obj = require("initialize");
  return {
    user: stateFromStores,
    groups: memo,
    error: tmp2.error,
    handleInvite: noop.useCallback((organization) => {
      if (null != stateFromStores) {
        const result = getGameOrganizationInviteSendStateKey.toLinkedGameOrganization(organization);
        const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
        sendGameOrganizationInviteDefault(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
      }
    }, items2)
  };
};