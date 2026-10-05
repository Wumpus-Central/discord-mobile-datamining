// === Module 8526: getProductName ===

// Module 8526 (getProductName)
import intl6 from "intl" /* 1126 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/getProductName.tsx");

export const getCardProductName = function getCardProductName(product) {
  let str = "";
  if (null != product) {
    const string = intl6.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        let name;
        if (product.variantLabel !== tmp3) {
          const intl = intl6.intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          name = intl.formatToPlainString(intl6.t.BZN5k2, obj);
        }
        str = name;
      }
    }
    name = product.name;
  }
  let formatResult = str;
  if (null != product) {
    formatResult = str;
    if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
      formatResult = str;
      if (product.items.length > 0) {
        const intl2 = intl6.intl;
        const obj2 = { count: product.items.length, productName: str };
        formatResult = intl2.format(intl6.t.UTc0ny, obj2);
      }
    }
  }
  return formatResult;
};
export const getProductName = function getProductName(product) {
  if (null == product) {
    return "";
  } else {
    const string = intl6.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        let name;
        if (product.variantLabel !== tmp3) {
          const intl = intl6.intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          name = intl.formatToPlainString(intl6.t.BZN5k2, obj);
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
    const string = intl6.intl.string;
    if (null != baseVariantName.baseVariantName) {
      let name;
      if (baseVariantName.variantLabel !== tmp3) {
        const intl = intl6.intl;
        const obj = { baseVariantName: null, variantLabel: null };
        ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = baseVariantName);
        name = intl.formatToPlainString(intl6.t.BZN5k2, obj);
      }
      return name;
    }
    name = baseVariantName.name;
  }
};
export const getProductNameAndTypeLabel = function getProductNameAndTypeLabel(product) {
  let str = "";
  if (null != product) {
    const string = intl6.intl.string;
    if ("baseVariantName" in product) {
      if (null != product.baseVariantName) {
        let name;
        if (product.variantLabel !== tmp3) {
          const intl = intl6.intl;
          const obj = { baseVariantName: null, variantLabel: null };
          ({ baseVariantName: obj.baseVariantName, variantLabel: obj.variantLabel } = product);
          name = intl.formatToPlainString(intl6.t.BZN5k2, obj);
        }
        str = name;
      }
    }
    name = product.name;
  }
  const obj2 = CollectiblesProductUtils;
  const productType = obj2.getProductType(product);
  if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === productType) {
    const intl5 = intl6.intl;
    const obj3 = { product: str };
    return intl5.formatToPlainString(intl6.t.lvBzLi, obj3);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === productType) {
    const intl4 = intl6.intl;
    const obj4 = { product: str };
    return intl4.formatToPlainString(intl6.t.eR7moP, obj4);
  } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === productType) {
    const intl3 = intl6.intl;
    const obj5 = { product: str };
    return intl3.formatToPlainString(intl6.t.YFOwHj, obj5);
  } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === productType) {
    const intl2 = intl6.intl;
    const obj6 = { product: str };
    return intl2.formatToPlainString(intl6.t.vov8LX, obj6);
  } else {
    return str;
  }
};