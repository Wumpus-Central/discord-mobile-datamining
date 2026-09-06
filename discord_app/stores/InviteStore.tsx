// discord_app/stores/InviteStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import InviteCodeUtils from "../modules/instant_invite/InviteCodeUtils.tsx";
import size from "../../_runtime/metro/00002__.js";

function updateInvite(code, fn) {
  let str = code;
  if (code == null) {
    str = "";
  }
  let obj = InviteCodeUtils;
  const result = obj.parseExtraDataFromInviteKey(str);
  value = map.get(str);
  if (null != value) {
    obj = { state: InviteStates.RESOLVING };
    const merged = Object.assign(value);
  } else {
    obj = { state: InviteStates.RESOLVING, code: result.baseCode };
  }
  fn(obj);
  map = new Map(map);
  const result1 = map.set(str, obj);
  const guild = obj.guild;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  if (null != id) {
    obj1 = {};
    const merged1 = Object.assign(obj1);
    obj1[obj.guild.id] = str;
  }
}
function handleInviteResolveFailure(code) {
  const banned = code;
  updateInvite(code.code, (arg0) => {
    if ("banned" in banned) {
      if (banned.banned) {
        let EXPIRED = InviteStates.BANNED;
      }
      arg0.state = EXPIRED;
    }
    EXPIRED = InviteStates.EXPIRED;
  });
}
const InviteStates = Constants.InviteStates;
new Map();
const map1 = new Map();
let map = new Map();
const Store = initializeDefault.Store;
class InviteStore extends Store {}
const prototype = InviteStore.prototype;
prototype["getInvite"] = function getInvite(arg0) {
  return map.get(arg0);
};
prototype["getInviteError"] = function getInviteError(arg0) {
  return map1.get(arg0);
};
prototype["getInvites"] = function getInvites() {
  return map;
};
prototype["getInviteKeyForGuildId"] = function getInviteKeyForGuildId(id) {
  return obj1[id];
};
prototype["getFriendMemberIds"] = function getFriendMemberIds(arg0) {
  return map.get(arg0);
};
InviteStore.displayName = "InviteStore";
const inviteStore = new InviteStore(DispatcherDefault, {
  INVITE_RESOLVE: function handleInviteResolve(code) {
    code = code.code;
    let obj = InviteCodeUtils;
    const result = obj.parseExtraDataFromInviteKey(code);
    map = new Map(map);
    obj = { code: result.baseCode, state: InviteStates.RESOLVING };
    const result1 = map.set(code, obj);
  },
  INVITE_RESOLVE_SUCCESS: function handleInviteResolveSuccess(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = InviteStates.RESOLVED;
      arg0.guild = code.invite.guild;
      arg0.channel = code.invite.channel;
      arg0.inviter = code.invite.inviter;
      let prop = code.invite.approximate_member_count;
      if (prop == null) {
        prop = null;
      }
      arg0.approximate_member_count = prop;
      let prop1 = tmp.invite.approximate_presence_count;
      if (prop1 == null) {
        prop1 = null;
      }
      arg0.approximate_presence_count = prop1;
      arg0.target_type = code.invite.target_type;
      arg0.target_user = code.invite.target_user;
      arg0.target_application = code.invite.target_application;
      arg0.expires_at = code.invite.expires_at;
      arg0.friends_count = code.invite.friends_count;
      arg0.is_contact = code.invite.is_contact;
      arg0.guild_scheduled_event = code.invite.guild_scheduled_event;
      arg0.type = code.invite.type;
      arg0.flags = code.invite.flags;
      arg0.is_nickname_changeable = code.invite.is_nickname_changeable;
      arg0.profile = code.invite.profile;
      arg0.roles = code.invite.roles;
      arg0.target_channel_id = code.invite.target_channel_id;
      arg0.target_message_id = code.invite.target_message_id;
      arg0.liveliness = code.invite.liveliness;
      arg0.guild_experiments = code.invite.guild_experiments;
    });
  },
  INVITE_RESOLVE_FAILURE: handleInviteResolveFailure,
  INSTANT_INVITE_REVOKE_SUCCESS: handleInviteResolveFailure,
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreate(invite) {
    updateInvite(invite.invite.code, (arg0) => {
      arg0.state = InviteStates.RESOLVED;
      arg0.inviter = invite.invite.inviter;
    });
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    invites = invites.invites;
    const item = invites.forEach((code) => {
      updateInvite(code.code, (arg0) => {
        arg0.state = constants.EXPIRED;
      });
    });
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreate(invite) {
    updateInvite(invite.invite.code, (arg0) => {
      arg0.state = InviteStates.RESOLVED;
      arg0.guild = invite.invite.guild;
      arg0.channel = invite.invite.channel;
      arg0.inviter = invite.invite.inviter;
      let prop = invite.invite.approximate_member_count;
      if (prop == null) {
        prop = null;
      }
      arg0.approximate_member_count = prop;
      let prop1 = tmp.invite.approximate_presence_count;
      if (prop1 == null) {
        prop1 = null;
      }
      arg0.approximate_presence_count = prop1;
      arg0.target_type = invite.invite.target_type;
      arg0.target_user = invite.invite.target_user;
      arg0.target_application = invite.invite.target_application;
      arg0.guild_scheduled_event = invite.invite.guild_scheduled_event;
      arg0.type = invite.invite.type;
      arg0.is_nickname_changeable = invite.invite.is_nickname_changeable;
      arg0.profile = invite.invite.profile;
      arg0.roles = invite.invite.roles;
    });
  },
  INVITE_ACCEPT: function handleAcceptInvite(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.ACCEPTING;
    });
  },
  INVITE_ACCEPT_SUCCESS: function handleAcceptInviteSuccess(code) {
    updateInvite(code.code, (channel) => {
      channel.state = InviteStates.ACCEPTED;
      channel.guild = code.invite.guild;
      channel.new_member = code.invite.new_member;
      const merged = Object.assign(channel.channel);
      const merged1 = Object.assign(code.invite.channel);
      channel.channel = {};
    });
  },
  INVITE_ACCEPT_FAILURE: function handleAcceptInviteFailure(code) {
    const result = map1.set(code.code, code.error);
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.ERROR;
    });
  },
  INVITE_APP_OPENING: function handleInviteAppOpening(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.APP_OPENING;
    });
  },
  INVITE_APP_OPENED: function handleInviteAppOpened(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.APP_OPENED;
    });
  },
  INVITE_APP_NOT_OPENED: function handleInviteAppNotOpened(code) {
    updateInvite(code.code, (arg0) => {
      arg0.state = constants.APP_NOT_OPENED;
    });
  },
  INVITE_FRIEND_MEMBERS_FETCH_SUCCESS: function handleInviteFriendMembersFetchSuccess(code) {
    map = new Map(map);
    const result = map.set(code.code, code.friendMemberIds);
  },
  INVITE_FRIEND_MEMBERS_FETCH_FAILURE: function handleInviteFriendMembersFetchFailure(code) {
    if (map.has(code.code)) {
      const _Map = Map;
      map = new Map(map);
      map.delete(code.code);
    } else {
      return false;
    }
  },
});
let result = size.fileFinishedImporting("stores/InviteStore.tsx");

export default inviteStore;
