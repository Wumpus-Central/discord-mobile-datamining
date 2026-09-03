// discord_app/modules/guild_automod/GuildAutomodMessageActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import dispatcherDefault from "../../Dispatcher.tsx";

const result = set.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(id1) {
  let obj = dispatcherDefault;
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId: id1 };
  obj.dispatch(obj);
};
