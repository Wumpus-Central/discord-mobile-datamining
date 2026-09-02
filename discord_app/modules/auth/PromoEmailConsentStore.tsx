// discord_app/modules/auth/PromoEmailConsentStore.tsx
import set from "../../../_runtime/00002_set.js";
import keys from "../../../_runtime/00641_keys.js";

const obj = keys.create(() => ({ required: false, checked: false, preChecked: false }));
const result = set.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
    closure_1_2.setState(closure_0),
  );
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(arg0) {
  const _require = arg0;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() =>
    closure_1_2.setState({ checked: closure_0 }),
  );
};
export const usePromoEmailConsentStore = obj;
