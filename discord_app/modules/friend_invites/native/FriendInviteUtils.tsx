// === Module 17443: FriendInviteUtils ===

// Module 17443 (FriendInviteUtils)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import AssetRegistryDefault from "AssetRegistry" /* 4805 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = InstantInviteActionCreatorsDefault;
  const revokeFriendInvitesResult = obj.revokeFriendInvites();
  revokeFriendInvitesResult.then(() => {
    let intl;
    const obj = { key: "TOAST_FRIEND_INVITES_REVOKED", content: intl.string(intl2.t.jSHEOQ), icon: AssetRegistryDefault };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl2.intl;
    open(obj);
  });
};
export const acceptFriendInvite = function acceptFriendInvite(invite, context) {
  const f130762 = () => closure_1_1(closure_1_2[7])();
  const tmp = null == invite.channel && null == invite.guild && null != invite.inviter;
  if (tmp) {
    let dMFromUserId = null;
    if (RelationshipStore.isFriend(invite.inviter.id)) {
      dMFromUserId = ChannelStore.getDMFromUserId(invite.inviter.id);
    }
    if (null != dMFromUserId) {
      const obj3 = InstantInviteActionCreatorsDefault;
      obj3.transitionToInvite(invite, { forceTransition: true });
      const obj4 = DispatcherDefault;
      obj4.wait(f130762);
    } else {
      let obj = InstantInviteActionCreatorsDefault;
      const obj2 = {
        inviteKey: invite.code,
        context,
        callback() {
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              const intl = intl2.intl;
              const formatToPlainString = intl.formatToPlainString;
              const inviter = invite.inviter;
              let username;
              const st2dcs = intl2.t.st2dcs;
              if (inviter != null) {
                username = inviter.username;
              }
              const obj = { key: "FRIEND_INVITE_ACCEPT_CONFIRMATION", content: formatToPlainString(st2dcs, { username }), icon: AssetRegistryDefault };
              open(obj);
              const tmpResult = DispatcherDefault;
              tmpResult.wait(f130762);
            }
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
};