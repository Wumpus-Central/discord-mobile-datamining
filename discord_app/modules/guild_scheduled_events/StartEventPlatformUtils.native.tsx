// discord_app/modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx
import ME from "ME";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import handleConnectionOpen from "handleConnectionOpen";
import { GuildScheduledEventEntityTypes as closure_8 } from "GUILD_EVENT_MAX_NAME_LENGTH";
import { Routes } from "ME";

const require = arg1;
function _navigateToEvent() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let entity_type;
      let guild_id;
      if (store === 2) {
        store = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          store = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              store = 3;
              throw arg1;
            } else if (arg0 === 2) {
              store = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp5;
              const callback3 = tmp2;
              let tmp27 = channel;
              const callback = channel;
              channel = undefined;
              ({ entity_type, guild_id } = callback);
              if (outer1_8.STAGE_INSTANCE === entity_type) {
                const channelId = outer1_6.getChannelId();
                channel = store.getChannel(tmp53.channel_id);
                callback2(outer1_3[6])(null != channel, "could not find channel");
                if (channelId !== channel.id) {
                  c4 = 1;
                  store = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = outer1_2(outer1_3[7]).connectToStage(channel, true);
                  return obj1;
                }
              } else {
                if (tmp54.VOICE === entity_type) {
                  const channelId1 = outer1_6.getChannelId();
                  const channel1 = store.getChannel(tmp53.channel_id);
                  callback2(outer1_3[6])(null != channel1, "could not find channel");
                  if (channelId1 !== channel1.id) {
                    const voiceChannel = tmp21(outer1_3[9]).selectVoiceChannel(channel1.id);
                    const tmp21Result = tmp21(outer1_3[9]);
                  }
                  if (tmp27 != null) {
                    tmp27 = tmp27();
                  }
                  tmp21 = callback2;
                } else if (tmp54.EXTERNAL === entity_type) {
                  if (outer1_7.getGuildId() !== guild_id) {
                    let obj5 = callback(outer1_3[10]);
                    obj5.transitionTo(outer1_9.CHANNEL(guild_id));
                  }
                  if (tmp27 != null) {
                    tmp27();
                  }
                }
                store = 3;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              store = 3;
              throw arg1;
            } else if (arg0 === 2) {
              store = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              store = 3;
              throw arg1;
            } else if (arg0 === 2) {
              store = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              obj1 = callback(6718);
              c4 = 3;
              store = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj1.audienceAckRequestToSpeak(channel, false);
              return obj4;
            }
          } else if (arg0 === 1) {
            store = 3;
            throw arg1;
          } else if (arg0 === 2) {
            store = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (callback != null) {
            tmp37();
          }
          c4 = 2;
          store = 1;
          obj5 = { value: null, done: false };
          obj5[0] = callback3(6713).navigateToStage(channel, null);
          return obj5;
        } catch (tmp47) {
          store = tmp;
          throw tmp47;
        }
      }
    })();
  });
  const _navigateToEvent = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("createRTCConnection").fileFinishedImporting("modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx");

export const navigateToEvent = function navigateToEvent(closure_0, onSuccess) {
  const self = this;
  const apply = _navigateToEvent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const postStartActions = function postStartActions(closure_0, onSuccess) {
  return Promise.resolve();
};