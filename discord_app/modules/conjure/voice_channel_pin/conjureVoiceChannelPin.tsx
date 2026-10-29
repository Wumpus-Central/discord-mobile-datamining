// discord_app/modules/conjure/voice_channel_pin/conjureVoiceChannelPin.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ChannelSettingsActionCreators from "../../../actions/ChannelSettingsActionCreators.tsx";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
function canPinVoiceChannel(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  let canResult = null != channel;
  if (canResult) {
    canResult = channel.type === constants.GUILD_VOICE;
  }
  if (canResult) {
    canResult = PermissionStore.can(constants2.MANAGE_CHANNELS, channel);
  }
  return canResult;
}
let closure_9 = async function _pinVoiceChannel(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (canPinVoiceChannel(closure_0)) {
            channel = channel.getChannel(closure_0);
            let application_id;
            if (channel != null) {
              application_id = channel.application_id;
            }
            if (application_id === applicationId) {
              c2 = 3;
              return { value: true, done: true };
            } else {
              c4 = 1;
              const obj5 = { applicationId };
              c3 = 2;
              c2 = 1;
              const obj6 = { value: ChannelSettingsActionCreators.saveChannel(closure_0, obj5), done: false };
              return obj6;
            }
          } else {
            c2 = 3;
            return { value: false, done: true };
          }
        } else if (1 === tmp6) {
          c4 = 0;
          c2 = 3;
          return { value: false, done: true };
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c2 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c4 = 0;
          c2 = 3;
          const obj = { value: true === value.ok, done: true };
          return obj;
        }
      } catch (tmp12) {
        if (tmp3 === c4) {
          c2 = tmp2;
          throw tmp12;
        } else {
          c3 = tmp;
        }
      }
    }
  })();
};
const Constants = fn(1084);
({ ChannelTypes: metroRequire, Permissions: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/conjureVoiceChannelPin.tsx");

export function parseVoiceChannelPinOutcome(voice_channel_pin) {
  if (null != voice_channel_pin) {
    if (typeof voice_channel_pin === "object") {
      ({ status, channel_id } = voice_channel_pin);
      if ("skipped" === status) {
        const obj = { status };
        let tmp = obj;
      } else if ("pinned" === status) {
        if (typeof channel_id === "string") {
          const obj2 = { status, channelId: channel_id };
          tmp = obj2;
        }
      }
      return tmp;
    }
  }
}
export { canPinVoiceChannel };
export function resolveVoiceChannelPin(projectId, outcome) {
  DispatcherDefault.dispatch({ type: "CONJURE_VOICE_CHANNEL_PIN_RESOLVED", projectId, outcome });
  try {
    const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
    if (null == conjureSocket) {
      const _Error = Error;
      const error = new Error("Not connected");
      throw error;
    } else {
      const result = obj4.sendVoiceChannelPinOutcome(outcome);
    }
    obj4 = conjureSocket;
  } catch (err) {}
  const obj2 = { type: "CONJURE_VOICE_CHANNEL_PIN_RESOLVED", projectId, outcome };
}
export function pinVoiceChannel() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
