// discord_app/modules/read_states/ReadStateUtils.tsx
import closure_2 from "generateOldThreadCutoff" /* 4772 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 5043 */;
import { UnreadSetting } from "ReadStateTypes" /* 5044 */;
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/read_states/ReadStateUtils.tsx");

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
  return _initialize.useStateFromStores(items, () => {
    let hasUnreadResult = closure_1_2.hasUnread(id.id);
    if (hasUnreadResult) {
      hasUnreadResult = closure_1_3.resolveUnreadSetting(id) === closure_1_4.ALL_MESSAGES;
    }
    return hasUnreadResult;
  });
};