// === Module 16516: DEFAULT_EXPIRATION_DAYS ===

// Module 16516 (DEFAULT_EXPIRATION_DAYS)
import dispatcherDefault from "dispatcher" /* 709 */;
import dispatcherDefault2 from "dispatcher" /* 4094 */;
import generateAcceptInviteOptionsDefault from "generateAcceptInviteOptions" /* 8042 */;
import registerAssetDefault from "registerAsset" /* 8764 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  generateAcceptInviteOptionsDefault.revokeFriendInvites().then((result) => {
    callback2(4094);
    const obj = { key: "TOAST_FRIEND_INVITES_REVOKED", content: null, icon: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.jSHEOQ);
    obj[2] = callback2(8764);
    obj.open(obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, arg1) {
  closure_0 = invite;
  if (tmp) {
    let dMFromUserId = null;
    if (friend.isFriend(invite.inviter.id)) {
      dMFromUserId = dMFromUserId.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      generateAcceptInviteOptionsDefault.transitionToInvite(invite, { forceTransition: true });
      dispatcherDefault.wait(() => callback(table[7])());
    } else {
      let obj = { inviteKey: null, context: null, callback: null };
      obj[0] = invite.code;
      obj[1] = arg1;
      obj[2] = function callback() {
        let obj = dispatcherDefault2;
        const intl = invite(dependencyMap[4]).intl;
        const inviter = invite.inviter;
        let username;
        if (inviter != null) {
          username = inviter.username;
        }
        obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(invite(dependencyMap[4]).t.st2dcs, { username }), icon: registerAssetDefault };
        obj.open(obj);
        dispatcherDefault.wait(() => callback(table[7])());
        const tmpResult = dispatcherDefault;
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
  tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
};