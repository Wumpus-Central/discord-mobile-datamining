// discord_app/modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const GuildSettingsModalStickerInfoActionSheet = "GuildSettingsModalStickerInfoActionSheet";
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/stickers/native/showGuildSettingsModalStickerInfoActionSheet.tsx",
);

export const showGuildSettingsModalStickerInfoActionSheet = function showGuildSettingsModalStickerInfoActionSheet(
  arg0,
) {
  ({ guildId, stickerId } = arg0);
  const obj = {
    guildId,
    stickerId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(GuildSettingsModalStickerInfoActionSheet);
    },
  };
  obj.openLazy(asyncRequireImpl(17584, dependencyMap.paths), GuildSettingsModalStickerInfoActionSheet, obj);
};
