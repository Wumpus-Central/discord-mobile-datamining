// === Module 8864: getProductName ===

// Module 8864 (getProductName)
import util from "util" /* 1114 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getCardProductName = function getCardProductName(product) {
  if (null == product) {
    let str2 = "";
    if (null != product) {
      str2 = "";
      if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        str2 = "";
        if (product.items.length > 0) {
          const intl2 = tmp3(1114).intl;
          let obj = { count: product.items.length, productName: "" };
          str2 = intl2.format(tmp3(1114).t.UTc0ny, obj);
        }
      }
    }
    return str2;
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = util.intl.string;
    if ("baseVariantName" in product) {
      const intl = BZN5k2(1114).intl;
      BZN5k2 = BZN5k2(1114).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = product.name;
  }
};
export const getProductName = function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = util.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        if (product.variantLabel !== tmp3) {
          const intl = tmp(1114).intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
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
    const string = util.intl.string;
    if (null != baseVariantName.baseVariantName) {
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = tmp(1114).intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        let name = intl.formatToPlainString(tmp(1114).t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(product) {
  if (null == product) {
    let obj1 = CollectiblesProductUtils;
    const productType = obj1.getProductType(product);
    if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
      const intl5 = tmp3(1114).intl;
      let obj = { product: "" };
      return intl5.formatToPlainString(tmp3(1114).t.lvBzLi, obj);
    } else if (tmp3(1889).CollectiblesItemType.PROFILE_EFFECT === productType) {
      const intl4 = tmp3(1114).intl;
      obj = { product: "" };
      return intl4.formatToPlainString(tmp3(1114).t.eR7moP, obj);
    } else if (tmp3(1889).CollectiblesItemType.NAMEPLATE === productType) {
      const intl3 = tmp3(1114).intl;
      obj1 = { product: "" };
      return intl3.formatToPlainString(tmp3(1114).t.YFOwHj, obj1);
    } else if (tmp3(1889).CollectiblesItemType.PROFILE_FRAME === productType) {
      const intl2 = tmp3(1114).intl;
      const obj2 = { product: "" };
      return intl2.formatToPlainString(tmp3(1114).t.vov8LX, obj2);
    } else {
      return "";
    }
  } else {
    let BZN5k2 = require;
    obj = dependencyMap;
    const string = util.intl.string;
    if ("baseVariantName" in product) {
      const intl = BZN5k2(1114).intl;
      BZN5k2 = BZN5k2(1114).t.BZN5k2;
      obj = { baseVariantName: null, variantLabel: null };
      ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
      let name = intl.formatToPlainString(BZN5k2, obj);
    }
    name = product.name;
  }
};