// === Module 8818: PremiumUpsellUtils ===

// Module 8818 (PremiumUpsellUtils)
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import ChatInputUtils from "ChatInputUtils" /* 4745 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import _modDef8819 from "module_8819" /* 8819 */;
import _modDef8820 from "module_8820" /* 8820 */;
import _modDef8821 from "module_8821" /* 8821 */;
import _modDef8822 from "module_8822" /* 8822 */;
import _modDef8823 from "module_8823" /* 8823 */;
import _modDef8824 from "module_8824" /* 8824 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8867 */;
import openPremiumModalDefault from "openPremiumModal" /* 8914 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AnalyticsObjects: metroRequire, UpsellTypes: closure_7 } = Constants);
const PremiumConstants = fn(1379);
({ PremiumSubscriptionSKUs: closure_8, PremiumTypes: closure_9 } = PremiumConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, _location) => {
  _require = arg1;
  importDefault = _location;
  let stringResult = TIER_2_LEADING;
  const cResult = require("c").c(13);
  let obj = require("c");
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    let items = [, ];
    ({ GLOBAL_EMOJI: arr[0], UPLOAD: arr[1] } = constants3);
    const set = new Set(items);
    cResult[0] = set;
    let first = set;
  } else {
    first = cResult[0];
  }
  const tmp11 = null != premiumTrialOffer && first.has(arg0);
  let tmp12 = tmp11;
  if (tmp11) {
    let skuId;
    if (premiumTrialOffer != null) {
      const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
    }
    tmp12 = skuId === closure_8.TIER_0;
  }
  if (tmp12) {
    TIER_2_LEADING = tmp(stringResult[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
  } else {
    if (constants3.UPLOAD !== arg0) {
      if (constants3.ANIMATED_EMOJI !== arg0) {
        if (constants3.GLOBAL_EMOJI !== arg0) {
          if (constants3.GLOBAL_STICKER !== arg0) {
            if (constants3.CUSTOM_PROFILES !== arg0) {
              if (constants3.PREMIUM_GUILD_PROFILE !== arg0) {
                if (constants3.APP_ICONS !== arg0) {
                  if (constants3.STREAM_HIGH_QUALITY !== arg0) {
                    if (constants3.SHOP_MEMBER_PRICING !== arg0) {
                      if (constants3.LONGER_MESSAGE !== arg0) {
                        if (constants3.GUILD_CAP !== arg0) {
                          const ANIMATED_AVATAR = constants3.ANIMATED_AVATAR;
                        }
                      }
                      TIER_2_LEADING = tmp(stringResult[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    TIER_2_LEADING = tmp(stringResult[20]).PremiumFeatureCardOrder.TIER_2_LEADING;
  }
  if (cResult[1] === _location) {
    if (cResult[2] === arg1) {
      if (cResult[3] === TIER_2_LEADING) {
        let tmp16 = cResult[4];
      }
      if (tmp11) {
        let skuId1;
        if (premiumTrialOffer != null) {
          const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
          if (subscriptionTrial2 != null) {
            skuId1 = subscriptionTrial2.skuId;
          }
        }
        if (closure_8.TIER_0 === skuId1) {
          const _Symbol4 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(stringResult[6]).intl;
            stringResult = intl4.string(tmp(stringResult[6]).t.hz78hE);
            cResult[5] = stringResult;
          }
        } else {
          if (tmp20.TIER_2 === skuId1) {
            const _Symbol3 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(stringResult[6]).intl;
              const stringResult1 = intl3.string(tmp(stringResult[6]).t["Gd/XHF"]);
              cResult[6] = stringResult1;
              let tmp23 = stringResult1;
            } else {
              tmp23 = cResult[6];
            }
            let tmp17 = tmp23;
          }
          if (cResult[9] === tmp17) {
            if (cResult[10] === tmp16) {
              if (cResult[11] === tmp12) {
                let tmp27 = cResult[12];
              }
              return tmp27;
            }
          }
          let obj3 = { useTier0UpsellContent: tmp12, onViewAllPerks: tmp16, getNitroText: tmp17 };
          cResult[9] = tmp17;
          cResult[10] = tmp16;
          cResult[11] = tmp12;
          cResult[12] = obj3;
          tmp27 = obj3;
        }
      } else if (tmp12) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(stringResult[6]).intl;
          const stringResult2 = intl.string(tmp(stringResult[6]).t["9CM5v9"]);
          cResult[7] = stringResult2;
          tmp17 = stringResult2;
        } else {
          tmp17 = cResult[7];
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(stringResult[6]).intl;
        const stringResult3 = intl2.string(tmp(stringResult[6]).t.pj0XBN);
        cResult[8] = stringResult3;
        let tmp21 = stringResult3;
      } else {
        tmp21 = cResult[8];
      }
      tmp17 = tmp21;
    }
  }
  class P {
    constructor() {
      tmp = closure_2;
      obj = closure_0(closure_2[21]);
      bestActiveInput = obj.getBestActiveInput();
      if (bestActiveInput != null) {
        closeCustomKeyboardResult = bestActiveInput.closeCustomKeyboard();
      }
      obj3 = closure_1(tmp[22]);
      obj1 = { location: closure_1 };
      trackResult = obj3.track(AnalyticEvents.PREMIUM_PROMOTION_OPENED, obj1);
      obj5 = closure_1(tmp[23]);
      hideAllActionSheetsResult = obj5.hideAllActionSheets();
      obj8 = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
      obj9 = {};
      tmp5 = closure_1(tmp[24]);
      merged = Object.assign(closure_1);
      obj9.object = AnalyticsObjects.BUTTON_CTA;
      obj8.analyticsLocation = obj9;
      items = closure_0;
      if (closure_0 == null) {
        items = [];
      }
      obj8.analyticsLocations = items;
      obj8.premiumFeatureCardOrder = TIER_2_LEADING;
      tmp5Result = tmp5(obj8);
      return;
    }
  }
  cResult[1] = _location;
  cResult[2] = arg1;
  cResult[3] = TIER_2_LEADING;
  cResult[4] = P;
  tmp16 = P;
  let obj2 = require("usePremiumTrialOffer");
}) : ((arg0, arg1, _location) => {
  _require = arg0;
  closure_1 = arg1;
  dependencyMap = _location;
  const premiumTrialOffer = require("usePremiumTrialOffer").usePremiumTrialOffer();
  let items = [, ];
  ({ GLOBAL_EMOJI: arr[0], UPLOAD: arr[1] } = closure_7);
  const set = new Set(items);
  let hasItem = null != premiumTrialOffer;
  if (hasItem) {
    hasItem = set.has(arg0);
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
    tmp4 = skuId === closure_8.TIER_0;
  }
  closure_5 = tmp4;
  const items1 = [arg0, tmp4];
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
                      if (constants3.SHOP_MEMBER_PRICING !== closure_0) {
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
      }
      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
    }
  }, items1);
  const items2 = [memo, arg1, _location];
  const items3 = [tmp4, premiumTrialOffer, hasItem];
  const callback = premiumTrialOffer.useCallback(() => {
    const bestActiveInput = ChatInputUtils.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
    AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, { location: _location });
    const obj2 = { location: _location };
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const obj4 = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
    const obj6 = {};
    const merged = Object.assign(_location);
    obj6.object = constants2.BUTTON_CTA;
    obj4.analyticsLocation = obj6;
    let items = closure_1;
    if (closure_1 == null) {
      items = [];
    }
    obj4.analyticsLocations = items;
    obj4.premiumFeatureCardOrder = memo;
    openPremiumModalDefault(obj4);
  }, items2);
  let obj = require("usePremiumTrialOffer");
  return {
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
        if (closure_2_8.TIER_0 === skuId) {
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
});
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
    ({ largestFileSize: UserStore, imageSource: closure_5, isDismissable } = initialUpsellKey);
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
        let tmp19 = !canUseAnimatedEmojisResult;
        if (canUseAnimatedEmojisResult) {
          tmp19 = !tmp16(tmp17[10]).canUseEmojisEverywhere(currentUser);
          const tmp16Result = tmp16(tmp17[10]);
        }
        flag = tmp19;
        const obj9 = analyticsLocation(analyticsLocations[10]);
        tmp16 = analyticsLocation;
        tmp17 = analyticsLocations;
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
                return asyncRequireImpl(8827, dependencyMap.paths).then((result) => {
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
              },
          isDismissable: tmp
        };
        tmp31(tmp32[14]).openLazy(obj);
        const tmp31Result = tmp31(tmp32[14]);
      }
      tmp31 = analyticsLocation;
      tmp32 = analyticsLocations;
    }
    tmp = undefined !== isDismissable && isDismissable;
  },
  usePremiumUpsellConfig: tmp4
};
export const getUpsellItems = function getUpsellItems() {
  const obj = { key: constants3.GLOBAL_EMOJI, image: _modDef8819, activeTitle: null, passiveTitle: null, description: null };
  const intl = util.intl;
  obj.activeTitle = intl.string(util.t.gKtr8N);
  const intl2 = util.intl;
  obj.passiveTitle = intl2.string(util.t.N8ZRNb);
  const intl3 = util.intl;
  obj.description = intl3.format(util.t.rf7Ixp, {});
  const items = [obj, , , , , ];
  const obj2 = { key: constants3.ANIMATED_EMOJI, image: _modDef8820, activeTitle: null, passiveTitle: null, description: null };
  const intl4 = util.intl;
  obj2.activeTitle = intl4.string(util.t.F6rmyq);
  const intl5 = util.intl;
  obj2.passiveTitle = intl5.string(util.t.e4cKNt);
  const intl6 = util.intl;
  obj2.description = intl6.format(util.t.JxTzzb, {});
  items[1] = obj2;
  const obj3 = { key: constants3.ANIMATED_AVATAR, image: _modDef8821, activeTitle: null, passiveTitle: null, description: null };
  const intl7 = util.intl;
  obj3.activeTitle = intl7.string(util.t["tQh+gF"]);
  const intl8 = util.intl;
  obj3.passiveTitle = intl8.string(util.t.HGSXTM);
  const intl9 = util.intl;
  obj3.description = intl9.format(util.t["Tso/Fn"], {});
  items[2] = obj3;
  const obj4 = { key: constants3.UPLOAD, image: _modDef8822, activeTitle: null, passiveTitle: null, description: null };
  const intl10 = util.intl;
  obj4.activeTitle = intl10.string(util.t["1EOZqw"]);
  const intl11 = util.intl;
  obj4.passiveTitle = intl11.string(util.t.tB51W4);
  const intl12 = util.intl;
  const obj5 = { maxUploadStandard: null, maxUploadPremium: null };
  const intl13 = util.intl;
  obj5.maxUploadStandard = intl13.string(util.t.Ll40SK);
  obj5.maxUploadPremium = PremiumUtils.getMaxFileSizeForPremiumType(options.TIER_2);
  obj4.description = intl12.format(util.t.DUT5IC, obj5);
  items[3] = obj4;
  const obj7 = { key: constants3.BADGE, image: _modDef8823, activeTitle: null, passiveTitle: null, description: null };
  const intl14 = util.intl;
  obj7.activeTitle = intl14.string(util.t["602BK4"]);
  const intl15 = util.intl;
  obj7.passiveTitle = intl15.string(util.t.j0TXTX);
  const intl16 = util.intl;
  obj7.description = intl16.format(util.t["p7i+li"], {});
  items[4] = obj7;
  const obj8 = { key: constants3.APP_ICONS, image: _modDef8824, activeTitle: null, passiveTitle: null, description: null };
  const intl17 = util.intl;
  obj8.activeTitle = intl17.string(util.t["1B1Cyn"]);
  const intl18 = util.intl;
  obj8.passiveTitle = intl18.string(util.t["1B1Cyn"]);
  const intl19 = util.intl;
  obj8.description = intl19.string(util.t.VL5TYT);
  items[5] = obj8;
  return items;
};
export const usePremiumUpsellConfig = tmp4;