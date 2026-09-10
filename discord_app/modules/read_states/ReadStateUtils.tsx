// === Module 9915: ReadStateUtils ===

// Module 9915 (ReadStateUtils)
import ReadStateStore from "ReadStateStore" /* 4620 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4786 */;

const require = fn;
const UnreadSetting = fn(4787).UnreadSetting;
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