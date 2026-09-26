// discord_app/modules/user_profile/native/UserProfileModeratorActions.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import FlagUtils from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01981_asyncRequireImpl.js";
import StageChannelPermissions from "../../stage_channels/StageChannelPermissions.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import TableRow from "../../../design/components/TableRow/native/TableRow.native.tsx";
import StageChannelActionCreators from "../../stage_channels/StageChannelActionCreators.tsx";
import GuildMemberUtils from "../../guild_member/GuildMemberUtils.tsx";
import GuildDisableCommunicationActionCreators from "../../guild_communication_disabled/GuildDisableCommunicationActionCreators.native.tsx";
import showKickConfirmModalDefault from "../../guild_moderation/native/showKickConfirmModal.tsx";
import showBanConfirmModalDefault from "../../guild_moderation/native/showBanConfirmModal.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import StageChannelRoleStore from "../../stage_channels/StageChannelRoleStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import VoiceStateStore from "../../../stores/VoiceStateStore.tsx";

require = fn;
function ModeratorActionRow(isDestructive) {
  ({ label, sublabel } = isDestructive);
  let str = "default";
  ({ icon, hint, disabled, onPress } = isDestructive);
  if (isDestructive.isDestructive) {
    str = "danger";
  }
  const obj = {
    label,
    subLabel: sublabel,
    icon: jsx(TableRow.TableRow.Icon, { IconComponent: icon, variant: str }),
    arrow: null != hint,
    variant: str,
    disabled,
    onPress,
    accessibilityLabel: null,
    accessibilityRole: "button",
  };
  let combined = label;
  if (null != sublabel) {
    const _HermesInternal = HermesInternal;
    combined = "" + label + ", " + sublabel;
  }
  obj.accessibilityLabel = combined;
  return jsx(TableRow.TableRow, {
    label,
    subLabel: sublabel,
    icon: jsx(TableRow.TableRow.Icon, { IconComponent: icon, variant: str }),
    arrow: null != hint,
    variant: str,
    disabled,
    onPress,
    accessibilityLabel: null,
    accessibilityRole: "button",
  });
}
const GUILD_VOCAL_CHANNELS_KEY = fn(4467).GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1074);
({ GuildFeatures: closure_12, Permissions: map1 } = Constants);
let GuildMemberFlags = fn(4455).GuildMemberFlags;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { cardContainer: { paddingBottom: 0 }, refreshCardTitle: { marginBottom: nativeDefault.space.PX_8 } };
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileModeratorActions.tsx");

