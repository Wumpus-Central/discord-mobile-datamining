// discord_app/modules/game_organization_invites/GameOrganizationInviteStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
let map = new Map();
const Store = initializeDefault.Store;
class GameOrganizationInviteStore extends Store {}
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
    ({ game_organization, application, application_config } = invite);
    const obj = {
      code: invite.code,
      state: constants.RESOLVED,
      organization: {
        id: game_organization.id,
        name: game_organization.name,
        description: game_organization.description,
        iconUrl: game_organization.icon_url,
        applicationId: game_organization.application_id,
        memberCount: game_organization.member_count,
        maxMembers: game_organization.max_members,
      },
      application: { id: application.id, name: application.name, iconUrl: application.icon_url },
      displayNoun: null,
    };
    let display_noun;
    if (application_config != null) {
      display_noun = application_config.display_noun;
    }
    if (display_noun == null) {
      display_noun = null;
    }
    obj.displayNoun = display_noun;
    const result = map.set(invite.code, obj);
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
  },
});
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;
