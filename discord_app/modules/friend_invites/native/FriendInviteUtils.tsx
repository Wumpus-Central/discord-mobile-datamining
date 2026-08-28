// discord_app/modules/friend_invites/native/FriendInviteUtils.tsx
import dispatcherDefault from "../../../Dispatcher.tsx";
import generateAcceptInviteOptionsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import closure_3 from "../../../stores/ChannelStore.tsx";
import closure_4 from "../../../stores/RelationshipStore.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = generateAcceptInviteOptionsDefault;
  generateAcceptInviteOptionsDefault.revokeFriendInvites().then(() => {
    let obj = callback2(4163);
    obj = { key: "TOAST_FRIEND_INVITES_REVOKED", content: null, icon: null };
    const intl = callback(1236).intl;
    obj[1] = intl.string(callback(1236).t.jSHEOQ);
    obj[2] = callback2(9457);
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
      const obj3 = generateAcceptInviteOptionsDefault;
      dispatcherDefault.wait(() => callback(table[7])());
      const obj4 = dispatcherDefault;
    } else {
      let obj = generateAcceptInviteOptionsDefault;
      obj = { inviteKey: null, context: null, callback: null };
      obj[0] = invite.code;
      obj[1] = arg1;
      obj[2] = function callback() {
        let obj = closure_1_1(closure_1_2[3]);
        const intl = invite(closure_1_2[4]).intl;
        const inviter = invite.inviter;
        let username;
        if (inviter != null) {
          username = inviter.username;
        }
        obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(invite(closure_1_2[4]).t.st2dcs, { username }), icon: tmp(tmp2[5]) };
        obj.open(obj);
        closure_1_1(closure_1_2[6]).wait(() => callback(table[7])());
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
};