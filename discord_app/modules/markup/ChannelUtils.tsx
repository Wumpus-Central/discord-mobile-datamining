// === Module 6818: isChannelTypeMentionable ===

// Module 6818 (isChannelTypeMentionable)
import obj132 from "obj132" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;

({ isGuildSelectableChannelType: c0, isGuildVocalChannelType: closure_1 } = createChannelRecord);
const result = obj132.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = callback(type);
  if (!tmp) {
    tmp = callback2(type);
  }
  return tmp;
};