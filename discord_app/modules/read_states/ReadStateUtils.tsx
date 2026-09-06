// === Module 9845: ReadStateUtils ===

// Module 9845 (ReadStateUtils)
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;

const require = fn;
const UnreadSetting = fn(4742).UnreadSetting;
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = ReadStateStore.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = function useHasImportantUnread(arg0) {
  _require = arg0;
  const items = [ReadStateStore, UserGuildSettingsStore];
  return require("initialize").useStateFromStores(items, () => {
    let hasUnreadResult = ReadStateStore.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};