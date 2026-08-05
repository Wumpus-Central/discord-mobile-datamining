// discord_app/modules/read_states/ReadStateUtils.tsx
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UnreadSetting } from "ReadStateTypes";

const require = arg1;
const result = require("ReadStateTypes").fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

export const getHasImportantUnread = function getHasImportantUnread(channel) {
  let hasUnreadResult = generateOldThreadCutoff.hasUnread(channel.id);
  if (hasUnreadResult) {
    hasUnreadResult = updateUserGuildSettingsInternal.resolveUnreadSetting(channel) === UnreadSetting.ALL_MESSAGES;
  }
  return hasUnreadResult;
};
export const useHasImportantUnread = function useHasImportantUnread(arg0) {
  const _require = arg0;
  const items = [generateOldThreadCutoff, updateUserGuildSettingsInternal];
  return _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let hasUnreadResult = outer1_2.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = outer1_3.resolveUnreadSetting(id) === outer1_4.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};