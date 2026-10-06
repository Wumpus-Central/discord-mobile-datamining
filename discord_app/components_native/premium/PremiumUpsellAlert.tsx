// === Module 8857: PremiumUpsellAlert ===

// Module 8857 (PremiumUpsellAlert)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl6 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import native from "native" /* 4595 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import FileSizeUtils from "FileSizeUtils" /* 5324 */;
import FastImageDefault from "FastImage" /* 5981 */;
import TableSwitchRow2 from "TableSwitchRow" /* 6705 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 6969 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 8091 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 8839 */;
import AssetRegistryDefault from "AssetRegistry" /* 8849 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 8850 */;
import AppIconConstants from "AppIconConstants" /* 8858 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 8885 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 8886 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 8887 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 8888 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 8889 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 8890 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 8891 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 8892 */;
import PremiumFeatureUtils from "PremiumFeatureUtils" /* 8893 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 8894 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let initialUpsellKey;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let size;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
({ AnalyticEvents: c9, UpsellTypes: c10 } = Constants);
const getIcons = AppIconConstants.getIcons;
({ PremiumSubscriptionSKUs: closure_12, PremiumTypes: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let obj = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 }, nitroWheel: { width: 32, height: 32, marginVertical: -8 }, upsellImage: { height: 80, width: 120 }, upsellTitle: { marginBottom: 8, textAlign: "center" }, premiumUpsellTitle: obj2, upsellDescription: { textAlign: "center" }, premiumUpsellDescription: { textAlign: "center" }, pageIndicatorStyle: { marginTop: 16 }, largerUpsellImage: { height: 154, width: 226 }, customProfileUpsellImage: { width: 240, height: 194 }, loadingIndicator: { height: 170 }, customAppIconUpsellLightImage: obj3, customAppIconsUpsellImage: size };
obj2 = { marginVertical: nativeDefault.space.PX_8, textAlign: "center" };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
size = { height: 80, width: 80, borderRadius: nativeDefault.radii.lg };
let closure_17 = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class UpsellItem extends PureComponent {
  render() {
    let activeTitle;
    let description;
    let items;
    let items1;
    const tmp = closure_17(this.context);
    const props = this.props;
    const upsellItem = props.upsellItem;
    let passiveTitle = upsellItem.passiveTitle;
    const obj = { style: items, children: items1 };
    items = [tmp.upsellContainer, { width: props.alertWidth }];
    const isInitial = props.isInitial;
    const obj2 = { style: tmp.upsellImage, source: upsellItem.image, resizeMode: "contain" };
    ({ activeTitle, description } = upsellItem);
    items1 = [authStore2(metroRequire, obj2), , ];
    const obj3 = { style: tmp.upsellTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: passiveTitle };
    const Text = Text_Text.Text;
    if (isInitial) {
      passiveTitle = activeTitle;
    }
    items1[1] = authStore2(Text, obj3);
    const obj4 = { style: tmp.upsellDescription, variant: "text-sm/medium", children: description };
    items1[2] = authStore2(Text_Text.Text, obj4);
    return closure_15(hasOwnProperty, obj);
  }
}
const prototype = UpsellItem.prototype;
UpsellItem.contextType = native.ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alertWidth;
  let description;
  let image;
  let imageStyle;
  let items;
  let style;
  let title;
  let tmp5;
  let upsellItem;
  const obj = react2;
  const cResult = obj.c(23);
  ({ upsellItem, alertWidth, imageStyle, style } = arg0);
  const obj2 = createStyles;
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  ({ image, title, description } = upsellItem);
  if (cResult[0] !== alertWidth) {
    const obj3 = { width: alertWidth };
    cResult[0] = alertWidth;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === style) {
    if (cResult[3] === legacyClassComponentStyles.premiumUpsellContainer) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === imageStyle) {
        let tmp7;
        if (cResult[7] === legacyClassComponentStyles.upsellImage) {
          tmp7 = cResult[8];
        }
        if (cResult[9] === image) {
          let tmp8;
          if (cResult[10] === tmp7) {
            tmp8 = cResult[11];
          }
          if (cResult[12] === legacyClassComponentStyles.premiumUpsellTitle) {
            let tmp12;
            if (cResult[13] === title) {
              tmp12 = cResult[14];
            }
            if (cResult[15] === description) {
              let tmp15;
              if (cResult[16] === legacyClassComponentStyles.premiumUpsellDescription) {
                tmp15 = cResult[17];
              }
              if (cResult[18] === tmp6) {
                if (cResult[19] === tmp8) {
                  if (cResult[20] === tmp12) {
                    let tmp18;
                    if (cResult[21] === tmp15) {
                      tmp18 = cResult[22];
                    }
                    return tmp18;
                  }
                }
              }
              const obj4 = { style: tmp6, children: items };
              items = [tmp8, tmp12, tmp15];
              const tmp21 = closure_15(hasOwnProperty, obj4);
              cResult[18] = tmp6;
              cResult[19] = tmp8;
              cResult[20] = tmp12;
              cResult[21] = tmp15;
              cResult[22] = tmp21;
              tmp18 = tmp21;
            }
            const obj5 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
            const tmp17 = authStore2(Text_Text.Text, obj5);
            cResult[15] = description;
            cResult[16] = legacyClassComponentStyles.premiumUpsellDescription;
            cResult[17] = tmp17;
            tmp15 = tmp17;
          }
          const obj6 = { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
          const tmp14 = authStore2(Text_Text.Text, obj6);
          cResult[12] = legacyClassComponentStyles.premiumUpsellTitle;
          cResult[13] = title;
          cResult[14] = tmp14;
          tmp12 = tmp14;
        }
        const obj7 = { style: tmp7, source: image, resizeMode: "contain" };
        const tmp11 = authStore2(metroRequire, obj7);
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
}) : ((upsellItem) => {
  let alertWidth;
  let description;
  let imageStyle;
  let items;
  let items1;
  let items2;
  let style;
  let title;
  upsellItem = upsellItem.upsellItem;
  ({ alertWidth, imageStyle, style } = upsellItem);
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  const obj2 = { style: items, children: items2 };
  items = [legacyClassComponentStyles.premiumUpsellContainer, { width: alertWidth }, style];
  const obj3 = { style: items1, source: upsellItem.image, resizeMode: "contain" };
  items1 = [legacyClassComponentStyles.upsellImage, imageStyle];
  ({ title, description } = upsellItem);
  items2 = [authStore2(metroRequire, obj3), , ];
  const obj4 = { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
  items2[1] = authStore2(Text_Text.Text, obj4);
  const obj5 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
  items2[2] = authStore2(Text_Text.Text, obj5);
  return closure_15(hasOwnProperty, obj2);
});
let closure_19 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alertWidth;
  let first;
  let tmp11;
  let tmp21;
  let tmp23;
  let tmpResult;
  let tmpResult3;
  let tmpResult4;
  let useTier0Description;
  const obj = react2;
  const cResult = obj.c(10);
  ({ alertWidth, useTier0Description } = arg0);
  const obj2 = usePremiumTrialOffer;
  const premiumTrialOffer = obj2.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const formatResult = intl.format(intl6.t["KEn+LY"], {});
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (null != skuId) {
    if (closure_12.TIER_0 === skuId) {
      let tmp17;
      const _Symbol2 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = intl6.intl;
        const format3 = intl4.format;
        const obj3 = { planName: tmpResult.getPremiumTypeDisplayName(map1.TIER_0) };
        const v1P7x8p = intl6.t["1P7x8p"];
        tmpResult = PremiumUtils;
        const format3Result = format3(v1P7x8p, obj3);
        cResult[1] = format3Result;
        tmp17 = format3Result;
      } else {
        tmp17 = cResult[1];
      }
      tmp11 = tmp17;
    } else {
      tmp11 = first;
      if (tmp12.TIER_2 === skuId) {
        let tmp13;
        const _Symbol3 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl6.intl;
          const format2 = intl3.format;
          const obj4 = { planName: tmpResult3.getPremiumTypeDisplayName(map1.TIER_2) };
          const v1P7x8p1 = intl6.t["1P7x8p"];
          tmpResult3 = PremiumUtils;
          const format2Result = format2(v1P7x8p1, obj4);
          cResult[2] = format2Result;
          tmp13 = format2Result;
        } else {
          tmp13 = cResult[2];
        }
        tmp11 = tmp13;
      }
    }
  } else {
    tmp11 = first;
    if (useTier0Description) {
      let tmp8;
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl6.intl;
        const format = intl2.format;
        const obj5 = { planName: tmpResult4.getPremiumTypeDisplayName(map1.TIER_0) };
        const kWBwlJ = intl6.t.kWBwlJ;
        tmpResult4 = PremiumUtils;
        const formatResult1 = format(kWBwlJ, obj5);
        cResult[3] = formatResult1;
        tmp8 = formatResult1;
      } else {
        tmp8 = cResult[3];
      }
      tmp11 = tmp8;
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = intl6.intl;
    const stringResult = intl5.string(intl6.t.UNtcBV);
    cResult[4] = stringResult;
    tmp21 = stringResult;
  } else {
    tmp21 = cResult[4];
  }
  if (cResult[5] !== tmp11) {
    const obj6 = { image: AssetRegistryDefault, title: tmp21, description: tmp11 };
    cResult[5] = tmp11;
    cResult[6] = obj6;
    tmp23 = obj6;
  } else {
    tmp23 = cResult[6];
  }
  if (cResult[7] === alertWidth) {
    let tmp25;
    if (cResult[8] === tmp23) {
      tmp25 = cResult[9];
    }
    return tmp25;
  }
  const tmp26 = authStore2(closure_19, { alertWidth, upsellItem: tmp23 });
  cResult[7] = alertWidth;
  cResult[8] = tmp23;
  cResult[9] = tmp26;
  tmp25 = tmp26;
}) : ((arg0) => {
  let alertWidth;
  let format2Result;
  let intl4;
  let obj6;
  let tmpResult;
  let tmpResult3;
  let tmpResult4;
  let useTier0Description;
  ({ alertWidth, useTier0Description } = arg0);
  const obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  const intl = intl6.intl;
  const formatResult = intl.format(intl6.t["KEn+LY"], {});
  if (null != skuId) {
    if (closure_12.TIER_0 === skuId) {
      const intl3 = intl6.intl;
      const format2 = intl3.format;
      const obj2 = { planName: tmpResult.getPremiumTypeDisplayName(map1.TIER_0) };
      const v1P7x8p = intl6.t["1P7x8p"];
      tmpResult = PremiumUtils;
      format2Result = format2(v1P7x8p, obj2);
    } else {
      format2Result = formatResult;
      if (tmp8.TIER_2 === skuId) {
        const intl5 = intl6.intl;
        const format3 = intl5.format;
        const obj3 = { planName: tmpResult3.getPremiumTypeDisplayName(map1.TIER_2) };
        const v1P7x8p1 = intl6.t["1P7x8p"];
        tmpResult3 = PremiumUtils;
        format2Result = format3(v1P7x8p1, obj3);
      }
    }
  } else {
    format2Result = formatResult;
    if (useTier0Description) {
      const intl2 = intl6.intl;
      const format = intl2.format;
      const obj4 = { planName: tmpResult4.getPremiumTypeDisplayName(map1.TIER_0) };
      const kWBwlJ = intl6.t.kWBwlJ;
      tmpResult4 = PremiumUtils;
      format2Result = format(kWBwlJ, obj4);
    }
  }
  const obj5 = { alertWidth, upsellItem: obj6 };
  obj6 = { image: AssetRegistryDefault, title: intl4.string(intl6.t.UNtcBV), description: format2Result };
  intl4 = intl6.intl;
  return authStore2(closure_19, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alertWidth;
  let first;
  let tmp10;
  let tmp6;
  let tmpResult;
  let useTier0Description;
  const obj = react2;
  const cResult = obj.c(8);
  ({ alertWidth, useTier0Description } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t.F6rmyq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== useTier0Description) {
    let formatResult;
    const intl2 = intl6.intl;
    const format = intl2.format;
    const t = intl6.t;
    if (useTier0Description) {
      const v1a36ee = t["1a36ee"];
      const obj2 = { planName: tmpResult.getPremiumTypeDisplayName(map1.TIER_0) };
      tmpResult = PremiumUtils;
      formatResult = format(v1a36ee, obj2);
    } else {
      formatResult = format(t.JxTzzb, {});
    }
    cResult[1] = useTier0Description;
    cResult[2] = formatResult;
    tmp6 = formatResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    const obj3 = { image: AssetRegistryDefault2, title: first, description: tmp6 };
    cResult[3] = tmp6;
    cResult[4] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === alertWidth) {
    let tmp12;
    if (cResult[6] === tmp10) {
      tmp12 = cResult[7];
    }
    return tmp12;
  }
  const tmp13 = authStore2(closure_19, { alertWidth, upsellItem: tmp10 });
  cResult[5] = alertWidth;
  cResult[6] = tmp10;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((alertWidth) => {
  let formatResult;
  let intl;
  let obj2;
  let tmp4Result;
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: obj2 };
  const useTier0Description = alertWidth.useTier0Description;
  obj2 = { image: AssetRegistryDefault2, title: intl.string(intl6.t.F6rmyq), description: formatResult };
  intl = intl6.intl;
  const intl2 = intl6.intl;
  const format = intl2.format;
  const t = intl6.t;
  if (useTier0Description) {
    const v1a36ee = t["1a36ee"];
    const obj3 = { planName: tmp4Result.getPremiumTypeDisplayName(map1.TIER_0) };
    tmp4Result = PremiumUtils;
    formatResult = format(v1a36ee, obj3);
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  return authStore2(closure_19, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? ((alertWidth) => {
  let tmp12;
  let tmp5Result;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  alertWidth = alertWidth.alertWidth;
  const obj2 = createStyles;
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  const largerUpsellImage = legacyClassComponentStyles.largerUpsellImage;
  const tmp6 = useThemeDefault();
  const obj3 = shared;
  if (obj3.isThemeDark(tmp6)) {
    tmp5Result = AssetRegistryDefault3;
  } else {
    tmp5Result = AssetRegistryDefault4;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t.OVN9la);
    const intl2 = intl6.intl;
    const stringResult1 = intl2.string(intl6.t.j0dyAG);
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
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === alertWidth) {
    if (cResult[5] === legacyClassComponentStyles.largerUpsellImage) {
      let tmp13;
      if (cResult[6] === tmp12) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const tmp14 = authStore2(closure_19, { alertWidth, imageStyle: largerUpsellImage, upsellItem: tmp12 });
  cResult[4] = alertWidth;
  cResult[5] = legacyClassComponentStyles.largerUpsellImage;
  cResult[6] = tmp12;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : ((alertWidth) => {
  let intl;
  let intl2;
  let obj4;
  let tmp4Result;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  const obj2 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: obj4 };
  const tmp5 = useThemeDefault();
  const obj3 = shared;
  if (obj3.isThemeDark(tmp5)) {
    tmp4Result = AssetRegistryDefault3;
  } else {
    tmp4Result = AssetRegistryDefault4;
  }
  obj4 = { image: tmp4Result, title: intl.string(intl6.t.OVN9la), description: intl2.string(intl6.t.j0dyAG) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  return authStore2(closure_19, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? ((alertWidth) => {
  let first;
  let intl;
  let intl2;
  const obj = react2;
  const cResult = obj.c(4);
  alertWidth = alertWidth.alertWidth;
  const obj2 = createStyles;
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { image: AssetRegistryDefault5, title: intl.string(intl6.t.rTY76D), description: intl2.string(intl6.t["2LCxoj"]) };
    intl = intl6.intl;
    intl2 = intl6.intl;
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === alertWidth) {
    let tmp7;
    if (cResult[2] === legacyClassComponentStyles.customProfileUpsellImage) {
      tmp7 = cResult[3];
    }
    return tmp7;
  }
  const obj4 = { alertWidth, imageStyle: legacyClassComponentStyles.customProfileUpsellImage, upsellItem: first };
  const tmp8 = authStore2(closure_19, obj4);
  cResult[1] = alertWidth;
  cResult[2] = legacyClassComponentStyles.customProfileUpsellImage;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((alertWidth) => {
  let intl;
  let intl2;
  let obj3;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const obj2 = { alertWidth, imageStyle: obj.useLegacyClassComponentStyles(closure_17).customProfileUpsellImage, upsellItem: obj3 };
  obj3 = { image: AssetRegistryDefault5, title: intl.string(intl6.t.rTY76D), description: intl2.string(intl6.t["2LCxoj"]) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  return authStore2(closure_19, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alertWidth;
  let first;
  let imageSource;
  const obj = react2;
  const cResult = obj.c(12);
  ({ alertWidth, imageSource } = arg0);
  const obj2 = createStyles;
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const arr = getIcons();
    const found = arr.filter((isPremium) => isPremium.isPremium);
    cResult[0] = found;
    first = found;
  } else {
    first = cResult[0];
  }
  const iconSource = first[0].iconSource;
  let prop;
  const tmp8 = useThemeDefault();
  const tmpResult = shared;
  if (tmpResult.isThemeLight(tmp8)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  if (cResult[1] === legacyClassComponentStyles.customAppIconsUpsellImage) {
    let tmp10;
    let tmp13;
    let tmp12;
    let tmp16;
    if (cResult[2] === prop) {
      tmp10 = cResult[3];
    }
    if (imageSource == null) {
      imageSource = iconSource;
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl6.intl;
      const stringResult = intl.string(intl6.t["1B1Cyn"]);
      const intl2 = intl6.intl;
      const stringResult1 = intl2.string(intl6.t.VL5TYT);
      cResult[4] = stringResult;
      cResult[5] = stringResult1;
      tmp13 = stringResult1;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[4];
      tmp13 = cResult[5];
    }
    if (cResult[6] !== imageSource) {
      const obj3 = { image: imageSource, title: tmp12, description: tmp13 };
      cResult[6] = imageSource;
      cResult[7] = obj3;
      tmp16 = obj3;
    } else {
      tmp16 = cResult[7];
    }
    if (cResult[8] === alertWidth) {
      if (cResult[9] === tmp10) {
        let tmp17;
        if (cResult[10] === tmp16) {
          tmp17 = cResult[11];
        }
        return tmp17;
      }
    }
    const obj4 = { alertWidth, imageStyle: tmp10, upsellItem: tmp16 };
    const tmp20 = authStore2(closure_19, obj4);
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
}) : ((imageSource) => {
  let intl;
  let intl2;
  let items;
  let obj4;
  imageSource = imageSource.imageSource;
  const alertWidth = imageSource.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  const arr = getIcons();
  const iconSource = arr.filter((isPremium) => isPremium.isPremium)[0].iconSource;
  const obj3 = { alertWidth, imageStyle: items, upsellItem: obj4 };
  items = [legacyClassComponentStyles.customAppIconsUpsellImage, ];
  let prop;
  const tmp4 = useThemeDefault();
  const obj2 = shared;
  if (obj2.isThemeLight(tmp4)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  items[1] = prop;
  if (imageSource == null) {
    imageSource = iconSource;
  }
  obj4 = { image: imageSource, title: intl.string(intl6.t["1B1Cyn"]), description: intl2.string(intl6.t.VL5TYT) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  return authStore2(closure_19, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alertWidth;
  let first;
  let tmp10;
  let tmp6;
  let tmpResult;
  let useTier0Description;
  const obj = react2;
  const cResult = obj.c(8);
  ({ alertWidth, useTier0Description } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t.jn2mBl);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== useTier0Description) {
    let formatResult;
    const intl2 = intl6.intl;
    const format = intl2.format;
    const t = intl6.t;
    if (useTier0Description) {
      const prop = t["8C+FZk"];
      const obj2 = { planName: tmpResult.getPremiumTypeDisplayName(map1.TIER_0) };
      tmpResult = PremiumUtils;
      formatResult = format(prop, obj2);
    } else {
      formatResult = format(t["0qJYHK"], {});
    }
    cResult[1] = useTier0Description;
    cResult[2] = formatResult;
    tmp6 = formatResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp6) {
    const obj3 = { image: AssetRegistryDefault6, title: first, description: tmp6 };
    cResult[3] = tmp6;
    cResult[4] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === alertWidth) {
    let tmp12;
    if (cResult[6] === tmp10) {
      tmp12 = cResult[7];
    }
    return tmp12;
  }
  const tmp13 = authStore2(closure_19, { alertWidth, upsellItem: tmp10 });
  cResult[5] = alertWidth;
  cResult[6] = tmp10;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : ((alertWidth) => {
  let formatResult;
  let intl;
  let obj2;
  let tmp4Result;
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: obj2 };
  const useTier0Description = alertWidth.useTier0Description;
  obj2 = { image: AssetRegistryDefault6, title: intl.string(intl6.t.jn2mBl), description: formatResult };
  intl = intl6.intl;
  const intl2 = intl6.intl;
  const format = intl2.format;
  const t = intl6.t;
  if (useTier0Description) {
    const prop = t["8C+FZk"];
    const obj3 = { planName: tmp4Result.getPremiumTypeDisplayName(map1.TIER_0) };
    tmp4Result = PremiumUtils;
    formatResult = format(prop, obj3);
  } else {
    formatResult = format(t["0qJYHK"], {});
  }
  return authStore2(closure_19, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((alertWidth) => {
  let first;
  let tmp11;
  let tmp5Result;
  const obj = react2;
  const cResult = obj.c(10);
  alertWidth = alertWidth.alertWidth;
  const obj2 = createStyles;
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  const tmp6 = useThemeDefault();
  const tmp7 = useMessageMaxLengthDefault();
  const largerUpsellImage = legacyClassComponentStyles.largerUpsellImage;
  const obj3 = shared;
  if (obj3.isThemeDark(tmp6)) {
    tmp5Result = AssetRegistryDefault7;
  } else {
    tmp5Result = AssetRegistryDefault8;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t["8cjmTj"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp7) {
    const intl2 = intl6.intl;
    const obj4 = { maxLength: tmp7 };
    const formatToPlainStringResult = intl2.formatToPlainString(intl6.t.moN9wh, obj4);
    cResult[1] = tmp7;
    cResult[2] = formatToPlainStringResult;
    tmp11 = formatToPlainStringResult;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp5Result) {
    let tmp13;
    if (cResult[4] === tmp11) {
      tmp13 = cResult[5];
    }
    if (cResult[6] === alertWidth) {
      if (cResult[7] === legacyClassComponentStyles.largerUpsellImage) {
        let tmp14;
        if (cResult[8] === tmp13) {
          tmp14 = cResult[9];
        }
        return tmp14;
      }
    }
    const obj5 = { alertWidth, imageStyle: largerUpsellImage, upsellItem: tmp13 };
    const tmp17 = authStore2(closure_19, obj5);
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
}) : ((alertWidth) => {
  let intl;
  let intl2;
  let obj4;
  let tmp4Result;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  const obj2 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: obj4 };
  const tmp5 = useThemeDefault();
  const tmp6 = useMessageMaxLengthDefault();
  const obj3 = shared;
  if (obj3.isThemeDark(tmp5)) {
    tmp4Result = AssetRegistryDefault7;
  } else {
    tmp4Result = AssetRegistryDefault8;
  }
  obj4 = { image: tmp4Result, title: intl.string(intl6.t["8cjmTj"]), description: intl2.formatToPlainString(intl6.t.moN9wh, { maxLength: tmp6 }) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  return authStore2(closure_19, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_27 = ReactCompilerGating.isReactCompilerEnabled() ? ((alertWidth) => {
  let tmp12;
  let tmp5Result;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(8);
  alertWidth = alertWidth.alertWidth;
  const obj2 = createStyles;
  const legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  const largerUpsellImage = legacyClassComponentStyles.largerUpsellImage;
  const tmp6 = useThemeDefault();
  const obj3 = shared;
  if (obj3.isThemeDark(tmp6)) {
    tmp5Result = AssetRegistryDefault9;
  } else {
    tmp5Result = AssetRegistryDefault10;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl6.intl;
    const stringResult = intl.string(intl6.t["CoNXB+"]);
    const intl2 = intl6.intl;
    const formatResult = intl2.format(intl6.t.mkXb2F, {});
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
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === alertWidth) {
    if (cResult[5] === legacyClassComponentStyles.largerUpsellImage) {
      let tmp13;
      if (cResult[6] === tmp12) {
        tmp13 = cResult[7];
      }
      return tmp13;
    }
  }
  const tmp14 = authStore2(closure_19, { alertWidth, imageStyle: largerUpsellImage, upsellItem: tmp12 });
  cResult[4] = alertWidth;
  cResult[5] = legacyClassComponentStyles.largerUpsellImage;
  cResult[6] = tmp12;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : ((alertWidth) => {
  let intl;
  let intl2;
  let obj4;
  let tmp4Result;
  alertWidth = alertWidth.alertWidth;
  const obj = createStyles;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  const obj2 = { alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: obj4 };
  const tmp5 = useThemeDefault();
  const obj3 = shared;
  if (obj3.isThemeDark(tmp5)) {
    tmp4Result = AssetRegistryDefault9;
  } else {
    tmp4Result = AssetRegistryDefault10;
  }
  obj4 = { image: tmp4Result, title: intl.string(intl6.t["CoNXB+"]), description: intl2.format(intl6.t.mkXb2F, {}) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  return authStore2(closure_19, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let alertWidth;
  let dataSavingMode;
  let intl;
  let intl2;
  let item;
  let items1;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(12);
  ({ item, alertWidth } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UnsyncedUserSettingsStore];
    const fn = function o() {
      return dataSavingMode.dataSavingMode;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y(dataSavingMode) {
      const obj = UserSettingsActionCreatorsDefault;
      const obj2 = { dataSavingMode };
      const result = obj.updatedUnsyncedSettings(obj2);
    };
    cResult[2] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
  }
  const first = _slicedToArray(react.useState(!stateFromStores), 1)[0];
  if (cResult[3] === alertWidth) {
    let tmp10;
    if (cResult[4] === item) {
      tmp10 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
      let tmp12;
      if (cResult[7] === first) {
        tmp12 = cResult[8];
      }
      if (cResult[9] === tmp10) {
        let tmp15;
        if (cResult[10] === tmp12) {
          tmp15 = cResult[11];
        }
        return tmp15;
      }
      let obj2 = { children: items1 };
      items1 = [tmp10, tmp12];
      const tmp18 = closure_15(authStore3, obj2);
      cResult[9] = tmp10;
      cResult[10] = tmp12;
      cResult[11] = tmp18;
      tmp15 = tmp18;
    }
    let tmp13 = null;
    if (first) {
      const obj3 = { start: true, end: true, label: intl.string(intl6.t.ix8XIj), subLabel: intl2.string(intl6.t["wC0+Ph"]), value: stateFromStores, onValueChange: tmp8 };
      const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
      intl = intl6.intl;
      intl2 = intl6.intl;
      tmp13 = authStore2(TableSwitchRow, obj3);
    }
    cResult[6] = stateFromStores;
    cResult[7] = first;
    cResult[8] = tmp13;
    tmp12 = tmp13;
  }
  const tmp11 = authStore2(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD);
  cResult[3] = alertWidth;
  cResult[4] = item;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let alertWidth;
  let dataSavingMode;
  let intl;
  let intl2;
  let item;
  ({ item, alertWidth } = arg0);
  let obj = get_initialized;
  const items = [UnsyncedUserSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const first = _slicedToArray(react.useState(!stateFromStores), 1)[0];
  const children = [authStore2(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD), ];
  let tmp7Result = null;
  if (first) {
    let obj2 = {
      start: true,
      end: true,
      label: intl.string(intl6.t.ix8XIj),
      subLabel: intl2.string(intl6.t["wC0+Ph"]),
      value: stateFromStores,
      onValueChange(dataSavingMode) {
          const obj = UserSettingsActionCreatorsDefault;
          const obj2 = { dataSavingMode };
          const result = obj.updatedUnsyncedSettings(obj2);
        }
    };
    const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
    intl = intl6.intl;
    intl2 = intl6.intl;
    tmp7Result = authStore2(TableSwitchRow, obj2);
  }
  children[1] = tmp7Result;
  return closure_15(authStore3, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialUpsellKey) => {
  let analyticsLocations;
  let analyticsProperties;
  let current;
  let getNitroText;
  let imageSource;
  let legacyClassComponentStyles;
  let onClose;
  let onViewAllPerks;
  let ref;
  let tmp7;
  let tmp8;
  let tmp = initialUpsellKey;
  let tmp2 = legacyClassComponentStyles;
  let obj = initialUpsellKey(legacyClassComponentStyles[14]);
  const cResult = obj.c(29);
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  const analyticsLocation = initialUpsellKey.analyticsLocation;
  ({ analyticsProperties, onClose, analyticsLocations, imageSource } = initialUpsellKey);
  let obj2 = initialUpsellKey(legacyClassComponentStyles[9]);
  legacyClassComponentStyles = obj2.useLegacyClassComponentStyles(closure_17);
  size = analyticsLocation(legacyClassComponentStyles[35])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), c29) - c30;
  _slicedToArray = diff;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return ref.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let tmpResult = tmp(tmp2[31]);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  const tmpResult3 = tmp(tmp2[34]);
  const upsellItems = tmpResult3.getUpsellItems();
  const sorted = upsellItems.sort((key) => {
    let num = 1;
    if (key.key === initialUpsellKey) {
      num = -1;
    }
    return num;
  });
  const tmp5Result = analyticsLocation(tmp2[36]);
  const analyticsLocations2 = tmp5Result(analyticsLocations, tmp5(tmp2[37]).PREMIUM_UPSELL_ALERT).analyticsLocations;
  if (cResult[2] !== analyticsLocation) {
    class G {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Nitro Upsell", location: analyticsLocation };
        obj.track(constants.OPEN_MODAL, obj2);
      }
    }
    cResult[2] = analyticsLocation;
    cResult[3] = G;
  } else {
    class G {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Nitro Upsell", location: analyticsLocation };
        obj.track(constants.OPEN_MODAL, obj2);
      }
    }
  }
  analyticsLocation(tmp2[39])(G);
  const tmpResult4 = tmp(tmp2[34]);
  const premiumUpsellConfig = tmpResult4.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
  if (cResult[4] === analyticsLocation) {
    class G {
      constructor() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { type: "Nitro Upsell", location: analyticsLocation };
        obj.track(constants.OPEN_MODAL, obj2);
      }
    }
  }
  let obj3 = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
  cResult[4] = analyticsLocation;
  cResult[5] = analyticsProperties;
  cResult[6] = useTier0UpsellContent;
  cResult[7] = obj3;
}) : ((initialUpsellKey) => {
  let alertWidth;
  let analyticsLocations;
  let analyticsProperties;
  let currentUser;
  let formatToPlainStringResult;
  let getNitroText;
  let imageSource;
  let intl;
  let intl4;
  let intl5;
  let onClose;
  let onViewAllPerks;
  let tmp12Result;
  let tmpResult;
  let tmpResult5;
  let tmpResult7;
  let tmpResult8;
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  const analyticsLocation = initialUpsellKey.analyticsLocation;
  let legacyClassComponentStyles;
  let tmp = initialUpsellKey;
  let tmp2 = legacyClassComponentStyles;
  ({ analyticsLocations, analyticsProperties, onClose, imageSource } = initialUpsellKey);
  let obj = initialUpsellKey(legacyClassComponentStyles[9]);
  legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  size = analyticsLocation(legacyClassComponentStyles[35])();
  const diff = Math.min(0.9 * Math.min(size.width, size.height), c29) - c30;
  let c3 = diff;
  let obj2 = initialUpsellKey(legacyClassComponentStyles[31]);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = initialUpsellKey(legacyClassComponentStyles[34]);
  const upsellItems = obj3.getUpsellItems();
  const sorted = upsellItems.sort((key) => {
    let num = 1;
    if (key.key === initialUpsellKey) {
      num = -1;
    }
    return num;
  });
  const tmp7 = analyticsLocation(legacyClassComponentStyles[36]);
  const analyticsLocations2 = tmp7(analyticsLocations, analyticsLocation(legacyClassComponentStyles[37]).PREMIUM_UPSELL_ALERT).analyticsLocations;
  analyticsLocation(legacyClassComponentStyles[39])(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Nitro Upsell", location: analyticsLocation };
    obj.track(constants.OPEN_MODAL, obj2);
  });
  const obj5 = initialUpsellKey(legacyClassComponentStyles[34]);
  const premiumUpsellConfig = obj5.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
  const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const obj4 = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
  ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
  const ref = analyticsLocations2.useRef(obj4);
  const effect = analyticsLocations2.useEffect(() => {
    ref.current = obj4;
  });
  const items1 = [analyticsLocations2];
  const effect1 = analyticsLocations2.useEffect(() => {
    let analyticsProperties;
    let useTier0UpsellContent;
    ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
    const obj = { location: analyticsLocation, location_stack: analyticsLocations2, sku_id: useTier0UpsellContent ? closure_12.TIER_0 : closure_12.TIER_2 };
    const track = AnalyticsUtilsDefault.track;
    const PREMIUM_UPSELL_VIEWED = constants.PREMIUM_UPSELL_VIEWED;
    AnalyticsUtilsDefault;
    const merged = Object.assign(analyticsProperties);
    track(PREMIUM_UPSELL_VIEWED, obj);
  }, items1);
  const obj6 = {
    confirmColor: initialUpsellKey(legacyClassComponentStyles[45]).ButtonColors.GREEN,
    confirmText: getNitroText,
    renderConfirmIcon() {
      const obj = { source: AssetRegistryDefault11, style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
      const tmp = FastImageDefault;
      const tmp2 = authStore2(tmp, obj);
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
      return tmp2;
    },
    cancelText: intl.string(initialUpsellKey(legacyClassComponentStyles[16]).t.cpT0Cq),
    onClose,
    onConfirm: onViewAllPerks,
    children: tmp12Result
  };
  const tmp13 = analyticsLocation(legacyClassComponentStyles[44]);
  intl = initialUpsellKey(legacyClassComponentStyles[16]).intl;
  const obj7 = {
    style: legacyClassComponentStyles.carousel,
    width: diff,
    pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle,
    children: sorted.map((key) => {
      const obj = { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth };
      return authStore2(UpsellItem, obj, key.key);
    })
  };
  const tmp14 = analyticsLocation(legacyClassComponentStyles[46]);
  tmp12Result = closure_14(tmp14, obj7);
  const tmp4 = analyticsLocation;
  if (constants2.GLOBAL_EMOJI === initialUpsellKey) {
    const obj8 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
    tmp12Result = closure_14(closure_20, obj8);
  } else if (constants2.ANIMATED_EMOJI === initialUpsellKey) {
    const obj9 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
    tmp12Result = closure_14(closure_21, obj9);
  } else if (constants2.GLOBAL_STICKER === initialUpsellKey) {
    const obj10 = { alertWidth: diff, useTier0Description: useTier0UpsellContent };
    tmp12Result = closure_14(closure_25, obj10);
  } else if (constants2.CUSTOM_PROFILES === initialUpsellKey) {
    const obj11 = { alertWidth: diff };
    tmp12Result = closure_14(closure_23, obj11);
  } else if (constants2.APP_ICONS === initialUpsellKey) {
    const obj12 = { alertWidth: diff, imageSource };
    tmp12Result = closure_14(closure_24, obj12);
  } else if (constants2.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
    const obj13 = { alertWidth: diff };
    tmp12Result = closure_14(closure_22, obj13);
  } else if (constants2.LONGER_MESSAGE === initialUpsellKey) {
    const obj14 = { alertWidth: diff };
    tmp12Result = closure_14(closure_26, obj14);
  } else if (constants2.GUILD_CAP === initialUpsellKey) {
    const obj15 = { alertWidth: diff };
    tmp12Result = closure_14(closure_27, obj15);
  } else if (constants2.UPLOAD === initialUpsellKey) {
    const obj16 = { key: constants2.UPLOAD, image: tmp4(tmp2[47]), activeTitle: intl4.string(tmp(tmp2[16]).t["1EOZqw"]), passiveTitle: intl5.string(tmp(tmp2[16]).t.tB51W4), description: formatToPlainStringResult };
    intl4 = tmp(tmp2[16]).intl;
    intl5 = tmp(tmp2[16]).intl;
    if (useTier0UpsellContent) {
      const intl3 = tmp(tmp2[16]).intl;
      const formatToPlainString = intl3.formatToPlainString;
      const obj17 = { premiumPlan: tmpResult.getPremiumTypeDisplayName(closure_13.TIER_0), premiumMaxSize: tmpResult5.getMaxFileSizeForPremiumType(closure_13.TIER_0) };
      const Z7Xb7H = tmp(tmp2[16]).t.Z7Xb7H;
      tmpResult = tmp(tmp2[17]);
      tmpResult5 = tmp(tmp2[17]);
      formatToPlainStringResult = formatToPlainString(Z7Xb7H, obj17);
    } else {
      const tmpResult6 = tmp(tmp2[40]);
      const userMaxFileSize = tmpResult6.getUserMaxFileSize(stateFromStores);
      const result = userMaxFileSize / tmp(tmp2[41]).BYTE_IN_KB;
      const intl2 = tmp(tmp2[16]).intl;
      const format = intl2.format;
      const obj18 = { maxUploadStandard: tmpResult7.formatSize(result, { useKibibytes: true }), maxUploadPremium: tmpResult8.getMaxFileSizeForPremiumType(closure_13.TIER_2) };
      const DUT5IC = tmp(tmp2[16]).t.DUT5IC;
      tmpResult7 = tmp(tmp2[41]);
      tmpResult8 = tmp(tmp2[17]);
      formatToPlainStringResult = format(DUT5IC, obj18);
    }
    const obj19 = { item: obj16, alertWidth: diff };
    tmp12Result = closure_14(closure_28, obj19);
  }
  return closure_14(tmp13, obj6);
});
let c29 = 500;
let c30 = 32;
size = size_mod;
let result = size.fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default tmp9;
export const PremiumUpsellItem = tmp8;
export const PremiumUpsellAlert = tmp9;