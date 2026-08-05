import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { shouldShowAgeGateForVoiceChannel } from "../AgeGateUtils.tsx";
// discord_app/modules/age_gate/native/AgeGateManager.tsx
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
  shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */.maybeShowAgeGate(guildId, channelId);
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
    shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */.maybeShowAgeGate(guildId, channelId);
    const obj = shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */;
  }
};
prototype["handleAgeGateModalOpen"] = function handleAgeGateModalOpen(source) {
  source = source.source;
  ModalActionCreators.pushLazy(callback(function*() {
    let closure_1 = tmp5;
    let closure_0 = tmp2;
    yield outer1_0(paths[10])(paths[9], paths.paths);
    closure_0 = arg1.default;
    if (closure_0 === outer1_8.AUTH) {
      const obj = { animation: null };
      obj[0] = outer1_0(paths[11]).ModalAnimation.SLIDE_IN_OUT;
      outer1_0.modalConfig = obj;
    }
    return outer1_0;
  }), { source }, closure_7);
};
prototype["handleAgeGateModalClose"] = function handleAgeGateModalClose() {
  ModalActionCreators.popWithKey(closure_7);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = guild.guild;
  const guildId = store.getGuildId();
  let tmp2 = null != guildId && guild.id === guildId;
  if (tmp2) {
    tmp2 = guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
  }
  if (tmp2) {
    shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */.maybeShowAgeGate(guild.id, null);
    const obj = shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */;
  }
};
const ageGateManager = new AgeGateManager();
result = require("handleConnectionOpen").fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;