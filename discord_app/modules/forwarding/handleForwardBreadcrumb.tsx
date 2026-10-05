// discord_app/modules/forwarding/handleForwardBreadcrumb.tsx
import GuildDiscoveryUtils from "../../utils/GuildDiscoveryUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _handleForwardBreadcrumb() {
  let channel;
  let guild;
  obj = _asyncToGenerator(async (arg0) => {
    let did_lurk;
    let obj2;
    let obj7;
    let closure_0 = arg0;
    if (did_lurk === 2) {
      did_lurk = 3;
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
      let c3;
      try {
        let guild_id;
        let channel_id;
        let message_id;
        let welcomeModalChannelId;
        let channel2;
        did_lurk = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            did_lurk = 3;
            throw value;
          } else if (arg0 === 2) {
            did_lurk = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            guild_id = undefined;
            channel_id = undefined;
            message_id = undefined;
            channel2 = undefined;
            did_lurk = undefined;
            welcomeModalChannelId = undefined;
            if (null != closure_0.messageReference) {
              guild_id = closure_0.messageReference.guild_id;
              channel_id = closure_0.messageReference.channel_id;
              message_id = closure_0.messageReference.message_id;
              channel2 = channel.getChannel(channel_id);
              did_lurk = false;
              if (null == channel2) {
                if (null != guild_id) {
                  if (null == guild.getGuild(guild_id)) {
                    c3 = 1;
                    const obj5 = { object: constants.FORWARD_BREADCRUMB };
                    c4 = 2;
                    did_lurk = 1;
                    const obj6 = { value: obj7.startLurking(guild_id, obj5, { shouldNavigate: false }), done: false };
                    obj7 = GuildDiscoveryUtils;
                    return obj6;
                  }
                }
              }
            }
            did_lurk = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c4) {
          c3 = 0;
        } else if (2 === c4) {
          if (arg0 === 1) {
            did_lurk = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            did_lurk = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c4 = 3;
            did_lurk = 1;
            const obj9 = { value: obj2.waitForGuild(guild_id), done: false };
            obj2 = closure_130_0(closure_130_2[5]);
            return obj9;
          }
        } else if (arg0 === 1) {
          did_lurk = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          did_lurk = 3;
          obj = { value, done: true };
          return obj;
        } else {
          channel2 = closure_130_4.getChannel(channel_id);
          c3 = 0;
        }
        const track = closure_130_1(closure_130_2[6]).track;
        const FORWARD_BREADCRUMB_CLICKED = closure_130_6.FORWARD_BREADCRUMB_CLICKED;
        const tmp19 = closure_130_1(closure_130_2[6]);
        const basicChannel = closure_130_4.getBasicChannel(closure_0.channel_id);
        let guild_id1;
        if (basicChannel != null) {
          guild_id1 = basicChannel.guild_id;
        }
        const obj10 = {
          guild_id: guild_id1,
          channel_id: closure_0.channel_id,
          message_id: closure_0.id,
          breadcrumb_guild_id: guild_id,
          breadcrumb_channel_id: channel_id,
          breadcrumb_message_id: message_id,
          did_lurk,
        };
        track(FORWARD_BREADCRUMB_CLICKED, obj10);
        let tmp34;
        if (did_lurk) {
          tmp34 = channel_id;
        }
        welcomeModalChannelId = tmp34;
        const obj11 = { navigationReplace: false, welcomeModalChannelId };
        const tmp40 = closure_130_1(closure_130_2[7]);
        tmp40(closure_130_8.CHANNEL(guild_id, channel_id, message_id), obj11);
      } catch (tmp50) {
        if (0 === c3) {
          did_lurk = 3;
          throw tmp50;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroRequire, AnalyticsObjects: metroImportDefault, Routes: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/forwarding/handleForwardBreadcrumb.tsx");

export default function handleForwardBreadcrumb() {
  return obj(...arguments);
}
