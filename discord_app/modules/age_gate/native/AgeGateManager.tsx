// discord_app/modules/age_gate/native/AgeGateManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import shouldShowAgeGateForVoiceChannel from "../AgeGateUtils.tsx";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../stores/ChannelStore.tsx";
import closure_5 from "../../../stores/SelectedChannelStore.tsx";
import closure_6 from "../../../stores/SelectedGuildStore.tsx";
import result from "../AgeGateConstants.tsx";
import ME from "../../../Constants.tsx";

require = arg1;
({ EXISTING_USER_AGE_GATE_MODAL_KEY: error, AgeGateSource: closure_8 } = result);
({ ChannelTypes: c9, GuildNSFWContentLevel: c10 } = ME);
initializeDefault;
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
  shouldShowAgeGateForVoiceChannel.maybeShowAgeGate(guildId, channelId);
};
prototype["handleChannelSelect"] = function handleChannelSelect(arg0) {
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
    shouldShowAgeGateForVoiceChannel.maybeShowAgeGate(guildId, channelId);
    const obj = shouldShowAgeGateForVoiceChannel;
  }
};
prototype["handleAgeGateModalOpen"] = function handleAgeGateModalOpen(source) {
  source = source.source;
  _modDef5265.pushLazy(callback(function*() {
    closure_1 = tmp5;
    closure_0 = tmp2;
    yield closure_1_0(paths[10])(paths[9], paths.paths);
    closure_0 = arg1.default;
    if (closure_0 === closure_1_8.AUTH) {
      const obj = { animation: null };
      obj[0] = closure_1_0(paths[11]).ModalAnimation.SLIDE_IN_OUT;
      closure_1_0.modalConfig = obj;
    }
    return closure_1_0;
  }), { source }, closure_7);
};
prototype["handleAgeGateModalClose"] = function handleAgeGateModalClose() {
  _modDef5265.popWithKey(closure_7);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = guild.guild;
  const guildId = store.getGuildId();
  let tmp2 = null != guildId && guild.id === guildId;
  if (tmp2) {
    tmp2 = guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
  }
  if (tmp2) {
    shouldShowAgeGateForVoiceChannel.maybeShowAgeGate(guild.id, null);
    const obj = shouldShowAgeGateForVoiceChannel;
  }
};
const ageGateManager = new AgeGateManager();
result = require("set").fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;