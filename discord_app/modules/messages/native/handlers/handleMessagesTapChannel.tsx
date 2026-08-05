// discord_app/modules/messages/native/handlers/handleMessagesTapChannel.tsx
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import { isGuildVocalChannelType } from "createChannelRecord";
import { isGuildLurker } from "GuildNSFWContentLevel";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import closure_9 from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { GuildOnboardingTab } from "serverPromptToClientPrompt";
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_18 } from "GUILD_ONBOARDING_MODAL_KEY";

let closure_12;
let closure_14;
let closure_15;
let map1;
const require = arg1;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c5 = 0;
    let c4 = 0;
    let c6 = 0;
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
          return { value: "T", done: null };
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
              let obj1 = callback(table[12]);
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
  const _maybeStartLurking = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c2;
      let c3;
      let navigationReplace;
      if (channelId === 2) {
        channelId = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
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
                throwTypeErrorResult = lib;
                ({ data: c0, navigationReplace } = lib);
                if (navigationReplace === undefined) {
                  navigationReplace = false;
                }
                ({ onBeforeNavigate: c2, dismissKeyboard: c3 } = throwTypeErrorResult);
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
                return { value: "PX_8", done: "Array" };
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  channelId = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  channelId = 3;
                  const obj1 = { value: null, done: true };
                  obj1[0] = arg1;
                  return obj1;
                } else {
                  throwTypeErrorResult = navigationReplace;
                  throwTypeErrorResult = lib;
                  channelId = lib.channelId;
                  throwTypeErrorResult = lib;
                  guildId = lib.guildId;
                  throwTypeErrorResult = lib;
                  messageId = lib.messageId;
                  throwTypeErrorResult = channelId;
                  throwTypeErrorResult = null;
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
                        throwTypeErrorResult = navigationReplace;
                        throwTypeErrorResult = selfMember;
                        if (null == selfMember) {
                          channelId = 3;
                          return { value: "T", done: null };
                        } else {
                          throwTypeErrorResult = navigationReplace;
                          throwTypeErrorResult = channelId;
                          if ("browse" === channelId) {
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = selfMember;
                            const features3 = selfMember.features;
                            throwTypeErrorResult = constants2;
                            if (features3.has(constants2.COMMUNITY)) {
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = v0;
                              const obj3 = { guildId: null, defaultTab: null };
                              throwTypeErrorResult = guildId;
                              obj3[0] = guildId;
                              throwTypeErrorResult = constants5;
                              obj3[1] = constants5.BROWSE;
                              throwTypeErrorResult = closure_18;
                              throwTypeErrorResult = navigationReplace(v0[15]).pushLazy(lib(v0[17])(v0[16], v0.paths), obj3, closure_18);
                              const obj27 = navigationReplace(v0[15]);
                            } else {
                              channelId = 3;
                              return { value: "T", done: null };
                            }
                          } else if ("customize" === throwTypeErrorResult) {
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = selfMember;
                            const features2 = selfMember.features;
                            throwTypeErrorResult = constants2;
                            if (features2.has(constants2.COMMUNITY)) {
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = v0;
                              obj4 = { guildId: null, defaultTab: null };
                              throwTypeErrorResult = guildId;
                              obj4[0] = guildId;
                              throwTypeErrorResult = constants5;
                              obj4[1] = constants5.CUSTOMIZE;
                              throwTypeErrorResult = closure_18;
                              throwTypeErrorResult = navigationReplace(v0[15]).pushLazy(lib(v0[17])(v0[16], v0.paths), obj4, closure_18);
                              const obj25 = navigationReplace(v0[15]);
                            } else {
                              channelId = 3;
                              return { value: "T", done: null };
                            }
                          } else {
                            if ("home" !== throwTypeErrorResult) {
                              if ("guide" !== throwTypeErrorResult) {
                                if ("linked-roles" === throwTypeErrorResult) {
                                  throwTypeErrorResult = messageId;
                                  role = messageId;
                                  throwTypeErrorResult = role;
                                  if (null != role) {
                                    throwTypeErrorResult = navigationReplace;
                                    throwTypeErrorResult = callback;
                                    throwTypeErrorResult = selfMember;
                                    throwTypeErrorResult = guildId;
                                    guild = selfMember.getSelfMember(guildId);
                                    throwTypeErrorResult = guild;
                                    if (null == guild) {
                                      channelId = 3;
                                      return { value: "T", done: null };
                                    } else {
                                      throwTypeErrorResult = navigationReplace;
                                      throwTypeErrorResult = callback;
                                      throwTypeErrorResult = role;
                                      throwTypeErrorResult = guildId;
                                      throwTypeErrorResult = role;
                                      role2 = role.getRole(guildId, role);
                                      throwTypeErrorResult = role2;
                                      if (null != role2) {
                                        throwTypeErrorResult = navigationReplace;
                                        throwTypeErrorResult = guild;
                                        const roles = guild.roles;
                                        throwTypeErrorResult = role2;
                                        if (!roles.includes(role2.id)) {
                                          throwTypeErrorResult = navigationReplace;
                                          throwTypeErrorResult = callback;
                                          throwTypeErrorResult = navigationReplace;
                                          throwTypeErrorResult = v0;
                                          throwTypeErrorResult = lib;
                                          throwTypeErrorResult = v0;
                                          throwTypeErrorResult = v0;
                                          throwTypeErrorResult = v0;
                                          throwTypeErrorResult = role2;
                                          throwTypeErrorResult = globalThis;
                                          const _HermesInternal = HermesInternal;
                                          throwTypeErrorResult = lib(v0[17])(v0[20], v0.paths);
                                          const obj5 = { role: null, guildId: null };
                                          throwTypeErrorResult = role2;
                                          obj5[0] = role2;
                                          throwTypeErrorResult = guildId;
                                          obj5[1] = guildId;
                                          throwTypeErrorResult = navigationReplace(v0[19]).openLazy(throwTypeErrorResult, "GuildRoleConnectionsConnectAccountsActionSheet-" + role2.id, obj5);
                                          const obj20 = navigationReplace(v0[19]);
                                        }
                                      }
                                      throwTypeErrorResult = navigationReplace;
                                      throwTypeErrorResult = callback;
                                      throwTypeErrorResult = navigationReplace;
                                      throwTypeErrorResult = v0;
                                      throwTypeErrorResult = lib;
                                      throwTypeErrorResult = v0;
                                      throwTypeErrorResult = v0;
                                      throwTypeErrorResult = v0;
                                      obj6 = { guildId: null };
                                      throwTypeErrorResult = guildId;
                                      obj6[0] = guildId;
                                      throwTypeErrorResult = navigationReplace(v0[15]).pushLazy(lib(v0[17])(v0[21], v0.paths), obj6);
                                      const obj22 = navigationReplace(v0[15]);
                                    }
                                  } else {
                                    throwTypeErrorResult = navigationReplace;
                                    throwTypeErrorResult = callback;
                                    throwTypeErrorResult = navigationReplace;
                                    throwTypeErrorResult = v0;
                                    let obj17 = navigationReplace(v0[15]);
                                    throwTypeErrorResult = lib;
                                    throwTypeErrorResult = v0;
                                    throwTypeErrorResult = v0;
                                    throwTypeErrorResult = v0;
                                    const obj7 = { guildId: null };
                                    throwTypeErrorResult = guildId;
                                    obj7[0] = guildId;
                                    throwTypeErrorResult = obj17.pushLazy(lib(v0[17])(v0[21], v0.paths), obj7);
                                  }
                                } else {
                                  throwTypeErrorResult = callback;
                                  throwTypeErrorResult = lib;
                                  throwTypeErrorResult = v0;
                                  let obj16 = lib(v0[22]);
                                  throwTypeErrorResult = channelId;
                                  throwTypeErrorResult = obj16.assertNever(channelId);
                                }
                              }
                            }
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = selfMember;
                            const features = selfMember.features;
                            throwTypeErrorResult = constants2;
                            if (features.has(constants2.COMMUNITY)) {
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = v0;
                              throwTypeErrorResult = closure_15;
                              throwTypeErrorResult = guildId;
                              throwTypeErrorResult = constants4;
                              throwTypeErrorResult = navigationReplace(v0[18]);
                              let obj8 = { navigationReplace: null, openChannel: true };
                              throwTypeErrorResult = navigationReplace;
                              obj8[0] = navigationReplace;
                              throwTypeErrorResult = throwTypeErrorResult(closure_15.CHANNEL(guildId, constants4.GUILD_HOME), obj8);
                            } else {
                              channelId = 3;
                              return { value: "T", done: null };
                            }
                          }
                        }
                      }
                      channelId = 3;
                      channelId = 3;
                      return { value: "T", done: null };
                    }
                  }
                  if (null != messageId) {
                    if (null != channel) {
                      throwTypeErrorResult = navigationReplace;
                      throwTypeErrorResult = channel;
                      if (!channel.isPrivate()) {
                        throwTypeErrorResult = navigationReplace;
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = callback2;
                        throwTypeErrorResult = selfMember;
                        throwTypeErrorResult = channel;
                        throwTypeErrorResult = channel;
                        throwTypeErrorResult = messageId;
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
                        throwTypeErrorResult = navigationReplace;
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = guildId;
                        throwTypeErrorResult = channel;
                        if (guildId(channel.type)) {
                          throwTypeErrorResult = navigationReplace;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = v0;
                          let obj11 = lib(v0[23]);
                          throwTypeErrorResult = channel;
                          if (obj11.canViewChannel(channel)) {
                            throwTypeErrorResult = navigationReplace;
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = channel;
                            throwTypeErrorResult = constants;
                            if (channel.type === constants.GUILD_STAGE_VOICE) {
                              throwTypeErrorResult = navigationReplace;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = role2;
                              throwTypeErrorResult = constants3;
                              throwTypeErrorResult = channel;
                              if (!role2.can(constants3.CONNECT, channel)) {
                                channelId = 3;
                                return { value: "T", done: null };
                              }
                            }
                            throwTypeErrorResult = navigationReplace;
                            throwTypeErrorResult = null;
                            if (v0 != null) {
                              throwTypeErrorResult = v0();
                            }
                            throwTypeErrorResult = navigationReplace;
                            if (callback != null) {
                              throwTypeErrorResult = callback();
                            }
                            throwTypeErrorResult = navigationReplace;
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = v0;
                            let obj13 = lib(v0[24]);
                            throwTypeErrorResult = channel;
                            throwTypeErrorResult = obj13.openChannelCallModal(channel);
                          }
                        }
                        throwTypeErrorResult = navigationReplace;
                        throwTypeErrorResult = null;
                        if (callback != null) {
                          throwTypeErrorResult = callback();
                        }
                        throwTypeErrorResult = navigationReplace;
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = navigationReplace;
                        throwTypeErrorResult = v0;
                        throwTypeErrorResult = closure_15;
                        throwTypeErrorResult = guildId;
                        throwTypeErrorResult = channel;
                        throwTypeErrorResult = navigationReplace(v0[18]);
                        const obj10 = { navigationReplace: null, openChannel: true };
                        throwTypeErrorResult = navigationReplace;
                        obj10[0] = navigationReplace;
                        throwTypeErrorResult = throwTypeErrorResult(closure_15.CHANNEL(guildId, channel.id), obj10);
                      } else {
                        throwTypeErrorResult = selfMember;
                        throwTypeErrorResult = guildId;
                        throwTypeErrorResult = channel;
                        throwTypeErrorResult = messageId;
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
                  return { value: "T", done: null };
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
                  return { value: "T", done: null };
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
              throwTypeErrorResult = navigationReplace;
              throwTypeErrorResult = null;
              if (callback != null) {
                throwTypeErrorResult = throwTypeErrorResult();
              }
              throwTypeErrorResult = navigationReplace;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = navigationReplace;
              throwTypeErrorResult = v0;
              throwTypeErrorResult = closure_15;
              throwTypeErrorResult = channel;
              throwTypeErrorResult = channel;
              throwTypeErrorResult = messageId;
              throwTypeErrorResult = navigationReplace(v0[18]);
              obj17 = { navigationReplace: null, openChannel: true };
              throwTypeErrorResult = navigationReplace;
              obj17[0] = navigationReplace;
              throwTypeErrorResult = throwTypeErrorResult(closure_15.CHANNEL(channel.guild_id, channel.id, messageId), obj17);
            }
          } catch (throwTypeErrorResult) {
            channelId = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleMessagesTapChannel = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelTypes: closure_12, GuildFeatures: map1, Permissions: closure_14, Routes: closure_15 } = ME);
let result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

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