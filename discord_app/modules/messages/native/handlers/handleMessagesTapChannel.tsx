// === Module 10696: handleMessagesTapChannel ===

// Module 10696 (handleMessagesTapChannel)
import GuildDiscoveryUtilsAll from "GuildDiscoveryUtils" /* 7051 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import GuildStore from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;

const require = fn;
function maybeStartLurking() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _maybeStartLurking(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  c5 = 0;
  c8 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            c7 = 1;
            const obj5 = { channelId, messageId };
            c5 = 2;
            c8 = 1;
            const obj6 = { value: GuildDiscoveryUtilsAll.startLurking(closure_1, {}, obj5), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c7 = 0;
          if (closure_6 instanceof closure_132_0(closure_132_3[8]).JoinGuildRefusedError) {
            c8 = 3;
            return { value: true, done: true };
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c7 = 0;
          c8 = 3;
          return { value: true, done: true };
        }
        c8 = 3;
        return { value: false, done: true };
      } catch (tmp16) {
        closure_6 = tmp16;
        if (tmp4 === c7) {
          c8 = tmp2;
          throw tmp16;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_15 = async function _handleMessagesTapChannel(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj3 = { value, done: true };
          return obj3;
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
          guild = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            channelId = closure_129_0.channelId;
            guildId = closure_129_0.guildId;
            messageId = closure_129_0.messageId;
            let channel = null;
            if (null != channelId) {
              channel = closure_130_7.getChannel(channelId);
            }
            closure_129_7 = channel;
            guild = closure_130_8.getGuild(guildId);
            const obj6 = { guildId, channelId, messageId };
            const result = closure_130_1(closure_130_3[9]).trackDiscordLinkClicked(obj6);
            if (null != guildId) {
              if (null != channelId) {
                if (obj7.isStaticRouteIconType(channelId)) {
                  const obj8 = { guildId, staticRoute: channelId, itemId: messageId, navigationReplace: closure_129_1 };
                  closure_130_1(closure_130_3[11])(obj8);
                }
                c4 = 3;
                c4 = 3;
                return { value: "IconComponent", done: "+51" };
              }
            }
            if (null != messageId) {
              if (null != closure_129_7) {
                if (!closure_129_7.isPrivate()) {
                  c3 = 2;
                  c4 = 1;
                  const obj10 = { value: closure_130_13(guild, closure_129_7.guild_id, closure_129_7.id, messageId), done: false };
                  return obj10;
                }
              }
            }
            if (null != closure_129_7) {
              if (null != guildId) {
                if (closure_129_7.isPrivate()) {
                  if (closure_130_5(closure_129_7.type)) {
                    if (obj12.canViewChannel(closure_129_7)) {
                      if (closure_129_7.type === closure_130_10.GUILD_STAGE_VOICE) {
                        if (!closure_130_9.can(closure_130_11.CONNECT, closure_129_7)) {
                          c4 = 3;
                          return { value: "IconComponent", done: "+51" };
                        }
                      }
                      if (closure_129_3 != null) {
                        closure_129_3();
                      }
                      if (closure_129_2 != null) {
                        closure_129_2();
                      }
                      closure_130_0(closure_130_3[14]).openChannelCallModal(closure_129_7);
                      const obj14 = closure_130_0(closure_130_3[14]);
                    }
                    obj12 = closure_130_0(closure_130_3[13]);
                  }
                  if (closure_129_2 != null) {
                    closure_129_2();
                  }
                  const obj11 = { navigationReplace: closure_129_1, openChannel: true };
                  closure_130_1(closure_130_3[12])(closure_130_12.CHANNEL(guildId, closure_129_7.id), obj11);
                  const tmp120 = closure_130_1(closure_130_3[12]);
                } else {
                  c3 = 3;
                  c4 = 1;
                  const obj13 = { value: closure_130_13(guild, guildId, closure_129_7.id, messageId), done: false };
                  return obj13;
                }
              }
            }
            if (null != channelId) {
              if (null != guildId) {
                c3 = 4;
                c4 = 1;
                const obj15 = { value: closure_130_13(guild, guildId, channelId, messageId), done: false };
                return obj15;
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
                const voiceChannel = closure_130_1(closure_130_3[15]).selectVoiceChannel(channelId);
                const obj9 = closure_130_1(closure_130_3[15]);
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
              const obj16 = { navigationReplace: closure_129_1, openChannel: true };
              closure_130_1(closure_130_3[12])(closure_130_12.CHANNEL(guildId, channelId, messageId), obj16);
              const tmp71 = closure_130_1(closure_130_3[12]);
            }
            const obj5 = closure_130_1(closure_130_3[9]);
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else if (value) {
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else if (value) {
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else if (!value) {
          if (closure_129_2 != null) {
            tmp7();
          }
          const obj = { navigationReplace: closure_129_1, openChannel: true };
          closure_130_1(closure_130_3[12])(closure_130_12.CHANNEL(guildId, channelId, messageId), obj);
          const tmp14 = closure_130_1(closure_130_3[12]);
        }
        if (closure_129_2 != null) {
          tmp156();
        }
        const obj20 = { navigationReplace: closure_129_1, openChannel: true };
        closure_130_1(closure_130_3[12])(closure_130_12.CHANNEL(closure_129_7.guild_id, closure_129_7.id, messageId), obj20);
        const tmp163 = closure_130_1(closure_130_3[12]);
      }
    } catch (tmp179) {
      c4 = tmp;
      throw tmp179;
    }
  }
};
const isGuildVocalChannelType = fn(2069).isGuildVocalChannelType;
const isGuildLurker = fn(2083).isGuildLurker;
const Constants = fn(1085);
({ ChannelTypes: c10, Permissions: closure_11, Routes: closure_12 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};