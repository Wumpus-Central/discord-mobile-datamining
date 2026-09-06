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
          const intl2 = util.intl;
          let obj = { count: product.items.length, productName: "" };
          str2 = intl2.format(util.t.UTc0ny, obj);
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
          const intl = util.intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          let name = intl.formatToPlainString(util.t.BZN5k2, obj);
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
        const intl = util.intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        let name = intl.formatToPlainString(util.t.BZN5k2, obj);
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
      const intl5 = util.intl;
      let obj = { product: "" };
      return intl5.formatToPlainString(util.t.lvBzLi, obj);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === productType) {
      const intl4 = util.intl;
      obj = { product: "" };
      return intl4.formatToPlainString(util.t.eR7moP, obj);
    } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === productType) {
      const intl3 = util.intl;
      obj1 = { product: "" };
      return intl3.formatToPlainString(util.t.YFOwHj, obj1);
    } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === productType) {
      const intl2 = util.intl;
      const obj2 = { product: "" };
      return intl2.formatToPlainString(util.t.vov8LX, obj2);
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