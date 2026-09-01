// discord_app/modules/markup/ChannelUtils.tsx
import set from "../../../_runtime/00002_set.js";
import createChannelRecord from "../../records/ChannelRecord.tsx";

({ isGuildSelectableChannelType: c0, isGuildVocalChannelType: closure_1 } = createChannelRecord);
const result = set.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  let tmp = callback(type);
  if (!tmp) {
    tmp = callback2(type);
  }
  return tmp;
};
