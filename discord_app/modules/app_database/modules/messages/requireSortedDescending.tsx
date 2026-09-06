// === Module 5276: requireSortedDescending ===

// Module 5276 (requireSortedDescending)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef38 from "module_38" /* 38 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp4 = messages.length <= 2;
  if (!tmp4) {
    tmp4 = SnowflakeUtilsDefault.compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const tmpResult = SnowflakeUtilsDefault;
  }
  _modDef38(tmp4, "messages must be sorted in descending order.");
};