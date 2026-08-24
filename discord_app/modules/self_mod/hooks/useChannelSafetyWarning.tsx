// discord_app/modules/self_mod/hooks/useChannelSafetyWarning.tsx
import closure_2 from "../ChannelSafetyWarningsStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/hooks/useChannelSafetyWarning.tsx");

export const useChannelSafetyWarning = function useChannelSafetyWarning(channelId, LIKELY_ATO) {
  const _require = channelId;
  dependencyMap = LIKELY_ATO;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = _initialize.useStateFromStores(items, () => closure_1_2.getChannelSafetyWarnings(closure_0), items1);
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