// discord_app/modules/user_profile/native/UserProfileModeratorActions.tsx
import "initialize";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import updateVoiceState from "updateVoiceState";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { jsx } from "getGuildMemberAgeInRange";
import createCacheKey from "createCacheKey";
import { TableRowInner } from "../../../design/components/TableRow/native/TableRow.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { Divider } from "UserProfileCard.tsx";

let closure_12;
let map1;
const require = arg1;
function ModeratorActionRow(arg0) {
  let disabled;
  let hint;
  let icon;
  let isDestructive;
  let label;
  let onPress;
  let sublabel;
  ({ label, sublabel, icon, hint, disabled, isDestructive, onPress } = arg0);
  if (useIsMobileVisualRefreshExperimentEnabled("UserProfileModeratorActions")) {
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
      const obj1 = { variant: "text-xs/normal", color: "text-subtle", children: null };
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
({ GuildFeatures: closure_12, Permissions: map1 } = ME);
let closure_16 = createCacheKey.createStyles({ cardContainer: { paddingBottom: 0 }, cardTitle: { marginBottom: 0 } });
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/user_profile/native/UserProfileModeratorActions.tsx");

export default function UserProfileModeratorActions(user) {
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
  let channelId = user.channelId;
  const showUserProfile = user.showUserProfile;
  let trackUserProfileAction;
  let hideActionSheet;
  let voiceState;
  let voiceChannel;
  let stateFromStores;
  let stateFromStores1;
  let c10;
  let stateFromStores3;
  canMoveMembers = undefined;
  let closure_13;
  let GuildMemberFlags;
  let tmp = callback();
  let stringResult2 = showUserProfile;
  const tmp4 = guildId(showUserProfile[12])("UserProfileModeratorActions");
  const tmp5 = user;
  let obj = user(showUserProfile[16]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  hideActionSheet = guildId(showUserProfile[17]).hideActionSheet;
  obj = { userId: user.id, guildId };
  const tmp6 = guildId(showUserProfile[18])(obj);
  voiceState = tmp6.voiceState;
  voiceChannel = tmp6.voiceChannel;
  let obj2 = user(showUserProfile[19]);
  const items = [stateFromStores1];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getGuild(guildId));
  let obj3 = user(showUserProfile[19]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores.getMember(guildId, user.id));
  c10 = tmp10;
  let obj4 = user(showUserProfile[19]);
  const items2 = [hideActionSheet];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
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
  let obj5 = user(showUserProfile[19]);
  const items3 = [hideActionSheet];
  stateFromStores3 = obj5.useStateFromStores(items3, () => {
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
  let obj6 = user(showUserProfile[20]);
  const canRemoveThreadMember = obj6.useCanRemoveThreadMember(channelId);
  let obj7 = user(showUserProfile[19]);
  const items4 = [c10];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items4, () => {
    const obj = { canKickUser: null, canBanUser: null, canChangeNick: null, canManageUserRoles: null, canManageGuildRoles: null, canManageGuild: null, canModerateMembers: null, canMoveMembers: null, canMuteMembers: null, canDeafenMembers: null, canModerateStage: null };
    obj[0] = user(showUserProfile[21]).canKickMember(user, stateFromStores);
    const obj2 = user(showUserProfile[21]);
    const tmp = user;
    const tmp2 = showUserProfile;
    obj[1] = user(showUserProfile[21]).canBanMember(user, stateFromStores);
    let canManageUserResult = null != stateFromStores;
    if (canManageUserResult) {
      canManageUserResult = _undefined.canManageUser(constants.MANAGE_NICKNAMES, tmp3, tmp4);
    }
    obj[2] = canManageUserResult;
    let canManageUserResult1 = null != tmp4;
    if (canManageUserResult1) {
      canManageUserResult1 = _undefined.canManageUser(constants.MANAGE_ROLES, tmp3, tmp4);
    }
    obj[3] = canManageUserResult1;
    let canResult = null != tmp4;
    if (canResult) {
      canResult = _undefined.can(constants.MANAGE_ROLES, tmp4);
    }
    obj[4] = canResult;
    let canManageUserResult2 = null != tmp4;
    if (canManageUserResult2) {
      canManageUserResult2 = _undefined.canManageUser(constants.MANAGE_GUILD, tmp3, tmp4);
    }
    obj[5] = canManageUserResult2;
    let canManageUserResult3 = null != tmp4;
    if (canManageUserResult3) {
      canManageUserResult3 = _undefined.canManageUser(constants.MODERATE_MEMBERS, tmp3, tmp4);
    }
    obj[6] = canManageUserResult3;
    obj[7] = _undefined.can(constants.MOVE_MEMBERS, voiceChannel);
    obj[8] = _undefined.can(constants.MUTE_MEMBERS, voiceChannel);
    obj[9] = _undefined.can(constants.DEAFEN_MEMBERS, voiceChannel);
    obj[10] = _undefined.can(tmp(tmp2[22]).MODERATE_STAGE_CHANNEL_PERMISSIONS, voiceChannel);
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
  const tmp17 = guildId(stringResult2[24])(voiceChannel);
  let id;
  let tmp2Result = tmp2(stringResult2[25]);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp2ResultResult = tmp2Result(user.id, id);
  let tmp21 = null != voiceChannel;
  if (tmp21) {
    channelId = undefined;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    tmp21 = null != channelId;
  }
  const tmp23 = null != voiceChannel && voiceChannel.isGuildStageVoice();
  let tmp24 = null != voiceChannel;
  if (tmp24) {
    let tmp25 = !tmp23;
    if (tmp23) {
      tmp25 = tmp2ResultResult === tmp5(stringResult2[25]).RequestToSpeakStates.ON_STAGE;
    }
    tmp24 = tmp25;
  }
  let tmp5Result = tmp5(stringResult2[19]);
  const items5 = [trackUserProfileAction];
  const stateFromStores4 = tmp5Result.useStateFromStores(items5, () => {
    let id;
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    return trackUserProfileAction.getPermissionsForUser(user.id, id).speaker;
  });
  tmp5Result = tmp5(stringResult2[19]);
  const items6 = [voiceState, stateFromStores3, stateFromStores1, c10];
  closure_13 = tmp5Result.useStateFromStoresArray(items6, () => {
    if (canMoveMembers) {
      if (null != voiceChannel) {
        const found = voiceState.getChannels(guildId)[voiceChannel].filter((channel) => {
          channel = channel.channel;
          if (channel.id === id.id) {
            return tmp;
          } else {
            let can = outer1_10.can;
            let canResult = outer1_13;
            if (getUncachedChannelPermissions) {
              canResult = can(canResult.CONNECT, channel);
              if (canResult) {
                can = outer1_11;
                canResult = !outer1_0(outer1_3[26]).isChannelFull(channel, outer1_11, outer1_9);
                const obj4 = outer1_0(outer1_3[26]);
              }
              let canResult1 = canResult;
            } else {
              canResult1 = can(canResult.MOVE_MEMBERS, channel);
              if (canResult1) {
                let canResult2 = outer1_10.can(outer1_13.CONNECT, channel);
                if (!canResult2) {
                  let obj = outer1_2(outer1_3[27]);
                  obj = { permission: null, user: null, context: null };
                  obj[0] = outer1_13.CONNECT;
                  obj[1] = closure_0;
                  obj[2] = channel;
                  canResult2 = obj.can(obj);
                }
                canResult1 = canResult2;
              }
              if (canResult1) {
                canResult1 = !outer1_0(outer1_3[26]).isChannelFull(channel, outer1_11, outer1_9);
                const obj3 = outer1_0(outer1_3[26]);
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
    let tmp27 = tmp23;
    if (tmp23) {
      tmp27 = canModerateStage;
    }
    if (tmp27) {
      tmp27 = stateFromStores4;
    }
    const items7 = [];
    if (!tmp27) {
      if (tmp23) {
        if (canModerateStage) {
          if (!stateFromStores4) {
            const tmp32 = tmp2ResultResult === tmp5(stringResult2[25]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            const intl3 = tmp5(stringResult2[28]).intl;
            let string = intl3.string;
            let t = tmp5(stringResult2[28]).t;
            if (tmp32) {
              let stringResult = string(t.tHj7Tb);
            } else {
              stringResult = string(t.VUCWcO);
            }
            obj = { icon: null, label: null, disabled: null, onPress: null };
            obj[0] = tmp5(stringResult2[31]).MicrophoneArrowRightIcon;
            if (tmp10) {
              const intl4 = tmp5(stringResult2[28]).intl;
              stringResult = intl4.string(tmp5(stringResult2[28]).t["8Joh+p"]);
            }
            obj[1] = stringResult;
            obj[2] = tmp32;
            obj[3] = function onPress() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SPEAK" });
              const obj = user(showUserProfile[30]);
              if (c10) {
                const result = obj.audienceAckRequestToSpeak(voiceChannel, false);
              } else {
                obj.inviteUserToStage(voiceChannel, user.id);
              }
              guildId(showUserProfile[17]).hideActionSheet();
            };
            items7.push(<ModeratorActionRow key="invite-to-speak" icon={null} label={null} disabled={null} onPress={null} />);
            const tmp34 = jsx;
            const tmp35 = ModeratorActionRow;
          }
        }
      }
      let tmp37 = tmp21;
      if (tmp21) {
        tmp37 = canMoveMembers;
      }
      if (tmp37) {
        const obj1 = { label: null, hint: null, sublabel: null, icon: null, onPress: null };
        const intl5 = tmp5(stringResult2[28]).intl;
        obj1[0] = intl5.string(tmp5(stringResult2[28]).t.FAplms);
        obj1[1] = tmp5(stringResult2[32]).FormArrow;
        obj1[2] = tmp17;
        obj1[3] = tmp5(stringResult2[33]).VoiceNormalIcon;
        obj1[4] = function onPress() {
          trackUserProfileAction({ action: "PRESS_MOVE_TO_CHANNEL" });
          let obj = guildId(showUserProfile[17]);
          obj = { guild: stateFromStores, header: null, channels: null, onSelect: null, selectedChannel: null };
          obj = { title: null };
          const intl = user(showUserProfile[28]).intl;
          obj[0] = intl.string(user(showUserProfile[28]).t.r2ptsz);
          obj[1] = obj;
          obj[2] = closure_13;
          obj[3] = function onSelect(id) {
            return outer1_1(outer1_3[36]).setChannel(id2.id, id.id, id.id);
          };
          obj.openLazy(user(showUserProfile[35])(showUserProfile[34], showUserProfile.paths), "ChannelPicker", obj, "stack");
        };
        items7.push(<ModeratorActionRow key="move-to-channel" label={null} hint={null} sublabel={null} icon={null} onPress={null} />);
        const tmp38 = jsx;
        const tmp39 = ModeratorActionRow;
      }
      let tmp41 = null != stateFromStores1;
      if (tmp41) {
        let tmp42 = canKickUser;
        if (!canKickUser) {
          tmp42 = canBanUser;
        }
        if (!tmp42) {
          tmp42 = canChangeNick;
        }
        if (!tmp42) {
          tmp42 = canManageGuildRoles;
        }
        tmp41 = tmp42;
      }
      if (tmp41) {
        tmp41 = !user.isNonUserBot();
      }
      if (tmp41) {
        obj2 = { label: null, icon: null, onPress: null };
        const intl6 = tmp5(stringResult2[28]).intl;
        obj2[0] = intl6.string(tmp5(stringResult2[28]).t.HxrBOZ);
        obj2[1] = tmp5(stringResult2[37]).SettingsIcon;
        obj2[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_MANAGE_USER" });
          hideActionSheet();
          let obj = guildId(showUserProfile[38]);
          obj = {
            userId: user.id,
            guildId: stateFromStores.id,
            onClose() {
              let arr = outer1_1(outer1_3[38]);
              arr = arr.pop();
              dependencyMap();
            },
            onRemove() {
              let arr = callback(4509);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(showUserProfile[35])(showUserProfile[39], showUserProfile.paths), obj);
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
        hasFlagResult = tmp5(stringResult2[40]).hasFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION);
        const tmp5Result1 = tmp5(stringResult2[40]);
      }
      if (tmp51) {
        obj3 = { label: null, icon: null, onPress: null };
        const intl7 = tmp5(stringResult2[28]).intl;
        obj3[0] = intl7.string(tmp5(stringResult2[28]).t.NbhSI7);
        obj3[1] = tmp5(stringResult2[41]).StampIcon;
        obj3[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_UNVERIFY_USER" });
          const obj = guildId(showUserProfile[36]);
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[40]).setFlag(num, _undefined2.BYPASSES_VERIFICATION, false));
        };
        items7.push(<ModeratorActionRow key="unverify" label={null} icon={null} onPress={null} />);
      }
      if (tmp55) {
        obj4 = { label: null, icon: null, onPress: null };
        const intl8 = tmp5(stringResult2[28]).intl;
        obj4[0] = intl8.string(tmp5(stringResult2[28]).t["6QlTeK"]);
        obj4[1] = tmp5(stringResult2[41]).StampIcon;
        obj4[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_VERIFY_USER" });
          const obj = guildId(showUserProfile[36]);
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[40]).setFlag(num, _undefined2.BYPASSES_VERIFICATION, true));
        };
        items7.push(<ModeratorActionRow key="verify" label={null} icon={null} onPress={null} />);
      }
      if (null != stateFromStores1) {
        if (tmp16) {
          let result = tmp5(stringResult2[42]).isMemberCommunicationDisabled(stateFromStores1);
          GuildMemberFlags = result;
          const intl9 = tmp5(stringResult2[28]).intl;
          const string2 = intl9.string;
          t = tmp5(stringResult2[28]).t;
          if (result) {
            let string2Result = string2(t.qXtNtS);
          } else {
            string2Result = string2(t.xpsADY);
          }
          t = { label: null, icon: null, onPress: null };
          t[0] = string2Result;
          t[1] = tmp5(stringResult2[43]).ClockWarningIcon;
          t[2] = function onPress() {
            let str = "PRESS_TIME_OUT_USER";
            if (c14) {
              str = "PRESS_REMOVE_TIME_OUT";
            }
            trackUserProfileAction({ action: str });
            hideActionSheet();
            let obj = user(showUserProfile[44]);
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
          const tmp5Result2 = tmp5(stringResult2[42]);
          const tmp60 = jsx;
          const tmp61 = ModeratorActionRow;
        }
      }
      let tmp64 = tmp21;
      if (tmp21) {
        tmp64 = tmp24;
      }
      if (tmp64) {
        tmp64 = canMuteMembers;
      }
      if (!tmp64) {
        let tmp69 = tmp21;
        if (tmp21) {
          tmp69 = tmp24;
        }
        if (tmp69) {
          tmp69 = canDeafenMembers;
        }
        if (!tmp69) {
          if (tmp21) {
            tmp21 = canMoveMembers;
          }
          if (!tmp21) {
            if (tmp78) {
              obj5 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl14 = tmp5(stringResult2[28]).intl;
              obj5[0] = intl14.string(tmp5(stringResult2[28]).t["3glT6Z"]);
              obj5[1] = tmp5(stringResult2[50]).UserMinusIcon;
              obj5[3] = function onPress() {
                trackUserProfileAction({ action: "PRESS_KICK_USER" });
                hideActionSheet();
                guildId(showUserProfile[51])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              items7.push(<ModeratorActionRow key="kick" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (canBanUser) {
              obj6 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl15 = tmp5(stringResult2[28]).intl;
              obj6[0] = intl15.string(tmp5(stringResult2[28]).t["5MBJ5M"]);
              obj6[1] = tmp5(stringResult2[52]).HammerIcon;
              obj6[3] = function onPress() {
                trackUserProfileAction({ action: "PRESS_BAN_USER" });
                guildId(showUserProfile[53])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              items7.push(<ModeratorActionRow key="ban" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (stateFromStores2) {
              if (canRemoveThreadMember) {
                if (!tmp10) {
                  if (null != channelId) {
                    let intl16 = tmp5(stringResult2[28]).intl;
                    string = intl16.string;
                    let push = tmp5(stringResult2[28]).t;
                    if (stateFromStores3) {
                      stringResult = string(push["6+b8ae"]);
                    } else {
                      stringResult = string(push.at1yY3);
                    }
                    push = items7.push;
                    intl16 = ModeratorActionRow;
                    string = { isDestructive: true, label: null, icon: null, onPress: null };
                    string[1] = stringResult;
                    string[2] = tmp5(stringResult2[54]).ThreadMinusIcon;
                    string[3] = function onPress() {
                      let obj = user(showUserProfile[55]);
                      obj = {
                        isForumPost: stateFromStores3,
                        user,
                        onConfirm() {
                          callback({ action: "PRESS_REMOVE_FROM_THREAD" });
                          outer1_1(outer1_3[56]).removeMember(closure_2, id.id, "Context Menu");
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
              let stringResult1;
              tmp2Result = tmp2(stringResult2[14]);
              if (!tmp4) {
                const intl17 = tmp5(stringResult2[28]).intl;
                stringResult1 = intl17.string(tmp5(stringResult2[28]).t["EApw/R"]);
              }
              obj7 = { title: null, style: null, titleStyle: null, children: null };
              obj7[0] = stringResult1;
              const items8 = [user.style, tmp.cardContainer];
              obj7[1] = items8;
              obj7[2] = tmp.cardTitle;
              if (tmp4) {
                const obj8 = { hasIcons: true, title: null, children: null };
                const intl18 = tmp5(stringResult2[28]).intl;
                stringResult2 = intl18.string(tmp5(stringResult2[28]).t["EApw/R"]);
                obj8[1] = stringResult2;
                obj8[2] = items7;
                let tmp92Result = tmp92(tmp5(stringResult2[57]).TableRowGroup, obj8);
              } else {
                const obj9 = { children: null };
                obj9[0] = items7;
                tmp92Result = tmp92(tmp5(stringResult2[14]).UserProfileCardRows, obj9);
              }
              obj7[3] = tmp92Result;
              tmp92Result = tmp92(tmp2Result, obj7);
            }
            tmp78 = null != stateFromStores1 && canKickUser;
          } else {
            if (user.id === currentUser.id) {
              const intl13 = tmp5(stringResult2[28]).intl;
              let stringResult3 = intl13.string(tmp5(stringResult2[28]).t["6vrfgt"]);
            } else {
              const intl12 = tmp5(stringResult2[28]).intl;
              stringResult3 = intl12.string(tmp5(stringResult2[28]).t["/jERiG"]);
            }
            const obj10 = { label: null, icon: null, isDestructive: true, onPress: null };
            obj10[0] = stringResult3;
            obj10[1] = tmp5(stringResult2[49]).PhoneHangUpIcon;
            obj10[3] = function onPress() {
              trackUserProfileAction({ action: "DISCONNECT" });
              guildId(showUserProfile[36]).setChannel(stateFromStores.id, user.id, null);
            };
            items7.push(<ModeratorActionRow key="disconnect" label={null} icon={null} isDestructive onPress={null} />);
            const tmp74 = jsx;
            const tmp75 = ModeratorActionRow;
          }
        } else {
          const intl11 = tmp5(stringResult2[28]).intl;
          const string4 = intl11.string;
          const t3 = tmp5(stringResult2[28]).t;
          if (voiceState.deaf) {
            let string4Result = string4(t3.Gbw4Z9);
          } else {
            string4Result = string4(t3.hMA2GE);
          }
          const obj11 = { label: null, icon: null, onPress: null };
          obj11[0] = string4Result;
          if (voiceState.deaf) {
            let HeadphonesIcon = tmp5(stringResult2[47]).HeadphonesSlashIcon;
          } else {
            HeadphonesIcon = tmp5(stringResult2[48]).HeadphonesIcon;
          }
          obj11[1] = HeadphonesIcon;
          obj11[2] = function onPress() {
            trackUserProfileAction({ action: "DEAFEN" });
            guildId(showUserProfile[36]).setServerDeaf(stateFromStores.id, user.id, !voiceState.deaf);
          };
          items7.push(<ModeratorActionRow key="deafen" label={null} icon={null} onPress={null} />);
          const tmp70 = jsx;
          const tmp71 = ModeratorActionRow;
        }
      } else {
        const intl10 = tmp5(stringResult2[28]).intl;
        const string3 = intl10.string;
        const t2 = tmp5(stringResult2[28]).t;
        if (voiceState.mute) {
          let string3Result = string3(t2.wG9K2n);
        } else {
          string3Result = string3(t2.e9e9Ua);
        }
        const obj12 = { label: null, icon: null, onPress: null };
        obj12[0] = string3Result;
        if (voiceState.mute) {
          let MicrophoneIcon = tmp5(stringResult2[45]).MicrophoneSlashIcon;
        } else {
          MicrophoneIcon = tmp5(stringResult2[46]).MicrophoneIcon;
        }
        obj12[1] = MicrophoneIcon;
        obj12[2] = function onPress() {
          trackUserProfileAction({ action: "SERVER_MUTE" });
          guildId(showUserProfile[36]).setServerMute(stateFromStores.id, user.id, !voiceState.mute);
        };
        items7.push(<ModeratorActionRow key="server-mute" label={null} icon={null} onPress={null} />);
        const tmp65 = jsx;
        const tmp66 = ModeratorActionRow;
      }
      tmp51 = null != stateFromStores1 && !tmp10 && canModerateMembers && hasItem && hasItem1 && hasFlagResult;
      tmp55 = null != stateFromStores1 && !tmp10 && canModerateMembers && hasItem && hasItem1 && !hasFlagResult;
    } else {
      if (user.id === currentUser.id) {
        const intl2 = tmp5(stringResult2[28]).intl;
        let stringResult4 = intl2.string(tmp5(stringResult2[28]).t["6C6PJx"]);
      } else {
        let intl = tmp5(stringResult2[28]).intl;
        stringResult4 = intl.string(tmp5(stringResult2[28]).t.r23NoB);
      }
      const obj13 = { label: null, icon: null, onPress: null };
      obj13[0] = stringResult4;
      obj13[1] = tmp5(stringResult2[29]).GroupArrowDownIcon;
      obj13[2] = function onPress() {
        trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
        user(showUserProfile[30]).moveUserToAudience(user, voiceChannel);
        const obj = user(showUserProfile[30]);
        guildId(showUserProfile[17]).hideActionSheet();
      };
      items7.push(<ModeratorActionRow key="remove-from-stage" label={null} icon={null} onPress={null} />);
      const tmp28 = jsx;
      const tmp29 = ModeratorActionRow;
    }
  }
};