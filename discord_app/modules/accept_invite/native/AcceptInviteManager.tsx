// === Module 17470: AcceptInviteManager ===

// Module 17470 (AcceptInviteManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import router_utils from "router_utils" /* 1112 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import AcceptInviteConstants from "AcceptInviteConstants" /* 7168 */;
import InviteTypeUtils from "InviteTypeUtils" /* 7238 */;
import FriendInviteUtils from "FriendInviteUtils" /* 17472 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import InviteStore from "InviteStore" /* 4877 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let c10;
let closure_12;
let unpackModuleId;
const ACCEPT_INVITE_MODAL_KEY = AcceptInviteConstants.ACCEPT_INVITE_MODAL_KEY;
({ InviteStates: c10, Permissions: unpackModuleId, Routes: closure_12 } = Constants);
class AcceptInviteManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._isRegistration = false;
    applyArgumentsResult.actions = {
      DISPLAYED_INVITE_SHOW(code) {
        return require._handleShowInvite(code);
      },
      DISPLAYED_INVITE_CLEAR() {
        return require._handleClearInvite();
      },
      DEFERRED_INVITE_SHOW() {
        return require._handleShowDeferredInvite();
      },
      REGISTER_SUCCESS() {
        return require._handleRegisterSuccess();
      }
    };
    applyArgumentsResult._handleShowInvite = function _handleShowInvite(code) {
      let deeplinkAttemptId;
      let invite_instance_id;
      code = code.code;
      ({ deeplinkAttemptId, invite_instance_id } = code);
      if (AuthenticationStore.isAuthenticated()) {
        require._handleInvite(code, deeplinkAttemptId, invite_instance_id);
      } else {
        require._deferredCode = code;
      }
    };
    applyArgumentsResult._handleClearInvite = function _handleClearInvite() {
      require._deferredCode = null;
      require._isRegistration = false;
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(ACCEPT_INVITE_MODAL_KEY);
    };
    applyArgumentsResult._handleShowDeferredInvite = function _handleShowDeferredInvite() {
      if (null != require._deferredCode) {
        require._handleInvite(require._deferredCode);
        require._deferredCode = null;
      }
    };
    applyArgumentsResult._handleInvite = function _handleInvite(_deferredCode, deeplinkAttemptId, invite_instance_id) {
      const code = _deferredCode;
      const inviteInstanceId = invite_instance_id;
      const result = InviteStore.addConditionalChangeListener(function() {
        const invite = InviteStore.getInvite(code);
        let flag = null == invite;
        if (!flag) {
          flag = invite.state !== constants.RESOLVED && invite.state !== constants.EXPIRED && invite.state !== constants.BANNED && invite.state !== constants.ERROR;
        }
        if (!flag) {
          if (null == invite.channel) {
            if (null == invite.guild) {
              if (null != invite.inviter) {
                let str = "Accept Invite";
                const acceptFriendInvite = FriendInviteUtils.acceptFriendInvite;
                FriendInviteUtils;
                if (null != deeplinkAttemptId) {
                  str = "Deep Link";
                }
                const obj3 = { location: str };
                acceptFriendInvite(invite, obj3);
                const obj6 = DispatcherDefault;
                obj6.wait(() => {
                  const obj = _deferredCode(inviteInstanceId[17]);
                  return obj.clearDisplayedInvite();
                });
                flag = false;
              }
            }
          }
          let flag2 = false;
          if (invite.state === constants.RESOLVED) {
            flag2 = false;
            const obj7 = InviteTypeUtils;
            if (!obj7.isStreamInvite(invite)) {
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
                        const _Set = Set;
                        const selfMember = GuildMemberStore.getSelfMember(id);
                        let roles1;
                        if (selfMember != null) {
                          roles1 = selfMember.roles;
                        }
                        if (roles1 == null) {
                          roles1 = [];
                        }
                        const self = this;
                        const self2 = this;
                        const _Set1 = new _Set(roles1);
                        const roles = invite.roles;
                        flag2 = false;
                      }
                    }
                    let flag3 = PermissionStore.can(unpackModuleId.VIEW_CHANNEL, ChannelStore.getChannel(target_channel_id));
                    if (flag3) {
                      const target_message_id = invite.target_message_id;
                      const transitionTo = router_utils.transitionTo;
                      const CHANNEL = constants2.CHANNEL;
                      router_utils;
                      transitionTo(CHANNEL(id, target_channel_id, target_message_id), { navigationReplace: true, openChannel: true });
                      flag3 = true;
                    }
                    flag2 = flag3;
                  }
                }
              }
            }
          }
          if (flag2) {
            const obj4 = DispatcherDefault;
            obj4.wait(() => {
              const obj = _deferredCode(inviteInstanceId[17]);
              return obj.clearDisplayedInvite();
            });
            flag = false;
          } else {
            const _isRegistration = require._isRegistration;
            let obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            const obj5 = { code, isRegistration: _isRegistration, deeplinkAttemptId, inviteInstanceId };
            const obj2 = ModalActionCreatorsDefault;
            obj2.pushLazy(asyncRequire(17471, dependencyMap.paths), obj5, ACCEPT_INVITE_MODAL_KEY);
            flag = false;
          }
        }
        return flag;
      });
    };
    applyArgumentsResult._handleRegisterSuccess = function _handleRegisterSuccess() {
      require._isRegistration = true;
    };
    return applyArgumentsResult;
  }
}
const acceptInviteManager = new AcceptInviteManager();
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInviteManager.tsx");

export default acceptInviteManager;