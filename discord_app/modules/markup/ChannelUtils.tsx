// === Module 4961: isChannelTypeMentionable ===

// Module 4961 (isChannelTypeMentionable)
import set from "set" /* 2 */;
import createChannelRecord from "createChannelRecord" /* 1390 */;

({ isGuildSelectableChannelType: c0, isGuildVocalChannelType: closure_1 } = createChannelRecord);
const result = set.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = callback(type);
  if (!tmp) {
    tmp = callback2(type);
  }
  return tmp;
};