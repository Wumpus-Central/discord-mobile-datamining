// === Module 11652: InvitableGameOrganizationStore ===

// Module 11652 (InvitableGameOrganizationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11364 */;
import size from "module_2" /* 2 */;

function fromServerInvitableGameOrganization(game_organization) {
  const obj = { organization: fromServerGameOrganization.fromServerGameOrganization(game_organization.game_organization), application: null, displayNoun: null };
  obj.application = fromServerGameOrganization.fromServerGameOrganizationApplication(game_organization.application);
  let display_noun = game_organization.application_config.display_noun;
  if (display_noun == null) {
    display_noun = null;
  }
  obj.displayNoun = display_noun;
  return obj;
}
const QueryIds = Constants.QueryIds;
let closure_3 = [];
const map = new Map();
let c5 = null;
const Store = initializeDefault.Store;
class InvitableGameOrganizationStore extends Store {
}
InvitableGameOrganizationStore.prototype["getInvitableGameOrganizations"] = function getInvitableGameOrganizations(guildIds) {
  const result = QueryIds.INVITABLE_GAME_ORGANIZATIONS(guildIds);
  if (null == result) {
    value = closure_3;
  } else {
    value = map.get(result);
    if (value == null) {
      value = c5;
    }
  }
  return value;
};
InvitableGameOrganizationStore.displayName = "InvitableGameOrganizationStore";
const invitableGameOrganizationStore = new InvitableGameOrganizationStore(DispatcherDefault, {
  INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS: function handleFetchSuccess(gameOrganizations) {
    gameOrganizations = gameOrganizations.gameOrganizations;
    const result = QueryIds.INVITABLE_GAME_ORGANIZATIONS(gameOrganizations.guildIds);
    if (null == result) {
      return false;
    } else {
      c5 = gameOrganizations.map(fromServerInvitableGameOrganization);
      const result1 = map.set(result, c5);
    }
  },
  LOGOUT: function handleLogout() {
    if (null == c5) {
      return false;
    } else {
      map.clear();
      c5 = null;
    }
  }
});
let result = size.fileFinishedImporting("modules/game_organization_invites/InvitableGameOrganizationStore.tsx");

export default invitableGameOrganizationStore;