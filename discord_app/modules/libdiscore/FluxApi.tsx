// discord_app/modules/libdiscore/FluxApi.tsx
import set from "../../../_runtime/00002_set.js";
import isBlockedDomain from "../../../discord_common/js/packages/libdiscore/js_shim/js/shim.native.tsx";

isBlockedDomain = isBlockedDomain.getFluxApi();
const result = set.fileFinishedImporting("modules/libdiscore/FluxApi.tsx");

export const FLUX_API = isBlockedDomain;
export const hasFluxApi = function hasFluxApi() {
  return null != isBlockedDomain;
};
