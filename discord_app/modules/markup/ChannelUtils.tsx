// === Module 6189: markup/ChannelUtils ===

// Module 6189 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 4994 */;
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