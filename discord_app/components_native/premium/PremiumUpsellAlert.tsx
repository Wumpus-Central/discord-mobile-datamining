// discord_app/components_native/premium/PremiumUpsellAlert.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import shared from "../../design/shared.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import createStyles2 from "../../design/components/Styles/native/createStyles.tsx";
import UserSettingsActionCreatorsDefault from "../../actions/UserSettingsActionCreators.tsx";
import FileSizeUtils from "../../utils/FileSizeUtils.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import TableSwitchRow from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import usePremiumTrialOffer from "../../modules/premium/hooks/usePremiumTrialOffer.android.tsx";
import useMessageMaxLengthDefault from "../../modules/messages/useMessageMaxLength.tsx";
import _modDef9209 from "../../../_runtime/metro/09209__.js";
import _modDef9210 from "../../../_runtime/metro/09210__.js";
import _modDef9428 from "../../../_runtime/metro/09428__.js";
import _modDef9429 from "../../../_runtime/metro/09429__.js";
import _modDef9430 from "../../../_runtime/metro/09430__.js";
import _modDef9431 from "../../../_runtime/metro/09431__.js";
import _modDef9432 from "../../../_runtime/metro/09432__.js";
import _modDef9433 from "../../../_runtime/metro/09433__.js";
import _modDef9434 from "../../../_runtime/metro/09434__.js";
import _modDef9435 from "../../../_runtime/metro/09435__.js";
import PremiumFeatureUtils from "../../utils/PremiumFeatureUtils.tsx";
import _modDef9437 from "../../../_runtime/metro/09437__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UnsyncedUserSettingsStore from "../../modules/user_settings/UnsyncedUserSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_9, UpsellTypes: c10 } = Constants);
const getIcons = fn(9401).getIcons;
const PremiumConstants = fn(1391);
({ PremiumSubscriptionSKUs: closure_12, PremiumTypes: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  carousel: { alignItems: "center" },
  upsellContainer: { alignItems: "center" },
  premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 },
  nitroWheel: { width: 32, height: 32, marginVertical: -8 },
  upsellImage: { height: 80, width: 120 },
  upsellTitle: { marginBottom: 8, textAlign: "center" },
  premiumUpsellTitle: { marginVertical: nativeDefault.space.PX_8, textAlign: "center" },
  upsellDescription: { textAlign: "center" },
  premiumUpsellDescription: { textAlign: "center" },
  pageIndicatorStyle: { marginTop: 16 },
  largerUpsellImage: { height: 154, width: 226 },
  customProfileUpsellImage: { width: 240, height: 194 },
  loadingIndicator: { height: 170 },
  customAppIconUpsellLightImage: null,
  customAppIconsUpsellImage: null,
};
let obj3 = { marginVertical: nativeDefault.space.PX_8, textAlign: "center" };
obj2.customAppIconUpsellLightImage = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
let size = { height: 80, width: 80, borderRadius: nativeDefault.radii.lg };
obj2.customAppIconsUpsellImage = size;
let closure_17 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class UpsellItem extends PureComponent {}
UpsellItem.prototype["render"] = function render() {
  const tmp = closure_17(this.context);
  const props = this.props;
  const upsellItem = props.upsellItem;
  let passiveTitle = upsellItem.passiveTitle;
  const obj = { style: null, children: null };
  const items = [tmp.upsellContainer, { width: props.alertWidth }];
  obj.style = items;
  ({ activeTitle, description } = upsellItem);
  const items1 = [
    state(timestampProducer, { style: tmp.upsellImage, source: upsellItem.image, resizeMode: "contain" }),
    ,
  ];
  const obj3 = {
    style: tmp.upsellTitle,
    variant: "text-md/medium",
    color: "mobile-text-heading-primary",
    children: null,
  };
  if (props.isInitial) {
    passiveTitle = activeTitle;
  }
  obj3.children = passiveTitle;
  items1[1] = state(Text_Text.Text, obj3);
  items1[2] = state(Text_Text.Text, { style: tmp.upsellDescription, variant: "text-sm/medium", children: description });
  obj.children = items1;
  return closure_1_15(hasOwnProperty, obj);
};
UpsellItem.contextType = fn(4787).ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumUpsellItem(arg0) {
      const cResult = c.c(23);
      ({ upsellItem, alertWidth, imageStyle, style } = arg0);
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
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
                  const tmp21 = closure_1_15(hasOwnProperty, obj4);
                  cResult[18] = tmp6;
                  cResult[19] = tmp8;
                  cResult[20] = tmp12;
                  cResult[21] = tmp15;
                  cResult[22] = tmp21;
                  tmp18 = tmp21;
                }
                const obj5 = {
                  style: legacyClassComponentStyles.premiumUpsellDescription,
                  variant: "text-md/medium",
                  children: description,
                };
                const tmp17 = state(Text_Text.Text, obj5);
                cResult[15] = description;
                cResult[16] = legacyClassComponentStyles.premiumUpsellDescription;
                cResult[17] = tmp17;
                tmp15 = tmp17;
              }
              const obj6 = {
                style: legacyClassComponentStyles.premiumUpsellTitle,
                variant: "heading-xl/extrabold",
                color: "mobile-text-heading-primary",
                accessibilityRole: "header",
                children: title,
              };
              const tmp14 = state(Text_Text.Text, obj6);
              cResult[12] = legacyClassComponentStyles.premiumUpsellTitle;
              cResult[13] = title;
              cResult[14] = tmp14;
              tmp12 = tmp14;
            }
            const obj7 = { style: tmp7, source: image, resizeMode: "contain" };
            const tmp11 = state(timestampProducer, obj7);
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
    }
  : function PremiumUpsellItem(upsellItem) {
      upsellItem = upsellItem.upsellItem;
      ({ alertWidth, imageStyle, style } = upsellItem);
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const obj2 = { style: null, children: null };
      const items = [legacyClassComponentStyles.premiumUpsellContainer, { width: alertWidth }, style];
      obj2.style = items;
      const obj3 = { style: null, source: upsellItem.image, resizeMode: "contain" };
      const items1 = [legacyClassComponentStyles.upsellImage, imageStyle];
      obj3.style = items1;
      ({ title, description } = upsellItem);
      const items2 = [
        state(timestampProducer, obj3),
        state(Text_Text.Text, {
          style: legacyClassComponentStyles.premiumUpsellTitle,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          accessibilityRole: "header",
          children: title,
        }),
        state(Text_Text.Text, {
          style: legacyClassComponentStyles.premiumUpsellDescription,
          variant: "text-md/medium",
          children: description,
        }),
      ];
      obj2.children = items2;
      return closure_1_15(hasOwnProperty, obj2);
    };
