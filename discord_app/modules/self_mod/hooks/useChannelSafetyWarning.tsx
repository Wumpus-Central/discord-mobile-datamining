// === Module 10973: useChannelSafetyWarning ===

// Module 10973 (useChannelSafetyWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/hooks/useChannelSafetyWarning.tsx");

export const useChannelSafetyWarning = function useChannelSafetyWarning(channelId, LIKELY_ATO) {
  _require = channelId;
  dependencyMap = LIKELY_ATO;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0), items1);
  const found = stateFromStores.filter((type) => type.type === closure_1);
  return found.find((dismiss_timestamp) => {
    let tmp = null == dismiss_timestamp.dismiss_timestamp;
    if (tmp) {
      let expiry;
      if (dismiss_timestamp != null) {
        expiry = dismiss_timestamp.expiry;
      }
      let tmp3 = null == expiry;
      if (!tmp3) {
        const _Date = Date;
        const _Date2 = Date;
        const parsed = Date.parse(dismiss_timestamp.expiry);
        tmp3 = parsed > Date.now();
      }
      tmp = tmp3;
    }
    return tmp;
  });
};