// discord_app/modules/messages/native/handlers/handleMessagesTapChannel.tsx
import GuildDiscoveryUtilsAll from "../../../../utils/GuildDiscoveryUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = fn;
function maybeStartLurking() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _maybeStartLurking(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c5 = 0;
  c4 = 0;
  c6 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 1;
            let obj1 = GuildDiscoveryUtilsAll;
            obj1 = { channelId, messageId };
            c5 = 2;
            c4 = 1;
            const obj2 = { value: obj1.startLurking(closure_1, {}, obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp6) {
          c6 = 0;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
          c4 = 3;
          return { value: true, done: true };
        }
        c4 = 3;
      } catch (tmp10) {
        if (tmp3 === c6) {
          c4 = tmp2;
          throw tmp10;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_21 = async function _handleMessagesTapChannel(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ data: closure_129_0, navigationReplace } = closure_0);
          if (navigationReplace === undefined) {
            navigationReplace = false;
          }
          closure_129_1 = navigationReplace;
          ({ onBeforeNavigate: closure_129_2, dismissKeyboard: closure_129_3 } = closure_0);
          let channelId;
          let guildId;
          let messageId;
          closure_129_7 = undefined;
          let guild;
          closure_129_9 = undefined;
          let selfMember;
          let role;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            channelId = closure_129_0.channelId;
            guildId = closure_129_0.guildId;
            messageId = closure_129_0.messageId;
            let channel = null;
            if (null != channelId) {
              channel = closure_130_7.getChannel(channelId);
            }
            closure_129_7 = channel;
            guild = closure_130_10.getGuild(guildId);
            let obj4 = closure_130_1(closure_130_3[13]);
            const obj2 = { guildId, channelId, messageId };
            const result = obj4.trackDiscordLinkClicked(obj2);
            if (null != guildId) {
              if (null != channelId) {
                let obj6 = closure_130_0(closure_130_3[14]);
                if (obj6.isStaticRouteIconType(channelId)) {
                  if (null == guild) {
                    c4 = 3;
                    return { value: "HermesInternal", done: null };
                  } else if ("browse" === channelId) {
                    const features3 = guild.features;
                    if (features3.has(closure_130_13.COMMUNITY)) {
                      const obj3 = { guildId, defaultTab: closure_130_17.BROWSE };
                      closure_130_1(closure_130_3[15]).pushLazy(
                        closure_130_0(closure_130_3[17])(closure_130_3[16], closure_130_3.paths),
                        obj3,
                        closure_130_18,
                      );
                      const obj27 = closure_130_1(closure_130_3[15]);
                    } else {
                      c4 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } else if ("customize" === tmp273) {
                    const features2 = guild.features;
                    if (features2.has(closure_130_13.COMMUNITY)) {
                      obj4 = { guildId, defaultTab: closure_130_17.CUSTOMIZE };
                      closure_130_1(closure_130_3[15]).pushLazy(
                        closure_130_0(closure_130_3[17])(closure_130_3[16], closure_130_3.paths),
                        obj4,
                        closure_130_18,
                      );
                      const obj25 = closure_130_1(closure_130_3[15]);
                    } else {
                      c4 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } else {
                    if ("home" !== tmp273) {
                      if ("guide" !== tmp273) {
                        if ("linked-roles" === tmp273) {
                          closure_129_9 = messageId;
                          if (null != closure_129_9) {
                            selfMember = closure_130_8.getSelfMember(guildId);
                            if (null == selfMember) {
                              c4 = 3;
                              return { value: "HermesInternal", done: null };
                            } else {
                              role = closure_130_9.getRole(guildId, closure_129_9);
                              if (null != role) {
                                const roles = selfMember.roles;
                                if (!roles.includes(role.id)) {
                                  const _HermesInternal = HermesInternal;
                                  const obj20 = closure_130_1(closure_130_3[19]);
                                  const obj5 = { role, guildId };
                                  obj20.openLazy(
                                    closure_130_0(closure_130_3[17])(closure_130_3[20], closure_130_3.paths),
                                    "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id,
                                    obj5,
                                  );
                                  const tmp202 = closure_130_0(closure_130_3[17])(
                                    closure_130_3[20],
                                    closure_130_3.paths,
                                  );
                                }
                              }
                              obj6 = { guildId };
                              closure_130_1(closure_130_3[15]).pushLazy(
                                closure_130_0(closure_130_3[17])(closure_130_3[21], closure_130_3.paths),
                                obj6,
                              );
                              const obj22 = closure_130_1(closure_130_3[15]);
                            }
                          } else {
                            let obj17 = closure_130_1(closure_130_3[15]);
                            const obj7 = { guildId };
                            obj17.pushLazy(
                              closure_130_0(closure_130_3[17])(closure_130_3[21], closure_130_3.paths),
                              obj7,
                            );
                          }
                        } else {
                          let obj16 = closure_130_0(closure_130_3[22]);
                          obj16.assertNever(channelId);
                        }
                      }
                    }
                    const features = guild.features;
                    if (features.has(closure_130_13.COMMUNITY)) {
                      let obj8 = { navigationReplace: closure_129_1, openChannel: true };
                      closure_130_1(closure_130_3[18])(
                        closure_130_15.CHANNEL(guildId, closure_130_16.GUILD_HOME),
                        obj8,
                      );
                      const tmp225 = closure_130_1(closure_130_3[18]);
                    } else {
                      c4 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  }
                }
                c4 = 3;
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            if (null != messageId) {
              if (null != closure_129_7) {
                if (!closure_129_7.isPrivate()) {
                  c3 = 2;
                  c4 = 1;
                  const obj9 = {
                    value: closure_130_19(guild, closure_129_7.guild_id, closure_129_7.id, messageId),
                    done: false,
                  };
                  return obj9;
                }
              }
            }
            if (null != closure_129_7) {
              if (null != guildId) {
                if (closure_129_7.isPrivate()) {
                  if (closure_130_5(closure_129_7.type)) {
                    let obj11 = closure_130_0(closure_130_3[23]);
                    if (obj11.canViewChannel(closure_129_7)) {
                      if (closure_129_7.type === closure_130_12.GUILD_STAGE_VOICE) {
                        if (!closure_130_11.can(closure_130_14.CONNECT, closure_129_7)) {
                          c4 = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      }
                      if (closure_129_3 != null) {
                        closure_129_3();
                      }
                      if (closure_129_2 != null) {
                        closure_129_2();
                      }
                      let obj13 = closure_130_0(closure_130_3[24]);
                      obj13.openChannelCallModal(closure_129_7);
                    }
                  }
                  if (closure_129_2 != null) {
                    closure_129_2();
                  }
                  const obj10 = { navigationReplace: closure_129_1, openChannel: true };
                  closure_130_1(closure_130_3[18])(closure_130_15.CHANNEL(guildId, closure_129_7.id), obj10);
                  const tmp120 = closure_130_1(closure_130_3[18]);
                } else {
                  c3 = 3;
                  c4 = 1;
                  obj11 = { value: closure_130_19(guild, guildId, closure_129_7.id, messageId), done: false };
                  return obj11;
                }
              }
            }
            if (null != channelId) {
              if (null != guildId) {
                c3 = 4;
                c4 = 1;
                const obj12 = { value: closure_130_19(guild, guildId, channelId, messageId), done: false };
                return obj12;
              }
            }
            if (null != closure_129_7) {
              if (closure_129_7.isPrivate()) {
                if (closure_129_3 != null) {
                  closure_129_3();
                }
                if (closure_129_2 != null) {
                  closure_129_2();
                }
                obj8 = closure_130_1(closure_130_3[25]);
                const voiceChannel = obj8.selectVoiceChannel(channelId);
              }
            }
            let tmp62 = null != channelId;
            if (tmp62) {
              tmp62 = null == guildId;
            }
            if (tmp62) {
              if (closure_129_2 != null) {
                closure_129_2();
              }
              obj13 = { navigationReplace: closure_129_1, openChannel: true };
              closure_130_1(closure_130_3[18])(closure_130_15.CHANNEL(guildId, channelId, messageId), obj13);
              const tmp71 = closure_130_1(closure_130_3[18]);
            }
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else if (value) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else if (value) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj16 = { value, done: true };
          return obj16;
        } else if (!value) {
          if (closure_129_2 != null) {
            tmp7();
          }
          obj = { navigationReplace: closure_129_1, openChannel: true };
          closure_130_1(closure_130_3[18])(closure_130_15.CHANNEL(guildId, channelId, messageId), obj);
          const tmp14 = closure_130_1(closure_130_3[18]);
        }
        if (closure_129_2 != null) {
          tmp156();
        }
        obj17 = { navigationReplace: closure_129_1, openChannel: true };
        closure_130_1(closure_130_3[18])(
          closure_130_15.CHANNEL(closure_129_7.guild_id, closure_129_7.id, messageId),
          obj17,
        );
        const tmp163 = closure_130_1(closure_130_3[18]);
      }
    } catch (tmp261) {
      c4 = tmp;
      throw tmp261;
    }
  }
};
const isGuildVocalChannelType = fn(1961).isGuildVocalChannelType;
const isGuildLurker = fn(1975).isGuildLurker;
const Constants = fn(1074);
({ ChannelTypes: closure_12, GuildFeatures: map1, Permissions: closure_14, Routes: closure_15 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const GuildOnboardingTab = fn(7101).GuildOnboardingTab;
let closure_18 = fn(7097).CHANNELS_AND_ROLES_MODAL_KEY;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
