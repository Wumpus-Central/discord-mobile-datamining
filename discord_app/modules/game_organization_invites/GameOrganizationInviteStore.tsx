// === Module 11559: GameOrganizationInviteStore ===

// Module 11559 (GameOrganizationInviteStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import GameOrganizationModels from "GameOrganizationModels" /* 11561 */;
import fromServerGameOrganization from "fromServerGameOrganization" /* 11562 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11560 */;
import size from "module_2" /* 2 */;

({ GameOrganizationCharacterMode: c2, GameOrganizationInviteStates: c3 } = GameOrganizationInviteConstants);
let map = new Map();
let set = new Set();
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
prototype["isJoinFlowPending"] = function isJoinFlowPending(code) {
  return set.has(code);
};
prototype["getPendingJoinFlowCodes"] = function getPendingJoinFlowCodes() {
  return set;
};
GameOrganizationInviteStore.displayName = "GameOrganizationInviteStore";
const gameOrganizationInviteStore = new GameOrganizationInviteStore(DispatcherDefault, {
  GAME_ORGANIZATION_INVITE_RESOLVE: function handleResolve(code) {
    code = code.code;
    value = map.get(code);
    state = undefined;
    if (value != null) {
      state = value.state;
    }
    if (state === constants2.RESOLVED) {
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
    const obj = { code: invite.code, state: constants2.RESOLVED, inviterId: invite.inviter_id, accepted: invite.accepted, guildId: invite.guild.id, organization: GameOrganizationModels.gameOrganizationFromServer(game_organization), application: null, displayNoun: null, characterMode: null, linkedGuild: null };
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
    let character_mode;
    if (application_config != null) {
      character_mode = application_config.character_mode;
    }
    if (character_mode == null) {
      character_mode = constants.SINGLE;
    }
    obj.characterMode = character_mode;
    obj.linkedGuild = fromServerGameOrganization.fromServerGameOrganizationGuild(guild);
    const result = map.set(invite.code, obj);
    const tmpResult = fromServerGameOrganization;
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function handleResolveFailure(code) {
    code = code.code;
    value = map.get(code);
    state = undefined;
    if (value != null) {
      state = value.state;
    }
    if (state === constants2.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      map = new Map(map);
      const obj = { code, state: tmp3.ERROR, error: code.error };
      const result = map.set(code, obj);
    }
  },
  GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function handleAcceptSuccess(code) {
    code = code.code;
    value = map.get(code);
    state = undefined;
    if (value != null) {
      state = value.state;
    }
    if (state !== constants2.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      map = new Map(map);
      const obj = {};
      const merged = Object.assign(value);
      obj.accepted = true;
      const result = map.set(code, obj);
    }
  },
  GAME_ORGANIZATION_JOIN_FLOW_PENDING: function handleJoinFlowPending(arg0) {
    ({ code, pending } = arg0);
    if (set.has(code) === pending) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(set);
      if (pending) {
        set.add(code);
      } else {
        set.delete(code);
      }
    }
  }
});
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;