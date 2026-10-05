// === Module 1972: AvatarDecorationUtils ===

// Module 1972 (AvatarDecorationUtils)
import _mod12 from "module_12" /* 12 */;
import mappers from "mappers" /* 1973 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx");

export const parseAvatarDecorationData = function parseAvatarDecorationData(avatar_decoration_data) {
  if (typeof avatar_decoration_data === "object") {
    if (null != avatar_decoration_data) {
      const obj = mappers;
      const result = obj.parseSkuIdFromServerData(avatar_decoration_data);
      if (null == result) {
        return null;
      } else {
        const obj2 = { skuId: result };
        const tmp = "asset" in avatar_decoration_data && typeof avatar_decoration_data.asset === "string";
        if (tmp) {
          obj2.asset = avatar_decoration_data.asset;
        }
        const tmp2 = "expires_at" in avatar_decoration_data && typeof avatar_decoration_data.expires_at === "number";
        if (tmp2) {
          obj2.expiresAt = avatar_decoration_data.expires_at;
        }
        const tmp3 = "expiresAt" in avatar_decoration_data && typeof avatar_decoration_data.expiresAt === "number";
        if (tmp3) {
          obj2.expiresAt = avatar_decoration_data.expiresAt;
        }
        return obj2;
      }
    }
  }
  return null;
};
export const isAvatarDecorationExpired = function isAvatarDecorationExpired(avatarDecoration) {
  let expiresAt;
  if (avatarDecoration != null) {
    expiresAt = avatarDecoration.expiresAt;
  }
  let tmp2 = null != expiresAt;
  if (tmp2) {
    const _Date = Date;
    const result = 1000 * avatarDecoration.expiresAt;
    tmp2 = result < Date.now();
  }
  return tmp2;
};
export const isEqualAvatarDecoration = function isEqualAvatarDecoration(avatarDecoration, asset2) {
  if (null != avatarDecoration) {
    let isEqualResult;
    if (null != asset2) {
      let tmp2 = null;
      const isEqual = _mod12.isEqual;
      _mod12;
      if (typeof avatarDecoration === "object") {
        tmp2 = null;
        if (null != avatarDecoration) {
          const tmp12Result = mappers;
          const result = tmp12Result.parseSkuIdFromServerData(avatarDecoration);
          tmp2 = null;
          if (null != result) {
            const obj = { skuId: result };
            const tmp3 = "asset" in avatarDecoration && typeof avatarDecoration.asset === "string";
            if (tmp3) {
              obj.asset = avatarDecoration.asset;
            }
            const tmp4 = "expires_at" in avatarDecoration && typeof avatarDecoration.expires_at === "number";
            if (tmp4) {
              obj.expiresAt = avatarDecoration.expires_at;
            }
            tmp2 = obj;
            const tmp5 = "expiresAt" in avatarDecoration && typeof avatarDecoration.expiresAt === "number";
            if (tmp5) {
              obj.expiresAt = avatarDecoration.expiresAt;
              tmp2 = obj;
            }
          }
        }
      }
      let tmp6 = null;
      if (typeof asset2 === "object") {
        tmp6 = null;
        if (null != asset2) {
          const tmp12Result2 = mappers;
          const result1 = tmp12Result2.parseSkuIdFromServerData(asset2);
          tmp6 = null;
          if (null != result1) {
            const obj2 = { skuId: result1 };
            const tmp8 = "asset" in asset2 && typeof asset2.asset === "string";
            if (tmp8) {
              obj2.asset = asset2.asset;
            }
            const tmp9 = "expires_at" in asset2 && typeof asset2.expires_at === "number";
            if (tmp9) {
              obj2.expiresAt = asset2.expires_at;
            }
            tmp6 = obj2;
            const tmp10 = "expiresAt" in asset2 && typeof asset2.expiresAt === "number";
            if (tmp10) {
              obj2.expiresAt = asset2.expiresAt;
              tmp6 = obj2;
            }
          }
        }
      }
      isEqualResult = isEqual(tmp2, tmp6);
    }
    return isEqualResult;
  }
  isEqualResult = avatarDecoration === asset2;
};
export const hasGlobalDefaultAvatarDecoration = function hasGlobalDefaultAvatarDecoration(avatarDecoration, arg1) {
  let tmp = null != arg1;
  if (tmp) {
    let avatarDecoration1;
    if (avatarDecoration != null) {
      avatarDecoration1 = avatarDecoration.avatarDecoration;
    }
    let expiresAt;
    if (avatarDecoration1 != null) {
      expiresAt = avatarDecoration1.expiresAt;
    }
    let tmp4 = null != expiresAt;
    if (tmp4) {
      const _Date = Date;
      const result = 1000 * avatarDecoration1.expiresAt;
      tmp4 = result < Date.now();
    }
    tmp = !tmp4;
  }
  if (tmp) {
    let asset;
    if (avatarDecoration != null) {
      avatarDecoration = avatarDecoration.avatarDecoration;
      if (avatarDecoration != null) {
        asset = avatarDecoration.asset;
      }
    }
    tmp = null != asset;
  }
  return tmp;
};