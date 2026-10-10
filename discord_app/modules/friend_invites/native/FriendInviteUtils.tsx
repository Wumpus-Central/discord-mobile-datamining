// === Module 17980: FriendInviteUtils ===

// Module 17980 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8496 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  InstantInviteActionCreatorsDefault.revokeFriendInvites().then(() => {
    const obj2 = { text: null, variant: "success" };
    const intl = util.intl;
    obj2.text = intl.string(util.t.jSHEOQ);
    ToastActionCreatorsDefault.open("TOAST_FRIEND_INVITES_REVOKED", obj2);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  if (tmp) {
    let dMFromUserId = null;
    if (RelationshipStore.isFriend(invite.inviter.id)) {
      dMFromUserId = ChannelStore.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      InstantInviteActionCreatorsDefault.transitionToInvite(invite, { forceTransition: true });
      DispatcherDefault.wait(() => closure_1_1(closure_1_2[6])());
    } else {
      let obj2 = {
        inviteKey: invite.code,
        context,
        callback() {
              const intl = util.intl;
              const inviter = invite.inviter;
              let username;
              if (inviter != null) {
                username = inviter.username;
              }
              const obj = ToastActionCreatorsDefault;
              obj.open("FRIEND_INVITE_ACCEPT_CONFIRMATION", { text: intl.formatToPlainString(util.t.st2dcs, { username }), variant: "success" });
              const obj2 = { text: intl.formatToPlainString(util.t.st2dcs, { username }), variant: "success" };
              DispatcherDefault.wait(() => closure_1_1(closure_1_2[6])());
              const tmpResult = DispatcherDefault;
            }
      };
      const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
  tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
};