let closure_19 = tmp7;
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GlobalEmojiUpsell(arg0) {
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
        if (__initData.TIER_0 === skuId) {
          const _Symbol2 = Symbol;
          if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
            const intl4 = util.intl;
            const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_0) };
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
              const obj4 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_2) };
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
            const obj5 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_0) };
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
        const obj6 = { image: _modDef9209, title: tmp20, description: tmp11 };
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
      const tmp25 = state(closure_19, { alertWidth, upsellItem: tmp22 });
      cResult[7] = alertWidth;
      cResult[8] = tmp22;
      cResult[9] = tmp25;
      tmp24 = tmp25;
    }
  : function GlobalEmojiUpsell(arg0) {
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
        if (__initData.TIER_0 === skuId) {
          const intl3 = util.intl;
          const obj2 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_0) };
          let formatResult1 = intl3.format(util.t["1P7x8p"], obj2);
          const tmpResult = PremiumUtils;
        } else {
          formatResult1 = formatResult;
          if (tmp8.TIER_2 === skuId) {
            const intl5 = util.intl;
            const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_2) };
            formatResult1 = intl5.format(util.t["1P7x8p"], obj3);
            const tmpResult3 = PremiumUtils;
          }
        }
      } else {
        formatResult1 = formatResult;
        if (useTier0Description) {
          const intl2 = util.intl;
          const obj4 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_0) };
          formatResult1 = intl2.format(util.t.kWBwlJ, obj4);
          const tmpResult4 = PremiumUtils;
        }
      }
      const obj5 = { alertWidth, upsellItem: null };
      const obj6 = { image: _modDef9209, title: null, description: null };
      const intl4 = util.intl;
      obj6.title = intl4.string(util.t.UNtcBV);
      obj6.description = formatResult1;
      obj5.upsellItem = obj6;
      return state(closure_19, obj5);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AnimatedEmojiUpsell(arg0) {
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
          t.planName = getPremiumTypeDisplayName(__initData2.TIER_0);
          let formatResult = format(t["1a36ee"], t);
        } else {
          formatResult = format(t.JxTzzb, {});
        }
        cResult[1] = useTier0Description;
        cResult[2] = formatResult;
      } else {
        if (cResult[3] !== cResult[2]) {
          const obj2 = { image: _modDef9210, title: first, description: tmp5 };
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
        const tmp15 = state(closure_19, obj3);
        cResult[5] = alertWidth;
        cResult[6] = tmp10;
        cResult[7] = tmp15;
        tmp12 = tmp15;
      }
    }
  : function AnimatedEmojiUpsell(alertWidth) {
      const obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
      const obj2 = { image: _modDef9210, title: null, description: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.F6rmyq);
      const intl2 = util.intl;
      const format = intl2.format;
      const t = util.t;
      if (alertWidth.useTier0Description) {
        const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_0) };
        let formatResult = format(t["1a36ee"], obj3);
        const tmp4Result = PremiumUtils;
      } else {
        formatResult = format(t.JxTzzb, {});
      }
      obj2.description = formatResult;
      obj.upsellItem = obj2;
      return state(closure_19, obj);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumGuildIdentityUpsell(alertWidth) {
      const cResult = c.c(8);
      alertWidth = alertWidth.alertWidth;
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const tmp6 = useThemeDefault();
      if (obj3.isThemeDark(tmp6)) {
        let tmp5Result = _modDef9428;
      } else {
        tmp5Result = _modDef9429;
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
      const tmp14 = state(closure_19, {
        alertWidth,
        imageStyle: legacyClassComponentStyles.largerUpsellImage,
        upsellItem: tmp12,
      });
      cResult[4] = alertWidth;
      cResult[5] = legacyClassComponentStyles.largerUpsellImage;
      cResult[6] = tmp12;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      obj3 = shared;
    }
  : function PremiumGuildIdentityUpsell(alertWidth) {
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const obj2 = {
        alertWidth: alertWidth.alertWidth,
        imageStyle: legacyClassComponentStyles.largerUpsellImage,
        upsellItem: null,
      };
      const tmp5 = useThemeDefault();
      if (obj3.isThemeDark(tmp5)) {
        let tmp4Result = _modDef9428;
      } else {
        tmp4Result = _modDef9429;
      }
      const obj4 = { image: tmp4Result, title: null, description: null };
      const intl = util.intl;
      obj4.title = intl.string(util.t.OVN9la);
      const intl2 = util.intl;
      obj4.description = intl2.string(util.t.j0dyAG);
      obj2.upsellItem = obj4;
      return state(closure_19, obj2);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomProfilesUpsell(alertWidth) {
      const cResult = c.c(4);
      alertWidth = alertWidth.alertWidth;
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { image: _modDef9430, title: null, description: null };
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
      const tmp8 = state(closure_19, {
        alertWidth,
        imageStyle: legacyClassComponentStyles.customProfileUpsellImage,
        upsellItem: first,
      });
      cResult[1] = alertWidth;
      cResult[2] = legacyClassComponentStyles.customProfileUpsellImage;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj4 = { alertWidth, imageStyle: legacyClassComponentStyles.customProfileUpsellImage, upsellItem: first };
    }
  : function CustomProfilesUpsell(alertWidth) {
      const obj2 = {
        alertWidth: alertWidth.alertWidth,
        imageStyle: createStyles2.useLegacyClassComponentStyles(closure_17).customProfileUpsellImage,
        upsellItem: null,
      };
      const obj3 = { image: _modDef9430, title: null, description: null };
      const intl = util.intl;
      obj3.title = intl.string(util.t.rTY76D);
      const intl2 = util.intl;
      obj3.description = intl2.string(util.t["2LCxoj"]);
      obj2.upsellItem = obj3;
      return state(closure_19, obj2);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomAppIconsUpsell(arg0) {
      const cResult = c.c(12);
      ({ alertWidth, imageSource } = arg0);
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
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
        const tmp20 = state(closure_19, obj4);
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
    }
  : function CustomAppIconsUpsell(alertWidth) {
      let iconSource = alertWidth.imageSource;
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const arr = getIcons();
      const tmp4 = useThemeDefault();
      const obj3 = { alertWidth: alertWidth.alertWidth, imageStyle: null, upsellItem: null };
      const items = [legacyClassComponentStyles.customAppIconsUpsellImage];
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
      return state(closure_19, obj3);
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GlobalStickerUpsell(arg0) {
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
          t.planName = getPremiumTypeDisplayName(__initData2.TIER_0);
          let formatResult = format(t["8C+FZk"], t);
        } else {
          formatResult = format(t["0qJYHK"], {});
        }
        cResult[1] = useTier0Description;
        cResult[2] = formatResult;
      } else {
        if (cResult[3] !== cResult[2]) {
          const obj2 = { image: _modDef9431, title: first, description: tmp5 };
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
        const tmp15 = state(closure_19, obj3);
        cResult[5] = alertWidth;
        cResult[6] = tmp10;
        cResult[7] = tmp15;
        tmp12 = tmp15;
      }
    }
  : function GlobalStickerUpsell(alertWidth) {
      const obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
      const obj2 = { image: _modDef9431, title: null, description: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.jn2mBl);
      const intl2 = util.intl;
      const format = intl2.format;
      const t = util.t;
      if (alertWidth.useTier0Description) {
        const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(__initData2.TIER_0) };
        let formatResult = format(t["8C+FZk"], obj3);
        const tmp4Result = PremiumUtils;
      } else {
        formatResult = format(t["0qJYHK"], {});
      }
      obj2.description = formatResult;
      obj.upsellItem = obj2;
      return state(closure_19, obj);
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LongerMessageUpsell(alertWidth) {
      const cResult = c.c(10);
      alertWidth = alertWidth.alertWidth;
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const tmp7 = useMessageMaxLengthDefault();
      const tmp6 = useThemeDefault();
      if (obj3.isThemeDark(tmp6)) {
        let tmp5Result = _modDef9432;
      } else {
        tmp5Result = _modDef9433;
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
        const tmp17 = state(closure_19, obj5);
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
    }
  : function LongerMessageUpsell(alertWidth) {
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const obj2 = {
        alertWidth: alertWidth.alertWidth,
        imageStyle: legacyClassComponentStyles.largerUpsellImage,
        upsellItem: null,
      };
      const tmp5 = useThemeDefault();
      const tmp6 = useMessageMaxLengthDefault();
      if (obj3.isThemeDark(tmp5)) {
        let tmp4Result = _modDef9432;
      } else {
        tmp4Result = _modDef9433;
      }
      const obj4 = { image: tmp4Result, title: null, description: null };
      const intl = util.intl;
      obj4.title = intl.string(util.t["8cjmTj"]);
      const intl2 = util.intl;
      obj4.description = intl2.formatToPlainString(util.t.moN9wh, { maxLength: tmp6 });
      obj2.upsellItem = obj4;
      return state(closure_19, obj2);
    };
ReactCompilerGating = fn(558);
let closure_27 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildCapUpsell(alertWidth) {
      const cResult = c.c(8);
      alertWidth = alertWidth.alertWidth;
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const tmp6 = useThemeDefault();
      if (obj3.isThemeDark(tmp6)) {
        let tmp5Result = _modDef9434;
      } else {
        tmp5Result = _modDef9435;
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
      const tmp14 = state(closure_19, {
        alertWidth,
        imageStyle: legacyClassComponentStyles.largerUpsellImage,
        upsellItem: tmp12,
      });
      cResult[4] = alertWidth;
      cResult[5] = legacyClassComponentStyles.largerUpsellImage;
      cResult[6] = tmp12;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      obj3 = shared;
    }
  : function GuildCapUpsell(alertWidth) {
      const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_17);
      const obj2 = {
        alertWidth: alertWidth.alertWidth,
        imageStyle: legacyClassComponentStyles.largerUpsellImage,
        upsellItem: null,
      };
      const tmp5 = useThemeDefault();
      if (obj3.isThemeDark(tmp5)) {
        let tmp4Result = _modDef9434;
      } else {
        tmp4Result = _modDef9435;
      }
      const obj4 = { image: tmp4Result, title: null, description: null };
      const intl = util.intl;
      obj4.title = intl.string(util.t["CoNXB+"]);
      const intl2 = util.intl;
      obj4.description = intl2.format(util.t.mkXb2F, {});
      obj2.upsellItem = obj4;
      return state(closure_19, obj2);
    };
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UploadUpsell(arg0) {
      const cResult = c.c(12);
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
          const tmp18 = closure_1_15(value2, obj2);
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
          tmp13 = state(TableSwitchRow.TableSwitchRow, obj3);
        }
        cResult[6] = stateFromStores;
        cResult[7] = first;
        cResult[8] = tmp13;
        tmp12 = tmp13;
      }
      const tmp11 = state(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD);
      cResult[3] = alertWidth;
      cResult[4] = item;
      cResult[5] = tmp11;
      tmp10 = tmp11;
      const tmpResult = initialize;
    }
  : function UploadUpsell(arg0) {
      ({ item, alertWidth } = arg0);
      const items = [UnsyncedUserSettingsStore];
      const stateFromStores = initialize.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
      const children = [state(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD)];
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
        tmp6Result = state(TableSwitchRow.TableSwitchRow, obj2);
      }
      children[1] = tmp6Result;
      return closure_1_15(value2, { children });
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumUpsellAlert(initialUpsellKey) {
      const cResult = initialUpsellKey(legacyClassComponentStyles[14]).c(29);
      initialUpsellKey = initialUpsellKey.initialUpsellKey;
      const analyticsLocation = initialUpsellKey.analyticsLocation;
      ({ analyticsProperties, onClose, analyticsLocations, imageSource } = initialUpsellKey);
      let obj = initialUpsellKey(legacyClassComponentStyles[14]);
      legacyClassComponentStyles = initialUpsellKey(legacyClassComponentStyles[9]).useLegacyClassComponentStyles(
        closure_17,
      );
      const size = analyticsLocation(legacyClassComponentStyles[35])();
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
      let obj2 = initialUpsellKey(legacyClassComponentStyles[9]);
      const stateFromStores = initialUpsellKey(legacyClassComponentStyles[31]).useStateFromStores(tmp7, tmp8);
      let tmpResult = initialUpsellKey(legacyClassComponentStyles[31]);
      const upsellItems = initialUpsellKey(legacyClassComponentStyles[34]).getUpsellItems();
      const sorted = upsellItems.sort((key) => {
        let num = 1;
        if (key.key === initialUpsellKey) {
          num = -1;
        }
        return num;
      });
      const tmpResult3 = initialUpsellKey(legacyClassComponentStyles[34]);
      const analyticsLocations2 = analyticsLocation(legacyClassComponentStyles[36])(
        analyticsLocations,
        tmp5(tmp2[37]).PREMIUM_UPSELL_ALERT,
      ).analyticsLocations;
      if (cResult[2] !== analyticsLocation) {
        class B {
          constructor() {
            obj = closure_1(closure_2[38]);
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
            obj = closure_1(closure_2[38]);
            obj1 = { type: "Nitro Upsell", location: analyticsLocation };
            trackResult = obj.track(AnalyticEvents.OPEN_MODAL, obj1);
            return;
          }
        }
      }
      analyticsLocation(legacyClassComponentStyles[39])(B);
      const tmp5Result = analyticsLocation(legacyClassComponentStyles[36]);
      const premiumUpsellConfig = initialUpsellKey(legacyClassComponentStyles[34]).usePremiumUpsellConfig(
        initialUpsellKey,
        analyticsLocations2,
        analyticsLocation,
      );
      const useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
      ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
      if (cResult[4] === analyticsLocation) {
        class B {
          constructor() {
            obj = closure_1(closure_2[38]);
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
      const tmpResult4 = initialUpsellKey(legacyClassComponentStyles[34]);
    }
  : function PremiumUpsellAlert(initialUpsellKey) {
      initialUpsellKey = initialUpsellKey.initialUpsellKey;
      const analyticsLocation = initialUpsellKey.analyticsLocation;
      let legacyClassComponentStyles;
      ({ analyticsLocations, analyticsProperties, onClose, imageSource } = initialUpsellKey);
      legacyClassComponentStyles = initialUpsellKey(legacyClassComponentStyles[9]).useLegacyClassComponentStyles(
        closure_17,
      );
      const size = analyticsLocation(legacyClassComponentStyles[35])();
      const diff = Math.min(0.9 * Math.min(size.width, size.height), c29) - c30;
      c3 = diff;
      let obj = initialUpsellKey(legacyClassComponentStyles[9]);
      const tmp4 = analyticsLocation;
      const items = [UserStore];
      const stateFromStores = initialUpsellKey(legacyClassComponentStyles[31]).useStateFromStores(items, () =>
        currentUser.getCurrentUser(),
      );
      let obj2 = initialUpsellKey(legacyClassComponentStyles[31]);
      const upsellItems = initialUpsellKey(legacyClassComponentStyles[34]).getUpsellItems();
      const sorted = upsellItems.sort((key) => {
        let num = 1;
        if (key.key === initialUpsellKey) {
          num = -1;
        }
        return num;
      });
      const obj3 = initialUpsellKey(legacyClassComponentStyles[34]);
      const analyticsLocations2 = analyticsLocation(legacyClassComponentStyles[36])(
        analyticsLocations,
        analyticsLocation(legacyClassComponentStyles[37]).PREMIUM_UPSELL_ALERT,
      ).analyticsLocations;
      analyticsLocation(legacyClassComponentStyles[39])(() => {
        AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Nitro Upsell", location: analyticsLocation });
      });
      const tmp7 = analyticsLocation(legacyClassComponentStyles[36]);
      const premiumUpsellConfig = initialUpsellKey(legacyClassComponentStyles[34]).usePremiumUpsellConfig(
        initialUpsellKey,
        analyticsLocations2,
        analyticsLocation,
      );
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
        obj2.sku_id = useTier0UpsellContent ? __initData.TIER_0 : __initData.TIER_2;
        AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
      }, items1);
      const obj6 = {
        confirmColor: null,
        confirmText: null,
        renderConfirmIcon: null,
        cancelText: null,
        onClose: null,
        onConfirm: null,
        children: null,
      };
      const obj5 = initialUpsellKey(legacyClassComponentStyles[34]);
      obj6.confirmColor = initialUpsellKey(legacyClassComponentStyles[45]).ButtonColors.GREEN;
      obj6.confirmText = getNitroText;
      obj6.renderConfirmIcon = function renderConfirmIcon() {
        const obj = { source: _modDef9437, style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
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
        return state(FastImageDefault, obj);
      };
      const intl = initialUpsellKey(legacyClassComponentStyles[16]).intl;
      obj6.cancelText = intl.string(initialUpsellKey(legacyClassComponentStyles[16]).t.cpT0Cq);
      obj6.onClose = onClose;
      obj6.onConfirm = onViewAllPerks;
      const obj7 = {
        style: legacyClassComponentStyles.carousel,
        width: diff,
        pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle,
        children: null,
      };
      const tmp13 = analyticsLocation(legacyClassComponentStyles[44]);
      obj7.children = sorted.map((key) =>
        state(UpsellItem, { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth }, key.key),
      );
      let tmp12Result = closure_14(analyticsLocation(legacyClassComponentStyles[46]), obj7);
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
        const obj16 = {
          key: constants2.UPLOAD,
          image: tmp4(tmp2[47]),
          activeTitle: null,
          passiveTitle: null,
          description: null,
        };
        const intl4 = tmp(tmp2[16]).intl;
        obj16.activeTitle = intl4.string(tmp(tmp2[16]).t["1EOZqw"]);
        const intl5 = tmp(tmp2[16]).intl;
        obj16.passiveTitle = intl5.string(tmp(tmp2[16]).t.tB51W4);
        if (useTier0UpsellContent) {
          const intl3 = tmp(tmp2[16]).intl;
          const obj17 = {
            premiumPlan: tmp(tmp2[17]).getPremiumTypeDisplayName(closure_13.TIER_0),
            premiumMaxSize: null,
          };
          const tmpResult = tmp(tmp2[17]);
          obj17.premiumMaxSize = tmp(tmp2[17]).getMaxFileSizeForPremiumType(closure_13.TIER_0);
          let formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[16]).t.Z7Xb7H, obj17);
          const tmpResult5 = tmp(tmp2[17]);
        } else {
          const userMaxFileSize = tmp(tmp2[40]).getUserMaxFileSize(stateFromStores);
          const result = userMaxFileSize / tmp(tmp2[41]).BYTE_IN_KB;
          const intl2 = tmp(tmp2[16]).intl;
          const obj18 = { maxUploadStandard: null, maxUploadPremium: null };
          const tmpResult6 = tmp(tmp2[40]);
          obj18.maxUploadStandard = tmp(tmp2[41]).formatSize(result, { useKibibytes: true });
          const tmpResult7 = tmp(tmp2[41]);
          obj18.maxUploadPremium = tmp(tmp2[17]).getMaxFileSizeForPremiumType(closure_13.TIER_2);
          formatToPlainStringResult = intl2.format(tmp(tmp2[16]).t.DUT5IC, obj18);
          const tmpResult8 = tmp(tmp2[17]);
        }
        const obj19 = { item: null, alertWidth: null };
        obj16.description = formatToPlainStringResult;
        obj19.item = obj16;
        obj19.alertWidth = diff;
        tmp12Result = closure_14(closure_28, obj19);
      }
      obj6.children = tmp12Result;
      return closure_14(tmp13, obj6);
    };
let c29 = 500;
let c30 = 32;
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default tmp8;
export const PremiumUpsellItem = tmp7;
export const PremiumUpsellAlert = tmp8;
