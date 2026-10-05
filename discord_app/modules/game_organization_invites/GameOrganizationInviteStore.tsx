// discord_app/modules/game_organization_invites/GameOrganizationInviteStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

const constants = GameOrganizationInviteConstants.GameOrganizationInviteStates;
let map = new Map();
const Store = get_initializedDefault.Store;
class GameOrganizationInviteStore extends Store {
  getInvite(arg0) {
    let value = map.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getInvites() {
    return map;
  }
}
const prototype = GameOrganizationInviteStore.prototype;
GameOrganizationInviteStore.displayName = "GameOrganizationInviteStore";
let obj = {
  GAME_ORGANIZATION_INVITE_RESOLVE: function handleResolve(code) {
    code = code.code;
    const value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === constants.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const obj = { code, state: tmp3.RESOLVING };
      const result = map.set(code, obj);
    }
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function handleResolveSuccess(invite) {
    let application;
    let application_config;
    let display_noun;
    let game_organization;
    invite = invite.invite;
    const code = invite.code;
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
      displayNoun: display_noun,
    };
    display_noun = undefined;
    set = map.set;
    if (application_config != null) {
      display_noun = application_config.display_noun;
    }
    if (display_noun == null) {
      display_noun = null;
    }
    const result = set(code, obj);
  },
  GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function handleResolveFailure(code) {
    code = code.code;
    const error = code.error;
    const value = map.get(code);
    let state;
    if (value != null) {
      state = value.state;
    }
    if (state === constants.RESOLVED) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      const obj = { code, state: tmp3.ERROR, error };
      const result = map.set(code, obj);
    }
  },
};
const gameOrganizationInviteStore = new GameOrganizationInviteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteStore.tsx");

export default gameOrganizationInviteStore;
