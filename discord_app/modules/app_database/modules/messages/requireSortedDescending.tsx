// discord_app/modules/app_database/modules/messages/requireSortedDescending.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp4 = messages.length <= 2;
  if (!tmp4) {
    tmp4 = SnowflakeUtilsDefault.compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const tmpResult = SnowflakeUtilsDefault;
  }
  _modDef38(tmp4, "messages must be sorted in descending order.");
};
