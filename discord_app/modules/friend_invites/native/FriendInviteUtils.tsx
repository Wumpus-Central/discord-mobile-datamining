// discord_app/modules/friend_invites/native/FriendInviteUtils.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import InstantInviteActionCreatorsDefault from "../../../actions/InstantInviteActionCreators.tsx";
import _modDef9566 from "../../../../_runtime/metro/09566__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

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
          obj = {
            key: "FRIEND_INVITE_ACCEPT_CONFIRMATION",
            content: intl.formatToPlainString(util.t.st2dcs, { username }),
            icon: tmp(9566),
          };
          obj.open(obj);
          DispatcherDefault.wait(() => closure_1_1(closure_1_2[7])());
        },
      };
      const result = obj.acceptInviteAndTransitionToInviteChannel(obj);
    }
  }
};
