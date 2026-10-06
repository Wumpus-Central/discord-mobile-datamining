// discord_app/stores/InstantInviteStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../modules/instant_invite/Constants.tsx";
import headDefault from "../../_runtime/08067_head.js";
import reverseDefault from "../../_runtime/08069_reverse.js";
import _modDef8070 from "../../_runtime/metro/08070__.js";
import InviteRecord from "../records/InviteRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

let c2, closure_5, closure_6, closure_7;

const InviteTargetTypes = Constants.InviteTargetTypes;
const hasOwnProperty = {};
const metroRequire = {};
const metroImportDefault = {};
let closure_8 = {};
let c9 = false;
let c10 = false;
let c11 = false;
let map = new Map();
const Store = get_initializedDefault.Store;
class InstantInviteStore extends Store {
  getInvite(arg0) {
    let targetApplicationId;
    let targetType;
    let targetUserId;
    let tmp4;
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ targetType, targetUserId, targetApplicationId } = obj);
    if (targetType === InviteTargetTypes.STREAM) {
      if (null != targetUserId) {
        let tmp10;
        if (closure_6[arg0] != null) {
          tmp10 = tmp9[targetUserId];
        }
        tmp4 = tmp10;
      }
      return tmp4;
    }
    if (targetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != targetApplicationId) {
        let tmp7;
        if (closure_7[arg0] != null) {
          tmp7 = tmp6[targetApplicationId];
        }
        tmp4 = tmp7;
      }
    }
    tmp4 = closure_5[arg0];
  }
  getFriendInvite() {
    return c2;
  }
  getFriendInvitesFetching() {
    return c9;
  }
  canRevokeFriendInvite() {
    return null != c2 && !c10 && !c11;
  }
  getReceivedInstallationIdForInviteCode(result) {
    return map.get(result.toLowerCase());
  }
}
const prototype = InstantInviteStore.prototype;
InstantInviteStore.displayName = "InstantInviteStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5 = {};
    closure_6 = {};
    closure_7 = {};
    closure_8 = {};
    c2 = null;
    c10 = false;
    c11 = false;
    c9 = false;
  },
  CHANNEL_DELETE: function handleDeleteChannel(channel) {
    channel = channel.channel;
    delete closure_5[channel.id];
    delete closure_6[channel.id];
    delete closure_7[channel.id];
  },
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreateSuccess(invite) {
    closure_8[invite.invite.code] = InviteRecord.createFromServer(invite.invite);
    const tmp = headDefault;
    const tmp2 = reverseDefault;
    const tmp3 = _modDef8070;
    let tmpResult = tmp(tmp2(tmp3(Object.values(closure_8), "createdAt")));
    if (tmpResult == null) {
      tmpResult = null;
    }
    c2 = tmpResult;
    c11 = false;
  },
  FRIEND_INVITE_CREATE_FAILURE: function handleFriendInviteCreateFailure() {
    c11 = false;
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    if (null != invites.invites) {
      invites = invites.invites;
      const item = invites.forEach((item) => {
        if (null != closure_1_8[item.code]) {
          delete closure_1_8[item.code];
        }
      });
    }
    const tmp2 = headDefault;
    const tmp3 = reverseDefault;
    const tmp4 = _modDef8070;
    let tmp2Result = tmp2(tmp3(tmp4(Object.values(closure_8), "createdAt")));
    if (tmp2Result == null) {
      tmp2Result = null;
    }
    c2 = tmp2Result;
    c10 = false;
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreateSuccess(channelId) {
    channelId = channelId.channelId;
    const fromServer = InviteRecord.createFromServer(channelId.invite);
    if (fromServer.targetType === InviteTargetTypes.STREAM) {
      if (null != fromServer.targetUser) {
        if (null == closure_6[channelId]) {
          closure_6[channelId] = {};
        }
        const _String = String;
        closure_6[channelId][String(fromServer.targetUser.id)] = fromServer;
      }
    }
    if (fromServer.targetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != fromServer.targetApplication) {
        if (null == closure_7[channelId]) {
          closure_7[channelId] = {};
        }
        closure_7[channelId][fromServer.targetApplication.id] = fromServer;
      }
    }
    closure_5[channelId] = fromServer;
  },
  INSTANT_INVITE_CREATE_FAILURE: function handleInstantInviteCreateFailure(channelId) {
    closure_5[channelId.channelId] = null;
  },
  INSTANT_INVITE_REVOKE_SUCCESS: function handleInstantInviteRevokeSuccess(channelId) {
    closure_5[channelId.channelId] = null;
  },
  FRIEND_INVITE_REVOKE_REQUEST: function handleFriendInviteRevokeRequest() {
    c10 = true;
  },
  FRIEND_INVITE_CREATE_REQUEST: function handleFriendInviteCreateRequest() {
    c11 = true;
  },
  FRIEND_INVITES_FETCH_REQUEST: function handleFriendInviteFetchRequest() {
    c9 = true;
  },
  FRIEND_INVITES_FETCH_RESPONSE: function handleFriendInviteFetchResponse(invites) {
    closure_8 = {};
    invites = invites.invites;
    const item = invites.forEach((code) => {
      closure_1_8[code.code] = InviteRecord.createFromServer(code);
    });
    const tmp2 = headDefault;
    const tmp3 = reverseDefault;
    const tmp4 = _modDef8070;
    let tmp2Result = tmp2(tmp3(tmp4(Object.values(closure_8), "createdAt")));
    if (tmp2Result == null) {
      tmp2Result = null;
    }
    c2 = tmp2Result;
    c9 = false;
  },
  INSTANT_INVITE_CLEAR: function handleInstantInviteClear(arg0) {
    delete closure_5[arg0.channelId];
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function handleReceivedInstallationIdSet(inviteCode) {
    map = new Map(map);
    const str = inviteCode.inviteCode;
    const result = map.set(str.toLowerCase(), inviteCode.receivedInstallationId);
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: function handleReceivedInstallationIdClear(inviteCode) {
    const str = inviteCode.inviteCode;
    const formatted = str.toLowerCase();
    if (map.has(formatted)) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(map);
      map.delete(formatted);
    } else {
      return false;
    }
  },
  INVITE_MODAL_CLOSE: function handleInviteModalClose(inviteCode) {
    let tmp = null != str;
    if (tmp) {
      const formatted = str.toLowerCase();
      if (map.has(formatted)) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(map);
        map.delete(formatted);
      }
      tmp = flag;
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    if (0 === map.size) {
      return false;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map();
    }
  },
};
const instantInviteStore = new InstantInviteStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/InstantInviteStore.tsx");

export default instantInviteStore;
