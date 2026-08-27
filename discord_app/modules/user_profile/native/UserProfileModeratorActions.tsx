// discord_app/modules/user_profile/native/UserProfileModeratorActions.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import TableRowInner from "../../../design/components/TableRow/native/TableRow.native.tsx";
import Divider from "UserProfileCard.tsx";
import closure_4 from "../../stage_channels/StageChannelRoleStore.tsx";
import closure_5 from "../../../stores/ChannelStore.tsx";
import closure_6 from "../../../stores/GuildChannelStore.tsx";
import { GUILD_VOCAL_CHANNELS_KEY } from "../../../stores/GuildChannelStore.tsx";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import closure_9 from "../../../stores/GuildStore.tsx";
import closure_10 from "../../../stores/PermissionStore.tsx";
import closure_11 from "../../../stores/VoiceStateStore.tsx";
import ME from "../../../Constants.tsx";
import { GuildMemberFlags } from "../../guild_member/GuildMemberConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ModeratorActionRow(arg0) {
  ({ label, sublabel, icon, hint, disabled, isDestructive, onPress } = arg0);
  if (useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileModeratorActions")) {
    let str = "default";
    if (isDestructive) {
      str = "danger";
    }
    let obj = { label: null, subLabel: null, icon: null, arrow: null, variant: null, disabled: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button" };
    obj[0] = label;
    obj[1] = sublabel;
    obj = { IconComponent: null, variant: null };
    obj[0] = icon;
    obj[1] = str;
    obj[2] = jsx(TableRowInner.TableRow.Icon, { IconComponent: null, variant: null });
    obj[3] = null != hint;
    obj[4] = str;
    obj[5] = disabled;
    obj[6] = onPress;
    let combined = label;
    if (null != sublabel) {
      const _HermesInternal = HermesInternal;
      combined = "" + label + ", " + sublabel;
    }
    obj[7] = combined;
    return jsx(TableRowInner.TableRow, { IconComponent: null, variant: null });
  } else {
    obj = { label: null, sublabel: null, icon: null, hint: null, disabled: null, isDestructive: null, onPress: null };
    obj[0] = label;
    let tmp2Result;
    if (null != sublabel) {
      obj1 = { variant: "text-xs/normal", color: "text-subtle", children: null };
      obj1[2] = sublabel;
      tmp2Result = tmp2(Text.Text, obj1);
    }
    obj[1] = tmp2Result;
    obj[2] = icon;
    obj[3] = hint;
    obj[4] = disabled;
    obj[5] = isDestructive;
    obj[6] = onPress;
    return jsx(Divider.UserProfileFormRow, { label: null, sublabel: null, icon: null, hint: null, disabled: null, isDestructive: null, onPress: null });
  }
}
noopAll;
({ GuildFeatures: closure_12, Permissions: map1 } = ME);
createCacheKey = { cardContainer: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 }, refreshCardTitle: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[2] = createCacheKey;
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileModeratorActions.tsx");

