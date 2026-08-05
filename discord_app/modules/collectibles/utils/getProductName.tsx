// discord_app/modules/collectibles/utils/getProductName.tsx
import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getProductOrbPrice } from "CollectiblesProductUtils.tsx";
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getProductName = function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = getSystemLocale /* getSystemLocale */.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1236).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj[0], variantLabel: obj[1] } = product);
          let name = intl.formatToPlainString(tmp(1236).t.BZN5k2, obj);
        }
        return name;
      }
    }
    name = product.name;
  }
};
export const getPurchasedProductName = function getPurchasedProductName(baseVariantName) {
  if (null == baseVariantName) {
    return "";
  } else {
    const string = getSystemLocale /* getSystemLocale */.intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = tmp(1236).intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj[0], variantLabel: obj[1] } = baseVariantName);
        let name = intl.formatToPlainString(tmp(1236).t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(closure_0) {
  if (null == closure_0) {
    let obj1 = getProductOrbPrice /* getProductOrbPrice */;
    const productType = obj1.getProductType(closure_0);
    if (CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.AVATAR_DECORATION === productType) {
      const intl5 = tmp3(1236).intl;
      let obj = { product: null };
      obj[0] = "";
      return intl5.formatToPlainString(tmp3(1236).t.lvBzLi, obj);
    } else if (tmp3(1901).CollectiblesItemType.PROFILE_EFFECT === productType) {
      const intl4 = tmp3(1236).intl;
      obj = { product: null };
      obj[0] = "";
      return intl4.formatToPlainString(tmp3(1236).t.eR7moP, obj);
    } else if (tmp3(1901).CollectiblesItemType.NAMEPLATE === productType) {
      const intl3 = tmp3(1236).intl;
      obj1 = { product: null };
      obj1[0] = "";
      return intl3.formatToPlainString(tmp3(1236).t.YFOwHj, obj1);
    } else if (tmp3(1901).CollectiblesItemType.PROFILE_FRAME === productType) {
      const intl2 = tmp3(1236).intl;
      const obj2 = { product: null };
      obj2[0] = "";
      return intl2.formatToPlainString(tmp3(1236).t.vov8LX, obj2);
    } else {
      return "";
    }
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = getSystemLocale /* getSystemLocale */.intl.string;
    if ("baseVariantName" in closure_0) {
      const intl = BZN5k2(1236).intl;
      BZN5k2 = BZN5k2(1236).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj[0], variantLabel: obj[1] } = closure_0);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = closure_0.name;
  }
};