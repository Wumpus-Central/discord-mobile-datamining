// === Module 16406: useLinkedGameOrganizationInviteSender ===

// Module 16406 (useLinkedGameOrganizationInviteSender)
import getGameOrganizationInviteSendStateKeyDefault from "getGameOrganizationInviteSendStateKey" /* 12566 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 12570 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 12573 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;

const require = globalThis.__r;

const require = fn;
let closure_4 = fn(12565).useInstantInviteSendStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/useLinkedGameOrganizationInviteSender.tsx");

export default function useLinkedGameOrganizationInviteSender(arg0) {
  _require = arg0;
  items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
    let prop;
    if (guild != null) {
      prop = guild.linkedGameOrganization;
    }
    if (prop == null) {
      prop = null;
    }
    return prop;
  });
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = stateFromStores(12566)(stateFromStores);
  }
  dependencyMap = tmp3;
  let tmp5 = closure_4((arg0) => {
    let tmp2;
    if (null != closure_2) {
      tmp2 = arg0[tmp];
    }
    return tmp2;
  });
  noop = tmp5;
  const obj2 = { getSendState: null, handleInvite: null };
  const items1 = [tmp5];
  obj2.getSendState = noop.useCallback((arg0) => {
    let tmp2;
    if (closure_3 != null) {
      tmp2 = tmp[arg0];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores];
  obj2.handleInvite = noop.useCallback((stateFromStores2) => {
    if (null != stateFromStores) {
      const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
      sendGameOrganizationInviteDefault(tmp6, stateFromStores, stateFromStores2, showGameOrganizationInviteErrorToastDefault);
    }
  }, items2);
  return obj2;
};