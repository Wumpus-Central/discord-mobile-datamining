// === Module 12869: UserProfileModeratorActions ===

// Module 12869 (UserProfileModeratorActions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl18 from "intl" /* 1126 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2060 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4495 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4507 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import TableRow2 from "TableRow" /* 5993 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 8074 */;
import GuildMemberUtils from "GuildMemberUtils" /* 11446 */;
import GuildDisableCommunicationActionCreators from "GuildDisableCommunicationActionCreators" /* 11451 */;
import showKickConfirmModalDefault from "showKickConfirmModal" /* 11467 */;
import showBanConfirmModalDefault from "showBanConfirmModal" /* 11469 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12286 */;
import react from "react" /* 19 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5578 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const GuildChannelStore = GuildChannelStore2;

let closure_12;
let map1;
let obj2;
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
({ GuildFeatures: closure_12, Permissions: map1 } = Constants);
let GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const jsx = Fragment.jsx;
let obj = { cardContainer: { paddingBottom: 0 }, refreshCardTitle: obj2 };
obj2 = { marginBottom: nativeDefault.space.PX_8 };
let closure_16 = createStyles.createStyles(obj);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((hint) => {
  let disabled;
  let icon;
  let label;
  let onPress;
  let sublabel;
  const obj = react2;
  const cResult = obj.c(12);
  ({ label, sublabel, icon, disabled, onPress } = hint);
  let str = "default";
  hint = hint.hint;
  if (hint.isDestructive) {
    str = "danger";
  }
  if (cResult[0] === icon) {
    let tmp4;
    if (cResult[1] === str) {
      tmp4 = cResult[2];
    }
    let combined = label;
    if (null != sublabel) {
      const _HermesInternal = HermesInternal;
      combined = "" + label + ", " + sublabel;
    }
    if (cResult[3] === disabled) {
      if (cResult[4] === label) {
        if (cResult[5] === onPress) {
          if (cResult[6] === sublabel) {
            if (cResult[7] === tmp4) {
              if (cResult[8] === null != hint) {
                if (cResult[9] === combined) {
                  let tmp10;
                  if (cResult[10] === str) {
                    tmp10 = cResult[11];
                  }
                  return tmp10;
                }
              }
            }
          }
        }
      }
    }
    const tmp12 = jsx(TableRow2.TableRow, { label, subLabel: sublabel, icon: tmp4, arrow: null != hint, variant: str, disabled, onPress, accessibilityLabel: combined, accessibilityRole: "button" });
    cResult[3] = disabled;
    cResult[4] = label;
    cResult[5] = onPress;
    cResult[6] = sublabel;
    cResult[7] = tmp4;
    cResult[8] = null != hint;
    cResult[9] = combined;
    cResult[10] = str;
    cResult[11] = tmp12;
    tmp10 = tmp12;
  }
  const tmp5 = jsx(TableRow2.TableRow.Icon, { IconComponent: icon, variant: str });
  cResult[0] = icon;
  cResult[1] = str;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((isDestructive) => {
  let disabled;
  let hint;
  let icon;
  let label;
  let onPress;
  let sublabel;
  ({ label, sublabel } = isDestructive);
  let str = "default";
  ({ icon, hint, disabled, onPress } = isDestructive);
  if (isDestructive.isDestructive) {
    str = "danger";
  }
  const TableRow = TableRow2.TableRow;
  let combined = label;
  if (null != sublabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + label + ", " + sublabel;
  }
  return <TableRow label={label} subLabel={sublabel} icon={null} arrow={null != hint} variant={str} disabled={disabled} onPress={onPress} accessibilityLabel={combined} accessibilityRole="button" />;
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileModeratorActions.tsx");

export default function UserProfileModeratorActions(user) {
  let c14;
  let canBanUser;
  let canChangeNick;
  let canDeafenMembers;
  let canKickUser;
  let canManageGuild;
  let canManageGuildRoles;
  let canManageUserRoles;
  let canModerateMembers;
  let canModerateStage;
  let canMoveMembers;
  let canMuteMembers;
  let currentUser;
  let guildId;
  user = user.user;
  ({ currentUser, guildId } = user);
  const channelId = user.channelId;
  const showUserProfile = user.showUserProfile;
  let stateFromStores1;
  canMoveMembers = undefined;
  let channels;
  GuildMemberFlags = undefined;
  const style = user.style;
  let tmp = closure_16();
  const tmp2 = user;
  let tmp3 = showUserProfile;
  let obj = user(showUserProfile[16]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const hideActionSheet = guildId(showUserProfile[17]).hideActionSheet;
  let obj2 = { userId: user.id, guildId, includeNonDiscoverable: true };
  const tmp5 = guildId(showUserProfile[18])(obj2);
  const voiceState = tmp5.voiceState;
  const voiceChannel = tmp5.voiceChannel;
  let obj3 = user(showUserProfile[19]);
  const items = [stateFromStores1];
  const stateFromStores = obj3.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj4 = user(showUserProfile[19]);
  const items1 = [stateFromStores];
  const tmp6 = stateFromStores1;
  stateFromStores1 = obj4.useStateFromStores(items1, () => GuildMemberStore.getMember(guildId, user.id));
  let closure_10 = tmp9;
  let obj5 = user(showUserProfile[19]);
  const items2 = [hideActionSheet];
  const stateFromStores2 = obj5.useStateFromStores(items2, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj6 = user(showUserProfile[19]);
  const items3 = [hideActionSheet];
  const stateFromStores3 = obj6.useStateFromStores(items3, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isForumPost();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const obj7 = user(showUserProfile[20]);
  const canRemoveThreadMember = obj7.useCanRemoveThreadMember(channelId);
  const items4 = [closure_10];
  const obj8 = user(showUserProfile[19]);
  const stateFromStoresObject = obj8.useStateFromStoresObject(items4, () => {
    let canManageUserResult;
    let canManageUserResult1;
    let canManageUserResult2;
    let canManageUserResult3;
    let canResult;
    let obj2;
    let obj3;
    const obj = { canKickUser: obj2.canKickMember(user, stateFromStores), canBanUser: obj3.canBanMember(user, stateFromStores), canChangeNick: canManageUserResult, canManageUserRoles: canManageUserResult1, canManageGuildRoles: canResult, canManageGuild: canManageUserResult2, canModerateMembers: canManageUserResult3, canMoveMembers: PermissionStore.can(map1.MOVE_MEMBERS, voiceChannel), canMuteMembers: PermissionStore.can(map1.MUTE_MEMBERS, voiceChannel), canDeafenMembers: PermissionStore.can(map1.DEAFEN_MEMBERS, voiceChannel), canModerateStage: PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, voiceChannel) };
    obj2 = GuildMemberUtils;
    obj3 = GuildMemberUtils;
    canManageUserResult = null != stateFromStores && PermissionStore.canManageUser(map1.MANAGE_NICKNAMES, user, stateFromStores);
    canManageUserResult1 = null != stateFromStores && PermissionStore.canManageUser(map1.MANAGE_ROLES, user, stateFromStores);
    canResult = null != stateFromStores && PermissionStore.can(map1.MANAGE_ROLES, stateFromStores);
    canManageUserResult2 = null != stateFromStores && PermissionStore.canManageUser(map1.MANAGE_GUILD, user, stateFromStores);
    canManageUserResult3 = null != stateFromStores && PermissionStore.canManageUser(map1.MODERATE_MEMBERS, user, stateFromStores);
    return obj;
  });
  ({ canKickUser, canBanUser, canModerateMembers, canMoveMembers } = stateFromStoresObject);
  ({ canModerateStage, canChangeNick, canManageUserRoles, canManageGuildRoles, canManageGuild, canMuteMembers, canDeafenMembers } = stateFromStoresObject);
  const tmp13 = closure_10;
  const tmp15 = guildId(showUserProfile[23])(guildId, user.id);
  if (canModerateMembers) {
    canModerateMembers = canKickUser;
  }
  if (canModerateMembers) {
    canModerateMembers = canBanUser;
  }
  if (!canModerateMembers) {
    canModerateMembers = canManageGuild;
  }
  if (!canModerateMembers) {
    canModerateMembers = canManageUserRoles;
  }
  let id1;
  let id = user.id;
  const tmp16 = guildId(tmp3[24])(voiceChannel);
  const tmp4Result = guildId(tmp3[25]);
  if (voiceChannel != null) {
    id1 = voiceChannel.id;
  }
  const tmp4ResultResult = tmp4Result(id, id1);
  let tmp20 = null != voiceChannel;
  if (tmp20) {
    let channelId1;
    if (voiceState != null) {
      channelId1 = voiceState.channelId;
    }
    tmp20 = null != channelId1;
  }
  const tmp22 = null != voiceChannel && voiceChannel.isGuildStageVoice();
  let tmp23 = null != voiceChannel;
  if (tmp23) {
    let tmp24 = !tmp22;
    if (tmp22) {
      tmp24 = tmp4ResultResult === tmp2(tmp3[25]).RequestToSpeakStates.ON_STAGE;
    }
    tmp23 = tmp24;
  }
  const items5 = [trackUserProfileAction];
  const tmp2Result = tmp2(tmp3[19]);
  const stateFromStores4 = tmp2Result.useStateFromStores(items5, () => {
    let id1;
    const getPermissionsForUser = StageChannelRoleStore.getPermissionsForUser;
    const id = user.id;
    if (voiceChannel != null) {
      id1 = voiceChannel.id;
    }
    return getPermissionsForUser(id, id1).speaker;
  });
  const items6 = [voiceState, stateFromStores3, tmp6, tmp13];
  const tmp2Result4 = tmp2(tmp3[19]);
  channels = tmp2Result4.useStateFromStoresArray(items6, () => {
    let id;
    if (canMoveMembers) {
      if (null != voiceChannel) {
        const arr = GuildChannelStore.getChannels(guildId)[GUILD_VOCAL_CHANNELS_KEY];
        const found = arr.filter((channel) => {
          channel = channel.channel;
          let tmp = channel.id !== id.id;
          if (tmp) {
            let canResult1;
            const can = closure_10.can;
            if (closure_1_10) {
              let canResult = can(constants.CONNECT, channel);
              if (canResult) {
                const obj4 = user(showUserProfile[26]);
                canResult = !obj4.isChannelFull(channel, stateFromStores3, stateFromStores1);
              }
              canResult1 = canResult;
            } else {
              canResult1 = can(constants.MOVE_MEMBERS, channel);
              if (canResult1) {
                let canResult2 = closure_10.can(constants.CONNECT, channel);
                if (!canResult2) {
                  const obj2 = { permission: constants.CONNECT, user, context: channel };
                  const obj = channelId(showUserProfile[27]);
                  canResult2 = obj.can(obj2);
                }
                canResult1 = canResult2;
              }
              if (canResult1) {
                const obj3 = user(showUserProfile[26]);
                canResult1 = !obj3.isChannelFull(channel, stateFromStores3, stateFromStores1);
              }
            }
            tmp = canResult1;
          }
          return tmp;
        });
        const mapped = found.map((channel) => channel.channel);
      }
      return [];
    }
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const items7 = [];
    const tmp26 = tmp22 && canModerateStage && stateFromStores4;
    if (tmp26) {
      let stringResult;
      const push = items7.push;
      if (user.id === currentUser.id) {
        const intl2 = tmp2(tmp3[28]).intl;
        stringResult = intl2.string(tmp2(tmp3[28]).t["6C6PJx"]);
      } else {
        let intl = tmp2(tmp3[28]).intl;
        stringResult = intl.string(tmp2(tmp3[28]).t.r23NoB);
      }
      let str = "remove-from-stage";
      let arr = push(<closure_17 key="remove-from-stage" label={stringResult} icon={tmp2(tmp3[29]).GroupArrowDownIcon} onPress={function onPress() {
        trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
        const obj = StageChannelActionCreators;
        obj.moveUserToAudience(user, voiceChannel);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }} />);
    }
    if (tmp22) {
      if (canModerateStage) {
        if (!stateFromStores4) {
          let stringResult1;
          const tmp31 = tmp4ResultResult === tmp2(tmp3[25]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
          const intl3 = tmp2(tmp3[28]).intl;
          const string = intl3.string;
          const t = tmp2(tmp3[28]).t;
          if (tmp31) {
            stringResult1 = string(t.tHj7Tb);
          } else {
            stringResult1 = string(t.VUCWcO);
          }
          const push2 = items7.push;
          if (user.id === currentUser.id) {
            const intl4 = tmp2(tmp3[28]).intl;
            stringResult1 = intl4.string(tmp2(tmp3[28]).t["8Joh+p"]);
          }
          push2(<closure_17 key="invite-to-speak" icon={tmp2(tmp3[31]).MicrophoneArrowRightIcon} label={stringResult1} disabled={tmp31} onPress={function onPress() {
            trackUserProfileAction({ action: "PRESS_INVITE_TO_SPEAK" });
            const obj = StageChannelActionCreators;
            if (closure_10) {
              const result = obj.audienceAckRequestToSpeak(voiceChannel, false);
            } else {
              obj.inviteUserToStage(voiceChannel, user.id);
            }
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          }} />);
        }
      }
    }
    const tmp36 = tmp20 && canMoveMembers;
    if (tmp36) {
      const push3 = items7.push;
      const intl5 = tmp2(tmp3[28]).intl;
      push3(<closure_17 key="move-to-channel" label={intl5.string(tmp2(tmp3[28]).t.FAplms)} hint={tmp2(tmp3[32]).FormArrow} sublabel={tmp16} icon={tmp2(tmp3[33]).VoiceNormalIcon} onPress={function onPress() {
        let id;
        let id2;
        let intl;
        let obj2;
        trackUserProfileAction({ action: "PRESS_MOVE_TO_CHANNEL" });
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        ActionSheetActionCreatorsDefault;
        let obj = {
          guild: stateFromStores,
          header: obj2,
          channels,
          onSelect(id) {
            const obj = guildId(showUserProfile[36]);
            return obj.setChannel(id2.id, id.id, id.id);
          },
          selectedChannel: null
        };
        obj2 = { title: intl.string(intl18.t.r2ptsz) };
        const tmp3 = asyncRequire(12103, dependencyMap.paths);
        intl = intl18.intl;
        openLazy(tmp3, "ChannelPicker", obj, "stack");
      }} />);
    }
    let tmp40 = null != stateFromStores1;
    if (tmp40) {
      tmp40 = canKickUser || canBanUser || canChangeNick || canManageGuildRoles;
    }
    if (tmp40) {
      tmp40 = !user.isNonUserBot();
    }
    if (tmp40) {
      const push4 = items7.push;
      const intl6 = tmp2(tmp3[28]).intl;
      push4(<closure_17 key="manage" label={intl6.string(tmp2(tmp3[28]).t.HxrBOZ)} icon={tmp2(tmp3[37]).SettingsIcon} onPress={function onPress() {
        trackUserProfileAction({ action: "PRESS_MANAGE_USER" });
        hideActionSheet();
        const obj = ModalActionCreatorsDefault;
        const obj2 = {
          userId: user.id,
          guildId: stateFromStores.id,
          onClose() {
            const arr = guildId(showUserProfile[38]);
            arr.pop();
            closure_1_3();
          },
          onRemove() {
            const arr = guildId(showUserProfile[38]);
            arr.pop();
          }
        };
        obj.pushLazy(asyncRequire(11447, dependencyMap.paths), obj2);
      }} />);
    }
    const features = stateFromStores.features;
    const hasItem = features.has(canMoveMembers.COMMUNITY);
    const features2 = stateFromStores.features;
    const hasItem1 = features2.has(canMoveMembers.GUILD_ONBOARDING_EVER_ENABLED);
    let hasFlagResult = null != stateFromStores1;
    if (hasFlagResult) {
      let num = stateFromStores1.flags;
      const hasFlag = tmp2(tmp3[40]).hasFlag;
      tmp2(tmp3[40]);
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION);
    }
    const tmp51 = null != stateFromStores1 && user.id !== currentUser.id && canModerateMembers && hasItem && hasItem1 && hasFlagResult;
    if (tmp51) {
      const push5 = items7.push;
      const intl7 = tmp2(tmp3[28]).intl;
      push5(<closure_17 key="unverify" label={intl7.string(tmp2(tmp3[28]).t.NbhSI7)} icon={tmp2(tmp3[41]).StampIcon} onPress={function onPress() {
        trackUserProfileAction({ action: "PRESS_UNVERIFY_USER" });
        const setMemberFlags = GuildActionCreatorsDefault.setMemberFlags;
        const id = stateFromStores.id;
        const id2 = user.id;
        GuildActionCreatorsDefault;
        let num = stateFromStores1.flags;
        const setFlag = FlagUtils.setFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        setMemberFlags(id, id2, setFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION, false));
      }} />);
    }
    const tmp55 = null != stateFromStores1 && user.id !== currentUser.id && canModerateMembers && hasItem && hasItem1 && !hasFlagResult;
    if (tmp55) {
      const push6 = items7.push;
      const intl8 = tmp2(tmp3[28]).intl;
      push6(<closure_17 key="verify" label={intl8.string(tmp2(tmp3[28]).t["6QlTeK"])} icon={tmp2(tmp3[41]).StampIcon} onPress={function onPress() {
        trackUserProfileAction({ action: "PRESS_VERIFY_USER" });
        const setMemberFlags = GuildActionCreatorsDefault.setMemberFlags;
        const id = stateFromStores.id;
        const id2 = user.id;
        GuildActionCreatorsDefault;
        let num = stateFromStores1.flags;
        const setFlag = FlagUtils.setFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        setMemberFlags(id, id2, setFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION, true));
      }} />);
    }
    if (null != stateFromStores1) {
      if (tmp15) {
        let string2Result;
        const tmp2Result6 = tmp2(tmp3[42]);
        let result = tmp2Result6.isMemberCommunicationDisabled(stateFromStores1);
        GuildMemberFlags = result;
        const push7 = items7.push;
        const intl9 = tmp2(tmp3[28]).intl;
        const string2 = intl9.string;
        const t2 = tmp2(tmp3[28]).t;
        if (result) {
          string2Result = string2(t2.qXtNtS);
        } else {
          string2Result = string2(t2.xpsADY);
        }
        push7(<closure_17 key="time-out" label={string2Result} icon={tmp2(tmp3[43]).ClockWarningIcon} onPress={function onPress() {
          let str = "PRESS_TIME_OUT_USER";
          if (c14) {
            str = "PRESS_REMOVE_TIME_OUT";
          }
          trackUserProfileAction({ action: str });
          hideActionSheet();
          const obj = GuildDisableCommunicationActionCreators;
          if (c14) {
            const obj5 = { guildId: null, userId: null, cancelButtonCallback: showUserProfile };
            ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores1);
            const result = obj.openEnableCommunication(obj5);
          } else {
            const obj6 = { guildId: null, userId: null, cancelButtonCallback: showUserProfile };
            ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores1);
            const result1 = obj.openDisableCommunication(obj6);
          }
        }} />);
      }
    }
    const tmp64 = tmp20 && tmp23 && canMuteMembers;
    if (tmp64) {
      let string3Result;
      let MicrophoneIcon;
      const push8 = items7.push;
      const mute = voiceState.mute;
      const intl10 = tmp2(tmp3[28]).intl;
      const string3 = intl10.string;
      const t3 = tmp2(tmp3[28]).t;
      if (mute) {
        string3Result = string3(t3.wG9K2n);
      } else {
        string3Result = string3(t3.e9e9Ua);
      }
      if (voiceState.mute) {
        MicrophoneIcon = tmp2(tmp3[45]).MicrophoneSlashIcon;
      } else {
        MicrophoneIcon = tmp2(tmp3[46]).MicrophoneIcon;
      }
      push8(<closure_17 key="server-mute" label={string3Result} icon={MicrophoneIcon} onPress={function onPress() {
        trackUserProfileAction({ action: "SERVER_MUTE" });
        const obj = GuildActionCreatorsDefault;
        obj.setServerMute(stateFromStores.id, user.id, !voiceState.mute);
      }} />);
    }
    const tmp69 = tmp20 && tmp23 && canDeafenMembers;
    if (tmp69) {
      let string4Result;
      let HeadphonesIcon;
      const push9 = items7.push;
      const deaf = voiceState.deaf;
      const intl11 = tmp2(tmp3[28]).intl;
      const string4 = intl11.string;
      const t4 = tmp2(tmp3[28]).t;
      if (deaf) {
        string4Result = string4(t4.Gbw4Z9);
      } else {
        string4Result = string4(t4.hMA2GE);
      }
      if (voiceState.deaf) {
        HeadphonesIcon = tmp2(tmp3[47]).HeadphonesSlashIcon;
      } else {
        HeadphonesIcon = tmp2(tmp3[48]).HeadphonesIcon;
      }
      push9(<closure_17 key="deafen" label={string4Result} icon={HeadphonesIcon} onPress={function onPress() {
        trackUserProfileAction({ action: "DEAFEN" });
        const obj = GuildActionCreatorsDefault;
        obj.setServerDeaf(stateFromStores.id, user.id, !voiceState.deaf);
      }} />);
    }
    if (tmp20) {
      tmp20 = canMoveMembers;
    }
    if (tmp20) {
      let stringResult2;
      const push10 = items7.push;
      if (user.id === currentUser.id) {
        const intl13 = tmp2(tmp3[28]).intl;
        stringResult2 = intl13.string(tmp2(tmp3[28]).t["6vrfgt"]);
      } else {
        const intl12 = tmp2(tmp3[28]).intl;
        stringResult2 = intl12.string(tmp2(tmp3[28]).t["/jERiG"]);
      }
      push10(<closure_17 key="disconnect" label={stringResult2} icon={tmp2(tmp3[49]).PhoneHangUpIcon} isDestructive onPress={function onPress() {
        trackUserProfileAction({ action: "DISCONNECT" });
        const obj = GuildActionCreatorsDefault;
        obj.setChannel(stateFromStores.id, user.id, null);
      }} />);
    }
    const tmp78 = null != stateFromStores1 && canKickUser;
    if (tmp78) {
      const push11 = items7.push;
      const intl14 = tmp2(tmp3[28]).intl;
      push11(<closure_17 key="kick" label={intl14.string(tmp2(tmp3[28]).t["3glT6Z"])} icon={tmp2(tmp3[50]).UserMinusIcon} isDestructive onPress={function onPress() {
        trackUserProfileAction({ action: "PRESS_KICK_USER" });
        hideActionSheet();
        const obj = { guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile };
        showKickConfirmModalDefault(obj);
      }} />);
    }
    if (canBanUser) {
      const push12 = items7.push;
      const intl15 = tmp2(tmp3[28]).intl;
      push12(<closure_17 key="ban" label={intl15.string(tmp2(tmp3[28]).t["5MBJ5M"])} icon={tmp2(tmp3[52]).HammerIcon} isDestructive onPress={function onPress() {
        trackUserProfileAction({ action: "PRESS_BAN_USER" });
        const obj = { guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile };
        showBanConfirmModalDefault(obj);
      }} />);
    }
    if (stateFromStores2) {
      if (canRemoveThreadMember) {
        if (user.id !== currentUser.id) {
          if (null != channelId) {
            let string5Result;
            const intl16 = tmp2(tmp3[28]).intl;
            const string5 = intl16.string;
            const t5 = tmp2(tmp3[28]).t;
            if (stateFromStores3) {
              string5Result = string5(t5["6+b8ae"]);
            } else {
              string5Result = string5(t5.at1yY3);
            }
            const push13 = items7.push;
            push13(<closure_17 key="remove-from-thread" isDestructive label={string5Result} icon={tmp2(tmp3[54]).ThreadMinusIcon} onPress={function onPress() {
              let id;
              let obj = UserProfileAlertUtils;
              const obj2 = {
                isForumPost: stateFromStores3,
                user,
                onConfirm() {
                  trackUserProfileAction({ action: "PRESS_REMOVE_FROM_THREAD" });
                  const obj = guildId(showUserProfile[56]);
                  obj.removeMember(channelId, id.id, "Context Menu");
                  hideActionSheet();
                }
              };
              obj.confirmThreadRemove(obj2);
            }} />);
          }
        }
      }
    }
    let tmp89 = null;
    if (0 !== items7.length) {
      guildId(tmp3[57]);
      const intl17 = tmp2(tmp3[28]).intl;
      const items8 = [style, tmp.cardContainer];
      tmp89 = <tmp4Result2 title={intl17.string(tmp2(tmp3[28]).t["EApw/R"])} style={items8} titleStyle={tmp.refreshCardTitle}>{null}</tmp4Result2>;
    }
    return tmp89;
  }
};