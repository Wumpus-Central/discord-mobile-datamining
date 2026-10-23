// === Module 11024: GameOrganizationInviteStore ===

// Module 11024 (GameOrganizationInviteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11025 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11026 */;
import size from "module_2" /* 2 */;

const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
let map = new Map();
const Store = initializeDefault.Store;
class GameOrganizationInviteStore extends Store {
}
const prototype = GameOrganizationInviteStore.prototype;
prototype["getInvite"] = function getInvite(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getInvites"] = function getInvites() {
  return map;
};
GameOrganizationInviteStore.displayName = "GameOrganizationInviteStore";
const gameOrganizationInviteStore = new GameOrganizationInviteStore(DispatcherDefault, {
  GAME_ORGANIZATION_INVITE_RESOLVE: function handleResolve(code) {
    code = code.code;
    value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === constants.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      map = new Map(map);
      const obj = { code, state: tmp3.RESOLVING };
      const result = map.set(code, obj);
    }
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function handleResolveSuccess(invite) {
    invite = invite.invite;
    map = new Map(map);
    const application_config = invite.application_config;
    const obj = { code: invite.code, state: constants.RESOLVED, organization: fromServerGameOrganization.fromServerGameOrganization(game_organization), application: null, displayNoun: null, linkedGuild: null };
    ({ game_organization, application, guild } = invite);
    obj.application = fromServerGameOrganization.fromServerGameOrganizationApplication(application);
    let display_noun;
    if (application_config != null) {
      display_noun = application_config.display_noun;
    }
    if (display_noun == null) {
      display_noun = null;
    }
    obj.displayNoun = display_noun;
    obj.linkedGuild = fromServerGameOrganization.fromServerGameOrganizationGuild(guild);
    const result = map.set(invite.code, obj);
    const tmpResult = fromServerGameOrganization;
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function handleResolveFailure(code) {
    code = code.code;
    value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === constants.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      map = new Map(map);
      const obj = { code, state: tmp3.ERROR, error: code.error };
      const result = map.set(code, obj);
    }
  }
});
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;