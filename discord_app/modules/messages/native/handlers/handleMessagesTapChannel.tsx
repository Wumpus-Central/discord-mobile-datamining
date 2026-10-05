// discord_app/modules/messages/native/handlers/handleMessagesTapChannel.tsx
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import GuildRecord from "../../../../records/GuildRecord.tsx";
import GuildOnboardingConstants from "../../../guild_onboarding/native/GuildOnboardingConstants.tsx";
import GuildOnboardingPromptsConstants from "../../../guild_onboarding/GuildOnboardingPromptsConstants.tsx";
import GuildDiscoveryUtilsAll from "../../../../utils/GuildDiscoveryUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_12;
let closure_14;
let closure_15;
let map1;
function maybeStartLurking() {
  return obj(...arguments);
}
let obj = function _maybeStartLurking() {
  obj = _asyncToGenerator(async (arg0, arg1, channelId, messageId) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c4 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c6 = 1;
              c5 = 2;
              c4 = 1;
              const obj5 = { channelId, messageId };
              const obj6 = { value: obj2.startLurking(closure_1, {}, obj5), done: false };
              obj2 = GuildDiscoveryUtilsAll;
              return obj6;
            }
          } else if (1 === tmp3) {
            c6 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c4 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            c4 = 3;
            return { value: true, done: true };
          }
          c4 = 3;
          return { value: false, done: true };
        } catch (tmp7) {
          if (0 === c6) {
            c4 = 3;
            throw tmp7;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleMessagesTapChannel() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c2;
    let c3;
    let navigationReplace;
    let v4;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let channelId;
        let guildId;
        let messageId;
        let channel;
        let guild;
        let closure_9;
        let roles;
        let role;
        c4 = 2;
        if (0 === v4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            navigationReplace = undefined;
            c2 = undefined;
            v4 = undefined;
            ({ data: c0, navigationReplace } = closure_0);
            if (navigationReplace === undefined) {
              navigationReplace = false;
            }
            ({ onBeforeNavigate: c2, dismissKeyboard: c3 } = closure_0);
            channelId = undefined;
            guildId = undefined;
            messageId = undefined;
            channel = undefined;
            guild = undefined;
            closure_9 = undefined;
            roles = undefined;
            role = undefined;
            v4 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === v4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              channelId = c0.channelId;
              guildId = c0.guildId;
              messageId = c0.messageId;
              channel = null;
              if (null != channelId) {
                channel = closure_130_7.getChannel(channelId);
              }
              guild = closure_130_10.getGuild(guildId);
              const obj6 = { guildId, channelId, messageId };
              const obj5 = closure_130_1(closure_130_3[13]);
              const result = obj5.trackDiscordLinkClicked(obj6);
              if (null != guildId) {
                if (null != channelId) {
                  const obj7 = closure_130_0(closure_130_3[14]);
                  if (obj7.isStaticRouteIconType(channelId)) {
                    if (null == guild) {
                      c4 = 3;
                      return { value: "IconComponent", done: null };
                    } else if ("browse" === channelId) {
                      const features3 = guild.features;
                      if (features3.has(closure_130_13.COMMUNITY)) {
                        const obj8 = { guildId, defaultTab: closure_130_17.BROWSE };
                        const obj26 = closure_130_1(closure_130_3[15]);
                        obj26.pushLazy(
                          closure_130_0(closure_130_3[17])(closure_130_3[16], closure_130_3.paths),
                          obj8,
                          closure_130_18,
                        );
                      } else {
                        c4 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } else if ("customize" === channelId) {
                      const features2 = guild.features;
                      if (features2.has(closure_130_13.COMMUNITY)) {
                        const obj10 = { guildId, defaultTab: closure_130_17.CUSTOMIZE };
                        const obj24 = closure_130_1(closure_130_3[15]);
                        obj24.pushLazy(
                          closure_130_0(closure_130_3[17])(closure_130_3[16], closure_130_3.paths),
                          obj10,
                          closure_130_18,
                        );
                      } else {
                        c4 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      if ("home" !== channelId) {
                        if ("guide" !== channelId) {
                          if ("linked-roles" === channelId) {
                            closure_9 = messageId;
                            if (null != closure_9) {
                              roles = closure_130_8.getSelfMember(guildId);
                              if (null == roles) {
                                c4 = 3;
                                return { value: "IconComponent", done: null };
                              } else {
                                role = closure_130_9.getRole(guildId, closure_9);
                                if (null != role) {
                                  roles = roles.roles;
                                  if (!roles.includes(role.id)) {
                                    const openLazy = closure_130_1(closure_130_3[19]).openLazy;
                                    const _HermesInternal = HermesInternal;
                                    const tmp197 = closure_130_1(closure_130_3[19]);
                                    const obj11 = { role, guildId };
                                    const tmp202 = closure_130_0(closure_130_3[17])(
                                      closure_130_3[20],
                                      closure_130_3.paths,
                                    );
                                    openLazy(
                                      tmp202,
                                      "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id,
                                      obj11,
                                    );
                                  }
                                }
                                const obj13 = { guildId };
                                const obj21 = closure_130_1(closure_130_3[15]);
                                obj21.pushLazy(
                                  closure_130_0(closure_130_3[17])(closure_130_3[21], closure_130_3.paths),
                                  obj13,
                                );
                              }
                            } else {
                              const obj15 = { guildId };
                              const obj18 = closure_130_1(closure_130_3[15]);
                              obj18.pushLazy(
                                closure_130_0(closure_130_3[17])(closure_130_3[21], closure_130_3.paths),
                                obj15,
                              );
                            }
                          } else {
                            const obj17 = closure_130_0(closure_130_3[22]);
                            obj17.assertNever(channelId);
                          }
                        }
                      }
                      const features = guild.features;
                      if (features.has(closure_130_13.COMMUNITY)) {
                        const obj16 = { navigationReplace, openChannel: true };
                        const tmp225 = closure_130_1(closure_130_3[18]);
                        tmp225(closure_130_15.CHANNEL(guildId, closure_130_16.GUILD_HOME), obj16);
                      } else {
                        c4 = 3;
                        return { value: "IconComponent", done: null };
                      }
                    }
                  }
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              if (null != messageId) {
                if (null != channel) {
                  if (!channel.isPrivate()) {
                    v4 = 2;
                    c4 = 1;
                    const obj19 = {
                      value: closure_130_19(guild, channel.guild_id, channel.id, messageId),
                      done: false,
                    };
                    return obj19;
                  }
                }
              }
              if (null != channel) {
                if (null != guildId) {
                  if (channel.isPrivate()) {
                    if (closure_130_5(channel.type)) {
                      const obj12 = closure_130_0(closure_130_3[23]);
                      if (obj12.canViewChannel(channel)) {
                        if (channel.type === closure_130_12.GUILD_STAGE_VOICE) {
                          if (!closure_130_11.can(closure_130_14.CONNECT, channel)) {
                            c4 = 3;
                            return { value: "IconComponent", done: null };
                          }
                        }
                        if (v4 != null) {
                          v4();
                        }
                        if (c2 != null) {
                          c2();
                        }
                        const obj14 = closure_130_0(closure_130_3[24]);
                        obj14.openChannelCallModal(channel);
                      }
                    }
                    if (c2 != null) {
                      c2();
                    }
                    const obj20 = { navigationReplace, openChannel: true };
                    const tmp119 = closure_130_1(closure_130_3[18]);
                    tmp119(closure_130_15.CHANNEL(guildId, channel.id), obj20);
                  } else {
                    v4 = 3;
                    c4 = 1;
                    const obj22 = { value: closure_130_19(guild, guildId, channel.id, messageId), done: false };
                    return obj22;
                  }
                }
              }
              if (null != channelId) {
                if (null != guildId) {
                  v4 = 4;
                  c4 = 1;
                  const obj23 = { value: closure_130_19(guild, guildId, channelId, messageId), done: false };
                  return obj23;
                }
              }
              if (null != channel) {
                if (channel.isPrivate()) {
                  if (v4 != null) {
                    v4();
                  }
                  if (c2 != null) {
                    c2();
                  }
                  const obj9 = closure_130_1(closure_130_3[25]);
                  const voiceChannel = obj9.selectVoiceChannel(channelId);
                }
              }
              const tmp61 = null != channelId && null == guildId;
              if (tmp61) {
                if (c2 != null) {
                  c2();
                }
                const obj25 = { navigationReplace, openChannel: true };
                const tmp70 = closure_130_1(closure_130_3[18]);
                tmp70(closure_130_15.CHANNEL(guildId, channelId, messageId), obj25);
              }
            }
          } else if (2 === v4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj27 = { value, done: true };
              return obj27;
            } else if (value) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (3 === v4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj28 = { value, done: true };
              return obj28;
            } else if (value) {
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj29 = { value, done: true };
            return obj29;
          } else if (value) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            if (c2 != null) {
              tmp6();
            }
            obj = { navigationReplace, openChannel: true };
            const tmp13 = closure_130_1(closure_130_3[18]);
            tmp13(closure_130_15.CHANNEL(guildId, channelId, messageId), obj);
          }
          if (c2 != null) {
            tmp155();
          }
          const obj30 = { navigationReplace, openChannel: true };
          const tmp162 = closure_130_1(closure_130_3[18]);
          tmp162(closure_130_15.CHANNEL(channel.guild_id, channel.id, messageId), obj30);
        }
      } catch (tmp261) {
        c4 = 3;
        throw tmp261;
      }
    }
  });
  return obj(...arguments);
};
const isGuildVocalChannelType = ChannelRecord.isGuildVocalChannelType;
const isGuildLurker = GuildRecord.isGuildLurker;
({ ChannelTypes: closure_12, GuildFeatures: map1, Permissions: closure_14, Routes: closure_15 } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const GuildOnboardingTab = GuildOnboardingPromptsConstants.GuildOnboardingTab;
let closure_18 = GuildOnboardingConstants.CHANNELS_AND_ROLES_MODAL_KEY;
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel() {
  return obj(...arguments);
};
