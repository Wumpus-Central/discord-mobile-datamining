// discord_app/modules/collectibles/utils/CollectiblesProductUtils.tsx
import _slicedToArray from "_slicedToArray";
import { isProfileEffectRecord } from "fromServer";
import ME from "ME";
import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";

let c4;
let c5;
const require = arg1;
({ CurrencyCodes: c4, PriceSetAssignmentPurchaseTypes: c5 } = ME);
const result = require("ME").fileFinishedImporting("modules/collectibles/utils/CollectiblesProductUtils.tsx");

export const getProductOrbPrice = function getProductOrbPrice(arg0) {
  const tmp2 = arg0.product.prices[arg0.hasShopDiscount ? closure_5.PREMIUM_TIER_2 : closure_5.DEFAULT];
  let substr;
  if (tmp2 != null) {
    const countryPrices = tmp2.countryPrices;
    if (countryPrices != null) {
      const prices = countryPrices.prices;
      if (prices != null) {
        substr = prices.slice(0, 2);
      }
    }
  }
  if (substr == null) {
    substr = [];
  }
  let found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
  if (found == null) {
    found = null;
  }
  return found;
};
export const getProductFiatPrice = function getProductFiatPrice(arg0) {
  const tmp2 = arg0.product.prices[arg0.hasShopDiscount ? closure_5.MOBILE_PREMIUM_TIER_2 : closure_5.MOBILE];
  let substr;
  if (tmp2 != null) {
    const countryPrices = tmp2.countryPrices;
    if (countryPrices != null) {
      const prices = countryPrices.prices;
      if (prices != null) {
        substr = prices.slice(0, 2);
      }
    }
  }
  if (substr == null) {
    substr = [];
  }
  let found = substr.find((currency) => currency.currency !== constants.DISCORD_ORB);
  if (found == null) {
    found = null;
  }
  return found;
};
export const getHasOrbPrice = function getHasOrbPrice(arg0) {
  let substr;
  if (arg0.prices[constants.DEFAULT] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      const prices = countryPrices.prices;
      if (prices != null) {
        substr = prices.slice(0, 2);
      }
    }
  }
  if (substr == null) {
    substr = [];
  }
  let found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
  if (found == null) {
    found = null;
  }
  return null != found;
};
export const getHasNonOrbPrice = function getHasNonOrbPrice(arg0) {
  let substr;
  if (arg0.prices[constants.MOBILE] != null) {
    const countryPrices = tmp.countryPrices;
    if (countryPrices != null) {
      const prices = countryPrices.prices;
      if (prices != null) {
        substr = prices.slice(0, 2);
      }
    }
  }
  if (substr == null) {
    substr = [];
  }
  let found = substr.find((currency) => currency.currency !== constants.DISCORD_ORB);
  if (found == null) {
    found = null;
  }
  return null != found;
};
export const isOrbsExclusiveProduct = function isOrbsExclusiveProduct(product) {
  if (null == product) {
    return false;
  } else {
    let substr;
    if (product.prices[constants.DEFAULT] != null) {
      const countryPrices = tmp6.countryPrices;
      if (countryPrices != null) {
        const prices = countryPrices.prices;
        if (prices != null) {
          substr = prices.slice(0, 2);
        }
      }
    }
    if (substr == null) {
      substr = [];
    }
    let found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
    if (found == null) {
      found = null;
    }
    let tmp2 = null != found;
    let substr1;
    if (product.prices[constants.MOBILE] != null) {
      const countryPrices2 = tmp3.countryPrices;
      if (countryPrices2 != null) {
        const prices1 = countryPrices2.prices;
        if (prices1 != null) {
          substr1 = prices1.slice(0, 2);
        }
      }
    }
    if (substr1 == null) {
      substr1 = [];
    }
    let found1 = substr1.find((currency) => currency.currency !== constants.DISCORD_ORB);
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
      if (selectedProduct.type === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP) {
        type1 = null;
        if (null != selectedProduct.variants) {
          type1 = null;
          if (0 !== selectedProduct.variants.length) {
            const first = selectedProduct.variants[0];
            let type = null;
            if (null != first) {
              type = callback(first.items, 1)[0].type;
            }
            type1 = type;
          }
        }
      } else {
        type1 = selectedProduct.type;
      }
    }
    let someResult = type1 === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.PROFILE_EFFECT;
    if (someResult) {
      const items = selectedProduct.items;
      someResult = items.some((effects) => {
        let someResult = callback(effects);
        if (someResult) {
          effects = effects.effects;
          someResult = effects.some((randomizedSources) => {
            let tmp = null != randomizedSources.randomizedSources;
            if (tmp) {
              tmp = randomizedSources.randomizedSources.length > 0;
            }
            return tmp;
          });
        }
        return someResult;
      });
    }
    tmp = someResult;
  }
  return tmp;
};
export const getProductsWithOrbsPrice = function getProductsWithOrbsPrice(arr) {
  return arr.filter((arg0) => {
    let substr;
    if (arg0.prices[constants.DEFAULT] != null) {
      const countryPrices = tmp2.countryPrices;
      if (countryPrices != null) {
        const prices = countryPrices.prices;
        if (prices != null) {
          substr = prices.slice(0, 2);
        }
      }
    }
    if (substr == null) {
      substr = [];
    }
    let found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
    if (found == null) {
      found = null;
    }
    let tmp4 = null != found;
    let substr1;
    if (arg0.prices[constants.MOBILE] != null) {
      const countryPrices2 = tmp5.countryPrices;
      if (countryPrices2 != null) {
        const prices1 = countryPrices2.prices;
        if (prices1 != null) {
          substr1 = prices1.slice(0, 2);
        }
      }
    }
    if (substr1 == null) {
      substr1 = [];
    }
    let found1 = substr1.find((currency) => currency.currency !== constants.DISCORD_ORB);
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
  let tmp = product.type === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP;
  if (tmp) {
    tmp = null != product.variants;
  }
  if (tmp) {
    tmp = 0 !== product.variants.length;
  }
  return tmp;
};
export const getProductSkuIds = function getProductSkuIds(closure_0) {
  let tmp = closure_0.type === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP;
  if (tmp) {
    tmp = null != closure_0.variants;
  }
  if (tmp) {
    tmp = 0 !== closure_0.variants.length;
  }
  if (tmp) {
    const variants = closure_0.variants;
    let mapped = variants.map((skuId) => skuId.skuId);
  } else {
    mapped = [closure_0.skuId];
  }
  return mapped;
};
export const getSelectedProduct = function getSelectedProduct(product, defaultVariantIndex) {
  let tmp = product.type === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP;
  if (tmp) {
    tmp = null != product.variants;
  }
  if (tmp) {
    tmp = 0 !== product.variants.length;
  }
  let tmp3 = product;
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
  } else if (product.type === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.VARIANTS_GROUP) {
    if (null != product.variants) {
      if (0 !== product.variants.length) {
        const first = product.variants[0];
        let type = null;
        if (null != first) {
          type = callback(first.items, 1)[0].type;
        }
        return type;
      }
    }
    return null;
  } else {
    return product.type;
  }
};