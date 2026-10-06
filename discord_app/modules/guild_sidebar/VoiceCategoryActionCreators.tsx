// === Module 16160: VoiceCategoryActionCreators ===

// Module 16160 (VoiceCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj2);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  const obj = DispatcherDefault;
  const obj2 = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj2);
};