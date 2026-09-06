// discord_app/modules/accept_invite/native/AcceptInviteManager.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import InviteTypeUtils from "../../instant_invite/InviteTypeUtils.tsx";
import FriendInviteUtils from "../../friend_invites/native/FriendInviteUtils.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteStore from "../../../stores/InviteStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const ACCEPT_INVITE_MODAL_KEY = fn(7671).ACCEPT_INVITE_MODAL_KEY;
const Constants = fn(1074);
({ InviteStates: c10, Permissions: closure_11, Routes: closure_12 } = Constants);
let prototype = function AcceptInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._isRegistration = false;
  applyArgumentsResult.actions = {
    DISPLAYED_INVITE_SHOW(code) {
      return applyArgumentsResult._handleShowInvite(code);
    },
    DISPLAYED_INVITE_CLEAR() {
      return applyArgumentsResult._handleClearInvite();
    },
    DEFERRED_INVITE_SHOW() {
      return applyArgumentsResult._handleShowDeferredInvite();
    },
    REGISTER_SUCCESS() {
      return applyArgumentsResult._handleRegisterSuccess();
    },
  };
  applyArgumentsResult._handleShowInvite = function _handleShowInvite(code) {
    code = code.code;
    ({ deeplinkAttemptId, invite_instance_id } = code);
    if (AuthenticationStore.isAuthenticated()) {
      obj._handleInvite(code, deeplinkAttemptId, invite_instance_id);
    } else {
      obj._deferredCode = code;
    }
  };
  applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
    applyArgumentsResult._deferredCode = null;
    applyArgumentsResult._isRegistration = false;
    ModalActionCreatorsDefault.popWithKey(ACCEPT_INVITE_MODAL_KEY);
  };
  applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
    if (null != applyArgumentsResult._deferredCode) {
      obj._handleInvite(obj._deferredCode);
      obj._deferredCode = null;
    }
  };
  applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, invite_instance_id) {
    const code = _deferredCode;
    const inviteInstanceId = invite_instance_id;
    const result = InviteStore.addConditionalChangeListener(() => {
      const invite = InviteStore.getInvite(code);
      let flag = null == invite;
      if (!flag) {
        flag =
          invite.state !== constants.RESOLVED &&
          invite.state !== constants.EXPIRED &&
          invite.state !== constants.BANNED &&
          invite.state !== constants.ERROR;
        const tmp4 =
          invite.state !== constants.RESOLVED &&
          invite.state !== constants.EXPIRED &&
          invite.state !== constants.BANNED &&
          invite.state !== constants.ERROR;
      }
      if (!flag) {
        if (null == invite.channel) {
          if (null == invite.guild) {
            if (null != invite.inviter) {
              let str = "Accept Invite";
              if (null != deeplinkAttemptId) {
                str = "Deep Link";
              }
              let obj = { location: str };
              FriendInviteUtils.acceptFriendInvite(invite, obj);
              DispatcherDefault.wait(() => set(8738).clearDisplayedInvite());
              flag = false;
            }
          }
        }
        let flag2 = false;
        if (invite.state === constants.RESOLVED) {
          flag2 = false;
          if (!obj9.isStreamInvite(invite)) {
            const guild = invite.guild;
            let id;
            if (guild != null) {
              id = guild.id;
            }
            const target_channel_id = invite.target_channel_id;
            flag2 = false;
            if (null != id) {
              flag2 = false;
              if (null != target_channel_id) {
                flag2 = false;
                if (null != GuildStore.getGuild(id)) {
                  if (null != invite.roles) {
                    if (invite.roles.length > 0) {
                      const selfMember = GuildMemberStore.getSelfMember(id);
                      let roles;
                      if (selfMember != null) {
                        roles = selfMember.roles;
                      }
                      if (roles == null) {
                        roles = [];
                      }
                      const set = new Set(roles);
                      roles = invite.roles;
                      flag2 = false;
                    }
                  }
                  let flag3 = PermissionStore.can(constants2.VIEW_CHANNEL, ChannelStore.getChannel(target_channel_id));
                  if (flag3) {
                    const target_message_id = invite.target_message_id;
                    tmp39(1100).transitionTo(closure_3_12.CHANNEL(id, target_channel_id, target_message_id), {
                      navigationReplace: true,
                      openChannel: true,
                    });
                    flag3 = true;
                    const tmp39Result = tmp39(1100);
                  }
                  flag2 = flag3;
                }
              }
            }
          }
          obj9 = InviteTypeUtils;
          tmp39 = require;
        }
        if (flag2) {
          DispatcherDefault.wait(() => set(8738).clearDisplayedInvite());
          flag = false;
        } else {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          obj = { code, isRegistration: applyArgumentsResult._isRegistration, deeplinkAttemptId, inviteInstanceId };
          ModalActionCreatorsDefault.pushLazy(
            asyncRequireImpl(17302, dependencyMap.paths),
            obj,
            ACCEPT_INVITE_MODAL_KEY,
          );
          flag = false;
        }
      }
      return flag;
    });
  };
  applyArgumentsResult._handleRegisterSuccess = function _handleRegisterSuccess() {
    applyArgumentsResult._isRegistration = true;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default prototype;
