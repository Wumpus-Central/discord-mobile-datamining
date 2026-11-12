// === Module 10191: ReadStateUtils ===

// Module 10191 (ReadStateUtils)
import ReadStateStore from "ReadStateStore" /* 6952 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6895 */;

const require = globalThis.__r;

const require = fn;
const UnreadSetting = fn(6896).UnreadSetting;
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export function getHasImportantUnread(channel) {
  let hasUnreadResult = ReadStateStore.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
}
export function useHasImportantUnread(arg0) {
  _require = arg0;
  items = [ReadStateStore, UserGuildSettingsStore];
  return require("initialize").useStateFromStores(items, () => {
    let hasUnreadResult = ReadStateStore.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
}