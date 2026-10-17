// discord_app/modules/messages/native/handlers/handleMessagesTapChannel.tsx
import GuildDiscoveryUtilsAll from "../../../../utils/GuildDiscoveryUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = fn;
function maybeStartLurking() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _maybeStartLurking(arg0, arg1) {
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
        return { value: "IconComponent", done: null };
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
let closure_16 = async function _handleMessagesTapChannel(arg0) {
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      const channelId = closure_129_0.channelId;
      const guildId = closure_129_0.guildId;
      const messageId = closure_129_0.messageId;
      let channel = null;
      if (null != channelId) {
        channel = closure_130_7.getChannel(channelId);
      }
      closure_129_7 = channel;
      guild = closure_130_8.getGuild(guildId);
      const result = closure_130_1(closure_130_3[9]).trackDiscordLinkClicked({ guildId, channelId, messageId });
      if (null != guildId) {
        if (null != channelId) {
          if (obj9.isStaticRouteIconType(channelId)) {
            closure_130_1(closure_130_3[11])({
              guildId,
              staticRoute: channelId,
              itemId: messageId,
              navigationReplace: closure_129_1,
            });
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      }
      if (null != messageId) {
        if (null != closure_129_7) {
          if (!closure_129_7.isPrivate()) {
            c3 = 2;
            c4 = 1;
            return { value: closure_130_14(guild, closure_129_7.guild_id, closure_129_7.id, messageId), done: false };
          }
        }
      }
      if (null != closure_129_7) {
        if (null != guildId) {
          if (closure_129_7.isPrivate()) {
            if (closure_130_5(closure_129_7.type)) {
              if (obj14.canViewChannel(closure_129_7)) {
                if (closure_129_7.type === closure_130_10.GUILD_STAGE_VOICE) {
                  if (!closure_130_9.can(closure_130_12.CONNECT, closure_129_7)) {
                    c4 = 3;
                    return { value: "IconComponent", done: null };
                  }
                }
                if (closure_129_3 != null) {
                  closure_129_3();
                }
                if (closure_129_2 != null) {
                  closure_129_2();
                }
                closure_130_0(closure_130_3[16]).openChannelCallModal(closure_129_7);
                closure_130_0(closure_130_3[16]);
              }
              obj14 = closure_130_0(closure_130_3[15]);
            }
            if (closure_129_2 != null) {
              closure_129_2();
            }
            closure_130_1(closure_130_3[12])(closure_130_13.CHANNEL(guildId, closure_129_7.id), {
              navigationReplace: closure_129_1,
              openChannel: true,
            });
            closure_130_1(closure_130_3[12]);
          } else {
            c3 = 4;
            c4 = 1;
            return { value: closure_130_14(guild, guildId, closure_129_7.id, messageId), done: false };
          }
        }
      }
      if (null != channelId) {
        if (null != guildId) {
          c3 = 5;
          c4 = 1;
          return { value: closure_130_14(guild, guildId, channelId, messageId), done: false };
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
          const voiceChannel = closure_130_1(closure_130_3[17]).selectVoiceChannel(channelId);
          closure_130_1(closure_130_3[17]);
        }
      }
      let tmp89 = null != channelId;
      if (tmp89) {
        tmp89 = null == guildId;
      }
      if (tmp89) {
        if (closure_129_2 != null) {
          closure_129_2();
        }
        closure_130_1(closure_130_3[12])(closure_130_13.CHANNEL(guildId, channelId, messageId), {
          navigationReplace: closure_129_1,
          openChannel: true,
        });
        closure_130_1(closure_130_3[12]);
      }
      closure_130_1(closure_130_3[9]);
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else if (value) {
      c4 = 3;
      return { value: "IconComponent", done: null };
    }
  } else if (3 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      let payload = null;
      if (null != closure_129_0.originalLink) {
        payload = closure_130_1(closure_130_3[13])(closure_129_0.originalLink).payload;
      }
      closure_129_9 = payload;
      let type;
      if (closure_129_9 != null) {
        type = closure_129_9.type;
      }
      let conversationId = null;
      if (type === closure_130_11.MESSAGE) {
        conversationId = closure_129_9.conversationId;
      }
      closure_129_10 = conversationId;
      let tmp36 = null != closure_129_10;
      if (tmp36) {
        tmp36 = null != closure_129_7.guild_id;
      }
      if (tmp36) {
        closure_130_1(closure_130_3[14])({
          guildId: closure_129_7.guild_id,
          channelId: closure_129_7.id,
          conversationId: closure_129_10,
          messageId,
        });
      }
    }
  } else if (4 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else if (value) {
      c4 = 3;
      return { value: "IconComponent", done: null };
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else if (!value) {
    if (closure_129_2 != null) {
      tmp7();
    }
    closure_130_1(closure_130_3[12])(closure_130_13.CHANNEL(guildId, channelId, messageId), {
      navigationReplace: closure_129_1,
      openChannel: true,
    });
    closure_130_1(closure_130_3[12]);
  }
  if (closure_129_2 != null) {
    tmp183();
  }
  await closure_130_1(closure_130_3[12])(closure_130_13.CHANNEL(closure_129_7.guild_id, closure_129_7.id, messageId), {
    navigationReplace: closure_129_1,
    openChannel: true,
  });
  closure_2 = tmp2;
  ({ data: closure_129_0, navigationReplace } = closure_0);
  if (navigationReplace === undefined) {
    navigationReplace = false;
  }
  closure_129_1 = navigationReplace;
  ({ onBeforeNavigate: closure_129_2, dismissKeyboard: closure_129_3 } = closure_0);
  return "Reflect";
};
const isGuildVocalChannelType = fn(2072).isGuildVocalChannelType;
const isGuildLurker = fn(2086).isGuildLurker;
const Constants = fn(1087);
({ ChannelTypes: c10, LinkingTypes: closure_11, Permissions: closure_12, Routes: map1 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapChannel.tsx");

export const handleMessagesTapChannel = function handleMessagesTapChannel() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
