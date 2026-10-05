// discord_app/modules/collectibles/utils/mappers.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/utils/mappers.tsx");

export const parseSkuIdFromServerData = function parseSkuIdFromServerData(skuId) {
  if (typeof skuId.skuId !== "string") {
    let StringResult;
    if (typeof skuId.skuId !== "number") {
      if (typeof skuId.sku_id === "string") {
        const _String = String;
        StringResult = String(skuId.sku_id);
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
  if (typeof collectibles === "object") {
    tmp = null;
    if (null != collectibles) {
      let tmp2 = null;
      if ("nameplate" in collectibles) {
        tmp2 = null;
        if (typeof collectibles.nameplate === "object") {
          const nameplate = collectibles.nameplate;
          let tmp6 = null;
          if (typeof nameplate === "object") {
            tmp6 = null;
            if (null != nameplate) {
              if (typeof nameplate.skuId !== "string") {
                let StringResult;
                if (typeof nameplate.skuId !== "number") {
                  if (typeof nameplate.sku_id === "string") {
                    const _String = String;
                    StringResult = String(nameplate.sku_id);
                  } else {
                    StringResult = null;
                  }
                }
                tmp6 = null;
                if (null != StringResult) {
                  tmp6 = null;
                  if ("label" in nameplate) {
                    tmp6 = null;
                    if (typeof nameplate.label === "string") {
                      tmp6 = null;
                      if ("palette" in nameplate) {
                        tmp6 = null;
                        if (typeof nameplate.palette === "string") {
                          const obj3 = { skuId: StringResult, label: null, palette: null };
                          ({ label: obj2.label, palette: obj2.palette } = nameplate);
                          const tmp7 = "asset" in nameplate && typeof nameplate.asset === "string";
                          if (tmp7) {
                            obj3.asset = nameplate.asset;
                          }
                          const tmp8 = "expiresAt" in nameplate && typeof nameplate.expiresAt === "number";
                          if (tmp8) {
                            obj3.expiresAt = nameplate.expiresAt;
                          }
                          tmp6 = obj3;
                          const tmp9 = "expires_at" in nameplate && typeof nameplate.expires_at === "number";
                          if (tmp9) {
                            obj3.expiresAt = nameplate.expires_at;
                            tmp6 = obj3;
                          }
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
          tmp2 = { nameplate: tmp6 };
          const obj = { nameplate: tmp6 };
        }
      }
      tmp = tmp2;
    }
  }
  return tmp;
};
