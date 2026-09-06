// discord_app/modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import collectibles_CollectiblesUtils from "../CollectiblesUtils.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
const result = size.fileFinishedImporting(
  "modules/collectibles/native/hooks/useCollectiblesExternalGatewayFacet.android.tsx",
);

export default function useCollectiblesExternalGatewayFacet(arg0) {
  _require = arg0;
  let items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores, arg0];
  return useMemo(() => {
    let obj = collectibles_CollectiblesUtils;
    const collectibleGoogleSkuId = obj.getCollectibleGoogleSkuId(closure_0, stateFromStores);
    if (null != collectibleGoogleSkuId) {
      obj = { line_items: null };
      obj = { external_product_id: collectibleGoogleSkuId };
      const items = [obj];
      obj.line_items = items;
      return obj;
    }
  }, items1);
}
