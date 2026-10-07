// discord_app/modules/message_request/MessageRequestStoreUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/message_request/MessageRequestStoreUtils.tsx");

export const sortChannelIds = function sortChannelIds(found) {
  const sorted = found.sort((lastMessageId, lastMessageId2) =>
    SnowflakeUtilsDefault.compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId),
  );
  return sorted.reverse();
};
