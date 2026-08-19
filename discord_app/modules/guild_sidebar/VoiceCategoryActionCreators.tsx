// === Module 15458: voiceCategoryExpand ===

// Module 15458 (voiceCategoryExpand)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  const obj = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  const obj = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj);
};