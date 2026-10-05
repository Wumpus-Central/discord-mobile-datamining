// === Module 7064: CollectiblesProductUtils ===

// Module 7064 (CollectiblesProductUtils)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7059 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let effects;

let closure_4;
let hasOwnProperty;
const f94164 = (currency) => currency.currency === constants.DISCORD_ORB;
const f94165 = (currency) => currency.currency !== constants.DISCORD_ORB;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
({ CurrencyCodes: closure_4, PriceSetAssignmentPurchaseTypes: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesProductUtils.tsx");

export const getProductOrbPrice = function getProductOrbPrice(arg0) {
  const tmp2 = arg0.product.prices[arg0.hasShopDiscount ? hasOwnProperty.PREMIUM_TIER_2 : hasOwnProperty.DEFAULT];
  let prices;
  if (tmp2 != null) {
    const countryPrices = tmp2.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  if (prices == null) {
    prices = [];
  }
  let found = prices.find(f94164);
  if (found == null) {
    found = null;
  }
  return found;
};
export const getProductFiatPrice = function getProductFiatPrice(arg0) {
  const tmp2 = arg0.product.prices[arg0.hasShopDiscount ? hasOwnProperty.MOBILE_PREMIUM_TIER_2 : hasOwnProperty.MOBILE];
  let prices;
  if (tmp2 != null) {
    const countryPrices = tmp2.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  if (prices == null) {
    prices = [];
  }
  let found = prices.find(f94165);
  if (found == null) {
    found = null;
  }
  return found;
};
export const getHasOrbPrice = function getHasOrbPrice(arg0) {
  let prices;
  if (arg0.prices[hasOwnProperty.DEFAULT] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  if (prices == null) {
    prices = [];
  }
  let found = prices.find(f94164);
  if (found == null) {
    found = null;
  }
  return null != found;
};
export const getHasNonOrbPrice = function getHasNonOrbPrice(arg0) {
  let prices;
  if (arg0.prices[hasOwnProperty.MOBILE] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      prices = countryPrices.prices;
    }
  }
  if (prices == null) {
    prices = [];
  }
  let found = prices.find(f94165);
  if (found == null) {
    found = null;
  }
  return null != found;
};
export const isOrbsExclusiveProduct = function isOrbsExclusiveProduct(product) {
  if (null == product) {
    return false;
  } else {
    let prices;
    if (product.prices[hasOwnProperty.DEFAULT] != null) {
      const countryPrices = tmp6.countryPrices;
      if (countryPrices != null) {
        prices = countryPrices.prices;
      }
    }
    if (prices == null) {
      prices = [];
    }
    let found = prices.find(f94164);
    if (found == null) {
      found = null;
    }
    let tmp2 = null != found;
    let prices1;
    if (product.prices[hasOwnProperty.MOBILE] != null) {
      const countryPrices2 = tmp3.countryPrices;
      if (countryPrices2 != null) {
        prices1 = countryPrices2.prices;
      }
    }
    if (prices1 == null) {
      prices1 = [];
    }
    let found1 = prices1.find(f94165);
    if (found1 == null) {
      found1 = null;
    }
    if (tmp2) {
      tmp2 = null == found1;
    }
    return tmp2;
  }
};
export const isDynamicProduct = function isDynamicProduct(selectedProduct) {
  let tmp = null != selectedProduct;
  if (tmp) {
    let type1 = null;
    if (null != selectedProduct) {
      if (selectedProduct.type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP) {
        type1 = null;
        if (null != selectedProduct.variants) {
          type1 = null;
          if (0 !== selectedProduct.variants.length) {
            const first = selectedProduct.variants[0];
            let type = null;
            if (null != first) {
              type = _slicedToArray(first.items, 1)[0].type;
            }
            type1 = type;
          }
        }
      } else {
        type1 = selectedProduct.type;
      }
    }
    let someResult = type1 === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT;
    if (someResult) {
      const items = selectedProduct.items;
      someResult = items.some((effects) => {
        let someResult = isProfileEffectRecord(effects);
        if (someResult) {
          effects = effects.effects;
          someResult = effects.some((randomizedSources) => null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0);
        }
        return someResult;
      });
    }
    tmp = someResult;
  }
  return tmp;
};
export const getProductsWithOrbsPrice = function getProductsWithOrbsPrice(arr) {
  return arr.filter((item) => {
    let prices;
    if (item.prices[constants.DEFAULT] != null) {
      const countryPrices = tmp2.countryPrices;
      if (countryPrices != null) {
        prices = countryPrices.prices;
      }
    }
    if (prices == null) {
      prices = [];
    }
    let found = prices.find(f94164);
    if (found == null) {
      found = null;
    }
    let tmp4 = null != found;
    let prices1;
    if (item.prices[constants.MOBILE] != null) {
      const countryPrices2 = tmp5.countryPrices;
      if (countryPrices2 != null) {
        prices1 = countryPrices2.prices;
      }
    }
    if (prices1 == null) {
      prices1 = [];
    }
    let found1 = prices1.find(f94165);
    if (found1 == null) {
      found1 = null;
    }
    if (tmp4) {
      tmp4 = null != found1;
    }
    return tmp4;
  });
};
export const getIsVariantProduct = function getIsVariantProduct(product) {
  const tmp = product.type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP && null != product.variants && 0 !== product.variants.length;
  return tmp;
};
export const getProductSkuIds = function getProductSkuIds(product) {
  let mapped;
  const tmp = product.type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP && null != product.variants && 0 !== product.variants.length;
  if (tmp) {
    const variants = product.variants;
    mapped = variants.map((skuId) => skuId.skuId);
  } else {
    mapped = [product.skuId];
  }
  return mapped;
};
export const getSelectedProduct = function getSelectedProduct(product, defaultVariantIndex) {
  let tmp3 = product;
  const tmp = product.type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP && null != product.variants && 0 !== product.variants.length;
  if (tmp) {
    tmp3 = product;
    if (null != defaultVariantIndex) {
      let tmp6 = product.variants[defaultVariantIndex];
      if (tmp6 == null) {
        tmp6 = product;
      }
      tmp3 = tmp6;
    }
  }
  return tmp3;
};
export const getProductType = function getProductType(product) {
  if (null == product) {
    return null;
  } else if (product.type === CollectiblesItemType.CollectiblesItemType.VARIANTS_GROUP) {
    if (null != product.variants) {
      if (0 !== product.variants.length) {
        const first = product.variants[0];
        let type = null;
        if (null != first) {
          type = _slicedToArray(first.items, 1)[0].type;
        }
        return type;
      }
    }
    return null;
  } else {
    return product.type;
  }
};