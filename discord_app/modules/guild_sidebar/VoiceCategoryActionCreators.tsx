// discord_app/modules/guild_sidebar/VoiceCategoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_sidebar/VoiceCategoryActionCreators.tsx");

export function voiceCategoryExpand(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_EXPAND", guildId, expand: true });
}
export function voiceCategoryCollapse(guildId) {
  DispatcherDefault.dispatch({ type: "VOICE_CATEGORY_COLLAPSE", guildId, expand: false });
}
