// === Module 5008: markup/ChannelUtils ===

// Module 5008 (markup/ChannelUtils)
import ChannelRecord from "ChannelRecord" /* 1961 */;
import size from "module_2" /* 2 */;

({ isGuildSelectableChannelType: closure_0, isGuildVocalChannelType: closure_1 } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = React(type);
  if (!tmp) {
    tmp = framebus(type);
  }
  return tmp;
};