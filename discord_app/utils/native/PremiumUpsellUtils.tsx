// === Module 8848: PremiumUpsellUtils ===

// Module 8848 (PremiumUpsellUtils)
import Fragment from "Fragment" /* 21 */;
import intl20 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import ChatInputUtils from "ChatInputUtils" /* 4751 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import AssetRegistryDefault from "AssetRegistry" /* 8849 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8850 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8851 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8852 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8853 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8854 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closeCustomKeyboardResult, dependencyMap, hideAllActionSheetsResult, importDefault, obj1, set, tmp5Result, trackResult;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, AnalyticsObjects: metroRequire, UpsellTypes: metroImportDefault } = Constants);
({ PremiumSubscriptionSKUs: metroImportAll, PremiumTypes: c9 } = PremiumConstants);
const jsx = Fragment.jsx;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0, arg1, _location) {
  let TIER_2_LEADING;
  let closure_0;
  let first;
  _require = arg1;
  importDefault = _location;
  let obj = require("react");
  const cResult = obj.c(13);
  let obj2 = require("usePremiumTrialOffer");
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Set = Set;
    let items = [, ];
    ({ GLOBAL_EMOJI: arr[0], UPLOAD: arr[1] } = constants3);
    const self = this;
    const self2 = this;
    set = new Set(items);
    cResult[0] = set;
    first = set;
  } else {
    first = cResult[0];
  }
  const tmp9 = null != premiumTrialOffer && first.has(arg0);
  let tmp10 = tmp9;
  if (tmp10) {
    let skuId;
    if (premiumTrialOffer != null) {
      const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
    }
    tmp10 = skuId === closure_8.TIER_0;
  }
  if (tmp10) {
    TIER_2_LEADING = tmp(tmp2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
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
                      TIER_2_LEADING = tmp(tmp2[20]).PremiumFeatureCardOrder.TIER_0_LEADING;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    TIER_2_LEADING = tmp(tmp2[20]).PremiumFeatureCardOrder.TIER_2_LEADING;
  }
  if (cResult[1] === _location) {
    if (cResult[2] === arg1) {
      let tmp14;
      let tmp15;
      let tmp19;
      if (cResult[3] === TIER_2_LEADING) {
        tmp14 = cResult[4];
      }
      if (tmp9) {
        let skuId1;
        if (premiumTrialOffer != null) {
          const subscriptionTrial2 = premiumTrialOffer.subscriptionTrial;
          if (subscriptionTrial2 != null) {
            skuId1 = subscriptionTrial2.skuId;
          }
        }
        if (closure_8.TIER_0 === skuId1) {
          let tmp23;
          const _Symbol4 = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = tmp(tmp2[6]).intl;
            const stringResult = intl4.string(require("intl").t.hz78hE);
            cResult[5] = stringResult;
            tmp23 = stringResult;
          } else {
            tmp23 = cResult[5];
          }
          tmp15 = tmp23;
        } else if (tmp18.TIER_2 === skuId1) {
          let tmp21;
          const _Symbol3 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(tmp2[6]).intl;
            const stringResult1 = intl3.string(require("intl").t["Gd/XHF"]);
            cResult[6] = stringResult1;
            tmp21 = stringResult1;
          } else {
            tmp21 = cResult[6];
          }
          tmp15 = tmp21;
        }
        if (cResult[9] === tmp15) {
          if (cResult[10] === tmp14) {
            let tmp25;
            if (cResult[11] === tmp10) {
              tmp25 = cResult[12];
            }
            return tmp25;
          }
        }
        let obj3 = { useTier0UpsellContent: tmp10, onViewAllPerks: tmp14, getNitroText: tmp15 };
        cResult[9] = tmp15;
        cResult[10] = tmp14;
        cResult[11] = tmp10;
        cResult[12] = obj3;
        tmp25 = obj3;
      } else if (tmp10) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(tmp2[6]).intl;
          const stringResult2 = intl.string(require("intl").t["9CM5v9"]);
          cResult[7] = stringResult2;
          tmp15 = stringResult2;
        } else {
          tmp15 = cResult[7];
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[6]).intl;
        const stringResult3 = intl2.string(require("intl").t.pj0XBN);
        cResult[8] = stringResult3;
        tmp19 = stringResult3;
      } else {
        tmp19 = cResult[8];
      }
      tmp15 = tmp19;
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
  tmp14 = P;
}) : ((arg0, arg1, _location) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  dependencyMap = _location;
  let obj = require("usePremiumTrialOffer");
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let items = [, ];
  ({ GLOBAL_EMOJI: arr[0], UPLOAD: arr[1] } = closure_7);
  set = new Set(items);
  const hasItem = null != premiumTrialOffer && set.has(arg0);
  let tmp4 = hasItem;
  if (tmp4) {
    let skuId;
    if (premiumTrialOffer != null) {
      let subscriptionTrial = premiumTrialOffer.subscriptionTrial;
      if (subscriptionTrial != null) {
        skuId = subscriptionTrial.skuId;
      }
    }
    tmp4 = skuId === closure_8.TIER_0;
  }
  let closure_5 = tmp4;
  const items1 = [arg0, tmp4];
  const memo = premiumTrialOffer.useMemo(() => {
    if (closure_5) {
      return PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_0_LEADING;
    } else {
      if (metroImportDefault.UPLOAD !== closure_0) {
        if (metroImportDefault.ANIMATED_EMOJI !== closure_0) {
          if (metroImportDefault.GLOBAL_EMOJI !== closure_0) {
            if (metroImportDefault.GLOBAL_STICKER !== closure_0) {
              if (metroImportDefault.CUSTOM_PROFILES !== closure_0) {
                if (metroImportDefault.PREMIUM_GUILD_PROFILE !== closure_0) {
                  if (metroImportDefault.APP_ICONS !== closure_0) {
                    if (metroImportDefault.STREAM_HIGH_QUALITY !== closure_0) {
                      if (metroImportDefault.SHOP_MEMBER_PRICING !== closure_0) {
                        if (metroImportDefault.LONGER_MESSAGE !== closure_0) {
                          if (metroImportDefault.GUILD_CAP !== closure_0) {
                            const ANIMATED_AVATAR = metroImportDefault.ANIMATED_AVATAR;
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
    let items;
    let obj6;
    const obj = ChatInputUtils;
    const bestActiveInput = obj.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
    const obj2 = { location: _location };
    const obj3 = AnalyticsUtilsDefault;
    obj3.track(hasOwnProperty.PREMIUM_PROMOTION_OPENED, obj2);
    const obj5 = ActionSheetActionCreatorsDefault;
    obj5.hideAllActionSheets();
    const obj4 = { analyticsLocation: obj6, analyticsLocations: items, premiumFeatureCardOrder: memo };
    obj6 = { object: metroRequire.BUTTON_CTA };
    const tmp5 = openPremiumModalDefault;
    const merged = Object.assign(_location);
    items = closure_1;
    if (closure_1 == null) {
      items = [];
    }
    tmp5(obj4);
  }, items2);
  let obj2 = {
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
        if (metroImportAll.TIER_0 === skuId) {
          const intl4 = intl20.intl;
          return intl4.string(intl20.t.hz78hE);
        } else if (tmp9.TIER_2 === skuId) {
          const intl3 = intl20.intl;
          return intl3.string(intl20.t["Gd/XHF"]);
        }
      } else if (closure_5) {
        const intl = intl20.intl;
        return intl.string(intl20.t["9CM5v9"]);
      }
      const intl2 = intl20.intl;
      return intl2.string(intl20.t.pj0XBN);
    }, items3)
  };
  return obj2;
});
let obj = {
  handleShowUpsellAlert(initialUpsellKey) {
    let closure_5;
    let isDismissable;
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
    const tmp = undefined !== isDismissable && isDismissable;
    const currentUser = UserStore.getCurrentUser();
    let flag = false;
    if (null != currentUser) {
      if (constants3.UPLOAD === initialUpsellKey) {
        const obj15 = analyticsLocation(analyticsLocations[10]);
        flag = !obj15.isPremiumExactly(currentUser, TIER_2.TIER_2);
      } else if (constants3.GLOBAL_EMOJI === initialUpsellKey) {
        const obj14 = analyticsLocation(analyticsLocations[10]);
        flag = !obj14.canUseEmojisEverywhere(currentUser);
      } else if (constants3.ANIMATED_AVATAR === initialUpsellKey) {
        const obj13 = analyticsLocation(analyticsLocations[10]);
        flag = !obj13.canUseAnimatedAvatar(currentUser);
      } else if (constants3.BADGE === initialUpsellKey) {
        const obj12 = analyticsLocation(analyticsLocations[10]);
        flag = !obj12.canUseBadges(currentUser);
      } else if (constants3.ANIMATED_EMOJI === initialUpsellKey) {
        const obj11 = analyticsLocation(analyticsLocations[10]);
        flag = !obj11.canUseAnimatedEmojis(currentUser);
      } else if (constants3.EMOJI_AUTOCOMPLETE === initialUpsellKey) {
        const obj9 = analyticsLocation(analyticsLocations[10]);
        const canUseAnimatedEmojisResult = obj9.canUseAnimatedEmojis(currentUser);
        let tmp19 = !canUseAnimatedEmojisResult;
        const tmp16 = analyticsLocation;
        const tmp17 = analyticsLocations;
        if (canUseAnimatedEmojisResult) {
          const tmp16Result = tmp16(tmp17[10]);
          tmp19 = !tmp16Result.canUseEmojisEverywhere(currentUser);
        }
        flag = tmp19;
      } else if (constants3.CUSTOM_PROFILES === initialUpsellKey) {
        const obj8 = analyticsLocation(analyticsLocations[10]);
        flag = !obj8.canUsePremiumProfileCustomization(currentUser);
      } else if (constants3.APP_ICONS === initialUpsellKey) {
        const obj7 = analyticsLocation(analyticsLocations[10]);
        flag = !obj7.canUsePremiumAppIcons(currentUser);
      } else if (constants3.GLOBAL_STICKER === initialUpsellKey) {
        const obj6 = analyticsLocation(analyticsLocations[10]);
        flag = !obj6.canUseCustomStickersEverywhere(currentUser);
      } else if (constants3.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
        const obj5 = analyticsLocation(analyticsLocations[10]);
        flag = !obj5.canUsePremiumGuildMemberProfile(currentUser);
      } else if (constants3.LONGER_MESSAGE === initialUpsellKey) {
        const obj4 = analyticsLocation(analyticsLocations[10]);
        flag = !obj4.canUseIncreasedMessageLength(currentUser);
      } else if (constants3.GUILD_CAP === initialUpsellKey) {
        const obj3 = analyticsLocation(analyticsLocations[10]);
        flag = !obj3.canUseIncreasedGuildCap(currentUser);
      } else {
        flag = false;
        if (constants3.STREAM_HIGH_QUALITY === initialUpsellKey) {
          flag = true;
        }
      }
    }
    if (flag) {
      const tmp31 = analyticsLocation;
      const tmp32 = analyticsLocations;
      if (!analyticsLocation(analyticsLocations[13])(initialUpsellKey)) {
        const obj = {
          importer() {
                let imageSource;
                let largestFileSize;
                const promise = asyncRequire(8857, dependencyMap.paths);
                return promise.then((result) => {
                  let closure_0 = result.default;
                  return (arg0) => {
                    const merged = Object.assign(arg0);
                    return <closure_0 initialUpsellKey={initialUpsellKey} analyticsLocation={analyticsLocation} analyticsProperties={analyticsProperties} analyticsLocations={analyticsLocations} largestFileSize={largestFileSize} imageSource={imageSource} />;
                  };
                });
              },
          isDismissable: tmp
        };
        const tmp31Result = tmp31(tmp32[14]);
        tmp31Result.openLazy(obj);
      }
    }
  },
  usePremiumUpsellConfig: tmp4
};
const result = size.fileFinishedImporting("utils/native/PremiumUpsellUtils.tsx");

export default obj;
export const getUpsellItems = function getUpsellItems() {
  let DUT5IC;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj5;
  let obj6;
  const obj = { key: metroImportDefault.GLOBAL_EMOJI, image: AssetRegistryDefault, activeTitle: intl.string(intl20.t.gKtr8N), passiveTitle: intl2.string(intl20.t.N8ZRNb), description: intl3.format(intl20.t.rf7Ixp, {}) };
  intl = intl20.intl;
  intl2 = intl20.intl;
  intl3 = intl20.intl;
  const items = [obj, , , , , ];
  const obj2 = { key: metroImportDefault.ANIMATED_EMOJI, image: AssetRegistryDefault2, activeTitle: intl4.string(intl20.t.F6rmyq), passiveTitle: intl5.string(intl20.t.e4cKNt), description: intl6.format(intl20.t.JxTzzb, {}) };
  intl4 = intl20.intl;
  intl5 = intl20.intl;
  intl6 = intl20.intl;
  items[1] = obj2;
  const obj3 = { key: metroImportDefault.ANIMATED_AVATAR, image: AssetRegistryDefault3, activeTitle: intl7.string(intl20.t["tQh+gF"]), passiveTitle: intl8.string(intl20.t.HGSXTM), description: intl9.format(intl20.t["Tso/Fn"], {}) };
  intl7 = intl20.intl;
  intl8 = intl20.intl;
  intl9 = intl20.intl;
  items[2] = obj3;
  const obj4 = { key: metroImportDefault.UPLOAD, image: AssetRegistryDefault4, activeTitle: intl10.string(intl20.t["1EOZqw"]), passiveTitle: intl11.string(intl20.t.tB51W4), description: format(DUT5IC, obj5) };
  intl10 = intl20.intl;
  intl11 = intl20.intl;
  const intl12 = intl20.intl;
  format = intl12.format;
  obj5 = { maxUploadStandard: intl13.string(intl20.t.Ll40SK), maxUploadPremium: obj6.getMaxFileSizeForPremiumType(React4.TIER_2) };
  DUT5IC = intl20.t.DUT5IC;
  intl13 = intl20.intl;
  items[3] = obj4;
  obj6 = PremiumUtils;
  const obj7 = { key: metroImportDefault.BADGE, image: AssetRegistryDefault5, activeTitle: intl14.string(intl20.t["602BK4"]), passiveTitle: intl15.string(intl20.t.j0TXTX), description: intl16.format(intl20.t["p7i+li"], {}) };
  intl14 = intl20.intl;
  intl15 = intl20.intl;
  intl16 = intl20.intl;
  items[4] = obj7;
  const obj8 = { key: metroImportDefault.APP_ICONS, image: AssetRegistryDefault6, activeTitle: intl17.string(intl20.t["1B1Cyn"]), passiveTitle: intl18.string(intl20.t["1B1Cyn"]), description: intl19.string(intl20.t.VL5TYT) };
  intl17 = intl20.intl;
  intl18 = intl20.intl;
  intl19 = intl20.intl;
  items[5] = obj8;
  return items;
};
export const usePremiumUpsellConfig = tmp4;