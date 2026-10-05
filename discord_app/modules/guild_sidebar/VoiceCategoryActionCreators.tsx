// discord_app/modules/guild_sidebar/VoiceCategoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
