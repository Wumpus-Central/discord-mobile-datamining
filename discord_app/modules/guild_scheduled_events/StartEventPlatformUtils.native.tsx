// discord_app/modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx
import _modDef38 from "../../../_runtime/metro/00038__.js";
import Constants from "../../Constants.tsx";
import router_utils from "../routing/router_utils.tsx";
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants.tsx";
import SelectedChannelActionCreatorsDefault from "../../actions/SelectedChannelActionCreators.tsx";
import StageChannelModalActionCreatorsAll from "../stage_channels/StageChannelModalActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5;

let obj = function _navigateToEvent() {
  let guildId;
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let entity_type;
    let guild_id;
    let obj10;
    let obj2;
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let channel;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp4;
            let closure_2 = tmp;
            closure_0 = closure_1;
            channel = undefined;
            ({ entity_type, guild_id } = closure_0);
            if (constants.STAGE_INSTANCE === entity_type) {
              const channelId = RTCConnectionStore.getChannelId();
              channel = ChannelStore.getChannel(tmp50.channel_id);
              _modDef38(null != channel, "could not find channel");
              if (channelId !== channel.id) {
                c4 = 1;
                c5 = 1;
                const obj5 = { value: obj10.connectToStage(channel, true), done: false };
                obj10 = StageChannelModalActionCreatorsAll;
                return obj5;
              }
            } else {
              if (constants.VOICE === entity_type) {
                const channelId1 = RTCConnectionStore.getChannelId();
                const channel1 = ChannelStore.getChannel(tmp50.channel_id);
                _modDef38(null != channel1, "could not find channel");
                if (channelId1 !== channel1.id) {
                  const tmp20Result = SelectedChannelActionCreatorsDefault;
                  const voiceChannel = tmp20Result.selectVoiceChannel(channel1.id);
                }
                if (closure_1 != null) {
                  closure_1();
                }
              } else if (constants.EXTERNAL === entity_type) {
                if (guildId.getGuildId() !== guild_id) {
                  const obj6 = router_utils;
                  obj6.transitionTo(Routes.CHANNEL(guild_id));
                }
                if (closure_1 != null) {
                  closure_1();
                }
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c4 = 3;
            c5 = 1;
            const obj11 = { value: obj2.audienceAckRequestToSpeak(channel, false), done: false };
            obj2 = closure_131_0(closure_131_3[8]);
            return obj11;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        if (closure_0 != null) {
          tmp36();
        }
        c4 = 2;
        c5 = 1;
        const obj12 = { value: obj8.navigateToStage(channel, null), done: false };
        obj8 = closure_131_2(closure_131_3[7]);
        return obj12;
      } catch (tmp46) {
        c5 = 3;
        throw tmp46;
      }
    }
  });
  return obj(...arguments);
};
let closure_8 = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/StartEventPlatformUtils.native.tsx");

export const navigateToEvent = function navigateToEvent() {
  return obj(...arguments);
};
export const postStartActions = function postStartActions() {
  return Promise.resolve();
};
