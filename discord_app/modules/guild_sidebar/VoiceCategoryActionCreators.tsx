// === Module 16117: VoiceCategoryActionCreators ===

// Module 16117 (VoiceCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId, expand: true });
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false });
};