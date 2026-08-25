// === Module 4847: isChannelTypeMentionable ===

// Module 4847 (isChannelTypeMentionable)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

({ isGuildSelectableChannelType: c0, isGuildVocalChannelType: closure_1 } = createChannelRecord);
const result = set.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = callback(type);
  if (!tmp) {
    tmp = callback2(type);
  }
  return tmp;
};