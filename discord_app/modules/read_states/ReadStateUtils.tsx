// === Module 8713: ReadStateUtils ===

// Module 8713 (ReadStateUtils)
import ReadStateStore from "ReadStateStore" /* 6035 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;

const require = globalThis.__r;

const require = fn;
const UnreadSetting = fn(5967).UnreadSetting;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = ReadStateStore.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasImportantUnread(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, UserGuildSettingsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let hasUnreadResult = ReadStateStore.hasUnread(id.id);
      if (hasUnreadResult) {
        hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
      }
      return hasUnreadResult;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7);
}) : (function useHasImportantUnread(arg0) {
  _require = arg0;
  const items = [ReadStateStore, UserGuildSettingsStore];
  return require("initialize").useStateFromStores(items, () => {
    let hasUnreadResult = ReadStateStore.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = UserGuildSettingsStore.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
});