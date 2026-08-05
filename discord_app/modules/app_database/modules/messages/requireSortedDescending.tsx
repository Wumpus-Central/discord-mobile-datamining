import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { DISCORD_EPOCH } from "../../../../utils/SnowflakeUtils.tsx";
// discord_app/modules/app_database/modules/messages/requireSortedDescending.tsx
const result = require("set").fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp4 = messages.length <= 2;
  if (!tmp4) {
    tmp4 = DISCORD_EPOCH.compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const tmpResult = DISCORD_EPOCH;
  }
  00038__(tmp4, "messages must be sorted in descending order.");
};