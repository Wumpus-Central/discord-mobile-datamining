// === Module 16206: prototype ===

// Module 16206 (prototype)
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
let closure_14;
let map1;
let unpackModuleId;
let require = arg1;
({ GuildFeatures: c10, InviteStates: unpackModuleId, JoinGuildSources: closure_12, Permissions: map1, Routes: closure_14 } = ME);
let prototype = function AcceptInviteManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
  applyArgumentsResult._deferredFromDeeplink = false;
  applyArgumentsResult._isRegistration = false;
  applyArgumentsResult.actions = {
    DISPLAYED_INVITE_SHOW(arg0) {
      return applyArgumentsResult._handleShowInvite(arg0);
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
  applyArgumentsResult._handleShowInvite = function _handleShowInvite(arg0) {
    let code;
    let deeplinkAttemptId;
    let fromDeeplink;
    let invite_instance_id;
    ({ code, deeplinkAttemptId, fromDeeplink, invite_instance_id } = arg0);
    if (outer1_3.isAuthenticated()) {
      obj._handleInvite(code, deeplinkAttemptId, true === fromDeeplink, invite_instance_id);
    } else {
      obj._deferredCode = code;
      obj._deferredFromDeeplink = true === fromDeeplink;
    }
  };
  applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
    closure_0._deferredCode = null;
    closure_0._deferredFromDeeplink = false;
    closure_0._isRegistration = false;
    outer1_1(outer1_2[12]).popWithKey(outer1_9);
  };
  applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
    if (null != applyArgumentsResult._deferredCode) {
      obj._handleInvite(obj._deferredCode, undefined, obj._deferredFromDeeplink);
      obj._deferredCode = null;
      obj._deferredFromDeeplink = false;
    }
  };
  applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, _deferredFromDeeplink, invite_instance_id) {
    let closure_0 = _deferredCode;
    let closure_1 = deeplinkAttemptId;
    let flag = _deferredFromDeeplink;
    if (_deferredFromDeeplink === undefined) {
      flag = false;
    }
    let fetchFingerprint = invite_instance_id;
    const result = outer1_7.addConditionalChangeListener(() => {
      const invite = outer2_7.getInvite(set);
      if (null != invite) {
        if (null == invite.channel) {
          if (null == invite.guild) {
            if (null != invite.inviter) {
              let str2 = "Accept Invite";
              if (null != closure_1) {
                str2 = "Deep Link";
              }
              let obj = { location: null };
              obj[0] = str2;
              applyArgumentsResult(outer2_2[16]).acceptFriendInvite(invite, obj);
              const obj15 = applyArgumentsResult(outer2_2[16]);
              const tmp59 = outer2_2;
              outer2_1(outer2_2[17]).wait(() => set(8836).clearDisplayedInvite());
              const obj17 = outer2_1(outer2_2[17]);
            }
            return false;
          }
        }
        let flag = false;
        if (invite.state === outer2_11.RESOLVED) {
          flag = false;
          if (!obj18.isStreamInvite(invite)) {
            const guild = invite.guild;
            let id;
            if (guild != null) {
              id = guild.id;
            }
            const target_channel_id = invite.target_channel_id;
            flag = false;
            if (null != id) {
              flag = false;
              if (null != target_channel_id) {
                flag = false;
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
                      flag = false;
                    }
                  }
                  let flag2 = outer2_8.can(outer2_13.VIEW_CHANNEL, outer2_4.getChannel(target_channel_id));
                  if (flag2) {
                    const target_message_id = invite.target_message_id;
                    tmp64(tmp65[10]).transitionTo(outer2_14.CHANNEL(id, target_channel_id, target_message_id), { navigationReplace: true, openChannel: true });
                    flag2 = true;
                    const tmp64Result = tmp64(tmp65[10]);
                  }
                  flag = flag2;
                }
              }
            }
          }
          obj18 = applyArgumentsResult(outer2_2[8]);
          tmp64 = applyArgumentsResult;
          tmp65 = outer2_2;
        }
        if (flag) {
          outer2_1(outer2_2[17]).wait(() => set(8836).clearDisplayedInvite());
          const obj14 = outer2_1(outer2_2[17]);
        } else {
          if (flag) {
            if (invite.state === tmp3.RESOLVED) {
              let isGroupDMInviteResult = null == invite.guild;
              if (!isGroupDMInviteResult) {
                let obj1 = applyArgumentsResult(outer2_2[8]);
                isGroupDMInviteResult = obj1.isGroupDMInvite(invite);
              }
              if (!isGroupDMInviteResult) {
                let obj2 = applyArgumentsResult(outer2_2[8]);
                isGroupDMInviteResult = obj2.isStreamInvite(invite);
              }
              if (!isGroupDMInviteResult) {
                isGroupDMInviteResult = applyArgumentsResult(outer2_2[8]).isGuildScheduledEventInviteEmbed(invite);
                const obj4 = applyArgumentsResult(outer2_2[8]);
              }
              if (!isGroupDMInviteResult) {
                isGroupDMInviteResult = applyArgumentsResult(outer2_2[8]).isRoleSubscriptionInvite(invite);
                const obj5 = applyArgumentsResult(outer2_2[8]);
              }
              if (!isGroupDMInviteResult) {
                const features = invite.guild.features;
                let hasItem;
                if (features != null) {
                  hasItem = features.includes(outer2_10.DISCOVERABLE);
                }
                isGroupDMInviteResult = !hasItem;
              }
              let enabled = !isGroupDMInviteResult;
              if (!isGroupDMInviteResult) {
                enabled = applyArgumentsResult(outer2_2[9]).getMobileLurkerServerPreview("AcceptInviteManager").enabled;
                const obj6 = applyArgumentsResult(outer2_2[9]);
              }
              if (enabled) {
                outer2_1(outer2_2[17]).wait(() => set(8836).clearDisplayedInvite());
                const target_channel_id2 = invite.target_channel_id;
                const obj11 = applyArgumentsResult(outer2_2[19]);
                id = invite.guild.id;
                let tmp46 = target_channel_id2;
                if (target_channel_id2 == null) {
                  const channel = invite.channel;
                  let id1;
                  if (channel != null) {
                    id1 = channel.id;
                  }
                  tmp46 = id1;
                }
                obj = { channelId: null, messageId: null, joinSource: null };
                obj[0] = tmp46;
                let tmp48;
                if (null != target_channel_id2) {
                  const target_message_id2 = invite.target_message_id;
                  tmp48 = target_message_id2;
                }
                obj[1] = tmp48;
                obj[2] = outer2_12.DISCOVERABLE_GUILD_INVITE_LURKER;
                obj1 = {};
                const items = [outer2_1(outer2_2[20]).DEEPLINK];
                obj11.startLurking(id, obj1, obj, items);
                const obj10 = outer2_1(outer2_2[17]);
                const tmp42 = outer2_1;
              }
            }
          }
          outer2_1(outer2_2[11]).hideActionSheet();
          const obj7 = outer2_1(outer2_2[11]);
          obj2 = { code: null, isRegistration: null, deeplinkAttemptId: null, inviteInstanceId: null };
          obj2[0] = set;
          obj2[1] = _isRegistration._isRegistration;
          obj2[2] = closure_1;
          obj2[3] = fetchFingerprint;
          outer2_1(outer2_2[12]).pushLazy(applyArgumentsResult(outer2_2[14])(outer2_2[13], outer2_2.paths), obj2, outer2_9);
          const obj8 = outer2_1(outer2_2[12]);
        }
      }
      return true;
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