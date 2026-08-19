// === Module 7605: getHasImportantUnread ===

// Module 7605 (getHasImportantUnread)
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = closure_2.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = closure_3.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = function useHasImportantUnread(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3];
  return _require(589).useStateFromStores(items, () => {
    let hasUnreadResult = closure_1_2.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = closure_1_3.resolveUnreadSetting(id) === UnreadSetting.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};