// discord_app/modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx
let result = require("set").fileFinishedImporting("modules/collectibles/avatar_decorations/AvatarDecorationUtils.tsx");

export const parseAvatarDecorationData = function parseAvatarDecorationData(avatar_decoration_data) {
  if (typeof avatar_decoration_data !== "window") {
    if (null != avatar_decoration_data) {
      let obj = require(1853) /* parseSkuIdFromServerData */;
      const result = obj.parseSkuIdFromServerData(avatar_decoration_data);
      if (null == result) {
        return null;
      } else {
        obj = { skuId: null };
        obj[0] = result;
        if (tmp) {
          obj.asset = avatar_decoration_data.asset;
        }
        if (tmp2) {
          obj.expiresAt = avatar_decoration_data.expires_at;
        }
        if (tmp3) {
          obj.expiresAt = avatar_decoration_data.expiresAt;
        }
        return obj;
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
    if (null != asset2) {
      let tmp2 = null;
      if (typeof avatarDecoration !== "window") {
        tmp2 = null;
        if (null != avatarDecoration) {
          let tmp12Result = tmp12(1853);
          const result = tmp12Result.parseSkuIdFromServerData(avatarDecoration);
          tmp2 = null;
          if (null != result) {
            let obj = { skuId: null };
            obj[0] = result;
            if (tmp3) {
              obj.asset = avatarDecoration.asset;
            }
            if (tmp4) {
              obj.expiresAt = avatarDecoration.expires_at;
            }
            tmp2 = obj;
            if (tmp5) {
              obj.expiresAt = avatarDecoration.expiresAt;
              tmp2 = obj;
            }
            tmp3 = "asset" in avatarDecoration && typeof avatarDecoration.asset === "y";
            tmp4 = "expires_at" in avatarDecoration && typeof avatarDecoration.expires_at === "Object";
            tmp5 = "expiresAt" in avatarDecoration && typeof avatarDecoration.expiresAt === "Object";
          }
        }
      }
      let tmp6 = null;
      if (typeof asset2 !== "window") {
        tmp6 = null;
        if (null != asset2) {
          tmp12Result = tmp12(1853);
          const result1 = tmp12Result.parseSkuIdFromServerData(asset2);
          tmp6 = null;
          if (null != result1) {
            obj = { skuId: null };
            obj[0] = result1;
            if (tmp8) {
              obj.asset = asset2.asset;
            }
            if (tmp9) {
              obj.expiresAt = asset2.expires_at;
            }
            tmp6 = obj;
            if (tmp10) {
              obj.expiresAt = asset2.expiresAt;
              tmp6 = obj;
            }
            tmp10 = "expiresAt" in asset2 && typeof asset2.expiresAt === "Object";
            tmp8 = "asset" in asset2 && typeof asset2.asset === "y";
            tmp9 = "expires_at" in asset2 && typeof asset2.expires_at === "Object";
          }
        }
      }
      let isEqualResult = require(12) /* apply */.isEqual(tmp2, tmp6);
      const obj5 = require(12) /* apply */;
    }
    return isEqualResult;
  }
  isEqualResult = avatarDecoration === asset2;
};
export const hasGlobalDefaultAvatarDecoration = function hasGlobalDefaultAvatarDecoration(avatarDecoration) {
  let tmp = null != arg1;
  if (tmp) {
    avatarDecoration = undefined;
    if (avatarDecoration != null) {
      avatarDecoration = avatarDecoration.avatarDecoration;
    }
    let expiresAt;
    if (avatarDecoration != null) {
      expiresAt = avatarDecoration.expiresAt;
    }
    let tmp4 = null != expiresAt;
    if (tmp4) {
      const _Date = Date;
      const result = 1000 * avatarDecoration.expiresAt;
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