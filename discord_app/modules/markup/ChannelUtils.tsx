// discord_app/modules/markup/ChannelUtils.tsx
import ChannelRecord from "../../records/ChannelRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _window;
let map;
({ isGuildSelectableChannelType: _window, isGuildVocalChannelType: map } = ChannelRecord);
const result = size.fileFinishedImporting("modules/markup/ChannelUtils.tsx");

export const isChannelTypeMentionable = function isChannelTypeMentionable(type) {
  const tmp = React(type) || map(type);
  return tmp;
};
