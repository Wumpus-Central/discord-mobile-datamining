// discord_app/modules/accept_invite/native/AcceptInviteManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../../stores/AuthenticationStore.tsx";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/GuildMemberStore.tsx";
import closure_6 from "../../../stores/GuildStore.tsx";
import closure_7 from "../../../stores/InviteStore.tsx";
import closure_8 from "../../../stores/PermissionStore.tsx";
import { ACCEPT_INVITE_MODAL_KEY } from "AcceptInviteConstants.tsx";
import ME from "../../../Constants.tsx";

let require = arg1;
({ InviteStates: c10, Permissions: unpackModuleId, Routes: closure_12 } = ME);
initializeDefault;
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
    if (closure_1_3.isAuthenticated()) {
      obj._handleInvite(code, deeplinkAttemptId, invite_instance_id);
    } else {
      obj._deferredCode = code;
    }
  };
  applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
    closure_0._deferredCode = null;
    closure_0._isRegistration = false;
    closure_1_1(closure_1_2[11]).popWithKey(closure_1_9);
  };
  applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
    if (null != applyArgumentsResult._deferredCode) {
      obj._handleInvite(obj._deferredCode);
      obj._deferredCode = null;
    }
  };
  applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, invite_instance_id) {
    closure_0 = _deferredCode;
    closure_1 = deeplinkAttemptId;
    closure_2 = invite_instance_id;
    const result = closure_1_7.addConditionalChangeListener(() => {
      const invite = closure_2_7.getInvite(set);
      let flag = null == invite;
      if (!flag) {
        flag =
          invite.state !== closure_2_10.RESOLVED &&
          invite.state !== closure_2_10.EXPIRED &&
          invite.state !== closure_2_10.BANNED &&
          invite.state !== closure_2_10.ERROR;
        const tmp4 =
          invite.state !== closure_2_10.RESOLVED &&
          invite.state !== closure_2_10.EXPIRED &&
          invite.state !== closure_2_10.BANNED &&
          invite.state !== closure_2_10.ERROR;
      }
      if (!flag) {
        if (null == invite.channel) {
          if (null == invite.guild) {
            if (null != invite.inviter) {
              let str = "Accept Invite";
              if (null != closure_1) {
                str = "Deep Link";
              }
              let obj = { location: null };
              obj[0] = str;
              applyArgumentsResult(closure_2_2[15]).acceptFriendInvite(invite, obj);
              const obj6 = applyArgumentsResult(closure_2_2[15]);
              const tmp34 = closure_2_2;
              closure_2_1(closure_2_2[16]).wait(() => set(8864).clearDisplayedInvite());
              flag = false;
              const obj8 = closure_2_1(closure_2_2[16]);
            }
          }
        }
        let flag2 = false;
        if (invite.state === closure_2_10.RESOLVED) {
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
                if (null != closure_2_6.getGuild(id)) {
                  if (null != invite.roles) {
                    if (invite.roles.length > 0) {
                      const selfMember = closure_2_5.getSelfMember(id);
                      let roles;
                      if (selfMember != null) {
                        roles = selfMember.roles;
                      }
                      if (roles == null) {
                        roles = [];
                      }
                      set = new Set(roles);
                      roles = invite.roles;
                      flag2 = false;
                    }
                  }
                  let flag3 = closure_2_8.can(closure_2_11.VIEW_CHANNEL, closure_2_4.getChannel(target_channel_id));
                  if (flag3) {
                    const target_message_id = invite.target_message_id;
                    tmp39(tmp40[9]).transitionTo(closure_2_12.CHANNEL(id, target_channel_id, target_message_id), {
                      navigationReplace: true,
                      openChannel: true,
                    });
                    flag3 = true;
                    const tmp39Result = tmp39(tmp40[9]);
                  }
                  flag2 = flag3;
                }
              }
            }
          }
          obj9 = applyArgumentsResult(closure_2_2[8]);
          tmp39 = applyArgumentsResult;
          tmp40 = closure_2_2;
        }
        if (flag2) {
          closure_2_1(closure_2_2[16]).wait(() => set(8864).clearDisplayedInvite());
          flag = false;
          const obj5 = closure_2_1(closure_2_2[16]);
        } else {
          closure_2_1(closure_2_2[10]).hideActionSheet();
          const obj2 = closure_2_1(closure_2_2[10]);
          obj = { code: null, isRegistration: null, deeplinkAttemptId: null, inviteInstanceId: null };
          obj[0] = set;
          obj[1] = _isRegistration._isRegistration;
          obj[2] = closure_1;
          obj[3] = closure_2;
          closure_2_1(closure_2_2[11]).pushLazy(
            applyArgumentsResult(closure_2_2[13])(closure_2_2[12], closure_2_2.paths),
            obj,
            closure_2_9,
          );
          flag = false;
          const obj3 = closure_2_1(closure_2_2[11]);
        }
      }
      return flag;
    });
  };
  applyArgumentsResult._handleRegisterSuccess = function _handleRegisterSuccess() {
    closure_0._isRegistration = true;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default prototype;
