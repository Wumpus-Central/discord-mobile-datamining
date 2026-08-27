// === Module 5172: requireSortedDescending ===

// Module 5172 (requireSortedDescending)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import _modDef38 from "module_38" /* 38 */;

const result = set.fileFinishedImporting("modules/app_database/modules/messages/requireSortedDescending.tsx");

export const requireSortedDescending = function requireSortedDescending(messages) {
  let tmp4 = messages.length <= 2;
  if (!tmp4) {
    tmp4 = DISCORD_EPOCHDefault.compare(messages[0].id, messages[messages.length - 1].id) >= 0;
    const tmpResult = DISCORD_EPOCHDefault;
  }
  _modDef38(tmp4, "messages must be sorted in descending order.");
};