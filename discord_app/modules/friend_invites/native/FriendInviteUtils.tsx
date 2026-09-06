// === Module 17303: FriendInviteUtils ===

// Module 17303 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8378 */;
import _modDef9566 from "module_9566" /* 9566 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  InstantInviteActionCreatorsDefault.revokeFriendInvites().then(() => {
    const obj = { key: "TOAST_FRIEND_INVITES_REVOKED", content: null, icon: null };
    const intl = util.intl;
    obj.content = intl.string(util.t.jSHEOQ);
    obj.icon = _modDef9566;
    obj.open(obj);
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
      DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
    } else {
      let obj = {
        inviteKey: invite.code,
        context,
        callback() {
              let obj = ToastActionCreatorsDefault;
              const intl = util.intl;
              const inviter = invite.inviter;
              let username;
              if (inviter != null) {
                username = inviter.username;
              }
              obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef9566 };
              obj.open(obj);
              DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
              const tmpResult = DispatcherDefault;
            }
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
  tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
};