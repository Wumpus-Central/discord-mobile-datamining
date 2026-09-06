// discord_app/modules/auth/PromoEmailConsentStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const usePromoEmailConsentStore = module_560.create(() => ({ required: false, checked: false, preChecked: false }));
const result = size.fileFinishedImporting("modules/auth/PromoEmailConsentStore.tsx");

export const setPromoEmailConsentState = function setPromoEmailConsentState(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => obj.setState(closure_0));
};
export const setPromoEmailConsentChecked = function setPromoEmailConsentChecked(checked) {
  _require = checked;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = { checked };
    return obj.setState(obj);
  });
};
export { usePromoEmailConsentStore };