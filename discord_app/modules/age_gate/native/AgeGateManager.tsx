// discord_app/modules/age_gate/native/AgeGateManager.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import AgeGateUtils from "../AgeGateUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import AgeGateConstants from "../AgeGateConstants.tsx";
import Constants from "../../../Constants.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
({ EXISTING_USER_AGE_GATE_MODAL_KEY: metroImportDefault, AgeGateSource: metroImportAll } = AgeGateConstants);
({ ChannelTypes: c9, GuildNSFWContentLevel: c10 } = Constants);
class AgeGateManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handlePostConnectionOpen,
      CHANNEL_SELECT: applyArgumentsResult.handleChannelSelect,
      AGE_GATE_MODAL_OPEN: applyArgumentsResult.handleAgeGateModalOpen,
      AGE_GATE_MODAL_CLOSE: applyArgumentsResult.handleAgeGateModalClose,
      GUILD_UPDATE: applyArgumentsResult.handleGuildUpdate,
    };
    return applyArgumentsResult;
  }
  handlePostConnectionOpen() {
    const guildId = SelectedGuildStore.getGuildId();
    const channelId = SelectedChannelStore.getChannelId();
    const obj = AgeGateUtils;
    obj.maybeShowAgeGate(guildId, channelId);
  }
  handleChannelSelect(arg0) {
    let channelId;
    let guildId;
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
      const obj = AgeGateUtils;
      obj.maybeShowAgeGate(guildId, channelId);
    }
  }
  handleAgeGateModalOpen(source) {
    source = source.source;
    let obj = ModalActionCreatorsDefault;
    obj.pushLazy(
      _asyncToGenerator(async () => {
        let c3;
        let closure_1;
        let value = tmp;
        await value(paths[10])(paths[9], paths.paths);
        value = value.default;
        if (closure_129_0 === constants.AUTH) {
          const obj = { animation: value(paths[11]).ModalAnimation.SLIDE_IN_OUT };
          value.modalConfig = obj;
        }
        return value;
      }),
      { source },
      closure_7,
    );
  }
  handleAgeGateModalClose() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(metroImportDefault);
  }
  handleGuildUpdate(guild) {
    guild = guild.guild;
    const guildId = SelectedGuildStore.getGuildId();
    const tmp2 =
      null != guildId && guild.id === guildId && guild.owner_configured_content_level === constants2.AGE_RESTRICTED;
    if (tmp2) {
      const obj = AgeGateUtils;
      obj.maybeShowAgeGate(guild.id, null);
    }
  }
}
const prototype = AgeGateManager.prototype;
const ageGateManager = new AgeGateManager();
const result = size.fileFinishedImporting("modules/age_gate/native/AgeGateManager.tsx");

export default ageGateManager;
