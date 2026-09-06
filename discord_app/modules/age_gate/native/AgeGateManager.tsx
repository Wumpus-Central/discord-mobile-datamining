// === Module 17304: AgeGateManager ===

// Module 17304 (AgeGateManager)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import AgeGateUtils from "AgeGateUtils" /* 4771 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const AgeGateConstants = fn(1098);
({ EXISTING_USER_AGE_GATE_MODAL_KEY: closure_7, AgeGateSource: closure_8 } = AgeGateConstants);
const Constants = fn(1074);
({ ChannelTypes: closure_9, GuildNSFWContentLevel: c10 } = Constants);
class AgeGateManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen, CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect, AGE_GATE_MODAL_OPEN: applyArgumentsResult.handleAgeGateModalOpen, AGE_GATE_MODAL_CLOSE: applyArgumentsResult.handleAgeGateModalClose, GUILD_UPDATE: applyArgumentsResult.handleGuildUpdate };
    return applyArgumentsResult;
  }
}
const prototype = AgeGateManager.prototype;
prototype["handlePostConnectionOpen"] = function handlePostConnectionOpen() {
  const guildId = SelectedGuildStore.getGuildId();
  const channelId = SelectedChannelStore.getChannelId();
  AgeGateUtils.maybeShowAgeGate(guildId, channelId);
};
prototype["handleChannelSelect"] = function handleChannelSelect(arg0) {
  ({ guildId, channelId } = arg0);
  const channel = ChannelStore.getChannel(channelId);
  let tmp2 = null != guildId;
  if (tmp2) {
    let type;
    if (channel != null) {
      type = channel.type;
    }
    tmp2 = type !== constants.GUILD_VOICE;
  }
  if (tmp2) {
    AgeGateUtils.maybeShowAgeGate(guildId, channelId);
  }
};
prototype["handleAgeGateModalOpen"] = function handleAgeGateModalOpen(source) {
  source = source.source;
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    closure_1 = tmp5;
    await tmp2(paths[10])(paths[9], paths.paths);
    closure_128_0 = arg1.default;
    if (closure_129_0 === constants.AUTH) {
      closure_128_0.modalConfig = { animation: tmp2(paths[11]).ModalAnimation.SLIDE_IN_OUT };
      { animation: tmp2(paths[11]).ModalAnimation.SLIDE_IN_OUT };
    }
    return closure_128_0;
  }), { source }, closure_7);
};
prototype["handleAgeGateModalClose"] = function handleAgeGateModalClose() {
  ModalActionCreatorsDefault.popWithKey(React5);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = guild.guild;
  const guildId = SelectedGuildStore.getGuildId();
  let tmp2 = null != guildId && guild.id === guildId;
  if (tmp2) {
    tmp2 = guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
  }
  if (tmp2) {
    AgeGateUtils.maybeShowAgeGate(guild.id, null);
  }
};
const ageGateManager = new AgeGateManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;