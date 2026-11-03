// === Module 19984: EnableCommunityModalActionCreators ===

// Module 19984 (EnableCommunityModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9202 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9203 */;

require = fn;
const CREATE_NEW_CHANNEL_VALUE = fn(8627).CREATE_NEW_CHANNEL_VALUE;
const ENABLED_COMMUNITY_MODAL_KEY = "ENABLED_COMMUNITY_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/EnableCommunityModalActionCreators.tsx");

export default {
  open() {
    guild = GuildSettingsStore.getProps().guild;
    let rulesChannelId;
    if (guild != null) {
      rulesChannelId = guild.rulesChannelId;
    }
    if (rulesChannelId == null) {
      rulesChannelId = CREATE_NEW_CHANNEL_VALUE;
    }
    GuildSettingsActionCreatorsDefault.updateGuild({ rulesChannelId });
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(19985, dependencyMap.paths), undefined, ENABLED_COMMUNITY_MODAL_KEY);
    const tmpResult = ModalActionCreatorsDefault;
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  }
};