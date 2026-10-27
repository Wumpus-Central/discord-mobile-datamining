// discord_app/modules/premium/ProductCatalog.tsx
import LoggerDefault from "../debug/Logger.tsx";
import SKUListingDefault from "SKUListing.tsx";
import DenormalizedPerksReadExperimentDefault from "experiments/DenormalizedPerksReadExperiment.tsx";
import OverridePremiumTypeStore from "OverridePremiumTypeStore.tsx";
import PremiumSKUFeature_mod from "PremiumSKUFeature.tsx";

let closure_0 = fn;
const PremiumConstants = fn(1391);
({ PremiumSubscriptionSKUs, PremiumTypeToActivePremiumSubscriptionSKU: closure_4 } = PremiumConstants);
let closure_5 = new LoggerDefault("ProductCatalog.tsx");
let PremiumSKUFeature = PremiumSKUFeature_mod;
class ProductCatalogFeature extends tmp36 {
  constructor(arg0, arg1) {
    closure_0 = undefined;
    tmp21 = new tmp2(
      global,
      (premiumType) =>
        (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
          if (null != premiumType) {
            if (null != premiumType.premiumType) {
              try {
                if (null == closure_1_4[premiumType.premiumType]) {
                  const _HermesInternal2 = HermesInternal;
                  logger.warn(
                    "Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType,
                  );
                  return false;
                } else {
                  if (null == closure_1_6[tmp4]) {
                    const _HermesInternal = HermesInternal;
                    logger.warn(
                      "Cannot find the corresponding product catalog entry to the user's SKU " +
                        tmp4 +
                        " and premium type " +
                        premiumType.premiumType,
                    );
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
        })(closure_0, premiumType),
      fn,
      new.target,
      tmp2,
      tmp,
    );
    closure_0 = tmp21;
    return tmp21;
  }
}
const object = new Object(
  fn(5031).EntitlementFeatureNames.ANIMATED_EMOJIS,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  tmp27,
  tmp26,
  tmp25,
  tmp24,
  tmp23,
  tmp22,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object16 = new Object(
  fn(5031).EntitlementFeatureNames.EMOJIS_EVERYWHERE,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  tmp26,
  tmp25,
  tmp24,
  tmp23,
  tmp22,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object17 = new Object(
  fn(5031).EntitlementFeatureNames.STICKERS_EVERYWHERE,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  tmp25,
  tmp24,
  tmp23,
  tmp22,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object18 = new Object(
  fn(5031).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  tmp24,
  tmp23,
  tmp22,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object19 = new Object(
  fn(5031).EntitlementFeatureNames.CUSTOM_CALL_SOUNDS,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  tmp23,
  tmp22,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object20 = new Object(
  fn(5031).EntitlementFeatureNames.PREMIUM_VOICE_FILTERS,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  tmp22,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object21 = new Object(
  fn(5031).EntitlementFeatureNames.ANIMATED_AVATAR,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  tmp21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object22 = new Object(
  fn(5031).EntitlementFeatureNames.CUSTOM_DISCRIMINATOR,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  tmp20,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object23 = new Object(
  fn(5031).EntitlementFeatureNames.PREMIUM_GUILD_MEMBER_PROFILE,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  tmp19,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp33 = new tmp(
  "profileBadges",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp18,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp36 = new tmp(
  fn(5031).EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  "custom banner and avatar decoration",
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp17,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp37 = new tmp(
  "collectibles",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp16,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp38 = new tmp(
  "appIcons",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp15,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object24 = new Object(
  fn(5031).EntitlementFeatureNames.CLIENT_THEMES,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  tmp14,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp39 = new tmp(
  "boostDiscount",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp13,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp40 = new tmp(
  "freeBoosts",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp12,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object25 = new Object(
  fn(5031).EntitlementFeatureNames.STREAM_MID_QUALITY,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  tmp11,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object26 = new Object(
  fn(5031).EntitlementFeatureNames.STREAM_HIGH_QUALITY,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  tmp10,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object27 = new Object(
  fn(5031).EntitlementFeatureNames.CUSTOM_NOTIFICATION_SOUNDS,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  tmp9,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp41 = new tmp(
  "fancyVoiceChannelReactions",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp8,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp42 = new tmp(
  "installPremiumApplications",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp7,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const tmp43 = new tmp(
  "redeemPremiumPerks",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp6,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
const object28 = new Object(
  fn(5031).EntitlementFeatureNames.VIDEO_FILTER_ASSETS,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp43,
  tmp5,
  tmp4,
  tmp3,
  tmp2,
  tmp,
);
let PremiumSKUFeature = PremiumSKUFeature_mod;
const importDefaultResult11 = new PremiumSKUFeature(
  fn(5031).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE,
  fn(5032).getUserMaxFileSize,
);
const object29 = new Object(
  fn(5031).EntitlementFeatureNames.INCREASED_GUILD_LIMIT,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp43,
  object28,
  new.target,
  importDefaultResult11,
  tmp2,
  tmp,
);
const object30 = new Object(
  fn(5031).EntitlementFeatureNames.INCREASED_MESSAGE_LENGTH,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp43,
  object28,
  new.target,
  importDefaultResult11,
  object29,
  tmp,
);
const tmp282 = new tmp28(
  "increasedVideoUploadQuality",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp43,
  object28,
  new.target,
  importDefaultResult11,
  object29,
  object30,
);
const tmp293 = new tmp29(
  "uploadLargeFiles",
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  tmp28,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp43,
  object28,
  new.target,
  importDefaultResult11,
  object29,
  object30,
);
const tmp294 = new tmp29(
  fn(5031).EntitlementFeatureNames.QUEST_ORB_MULTIPLIER,
  (premiumType) =>
    (function userHasFeatureByMeritOfPremiumSKUs(arg0, premiumType) {
      if (null != premiumType) {
        if (null != premiumType.premiumType) {
          try {
            if (null == closure_1_4[premiumType.premiumType]) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("Cannot find the corresponding SKU to the user's premium type " + premiumType.premiumType);
              return false;
            } else {
              if (null == closure_1_6[tmp4]) {
                const _HermesInternal = HermesInternal;
                logger.warn(
                  "Cannot find the corresponding product catalog entry to the user's SKU " +
                    tmp4 +
                    " and premium type " +
                    premiumType.premiumType,
                );
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
    })(closure_0, premiumType),
  undefined,
  tmp32,
  tmp31,
  ProductCatalogFeature,
  importDefault,
  tmp30,
  tmp29,
  PremiumSubscriptionSKUs,
  new.target,
  undefined,
  globalThis,
  fn,
  dependencyMap,
  object,
  object16,
  object17,
  object18,
  object19,
  object20,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  tmp37,
  tmp38,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  object27,
  tmp41,
  tmp42,
  tmp43,
  object28,
  new.target,
  importDefaultResult11,
  object29,
  object30,
);
closure_0 = tmp294;
let obj = {};
const items = [object, object16, object17, tmp33, object28, tmp282, tmp293, tmp38];
const tmp35 = new LoggerDefault("ProductCatalog.tsx");
obj[PremiumSubscriptionSKUs.TIER_0] = new SKUListingDefault(PremiumSubscriptionSKUs.TIER_0, items);
const items1 = [object, object16, object21, object22, tmp33, tmp39, object25, tmp41, tmp282, tmp293, tmp38];
const tmp67 = new SKUListingDefault(PremiumSubscriptionSKUs.TIER_0, items);
obj[PremiumSubscriptionSKUs.TIER_1] = new SKUListingDefault(PremiumSubscriptionSKUs.TIER_1, items1);
const items2 = [
  object,
  object16,
  object17,
  object18,
  object19,
  object21,
  object22,
  object23,
  tmp33,
  tmp36,
  object24,
  tmp39,
  tmp40,
  object25,
  object26,
  tmp41,
  tmp42,
  tmp43,
  object28,
  object29,
  object30,
  tmp282,
  tmp293,
  tmp38,
  tmp37,
  object27,
  object20,
  tmp294,
];
const tmp68 = new SKUListingDefault(PremiumSubscriptionSKUs.TIER_1, items1);
obj[PremiumSubscriptionSKUs.TIER_2] = new SKUListingDefault(PremiumSubscriptionSKUs.TIER_2, items2);
const frozen = Object.freeze(obj);
const items3 = [tmp39, tmp40];
const items4 = [tmp294];
let closure_9 = [];
const items5 = [object, fn(1397).Perk.ANIMATED_EMOJIS];
const items6 = [items5, , , , , , , , , , , , , , , , , , , , , , ,];
const items7 = [object16, fn(1397).Perk.EMOJIS_EVERYWHERE];
items6[1] = items7;
const items8 = [object17, fn(1397).Perk.STICKERS_EVERYWHERE];
items6[2] = items8;
const items9 = [object18, fn(1397).Perk.SOUNDBOARD_EVERYWHERE];
items6[3] = items9;
const items10 = [object19, fn(1397).Perk.CUSTOM_CALL_SOUNDS];
items6[4] = items10;
const items11 = [object20, fn(1397).Perk.PREMIUM_VOICE_FILTERS];
items6[5] = items11;
const items12 = [object21, fn(1397).Perk.ANIMATED_AVATAR];
items6[6] = items12;
const items13 = [object22, fn(1397).Perk.CUSTOM_DISCRIMINATOR];
items6[7] = items13;
const items14 = [object23, fn(1397).Perk.PREMIUM_GUILD_MEMBER_PROFILE];
items6[8] = items14;
const items15 = [tmp36, fn(1397).Perk.PROFILE_PREMIUM_FEATURES];
items6[9] = items15;
const items16 = [tmp37, fn(1397).Perk.PREMIUM_COLLECTIBLES];
items6[10] = items16;
const items17 = [object24, fn(1397).Perk.CLIENT_THEMES];
items6[11] = items17;
const items18 = [object25, fn(1397).Perk.STREAM_MID_QUALITY];
items6[12] = items18;
const items19 = [object26, fn(1397).Perk.STREAM_HIGH_QUALITY];
items6[13] = items19;
const items20 = [object28, fn(1397).Perk.VIDEO_FILTER_ASSETS];
items6[14] = items20;
const items21 = [object29, fn(1397).Perk.INCREASED_GUILD_LIMIT];
items6[15] = items21;
const items22 = [object30, fn(1397).Perk.INCREASED_MESSAGE_LENGTH];
items6[16] = items22;
const items23 = [tmp293, fn(1397).Perk.INCREASED_FILE_UPLOAD_SIZE];
items6[17] = items23;
const items24 = [tmp33, fn(1397).Perk.PROFILE_BADGES];
items6[18] = items24;
const items25 = [tmp38, fn(1397).Perk.APP_ICONS];
items6[19] = items25;
const items26 = [tmp39, fn(1397).Perk.BOOST_DISCOUNT];
items6[20] = items26;
const items27 = [tmp40, fn(1397).Perk.FREE_BOOSTS];
items6[21] = items27;
const items28 = [tmp42, fn(1397).Perk.INSTALL_PREMIUM_APPLICATIONS];
items6[22] = items28;
const items29 = [tmp282, fn(1397).Perk.INCREASED_VIDEO_UPLOAD_QUALITY];
items6[23] = items29;
const map = new Map(items6);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/ProductCatalog.tsx");

export const ANIMATED_EMOJIS = object;
export const EMOJIS_EVERYWHERE = object16;
export const STICKERS_EVERYWHERE = object17;
export const SOUNDBOARD_EVERYWHERE = object18;
export const CUSTOM_CALL_SOUNDS = object19;
export const PREMIUM_VOICE_FILTERS = object20;
export const ANIMATED_AVATAR = object21;
export const CUSTOM_DISCRIMINATOR = object22;
export const PREMIUM_GUILD_MEMBER_PROFILE = object23;
export const PROFILE_BADGES = tmp33;
export const PROFILE_PREMIUM_FEATURES = tmp36;
export const COLLECTIBLES = tmp37;
export const APP_ICONS = tmp38;
export const CLIENT_THEMES = object24;
export const BOOST_DISCOUNT = tmp39;
export const FREE_BOOSTS = tmp40;
export const STREAM_MID_QUALITY = object25;
export const STREAM_HIGH_QUALITY = object26;
export const CUSTOM_NOTIFICATION_SOUNDS = object27;
export const FANCY_VOICE_CHANNEL_REACTIONS = tmp41;
export const INSTALL_PREMIUM_APPLICATIONS = tmp42;
export const REDEEM_PREMIUM_PERKS = tmp43;
export const VIDEO_FILTER_ASSETS = object28;
export const INCREASED_FILE_UPLOAD_SIZE = importDefaultResult11;
export const INCREASED_GUILD_LIMIT = object29;
export const INCREASED_MESSAGE_LENGTH = object30;
export const INCREASED_VIDEO_UPLOAD_QUALITY = tmp282;
export const UPLOAD_LARGE_FILES = tmp293;
export const QUEST_ORB_MULTIPLIER = tmp294;
export const PRODUCT_CATALOG = frozen;
export const canUserUse = function canUserUse(COLLECTIBLES, isPremiumWithFractionalPremiumOnly, arg2) {
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
    if (closure_9.includes(COLLECTIBLES)) {
      return false;
    }
  }
  if (OverridePremiumTypeStore.hasPremiumTypeOverride(isPremiumWithFractionalPremiumOnly)) {
    return COLLECTIBLES.getFeatureValue(isPremiumWithFractionalPremiumOnly);
  } else {
    value = map.get(COLLECTIBLES);
    if (null != value) {
      let perks;
      if (isPremiumWithFractionalPremiumOnly != null) {
        perks = isPremiumWithFractionalPremiumOnly.perks;
      }
      if (null != perks) {
        const config = DenormalizedPerksReadExperimentDefault.getConfig({ location: "product_catalog_can_user_use" });
        if (config !== closure_0(5035).DenormalizedPerksReadConfig.CONTROL) {
          let featureValue = COLLECTIBLES.getFeatureValue(isPremiumWithFractionalPremiumOnly);
          let perks1;
          if (isPremiumWithFractionalPremiumOnly != null) {
            perks1 = isPremiumWithFractionalPremiumOnly.perks;
          }
          const tmp10Result = closure_0(1395);
          if (config === closure_0(5035).DenormalizedPerksReadConfig.DUAL_READ_RETURN_NEW) {
            featureValue = hasPerkResult;
          }
          return featureValue;
        }
      }
    }
    return COLLECTIBLES.getFeatureValue(isPremiumWithFractionalPremiumOnly);
  }
};
