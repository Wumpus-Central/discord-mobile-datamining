// discord_app/modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx
import set from "../../../../../_runtime/00002_set.js";
import noop from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../stores/UserStore.tsx";

const useMemo = noop.useMemo;
const result = set.fileFinishedImporting(
  "modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx",
);

export default function useCollectiblesExternalGatewayFacet(arg0) {
  const _require = arg0;
  let items = [closure_3];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let obj = callback(stateFromStores[3]);
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(callback, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      obj = { line_items: null };
      obj = { external_product_id: null };
      obj[0] = collectibleGoogleSkuId;
      const items = [obj];
      obj[0] = items;
      return obj;
    }
  }, items1);
}
