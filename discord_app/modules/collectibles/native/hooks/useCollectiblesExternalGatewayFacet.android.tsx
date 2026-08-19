// discord_app/modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import noop from "../../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";

const useMemo = noop.useMemo;
const result = obj132.fileFinishedImporting("modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx");

export default function useCollectiblesExternalGatewayFacet(arg0) {
  const _require = arg0;
  let items = [closure_3];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let obj = callback(stateFromStores[3]);
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(callback, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      obj = { external_product_id: null };
      obj[0] = collectibleGoogleSkuId;
      const items = [obj];
      obj[0] = items;
      return obj;
    }
  }, items1);
};