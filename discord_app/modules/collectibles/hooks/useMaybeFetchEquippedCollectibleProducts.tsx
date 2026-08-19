// discord_app/modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx
import noop from "../../../../_runtime/00019_noop.js";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";

const require = fn;
function useEquippedCollectibleSkuIds(id, guildId) {
  const _require = id;
  let obj = _require(skuId1[2]);
  let items = [skuId3];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => skuId3.getUser(closure_0), items1);
  const tmp2 = skuId(skuId1[3])(id, guildId);
  const avatarDecoration = _require(skuId1[4]).useAvatarDecoration(stateFromStores, guildId);
  const obj2 = _require(skuId1[4]);
  obj = { user: stateFromStores, guildId };
  const nameplate = _require(skuId1[5]).useNameplate(obj);
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
    return items.filter((item, index) => null != item);
  }, items2);
}
let result = require("obj132").fileFinishedImporting("modules/collectibles/hooks/useMaybeFetchEquippedCollectibleProducts.tsx");

export default function useMaybeFetchEquippedCollectibleProducts(id, guildId) {
  closure_0 = arg2;
  let tmp = useEquippedCollectibleSkuIds(id, guildId);
  closure_1 = tmp;
  const items = [arg2, tmp];
  const effect = React.useEffect(() => {
    let tmp = callback;
    if (callback) {
      tmp = 0 !== length.length;
    }
    if (tmp) {
      callback(dependencyMap[6]);
      const obj = { skuIds: null };
      obj[0] = length;
      const result = obj.maybeFetchProductsBySkuIds(obj);
    }
  }, items);
};
export { useEquippedCollectibleSkuIds };