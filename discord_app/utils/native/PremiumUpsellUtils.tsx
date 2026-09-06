// === Module 9313: PremiumUpsellUtils ===

// Module 9313 (PremiumUpsellUtils)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _modDef9314 from "module_9314" /* 9314 */;
import _modDef9315 from "module_9315" /* 9315 */;
import _modDef9316 from "module_9316" /* 9316 */;
import _modDef9317 from "module_9317" /* 9317 */;
import _modDef9318 from "module_9318" /* 9318 */;
import _modDef9319 from "module_9319" /* 9319 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9362 */;
import openPremiumModalDefault from "openPremiumModal" /* 9392 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function usePremiumUpsellConfig(upsellType, analyticsLocations, analyticsLocation) {
  _require = upsellType;
  closure_1 = analyticsLocations;
  dependencyMap = analyticsLocation;
  let obj = require("usePremiumTrialOffer");
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let items = [, ];
  ({ GLOBAL_EMOJI: arr[0], UPLOAD: arr[1] } = closure_7);
  const set = new Set(items);
  let hasItem = null != premiumTrialOffer;
  if (hasItem) {
    hasItem = set.has(upsellType);
  }
  let tmp4 = hasItem;
  if (hasItem) {
    let skuId;
    if (premiumTrialOffer != null) {
      let subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
    }
    tmp4 = skuId === TIER_0.TIER_0;
  }
  closure_5 = tmp4;
  const items1 = [upsellType, tmp4];
  const memo = premiumTrialOffer.useMemo(() => {
    if (closure_5) {
      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
    } else {
      if (constants3.UPLOAD !== closure_0) {
        if (constants3.ANIMATED_EMOJI !== closure_0) {
          if (constants3.GLOBAL_EMOJI !== closure_0) {
            if (constants3.GLOBAL_STICKER !== closure_0) {
              if (constants3.CUSTOM_PROFILES !== closure_0) {
                if (constants3.PREMIUM_GUILD_PROFILE !== closure_0) {
                  if (constants3.APP_ICONS !== closure_0) {
                    if (constants3.STREAM_HIGH_QUALITY !== closure_0) {
                      if (constants3.LONGER_MESSAGE !== closure_0) {
                        if (constants3.GUILD_CAP !== closure_0) {
                          const ANIMATED_AVATAR = constants3.ANIMATED_AVATAR;
                        }
                      }
                      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }, items1);
  const items2 = [memo, analyticsLocations, analyticsLocation];
  const items3 = [tmp4, premiumTrialOffer, hasItem];
  const callback = premiumTrialOffer.useCallback(() => {
    let obj = ChatInputUtils;
    const bestActiveInput = obj.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
    obj = { location: _location };
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
    obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
    const obj1 = {};
    const merged = Object.assign(_location);
    obj1.object = constants2.BUTTON_CTA;
    obj.analyticsLocation = obj1;
    let items = closure_1;
    if (closure_1 == null) {
      items = [];
    }
    obj.analyticsLocations = items;
    obj.premiumFeatureCardOrder = memo;
    openPremiumModalDefault(obj);
  }, items2);
  obj = {
    useTier0UpsellContent: tmp4,
    onViewAllPerks: callback,
    getNitroText: premiumTrialOffer.useMemo(() => {
      if (hasItem) {
        let skuId;
        if (premiumTrialOffer != null) {
          const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
          if (subscriptionTrial != null) {
            skuId = subscriptionTrial.skuId;
          }
        }
        if (React6.TIER_0 === skuId) {
          const intl4 = util.intl;
          return intl4.string(util.t.hz78hE);
        } else if (tmp8.TIER_2 === skuId) {
          const intl3 = util.intl;
          return intl3.string(util.t["Gd/XHF"]);
        }
      } else if (closure_5) {
        const intl = util.intl;
        return intl.string(util.t["9CM5v9"]);
      }
      const intl2 = util.intl;
      return intl2.string(util.t.pj0XBN);
    }, items3)
  };
  return obj;
}
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsObjects: metroRequire, UpsellTypes: closure_7 } = Constants);
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_8, PremiumTypes: closure_9 } = PremiumConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/PremiumUpsellUtils.tsx");

export default {
  handleShowUpsellAlert(initialUpsellKey) {
    initialUpsellKey = initialUpsellKey.initialUpsellKey;
    let analyticsLocation = initialUpsellKey.analyticsLocation;
    if (undefined === analyticsLocation) {
      analyticsLocation = {};
    }
    let analyticsLocations = initialUpsellKey.analyticsLocations;
    if (undefined === analyticsLocations) {
      analyticsLocations = [];
    }
    let analyticsProperties = initialUpsellKey.analyticsProperties;
    if (undefined === analyticsProperties) {
      analyticsProperties = {};
    }
    ({ largestFileSize: UserStore, imageSource: closure_5 } = initialUpsellKey);
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (constants3.UPLOAD === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).isPremiumExactly(currentUser, TIER_2.TIER_2);
        const obj15 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.GLOBAL_EMOJI === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseEmojisEverywhere(currentUser);
        const obj14 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.ANIMATED_AVATAR === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseAnimatedAvatar(currentUser);
        const obj13 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.BADGE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseBadges(currentUser);
        const obj12 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.ANIMATED_EMOJI === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseAnimatedEmojis(currentUser);
        const obj11 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.EMOJI_AUTOCOMPLETE === initialUpsellKey) {
        const canUseAnimatedEmojisResult = analyticsLocation(analyticsLocations[10]).canUseAnimatedEmojis(currentUser);
        let tmp18 = !canUseAnimatedEmojisResult;
        if (canUseAnimatedEmojisResult) {
          tmp18 = !tmp15(tmp16[10]).canUseEmojisEverywhere(currentUser);
          const tmp15Result = tmp15(tmp16[10]);
        }
        flag = tmp18;
        const obj9 = analyticsLocation(analyticsLocations[10]);
        tmp15 = analyticsLocation;
        tmp16 = analyticsLocations;
      } else if (constants3.CUSTOM_PROFILES === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUsePremiumProfileCustomization(currentUser);
        const obj8 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.APP_ICONS === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUsePremiumAppIcons(currentUser);
        const obj7 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.GLOBAL_STICKER === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseCustomStickersEverywhere(currentUser);
        const obj6 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUsePremiumGuildMemberProfile(currentUser);
        const obj5 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.LONGER_MESSAGE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseIncreasedMessageLength(currentUser);
        const obj4 = analyticsLocation(analyticsLocations[10]);
      } else if (constants3.GUILD_CAP === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseIncreasedGuildCap(currentUser);
        const obj3 = analyticsLocation(analyticsLocations[10]);
      } else {
        flag = false;
        if (constants3.STREAM_HIGH_QUALITY === initialUpsellKey) {
          flag = true;
        }
      }
    }
    if (flag) {
      if (!analyticsLocation(analyticsLocations[13])(initialUpsellKey)) {
        let obj = {
          importer() {
                return asyncRequireImpl(9322, dependencyMap.paths).then((result) => {
                  closure_0 = result.default;
                  return (arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj.initialUpsellKey = initialUpsellKey;
                    obj.analyticsLocation = analyticsLocation;
                    obj.analyticsProperties = analyticsProperties;
                    obj.analyticsLocations = analyticsLocations;
                    obj.largestFileSize = largestFileSize;
                    obj.imageSource = imageSource;
                    return <closure_0 />;
                  };
                });
              }
        };
        tmp30(tmp31[14]).openLazy(obj);
        const tmp30Result = tmp30(tmp31[14]);
      }
      tmp30 = analyticsLocation;
      tmp31 = analyticsLocations;
    }
  },
  usePremiumUpsellConfig
};
export const getUpsellItems = function getUpsellItems() {
  let obj = { key: constants3.GLOBAL_EMOJI, image: _modDef9314, activeTitle: null, passiveTitle: null, description: null };
  const intl = util.intl;
  obj.activeTitle = intl.string(util.t.gKtr8N);
  const intl2 = util.intl;
  obj.passiveTitle = intl2.string(util.t.N8ZRNb);
  const intl3 = util.intl;
  obj.description = intl3.format(util.t.rf7Ixp, {});
  const items = [obj, , , , , ];
  obj = { key: constants3.ANIMATED_EMOJI, image: _modDef9315, activeTitle: null, passiveTitle: null, description: null };
  const intl4 = util.intl;
  obj.activeTitle = intl4.string(util.t.F6rmyq);
  const intl5 = util.intl;
  obj.passiveTitle = intl5.string(util.t.e4cKNt);
  const intl6 = util.intl;
  obj.description = intl6.format(util.t.JxTzzb, {});
  items[1] = obj;
  obj = { key: constants3.ANIMATED_AVATAR, image: _modDef9316, activeTitle: null, passiveTitle: null, description: null };
  const intl7 = util.intl;
  obj.activeTitle = intl7.string(util.t["tQh+gF"]);
  const intl8 = util.intl;
  obj.passiveTitle = intl8.string(util.t.HGSXTM);
  const intl9 = util.intl;
  obj.description = intl9.format(util.t["Tso/Fn"], {});
  items[2] = obj;
  const obj1 = { key: constants3.UPLOAD, image: _modDef9317, activeTitle: null, passiveTitle: null, description: null };
  const intl10 = util.intl;
  obj1.activeTitle = intl10.string(util.t["1EOZqw"]);
  const intl11 = util.intl;
  obj1.passiveTitle = intl11.string(util.t.tB51W4);
  const intl12 = util.intl;
  const obj2 = { maxUploadStandard: null, maxUploadPremium: null };
  const intl13 = util.intl;
  obj2.maxUploadStandard = intl13.string(util.t.Ll40SK);
  obj2.maxUploadPremium = PremiumUtils.getMaxFileSizeForPremiumType(React7.TIER_2);
  obj1.description = intl12.format(util.t.DUT5IC, obj2);
  items[3] = obj1;
  const obj3 = { key: constants3.BADGE, image: _modDef9318, activeTitle: null, passiveTitle: null, description: null };
  const intl14 = util.intl;
  obj3.activeTitle = intl14.string(util.t["602BK4"]);
  const intl15 = util.intl;
  obj3.passiveTitle = intl15.string(util.t.j0TXTX);
  const intl16 = util.intl;
  obj3.description = intl16.format(util.t["p7i+li"], {});
  items[4] = obj3;
  const obj4 = { key: constants3.APP_ICONS, image: _modDef9319, activeTitle: null, passiveTitle: null, description: null };
  const intl17 = util.intl;
  obj4.activeTitle = intl17.string(util.t["1B1Cyn"]);
  const intl18 = util.intl;
  obj4.passiveTitle = intl18.string(util.t["1B1Cyn"]);
  const intl19 = util.intl;
  obj4.description = intl19.string(util.t.VL5TYT);
  items[5] = obj4;
  return items;
};
export { usePremiumUpsellConfig };