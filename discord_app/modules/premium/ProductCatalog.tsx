// === Module 13719: ProductCatalogFeature ===

// Module 13719 (ProductCatalogFeature)
import set from "set" /* 2 */;
import timestampDefault from "timestamp" /* 3 */;
import create from "create" /* 1930 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7597 */;
import getUserMaxFileSize from "getUserMaxFileSize" /* 8214 */;
import setDefault from "set" /* 13721 */;
import apexExperimentDefault from "apexExperiment" /* 13722 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import importDefaultResult1 from "set" /* 13720 */;

let closure_0 = require;
({ PremiumSubscriptionSKUs, PremiumTypeToActivePremiumSubscriptionSKU: c3 } = GuildFeatures);
let closure_4 = new timestampDefault("ProductCatalog.tsx");
importDefaultResult1;
class ProductCatalogFeature extends tmp36 {
  constructor(arg0, arg1) {
    closure_0 = undefined;
    tmp2 = new tmp2(global, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == table[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == table2[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
                let flag = false;
              } else {
                const skuFeatures = tmp7.skuFeatures;
                flag = skuFeatures.includes(arg0);
              }
              return flag;
            }
          } catch (tmp17) {
            let message = tmp17.message;
            if (message == tmp) {
              const _JSON = JSON;
              message = JSON.stringify(tmp17);
            }
            const _HermesInternal3 = HermesInternal;
            logger.error("Error while retrieving user's feature access: " + message);
            return false;
          }
        }
      }
      return false;
    })(tmp, premiumType), require, new.target, tmp2, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp2;
    return tmp2;
  }
}
closure_0 = undefined;
let object = new Object(EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, tmp27, tmp26, tmp25, tmp24, tmp23, tmp22, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
object = new Object(EntitlementFeatureNames.EntitlementFeatureNames.EMOJIS_EVERYWHERE, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, tmp26, tmp25, tmp24, tmp23, tmp22, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object1 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.STICKERS_EVERYWHERE, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, tmp25, tmp24, tmp23, tmp22, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object2 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, tmp24, tmp23, tmp22, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object3 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.CUSTOM_CALL_SOUNDS, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, tmp23, tmp22, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object4 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.PREMIUM_VOICE_FILTERS, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, tmp22, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object5 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_AVATAR, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, tmp21, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object6 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.CUSTOM_DISCRIMINATOR, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, tmp20, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object7 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.PREMIUM_GUILD_MEMBER_PROFILE, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, tmp19, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp = new tmp("profileBadges", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp18, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp = new tmp(EntitlementFeatureNames.EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), "custom banner and avatar decoration", tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp17, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp1 = new tmp("collectibles", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp16, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp2 = new tmp("appIcons", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp15, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object8 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.CLIENT_THEMES, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, tmp14, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp3 = new tmp("boostDiscount", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp13, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp4 = new tmp("freeBoosts", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp12, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object9 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.STREAM_MID_QUALITY, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, tmp11, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object10 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.STREAM_HIGH_QUALITY, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, tmp10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object11 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.CUSTOM_NOTIFICATION_SOUNDS, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, tmp9, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp5 = new tmp("fancyVoiceChannelReactions", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp6 = new tmp("installPremiumApplications", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp7 = new tmp("redeemPremiumPerks", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp5, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object12 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.VIDEO_FILTER_ASSETS, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp7, tmp4, tmp3, tmp2, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = object12;
importDefaultResult1 = new importDefaultResult1(EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE, getUserMaxFileSize.getUserMaxFileSize);
closure_0 = undefined;
const object13 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_GUILD_LIMIT, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp7, object12, new.target, importDefaultResult1, tmp1, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
const object14 = new Object(EntitlementFeatureNames.EntitlementFeatureNames.INCREASED_MESSAGE_LENGTH, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp7, object12, new.target, importDefaultResult1, object13, tmp);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp28 = new tmp28("increasedVideoUploadQuality", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp7, object12, new.target, importDefaultResult1, object13, object14);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp29 = new tmp29("uploadLargeFiles", (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, tmp28, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp7, object12, new.target, importDefaultResult1, object13, object14);
// ThrowIfThisInitialized (0x7c)
closure_0 = undefined;
tmp29 = new tmp29(EntitlementFeatureNames.EntitlementFeatureNames.QUEST_ORB_MULTIPLIER, (premiumType) => (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
  if (null != premiumType) {
    if (null != premiumType.premiumType) {
      try {
        if (null == table[premiumType.premiumType]) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
          return false;
        } else {
          if (null == table2[tmp4]) {
            const _HermesInternal = HermesInternal;
            logger.warn("Cannot find the corresponding product catalog entry to the user's SKU " + tmp4 + " and premium type " + premiumType.premiumType);
            let flag = false;
          } else {
            const skuFeatures = tmp7.skuFeatures;
            flag = skuFeatures.includes(arg0);
          }
          return flag;
        }
      } catch (tmp17) {
        let message = tmp17.message;
        if (message == tmp) {
          const _JSON = JSON;
          message = JSON.stringify(tmp17);
        }
        const _HermesInternal3 = HermesInternal;
        logger.error("Error while retrieving user's feature access: " + message);
        return false;
      }
    }
  }
  return false;
})(tmp, premiumType), undefined, tmp32, tmp31, ProductCatalogFeature, importDefault, tmp30, tmp29, PremiumSubscriptionSKUs, new.target, undefined, globalThis, require, dependencyMap, object, object, object1, object2, object3, object4, object5, object6, object7, tmp, tmp, tmp1, tmp2, object8, tmp3, tmp4, object9, object10, object11, tmp5, tmp6, tmp7, object12, new.target, importDefaultResult1, object13, object14);
// ThrowIfThisInitialized (0x7c)
closure_0 = tmp29;
let obj = {};
const items = [object, object, object1, tmp, object12, tmp28, tmp29, tmp2];
const tmp35 = new timestampDefault("ProductCatalog.tsx");
obj[PremiumSubscriptionSKUs.TIER_0] = new setDefault(PremiumSubscriptionSKUs.TIER_0, items);
const items1 = [object, object, object5, object6, tmp, tmp3, object9, tmp5, tmp28, tmp29, tmp2];
const tmp67 = new setDefault(PremiumSubscriptionSKUs.TIER_0, items);
obj[PremiumSubscriptionSKUs.TIER_1] = new setDefault(PremiumSubscriptionSKUs.TIER_1, items1);
const items2 = [object, object, object1, object2, object3, object5, object6, object7, tmp, tmp, object8, tmp3, tmp4, object9, object10, tmp5, tmp6, tmp7, object12, object13, object14, tmp28, tmp29, tmp2, tmp1, object11, object4, tmp29];
const tmp68 = new setDefault(PremiumSubscriptionSKUs.TIER_1, items1);
obj[PremiumSubscriptionSKUs.TIER_2] = new setDefault(PremiumSubscriptionSKUs.TIER_2, items2);
const frozen = Object.freeze(obj);
const items3 = [tmp3, tmp4];
const items4 = [tmp29];
let closure_8 = [];
const items5 = [object, create.Perk.ANIMATED_EMOJIS];
const items6 = [items5, , , , , , , , , , , , , , , , , , , , , , , ];
const items7 = [object, create.Perk.EMOJIS_EVERYWHERE];
items6[1] = items7;
const items8 = [object1, create.Perk.STICKERS_EVERYWHERE];
items6[2] = items8;
const items9 = [object2, create.Perk.SOUNDBOARD_EVERYWHERE];
items6[3] = items9;
const items10 = [object3, create.Perk.CUSTOM_CALL_SOUNDS];
items6[4] = items10;
const items11 = [object4, create.Perk.PREMIUM_VOICE_FILTERS];
items6[5] = items11;
const items12 = [object5, create.Perk.ANIMATED_AVATAR];
items6[6] = items12;
const items13 = [object6, create.Perk.CUSTOM_DISCRIMINATOR];
items6[7] = items13;
const items14 = [object7, create.Perk.PREMIUM_GUILD_MEMBER_PROFILE];
items6[8] = items14;
const items15 = [tmp, create.Perk.PROFILE_PREMIUM_FEATURES];
items6[9] = items15;
const items16 = [tmp1, create.Perk.PREMIUM_COLLECTIBLES];
items6[10] = items16;
const items17 = [object8, create.Perk.CLIENT_THEMES];
items6[11] = items17;
const items18 = [object9, create.Perk.STREAM_MID_QUALITY];
items6[12] = items18;
const items19 = [object10, create.Perk.STREAM_HIGH_QUALITY];
items6[13] = items19;
const items20 = [object12, create.Perk.VIDEO_FILTER_ASSETS];
items6[14] = items20;
const items21 = [object13, create.Perk.INCREASED_GUILD_LIMIT];
items6[15] = items21;
const items22 = [object14, create.Perk.INCREASED_MESSAGE_LENGTH];
items6[16] = items22;
const items23 = [tmp29, create.Perk.INCREASED_FILE_UPLOAD_SIZE];
items6[17] = items23;
const items24 = [tmp, create.Perk.PROFILE_BADGES];
items6[18] = items24;
const items25 = [tmp2, create.Perk.APP_ICONS];
items6[19] = items25;
const items26 = [tmp3, create.Perk.BOOST_DISCOUNT];
items6[20] = items26;
const items27 = [tmp4, create.Perk.FREE_BOOSTS];
items6[21] = items27;
const items28 = [tmp6, create.Perk.INSTALL_PREMIUM_APPLICATIONS];
items6[22] = items28;
const items29 = [tmp28, create.Perk.INCREASED_VIDEO_UPLOAD_QUALITY];
items6[23] = items29;
const map = new Map(items6);
const tmp69 = new setDefault(PremiumSubscriptionSKUs.TIER_2, items2);
const result = set.fileFinishedImporting("modules/premium/ProductCatalog.tsx");

export const ANIMATED_EMOJIS = object;
export const EMOJIS_EVERYWHERE = object;
export const STICKERS_EVERYWHERE = object1;
export const SOUNDBOARD_EVERYWHERE = object2;
export const CUSTOM_CALL_SOUNDS = object3;
export const PREMIUM_VOICE_FILTERS = object4;
export const ANIMATED_AVATAR = object5;
export const CUSTOM_DISCRIMINATOR = object6;
export const PREMIUM_GUILD_MEMBER_PROFILE = object7;
export const PROFILE_BADGES = tmp;
export const PROFILE_PREMIUM_FEATURES = tmp;
export const COLLECTIBLES = tmp1;
export const APP_ICONS = tmp2;
export const CLIENT_THEMES = object8;
export const BOOST_DISCOUNT = tmp3;
export const FREE_BOOSTS = tmp4;
export const STREAM_MID_QUALITY = object9;
export const STREAM_HIGH_QUALITY = object10;
export const CUSTOM_NOTIFICATION_SOUNDS = object11;
export const FANCY_VOICE_CHANNEL_REACTIONS = tmp5;
export const INSTALL_PREMIUM_APPLICATIONS = tmp6;
export const REDEEM_PREMIUM_PERKS = tmp7;
export const VIDEO_FILTER_ASSETS = object12;
export const INCREASED_FILE_UPLOAD_SIZE = importDefaultResult1;
export const INCREASED_GUILD_LIMIT = object13;
export const INCREASED_MESSAGE_LENGTH = object14;
export const INCREASED_VIDEO_UPLOAD_QUALITY = tmp28;
export const UPLOAD_LARGE_FILES = tmp29;
export const QUEST_ORB_MULTIPLIER = tmp29;
export const PRODUCT_CATALOG = frozen;
export const canUserUse = function canUserUse(COLLECTIBLES, isPremiumWithFractionalPremiumOnly) {
  if (null != isPremiumWithFractionalPremiumOnly) {
    if (isPremiumWithFractionalPremiumOnly.isPremiumWithFractionalPremiumOnly()) {
      if (items3.includes(COLLECTIBLES)) {
        return false;
      }
    }
  }
  if (null != isPremiumWithFractionalPremiumOnly) {
    if (isPremiumWithFractionalPremiumOnly.isFractionalPremiumWithNoStandardSub()) {
      if (items4.includes(COLLECTIBLES)) {
        return false;
      }
    }
  }
  if (arg2) {
    if (closure_8.includes(COLLECTIBLES)) {
      return false;
    }
  }
  const value = map.get(COLLECTIBLES);
  if (null != value) {
    let perks;
    if (isPremiumWithFractionalPremiumOnly != null) {
      perks = isPremiumWithFractionalPremiumOnly.perks;
    }
    if (null != perks) {
      const config = apexExperimentDefault.getConfig({ location: "product_catalog_can_user_use" });
      if (config !== callback(13722).DenormalizedPerksReadConfig.CONTROL) {
        let featureValue = COLLECTIBLES.getFeatureValue(isPremiumWithFractionalPremiumOnly);
        let perks1;
        if (isPremiumWithFractionalPremiumOnly != null) {
          perks1 = isPremiumWithFractionalPremiumOnly.perks;
        }
        const tmp9Result = tmp9(1928);
        if (config === tmp9(13722).DenormalizedPerksReadConfig.DUAL_READ_RETURN_NEW) {
          featureValue = hasPerkResult;
        }
        return featureValue;
      }
      const obj = apexExperimentDefault;
    }
  }
  return COLLECTIBLES.getFeatureValue(isPremiumWithFractionalPremiumOnly);
};