export default function UserProfileModeratorActions(user) {
  user = user.user;
  ({ currentUser, guildId } = user);
  let channelId = user.channelId;
  const showUserProfile = user.showUserProfile;
  let trackUserProfileAction;
  let hideActionSheet;
  let voiceState;
  let voiceChannel;
  let stateFromStores;
  let stateFromStores1;
  closure_10 = undefined;
  let stateFromStores3;
  canMoveMembers = undefined;
  closure_13 = undefined;
  GuildMemberFlags = undefined;
  let tmp = callback();
  let obj = showUserProfile;
  const tmp3 = guildId(showUserProfile[13])("UserProfileModeratorActions");
  let TableRowGroup = user;
  obj1 = user(showUserProfile[17]);
  trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  hideActionSheet = guildId(showUserProfile[18]).hideActionSheet;
  obj = { userId: user.id, guildId };
  const tmp4 = guildId(showUserProfile[19])(obj);
  voiceState = tmp4.voiceState;
  voiceChannel = tmp4.voiceChannel;
  let obj3 = user(showUserProfile[20]);
  const items = [stateFromStores1];
  stateFromStores = obj3.useStateFromStores(items, () => stateFromStores1.getGuild(guildId));
  let obj4 = user(showUserProfile[20]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj4.useStateFromStores(items1, () => stateFromStores.getMember(guildId, user.id));
  closure_10 = tmp8;
  let obj5 = user(showUserProfile[20]);
  const items2 = [hideActionSheet];
  const stateFromStores2 = obj5.useStateFromStores(items2, () => {
    const channel = hideActionSheet.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isThread();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj6 = user(showUserProfile[20]);
  const items3 = [hideActionSheet];
  stateFromStores3 = obj6.useStateFromStores(items3, () => {
    const channel = hideActionSheet.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isForumPost();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  let obj7 = user(showUserProfile[21]);
  const canRemoveThreadMember = obj7.useCanRemoveThreadMember(channelId);
  let obj8 = user(showUserProfile[20]);
  const items4 = [closure_10];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items4, () => {
    const obj = { canKickUser: user(showUserProfile[22]).canKickMember(user, stateFromStores), canBanUser: null, canChangeNick: null, canManageUserRoles: null, canManageGuildRoles: null, canManageGuild: null, canModerateMembers: null, canMoveMembers: null, canMuteMembers: null, canDeafenMembers: null, canModerateStage: null };
    const obj2 = user(showUserProfile[22]);
    const tmp = user;
    const tmp2 = showUserProfile;
    obj[1] = user(showUserProfile[22]).canBanMember(user, stateFromStores);
    let canManageUserResult = null != stateFromStores;
    if (canManageUserResult) {
      canManageUserResult = closure_10.canManageUser(constants.MANAGE_NICKNAMES, tmp3, tmp4);
    }
    obj[2] = canManageUserResult;
    let canManageUserResult1 = null != tmp4;
    if (canManageUserResult1) {
      canManageUserResult1 = closure_10.canManageUser(constants.MANAGE_ROLES, tmp3, tmp4);
    }
    obj[3] = canManageUserResult1;
    let canResult = null != tmp4;
    if (canResult) {
      canResult = closure_10.can(constants.MANAGE_ROLES, tmp4);
    }
    obj[4] = canResult;
    let canManageUserResult2 = null != tmp4;
    if (canManageUserResult2) {
      canManageUserResult2 = closure_10.canManageUser(constants.MANAGE_GUILD, tmp3, tmp4);
    }
    obj[5] = canManageUserResult2;
    let canManageUserResult3 = null != tmp4;
    if (canManageUserResult3) {
      canManageUserResult3 = closure_10.canManageUser(constants.MODERATE_MEMBERS, tmp3, tmp4);
    }
    obj[6] = canManageUserResult3;
    obj[7] = closure_10.can(constants.MOVE_MEMBERS, voiceChannel);
    obj[8] = closure_10.can(constants.MUTE_MEMBERS, voiceChannel);
    obj[9] = closure_10.can(constants.DEAFEN_MEMBERS, voiceChannel);
    obj[10] = closure_10.can(tmp(tmp2[23]).MODERATE_STAGE_CHANNEL_PERMISSIONS, voiceChannel);
    return obj;
  });
  ({ canKickUser, canBanUser, canModerateMembers, canMoveMembers } = stateFromStoresObject);
  ({ canModerateStage, canChangeNick, canManageUserRoles, canManageGuildRoles, canManageGuild, canMuteMembers, canDeafenMembers } = stateFromStoresObject);
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
  const tmp15 = guildId(obj[25])(voiceChannel);
  let id;
  let tmp2Result = tmp2(obj[26]);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp2ResultResult = tmp2Result(user.id, id);
  let tmp19 = null != voiceChannel;
  if (tmp19) {
    channelId = undefined;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    tmp19 = null != channelId;
  }
  const tmp21 = null != voiceChannel && voiceChannel.isGuildStageVoice();
  let tmp22 = null != voiceChannel;
  if (tmp22) {
    let tmp23 = !tmp21;
    if (tmp21) {
      tmp23 = tmp2ResultResult === TableRowGroup(obj[26]).RequestToSpeakStates.ON_STAGE;
    }
    tmp22 = tmp23;
  }
  const tmp12 = closure_10;
  const tmp14 = guildId(showUserProfile[24])(guildId, user.id);
  const tmp5 = stateFromStores1;
  const items5 = [trackUserProfileAction];
  const stateFromStores4 = TableRowGroup(obj[20]).useStateFromStores(items5, () => {
    let id;
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    return trackUserProfileAction.getPermissionsForUser(user.id, id).speaker;
  });
  const TableRowGroupResult = TableRowGroup(obj[20]);
  const items6 = [voiceState, stateFromStores3, tmp5, tmp12];
  closure_13 = TableRowGroup(obj[20]).useStateFromStoresArray(items6, () => {
    if (canMoveMembers) {
      if (null != voiceChannel) {
        const found = voiceState.getChannels(guildId)[voiceChannel].filter((channel) => {
          channel = channel.channel;
          if (channel.id === id.id) {
            return tmp;
          } else {
            let can = closure_1_10.can;
            let canResult = closure_1_13;
            if (closure_10) {
              canResult = can(canResult.CONNECT, channel);
              if (canResult) {
                can = closure_1_11;
                canResult = !closure_1_0(closure_1_3[27]).isChannelFull(channel, closure_1_11, closure_1_9);
                const obj4 = closure_1_0(closure_1_3[27]);
              }
              let canResult1 = canResult;
            } else {
              canResult1 = can(canResult.MOVE_MEMBERS, channel);
              if (canResult1) {
                let canResult2 = closure_1_10.can(closure_1_13.CONNECT, channel);
                if (!canResult2) {
                  let obj = closure_1_2(closure_1_3[28]);
                  obj = { permission: null, user: null, context: null };
                  obj[0] = closure_1_13.CONNECT;
                  obj[1] = closure_0;
                  obj[2] = channel;
                  canResult2 = obj.can(obj);
                }
                canResult1 = canResult2;
              }
              if (canResult1) {
                canResult1 = !closure_1_0(closure_1_3[27]).isChannelFull(channel, closure_1_11, closure_1_9);
                const obj3 = closure_1_0(closure_1_3[27]);
              }
            }
          }
        });
        const mapped = found.map((channel) => channel.channel);
        const arr = voiceState.getChannels(guildId)[voiceChannel];
      }
      return [];
    }
  });
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp25 = tmp21;
    if (tmp21) {
      tmp25 = canModerateStage;
    }
    if (tmp25) {
      tmp25 = stateFromStores4;
    }
    const items7 = [];
    if (!tmp25) {
      if (tmp21) {
        if (canModerateStage) {
          if (!stateFromStores4) {
            const tmp30 = tmp2ResultResult === TableRowGroup(obj[26]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            const intl3 = TableRowGroup(obj[29]).intl;
            let string = intl3.string;
            let t = TableRowGroup(obj[29]).t;
            if (tmp30) {
              let stringResult = string(t.tHj7Tb);
            } else {
              stringResult = string(t.VUCWcO);
            }
            obj = { icon: null, label: null, disabled: null, onPress: null };
            obj[0] = TableRowGroup(obj[32]).MicrophoneArrowRightIcon;
            if (tmp8) {
              const intl4 = TableRowGroup(obj[29]).intl;
              stringResult = intl4.string(TableRowGroup(obj[29]).t["8Joh+p"]);
            }
            obj[1] = stringResult;
            obj[2] = tmp30;
            obj[3] = function onPress() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SPEAK" });
              const obj = user(showUserProfile[31]);
              if (closure_10) {
                const result = obj.audienceAckRequestToSpeak(voiceChannel, false);
              } else {
                obj.inviteUserToStage(voiceChannel, user.id);
              }
              guildId(showUserProfile[18]).hideActionSheet();
            };
            items7.push(<ModeratorActionRow key="invite-to-speak" icon={null} label={null} disabled={null} onPress={null} />);
            const tmp32 = jsx;
            const tmp33 = ModeratorActionRow;
          }
        }
      }
      let tmp35 = tmp19;
      if (tmp19) {
        tmp35 = canMoveMembers;
      }
      if (tmp35) {
        obj1 = { label: null, hint: null, sublabel: null, icon: null, onPress: null };
        const intl5 = TableRowGroup(obj[29]).intl;
        obj1[0] = intl5.string(TableRowGroup(obj[29]).t.FAplms);
        obj1[1] = TableRowGroup(obj[33]).FormArrow;
        obj1[2] = tmp15;
        obj1[3] = TableRowGroup(obj[34]).VoiceNormalIcon;
        obj1[4] = function onPress() {
          trackUserProfileAction({ action: "PRESS_MOVE_TO_CHANNEL" });
          let obj = guildId(showUserProfile[18]);
          obj = { guild: stateFromStores, header: null, channels: null, onSelect: null, selectedChannel: null };
          obj = { title: null };
          const intl = user(showUserProfile[29]).intl;
          obj[0] = intl.string(user(showUserProfile[29]).t.r2ptsz);
          obj[1] = obj;
          obj[2] = closure_13;
          obj[3] = function onSelect(id) {
            return closure_1_1(closure_1_3[37]).setChannel(id2.id, id.id, id.id);
          };
          obj.openLazy(user(showUserProfile[36])(showUserProfile[35], showUserProfile.paths), "ChannelPicker", obj, "stack");
        };
        items7.push(<ModeratorActionRow key="move-to-channel" label={null} hint={null} sublabel={null} icon={null} onPress={null} />);
        const tmp36 = jsx;
        const tmp37 = ModeratorActionRow;
      }
      let tmp39 = null != stateFromStores1;
      if (tmp39) {
        let tmp40 = canKickUser;
        if (!canKickUser) {
          tmp40 = canBanUser;
        }
        if (!tmp40) {
          tmp40 = canChangeNick;
        }
        if (!tmp40) {
          tmp40 = canManageGuildRoles;
        }
        tmp39 = tmp40;
      }
      if (tmp39) {
        tmp39 = !user.isNonUserBot();
      }
      if (tmp39) {
        let obj2 = { label: null, icon: null, onPress: null };
        const intl6 = TableRowGroup(obj[29]).intl;
        obj2[0] = intl6.string(TableRowGroup(obj[29]).t.HxrBOZ);
        obj2[1] = TableRowGroup(obj[38]).SettingsIcon;
        obj2[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_MANAGE_USER" });
          hideActionSheet();
          let obj = guildId(showUserProfile[39]);
          obj = {
            userId: user.id,
            guildId: stateFromStores.id,
            onClose() {
              let arr = closure_1_1(closure_1_3[39]);
              arr = arr.pop();
              dependencyMap();
            },
            onRemove() {
              let arr = callback(4676);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(showUserProfile[36])(showUserProfile[40], showUserProfile.paths), obj);
        };
        items7.push(<ModeratorActionRow key="manage" label={null} icon={null} onPress={null} />);
      }
      const features = stateFromStores.features;
      const hasItem = features.has(canMoveMembers.COMMUNITY);
      const features2 = stateFromStores.features;
      const hasItem1 = features2.has(canMoveMembers.GUILD_ONBOARDING_EVER_ENABLED);
      let hasFlagResult = null != stateFromStores1;
      if (hasFlagResult) {
        let num = stateFromStores1.flags;
        if (num == null) {
          num = 0;
        }
        hasFlagResult = TableRowGroup(obj[41]).hasFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION);
        const TableRowGroupResult2 = TableRowGroup(obj[41]);
      }
      if (tmp49) {
        obj3 = { label: null, icon: null, onPress: null };
        const intl7 = TableRowGroup(obj[29]).intl;
        obj3[0] = intl7.string(TableRowGroup(obj[29]).t.NbhSI7);
        obj3[1] = TableRowGroup(obj[42]).StampIcon;
        obj3[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_UNVERIFY_USER" });
          const obj = guildId(showUserProfile[37]);
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[41]).setFlag(num, _undefined.BYPASSES_VERIFICATION, false));
        };
        items7.push(<ModeratorActionRow key="unverify" label={null} icon={null} onPress={null} />);
      }
      if (tmp53) {
        obj4 = { label: null, icon: null, onPress: null };
        const intl8 = TableRowGroup(obj[29]).intl;
        obj4[0] = intl8.string(TableRowGroup(obj[29]).t["6QlTeK"]);
        obj4[1] = TableRowGroup(obj[42]).StampIcon;
        obj4[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_VERIFY_USER" });
          const obj = guildId(showUserProfile[37]);
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[41]).setFlag(num, _undefined.BYPASSES_VERIFICATION, true));
        };
        items7.push(<ModeratorActionRow key="verify" label={null} icon={null} onPress={null} />);
      }
      if (null != stateFromStores1) {
        if (tmp14) {
          let result = TableRowGroup(obj[43]).isMemberCommunicationDisabled(stateFromStores1);
          GuildMemberFlags = result;
          const intl9 = TableRowGroup(obj[29]).intl;
          const string2 = intl9.string;
          t = TableRowGroup(obj[29]).t;
          if (result) {
            let string2Result = string2(t.qXtNtS);
          } else {
            string2Result = string2(t.xpsADY);
          }
          t = { label: null, icon: null, onPress: null };
          t[0] = string2Result;
          t[1] = TableRowGroup(obj[44]).ClockWarningIcon;
          t[2] = function onPress() {
            let str = "PRESS_TIME_OUT_USER";
            if (c14) {
              str = "PRESS_REMOVE_TIME_OUT";
            }
            trackUserProfileAction({ action: str });
            hideActionSheet();
            let obj = user(showUserProfile[45]);
            if (c14) {
              obj = { guildId: null, userId: null, cancelButtonCallback: null };
              ({ guildId: obj3[0], userId: obj3[1] } = stateFromStores1);
              obj[2] = showUserProfile;
              const result = obj.openEnableCommunication(obj);
            } else {
              obj = { guildId: null, userId: null, cancelButtonCallback: null };
              ({ guildId: obj2[0], userId: obj2[1] } = stateFromStores1);
              obj[2] = showUserProfile;
              const result1 = obj.openDisableCommunication(obj);
            }
          };
          items7.push(<ModeratorActionRow key="time-out" label={null} icon={null} onPress={null} />);
          const TableRowGroupResult3 = TableRowGroup(obj[43]);
          const tmp58 = jsx;
          const tmp59 = ModeratorActionRow;
        }
      }
      let tmp62 = tmp19;
      if (tmp19) {
        tmp62 = tmp22;
      }
      if (tmp62) {
        tmp62 = canMuteMembers;
      }
      if (!tmp62) {
        let tmp67 = tmp19;
        if (tmp19) {
          tmp67 = tmp22;
        }
        if (tmp67) {
          tmp67 = canDeafenMembers;
        }
        if (!tmp67) {
          if (tmp19) {
            tmp19 = canMoveMembers;
          }
          if (!tmp19) {
            if (tmp76) {
              obj5 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl14 = TableRowGroup(obj[29]).intl;
              obj5[0] = intl14.string(TableRowGroup(obj[29]).t["3glT6Z"]);
              obj5[1] = TableRowGroup(obj[51]).UserMinusIcon;
              obj5[3] = function onPress() {
                trackUserProfileAction({ action: "PRESS_KICK_USER" });
                hideActionSheet();
                guildId(showUserProfile[52])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              items7.push(<ModeratorActionRow key="kick" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (canBanUser) {
              obj6 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl15 = TableRowGroup(obj[29]).intl;
              obj6[0] = intl15.string(TableRowGroup(obj[29]).t["5MBJ5M"]);
              obj6[1] = TableRowGroup(obj[53]).HammerIcon;
              obj6[3] = function onPress() {
                trackUserProfileAction({ action: "PRESS_BAN_USER" });
                guildId(showUserProfile[54])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              items7.push(<ModeratorActionRow key="ban" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (stateFromStores2) {
              if (canRemoveThreadMember) {
                if (!tmp8) {
                  if (null != channelId) {
                    let intl16 = TableRowGroup(obj[29]).intl;
                    string = intl16.string;
                    let push = TableRowGroup(obj[29]).t;
                    if (stateFromStores3) {
                      stringResult = string(push["6+b8ae"]);
                    } else {
                      stringResult = string(push.at1yY3);
                    }
                    push = items7.push;
                    intl16 = ModeratorActionRow;
                    string = { isDestructive: true, label: null, icon: null, onPress: null };
                    string[1] = stringResult;
                    string[2] = TableRowGroup(obj[55]).ThreadMinusIcon;
                    string[3] = function onPress() {
                      let obj = user(showUserProfile[56]);
                      obj = {
                        isForumPost: stateFromStores3,
                        user,
                        onConfirm() {
                          callback({ action: "PRESS_REMOVE_FROM_THREAD" });
                          closure_1_1(closure_1_3[57]).removeMember(closure_2, id.id, "Context Menu");
                          callback2();
                        }
                      };
                      obj.confirmThreadRemove(obj);
                    };
                    push(<ModeratorActionRow key="remove-from-thread" isDestructive label={null} icon={null} onPress={null} />);
                  }
                }
              }
            }
            if (0 === items7.length) {
              return null;
            } else {
              obj7 = { title: null, style: null, titleStyle: null, children: null };
              tmp2Result = tmp2(obj[15]);
              const intl17 = TableRowGroup(obj[29]).intl;
              obj7[0] = intl17.string(TableRowGroup(obj[29]).t["EApw/R"]);
              const items8 = [user.style, tmp.cardContainer];
              obj7[1] = items8;
              obj7[2] = tmp3 ? tmp.refreshCardTitle : tmp.cardTitle;
              if (tmp3) {
                TableRowGroup = TableRowGroup(obj[58]).TableRowGroup;
                obj = { hasIcons: true, children: null };
                obj[1] = items7;
                let tmp89Result = tmp89(TableRowGroup, obj);
              } else {
                obj8 = { children: null };
                obj8[0] = items7;
                tmp89Result = tmp89(TableRowGroup(obj[15]).UserProfileCardRows, obj8);
              }
              obj7[3] = tmp89Result;
              tmp89Result = tmp89(tmp2Result, obj7);
            }
            tmp76 = null != stateFromStores1 && canKickUser;
          } else {
            if (user.id === currentUser.id) {
              const intl13 = TableRowGroup(obj[29]).intl;
              let stringResult1 = intl13.string(TableRowGroup(obj[29]).t["6vrfgt"]);
            } else {
              const intl12 = TableRowGroup(obj[29]).intl;
              stringResult1 = intl12.string(TableRowGroup(obj[29]).t["/jERiG"]);
            }
            const obj9 = { label: null, icon: null, isDestructive: true, onPress: null };
            obj9[0] = stringResult1;
            obj9[1] = TableRowGroup(obj[50]).PhoneHangUpIcon;
            obj9[3] = function onPress() {
              trackUserProfileAction({ action: "DISCONNECT" });
              guildId(showUserProfile[37]).setChannel(stateFromStores.id, user.id, null);
            };
            items7.push(<ModeratorActionRow key="disconnect" label={null} icon={null} isDestructive onPress={null} />);
            const tmp72 = jsx;
            const tmp73 = ModeratorActionRow;
          }
        } else {
          const intl11 = TableRowGroup(obj[29]).intl;
          const string4 = intl11.string;
          const t3 = TableRowGroup(obj[29]).t;
          if (voiceState.deaf) {
            let string4Result = string4(t3.Gbw4Z9);
          } else {
            string4Result = string4(t3.hMA2GE);
          }
          const obj10 = { label: null, icon: null, onPress: null };
          obj10[0] = string4Result;
          if (voiceState.deaf) {
            let HeadphonesIcon = TableRowGroup(obj[48]).HeadphonesSlashIcon;
          } else {
            HeadphonesIcon = TableRowGroup(obj[49]).HeadphonesIcon;
          }
          obj10[1] = HeadphonesIcon;
          obj10[2] = function onPress() {
            trackUserProfileAction({ action: "DEAFEN" });
            guildId(showUserProfile[37]).setServerDeaf(stateFromStores.id, user.id, !voiceState.deaf);
          };
          items7.push(<ModeratorActionRow key="deafen" label={null} icon={null} onPress={null} />);
          const tmp68 = jsx;
          const tmp69 = ModeratorActionRow;
        }
      } else {
        const intl10 = TableRowGroup(obj[29]).intl;
        const string3 = intl10.string;
        const t2 = TableRowGroup(obj[29]).t;
        if (voiceState.mute) {
          let string3Result = string3(t2.wG9K2n);
        } else {
          string3Result = string3(t2.e9e9Ua);
        }
        const obj11 = { label: null, icon: null, onPress: null };
        obj11[0] = string3Result;
        if (voiceState.mute) {
          let MicrophoneIcon = TableRowGroup(obj[46]).MicrophoneSlashIcon;
        } else {
          MicrophoneIcon = TableRowGroup(obj[47]).MicrophoneIcon;
        }
        obj11[1] = MicrophoneIcon;
        obj11[2] = function onPress() {
          trackUserProfileAction({ action: "SERVER_MUTE" });
          guildId(showUserProfile[37]).setServerMute(stateFromStores.id, user.id, !voiceState.mute);
        };
        items7.push(<ModeratorActionRow key="server-mute" label={null} icon={null} onPress={null} />);
        const tmp63 = jsx;
        const tmp64 = ModeratorActionRow;
      }
      tmp49 = null != stateFromStores1 && !tmp8 && canModerateMembers && hasItem && hasItem1 && hasFlagResult;
      tmp53 = null != stateFromStores1 && !tmp8 && canModerateMembers && hasItem && hasItem1 && !hasFlagResult;
    } else {
      if (user.id === currentUser.id) {
        const intl2 = TableRowGroup(obj[29]).intl;
        let stringResult2 = intl2.string(TableRowGroup(obj[29]).t["6C6PJx"]);
      } else {
        let intl = TableRowGroup(obj[29]).intl;
        stringResult2 = intl.string(TableRowGroup(obj[29]).t.r23NoB);
      }
      const obj12 = { label: null, icon: null, onPress: null };
      obj12[0] = stringResult2;
      obj12[1] = TableRowGroup(obj[30]).GroupArrowDownIcon;
      obj12[2] = function onPress() {
        trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
        user(showUserProfile[31]).moveUserToAudience(user, voiceChannel);
        const obj = user(showUserProfile[31]);
        guildId(showUserProfile[18]).hideActionSheet();
      };
      items7.push(<ModeratorActionRow key="remove-from-stage" label={null} icon={null} onPress={null} />);
      const tmp26 = jsx;
      const tmp27 = ModeratorActionRow;
    }
  }
};