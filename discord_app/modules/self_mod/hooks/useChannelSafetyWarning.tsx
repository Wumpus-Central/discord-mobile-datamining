// discord_app/modules/self_mod/hooks/useChannelSafetyWarning.tsx
import handleConnectionOpen from "../ChannelSafetyWarningsStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/hooks/useChannelSafetyWarning.tsx");

export const useChannelSafetyWarning = function useChannelSafetyWarning(channelId, LIKELY_ATO) {
  const _require = channelId;
  dependencyMap = LIKELY_ATO;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_2.getChannelSafetyWarnings(closure_0), items1);
  const found = stateFromStores.filter((item, index) => item.type === closure_1);
  return found.find((item, index) => {
    let tmp = null == item.dismiss_timestamp;
    if (tmp) {
      let expiry;
      if (item != null) {
        expiry = item.expiry;
      }
      let tmp3 = null == expiry;
      if (!tmp3) {
        const _Date = Date;
        const _Date2 = Date;
        const parsed = Date.parse(item.expiry);
        tmp3 = parsed > Date.now();
      }
      tmp = tmp3;
    }
    return tmp;
  });
};