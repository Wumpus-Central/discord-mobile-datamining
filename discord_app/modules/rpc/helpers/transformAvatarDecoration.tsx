// === Module 9295: transformAvatarDecoration ===

// Module 9295 (transformAvatarDecoration)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1984 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/rpc/helpers/transformAvatarDecoration.tsx");

export default function transformAvatarDecoration(avatar_decoration_data) {
  const result = AvatarDecorationUtils.parseAvatarDecorationData(avatar_decoration_data);
  let skuId;
  if (result != null) {
    skuId = result.skuId;
  }
  let tmp3 = null;
  if (null != skuId) {
    tmp3 = null;
    if (null != result.asset) {
      const obj3 = { asset: null, sku_id: null, expires_at: null };
      ({ asset: obj2.asset, skuId: obj2.sku_id, expiresAt } = result);
      if (expiresAt == null) {
        expiresAt = null;
      }
      obj3.expires_at = expiresAt;
      tmp3 = obj3;
    }
  }
  return tmp3;
};