// === Module 15697: voiceCategoryExpand ===

// Module 15697 (voiceCategoryExpand)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export const voiceCategoryExpand = function voiceCategoryExpand(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "VOICE_CATEGORY_EXPAND", guildId, expand: true };
  obj.dispatch(obj);
};
export const voiceCategoryCollapse = function voiceCategoryCollapse(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false };
  obj.dispatch(obj);
};