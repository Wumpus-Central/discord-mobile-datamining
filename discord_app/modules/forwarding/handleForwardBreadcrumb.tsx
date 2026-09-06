// discord_app/modules/forwarding/handleForwardBreadcrumb.tsx
import GuildDiscoveryUtils from "../../utils/GuildDiscoveryUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
let closure_9 = async function _handleForwardBreadcrumb(arg0) {
  let messageReference = arg0;
  c4 = 0;
  c5 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
            closure_2 = tmp3;
            closure_1 = tmp7;
            closure_129_0 = messageReference;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            let message_id;
            let channel2;
            closure_129_5 = undefined;
            closure_129_6 = undefined;
            if (null != messageReference.messageReference) {
              let guild_id = messageReference.messageReference.guild_id;
              closure_129_1 = guild_id;
              const channel_id = messageReference.messageReference.channel_id;
              closure_129_2 = channel_id;
              message_id = messageReference.messageReference.message_id;
              channel2 = channel.getChannel(channel_id);
              closure_129_5 = false;
              if (null == channel2) {
                if (null != guild_id) {
                  if (null == guild.getGuild(guild_id)) {
                    c3 = 1;
                    let obj1 = { object: constants.FORWARD_BREADCRUMB };
                    c4 = 2;
                    c5 = 1;
                    const obj2 = {
                      value: GuildDiscoveryUtils.startLurking(guild_id, obj1, { shouldNavigate: false }),
                      done: false,
                    };
                    return obj2;
                  }
                }
              }
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp7) {
          c3 = 0;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_129_5 = true;
            obj1 = closure_130_0(closure_130_2[5]);
            c4 = 3;
            c5 = 1;
            let obj4 = { value: obj1.waitForGuild(closure_129_1), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          channel2 = closure_130_4.getChannel(closure_129_2);
          c3 = 0;
        }
        obj4 = closure_130_1(closure_130_2[6]);
        const basicChannel = closure_130_4.getBasicChannel(closure_129_0.channel_id);
        guild_id = undefined;
        if (basicChannel != null) {
          guild_id = basicChannel.guild_id;
        }
        const obj5 = {
          guild_id,
          channel_id: closure_129_0.channel_id,
          message_id: closure_129_0.id,
          breadcrumb_guild_id: closure_129_1,
          breadcrumb_channel_id: closure_129_2,
          breadcrumb_message_id: message_id,
          did_lurk: closure_129_5,
        };
        obj4.track(closure_130_6.FORWARD_BREADCRUMB_CLICKED, obj5);
        let tmp36;
        if (closure_129_5) {
          tmp36 = closure_129_2;
        }
        closure_129_6 = tmp36;
        const obj6 = { navigationReplace: false, welcomeModalChannelId: closure_129_6 };
        closure_130_1(closure_130_2[7])(closure_130_8.CHANNEL(closure_129_1, closure_129_2, message_id), obj6);
        const tmp42 = closure_130_1(closure_130_2[7]);
      } catch (tmp52) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp52;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsObjects: closure_7, Routes: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/handleForwardBreadcrumb.tsx");

export default function handleForwardBreadcrumb() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
