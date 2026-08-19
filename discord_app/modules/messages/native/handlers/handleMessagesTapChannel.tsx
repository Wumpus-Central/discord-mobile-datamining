// === Module 10740: maybeStartLurking ===

// Module 10740 (maybeStartLurking)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { isGuildVocalChannelType } from "createChannelRecord" /* 1395 */;
import { isGuildLurker } from "GuildNSFWContentLevel" /* 1434 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import ME from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import { GuildOnboardingTab } from "serverPromptToClientPrompt" /* 5286 */;
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_18 } from "GUILD_ONBOARDING_MODAL_KEY" /* 6785 */;

const require = fn;
function maybeStartLurking() {
  const self = this;
  const apply = _maybeStartLurking.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeStartLurking() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c5 = 0;
    c4 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let v0 = 1;
              obj1 = callback(table[12]);
              obj1 = { channelId: null, messageId: null };
              obj1[0] = callback;
              obj1[1] = table;
              c5 = 2;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.startLurking(closure_1, {}, obj1);
              return obj2;
            }
          } else if (1 === tmp6) {
            v0 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 0;
            c4 = 3;
            return { value: true, done: true };
          }
          c4 = 3;
        } catch (tmp10) {
          if (tmp3 === v0) {
            c4 = tmp2;
            throw tmp10;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleMessagesTapChannel() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (channelId === 2) {
        channelId = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          channelId = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              channelId = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channelId = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback = tmp5;
              navigationReplace = tmp2;
              let lib;
              navigationReplace = undefined;
              callback = undefined;
              v0 = undefined;
              ({ data: c0, navigationReplace } = lib);
              if (navigationReplace === undefined) {
                navigationReplace = false;
              }
              ({ onBeforeNavigate: c2, dismissKeyboard: c3 } = lib);
              channelId = undefined;
              let guildId;
              let messageId;
              let channel;
              let selfMember;
              let role;
              let guild;
              let role2;
              v0 = 1;
              channelId = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                channelId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                channelId = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                channelId = lib.channelId;
                guildId = lib.guildId;
                messageId = lib.messageId;
                channel = null;
                if (null != channelId) {
                  channel = channel.getChannel(channelId);
                }
                selfMember = guild.getGuild(guildId);
                let obj4 = navigationReplace(v0[13]);
                const obj2 = { guildId: null, channelId: null, messageId: null };
                obj2[0] = guildId;
                obj2[1] = channelId;
                obj2[2] = messageId;
                const result = obj4.trackDiscordLinkClicked(obj2);
                if (null != guildId) {
                  if (null != channelId) {
                    let obj6 = lib(v0[14]);
                    if (obj6.isStaticRouteIconType(channelId)) {
                      if (null == selfMember) {
                        channelId = 3;
                        return { value: "HermesInternal", done: "HermesInternal" };
                      } else if ("browse" === channelId) {
                        const features3 = selfMember.features;
                        if (features3.has(constants2.COMMUNITY)) {
                          const obj3 = { guildId: null, defaultTab: null };
                          obj3[0] = guildId;
                          obj3[1] = constants5.BROWSE;
                          navigationReplace(v0[15]).pushLazy(lib(v0[17])(v0[16], v0.paths), obj3, closure_18);
                          const obj27 = navigationReplace(v0[15]);
                        } else {
                          channelId = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      } else if ("customize" === tmp274) {
                        const features2 = selfMember.features;
                        if (features2.has(constants2.COMMUNITY)) {
                          obj4 = { guildId: null, defaultTab: null };
                          obj4[0] = guildId;
                          obj4[1] = constants5.CUSTOMIZE;
                          navigationReplace(v0[15]).pushLazy(lib(v0[17])(v0[16], v0.paths), obj4, closure_18);
                          const obj25 = navigationReplace(v0[15]);
                        } else {
                          channelId = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      } else {
                        if ("home" !== tmp274) {
                          if ("guide" !== tmp274) {
                            if ("linked-roles" === tmp274) {
                              role = messageId;
                              if (null != role) {
                                guild = selfMember.getSelfMember(guildId);
                                if (null == guild) {
                                  channelId = 3;
                                  return { value: "HermesInternal", done: "HermesInternal" };
                                } else {
                                  role2 = role.getRole(guildId, role);
                                  if (null != role2) {
                                    const roles = guild.roles;
                                    if (!roles.includes(role2.id)) {
                                      const _HermesInternal = HermesInternal;
                                      const obj20 = navigationReplace(v0[19]);
                                      const obj5 = { role: null, guildId: null };
                                      obj5[0] = role2;
                                      obj5[1] = guildId;
                                      obj20.openLazy(lib(v0[17])(v0[20], v0.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + role2.id, obj5);
                                      const tmp202 = lib(v0[17])(v0[20], v0.paths);
                                    }
                                  }
                                  obj6 = { guildId: null };
                                  obj6[0] = guildId;
                                  navigationReplace(v0[15]).pushLazy(lib(v0[17])(v0[21], v0.paths), obj6);
                                  const obj22 = navigationReplace(v0[15]);
                                }
                              } else {
                                let obj17 = navigationReplace(v0[15]);
                                const obj7 = { guildId: null };
                                obj7[0] = guildId;
                                obj17.pushLazy(lib(v0[17])(v0[21], v0.paths), obj7);
                              }
                            } else {
                              let obj16 = lib(v0[22]);
                              obj16.assertNever(channelId);
                            }
                          }
                        }
                        const features = selfMember.features;
                        if (features.has(constants2.COMMUNITY)) {
                          let obj8 = { navigationReplace: null, openChannel: true };
                          obj8[0] = navigationReplace;
                          navigationReplace(v0[18])(closure_15.CHANNEL(guildId, constants4.GUILD_HOME), obj8);
                          const tmp225 = navigationReplace(v0[18]);
                        } else {
                          channelId = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      }
                    }
                    channelId = 3;
                    channelId = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                }
                if (null != messageId) {
                  if (null != channel) {
                    if (!channel.isPrivate()) {
                      v0 = 2;
                      channelId = 1;
                      const obj9 = { value: null, done: false };
                      obj9[0] = callback2(selfMember, channel.guild_id, channel.id, messageId);
                      return obj9;
                    }
                  }
                }
                if (null != channel) {
                  if (null != guildId) {
                    if (channel.isPrivate()) {
                      if (guildId(channel.type)) {
                        let obj11 = lib(v0[23]);
                        if (obj11.canViewChannel(channel)) {
                          if (channel.type === constants.GUILD_STAGE_VOICE) {
                            if (!role2.can(constants3.CONNECT, channel)) {
                              channelId = 3;
                              return { value: "HermesInternal", done: "HermesInternal" };
                            }
                          }
                          if (v0 != null) {
                            v0();
                          }
                          if (callback != null) {
                            callback();
                          }
                          let obj13 = lib(v0[24]);
                          obj13.openChannelCallModal(channel);
                        }
                      }
                      if (callback != null) {
                        callback();
                      }
                      const obj10 = { navigationReplace: null, openChannel: true };
                      obj10[0] = navigationReplace;
                      navigationReplace(v0[18])(closure_15.CHANNEL(guildId, channel.id), obj10);
                      const tmp120 = navigationReplace(v0[18]);
                    } else {
                      v0 = 3;
                      channelId = 1;
                      obj11 = { value: null, done: false };
                      obj11[0] = callback2(selfMember, guildId, channel.id, messageId);
                      return obj11;
                    }
                  }
                }
                if (null != channelId) {
                  if (null != guildId) {
                    v0 = 4;
                    channelId = 1;
                    const obj12 = { value: null, done: false };
                    obj12[0] = callback2(selfMember, guildId, channelId, messageId);
                    return obj12;
                  }
                }
                if (null != channel) {
                  if (channel.isPrivate()) {
                    if (v0 != null) {
                      v0();
                    }
                    if (callback != null) {
                      callback();
                    }
                    obj8 = navigationReplace(v0[25]);
                    const voiceChannel = obj8.selectVoiceChannel(channelId);
                  }
                }
                let tmp62 = null != channelId;
                if (tmp62) {
                  tmp62 = null == guildId;
                }
                if (tmp62) {
                  if (callback != null) {
                    callback();
                  }
                  obj13 = { navigationReplace: null, openChannel: true };
                  obj13[0] = navigationReplace;
                  navigationReplace(v0[18])(closure_15.CHANNEL(guildId, channelId, messageId), obj13);
                  const tmp71 = navigationReplace(v0[18]);
                }
              }
            } else if (2 === tmp5) {
              if (arg0 === 1) {
                channelId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                channelId = 3;
                const obj14 = { value: null, done: true };
                obj14[0] = arg1;
                return obj14;
              } else if (arg1) {
                channelId = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                channelId = 3;
                throw arg1;
              } else if (arg0 === 2) {
                channelId = 3;
                const obj15 = { value: null, done: true };
                obj15[0] = arg1;
                return obj15;
              } else if (arg1) {
                channelId = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else if (arg0 === 1) {
              channelId = 3;
              throw arg1;
            } else if (arg0 === 2) {
              channelId = 3;
              obj16 = { value: null, done: true };
              obj16[0] = arg1;
              return obj16;
            } else if (!arg1) {
              if (callback != null) {
                tmp7();
              }
              obj = { navigationReplace: null, openChannel: true };
              obj[0] = navigationReplace;
              navigationReplace(v0[18])(closure_15.CHANNEL(guildId, channelId, messageId), obj);
              const tmp14 = navigationReplace(v0[18]);
            }
            if (callback != null) {
              tmp156();
            }
            obj17 = { navigationReplace: null, openChannel: true };
            obj17[0] = navigationReplace;
            navigationReplace(v0[18])(closure_15.CHANNEL(channel.guild_id, channel.id, messageId), obj17);
            const tmp163 = navigationReplace(v0[18]);
          }
        } catch (tmp261) {
          channelId = tmp;
          throw tmp261;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelTypes: closure_12, GuildFeatures: map1, Permissions: closure_14, Routes: closure_15 } = ME);
let result = require("obj132").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel(arg0) {
  const self = this;
  const apply = _handleMessagesTapChannel.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};