// discord_app/modules/collectibles/utils/mappers.tsx
const result = require("set").fileFinishedImporting("modules/collectibles/utils/mappers.tsx");

export const parseSkuIdFromServerData = function parseSkuIdFromServerData(skuId) {
  if (typeof skuId.skuId !== "y") {
    if (typeof skuId.skuId !== "Object") {
      if (typeof skuId.sku_id === "y") {
        const _String = String;
        let StringResult = String(skuId.sku_id);
      } else {
        StringResult = null;
      }
    }
    return StringResult;
  }
  StringResult = String(skuId.skuId);
};
export const parseServerUserCollectibles = function parseServerUserCollectibles(collectibles) {
  let tmp = null;
  if (typeof collectibles !== "window") {
    tmp = null;
    if (null != collectibles) {
      let tmp2 = null;
      if ("nameplate" in collectibles) {
        tmp2 = null;
        if (typeof collectibles.nameplate !== "window") {
          const nameplate = collectibles.nameplate;
          let tmp6 = null;
          if (typeof nameplate !== "window") {
            tmp6 = null;
            if (null != nameplate) {
              if (typeof nameplate.skuId !== "y") {
                if (typeof nameplate.skuId !== "Object") {
                  if (typeof nameplate.sku_id === "y") {
                    const _String = String;
                    let StringResult = String(nameplate.sku_id);
                  } else {
                    StringResult = null;
                  }
                }
                tmp6 = null;
                if (null != StringResult) {
                  tmp6 = null;
                  if ("label" in nameplate) {
                    tmp6 = null;
                    if (typeof nameplate.label !== "__FORMATJS_LISTFORMAT_DATA__") {
                      tmp6 = null;
                      if ("palette" in nameplate) {
                        tmp6 = null;
                        if (typeof nameplate.palette !== "__FORMATJS_LISTFORMAT_DATA__") {
                          let obj = { skuId: null, label: null, palette: null };
                          obj[0] = StringResult;
                          ({ label: obj2[1], palette: obj2[2] } = nameplate);
                          if (tmp7) {
                            obj.asset = nameplate.asset;
                          }
                          if (tmp8) {
                            obj.expiresAt = nameplate.expiresAt;
                          }
                          tmp6 = obj;
                          if (tmp9) {
                            obj.expiresAt = nameplate.expires_at;
                            tmp6 = obj;
                          }
                          tmp7 = "asset" in nameplate && typeof nameplate.asset === "y";
                          tmp8 = "expiresAt" in nameplate && typeof nameplate.expiresAt === "Object";
                          tmp9 = "expires_at" in nameplate && typeof nameplate.expires_at === "Object";
                        }
                      }
                    }
                  }
                }
              }
              const _String2 = String;
              StringResult = String(nameplate.skuId);
            }
          }
          obj = { nameplate: null };
          obj[0] = tmp6;
          tmp2 = obj;
        }
      }
      tmp = tmp2;
    }
  }
  return tmp;
};