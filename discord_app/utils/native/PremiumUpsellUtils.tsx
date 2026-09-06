// discord_app/utils/native/PremiumUpsellUtils.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import getPremiumPlanItem from "../PremiumUtils.tsx";
import registerAssetDefault from "../../../_runtime/09314_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/09315_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/09316_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/09317_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/09318_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/09319_registerAsset.js";
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import GuildFeatures from "../../modules/premium/PremiumConstants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import { usePremiumTrialOffer } from "../../modules/premium/hooks/usePremiumTrialOffer.android.tsx";

require = arg1;
function usePremiumUpsellConfig(upsellType, analyticsLocations, analyticsLocation) {
  const _require = upsellType;
  closure_1 = analyticsLocations;
  dependencyMap = analyticsLocation;
  let obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let items = [,];
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
      return upsellType(analyticsLocation[18]).PremiumFeatureCardOrder.TIER_0_LEADING;
    } else {
      if (closure_1_7.UPLOAD !== upsellType) {
        if (tmp2.ANIMATED_EMOJI !== tmp) {
          if (tmp2.GLOBAL_EMOJI !== tmp) {
            if (tmp2.GLOBAL_STICKER !== tmp) {
              if (tmp2.CUSTOM_PROFILES !== tmp) {
                if (tmp2.PREMIUM_GUILD_PROFILE !== tmp) {
                  if (tmp2.APP_ICONS !== tmp) {
                    if (tmp2.STREAM_HIGH_QUALITY !== tmp) {
                      if (tmp2.LONGER_MESSAGE !== tmp) {
                        if (tmp2.GUILD_CAP !== tmp) {
                          const ANIMATED_AVATAR = tmp2.ANIMATED_AVATAR;
                        }
                      }
                      return upsellType(analyticsLocation[18]).PremiumFeatureCardOrder.TIER_0_LEADING;
                    }
                  }
                }
              }
            }
          }
        }
      }
      return upsellType(analyticsLocation[18]).PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }, items1);
  const items2 = [memo, analyticsLocations, analyticsLocation];
  const items3 = [tmp4, premiumTrialOffer, hasItem];
  const callback = premiumTrialOffer.useCallback(() => {
    let obj = upsellType(analyticsLocation[19]);
    const bestActiveInput = obj.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
    obj = { location: analyticsLocation };
    analyticsLocations(analyticsLocation[20]).track(constants.PREMIUM_PROMOTION_OPENED, obj);
    const obj3 = analyticsLocations(analyticsLocation[20]);
    analyticsLocations(analyticsLocation[21]).hideActionSheet();
    obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
    obj1 = {};
    const obj5 = analyticsLocations(analyticsLocation[21]);
    const merged = Object.assign(analyticsLocation);
    obj1.object = memo.BUTTON_CTA;
    obj[0] = obj1;
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    obj[1] = items;
    obj[2] = memo;
    analyticsLocations(analyticsLocation[22])(obj);
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
        if (closure_1_8.TIER_0 === skuId) {
          const intl4 = upsellType(analyticsLocation[6]).intl;
          return intl4.string(upsellType(analyticsLocation[6]).t.hz78hE);
        } else if (tmp8.TIER_2 === skuId) {
          const intl3 = upsellType(analyticsLocation[6]).intl;
          return intl3.string(upsellType(analyticsLocation[6]).t["Gd/XHF"]);
        }
      } else if (closure_5) {
        const intl = upsellType(analyticsLocation[6]).intl;
        return intl.string(upsellType(analyticsLocation[6]).t["9CM5v9"]);
      }
      const intl2 = upsellType(analyticsLocation[6]).intl;
      return intl2.string(upsellType(analyticsLocation[6]).t.pj0XBN);
    }, items3),
  };
  return obj;
}
({ AnalyticEvents: c5, AnalyticsObjects: closure_6, UpsellTypes: error } = ME);
({ PremiumSubscriptionSKUs: closure_8, PremiumTypes: c9 } = GuildFeatures);
const result = require("set").fileFinishedImporting("utils/native/PremiumUpsellUtils.tsx");

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
    ({ largestFileSize: closure_4, imageSource: closure_5 } = initialUpsellKey);
    currentUser = currentUser.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (constants.UPLOAD === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).isPremiumExactly(currentUser, closure_9.TIER_2);
        const obj15 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.GLOBAL_EMOJI === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseEmojisEverywhere(currentUser);
        const obj14 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.ANIMATED_AVATAR === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseAnimatedAvatar(currentUser);
        const obj13 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.BADGE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseBadges(currentUser);
        const obj12 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.ANIMATED_EMOJI === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseAnimatedEmojis(currentUser);
        const obj11 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.EMOJI_AUTOCOMPLETE === initialUpsellKey) {
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
      } else if (tmp2.CUSTOM_PROFILES === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUsePremiumProfileCustomization(currentUser);
        const obj8 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.APP_ICONS === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUsePremiumAppIcons(currentUser);
        const obj7 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.GLOBAL_STICKER === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseCustomStickersEverywhere(currentUser);
        const obj6 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUsePremiumGuildMemberProfile(currentUser);
        const obj5 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.LONGER_MESSAGE === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseIncreasedMessageLength(currentUser);
        const obj4 = analyticsLocation(analyticsLocations[10]);
      } else if (tmp2.GUILD_CAP === initialUpsellKey) {
        flag = !analyticsLocation(analyticsLocations[10]).canUseIncreasedGuildCap(currentUser);
        const obj3 = analyticsLocation(analyticsLocations[10]);
      } else {
        flag = false;
        if (tmp2.STREAM_HIGH_QUALITY === initialUpsellKey) {
          flag = true;
        }
      }
    }
    if (flag) {
      if (!analyticsLocation(analyticsLocations[13])(initialUpsellKey)) {
        let obj = { importer: null };
        obj[0] = function importer() {
          return initialUpsellKey(analyticsLocations[16])(analyticsLocations[15], analyticsLocations.paths).then(
            (arg0) => {
              closure_0 = arg0.default;
              return (arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj.initialUpsellKey = closure_0;
                obj.analyticsLocation = closure_1_1;
                obj.analyticsProperties = closure_1_3;
                obj.analyticsLocations = closure_1_2;
                obj.largestFileSize = closure_1_4;
                obj.imageSource = closure_1_5;
                return closure_2_10(closure_0, obj);
              };
            },
          );
        };
        tmp30(tmp31[14]).openLazy(obj);
        const tmp30Result = tmp30(tmp31[14]);
      }
      tmp30 = analyticsLocation;
      tmp31 = analyticsLocations;
    }
  },
  usePremiumUpsellConfig,
};
export const getUpsellItems = function getUpsellItems() {
  let obj = {
    key: constants.GLOBAL_EMOJI,
    image: registerAssetDefault,
    activeTitle: null,
    passiveTitle: null,
    description: null,
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.gKtr8N);
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t.N8ZRNb);
  const intl3 = getSystemLocale.intl;
  obj[4] = intl3.format(getSystemLocale.t.rf7Ixp, {});
  const items = [obj, , , , ,];
  obj = {
    key: constants.ANIMATED_EMOJI,
    image: registerAssetDefault2,
    activeTitle: null,
    passiveTitle: null,
    description: null,
  };
  const intl4 = getSystemLocale.intl;
  obj[2] = intl4.string(getSystemLocale.t.F6rmyq);
  const intl5 = getSystemLocale.intl;
  obj[3] = intl5.string(getSystemLocale.t.e4cKNt);
  const intl6 = getSystemLocale.intl;
  obj[4] = intl6.format(getSystemLocale.t.JxTzzb, {});
  items[1] = obj;
  obj = {
    key: constants.ANIMATED_AVATAR,
    image: registerAssetDefault3,
    activeTitle: null,
    passiveTitle: null,
    description: null,
  };
  const intl7 = getSystemLocale.intl;
  obj[2] = intl7.string(getSystemLocale.t["tQh+gF"]);
  const intl8 = getSystemLocale.intl;
  obj[3] = intl8.string(getSystemLocale.t.HGSXTM);
  const intl9 = getSystemLocale.intl;
  obj[4] = intl9.format(getSystemLocale.t["Tso/Fn"], {});
  items[2] = obj;
  obj1 = {
    key: constants.UPLOAD,
    image: registerAssetDefault4,
    activeTitle: null,
    passiveTitle: null,
    description: null,
  };
  const intl10 = getSystemLocale.intl;
  obj1[2] = intl10.string(getSystemLocale.t["1EOZqw"]);
  const intl11 = getSystemLocale.intl;
  obj1[3] = intl11.string(getSystemLocale.t.tB51W4);
  const intl12 = getSystemLocale.intl;
  const obj2 = { maxUploadStandard: null, maxUploadPremium: null };
  const intl13 = getSystemLocale.intl;
  obj2[0] = intl13.string(getSystemLocale.t.Ll40SK);
  obj2[1] = getPremiumPlanItem.getMaxFileSizeForPremiumType(closure_9.TIER_2);
  obj1[4] = intl12.format(getSystemLocale.t.DUT5IC, obj2);
  items[3] = obj1;
  const obj3 = {
    key: constants.BADGE,
    image: registerAssetDefault5,
    activeTitle: null,
    passiveTitle: null,
    description: null,
  };
  const intl14 = getSystemLocale.intl;
  obj3[2] = intl14.string(getSystemLocale.t["602BK4"]);
  const intl15 = getSystemLocale.intl;
  obj3[3] = intl15.string(getSystemLocale.t.j0TXTX);
  const intl16 = getSystemLocale.intl;
  obj3[4] = intl16.format(getSystemLocale.t["p7i+li"], {});
  items[4] = obj3;
  const obj4 = {
    key: constants.APP_ICONS,
    image: registerAssetDefault6,
    activeTitle: null,
    passiveTitle: null,
    description: null,
  };
  const intl17 = getSystemLocale.intl;
  obj4[2] = intl17.string(getSystemLocale.t["1B1Cyn"]);
  const intl18 = getSystemLocale.intl;
  obj4[3] = intl18.string(getSystemLocale.t["1B1Cyn"]);
  const intl19 = getSystemLocale.intl;
  obj4[4] = intl19.string(getSystemLocale.t.VL5TYT);
  items[5] = obj4;
  return items;
};
export { usePremiumUpsellConfig };
