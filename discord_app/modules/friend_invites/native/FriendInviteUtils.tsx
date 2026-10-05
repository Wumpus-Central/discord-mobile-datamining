// discord_app/modules/friend_invites/native/FriendInviteUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import intl2 from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/04805_AssetRegistry.js";
import InstantInviteActionCreatorsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/friend_invites/native/FriendInviteUtils.tsx");

export const DEFAULT_EXPIRATION_DAYS = 7;
export const DEFAULT_EXPIRATION_USES = 5;
export const revokeAllFriendInvites = function revokeAllFriendInvites() {
  let obj = InstantInviteActionCreatorsDefault;
  const revokeFriendInvitesResult = obj.revokeFriendInvites();
  revokeFriendInvitesResult.then(() => {
    let intl;
    const obj = {
      key: "TOAST_FRIEND_INVITES_REVOKED",
      content: intl.string(intl2.t.jSHEOQ),
      icon: AssetRegistryDefault,
    };
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
          const obj = {
            key: "FRIEND_INVITE_ACCEPT_CONFIRMATION",
            content: formatToPlainString(st2dcs, { username }),
            icon: AssetRegistryDefault,
          };
          open(obj);
          const tmpResult = DispatcherDefault;
          tmpResult.wait(f130762);
        },
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj2);
    }
  }
};
