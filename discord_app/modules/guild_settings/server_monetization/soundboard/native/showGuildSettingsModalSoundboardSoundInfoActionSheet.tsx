// === Module 20022: showGuildSettingsModalSoundboardSoundInfoActionSheet ===

// Module 20022 (showGuildSettingsModalSoundboardSoundInfoActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

let c3 = "GuildSettingsModalSoundboardSoundInfoActionSheet";
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/soundboard/native/showGuildSettingsModalSoundboardSoundInfoActionSheet.tsx");

export function showGuildSettingsModalSoundboardSoundInfoActionSheet(arg0) {
  ({ guildId, soundId } = arg0);
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(20023, dependencyMap.paths), c3, {
    guildId,
    soundId,
    hideActionSheet() {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_3);
    }
  });
}