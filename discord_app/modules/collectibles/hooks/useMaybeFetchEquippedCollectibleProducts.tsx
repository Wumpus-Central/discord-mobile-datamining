// discord_app/modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx
import StorefrontProductActionCreators from "../../storefront/StorefrontProductActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function useEquippedCollectibleSkuIds(id, guildId) {
  _require = id;
  let obj = require("initialize");
  let items = [skuId3];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(closure_0), items1);
  const tmp2 = skuId(skuId1[3])(id, guildId);
  const avatarDecoration = require("useAvatarDecoration").useAvatarDecoration(stateFromStores, guildId);
  const obj2 = require("useAvatarDecoration");
  obj = { user: stateFromStores, guildId };
  const nameplate = require("useNameplate").useNameplate(obj);
  skuId = undefined;
  if (avatarDecoration != null) {
    skuId = avatarDecoration.skuId;
  }
  skuId1 = undefined;
  if (nameplate != null) {
    skuId1 = nameplate.skuId;
  }
  let skuId2;
  if (tmp2 != null) {
    const profileEffect = tmp2.profileEffect;
    if (profileEffect != null) {
      skuId2 = profileEffect.skuId;
    }
  }
  skuId3 = undefined;
  if (tmp2 != null) {
    const profileFrame = tmp2.profileFrame;
    if (profileFrame != null) {
      skuId3 = profileFrame.skuId;
    }
  }
  const items2 = [skuId, skuId1, skuId2, skuId3];
  return skuId2.useMemo(() => {
    const items = [skuId, skuId1, skuId2, skuId3];
    return items.filter((item) => null != item);
  }, items2);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx");

export default function useMaybeFetchEquippedCollectibleProducts(id, guildId, arg2) {
  closure_0 = arg2;
  let tmp = useEquippedCollectibleSkuIds(id, guildId);
  const skuIds = tmp;
  const items = [arg2, tmp];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = 0 !== skuIds.length;
    }
    if (tmp) {
      const obj = { skuIds };
      const result = obj.maybeFetchProductsBySkuIds(obj);
    }
  }, items);
}
export { useEquippedCollectibleSkuIds };
