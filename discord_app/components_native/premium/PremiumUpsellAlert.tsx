// === Module 8190: PremiumUpsellItem ===

// Module 8190 (PremiumUpsellItem)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4139 */;
import useThemeDefault from "useTheme" /* 4413 */;
import Text from "Text" /* 4474 */;
import createCacheKey2 from "createCacheKey" /* 4478 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7202 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 8172 */;
import registerAssetDefault from "registerAsset" /* 8182 */;
import registerAssetDefault2 from "registerAsset" /* 8183 */;
import registerAssetDefault3 from "registerAsset" /* 8220 */;
import registerAssetDefault4 from "registerAsset" /* 8221 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "CHANNEL_SIDEBAR_WIDTH" /* 1303 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import { getIcons } from "items" /* 8191 */;
import GuildFeatures from "GuildFeatures" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class PremiumUpsellItem {
  constructor(arg0) {
    upsellItem = global.upsellItem;
    ({ alertWidth, imageStyle, style } = global);
    obj = require("createCacheKey");
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
    obj = { style: items, children: null };
    items = [, , ];
    items[0] = legacyClassComponentStyles.premiumUpsellContainer;
    items[1] = { width: alertWidth };
    items[2] = style;
    obj1 = { style: items1, source: upsellItem.image, resizeMode: "contain" };
    items1 = [, ];
    items1[0] = legacyClassComponentStyles.upsellImage;
    items1[1] = imageStyle;
    ({ title, description } = upsellItem);
    items2 = [, , ];
    items2[0] = jsx(Image, obj1);
    obj2 = { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items2[1] = jsx(require("Text").Text, obj2);
    obj3 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
    items2[2] = jsx(require("Text").Text, obj3);
    obj[1] = items2;
    return jsxs(View, obj);
  }
}
function GlobalEmojiUpsell(arg0) {
  ({ alertWidth, useTier0Description } = arg0);
  let obj = usePremiumTrialOffer;
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let skuId;
  if (premiumTrialOffer != null) {
    const subscriptionTrial = premiumTrialOffer.subscriptionTrial;
    if (subscriptionTrial != null) {
      skuId = subscriptionTrial.skuId;
    }
  }
  const intl = tmp(1233).intl;
  const formatResult = intl.format(getSystemLocale.t["KEn+LY"], {});
  if (null != skuId) {
    if (TIER_0.TIER_0 === skuId) {
      const intl3 = tmp(1233).intl;
      obj = { planName: null };
      let tmpResult = tmp(4139);
      obj[0] = tmpResult.getPremiumTypeDisplayName(closure_13.TIER_0);
      let formatResult1 = intl3.format(tmp(1233).t["1P7x8p"], obj);
    } else {
      formatResult1 = formatResult;
      if (tmp8.TIER_2 === skuId) {
        const intl5 = tmp(1233).intl;
        obj = { planName: null };
        tmpResult = tmp(4139);
        obj[0] = tmpResult.getPremiumTypeDisplayName(closure_13.TIER_2);
        formatResult1 = intl5.format(tmp(1233).t["1P7x8p"], obj);
      }
    }
  } else {
    formatResult1 = formatResult;
    if (useTier0Description) {
      const intl2 = tmp(1233).intl;
      obj1 = { planName: null };
      obj1[0] = tmp(4139).getPremiumTypeDisplayName(closure_13.TIER_0);
      formatResult1 = intl2.format(tmp(1233).t.kWBwlJ, obj1);
      const tmpResult1 = tmp(4139);
    }
  }
  const obj2 = { alertWidth, upsellItem: null };
  const obj3 = { image: registerAssetDefault, title: null, description: null };
  const intl4 = tmp(1233).intl;
  obj3[1] = intl4.string(getSystemLocale.t.UNtcBV);
  obj3[2] = formatResult1;
  obj2[1] = obj3;
  return callback2(PremiumUpsellItem, obj2);
}
function AnimatedEmojiUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  obj = { image: registerAssetDefault2, title: null, description: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.F6rmyq);
  const intl2 = getSystemLocale.intl;
  const format = intl2.format;
  const t = getSystemLocale.t;
  if (alertWidth.useTier0Description) {
    obj = { planName: null };
    obj[0] = getPremiumPlanItem.getPremiumTypeDisplayName(closure_13.TIER_0);
    let formatResult = format(t["1a36ee"], obj);
    const tmp4Result = getPremiumPlanItem;
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  obj[2] = formatResult;
  obj[1] = obj;
  return closure_14(PremiumUpsellItem, obj);
}
function PremiumGuildIdentityUpsell(alertWidth) {
  let obj = createCacheKey2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = closure_14;
  const tmp7 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = tmp4(8218);
  } else {
    tmp4Result = tmp4(8219);
  }
  obj = { image: tmp4Result, title: null, description: null };
  const intl = tmp(1233).intl;
  obj[1] = intl.string(getSystemLocale.t.OVN9la);
  const intl2 = tmp(1233).intl;
  obj[2] = intl2.string(getSystemLocale.t.j0dyAG);
  obj[2] = obj;
  return tmp6(tmp7, obj);
}
function CustomProfilesUpsell(alertWidth) {
  let obj = createCacheKey2;
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: obj.useLegacyClassComponentStyles(closure_17).customProfileUpsellImage, upsellItem: null };
  obj = { image: registerAssetDefault3, title: null, description: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.rTY76D);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t["2LCxoj"]);
  obj[2] = obj;
  return callback2(PremiumUpsellItem, obj);
}
function CustomAppIconsUpsell(alertWidth) {
  let iconSource = alertWidth.imageSource;
  let obj = createCacheKey2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  const arr = getIcons();
  const tmp4 = useThemeDefault();
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: null, upsellItem: null };
  const items = [legacyClassComponentStyles.customAppIconsUpsellImage, ];
  let prop;
  if (obj2.isThemeLight(tmp4)) {
    prop = legacyClassComponentStyles.customAppIconUpsellLightImage;
  }
  items[1] = prop;
  obj[1] = items;
  if (iconSource == null) {
    iconSource = arr.filter((isPremium) => isPremium.isPremium)[0].iconSource;
  }
  obj = { image: iconSource, title: null, description: null };
  const intl = tmp(1233).intl;
  obj[1] = intl.string(getSystemLocale.t["1B1Cyn"]);
  const intl2 = tmp(1233).intl;
  obj[2] = intl2.string(getSystemLocale.t.VL5TYT);
  obj[2] = obj;
  return closure_14(PremiumUpsellItem, obj);
}
function GlobalStickerUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  obj = { image: registerAssetDefault4, title: null, description: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.jn2mBl);
  const intl2 = getSystemLocale.intl;
  const format = intl2.format;
  const t = getSystemLocale.t;
  if (alertWidth.useTier0Description) {
    obj = { planName: null };
    obj[0] = getPremiumPlanItem.getPremiumTypeDisplayName(closure_13.TIER_0);
    let formatResult = format(t["8C+FZk"], obj);
    const tmp4Result = getPremiumPlanItem;
  } else {
    formatResult = format(t["0qJYHK"], {});
  }
  obj[2] = formatResult;
  obj[1] = obj;
  return closure_14(PremiumUpsellItem, obj);
}
function LongerMessageUpsell(alertWidth) {
  let obj = createCacheKey2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = useMessageMaxLengthDefault();
  const tmp7 = closure_14;
  const tmp8 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = tmp4(8222);
  } else {
    tmp4Result = tmp4(8223);
  }
  obj = { image: tmp4Result, title: null, description: null };
  const intl = tmp(1233).intl;
  obj[1] = intl.string(getSystemLocale.t["8cjmTj"]);
  const intl2 = tmp(1233).intl;
  obj[2] = intl2.formatToPlainString(getSystemLocale.t.moN9wh, { maxLength: tmp6 });
  obj[2] = obj;
  return tmp7(tmp8, obj);
}
function GuildCapUpsell(alertWidth) {
  let obj = createCacheKey2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = closure_14;
  const tmp7 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = tmp4(8224);
  } else {
    tmp4Result = tmp4(8225);
  }
  obj = { image: tmp4Result, title: null, description: null };
  const intl = tmp(1233).intl;
  obj[1] = intl.string(getSystemLocale.t["CoNXB+"]);
  const intl2 = tmp(1233).intl;
  obj[2] = intl2.format(getSystemLocale.t.mkXb2F, {});
  obj[2] = obj;
  return tmp6(tmp7, obj);
}
function UploadUpsell(arg0) {
  ({ item, alertWidth } = arg0);
  let obj = initialize;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const children = [callback2(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants.UPLOAD), ];
  let tmp6Result = null;
  if (callback(importAllResult.useState(!stateFromStores), 1)[0]) {
    obj = { start: true, end: true, label: null, subLabel: null, value: null, onValueChange: null };
    const intl = tmp(1233).intl;
    obj[2] = intl.string(tmp(1233).t.ix8XIj);
    const intl2 = tmp(1233).intl;
    obj[3] = intl2.string(tmp(1233).t["wC0+Ph"]);
    obj[4] = stateFromStores;
    obj[5] = function onValueChange(dataSavingMode) {
      let obj = callback(table[31]);
      obj = { dataSavingMode };
      const result = obj.updatedUnsyncedSettings(obj);
    };
    tmp6Result = callback2(tmp(6002).TableSwitchRow, obj);
  }
  children[1] = tmp6Result;
  return closure_15(closure_16, { children });
}
class PremiumUpsellAlert {
  constructor(arg0) {
    initialUpsellKey = global.initialUpsellKey;
    analyticsLocation = global.analyticsLocation;
    closure_2 = undefined;
    closure_3 = undefined;
    analyticsLocations = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    tmp = initialUpsellKey;
    tmp2 = closure_2;
    ({ analyticsLocations, analyticsProperties, onClose, imageSource } = global);
    obj = require("createCacheKey");
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
    closure_2 = legacyClassComponentStyles;
    tmp4 = analyticsLocation;
    size = require("useWindowDimensions")();
    diff = Math.min(0.9 * Math.min(size.width, size.height), c29) - c30;
    closure_3 = diff;
    obj2 = require("initialize");
    items = [];
    items[0] = closure_8;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    obj3 = require("usePremiumUpsellConfig");
    upsellItems = obj3.getUpsellItems();
    sorted = upsellItems.sort((key) => {
      let num = 1;
      if (key.key === initialUpsellKey) {
        num = -1;
      }
      return num;
    });
    tmp7 = require("context");
    analyticsLocations2 = tmp7(analyticsLocations, require("QUICK_SWITCHER").PREMIUM_UPSELL_ALERT).analyticsLocations;
    analyticsLocations = analyticsLocations2;
    tmp8 = require("useMountLayoutEffect")(() => {
      obj = analyticsLocation(legacyClassComponentStyles[37]);
      obj = { type: "Nitro Upsell", location: analyticsLocation };
      obj.track(closure_1_9.OPEN_MODAL, obj);
    });
    obj5 = require("usePremiumUpsellConfig");
    premiumUpsellConfig = obj5.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    obj = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
    closure_5 = obj;
    ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
    closure_6 = analyticsLocations.useRef(obj);
    effect = analyticsLocations.useEffect(() => {
      closure_6.current = obj;
    });
    items1 = [];
    items1[0] = analyticsLocations2;
    effect1 = analyticsLocations.useEffect(() => {
      ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
      obj = analyticsLocation(legacyClassComponentStyles[37]);
      obj = {};
      const merged = Object.assign(analyticsProperties);
      obj.location = analyticsLocation;
      obj.location_stack = analyticsLocations2;
      obj.sku_id = useTier0UpsellContent ? closure_1_12.TIER_0 : closure_1_12.TIER_2;
      obj.track(closure_1_9.PREMIUM_UPSELL_VIEWED, obj);
    }, items1);
    tmp12 = jsx;
    obj1 = { confirmColor: null, confirmText: null, renderConfirmIcon: null, cancelText: null, onClose: null, onConfirm: null, children: null };
    tmp13 = require("componentDidMount");
    obj1[0] = require("Button").ButtonColors.GREEN;
    obj1[1] = getNitroText;
    obj1[2] = function renderConfirmIcon() {
      obj = { source: analyticsLocation(legacyClassComponentStyles[43]), style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
      const tmp = analyticsLocation(legacyClassComponentStyles[42]);
      if (closure_1_10.GLOBAL_EMOJI !== initialUpsellKey) {
        if (tmp4.ANIMATED_EMOJI !== tmp3) {
          if (tmp4.CUSTOM_PROFILES !== tmp3) {
            if (tmp4.PREMIUM_GUILD_PROFILE !== tmp3) {
              if (tmp4.APP_ICONS !== tmp3) {
                return null;
              }
            }
          }
        }
      }
      return closure_1_14(analyticsLocation(legacyClassComponentStyles[42]), obj);
    };
    intl = require("getSystemLocale").intl;
    obj1[3] = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj1[4] = onClose;
    obj1[5] = onViewAllPerks;
    obj2 = { style: legacyClassComponentStyles.carousel, width: diff, pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle, children: null };
    tmp14 = require("render");
    obj2[3] = sorted.map((key) => closure_1_14(closure_1_18, { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth: c3 }, key.key));
    tmp12Result = jsx(tmp14, obj2);
    tmp16 = UpsellTypes;
    if (UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
      tmp29 = GlobalEmojiUpsell;
      obj3 = { alertWidth: null, useTier0Description: null };
      obj3[0] = diff;
      obj3[1] = useTier0UpsellContent;
      tmp12Result = tmp12(GlobalEmojiUpsell, obj3);
    } else if (tmp16.ANIMATED_EMOJI === initialUpsellKey) {
      tmp28 = AnimatedEmojiUpsell;
      obj4 = { alertWidth: null, useTier0Description: null };
      obj4[0] = diff;
      obj4[1] = useTier0UpsellContent;
      tmp12Result = tmp12(AnimatedEmojiUpsell, obj4);
    } else if (tmp16.GLOBAL_STICKER === initialUpsellKey) {
      tmp27 = GlobalStickerUpsell;
      obj5 = { alertWidth: null, useTier0Description: null };
      obj5[0] = diff;
      obj5[1] = useTier0UpsellContent;
      tmp12Result = tmp12(GlobalStickerUpsell, obj5);
    } else if (tmp16.CUSTOM_PROFILES === initialUpsellKey) {
      tmp26 = CustomProfilesUpsell;
      obj6 = { alertWidth: null };
      obj6[0] = diff;
      tmp12Result = tmp12(CustomProfilesUpsell, obj6);
    } else if (tmp16.APP_ICONS === initialUpsellKey) {
      tmp25 = CustomAppIconsUpsell;
      obj7 = { alertWidth: null, imageSource: null };
      obj7[0] = diff;
      obj7[1] = imageSource;
      tmp12Result = tmp12(CustomAppIconsUpsell, obj7);
    } else if (tmp16.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
      tmp24 = PremiumGuildIdentityUpsell;
      obj8 = { alertWidth: null };
      obj8[0] = diff;
      tmp12Result = tmp12(PremiumGuildIdentityUpsell, obj8);
    } else if (tmp16.LONGER_MESSAGE === initialUpsellKey) {
      tmp23 = LongerMessageUpsell;
      obj9 = { alertWidth: null };
      obj9[0] = diff;
      tmp12Result = tmp12(LongerMessageUpsell, obj9);
    } else if (tmp16.GUILD_CAP === initialUpsellKey) {
      tmp22 = GuildCapUpsell;
      obj10 = { alertWidth: null };
      obj10[0] = diff;
      tmp12Result = tmp12(GuildCapUpsell, obj10);
    } else if (tmp16.UPLOAD === initialUpsellKey) {
      obj11 = { key: null, image: null, activeTitle: null, passiveTitle: null, description: null };
      obj11[0] = tmp16.UPLOAD;
      tmp30 = UploadUpsell;
      obj11[1] = require("registerAsset");
      intl4 = require("getSystemLocale").intl;
      obj11[2] = intl4.string(require("getSystemLocale").t["1EOZqw"]);
      intl5 = require("getSystemLocale").intl;
      obj11[3] = intl5.string(require("getSystemLocale").t.tB51W4);
      if (useTier0UpsellContent) {
        intl3 = require("getSystemLocale").intl;
        obj12 = { premiumPlan: null, premiumMaxSize: null };
        tmpResult = require("getPremiumPlanItem");
        tmp21 = PremiumTypes;
        obj12[0] = tmpResult.getPremiumTypeDisplayName(PremiumTypes.TIER_0);
        tmpResult1 = require("getPremiumPlanItem");
        obj12[1] = tmpResult1.getMaxFileSizeForPremiumType(PremiumTypes.TIER_0);
        formatToPlainStringResult = intl3.formatToPlainString(require("getSystemLocale").t.Z7Xb7H, obj12);
      } else {
        tmpResult2 = require("getUserMaxFileSize");
        userMaxFileSize = tmpResult2.getUserMaxFileSize(stateFromStores);
        result = userMaxFileSize / require("formatSize").BYTE_IN_KB;
        intl2 = require("getSystemLocale").intl;
        obj13 = { maxUploadStandard: null, maxUploadPremium: null };
        tmpResult3 = require("formatSize");
        obj13[0] = tmpResult3.formatSize(result, { useKibibytes: true });
        tmpResult4 = require("getPremiumPlanItem");
        tmp19 = PremiumTypes;
        obj13[1] = tmpResult4.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
        formatToPlainStringResult = intl2.format(require("getSystemLocale").t.DUT5IC, obj13);
      }
      obj14 = { item: null, alertWidth: null };
      obj11[4] = formatToPlainStringResult;
      obj14[0] = obj11;
      obj14[1] = diff;
      tmp12Result = tmp12(tmp30, obj14);
    }
    obj1[6] = tmp12Result;
    return tmp12(tmp13, obj1);
  }
}
let c4 = importAllResult;
({ View: c5, Image: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c9, UpsellTypes: c10 } = ME);
({ PremiumSubscriptionSKUs: closure_12, PremiumTypes: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
createCacheKey = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 }, nitroWheel: { width: 32, height: 32, marginVertical: -8 }, upsellImage: { height: 80, width: 120 }, upsellTitle: { marginBottom: 8, textAlign: "center" }, premiumUpsellTitle: null, upsellDescription: null, premiumUpsellDescription: null, pageIndicatorStyle: null, largerUpsellImage: null, customProfileUpsellImage: null, loadingIndicator: null, customAppIconUpsellLightImage: null, customAppIconsUpsellImage: null };
createCacheKey = { marginVertical: ThemesDefault.space.PX_8, textAlign: "center" };
createCacheKey[6] = createCacheKey;
createCacheKey[7] = { textAlign: "center" };
createCacheKey[8] = { textAlign: "center" };
createCacheKey[9] = { marginTop: 16 };
createCacheKey[10] = { height: 154, width: 226 };
createCacheKey[11] = { width: 240, height: 194 };
createCacheKey[12] = { height: 170 };
createCacheKey[13] = { borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
let obj1 = { borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
createCacheKey[14] = { height: 80, width: 80, borderRadius: ThemesDefault.radii.lg };
let closure_17 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class UpsellItem extends PureComponent {
}
UpsellItem.prototype["render"] = function render() {
  const tmp = callback4(this.context);
  const props = this.props;
  const upsellItem = props.upsellItem;
  let passiveTitle = upsellItem.passiveTitle;
  let obj = { style: items, children: null };
  items = [tmp.upsellContainer, { width: props.alertWidth }];
  obj = { style: tmp.upsellImage, source: upsellItem.image, resizeMode: "contain" };
  ({ activeTitle, description } = upsellItem);
  const items1 = [callback2(closure_6, obj), , ];
  obj = { style: tmp.upsellTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  if (props.isInitial) {
    passiveTitle = activeTitle;
  }
  obj[3] = passiveTitle;
  items1[1] = callback2(Text.Text, obj);
  items1[2] = callback2(Text.Text, { style: tmp.upsellDescription, variant: "text-sm/medium", children: description });
  obj[1] = items1;
  return closure_15(closure_5, obj);
};
UpsellItem.contextType = require("ManaContext").ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let c29 = 500;
let c30 = 32;
let obj2 = { height: 80, width: 80, borderRadius: ThemesDefault.radii.lg };
let result = require("set").fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default PremiumUpsellAlert;
export { PremiumUpsellItem };
export { PremiumUpsellAlert };