// discord_app/modules/accept_invite/native/AcceptInviteManager.tsx
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import updateInvite from "updateInvite";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { ACCEPT_INVITE_MODAL_KEY } from "ACCEPT_INVITE_MODAL_KEY";
import ME from "ME";
import "initialize";

let c10;
let closure_12;
let unpackModuleId;
let require = arg1;
({ InviteStates: c10, Permissions: unpackModuleId, Routes: closure_12 } = ME);
let prototype = function AcceptInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
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
    }
  };
  applyArgumentsResult._handleShowInvite = function _handleShowInvite(code) {
    let deeplinkAttemptId;
    let invite_instance_id;
    code = code.code;
    ({ deeplinkAttemptId, invite_instance_id } = code);
    if (outer1_3.isAuthenticated()) {
      obj._handleInvite(code, deeplinkAttemptId, invite_instance_id);
    } else {
      obj._deferredCode = code;
    }
  };
  applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
    closure_0._deferredCode = null;
    closure_0._isRegistration = false;
    outer1_1(outer1_2[11]).popWithKey(outer1_9);
  };
  applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
    if (null != applyArgumentsResult._deferredCode) {
      obj._handleInvite(obj._deferredCode);
      obj._deferredCode = null;
    }
  };
  applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, invite_instance_id) {
    let closure_0 = _deferredCode;
    let closure_1 = deeplinkAttemptId;
    let closure_2 = invite_instance_id;
    const result = outer1_7.addConditionalChangeListener(() => {
      const invite = outer2_7.getInvite(set);
      let flag = null == invite;
      if (!flag) {
        flag = invite.state !== outer2_10.RESOLVED && invite.state !== outer2_10.EXPIRED && invite.state !== outer2_10.BANNED && invite.state !== outer2_10.ERROR;
        const tmp4 = invite.state !== outer2_10.RESOLVED && invite.state !== outer2_10.EXPIRED && invite.state !== outer2_10.BANNED && invite.state !== outer2_10.ERROR;
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
              applyArgumentsResult(outer2_2[15]).acceptFriendInvite(invite, obj);
              const obj6 = applyArgumentsResult(outer2_2[15]);
              const tmp34 = outer2_2;
              outer2_1(outer2_2[16]).wait(() => set(9339).clearDisplayedInvite());
              flag = false;
              const obj8 = outer2_1(outer2_2[16]);
            }
          }
        }
        let flag2 = false;
        if (invite.state === outer2_10.RESOLVED) {
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
                if (null != outer2_6.getGuild(id)) {
                  if (null != invite.roles) {
                    if (invite.roles.length > 0) {
                      const selfMember = outer2_5.getSelfMember(id);
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
                  let flag3 = outer2_8.can(outer2_11.VIEW_CHANNEL, outer2_4.getChannel(target_channel_id));
                  if (flag3) {
                    const target_message_id = invite.target_message_id;
                    tmp39(tmp40[9]).transitionTo(outer2_12.CHANNEL(id, target_channel_id, target_message_id), { navigationReplace: true, openChannel: true });
                    flag3 = true;
                    const tmp39Result = tmp39(tmp40[9]);
                  }
                  flag2 = flag3;
                }
              }
            }
          }
          obj9 = applyArgumentsResult(outer2_2[8]);
          tmp39 = applyArgumentsResult;
          tmp40 = outer2_2;
        }
        if (flag2) {
          outer2_1(outer2_2[16]).wait(() => set(9339).clearDisplayedInvite());
          flag = false;
          const obj5 = outer2_1(outer2_2[16]);
        } else {
          outer2_1(outer2_2[10]).hideActionSheet();
          const obj2 = outer2_1(outer2_2[10]);
          obj = { code: null, isRegistration: null, deeplinkAttemptId: null, inviteInstanceId: null };
          obj[0] = set;
          obj[1] = _isRegistration._isRegistration;
          obj[2] = closure_1;
          obj[3] = closure_2;
          outer2_1(outer2_2[11]).pushLazy(applyArgumentsResult(outer2_2[13])(outer2_2[12], outer2_2.paths), obj, outer2_9);
          flag = false;
          const obj3 = outer2_1(outer2_2[11]);
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
class prototype extends tmp3 {
}
prototype = new prototype();
let result = require("trackCommunicationDisabled").fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default prototype;