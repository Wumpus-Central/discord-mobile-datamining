// discord_app/modules/guild_automod/GuildAutomodMessageActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageActionCreators.tsx");

export const removeAutomodMessageNotice = function removeAutomodMessageNotice(messageId) {
  let obj = dispatcher;
  obj = { type: "REMOVE_AUTOMOD_MESSAGE_NOTICE", messageId };
  obj.dispatch(obj);
};