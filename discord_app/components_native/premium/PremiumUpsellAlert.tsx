// === Module 9438: PremiumUpsellAlert ===

// Module 9438 (PremiumUpsellAlert)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PremiumUtils from "PremiumUtils" /* 4728 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import Text_Text from "Text/Text" /* 5087 */;
import createStyles2 from "createStyles" /* 5091 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 5259 */;
import FileSizeUtils from "FileSizeUtils" /* 5637 */;
import FastImageDefault from "FastImage" /* 6163 */;
import TableSwitchRow from "TableSwitchRow" /* 6889 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7163 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9232 */;
import _modDef9243 from "module_9243" /* 9243 */;
import _modDef9244 from "module_9244" /* 9244 */;
import _modDef9466 from "module_9466" /* 9466 */;
import _modDef9467 from "module_9467" /* 9467 */;
import _modDef9468 from "module_9468" /* 9468 */;
import _modDef9469 from "module_9469" /* 9469 */;
import _modDef9470 from "module_9470" /* 9470 */;
import _modDef9471 from "module_9471" /* 9471 */;
import _modDef9472 from "module_9472" /* 9472 */;
import _modDef9473 from "module_9473" /* 9473 */;
import PremiumFeatureUtils from "PremiumFeatureUtils" /* 9474 */;
import _modDef9475 from "module_9475" /* 9475 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1207 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_8, UpsellTypes: closure_9 } = Constants);
const getIcons = fn(9439).getIcons;
const PremiumConstants = fn(1392);
({ PremiumSubscriptionSKUs: closure_11, PremiumTypes: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 }, nitroWheel: { width: 32, height: 32, marginVertical: -8 }, upsellImage: { height: 80, width: 120 }, upsellTitle: { marginBottom: 8, textAlign: "center" }, premiumUpsellTitle: { marginVertical: nativeDefault.space.PX_8, textAlign: "center" }, upsellDescription: { textAlign: "center" }, premiumUpsellDescription: { textAlign: "center" }, pageIndicatorStyle: { marginTop: 16 }, largerUpsellImage: { height: 154, width: 226 }, customProfileUpsellImage: { width: 240, height: 194 }, loadingIndicator: { height: 170 }, customAppIconUpsellLightImage: null, customAppIconsUpsellImage: null };
let obj3 = { marginVertical: nativeDefault.space.PX_8, textAlign: "center" };
obj2.customAppIconUpsellLightImage = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
let size = { height: 80, width: 80, borderRadius: nativeDefault.radii.lg };
obj2.customAppIconsUpsellImage = size;
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class UpsellItem extends PureComponent {
}
UpsellItem.prototype["render"] = function render() {
  const tmp = closure_16(this.context);
  const props = this.props;
  const upsellItem = props.upsellItem;
  let passiveTitle = upsellItem.passiveTitle;
  const obj = { style: null, children: null };
  const items = [tmp.upsellContainer, { width: props.alertWidth }];
  obj.style = items;
  ({ image, activeTitle, description } = upsellItem);
  const items1 = [__initData2(FastImageDefault, { style: tmp.upsellImage, source: image, resizeMode: "contain" }), , ];
  const obj3 = { style: tmp.upsellTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  if (props.isInitial) {
    passiveTitle = activeTitle;
  }
  obj3.children = passiveTitle;
  items1[1] = __initData2(Text_Text.Text, obj3);
  items1[2] = __initData2(Text_Text.Text, { style: tmp.upsellDescription, variant: "text-sm/medium", children: description });
  obj.children = items1;
  return state(View, obj);
};
UpsellItem.contextType = fn(4788).ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellItem(arg0) {
  const cResult = c.c(23);
  ({ upsellItem, alertWidth, imageStyle, style } = arg0);
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  ({ image, title, description } = upsellItem);
  if (cResult[0] !== alertWidth) {
    const obj3 = { width: alertWidth };
    cResult[0] = alertWidth;
    cResult[1] = obj3;
    let tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === legacyClassComponentStyles.premiumUpsellContainer) {
      if (cResult[4] === tmp5) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] === imageStyle) {
        if (cResult[7] === legacyClassComponentStyles.upsellImage) {
          let tmp7 = cResult[8];
        }
        if (cResult[9] === image) {
          if (cResult[10] === tmp7) {
            let tmp8 = cResult[11];
          }
          if (cResult[12] === legacyClassComponentStyles.premiumUpsellTitle) {
            if (cResult[13] === title) {
              let tmp12 = cResult[14];
            }
            if (cResult[15] === description) {
              if (cResult[16] === legacyClassComponentStyles.premiumUpsellDescription) {
                let tmp15 = cResult[17];
              }
              if (cResult[18] === tmp6) {
                if (cResult[19] === tmp8) {
                  if (cResult[20] === tmp12) {
                    if (cResult[21] === tmp15) {
                      let tmp18 = cResult[22];
                    }
                    return tmp18;
                  }
                }
              }
              const obj4 = { style: tmp6, children: null };
              const items = [tmp8, tmp12, tmp15];
              obj4.children = items;
              const tmp21 = state(View, obj4);
              cResult[18] = tmp6;
              cResult[19] = tmp8;
              cResult[20] = tmp12;
              cResult[21] = tmp15;
              cResult[22] = tmp21;
              tmp18 = tmp21;
            }
            const obj5 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
            const tmp17 = __initData2(Text_Text.Text, obj5);
            cResult[15] = description;
            cResult[16] = legacyClassComponentStyles.premiumUpsellDescription;
            cResult[17] = tmp17;
            tmp15 = tmp17;
          }
          const obj6 = { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
          const tmp14 = __initData2(Text_Text.Text, obj6);
          cResult[12] = legacyClassComponentStyles.premiumUpsellTitle;
          cResult[13] = title;
          cResult[14] = tmp14;
          tmp12 = tmp14;
        }
        const obj7 = { style: tmp7, source: image, resizeMode: "contain" };
        const tmp11 = __initData2(FastImageDefault, obj7);
        cResult[9] = image;
        cResult[10] = tmp7;
        cResult[11] = tmp11;
        tmp8 = tmp11;
      }
      const items1 = [legacyClassComponentStyles.upsellImage, imageStyle];
      cResult[6] = imageStyle;
      cResult[7] = legacyClassComponentStyles.upsellImage;
      cResult[8] = items1;
      tmp7 = items1;
    }
  }
  const items2 = [legacyClassComponentStyles.premiumUpsellContainer, tmp5, style];
  cResult[2] = style;
  cResult[3] = legacyClassComponentStyles.premiumUpsellContainer;
  cResult[4] = tmp5;
  cResult[5] = items2;
  tmp6 = items2;
}) : (function PremiumUpsellItem(upsellItem) {
  ({ alertWidth, imageStyle, style } = upsellItem);
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = { style: null, children: null };
  const items = [legacyClassComponentStyles.premiumUpsellContainer, { width: alertWidth }, style];
  obj2.style = items;
  ({ image, title, description } = upsellItem.upsellItem);
  const obj3 = { style: null, source: image, resizeMode: "contain" };
  const items1 = [legacyClassComponentStyles.upsellImage, imageStyle];
  obj3.style = items1;
  const items2 = [__initData2(FastImageDefault, obj3), __initData2(Text_Text.Text, { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title }), __initData2(Text_Text.Text, { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description })];
  obj2.children = items2;
  return state(View, obj2);
});
let closure_18 = tmp6;
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalEmojiUpsell(arg0) {
  const cResult = c.c(10);
  ({ alertWidth, useTier0Description } = arg0);
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const formatResult = intl.format(util.t["KEn+LY"], {});
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (null != skuId) {
    if (closure_1_11.TIER_0 === skuId) {
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_0) };
        const formatResult1 = intl4.format(util.t["1P7x8p"], obj3);
        cResult[1] = formatResult1;
        const tmpResult = PremiumUtils;
      }
    } else {
      let tmp11 = first;
      if (tmp12.TIER_2 === skuId) {
        const _Symbol3 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = util.intl;
          const obj4 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_2) };
          const formatResult2 = intl3.format(util.t["1P7x8p"], obj4);
          cResult[2] = formatResult2;
          let tmp13 = formatResult2;
          const tmpResult3 = PremiumUtils;
        } else {
          tmp13 = cResult[2];
        }
        tmp11 = tmp13;
      }
    }
  } else {
    tmp11 = first;
    if (useTier0Description) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const obj5 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_0) };
        const formatResult3 = intl2.format(util.t.kWBwlJ, obj5);
        cResult[3] = formatResult3;
        let tmp8 = formatResult3;
        const tmpResult4 = PremiumUtils;
      } else {
        tmp8 = cResult[3];
      }
      tmp11 = tmp8;
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = util.intl;
    const stringResult = intl5.string(util.t.UNtcBV);
    cResult[4] = stringResult;
    let tmp20 = stringResult;
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    const obj6 = { image: _modDef9243, title: tmp20, description: tmp11 };
    cResult[5] = tmp11;
    cResult[6] = obj6;
    let tmp22 = obj6;
  } else {
    tmp22 = cResult[6];
  }
  if (cResult[7] === alertWidth) {
    if (cResult[8] === tmp22) {
      let tmp24 = cResult[9];
    }
    return tmp24;
  }
  const tmp25 = __initData2(closure_18, { alertWidth, upsellItem: tmp22 });
  cResult[7] = alertWidth;
  cResult[8] = tmp22;
  cResult[9] = tmp25;
  tmp24 = tmp25;
}) : (function GlobalEmojiUpsell(arg0) {
  ({ alertWidth, useTier0Description } = arg0);
  const premiumTrialOffer = usePremiumTrialOffer.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  const intl = util.intl;
  const formatResult = intl.format(util.t["KEn+LY"], {});
  if (null != skuId) {
    if (closure_1_11.TIER_0 === skuId) {
      const intl3 = util.intl;
      const obj2 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_0) };
      let formatResult1 = intl3.format(util.t["1P7x8p"], obj2);
      const tmpResult = PremiumUtils;
    } else {
      formatResult1 = formatResult;
      if (tmp8.TIER_2 === skuId) {
        const intl5 = util.intl;
        const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_2) };
        formatResult1 = intl5.format(util.t["1P7x8p"], obj3);
        const tmpResult3 = PremiumUtils;
      }
    }
  } else {
    formatResult1 = formatResult;
    if (useTier0Description) {
      const intl2 = util.intl;
      const obj4 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_0) };
      formatResult1 = intl2.format(util.t.kWBwlJ, obj4);
      const tmpResult4 = PremiumUtils;
    }
  }
  const obj5 = { alertWidth, upsellItem: null };
  const obj6 = { image: _modDef9243, title: null, description: null };
  const intl4 = util.intl;
  obj6.title = intl4.string(util.t.UNtcBV);
  obj6.description = formatResult1;
  obj5.upsellItem = obj6;
  return __initData2(closure_18, obj5);
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedEmojiUpsell(arg0) {
  let getPremiumTypeDisplayName = require;
  const cResult = c.c(8);
  ({ alertWidth, useTier0Description } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.F6rmyq);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== useTier0Description) {
    const intl2 = util.intl;
    const format = intl2.format;
    let t = util.t;
    if (useTier0Description) {
      t = { planName: null };
      const premiumTypeDisplayName = PremiumUtils;
      getPremiumTypeDisplayName = premiumTypeDisplayName.getPremiumTypeDisplayName;
      t.planName = getPremiumTypeDisplayName(__initData.TIER_0);
      let formatResult = format(t["1a36ee"], t);
    } else {
      formatResult = format(t.JxTzzb, {});
    }
    cResult[1] = useTier0Description;
    cResult[2] = formatResult;
  } else {
    if (cResult[3] !== cResult[2]) {
      const obj2 = { image: _modDef9244, title: first, description: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj2;
      let tmp10 = obj2;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === alertWidth) {
      if (cResult[6] === tmp10) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { alertWidth, upsellItem: tmp10 };
    const tmp15 = __initData2(closure_18, obj3);
    cResult[5] = alertWidth;
    cResult[6] = tmp10;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
}) : (function AnimatedEmojiUpsell(alertWidth) {
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  const obj2 = { image: _modDef9244, title: null, description: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.F6rmyq);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (alertWidth.useTier0Description) {
    const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_0) };
    let formatResult = format(t["1a36ee"], obj3);
    const tmp4Result = PremiumUtils;
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  obj2.description = formatResult;
  obj.upsellItem = obj2;
  return __initData2(closure_18, obj);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGuildIdentityUpsell(alertWidth) {
  const cResult = c.c(8);
  alertWidth = alertWidth.alertWidth;
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const tmp6 = useThemeDefault();
  if (obj3.isThemeDark(tmp6)) {
    let tmp5Result = _modDef9466;
  } else {
    tmp5Result = _modDef9467;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.OVN9la);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.j0dyAG);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp8 = stringResult;
    tmp9 = stringResult1;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== tmp5Result) {
    const obj4 = { image: tmp5Result, title: tmp8, description: tmp9 };
    cResult[2] = tmp5Result;
    cResult[3] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === alertWidth) {
    if (cResult[5] === legacyClassComponentStyles.largerUpsellImage) {
      if (cResult[6] === tmp12) {
        let tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const tmp14 = __initData2(closure_18, { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: tmp12 });
  cResult[4] = alertWidth;
  cResult[5] = legacyClassComponentStyles.largerUpsellImage;
  cResult[6] = tmp12;
  cResult[7] = tmp14;
  tmp13 = tmp14;
  obj3 = shared;
}) : (function PremiumGuildIdentityUpsell(alertWidth) {
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = _modDef9466;
  } else {
    tmp4Result = _modDef9467;
  }
  const obj4 = { image: tmp4Result, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.OVN9la);
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t.j0dyAG);
  obj2.upsellItem = obj4;
  return __initData2(closure_18, obj2);
});
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomProfilesUpsell(alertWidth) {
  const cResult = c.c(4);
  alertWidth = alertWidth.alertWidth;
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { image: _modDef9468, title: null, description: null };
    const intl = util.intl;
    obj3.title = intl.string(util.t.rTY76D);
    const intl2 = util.intl;
    obj3.description = intl2.string(util.t["2LCxoj"]);
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === alertWidth) {
    if (cResult[2] === legacyClassComponentStyles.customProfileUpsellImage) {
      let tmp7 = cResult[3];
    }
    return tmp7;
  }
  const tmp8 = __initData2(closure_18, { alertWidth, imageStyle: legacyClassComponentStyles.customProfileUpsellImage, upsellItem: first });
  cResult[1] = alertWidth;
  cResult[2] = legacyClassComponentStyles.customProfileUpsellImage;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj4 = { alertWidth, imageStyle: legacyClassComponentStyles.customProfileUpsellImage, upsellItem: first };
}) : (function CustomProfilesUpsell(alertWidth) {
  const obj2 = { alertWidth: alertWidth.alertWidth, imageStyle: createStyles2.useLegacyClassComponentStyles(closure_16).customProfileUpsellImage, upsellItem: null };
  const obj3 = { image: _modDef9468, title: null, description: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.rTY76D);
  const intl2 = util.intl;
  obj3.description = intl2.string(util.t["2LCxoj"]);
  obj2.upsellItem = obj3;
  return __initData2(closure_18, obj2);
});
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomAppIconsUpsell(arg0) {
  const cResult = c.c(12);
  ({ alertWidth, imageSource } = arg0);
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const found = getIcons().filter((isPremium) => isPremium.isPremium);
    cResult[0] = found;
    let first = found;
    const arr = getIcons();
  } else {
    first = cResult[0];
  }
  const tmp8 = useThemeDefault();
  let prop;
  if (tmpResult.isThemeLight(tmp8)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  if (cResult[1] === legacyClassComponentStyles.customAppIconsUpsellImage) {
    if (cResult[2] === prop) {
      let tmp10 = cResult[3];
    }
    if (imageSource == null) {
      imageSource = first[0].iconSource;
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["1B1Cyn"]);
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.VL5TYT);
      cResult[4] = stringResult;
      cResult[5] = stringResult1;
      let tmp13 = stringResult1;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[4];
      tmp13 = cResult[5];
    }
    if (cResult[6] !== imageSource) {
      const obj3 = { image: imageSource, title: tmp12, description: tmp13 };
      cResult[6] = imageSource;
      cResult[7] = obj3;
      let tmp16 = obj3;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === alertWidth) {
      if (cResult[9] === tmp10) {
        if (cResult[10] === tmp16) {
          let tmp17 = cResult[11];
        }
        return tmp17;
      }
    }
    const obj4 = { alertWidth, imageStyle: tmp10, upsellItem: tmp16 };
    const tmp20 = __initData2(closure_18, obj4);
    cResult[8] = alertWidth;
    cResult[9] = tmp10;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
    tmp17 = tmp20;
  }
  const items = [legacyClassComponentStyles.customAppIconsUpsellImage, prop];
  cResult[1] = legacyClassComponentStyles.customAppIconsUpsellImage;
  cResult[2] = prop;
  cResult[3] = items;
  tmp10 = items;
  tmpResult = shared;
}) : (function CustomAppIconsUpsell(alertWidth) {
  let iconSource = alertWidth.imageSource;
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const arr = getIcons();
  const tmp4 = useThemeDefault();
  const obj3 = { alertWidth: alertWidth.alertWidth, imageStyle: null, upsellItem: null };
  const items = [legacyClassComponentStyles.customAppIconsUpsellImage, ];
  let prop;
  if (obj2.isThemeLight(tmp4)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  items[1] = prop;
  obj3.imageStyle = items;
  if (iconSource == null) {
    iconSource = arr.filter((isPremium) => isPremium.isPremium)[0].iconSource;
  }
  const obj4 = { image: iconSource, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t["1B1Cyn"]);
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t.VL5TYT);
  obj3.upsellItem = obj4;
  return __initData2(closure_18, obj3);
});
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function GlobalStickerUpsell(arg0) {
  let getPremiumTypeDisplayName = require;
  const cResult = c.c(8);
  ({ alertWidth, useTier0Description } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.jn2mBl);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== useTier0Description) {
    const intl2 = util.intl;
    const format = intl2.format;
    let t = util.t;
    if (useTier0Description) {
      t = { planName: null };
      const premiumTypeDisplayName = PremiumUtils;
      getPremiumTypeDisplayName = premiumTypeDisplayName.getPremiumTypeDisplayName;
      t.planName = getPremiumTypeDisplayName(__initData.TIER_0);
      let formatResult = format(t["8C+FZk"], t);
    } else {
      formatResult = format(t["0qJYHK"], {});
    }
    cResult[1] = useTier0Description;
    cResult[2] = formatResult;
  } else {
    if (cResult[3] !== cResult[2]) {
      const obj2 = { image: _modDef9469, title: first, description: tmp5 };
      cResult[3] = tmp5;
      cResult[4] = obj2;
      let tmp10 = obj2;
    } else {
      tmp10 = cResult[4];
    }
    if (cResult[5] === alertWidth) {
      if (cResult[6] === tmp10) {
        let tmp12 = cResult[7];
      }
      return tmp12;
    }
    const obj3 = { alertWidth, upsellItem: tmp10 };
    const tmp15 = __initData2(closure_18, obj3);
    cResult[5] = alertWidth;
    cResult[6] = tmp10;
    cResult[7] = tmp15;
    tmp12 = tmp15;
  }
}) : (function GlobalStickerUpsell(alertWidth) {
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  const obj2 = { image: _modDef9469, title: null, description: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.jn2mBl);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (alertWidth.useTier0Description) {
    const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData.TIER_0) };
    let formatResult = format(t["8C+FZk"], obj3);
    const tmp4Result = PremiumUtils;
  } else {
    formatResult = format(t["0qJYHK"], {});
  }
  obj2.description = formatResult;
  obj.upsellItem = obj2;
  return __initData2(closure_18, obj);
});
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function LongerMessageUpsell(alertWidth) {
  const cResult = c.c(10);
  alertWidth = alertWidth.alertWidth;
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const tmp7 = useMessageMaxLengthDefault();
  const tmp6 = useThemeDefault();
  if (obj3.isThemeDark(tmp6)) {
    let tmp5Result = _modDef9470;
  } else {
    tmp5Result = _modDef9471;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["8cjmTj"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp7) {
    const intl2 = util.intl;
    const obj4 = { maxLength: tmp7 };
    const formatToPlainStringResult = intl2.formatToPlainString(util.t.moN9wh, obj4);
    cResult[1] = tmp7;
    cResult[2] = formatToPlainStringResult;
    let tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp5Result) {
    if (cResult[4] === tmp11) {
      let tmp13 = cResult[5];
    }
    if (cResult[6] === alertWidth) {
      if (cResult[7] === legacyClassComponentStyles.largerUpsellImage) {
        if (cResult[8] === tmp13) {
          let tmp14 = cResult[9];
        }
        return tmp14;
      }
    }
    const obj5 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: tmp13 };
    const tmp17 = __initData2(closure_18, obj5);
    cResult[6] = alertWidth;
    cResult[7] = legacyClassComponentStyles.largerUpsellImage;
    cResult[8] = tmp13;
    cResult[9] = tmp17;
    tmp14 = tmp17;
  }
  const obj6 = { image: tmp5Result, title: first, description: tmp11 };
  cResult[3] = tmp5Result;
  cResult[4] = tmp11;
  cResult[5] = obj6;
  tmp13 = obj6;
  obj3 = shared;
}) : (function LongerMessageUpsell(alertWidth) {
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = useMessageMaxLengthDefault();
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = _modDef9470;
  } else {
    tmp4Result = _modDef9471;
  }
  const obj4 = { image: tmp4Result, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t["8cjmTj"]);
  const intl2 = util.intl;
  obj4.description = intl2.formatToPlainString(util.t.moN9wh, { maxLength: tmp6 });
  obj2.upsellItem = obj4;
  return __initData2(closure_18, obj2);
});
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildCapUpsell(alertWidth) {
  const cResult = c.c(8);
  alertWidth = alertWidth.alertWidth;
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const tmp6 = useThemeDefault();
  if (obj3.isThemeDark(tmp6)) {
    let tmp5Result = _modDef9472;
  } else {
    tmp5Result = _modDef9473;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["CoNXB+"]);
    const intl2 = util.intl;
    const formatResult = intl2.format(util.t.mkXb2F, {});
    cResult[0] = stringResult;
    cResult[1] = formatResult;
    tmp8 = stringResult;
    tmp9 = formatResult;
  } else {
    [tmp8, tmp9] = cResult;
  }
  if (cResult[2] !== tmp5Result) {
    const obj4 = { image: tmp5Result, title: tmp8, description: tmp9 };
    cResult[2] = tmp5Result;
    cResult[3] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === alertWidth) {
    if (cResult[5] === legacyClassComponentStyles.largerUpsellImage) {
      if (cResult[6] === tmp12) {
        let tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const tmp14 = __initData2(closure_18, { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: tmp12 });
  cResult[4] = alertWidth;
  cResult[5] = legacyClassComponentStyles.largerUpsellImage;
  cResult[6] = tmp12;
  cResult[7] = tmp14;
  tmp13 = tmp14;
  obj3 = shared;
}) : (function GuildCapUpsell(alertWidth) {
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = _modDef9472;
  } else {
    tmp4Result = _modDef9473;
  }
  const obj4 = { image: tmp4Result, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t["CoNXB+"]);
  const intl2 = util.intl;
  obj4.description = intl2.format(util.t.mkXb2F, {});
  obj2.upsellItem = obj4;
  return __initData2(closure_18, obj2);
});
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? (function UploadUpsell(arg0) {
  const cResult = c.c(12);
  ({ item, alertWidth } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function c() {
      return dataSavingMode.dataSavingMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function toggleExtraCompression(dataSavingMode) {
      const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode });
    }
    cResult[2] = toggleExtraCompression;
    let tmp8 = toggleExtraCompression;
  } else {
    tmp8 = cResult[2];
  }
  const first = _slicedToArray(noop.useState(!stateFromStores), 1)[0];
  if (cResult[3] === alertWidth) {
    if (cResult[4] === item) {
      let tmp10 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
      if (cResult[7] === first) {
        let tmp12 = cResult[8];
      }
      if (cResult[9] === tmp10) {
        if (cResult[10] === tmp12) {
          let tmp15 = cResult[11];
        }
        return tmp15;
      }
      const obj2 = { children: null };
      const items1 = [tmp10, tmp12];
      obj2.children = items1;
      const tmp18 = state(closure_1_15, obj2);
      cResult[9] = tmp10;
      cResult[10] = tmp12;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    let tmp13 = null;
    if (first) {
      const obj3 = { start: true, end: true, label: null, subLabel: null, value: null, onValueChange: null };
      const intl = util.intl;
      obj3.label = intl.string(util.t.ix8XIj);
      const intl2 = util.intl;
      obj3.subLabel = intl2.string(util.t["wC0+Ph"]);
      obj3.value = stateFromStores;
      obj3.onValueChange = tmp8;
      tmp13 = __initData2(TableSwitchRow.TableSwitchRow, obj3);
    }
    cResult[6] = stateFromStores;
    cResult[7] = first;
    cResult[8] = tmp13;
    tmp12 = tmp13;
  }
  const tmp11 = __initData2(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD);
  cResult[3] = alertWidth;
  cResult[4] = item;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const tmpResult = initialize;
}) : (function UploadUpsell(arg0) {
  ({ item, alertWidth } = arg0);
  const items = [UnsyncedUserSettingsStore];
  const stateFromStores = initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const children = [__initData2(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD), ];
  let tmp6Result = null;
  if (_slicedToArray(noop.useState(!stateFromStores), 1)[0]) {
    const obj2 = { start: true, end: true, label: null, subLabel: null, value: null, onValueChange: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.ix8XIj);
    const intl2 = util.intl;
    obj2.subLabel = intl2.string(util.t["wC0+Ph"]);
    obj2.value = stateFromStores;
    obj2.onValueChange = function toggleExtraCompression(dataSavingMode) {
      const result = UserSettingsActionCreatorsDefault.updatedUnsyncedSettings({ dataSavingMode });
    };
    tmp6Result = __initData2(TableSwitchRow.TableSwitchRow, obj2);
  }
  children[1] = tmp6Result;
  return state(closure_1_15, { children });
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumUpsellAlert(initialUpsellKey) {
  const cResult = initialUpsellKey(legacyClassComponentStyles[15]).c(29);
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  const analyticsLocation = initialUpsellKey.analyticsLocation;
  ({ analyticsProperties, onClose, analyticsLocations, imageSource } = initialUpsellKey);
  let obj = initialUpsellKey(legacyClassComponentStyles[15]);
  legacyClassComponentStyles = initialUpsellKey(legacyClassComponentStyles[9]).useLegacyClassComponentStyles(closure_16);
  const size = analyticsLocation(legacyClassComponentStyles[36])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), c28) - c29;
  _slicedToArray = diff;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return current.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj2 = initialUpsellKey(legacyClassComponentStyles[9]);
  const stateFromStores = initialUpsellKey(legacyClassComponentStyles[32]).useStateFromStores(tmp7, tmp8);
  let tmpResult = initialUpsellKey(legacyClassComponentStyles[32]);
  const upsellItems = initialUpsellKey(legacyClassComponentStyles[35]).getUpsellItems();
  const sorted = upsellItems.sort((key) => {
    let num = 1;
    if (key.key === initialUpsellKey) {
      num = -1;
    }
    return num;
  });
  const tmpResult3 = initialUpsellKey(legacyClassComponentStyles[35]);
  const analyticsLocations2 = analyticsLocation(legacyClassComponentStyles[37])(analyticsLocations, tmp5(tmp2[38]).PREMIUM_UPSELL_ALERT).analyticsLocations;
  if (cResult[2] !== analyticsLocation) {
    class B {
      constructor() {
        obj = closure_1(closure_2[39]);
        obj1 = { type: "Nitro Upsell", location: analyticsLocation };
        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
        return;
      }
    }
    cResult[2] = analyticsLocation;
    cResult[3] = B;
  } else {
    class B {
      constructor() {
        obj = closure_1(closure_2[39]);
        obj1 = { type: "Nitro Upsell", location: analyticsLocation };
        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
        return;
      }
    }
  }
  analyticsLocation(legacyClassComponentStyles[40])(B);
  const tmp5Result = analyticsLocation(legacyClassComponentStyles[37]);
  const premiumUpsellConfig = initialUpsellKey(legacyClassComponentStyles[35]).usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
  if (cResult[4] === analyticsLocation) {
    class B {
      constructor() {
        obj = closure_1(closure_2[39]);
        obj1 = { type: "Nitro Upsell", location: analyticsLocation };
        trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
        return;
      }
    }
  }
  cResult[4] = analyticsLocation;
  cResult[5] = analyticsProperties;
  cResult[6] = useTier0UpsellContent;
  cResult[7] = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
  let obj3 = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
  const tmpResult4 = initialUpsellKey(legacyClassComponentStyles[35]);
}) : (function PremiumUpsellAlert(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  const analyticsLocation = initialUpsellKey.analyticsLocation;
  let legacyClassComponentStyles;
  ({ analyticsLocations, analyticsProperties, onClose, imageSource } = initialUpsellKey);
  legacyClassComponentStyles = initialUpsellKey(legacyClassComponentStyles[9]).useLegacyClassComponentStyles(closure_16);
  const size = analyticsLocation(legacyClassComponentStyles[36])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), c28) - c29;
  c3 = diff;
  let obj = initialUpsellKey(legacyClassComponentStyles[9]);
  const tmp4 = analyticsLocation;
  const items = [UserStore];
  const stateFromStores = initialUpsellKey(legacyClassComponentStyles[32]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = initialUpsellKey(legacyClassComponentStyles[32]);
  const upsellItems = initialUpsellKey(legacyClassComponentStyles[35]).getUpsellItems();
  const sorted = upsellItems.sort((key) => {
    let num = 1;
    if (key.key === initialUpsellKey) {
      num = -1;
    }
    return num;
  });
  const obj3 = initialUpsellKey(legacyClassComponentStyles[35]);
  const analyticsLocations2 = analyticsLocation(legacyClassComponentStyles[37])(analyticsLocations, analyticsLocation(legacyClassComponentStyles[38]).PREMIUM_UPSELL_ALERT).analyticsLocations;
  analyticsLocation(legacyClassComponentStyles[40])(() => {
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Nitro Upsell", location: analyticsLocation });
  });
  const tmp7 = analyticsLocation(legacyClassComponentStyles[37]);
  const premiumUpsellConfig = initialUpsellKey(legacyClassComponentStyles[35]).usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const obj4 = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
  ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
  analyticsLocations2.useRef(obj4);
  const effect = analyticsLocations2.useEffect(() => {
    closure_6.current = obj4;
  });
  const items1 = [analyticsLocations2];
  const effect1 = analyticsLocations2.useEffect(() => {
    ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
    const obj2 = {};
    const merged = Object.assign(analyticsProperties);
    obj2.location = analyticsLocation;
    obj2.location_stack = analyticsLocations2;
    obj2.sku_id = useTier0UpsellContent ? closure_2_11.TIER_0 : closure_2_11.TIER_2;
    AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const obj6 = { confirmColor: null, confirmText: null, renderConfirmIcon: null, cancelText: null, onClose: null, onConfirm: null, children: null };
  const obj5 = initialUpsellKey(legacyClassComponentStyles[35]);
  obj6.confirmColor = initialUpsellKey(legacyClassComponentStyles[45]).ButtonColors.GREEN;
  obj6.confirmText = getNitroText;
  obj6.renderConfirmIcon = function renderConfirmIcon() {
    const obj = { source: _modDef9475, style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
    if (constants2.GLOBAL_EMOJI !== initialUpsellKey) {
      if (constants2.ANIMATED_EMOJI !== initialUpsellKey) {
        if (constants2.CUSTOM_PROFILES !== initialUpsellKey) {
          if (constants2.PREMIUM_GUILD_PROFILE !== initialUpsellKey) {
            if (constants2.APP_ICONS !== initialUpsellKey) {
              return null;
            }
          }
        }
      }
    }
    return __initData2(FastImageDefault, obj);
  };
  const intl = initialUpsellKey(legacyClassComponentStyles[17]).intl;
  obj6.cancelText = intl.string(initialUpsellKey(legacyClassComponentStyles[17]).t.cpT0Cq);
  obj6.onClose = onClose;
  obj6.onConfirm = onViewAllPerks;
  const obj7 = { style: legacyClassComponentStyles.carousel, width: diff, pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle, children: null };
  const tmp13 = analyticsLocation(legacyClassComponentStyles[44]);
  obj7.children = sorted.map((key) => __initData2(UpsellItem, { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth }, key.key));
  let tmp12Result = closure_13(analyticsLocation(legacyClassComponentStyles[46]), obj7);
  if (constants2.GLOBAL_EMOJI === initialUpsellKey) {
    const obj8 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
    tmp12Result = closure_13(closure_19, obj8);
  } else if (constants2.ANIMATED_EMOJI === initialUpsellKey) {
    const obj9 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
    tmp12Result = closure_13(closure_20, obj9);
  } else if (constants2.GLOBAL_STICKER === initialUpsellKey) {
    const obj10 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
    tmp12Result = closure_13(closure_24, obj10);
  } else if (constants2.CUSTOM_PROFILES === initialUpsellKey) {
    const obj11 = { alertWidth: diff };
    tmp12Result = closure_13(closure_22, obj11);
  } else if (constants2.APP_ICONS === initialUpsellKey) {
    const obj12 = { alertWidth: diff, imageSource };
    tmp12Result = closure_13(closure_23, obj12);
  } else if (constants2.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
    const obj13 = { alertWidth: diff };
    tmp12Result = closure_13(closure_21, obj13);
  } else if (constants2.LONGER_MESSAGE === initialUpsellKey) {
    const obj14 = { alertWidth: diff };
    tmp12Result = closure_13(closure_25, obj14);
  } else if (constants2.GUILD_CAP === initialUpsellKey) {
    const obj15 = { alertWidth: diff };
    tmp12Result = closure_13(closure_26, obj15);
  } else if (constants2.UPLOAD === initialUpsellKey) {
    const obj16 = { key: constants2.UPLOAD, image: tmp4(tmp2[47]), activeTitle: null, passiveTitle: null, description: null };
    const intl4 = tmp(tmp2[17]).intl;
    obj16.activeTitle = intl4.string(tmp(tmp2[17]).t["1EOZqw"]);
    const intl5 = tmp(tmp2[17]).intl;
    obj16.passiveTitle = intl5.string(tmp(tmp2[17]).t.tB51W4);
    if (useTier0UpsellContent) {
      const intl3 = tmp(tmp2[17]).intl;
      const obj17 = { premiumPlan: tmp(tmp2[18]).getPremiumTypeDisplayName(closure_12.TIER_0), premiumMaxSize: null };
      const tmpResult = tmp(tmp2[18]);
      obj17.premiumMaxSize = tmp(tmp2[18]).getMaxFileSizeForPremiumType(closure_12.TIER_0);
      let formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[17]).t.Z7Xb7H, obj17);
      const tmpResult5 = tmp(tmp2[18]);
    } else {
      const userMaxFileSize = tmp(tmp2[41]).getUserMaxFileSize(stateFromStores);
      const result = userMaxFileSize / tmp(tmp2[42]).BYTE_IN_KB;
      const intl2 = tmp(tmp2[17]).intl;
      const obj18 = { maxUploadStandard: null, maxUploadPremium: null };
      const tmpResult6 = tmp(tmp2[41]);
      obj18.maxUploadStandard = tmp(tmp2[42]).formatSize(result, { useKibibytes: true });
      const tmpResult7 = tmp(tmp2[42]);
      obj18.maxUploadPremium = tmp(tmp2[18]).getMaxFileSizeForPremiumType(closure_12.TIER_2);
      formatToPlainStringResult = intl2.format(tmp(tmp2[17]).t.DUT5IC, obj18);
      const tmpResult8 = tmp(tmp2[18]);
    }
    const obj19 = { item: null, alertWidth: null };
    obj16.description = formatToPlainStringResult;
    obj19.item = obj16;
    obj19.alertWidth = diff;
    tmp12Result = closure_13(closure_27, obj19);
  }
  obj6.children = tmp12Result;
  return closure_13(tmp13, obj6);
});
let c28 = 500;
let c29 = 32;
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default tmp7;
export const PremiumUpsellItem = tmp6;
export const PremiumUpsellAlert = tmp7;