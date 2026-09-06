// discord_app/modules/hub/HubUnreadUtils.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import GuildDirectoryUtils from "../directory_channels/GuildDirectoryUtils.tsx";
import GuildDirectoryStore from "../directory_channels/GuildDirectoryStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubUnreadUtils.tsx");

export const useHubUnreadCount = function useHubUnreadCount(arg0) {
  _require = arg0;
  const items = [GuildDirectoryStore, ReadStateStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null == closure_0) {
        return 0;
      } else {
        const ackMessageIdResult = ReadStateStore.ackMessageId(tmp.id);
        closure_0 = ackMessageIdResult;
        if (null == ackMessageIdResult) {
          return 0;
        } else {
          let directoryEntries = GuildDirectoryStore.getDirectoryEntries(tmp.id);
          if (directoryEntries == null) {
            directoryEntries = {};
          }
          const values = Object.values(directoryEntries);
          const _Math = Math;
          const found = values.filter((createdAt) => {
            const time = new Date(createdAt.createdAt).getTime();
            const date = new Date(createdAt.createdAt);
            return time > SnowflakeUtilsDefault.extractTimestamp(ackMessageIdResult);
          });
          return Math.min(GuildDirectoryUtils.MAX_CATEGORY_SERVERS, found.length);
        }
      }
    },
    items1,
  );
};
