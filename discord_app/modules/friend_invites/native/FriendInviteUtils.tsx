// === Module 17754: FriendInviteUtils ===

// Module 17754 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4766 */;
import _modDef5005 from "module_5005" /* 5005 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8472 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  InstantInviteActionCreatorsDefault.revokeFriendInvites().then(() => {
    const obj2 = { key: "TOAST_FRIEND_INVITES_REVOKED", content: null, icon: null };
    const intl = util.intl;
    obj2.content = intl.string(util.t.jSHEOQ);
    obj2.icon = _modDef5005;
    ToastActionCreatorsDefault.open(obj2);
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
              obj.open({ key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef5005 });
              const obj2 = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: intl.formatToPlainString(util.t.st2dcs, { username }), icon: _modDef5005 };
              DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
              const tmpResult = DispatcherDefault;
            }
      };
      const result = InstantInviteActionCreatorsDefault.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
  tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
};