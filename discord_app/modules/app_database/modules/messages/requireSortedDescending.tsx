// === Module 5442: requireSortedDescending ===

// Module 5442 (requireSortedDescending)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef38 from "module_38" /* 38 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp4 = messages.length <= 2;
  const tmp3 = _modDef38;
  if (!tmp4) {
    const tmpResult = SnowflakeUtilsDefault;
    tmp4 = tmpResult.compare(messages[0].id, messages[messages.length - 1].id) >= 0;
  }
  tmp3(tmp4, "messages must be sorted in descending order.");
};