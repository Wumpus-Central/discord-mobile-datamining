import closure_3 from "ME";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import closure_6 from "handleConnectionOpen";
import result from "result";
import ME from "ME";
import "initialize";

let c10;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ EXISTING_USER_AGE_GATE_MODAL_KEY: error, AgeGateSource: metroImportAll } = result);
({ ChannelTypes: c9, GuildNSFWContentLevel: c10 } = ME);
class AgeGateManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect, AGE_GATE_MODAL_OPEN: applyArgumentsResult.handleAgeGateModalOpen, AGE_GATE_MODAL_CLOSE: applyArgumentsResult.handleAgeGateModalClose, GUILD_UPDATE: applyArgumentsResult.handleGuildUpdate };
    return applyArgumentsResult;
  }
}
const prototype = AgeGateManager.prototype;
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const guildId = store.getGuildId();
  channelId = channelId.getChannelId();
  require(4469) /* shouldShowAgeGateForVoiceChannel */.maybeShowAgeGate(guildId, channelId);
};
prototype["handleChannelSelect"] = function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  channel = channel.getChannel(channelId);
  let tmp2 = null != guildId;
  if (tmp2) {
    let type;
    if (channel != null) {
      type = channel.type;
    }
    tmp2 = type !== constants.GUILD_VOICE;
  }
  if (tmp2) {
    require(4469) /* shouldShowAgeGateForVoiceChannel */.maybeShowAgeGate(guildId, channelId);
    const obj = require(4469) /* shouldShowAgeGateForVoiceChannel */;
  }
};
prototype["handleAgeGateModalOpen"] = function handleAgeGateModalOpen(source) {
  source = source.source;
  importDefault(4461).pushLazy(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === paths) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            paths = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(paths[10])(paths[9], paths.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1.default;
          if (closure_0 === outer1_8.AUTH) {
            obj = { animation: null };
            obj[0] = outer1_0(paths[11]).ModalAnimation.SLIDE_IN_OUT;
            outer1_0.modalConfig = obj;
          }
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = outer1_0;
          return obj3;
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  }), { source }, closure_7);
};
prototype["handleAgeGateModalClose"] = function handleAgeGateModalClose() {
  importDefault(4461).popWithKey(closure_7);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = guild.guild;
  const guildId = store.getGuildId();
  let tmp2 = null != guildId && guild.id === guildId;
  if (tmp2) {
    tmp2 = guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
  }
  if (tmp2) {
    require(4469) /* shouldShowAgeGateForVoiceChannel */.maybeShowAgeGate(guild.id, null);
    const obj = require(4469) /* shouldShowAgeGateForVoiceChannel */;
  }
};
const ageGateManager = new AgeGateManager();
result = require("handleConnectionOpen").fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;