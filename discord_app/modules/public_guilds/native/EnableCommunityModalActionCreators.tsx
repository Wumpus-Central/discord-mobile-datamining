// discord_app/modules/public_guilds/native/EnableCommunityModalActionCreators.tsx
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildSettingsStore from "../../guild_settings/GuildSettingsStore.tsx";

require = fn;
const CREATE_NEW_CHANNEL_VALUE = fn(8461).CREATE_NEW_CHANNEL_VALUE;
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
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(19708, dependencyMap.paths),
      undefined,
      ENABLED_COMMUNITY_MODAL_KEY,
    );
    const tmpResult = ModalActionCreatorsDefault;
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ENABLED_COMMUNITY_MODAL_KEY);
  },
};
