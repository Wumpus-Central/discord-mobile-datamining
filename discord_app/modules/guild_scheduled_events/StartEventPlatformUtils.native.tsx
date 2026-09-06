// === Module 9812: StartEventPlatformUtils ===

// Module 9812 (StartEventPlatformUtils)
import _modDef38 from "module_38" /* 38 */;
import router_utils from "router_utils" /* 1100 */;
import StageChannelModalActionCreatorsAll from "StageChannelModalActionCreators" /* 8393 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

require = fn;
let closure_10 = async function _navigateToEvent(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          let tmp27 = closure_1;
          closure_130_0 = closure_1;
          closure_130_1 = undefined;
          ({ entity_type, guild_id } = closure_0);
          if (constants.STAGE_INSTANCE === entity_type) {
            const channelId = RTCConnectionStore.getChannelId();
            const channel = ChannelStore.getChannel(tmp52.channel_id);
            closure_130_1 = channel;
            _modDef38(null != channel, "could not find channel");
            if (channelId !== channel.id) {
              c4 = 1;
              c5 = 1;
              let obj1 = { value: StageChannelModalActionCreatorsAll.connectToStage(channel, true), done: false };
              return obj1;
            }
          } else {
            if (tmp53.VOICE === entity_type) {
              const channelId1 = RTCConnectionStore.getChannelId();
              const channel1 = ChannelStore.getChannel(tmp52.channel_id);
              _modDef38(null != channel1, "could not find channel");
              if (channelId1 !== channel1.id) {
                const voiceChannel = tmp21(5411).selectVoiceChannel(channel1.id);
                const tmp21Result = tmp21(5411);
              }
              if (tmp27 != null) {
                tmp27 = tmp27();
              }
              tmp21 = importDefault;
            } else if (tmp53.EXTERNAL === entity_type) {
              if (guildId.getGuildId() !== guild_id) {
                let obj5 = router_utils;
                obj5.transitionTo(Routes.CHANNEL(guild_id));
              }
              if (tmp27 != null) {
                tmp27();
              }
            }
            c5 = 3;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj2 = { value, done: true };
          return obj2;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj1 = closure_131_0(closure_131_3[8]);
          c4 = 3;
          c5 = 1;
          const obj4 = { value: obj1.audienceAckRequestToSpeak(closure_130_1, false), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
      if (closure_130_0 != null) {
        tmp37();
      }
      c4 = 2;
      c5 = 1;
      obj5 = { value: closure_131_2(closure_131_3[7]).navigateToStage(closure_130_1, null), done: false };
      return obj5;
    } catch (tmp47) {
      c5 = tmp;
      throw tmp47;
    }
  }
};
let closure_8 = fn(1963).GuildScheduledEventEntityTypes;
const Routes = fn(1074).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx");

export const navigateToEvent = function navigateToEvent() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const postStartActions = function postStartActions() {
  return Promise.resolve();
};