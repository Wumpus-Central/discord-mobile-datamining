// discord_app/modules/guild_settings/server_monetization/soundboard/native/showGuildSettingsModalSoundboardSoundInfoActionSheet.tsx
import asyncRequireImpl from "../../../../../../_runtime/02119_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3 = "GuildSettingsModalSoundboardSoundInfoActionSheet";
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/soundboard/native/showGuildSettingsModalSoundboardSoundInfoActionSheet.tsx",
);

export function showGuildSettingsModalSoundboardSoundInfoActionSheet(arg0) {
  ({ guildId, soundId } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19959, dependencyMap.paths), c3, {
    guildId,
    soundId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_3);
    },
  });
}
