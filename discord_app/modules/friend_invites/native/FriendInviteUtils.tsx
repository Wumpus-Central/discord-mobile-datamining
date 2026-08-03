import ensureGuildLoaded from "ensureGuildLoaded";
import upsertRelationship from "upsertRelationship";

const require = arg1;
let result = require("generateAcceptInviteOptions").fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = importDefault(7667);
  importDefault(7667).revokeFriendInvites().then(() => {
    let obj = callback2(3956);
    obj = { key: "TOAST_FRIEND_INVITES_REVOKED", content: null, icon: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.jSHEOQ);
    obj[2] = callback2(10509);
    obj.open(obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, arg1) {
  let closure_0 = invite;
  if (tmp) {
    let dMFromUserId = null;
    if (friend.isFriend(invite.inviter.id)) {
      dMFromUserId = dMFromUserId.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      importDefault(7667).transitionToInvite(invite, { forceTransition: true });
      const obj3 = importDefault(7667);
      importDefault(709).wait(() => callback(table[7])());
      const obj4 = importDefault(709);
    } else {
      let obj = importDefault(7667);
      obj = { inviteKey: null, context: null, callback: null };
      obj[0] = invite.code;
      obj[1] = arg1;
      obj[2] = function callback() {
        let obj = outer1_1(outer1_2[3]);
        const intl = invite(outer1_2[4]).intl;
        const inviter = invite.inviter;
        let username;
        if (inviter != null) {
          username = inviter.username;
        }
        obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(invite(outer1_2[4]).t.st2dcs, { username }), icon: tmp(tmp2[5]) };
        obj.open(obj);
        outer1_1(outer1_2[6]).wait(() => callback(table[7])());
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
};