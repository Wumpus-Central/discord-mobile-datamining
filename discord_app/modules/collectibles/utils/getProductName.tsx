// discord_app/modules/collectibles/utils/getProductName.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import getProductOrbPrice from "CollectiblesProductUtils.tsx";

const result = set.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getCardProductName = function getCardProductName(product) {
  if (null == product) {
    let str2 = "";
    if (null != product) {
      str2 = "";
      if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        str2 = "";
        if (product.items.length > 0) {
          const intl2 = tmp3(1114).intl;
          let obj = { count: null, productName: null };
          obj[0] = product.items.length;
          obj[1] = "";
          str2 = intl2.format(tmp3(1114).t.UTc0ny, obj);
        }
      }
    }
    return str2;
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = getSystemLocale.intl.string;
    if ("baseVariantName" in product) {
      const intl = BZN5k2(1114).intl;
      BZN5k2 = BZN5k2(1114).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj[0], variantLabel: obj[1] } = product);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = product.name;
  }
};
export const getProductName = function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = getSystemLocale.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1114).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj[0], variantLabel: obj[1] } = product);
          let name = intl.formatToPlainString(tmp(1114).t.BZN5k2, obj);
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
    const string = getSystemLocale.intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = tmp(1114).intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj[0], variantLabel: obj[1] } = baseVariantName);
        let name = intl.formatToPlainString(tmp(1114).t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(closure_0) {
  if (null == closure_0) {
    obj1 = getProductOrbPrice;
    const productType = obj1.getProductType(closure_0);
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
      const intl5 = tmp3(1114).intl;
      let obj = { product: null };
      obj[0] = "";
      return intl5.formatToPlainString(tmp3(1114).t.lvBzLi, obj);
    } else if (tmp3(1889).CollectiblesItemType.PROFILE_EFFECT === productType) {
      const intl4 = tmp3(1114).intl;
      obj = { product: null };
      obj[0] = "";
      return intl4.formatToPlainString(tmp3(1114).t.eR7moP, obj);
    } else if (tmp3(1889).CollectiblesItemType.NAMEPLATE === productType) {
      const intl3 = tmp3(1114).intl;
      obj1 = { product: null };
      obj1[0] = "";
      return intl3.formatToPlainString(tmp3(1114).t.YFOwHj, obj1);
    } else if (tmp3(1889).CollectiblesItemType.PROFILE_FRAME === productType) {
      const intl2 = tmp3(1114).intl;
      const obj2 = { product: null };
      obj2[0] = "";
      return intl2.formatToPlainString(tmp3(1114).t.vov8LX, obj2);
    } else {
      return "";
    }
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = getSystemLocale.intl.string;
    if ("baseVariantName" in closure_0) {
      const intl = BZN5k2(1114).intl;
      BZN5k2 = BZN5k2(1114).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj[0], variantLabel: obj[1] } = closure_0);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = closure_0.name;
  }
};
