// === Module 12446: ModeratorActionRow ===

// Module 12446 (ModeratorActionRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import TableRowInner from "TableRowInner" /* 5567 */;
import closure_4 from "buildStageChannelUserRoles" /* 5333 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "comparator" /* 1982 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1982 */;
import closure_8 from "trackCommunicationDisabled" /* 1992 */;
import closure_9 from "createGuildRecordFromRust" /* 1909 */;
import closure_10 from "getUncachedChannelPermissions" /* 4091 */;
import closure_11 from "updateVoiceState" /* 4467 */;
import ME from "ME" /* 676 */;
import { GuildMemberFlags } from "GuildMemberFlags" /* 4079 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function ModeratorActionRow(isDestructive) {
  ({ label, sublabel } = isDestructive);
  let str = "default";
  ({ icon, hint, disabled, onPress } = isDestructive);
  if (isDestructive.isDestructive) {
    str = "danger";
  }
  const obj = { label, subLabel: sublabel, icon: jsx(TableRowInner.TableRow.Icon, { IconComponent: icon, variant: str }), arrow: null != hint, variant: str, disabled, onPress, accessibilityLabel: null, accessibilityRole: "button" };
  let combined = label;
  if (null != sublabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + label + ", " + sublabel;
  }
  obj[7] = combined;
  return jsx(TableRowInner.TableRow, { label, subLabel: sublabel, icon: jsx(TableRowInner.TableRow.Icon, { IconComponent: icon, variant: str }), arrow: null != hint, variant: str, disabled, onPress, accessibilityLabel: null, accessibilityRole: "button" });
}
noopAll;
({ GuildFeatures: closure_12, Permissions: map1 } = ME);
createCacheKey = { cardContainer: { paddingBottom: 0 }, refreshCardTitle: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[1] = createCacheKey;
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
  let tmp2 = user;
  const tmp3 = showUserProfile;
  let obj = user(showUserProfile[14]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  hideActionSheet = guildId(showUserProfile[15]).hideActionSheet;
  obj = { userId: user.id, guildId };
  const tmp5 = guildId(showUserProfile[16])(obj);
  voiceState = tmp5.voiceState;
  voiceChannel = tmp5.voiceChannel;
  let obj2 = user(showUserProfile[17]);
  const items = [stateFromStores1];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getGuild(guildId));
  let obj3 = user(showUserProfile[17]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores.getMember(guildId, user.id));
  closure_10 = tmp9;
  let obj4 = user(showUserProfile[17]);
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
  let obj5 = user(showUserProfile[17]);
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
  let obj6 = user(showUserProfile[18]);
  const canRemoveThreadMember = obj6.useCanRemoveThreadMember(channelId);
  let obj7 = user(showUserProfile[17]);
  const items4 = [closure_10];
  const stateFromStoresObject = obj7.useStateFromStoresObject(items4, () => {
    const obj = { canKickUser: user(showUserProfile[19]).canKickMember(user, stateFromStores), canBanUser: null, canChangeNick: null, canManageUserRoles: null, canManageGuildRoles: null, canManageGuild: null, canModerateMembers: null, canMoveMembers: null, canMuteMembers: null, canDeafenMembers: null, canModerateStage: null };
    const obj2 = user(showUserProfile[19]);
    const tmp = user;
    const tmp2 = showUserProfile;
    obj[1] = user(showUserProfile[19]).canBanMember(user, stateFromStores);
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
    obj[10] = closure_10.can(tmp(tmp2[20]).MODERATE_STAGE_CHANNEL_PERMISSIONS, voiceChannel);
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
  const tmp16 = guildId(tmp3[22])(voiceChannel);
  let id;
  let tmp4Result = tmp4(tmp3[23]);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp4ResultResult = tmp4Result(user.id, id);
  let tmp20 = null != voiceChannel;
  if (tmp20) {
    channelId = undefined;
    if (voiceState != null) {
      channelId = voiceState.channelId;
    }
    tmp20 = null != channelId;
  }
  const tmp22 = null != voiceChannel && voiceChannel.isGuildStageVoice();
  let tmp23 = null != voiceChannel;
  if (tmp23) {
    let tmp24 = !tmp22;
    if (tmp22) {
      tmp24 = tmp4ResultResult === tmp2(tmp3[23]).RequestToSpeakStates.ON_STAGE;
    }
    tmp23 = tmp24;
  }
  let tmp2Result = tmp2(tmp3[17]);
  const items5 = [trackUserProfileAction];
  const stateFromStores4 = tmp2Result.useStateFromStores(items5, () => {
    let id;
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    return trackUserProfileAction.getPermissionsForUser(user.id, id).speaker;
  });
  tmp2Result = tmp2(tmp3[17]);
  const items6 = [voiceState, stateFromStores3, stateFromStores1, closure_10];
  closure_13 = tmp2Result.useStateFromStoresArray(items6, () => {
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
                canResult = !closure_1_0(closure_1_3[24]).isChannelFull(channel, closure_1_11, closure_1_9);
                const obj4 = closure_1_0(closure_1_3[24]);
              }
              let canResult1 = canResult;
            } else {
              canResult1 = can(canResult.MOVE_MEMBERS, channel);
              if (canResult1) {
                let canResult2 = closure_1_10.can(closure_1_13.CONNECT, channel);
                if (!canResult2) {
                  let obj = closure_1_2(closure_1_3[25]);
                  obj = { permission: null, user: null, context: null };
                  obj[0] = closure_1_13.CONNECT;
                  obj[1] = closure_0;
                  obj[2] = channel;
                  canResult2 = obj.can(obj);
                }
                canResult1 = canResult2;
              }
              if (canResult1) {
                canResult1 = !closure_1_0(closure_1_3[24]).isChannelFull(channel, closure_1_11, closure_1_9);
                const obj3 = closure_1_0(closure_1_3[24]);
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
    let tmp26 = tmp22;
    if (tmp22) {
      tmp26 = canModerateStage;
    }
    if (tmp26) {
      tmp26 = stateFromStores4;
    }
    const items7 = [];
    if (!tmp26) {
      if (tmp22) {
        if (canModerateStage) {
          if (!stateFromStores4) {
            const tmp31 = tmp4ResultResult === tmp2(tmp3[23]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            const intl3 = tmp2(tmp3[26]).intl;
            let string = intl3.string;
            let t = tmp2(tmp3[26]).t;
            if (tmp31) {
              let stringResult = string(t.tHj7Tb);
            } else {
              stringResult = string(t.VUCWcO);
            }
            obj = { icon: null, label: null, disabled: null, onPress: null };
            obj[0] = tmp2(tmp3[29]).MicrophoneArrowRightIcon;
            if (tmp9) {
              const intl4 = tmp2(tmp3[26]).intl;
              stringResult = intl4.string(tmp2(tmp3[26]).t["8Joh+p"]);
            }
            obj[1] = stringResult;
            obj[2] = tmp31;
            obj[3] = function onPress() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SPEAK" });
              const obj = user(showUserProfile[28]);
              if (closure_10) {
                const result = obj.audienceAckRequestToSpeak(voiceChannel, false);
              } else {
                obj.inviteUserToStage(voiceChannel, user.id);
              }
              guildId(showUserProfile[15]).hideActionSheet();
            };
            items7.push(<ModeratorActionRow key="invite-to-speak" icon={null} label={null} disabled={null} onPress={null} />);
            const tmp33 = jsx;
            const tmp34 = ModeratorActionRow;
          }
        }
      }
      let tmp36 = tmp20;
      if (tmp20) {
        tmp36 = canMoveMembers;
      }
      if (tmp36) {
        obj1 = { label: null, hint: null, sublabel: null, icon: null, onPress: null };
        const intl5 = tmp2(tmp3[26]).intl;
        obj1[0] = intl5.string(tmp2(tmp3[26]).t.FAplms);
        obj1[1] = tmp2(tmp3[30]).FormArrow;
        obj1[2] = tmp16;
        obj1[3] = tmp2(tmp3[31]).VoiceNormalIcon;
        obj1[4] = function onPress() {
          trackUserProfileAction({ action: "PRESS_MOVE_TO_CHANNEL" });
          let obj = guildId(showUserProfile[15]);
          obj = { guild: stateFromStores, header: null, channels: null, onSelect: null, selectedChannel: null };
          obj = { title: null };
          const intl = user(showUserProfile[26]).intl;
          obj[0] = intl.string(user(showUserProfile[26]).t.r2ptsz);
          obj[1] = obj;
          obj[2] = closure_13;
          obj[3] = function onSelect(id) {
            return closure_1_1(closure_1_3[34]).setChannel(id2.id, id.id, id.id);
          };
          obj.openLazy(user(showUserProfile[33])(showUserProfile[32], showUserProfile.paths), "ChannelPicker", obj, "stack");
        };
        items7.push(<ModeratorActionRow key="move-to-channel" label={null} hint={null} sublabel={null} icon={null} onPress={null} />);
        const tmp37 = jsx;
        const tmp38 = ModeratorActionRow;
      }
      let tmp40 = null != stateFromStores1;
      if (tmp40) {
        let tmp41 = canKickUser;
        if (!canKickUser) {
          tmp41 = canBanUser;
        }
        if (!tmp41) {
          tmp41 = canChangeNick;
        }
        if (!tmp41) {
          tmp41 = canManageGuildRoles;
        }
        tmp40 = tmp41;
      }
      if (tmp40) {
        tmp40 = !user.isNonUserBot();
      }
      if (tmp40) {
        obj2 = { label: null, icon: null, onPress: null };
        const intl6 = tmp2(tmp3[26]).intl;
        obj2[0] = intl6.string(tmp2(tmp3[26]).t.HxrBOZ);
        obj2[1] = tmp2(tmp3[35]).SettingsIcon;
        obj2[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_MANAGE_USER" });
          hideActionSheet();
          let obj = guildId(showUserProfile[36]);
          obj = {
            userId: user.id,
            guildId: stateFromStores.id,
            onClose() {
              let arr = closure_1_1(closure_1_3[36]);
              arr = arr.pop();
              dependencyMap();
            },
            onRemove() {
              let arr = callback(4691);
              arr = arr.pop();
            }
          };
          obj.pushLazy(user(showUserProfile[33])(showUserProfile[37], showUserProfile.paths), obj);
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
        hasFlagResult = tmp2(tmp3[38]).hasFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION);
        const tmp2Result1 = tmp2(tmp3[38]);
      }
      if (tmp50) {
        obj3 = { label: null, icon: null, onPress: null };
        const intl7 = tmp2(tmp3[26]).intl;
        obj3[0] = intl7.string(tmp2(tmp3[26]).t.NbhSI7);
        obj3[1] = tmp2(tmp3[39]).StampIcon;
        obj3[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_UNVERIFY_USER" });
          const obj = guildId(showUserProfile[34]);
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[38]).setFlag(num, _undefined.BYPASSES_VERIFICATION, false));
        };
        items7.push(<ModeratorActionRow key="unverify" label={null} icon={null} onPress={null} />);
      }
      if (tmp54) {
        obj4 = { label: null, icon: null, onPress: null };
        const intl8 = tmp2(tmp3[26]).intl;
        obj4[0] = intl8.string(tmp2(tmp3[26]).t["6QlTeK"]);
        obj4[1] = tmp2(tmp3[39]).StampIcon;
        obj4[2] = function onPress() {
          trackUserProfileAction({ action: "PRESS_VERIFY_USER" });
          const obj = guildId(showUserProfile[34]);
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(stateFromStores.id, user.id, user(showUserProfile[38]).setFlag(num, _undefined.BYPASSES_VERIFICATION, true));
        };
        items7.push(<ModeratorActionRow key="verify" label={null} icon={null} onPress={null} />);
      }
      if (null != stateFromStores1) {
        if (tmp15) {
          let result = tmp2(tmp3[40]).isMemberCommunicationDisabled(stateFromStores1);
          GuildMemberFlags = result;
          const intl9 = tmp2(tmp3[26]).intl;
          const string2 = intl9.string;
          t = tmp2(tmp3[26]).t;
          if (result) {
            let string2Result = string2(t.qXtNtS);
          } else {
            string2Result = string2(t.xpsADY);
          }
          t = { label: null, icon: null, onPress: null };
          t[0] = string2Result;
          t[1] = tmp2(tmp3[41]).ClockWarningIcon;
          t[2] = function onPress() {
            let str = "PRESS_TIME_OUT_USER";
            if (c14) {
              str = "PRESS_REMOVE_TIME_OUT";
            }
            trackUserProfileAction({ action: str });
            hideActionSheet();
            let obj = user(showUserProfile[42]);
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
          const tmp2Result2 = tmp2(tmp3[40]);
          const tmp59 = jsx;
          const tmp60 = ModeratorActionRow;
        }
      }
      let tmp63 = tmp20;
      if (tmp20) {
        tmp63 = tmp23;
      }
      if (tmp63) {
        tmp63 = canMuteMembers;
      }
      if (!tmp63) {
        let tmp68 = tmp20;
        if (tmp20) {
          tmp68 = tmp23;
        }
        if (tmp68) {
          tmp68 = canDeafenMembers;
        }
        if (!tmp68) {
          if (tmp20) {
            tmp20 = canMoveMembers;
          }
          if (!tmp20) {
            if (tmp77) {
              obj5 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl14 = tmp2(tmp3[26]).intl;
              obj5[0] = intl14.string(tmp2(tmp3[26]).t["3glT6Z"]);
              obj5[1] = tmp2(tmp3[48]).UserMinusIcon;
              obj5[3] = function onPress() {
                trackUserProfileAction({ action: "PRESS_KICK_USER" });
                hideActionSheet();
                guildId(showUserProfile[49])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              items7.push(<ModeratorActionRow key="kick" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (canBanUser) {
              obj6 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl15 = tmp2(tmp3[26]).intl;
              obj6[0] = intl15.string(tmp2(tmp3[26]).t["5MBJ5M"]);
              obj6[1] = tmp2(tmp3[50]).HammerIcon;
              obj6[3] = function onPress() {
                trackUserProfileAction({ action: "PRESS_BAN_USER" });
                guildId(showUserProfile[51])({ guildId: stateFromStores.id, userId: user.id, cancelButtonCallback: showUserProfile });
              };
              items7.push(<ModeratorActionRow key="ban" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (stateFromStores2) {
              if (canRemoveThreadMember) {
                if (!tmp9) {
                  if (null != channelId) {
                    let intl16 = tmp2(tmp3[26]).intl;
                    string = intl16.string;
                    let push = tmp2(tmp3[26]).t;
                    if (stateFromStores3) {
                      stringResult = string(push["6+b8ae"]);
                    } else {
                      stringResult = string(push.at1yY3);
                    }
                    push = items7.push;
                    intl16 = ModeratorActionRow;
                    string = { isDestructive: true, label: null, icon: null, onPress: null };
                    string[1] = stringResult;
                    string[2] = tmp2(tmp3[52]).ThreadMinusIcon;
                    string[3] = function onPress() {
                      let obj = user(showUserProfile[53]);
                      obj = {
                        isForumPost: stateFromStores3,
                        user,
                        onConfirm() {
                          callback({ action: "PRESS_REMOVE_FROM_THREAD" });
                          closure_1_1(closure_1_3[54]).removeMember(closure_2, id.id, "Context Menu");
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
            let tmp87 = null;
            if (0 !== items7.length) {
              obj7 = { title: null, style: null, titleStyle: null, children: null };
              tmp4Result = tmp4(tmp3[55]);
              const intl17 = tmp2(tmp3[26]).intl;
              obj7[0] = intl17.string(tmp2(tmp3[26]).t["EApw/R"]);
              const items8 = [user.style, tmp.cardContainer];
              obj7[1] = items8;
              obj7[2] = tmp.refreshCardTitle;
              const obj8 = { hasIcons: true, children: null };
              obj8[1] = items7;
              obj7[3] = jsx(tmp2(tmp3[56]).TableRowGroup, { hasIcons: true, children: null });
              tmp87 = <tmp4Result title={null} style={null} titleStyle={null}>{null}</tmp4Result>;
            }
            return tmp87;
          } else {
            if (user.id === currentUser.id) {
              const intl13 = tmp2(tmp3[26]).intl;
              let stringResult1 = intl13.string(tmp2(tmp3[26]).t["6vrfgt"]);
            } else {
              const intl12 = tmp2(tmp3[26]).intl;
              stringResult1 = intl12.string(tmp2(tmp3[26]).t["/jERiG"]);
            }
            const obj9 = { label: null, icon: null, isDestructive: true, onPress: null };
            obj9[0] = stringResult1;
            obj9[1] = tmp2(tmp3[47]).PhoneHangUpIcon;
            obj9[3] = function onPress() {
              trackUserProfileAction({ action: "DISCONNECT" });
              guildId(showUserProfile[34]).setChannel(stateFromStores.id, user.id, null);
            };
            items7.push(<ModeratorActionRow key="disconnect" label={null} icon={null} isDestructive onPress={null} />);
            const tmp73 = jsx;
            const tmp74 = ModeratorActionRow;
          }
        } else {
          const intl11 = tmp2(tmp3[26]).intl;
          const string4 = intl11.string;
          const t3 = tmp2(tmp3[26]).t;
          if (voiceState.deaf) {
            let string4Result = string4(t3.Gbw4Z9);
          } else {
            string4Result = string4(t3.hMA2GE);
          }
          const obj10 = { label: null, icon: null, onPress: null };
          obj10[0] = string4Result;
          if (voiceState.deaf) {
            let HeadphonesIcon = tmp2(tmp3[45]).HeadphonesSlashIcon;
          } else {
            HeadphonesIcon = tmp2(tmp3[46]).HeadphonesIcon;
          }
          obj10[1] = HeadphonesIcon;
          obj10[2] = function onPress() {
            trackUserProfileAction({ action: "DEAFEN" });
            guildId(showUserProfile[34]).setServerDeaf(stateFromStores.id, user.id, !voiceState.deaf);
          };
          items7.push(<ModeratorActionRow key="deafen" label={null} icon={null} onPress={null} />);
          const tmp69 = jsx;
          const tmp70 = ModeratorActionRow;
        }
      } else {
        const intl10 = tmp2(tmp3[26]).intl;
        const string3 = intl10.string;
        const t2 = tmp2(tmp3[26]).t;
        if (voiceState.mute) {
          let string3Result = string3(t2.wG9K2n);
        } else {
          string3Result = string3(t2.e9e9Ua);
        }
        const obj11 = { label: null, icon: null, onPress: null };
        obj11[0] = string3Result;
        if (voiceState.mute) {
          let MicrophoneIcon = tmp2(tmp3[43]).MicrophoneSlashIcon;
        } else {
          MicrophoneIcon = tmp2(tmp3[44]).MicrophoneIcon;
        }
        obj11[1] = MicrophoneIcon;
        obj11[2] = function onPress() {
          trackUserProfileAction({ action: "SERVER_MUTE" });
          guildId(showUserProfile[34]).setServerMute(stateFromStores.id, user.id, !voiceState.mute);
        };
        items7.push(<ModeratorActionRow key="server-mute" label={null} icon={null} onPress={null} />);
        const tmp64 = jsx;
        const tmp65 = ModeratorActionRow;
      }
      tmp50 = null != stateFromStores1 && !tmp9 && canModerateMembers && hasItem && hasItem1 && hasFlagResult;
      tmp54 = null != stateFromStores1 && !tmp9 && canModerateMembers && hasItem && hasItem1 && !hasFlagResult;
    } else {
      if (user.id === currentUser.id) {
        const intl2 = tmp2(tmp3[26]).intl;
        let stringResult2 = intl2.string(tmp2(tmp3[26]).t["6C6PJx"]);
      } else {
        let intl = tmp2(tmp3[26]).intl;
        stringResult2 = intl.string(tmp2(tmp3[26]).t.r23NoB);
      }
      const obj12 = { label: null, icon: null, onPress: null };
      obj12[0] = stringResult2;
      obj12[1] = tmp2(tmp3[27]).GroupArrowDownIcon;
      obj12[2] = function onPress() {
        trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
        user(showUserProfile[28]).moveUserToAudience(user, voiceChannel);
        const obj = user(showUserProfile[28]);
        guildId(showUserProfile[15]).hideActionSheet();
      };
      items7.push(<ModeratorActionRow key="remove-from-stage" label={null} icon={null} onPress={null} />);
      const tmp27 = jsx;
      const tmp28 = ModeratorActionRow;
    }
  }
};