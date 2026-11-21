// === Module 5957: markup/ChannelUtils ===

// Module 5957 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4766 */;
import size from "module_2" /* 2 */;

({ isGuildSelectableChannelType: closure_0, isGuildVocalChannelType: closure_1 } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export function isChannelTypeMentionable(type) {
  let tmp = React(type);
  if (!tmp) {
    tmp = duration(type);
  }
  return tmp;
}