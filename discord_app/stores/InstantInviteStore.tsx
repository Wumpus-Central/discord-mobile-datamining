import { head } from "../../_runtime/07684_head.js";
import { reverse } from "../../_runtime/07686_reverse.js";
import { 07687__ } from "../../_runtime/metro/07687__.js";
// discord_app/stores/InstantInviteStore.tsx
import createFromServer from "createFromServer";
import { InviteTargetTypes } from "InviteSendStates";
import { Store } from "initialize";

let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
let c9 = false;
let c10 = false;
let c11 = false;
let map = new Map();
class InstantInviteStore extends Store {
}
const prototype = InstantInviteStore.prototype;
prototype["getInvite"] = function getInvite(arg0) {
  let targetApplicationId;
  let targetType;
  let targetUserId;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ targetType, targetUserId, targetApplicationId } = obj);
  if (targetType === InviteTargetTypes.STREAM) {
    if (null != targetUserId) {
      let tmp10;
      if (dependencyMap[arg0] != null) {
        tmp10 = tmp9[targetUserId];
      }
      let tmp4 = tmp10;
    }
    return tmp4;
  }
  if (targetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != targetApplicationId) {
      let tmp7;
      if (dependencyMap2[arg0] != null) {
        tmp7 = tmp6[targetApplicationId];
      }
      tmp4 = tmp7;
    }
  }
  tmp4 = table[arg0];
};
prototype["getFriendInvite"] = function getFriendInvite() {
  return closure_2;
};
prototype["getFriendInvitesFetching"] = function getFriendInvitesFetching() {
  return c9;
};
prototype["canRevokeFriendInvite"] = function canRevokeFriendInvite() {
  let tmp = null != closure_2;
  if (tmp) {
    tmp = !c10;
  }
  if (tmp) {
    tmp = !c11;
  }
  return tmp;
};
prototype["getReceivedInstallationIdForInviteCode"] = function getReceivedInstallationIdForInviteCode(result) {
  return map.get(result.toLowerCase());
};
InstantInviteStore.displayName = "InstantInviteStore";
const instantInviteStore = new InstantInviteStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_5 = {};
    let closure_6 = {};
    let closure_7 = {};
    let closure_8 = {};
    let c2 = null;
    let c10 = false;
    let c11 = false;
    let c9 = false;
  },
  CHANNEL_DELETE: function handleDeleteChannel(channel) {
    channel = channel.channel;
    delete tmp4[tmp3];
    delete tmp4[tmp3];
    delete tmp2[tmp];
  },
  FRIEND_INVITE_CREATE_SUCCESS: function handleFriendInviteCreateSuccess(invite) {
    closure_8[invite.invite.code] = createFromServer.createFromServer(invite.invite);
    const tmp = head;
    const tmp2 = reverse;
    let tmpResult = tmp(tmp2(07687__(Object.values(closure_8), "createdAt")));
    if (tmpResult == null) {
      tmpResult = null;
    }
    let closure_2 = tmpResult;
    let c11 = false;
  },
  FRIEND_INVITE_CREATE_FAILURE: function handleFriendInviteCreateFailure() {
    let c11 = false;
  },
  FRIEND_INVITE_REVOKE_SUCCESS: function handleFriendInviteRevokeSuccess(invites) {
    if (null != invites.invites) {
      invites = invites.invites;
      const item = invites.forEach((code) => {
        if (null != table[code.code]) {
          code = code.code;
          delete tmp2[tmp];
        }
      });
    }
    const tmp2 = head;
    const tmp3 = reverse;
    let tmp2Result = tmp2(tmp3(07687__(Object.values(closure_8), "createdAt")));
    if (tmp2Result == null) {
      tmp2Result = null;
    }
    let closure_2 = tmp2Result;
    let c10 = false;
  },
  INSTANT_INVITE_CREATE_SUCCESS: function handleInstantInviteCreateSuccess(channelId) {
    channelId = channelId.channelId;
    const fromServer = createFromServer.createFromServer(channelId.invite);
    if (fromServer.targetType === InviteTargetTypes.STREAM) {
      if (null != fromServer.targetUser) {
        if (null == dependencyMap[channelId]) {
          dependencyMap[channelId] = {};
        }
        const _String = String;
        dependencyMap[channelId][String(fromServer.targetUser.id)] = fromServer;
      }
    }
    if (fromServer.targetType === InviteTargetTypes.EMBEDDED_APPLICATION) {
      if (null != fromServer.targetApplication) {
        if (null == dependencyMap2[channelId]) {
          dependencyMap2[channelId] = {};
        }
        dependencyMap2[channelId][fromServer.targetApplication.id] = fromServer;
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
    let c10 = true;
  },
  FRIEND_INVITE_CREATE_REQUEST: function handleFriendInviteCreateRequest() {
    let c11 = true;
  },
  FRIEND_INVITES_FETCH_REQUEST: function handleFriendInviteFetchRequest() {
    let c9 = true;
  },
  FRIEND_INVITES_FETCH_RESPONSE: function handleFriendInviteFetchResponse(invites) {
    let closure_8 = {};
    invites = invites.invites;
    const item = invites.forEach((code) => {
      closure_8[code.code] = createFromServer.createFromServer(code);
    });
    const tmp2 = head;
    const tmp3 = reverse;
    let tmp2Result = tmp2(tmp3(07687__(Object.values(closure_8), "createdAt")));
    if (tmp2Result == null) {
      tmp2Result = null;
    }
    let closure_2 = tmp2Result;
    let c9 = false;
  },
  INSTANT_INVITE_CLEAR: function handleInstantInviteClear(arg0) {
    delete tmp2[tmp];
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET: function handleReceivedInstallationIdSet(inviteCode) {
    map = new Map(map);
    const result = map.set(inviteCode.inviteCode.toLowerCase(), inviteCode.receivedInstallationId);
  },
  INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR: function handleReceivedInstallationIdClear(inviteCode) {
    const formatted = inviteCode.inviteCode.toLowerCase();
    if (map.has(formatted)) {
      const _Map = Map;
      map = new Map(map);
      map.delete(formatted);
    } else {
      return false;
    }
    const str = inviteCode.inviteCode;
  },
  INVITE_MODAL_CLOSE: function handleInviteModalClose(inviteCode) {
    let tmp = null != str;
    if (tmp) {
      const formatted = str.toLowerCase();
      if (map.has(formatted)) {
        const _Map = Map;
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
      map = new Map();
    }
  }
});
let result = require("head").fileFinishedImporting("stores/InstantInviteStore.tsx");

export default instantInviteStore;