export default function UserProfileModeratorActions(user) {
  user = user.user;
  ({ currentUser, guildId } = user);
  const channelId = user.channelId;
  const showUserProfile = user.showUserProfile;
  let stateFromStores1;
  canMoveMembers = undefined;
  let channels;
  GuildMemberFlags = undefined;
  const tmp = closure_16();
  const tmp2 = user;
  const tmp3 = showUserProfile;
  const trackUserProfileAction = user(showUserProfile[14]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const hideActionSheet = guildId(showUserProfile[15]).hideActionSheet;
  const tmp5 = guildId(showUserProfile[16])({ userId: user.id, guildId, includeNonDiscoverable: true });
  const voiceState = tmp5.voiceState;
  const voiceChannel = tmp5.voiceChannel;
  let obj = user(showUserProfile[14]);
  let obj2 = { userId: user.id, guildId, includeNonDiscoverable: true };
  const items = [stateFromStores1];
  const stateFromStores = user(showUserProfile[17]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  let obj3 = user(showUserProfile[17]);
  const tmp6 = stateFromStores1;
  const items1 = [stateFromStores];
  stateFromStores1 = user(showUserProfile[17]).useStateFromStores(items1, () =>
    GuildMemberStore.getMember(guildId, user.id),
  );
  closure_10 = tmp9;
  let obj4 = user(showUserProfile[17]);
  const items2 = [hideActionSheet];
  const stateFromStores2 = user(showUserProfile[17]).useStateFromStores(items2, () => {
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
  let obj5 = user(showUserProfile[17]);
  const items3 = [hideActionSheet];
  const stateFromStores3 = user(showUserProfile[17]).useStateFromStores(items3, () => {
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
  let obj6 = user(showUserProfile[17]);
  const canRemoveThreadMember = user(showUserProfile[18]).useCanRemoveThreadMember(channelId);
  const obj7 = user(showUserProfile[18]);
  const items4 = [closure_10];
  const stateFromStoresObject = user(showUserProfile[17]).useStateFromStoresObject(items4, () => {
    const obj = {
      canKickUser: GuildMemberUtils.canKickMember(user, stateFromStores),
      canBanUser: null,
      canChangeNick: null,
      canManageUserRoles: null,
      canManageGuildRoles: null,
      canManageGuild: null,
      canModerateMembers: null,
      canMoveMembers: null,
      canMuteMembers: null,
      canDeafenMembers: null,
      canModerateStage: null,
    };
    obj.canBanUser = GuildMemberUtils.canBanMember(user, stateFromStores);
    let canManageUserResult = null != stateFromStores;
    if (canManageUserResult) {
      canManageUserResult = PermissionStore.canManageUser(constants.MANAGE_NICKNAMES, user, stateFromStores);
    }
    obj.canChangeNick = canManageUserResult;
    let canManageUserResult1 = null != stateFromStores;
    if (canManageUserResult1) {
      canManageUserResult1 = PermissionStore.canManageUser(constants.MANAGE_ROLES, user, stateFromStores);
    }
    obj.canManageUserRoles = canManageUserResult1;
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = PermissionStore.can(constants.MANAGE_ROLES, stateFromStores);
    }
    obj.canManageGuildRoles = canResult;
    let canManageUserResult2 = null != stateFromStores;
    if (canManageUserResult2) {
      canManageUserResult2 = PermissionStore.canManageUser(constants.MANAGE_GUILD, user, stateFromStores);
    }
    obj.canManageGuild = canManageUserResult2;
    let canManageUserResult3 = null != stateFromStores;
    if (canManageUserResult3) {
      canManageUserResult3 = PermissionStore.canManageUser(constants.MODERATE_MEMBERS, user, stateFromStores);
    }
    obj.canModerateMembers = canManageUserResult3;
    obj.canMoveMembers = PermissionStore.can(constants.MOVE_MEMBERS, voiceChannel);
    obj.canMuteMembers = PermissionStore.can(constants.MUTE_MEMBERS, voiceChannel);
    obj.canDeafenMembers = PermissionStore.can(constants.DEAFEN_MEMBERS, voiceChannel);
    obj.canModerateStage = PermissionStore.can(
      StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS,
      voiceChannel,
    );
    return obj;
  });
  ({ canKickUser, canBanUser, canModerateMembers, canMoveMembers } = stateFromStoresObject);
  ({
    canModerateStage,
    canChangeNick,
    canManageUserRoles,
    canManageGuildRoles,
    canManageGuild,
    canMuteMembers,
    canDeafenMembers,
  } = stateFromStoresObject);
  const obj8 = user(showUserProfile[17]);
  const tmp13 = closure_10;
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
  const tmp15 = guildId(showUserProfile[21])(guildId, user.id);
  let id;
  const tmp16 = guildId(tmp3[22])(voiceChannel);
  if (voiceChannel != null) {
    id = voiceChannel.id;
  }
  const tmp4ResultResult = guildId(tmp3[23])(user.id, id);
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
      tmp24 = tmp4ResultResult === tmp2(tmp3[23]).RequestToSpeakStates.ON_STAGE;
    }
    tmp23 = tmp24;
  }
  const tmp4Result = guildId(tmp3[23]);
  const items5 = [trackUserProfileAction];
  const stateFromStores4 = tmp2(tmp3[17]).useStateFromStores(items5, () => {
    let id;
    if (voiceChannel != null) {
      id = voiceChannel.id;
    }
    return StageChannelRoleStore.getPermissionsForUser(user.id, id).speaker;
  });
  const tmp2Result = tmp2(tmp3[17]);
  const items6 = [voiceState, stateFromStores3, tmp6, tmp13];
  channels = tmp2(tmp3[17]).useStateFromStoresArray(items6, () => {
    if (canMoveMembers) {
      if (null != voiceChannel) {
        const found = GuildChannelStore.getChannels(guildId)[GUILD_VOCAL_CHANNELS_KEY].filter((channel) => {
          channel = channel.channel;
          if (channel.id === id.id) {
            return tmp;
          } else {
            let can = closure_10.can;
            let canResult = constants;
            if (closure_1_10) {
              canResult = can(canResult.CONNECT, channel);
              if (canResult) {
                can = stateFromStores3;
                canResult = !user(showUserProfile[24]).isChannelFull(channel, stateFromStores3, stateFromStores1);
                const obj4 = user(showUserProfile[24]);
              }
              let canResult1 = canResult;
            } else {
              canResult1 = can(canResult.MOVE_MEMBERS, channel);
              if (canResult1) {
                let canResult2 = closure_10.can(constants.CONNECT, channel);
                if (!canResult2) {
                  const obj2 = { permission: constants.CONNECT, user, context: channel };
                  canResult2 = channelId(showUserProfile[25]).can(obj2);
                  const obj = channelId(showUserProfile[25]);
                }
                canResult1 = canResult2;
              }
              if (canResult1) {
                canResult1 = !user(showUserProfile[24]).isChannelFull(channel, stateFromStores3, stateFromStores1);
                const obj3 = user(showUserProfile[24]);
              }
            }
          }
        });
        const mapped = found.map((channel) => channel.channel);
        const arr = GuildChannelStore.getChannels(guildId)[GUILD_VOCAL_CHANNELS_KEY];
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
            const tmp31 =
              tmp4ResultResult === tmp2(tmp3[23]).RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            const intl3 = tmp2(tmp3[26]).intl;
            const string = intl3.string;
            const t = tmp2(tmp3[26]).t;
            if (tmp31) {
              let stringResult = string(t.tHj7Tb);
            } else {
              stringResult = string(t.VUCWcO);
            }
            const obj9 = { icon: tmp2(tmp3[29]).MicrophoneArrowRightIcon, label: null, disabled: null, onPress: null };
            if (tmp9) {
              const intl4 = tmp2(tmp3[26]).intl;
              stringResult = intl4.string(tmp2(tmp3[26]).t["8Joh+p"]);
            }
            obj9.label = stringResult;
            obj9.disabled = tmp31;
            obj9.onPress = function onPress() {
              trackUserProfileAction({ action: "PRESS_INVITE_TO_SPEAK" });
              const obj = StageChannelActionCreators;
              if (closure_10) {
                const result = obj.audienceAckRequestToSpeak(voiceChannel, false);
              } else {
                obj.inviteUserToStage(voiceChannel, user.id);
              }
              ActionSheetActionCreatorsDefault.hideActionSheet();
            };
            items7.push(
              <ModeratorActionRow
                key="invite-to-speak"
                icon={tmp2(tmp3[29]).MicrophoneArrowRightIcon}
                label={null}
                disabled={null}
                onPress={null}
              />,
            );
          }
        }
      }
      let tmp36 = tmp20;
      if (tmp20) {
        tmp36 = canMoveMembers;
      }
      if (tmp36) {
        const obj10 = { label: null, hint: null, sublabel: null, icon: null, onPress: null };
        const intl5 = tmp2(tmp3[26]).intl;
        obj10.label = intl5.string(tmp2(tmp3[26]).t.FAplms);
        obj10.hint = tmp2(tmp3[30]).FormArrow;
        obj10.sublabel = tmp16;
        obj10.icon = tmp2(tmp3[31]).VoiceNormalIcon;
        obj10.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_MOVE_TO_CHANNEL" });
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { guild: stateFromStores, header: null, channels: null, onSelect: null, selectedChannel: null };
          const obj3 = { title: null };
          const intl = util.intl;
          obj3.title = intl.string(util.t.r2ptsz);
          obj2.header = obj3;
          obj2.channels = channels;
          obj2.onSelect = function onSelect(id) {
            return guildId(showUserProfile[34]).setChannel(id2.id, id.id, id.id);
          };
          obj.openLazy(asyncRequireImpl(10872, dependencyMap.paths), "ChannelPicker", obj2, "stack");
        };
        items7.push(
          <ModeratorActionRow
            key="move-to-channel"
            label={null}
            hint={null}
            sublabel={null}
            icon={null}
            onPress={null}
          />,
        );
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
        const obj11 = { label: null, icon: null, onPress: null };
        const intl6 = tmp2(tmp3[26]).intl;
        obj11.label = intl6.string(tmp2(tmp3[26]).t.HxrBOZ);
        obj11.icon = tmp2(tmp3[35]).SettingsIcon;
        obj11.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_MANAGE_USER" });
          hideActionSheet();
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11314, dependencyMap.paths), {
            userId: user.id,
            guildId: stateFromStores.id,
            onClose() {
              guildId(showUserProfile[36]).pop();
              dependencyMap();
            },
            onRemove() {
              guildId(5039).pop();
            },
          });
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
        const tmp2Result5 = tmp2(tmp3[38]);
      }
      if (tmp50) {
        const obj12 = { label: null, icon: null, onPress: null };
        const intl7 = tmp2(tmp3[26]).intl;
        obj12.label = intl7.string(tmp2(tmp3[26]).t.NbhSI7);
        obj12.icon = tmp2(tmp3[39]).StampIcon;
        obj12.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_UNVERIFY_USER" });
          const obj = GuildActionCreatorsDefault;
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(
            stateFromStores.id,
            user.id,
            FlagUtils.setFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION, false),
          );
        };
        items7.push(<ModeratorActionRow key="unverify" label={null} icon={null} onPress={null} />);
      }
      if (tmp54) {
        const obj13 = { label: null, icon: null, onPress: null };
        const intl8 = tmp2(tmp3[26]).intl;
        obj13.label = intl8.string(tmp2(tmp3[26]).t["6QlTeK"]);
        obj13.icon = tmp2(tmp3[39]).StampIcon;
        obj13.onPress = function onPress() {
          trackUserProfileAction({ action: "PRESS_VERIFY_USER" });
          const obj = GuildActionCreatorsDefault;
          let num = stateFromStores1.flags;
          if (num == null) {
            num = 0;
          }
          obj.setMemberFlags(
            stateFromStores.id,
            user.id,
            FlagUtils.setFlag(num, GuildMemberFlags.BYPASSES_VERIFICATION, true),
          );
        };
        items7.push(<ModeratorActionRow key="verify" label={null} icon={null} onPress={null} />);
      }
      if (null != stateFromStores1) {
        if (tmp15) {
          let result = tmp2(tmp3[40]).isMemberCommunicationDisabled(stateFromStores1);
          GuildMemberFlags = result;
          const intl9 = tmp2(tmp3[26]).intl;
          const string2 = intl9.string;
          let t1 = tmp2(tmp3[26]).t;
          if (result) {
            let string2Result = string2(t1.qXtNtS);
          } else {
            string2Result = string2(t1.xpsADY);
          }
          t1 = {
            label: string2Result,
            icon: tmp2(tmp3[41]).ClockWarningIcon,
            onPress() {
              let str = "PRESS_TIME_OUT_USER";
              if (c14) {
                str = "PRESS_REMOVE_TIME_OUT";
              }
              trackUserProfileAction({ action: str });
              hideActionSheet();
              const obj = GuildDisableCommunicationActionCreators;
              if (c14) {
                const obj5 = { guildId: null, userId: null, cancelButtonCallback: null };
                ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores1);
                obj5.cancelButtonCallback = showUserProfile;
                const result = obj.openEnableCommunication(obj5);
              } else {
                const obj6 = { guildId: null, userId: null, cancelButtonCallback: null };
                ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores1);
                obj6.cancelButtonCallback = showUserProfile;
                const result1 = obj.openDisableCommunication(obj6);
              }
            },
          };
          items7.push(
            <ModeratorActionRow
              key="time-out"
              label={string2Result}
              icon={tmp2(tmp3[41]).ClockWarningIcon}
              onPress={function onPress() {
                let str = "PRESS_TIME_OUT_USER";
                if (c14) {
                  str = "PRESS_REMOVE_TIME_OUT";
                }
                trackUserProfileAction({ action: str });
                hideActionSheet();
                const obj = GuildDisableCommunicationActionCreators;
                if (c14) {
                  const obj5 = { guildId: null, userId: null, cancelButtonCallback: null };
                  ({ guildId: obj3.guildId, userId: obj3.userId } = stateFromStores1);
                  obj5.cancelButtonCallback = showUserProfile;
                  const result = obj.openEnableCommunication(obj5);
                } else {
                  const obj6 = { guildId: null, userId: null, cancelButtonCallback: null };
                  ({ guildId: obj2.guildId, userId: obj2.userId } = stateFromStores1);
                  obj6.cancelButtonCallback = showUserProfile;
                  const result1 = obj.openDisableCommunication(obj6);
                }
              }}
            />,
          );
          const tmp2Result6 = tmp2(tmp3[40]);
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
              const obj14 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl14 = tmp2(tmp3[26]).intl;
              obj14.label = intl14.string(tmp2(tmp3[26]).t["3glT6Z"]);
              obj14.icon = tmp2(tmp3[48]).UserMinusIcon;
              obj14.onPress = function onPress() {
                trackUserProfileAction({ action: "PRESS_KICK_USER" });
                hideActionSheet();
                showKickConfirmModalDefault({
                  guildId: stateFromStores.id,
                  userId: user.id,
                  cancelButtonCallback: showUserProfile,
                });
              };
              items7.push(<ModeratorActionRow key="kick" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (canBanUser) {
              const obj15 = { label: null, icon: null, isDestructive: true, onPress: null };
              const intl15 = tmp2(tmp3[26]).intl;
              obj15.label = intl15.string(tmp2(tmp3[26]).t["5MBJ5M"]);
              obj15.icon = tmp2(tmp3[50]).HammerIcon;
              obj15.onPress = function onPress() {
                trackUserProfileAction({ action: "PRESS_BAN_USER" });
                showBanConfirmModalDefault({
                  guildId: stateFromStores.id,
                  userId: user.id,
                  cancelButtonCallback: showUserProfile,
                });
              };
              items7.push(<ModeratorActionRow key="ban" label={null} icon={null} isDestructive onPress={null} />);
            }
            if (stateFromStores2) {
              if (canRemoveThreadMember) {
                if (!tmp9) {
                  if (null != channelId) {
                    let intl16 = tmp2(tmp3[26]).intl;
                    let string1 = intl16.string;
                    let push = tmp2(tmp3[26]).t;
                    if (stateFromStores3) {
                      let string1Result = string1(push["6+b8ae"]);
                    } else {
                      string1Result = string1(push.at1yY3);
                    }
                    push = items7.push;
                    intl16 = ModeratorActionRow;
                    string1 = {
                      isDestructive: true,
                      label: string1Result,
                      icon: tmp2(tmp3[52]).ThreadMinusIcon,
                      onPress() {
                        UserProfileAlertUtils.confirmThreadRemove({
                          isForumPost: stateFromStores3,
                          user,
                          onConfirm() {
                            trackUserProfileAction({ action: "PRESS_REMOVE_FROM_THREAD" });
                            guildId(showUserProfile[54]).removeMember(channelId, id.id, "Context Menu");
                            hideActionSheet();
                          },
                        });
                      },
                    };
                    push(
                      <ModeratorActionRow
                        key="remove-from-thread"
                        isDestructive
                        label={string1Result}
                        icon={tmp2(tmp3[52]).ThreadMinusIcon}
                        onPress={function onPress() {
                          UserProfileAlertUtils.confirmThreadRemove({
                            isForumPost: stateFromStores3,
                            user,
                            onConfirm() {
                              trackUserProfileAction({ action: "PRESS_REMOVE_FROM_THREAD" });
                              guildId(showUserProfile[54]).removeMember(channelId, id.id, "Context Menu");
                              hideActionSheet();
                            },
                          });
                        }}
                      />,
                    );
                  }
                }
              }
            }
            let tmp87 = null;
            if (0 !== items7.length) {
              const obj16 = { title: null, style: null, titleStyle: null, children: null };
              const intl17 = tmp2(tmp3[26]).intl;
              obj16.title = intl17.string(tmp2(tmp3[26]).t["EApw/R"]);
              const items8 = [user.style, tmp.cardContainer];
              obj16.style = items8;
              obj16.titleStyle = tmp.refreshCardTitle;
              const obj17 = { hasIcons: true, children: items7 };
              obj16.children = jsx(tmp2(tmp3[56]).TableRowGroup, { hasIcons: true, children: items7 });
              tmp87 = jsx(guildId(tmp3[55]), { title: null, style: null, titleStyle: null, children: null });
              const tmp4Result2 = guildId(tmp3[55]);
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
            const obj18 = {
              label: stringResult1,
              icon: tmp2(tmp3[47]).PhoneHangUpIcon,
              isDestructive: true,
              onPress() {
                trackUserProfileAction({ action: "DISCONNECT" });
                GuildActionCreatorsDefault.setChannel(stateFromStores.id, user.id, null);
              },
            };
            items7.push(
              <ModeratorActionRow
                key="disconnect"
                label={stringResult1}
                icon={tmp2(tmp3[47]).PhoneHangUpIcon}
                isDestructive
                onPress={function onPress() {
                  trackUserProfileAction({ action: "DISCONNECT" });
                  GuildActionCreatorsDefault.setChannel(stateFromStores.id, user.id, null);
                }}
              />,
            );
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
          const obj19 = { label: string4Result, icon: null, onPress: null };
          if (voiceState.deaf) {
            let HeadphonesIcon = tmp2(tmp3[45]).HeadphonesSlashIcon;
          } else {
            HeadphonesIcon = tmp2(tmp3[46]).HeadphonesIcon;
          }
          obj19.icon = HeadphonesIcon;
          obj19.onPress = function onPress() {
            trackUserProfileAction({ action: "DEAFEN" });
            GuildActionCreatorsDefault.setServerDeaf(stateFromStores.id, user.id, !voiceState.deaf);
          };
          items7.push(<ModeratorActionRow key="deafen" label={string4Result} icon={null} onPress={null} />);
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
        const obj20 = { label: string3Result, icon: null, onPress: null };
        if (voiceState.mute) {
          let MicrophoneIcon = tmp2(tmp3[43]).MicrophoneSlashIcon;
        } else {
          MicrophoneIcon = tmp2(tmp3[44]).MicrophoneIcon;
        }
        obj20.icon = MicrophoneIcon;
        obj20.onPress = function onPress() {
          trackUserProfileAction({ action: "SERVER_MUTE" });
          GuildActionCreatorsDefault.setServerMute(stateFromStores.id, user.id, !voiceState.mute);
        };
        items7.push(<ModeratorActionRow key="server-mute" label={string3Result} icon={null} onPress={null} />);
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
      const obj21 = {
        label: stringResult2,
        icon: tmp2(tmp3[27]).GroupArrowDownIcon,
        onPress() {
          trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
          StageChannelActionCreators.moveUserToAudience(user, voiceChannel);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      };
      items7.push(
        <ModeratorActionRow
          key="remove-from-stage"
          label={stringResult2}
          icon={tmp2(tmp3[27]).GroupArrowDownIcon}
          onPress={function onPress() {
            trackUserProfileAction({ action: "PRESS_REMOVE_FROM_STAGE" });
            StageChannelActionCreators.moveUserToAudience(user, voiceChannel);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          }}
        />,
      );
    }
  }
  const tmp2Result4 = tmp2(tmp3[17]);
}
