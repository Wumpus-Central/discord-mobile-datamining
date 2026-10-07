// === Module 9929: EmojiPickerPremiumSearchUpsell ===

// Module 9929 (EmojiPickerPremiumSearchUpsell)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import MobileEmojiPickerUpsellRestyleExperiment from "MobileEmojiPickerUpsellRestyleExperiment" /* 7498 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 8896 */;
import openPremiumModalDefault from "openPremiumModal" /* 8943 */;
import _modDef9930 from "module_9930" /* 9930 */;
import PremiumExpressionPickerSearchUpsellDefault from "PremiumExpressionPickerSearchUpsell" /* 9931 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const util = NitroWheelIcon(1126);
const native = NitroWheelIcon(1188);
const PremiumUtils = NitroWheelIcon(4534);
const NitroWheelIcon2 = NitroWheelIcon(8346);
require = fn;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: closure_7 } = Constants);
const PremiumConstants = fn(1379);
({ PremiumSubscriptionSKUs: closure_8, PremiumUpsellTypes: closure_9, SubscriptionPlans: c10 } = PremiumConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_12 = createStyles.createStyles({ nitroIcon: { marginRight: 8, alignSelf: "center" } });
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(useTier0UpsellContent[7]).c(5);
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  useTier0UpsellContent = guildId.useTier0UpsellContent;
  ref = ref.useRef(false);
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === guildId) {
      if (cResult[2] === useTier0UpsellContent) {
        let tmp3 = cResult[3];
        let tmp4 = cResult[4];
      }
      const effect = ref.useEffect(tmp3, tmp4);
    }
  }
  const fn = function l() {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
      if (null != guildId) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      obj2.location = obj3;
      obj2.location_stack = analyticsLocations;
      obj2.sku_id = useTier0UpsellContent ? closure_2_8.TIER_0 : closure_2_8.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  };
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  cResult[0] = analyticsLocations;
  cResult[1] = guildId;
  cResult[2] = useTier0UpsellContent;
  cResult[3] = fn;
  cResult[4] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const analyticsLocations = guildId.analyticsLocations;
  const useTier0UpsellContent = guildId.useTier0UpsellContent;
  let ref;
  ref = ref.useRef(false);
  const items = [analyticsLocations, guildId, useTier0UpsellContent, ref];
  const effect = ref.useEffect(() => {
    if (!ref.current) {
      tmp.current = true;
      let obj2 = { type: constants4.EMOJI_PICKER_SEARCH, location: null, location_stack: null, sku_id: null };
      if (null != guildId) {
        let DM_CHANNEL = constants2.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = constants2.DM_CHANNEL;
      }
      const obj3 = { page: DM_CHANNEL, section: constants3.EMOJI_PICKER_POPOUT };
      obj2.location = obj3;
      obj2.location_stack = analyticsLocations;
      obj2.sku_id = useTier0UpsellContent ? closure_2_8.TIER_0 : closure_2_8.TIER_2;
      obj2 = AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }
  }, items);
});
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocations) => {
  const cResult = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]).c(9);
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[7]);
  mobileEmojiPickerUpsellRestyleEnabled = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const upsellType = tmp(tmp2[10]).getUpsellType(tmp(tmp2[11]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    cResult[0] = upsellType;
    let first = upsellType;
    const tmpResult = tmp(tmp2[10]);
  } else {
    first = cResult[0];
  }
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  const tmpResult2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]);
  ({ loading, onPress } = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[13])(useTier0UpsellContent, analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]).usePremiumUpsellConfig(first, analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE));
  if (cResult[1] === analyticsLocations) {
    if (cResult[2] === onPress) {
      if (cResult[3] === mobileEmojiPickerUpsellRestyleEnabled) {
        if (cResult[4] === useTier0UpsellContent) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] === loading) {
          if (cResult[7] === tmp8) {
            let tmp9 = cResult[8];
          }
          return tmp9;
        }
        let obj3 = { loading, onPress: tmp8 };
        cResult[6] = loading;
        cResult[7] = tmp8;
        cResult[8] = obj3;
        tmp9 = obj3;
      }
    }
  }
  class I {
    constructor() {
      currentUser = closure_4.getCurrentUser();
      result = null == currentUser;
      if (!result) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        obj = closure_1(closure_2[14]);
        result = obj.canUseEmojisEverywhere(currentUser);
      }
      if (!result) {
        tmp5 = closure_2;
        if (closure_2) {
          tmp14 = onPress;
          tmp15 = onPress();
        } else {
          tmp6 = closure_1;
          tmp7 = closure_2;
          obj2 = closure_1(closure_2[15]);
          hideActionSheetResult = obj2.hideActionSheet();
          obj1 = { analyticsLocations: null, premiumFeatureCardOrder: null };
          tmp10 = analyticsLocations;
          obj1.analyticsLocations = analyticsLocations;
          tmp11 = useTier0UpsellContent;
          tmp12 = closure_0;
          tmp9 = closure_1(closure_2[16]);
          PremiumFeatureCardOrder = closure_0(closure_2[17]).PremiumFeatureCardOrder;
          obj1.premiumFeatureCardOrder = useTier0UpsellContent ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
          tmp9Result = tmp9(obj1);
        }
      }
      return;
    }
  }
  cResult[1] = analyticsLocations;
  cResult[2] = onPress;
  cResult[3] = mobileEmojiPickerUpsellRestyleEnabled;
  cResult[4] = useTier0UpsellContent;
  cResult[5] = I;
  tmp8 = I;
}) : ((analyticsLocations) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const useTier0UpsellContent = analyticsLocations.useTier0UpsellContent;
  let mobileEmojiPickerUpsellRestyleEnabled;
  mobileEmojiPickerUpsellRestyleEnabled = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]).useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  let obj = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[9]);
  let obj2 = analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[12]);
  const tmp2 = useTier0UpsellContent(mobileEmojiPickerUpsellRestyleEnabled[13])(useTier0UpsellContent, obj2.usePremiumUpsellConfig(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[10]).getUpsellType(analyticsLocations(mobileEmojiPickerUpsellRestyleEnabled[11]).EntitlementFeatureNames.EMOJIS_EVERYWHERE), analyticsLocations).onViewAllPerks, constants2.PREMIUM_UPSELL_EMOJI_EVERYWHERE);
  const onPress = tmp2.onPress;
  const obj4 = { loading: tmp2.loading, onPress: null };
  const items = [analyticsLocations, useTier0UpsellContent, mobileEmojiPickerUpsellRestyleEnabled, onPress];
  obj4.onPress = onPress.useCallback(() => {
    const currentUser = UserStore.getCurrentUser();
    let result = null == currentUser;
    if (!result) {
      result = PremiumUtilsDefault.canUseEmojisEverywhere(currentUser);
    }
    if (!result) {
      if (mobileEmojiPickerUpsellRestyleEnabled) {
        onPress();
      } else {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { analyticsLocations, premiumFeatureCardOrder: null };
        const PremiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder;
        obj3.premiumFeatureCardOrder = useTier0UpsellContent ? PremiumFeatureCardOrder.TIER_0_LEADING : PremiumFeatureCardOrder.TIER_2_LEADING;
        openPremiumModalDefault(obj3);
      }
    }
  }, items);
  return obj4;
});
let closure_14 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerPremiumSearchUpsell.tsx");

export const useEmojiPickerPremiumSearchUpsellViewed = tmp4;
export const useEmojiPickerPremiumSearchUpsellClick = tmp5;
export const PremiumSearchUpsell = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((useTier0UpsellContent) => {
  let NitroWheelIcon = require;
  const cResult = c.c(13);
  let nitroIcon = closure_12();
  ({ loading, onPress } = closure_14(useTier0UpsellContent));
  const tmp3 = closure_14(useTier0UpsellContent);
  const mobileEmojiPickerUpsellRestyleEnabled = MobileEmojiPickerUpsellRestyleExperiment.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  closure_13(useTier0UpsellContent);
  if (cResult[0] !== useTier0UpsellContent.useTier0UpsellContent) {
    const intl = util.intl;
    if (useTier0UpsellContent.useTier0UpsellContent) {
      const obj3 = { planName: PremiumUtils.getTierDisplayNameByPlanId(v65535.PREMIUM_MONTH_TIER_0) };
      let formatToPlainStringResult = intl.formatToPlainString(util.t.kWBwlJ, obj3);
      const NitroWheelIconResult = PremiumUtils;
    } else {
      formatToPlainStringResult = intl.string(util.t["5t3lw+"]);
    }
    cResult[0] = useTier0UpsellContent.useTier0UpsellContent;
    cResult[1] = formatToPlainStringResult;
  } else if (cResult[2] !== useTier0UpsellContent.useTier0UpsellContent) {
    const intl2 = util.intl;
    const string = intl2.string;
    let t = util.t;
    if (useTier0UpsellContent.useTier0UpsellContent) {
      t = t["9CM5v9"];
      let stringResult = string(t);
    } else {
      stringResult = string(t.pj0XBN);
    }
    useTier0UpsellContent = useTier0UpsellContent.useTier0UpsellContent;
    cResult[2] = useTier0UpsellContent;
    cResult[3] = stringResult;
  } else {
    if (cResult[4] === nitroIcon.nitroIcon) {
      if (cResult[5] === mobileEmojiPickerUpsellRestyleEnabled) {
        if (cResult[7] === loading) {
          if (cResult[8] === onPress) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp10) {
                if (cResult[11] === tmp14) {
                  let tmp20 = cResult[12];
                }
                return tmp20;
              }
            }
          }
        }
        const obj4 = { body: tmp6, ctaText: tmp10, icon: cResult[6], loading, onPress };
        const tmp23 = jsx(PremiumExpressionPickerSearchUpsellDefault, { body: tmp6, ctaText: tmp10, icon: cResult[6], loading, onPress });
        cResult[7] = loading;
        cResult[8] = onPress;
        cResult[9] = tmp6;
        cResult[10] = tmp10;
        cResult[11] = cResult[6];
        cResult[12] = tmp23;
        tmp20 = tmp23;
      }
    }
    if (mobileEmojiPickerUpsellRestyleEnabled) {
      NitroWheelIcon = NitroWheelIcon2.NitroWheelIcon;
      const obj5 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: nitroIcon.nitroIcon };
      let tmp15Result = <NitroWheelIcon size="sm" color={nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE} style={nitroIcon.nitroIcon} />;
    } else {
      const obj6 = { style: nitroIcon.nitroIcon, source: _modDef9930, disableColor: true, size: native.Icon.Sizes.MEDIUM };
      tmp15Result = jsx(native.Icon, { style: nitroIcon.nitroIcon, source: _modDef9930, disableColor: true, size: native.Icon.Sizes.MEDIUM });
    }
    nitroIcon = nitroIcon.nitroIcon;
    cResult[4] = nitroIcon;
    cResult[5] = mobileEmojiPickerUpsellRestyleEnabled;
    cResult[6] = tmp15Result;
  }
}) : ((useTier0UpsellContent) => {
  const tmp = closure_12();
  ({ loading, onPress } = closure_14(useTier0UpsellContent));
  const tmp2 = closure_14(useTier0UpsellContent);
  const mobileEmojiPickerUpsellRestyleEnabled = MobileEmojiPickerUpsellRestyleExperiment.useMobileEmojiPickerUpsellRestyleEnabled("native.EmojiPickerPremiumSearchUpsell");
  closure_13(useTier0UpsellContent);
  const intl = util.intl;
  if (useTier0UpsellContent.useTier0UpsellContent) {
    const obj2 = { planName: PremiumUtils.getTierDisplayNameByPlanId(v65535.PREMIUM_MONTH_TIER_0) };
    let formatToPlainStringResult = intl.formatToPlainString(util.t.kWBwlJ, obj2);
    const tmp3Result = PremiumUtils;
  } else {
    formatToPlainStringResult = intl.string(util.t["5t3lw+"]);
  }
  const obj3 = { body: formatToPlainStringResult, ctaText: null, icon: null, loading: null, onPress: null };
  const intl2 = util.intl;
  const string = intl2.string;
  const t = util.t;
  if (useTier0UpsellContent.useTier0UpsellContent) {
    let stringResult = string(t["9CM5v9"]);
  } else {
    stringResult = string(t.pj0XBN);
  }
  obj3.ctaText = stringResult;
  if (mobileEmojiPickerUpsellRestyleEnabled) {
    const obj4 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
    let tmp7Result = jsx(NitroWheelIcon2.NitroWheelIcon, { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon });
  } else {
    const obj5 = { style: tmp.nitroIcon, source: _modDef9930, disableColor: true, size: native.Icon.Sizes.MEDIUM };
    tmp7Result = jsx(native.Icon, { style: tmp.nitroIcon, source: _modDef9930, disableColor: true, size: native.Icon.Sizes.MEDIUM });
  }
  obj3.icon = tmp7Result;
  obj3.loading = loading;
  obj3.onPress = onPress;
  return jsx(PremiumExpressionPickerSearchUpsellDefault, { body: formatToPlainStringResult, ctaText: null, icon: null, loading: null, onPress: null });
}));