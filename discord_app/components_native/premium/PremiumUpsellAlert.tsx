// === Module 9322: PremiumUpsellAlert ===

// Module 9322 (PremiumUpsellAlert)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import useThemeDefault from "useTheme" /* 4495 */;
import Text_Text from "Text/Text" /* 4556 */;
import createStyles2 from "createStyles" /* 4560 */;
import FastImageDefault from "FastImage" /* 5587 */;
import usePremiumTrialOffer from "usePremiumTrialOffer" /* 7447 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9304 */;
import _modDef9314 from "module_9314" /* 9314 */;
import _modDef9315 from "module_9315" /* 9315 */;
import _modDef9352 from "module_9352" /* 9352 */;
import _modDef9353 from "module_9353" /* 9353 */;
import UserSettingsActionCreatorsDefault from "UserSettingsActionCreators" /* 9358 */;
import _modDef9360 from "module_9360" /* 9360 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1185 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
class PremiumUpsellItem {
  constructor(arg0) {
    upsellItem = global.upsellItem;
    ({ alertWidth, imageStyle, style } = global);
    obj = closure_0(closure_2[9]);
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
    obj = { style: null, children: null };
    items = [, , ];
    items[0] = legacyClassComponentStyles.premiumUpsellContainer;
    items[1] = { width: alertWidth };
    items[2] = style;
    obj.style = items;
    obj1 = { style: null, source: upsellItem.image, resizeMode: "contain" };
    items1 = [, ];
    items1[0] = legacyClassComponentStyles.upsellImage;
    items1[1] = imageStyle;
    obj1.style = items1;
    ({ title, description } = upsellItem);
    items2 = [, , ];
    items2[0] = jsx(Image, obj1);
    obj2 = { style: legacyClassComponentStyles.premiumUpsellTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items2[1] = jsx(closure_0(closure_2[12]).Text, obj2);
    obj3 = { style: legacyClassComponentStyles.premiumUpsellDescription, variant: "text-md/medium", children: description };
    items2[2] = jsx(closure_0(closure_2[12]).Text, obj3);
    obj.children = items2;
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
  const intl = tmp(1114).intl;
  const formatResult = intl.format(util.t["KEn+LY"], {});
  if (null != skuId) {
    if (TIER_0.TIER_0 === skuId) {
      const intl3 = tmp(1114).intl;
      obj = { planName: null };
      let tmpResult = tmp(4218);
      obj.planName = tmpResult.getPremiumTypeDisplayName(map1.TIER_0);
      let formatResult1 = intl3.format(tmp(1114).t["1P7x8p"], obj);
    } else {
      formatResult1 = formatResult;
      if (tmp8.TIER_2 === skuId) {
        const intl5 = tmp(1114).intl;
        obj = { planName: null };
        tmpResult = tmp(4218);
        obj.planName = tmpResult.getPremiumTypeDisplayName(map1.TIER_2);
        formatResult1 = intl5.format(tmp(1114).t["1P7x8p"], obj);
      }
    }
  } else {
    formatResult1 = formatResult;
    if (useTier0Description) {
      const intl2 = tmp(1114).intl;
      const obj1 = { planName: tmp(4218).getPremiumTypeDisplayName(map1.TIER_0) };
      formatResult1 = intl2.format(tmp(1114).t.kWBwlJ, obj1);
      const tmpResult1 = tmp(4218);
    }
  }
  const obj2 = { alertWidth, upsellItem: null };
  const obj3 = { image: _modDef9314, title: null, description: null };
  const intl4 = tmp(1114).intl;
  obj3.title = intl4.string(util.t.UNtcBV);
  obj3.description = formatResult1;
  obj2.upsellItem = obj3;
  return closure_1_14(PremiumUpsellItem, obj2);
}
function AnimatedEmojiUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  obj = { image: _modDef9315, title: null, description: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.F6rmyq);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (alertWidth.useTier0Description) {
    obj = { planName: PremiumUtils.getPremiumTypeDisplayName(map1.TIER_0) };
    let formatResult = format(t["1a36ee"], obj);
    const tmp4Result = PremiumUtils;
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  obj.description = formatResult;
  obj.upsellItem = obj;
  return closure_1_14(PremiumUpsellItem, obj);
}
function PremiumGuildIdentityUpsell(alertWidth) {
  let obj = createStyles2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = closure_1_14;
  const tmp7 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = tmp4(9350);
  } else {
    tmp4Result = tmp4(9351);
  }
  obj = { image: tmp4Result, title: null, description: null };
  const intl = tmp(1114).intl;
  obj.title = intl.string(util.t.OVN9la);
  const intl2 = tmp(1114).intl;
  obj.description = intl2.string(util.t.j0dyAG);
  obj.upsellItem = obj;
  return tmp6(tmp7, obj);
}
function CustomProfilesUpsell(alertWidth) {
  let obj = createStyles2;
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: obj.useLegacyClassComponentStyles(closure_17).customProfileUpsellImage, upsellItem: null };
  obj = { image: _modDef9352, title: null, description: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.rTY76D);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["2LCxoj"]);
  obj.upsellItem = obj;
  return closure_1_14(PremiumUpsellItem, obj);
}
function CustomAppIconsUpsell(alertWidth) {
  let iconSource = alertWidth.imageSource;
  let obj = createStyles2;
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
  obj.imageStyle = items;
  if (iconSource == null) {
    iconSource = arr.filter((isPremium) => isPremium.isPremium)[0].iconSource;
  }
  obj = { image: iconSource, title: null, description: null };
  const intl = tmp(1114).intl;
  obj.title = intl.string(util.t["1B1Cyn"]);
  const intl2 = tmp(1114).intl;
  obj.description = intl2.string(util.t.VL5TYT);
  obj.upsellItem = obj;
  return closure_1_14(PremiumUpsellItem, obj);
}
function GlobalStickerUpsell(alertWidth) {
  let obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  obj = { image: _modDef9353, title: null, description: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.jn2mBl);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (alertWidth.useTier0Description) {
    obj = { planName: PremiumUtils.getPremiumTypeDisplayName(map1.TIER_0) };
    let formatResult = format(t["8C+FZk"], obj);
    const tmp4Result = PremiumUtils;
  } else {
    formatResult = format(t["0qJYHK"], {});
  }
  obj.description = formatResult;
  obj.upsellItem = obj;
  return closure_1_14(PremiumUpsellItem, obj);
}
function LongerMessageUpsell(alertWidth) {
  let obj = createStyles2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = useMessageMaxLengthDefault();
  const tmp7 = closure_1_14;
  const tmp8 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = tmp4(9354);
  } else {
    tmp4Result = tmp4(9355);
  }
  obj = { image: tmp4Result, title: null, description: null };
  const intl = tmp(1114).intl;
  obj.title = intl.string(util.t["8cjmTj"]);
  const intl2 = tmp(1114).intl;
  obj.description = intl2.formatToPlainString(util.t.moN9wh, { maxLength: tmp6 });
  obj.upsellItem = obj;
  return tmp7(tmp8, obj);
}
function GuildCapUpsell(alertWidth) {
  let obj = createStyles2;
  const legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
  obj = { alertWidth: alertWidth.alertWidth, imageStyle: legacyClassComponentStyles.largerUpsellImage, upsellItem: null };
  const tmp5 = useThemeDefault();
  const tmp6 = closure_1_14;
  const tmp7 = PremiumUpsellItem;
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = tmp4(9356);
  } else {
    tmp4Result = tmp4(9357);
  }
  obj = { image: tmp4Result, title: null, description: null };
  const intl = tmp(1114).intl;
  obj.title = intl.string(util.t["CoNXB+"]);
  const intl2 = tmp(1114).intl;
  obj.description = intl2.format(util.t.mkXb2F, {});
  obj.upsellItem = obj;
  return tmp6(tmp7, obj);
}
function UploadUpsell(arg0) {
  ({ item, alertWidth } = arg0);
  let obj = initialize;
  const items = [UnsyncedUserSettingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => dataSavingMode.dataSavingMode);
  const children = [closure_1_14(UpsellItem, { isInitial: true, upsellItem: item, alertWidth }, constants2.UPLOAD), ];
  let tmp6Result = null;
  if (_slicedToArray(noop.useState(!stateFromStores), 1)[0]) {
    obj = { start: true, end: true, label: null, subLabel: null, value: null, onValueChange: null };
    const intl = tmp(1114).intl;
    obj.label = intl.string(tmp(1114).t.ix8XIj);
    const intl2 = tmp(1114).intl;
    obj.subLabel = intl2.string(tmp(1114).t["wC0+Ph"]);
    obj.value = stateFromStores;
    obj.onValueChange = function onValueChange(dataSavingMode) {
      const obj = { dataSavingMode };
      const result = obj.updatedUnsyncedSettings(obj);
    };
    tmp6Result = closure_1_14(tmp(7201).TableSwitchRow, obj);
  }
  children[1] = tmp6Result;
  return __initData(value2, { children });
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
    obj = initialUpsellKey(closure_2[9]);
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_17);
    closure_2 = legacyClassComponentStyles;
    tmp4 = analyticsLocation;
    size = analyticsLocation(closure_2[33])();
    diff = Math.min(0.9 * Math.min(size.width, size.height), c29) - c30;
    closure_3 = diff;
    obj2 = initialUpsellKey(closure_2[29]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
    obj3 = initialUpsellKey(closure_2[32]);
    upsellItems = obj3.getUpsellItems();
    sorted = upsellItems.sort((key) => {
      let num = 1;
      if (key.key === initialUpsellKey) {
        num = -1;
      }
      return num;
    });
    tmp7 = analyticsLocation(closure_2[34]);
    analyticsLocations2 = tmp7(analyticsLocations, analyticsLocation(closure_2[35]).PREMIUM_UPSELL_ALERT).analyticsLocations;
    analyticsLocations = analyticsLocations2;
    tmp8 = analyticsLocation(closure_2[36])(() => {
      const obj = { type: "Nitro Upsell", location: analyticsLocation };
      obj.track(constants.OPEN_MODAL, obj);
    });
    obj5 = initialUpsellKey(closure_2[32]);
    premiumUpsellConfig = obj5.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    obj = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
    closure_5 = obj;
    ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
    closure_6 = analyticsLocations.useRef(obj);
    effect = analyticsLocations.useEffect(() => {
      closure_6.current = current;
    });
    items1 = [];
    items1[0] = analyticsLocations2;
    effect1 = analyticsLocations.useEffect(() => {
      ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
      const obj = {};
      const merged = Object.assign(analyticsProperties);
      obj.location = analyticsLocation;
      obj.location_stack = analyticsLocations2;
      obj.sku_id = useTier0UpsellContent ? TIER_0.TIER_0 : TIER_0.TIER_2;
      obj.track(constants.PREMIUM_UPSELL_VIEWED, obj);
    }, items1);
    tmp12 = jsx;
    obj1 = { confirmColor: null, confirmText: null, renderConfirmIcon: null, cancelText: null, onClose: null, onConfirm: null, children: null };
    tmp13 = analyticsLocation(closure_2[40]);
    obj1.confirmColor = initialUpsellKey(closure_2[41]).ButtonColors.GREEN;
    obj1.confirmText = getNitroText;
    obj1.renderConfirmIcon = function renderConfirmIcon() {
      const obj = { source: _modDef9360, style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
      if (constants2.GLOBAL_EMOJI !== initialUpsellKey) {
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
      return closure_2_14(FastImageDefault, obj);
    };
    intl = initialUpsellKey(closure_2[14]).intl;
    obj1.cancelText = intl.string(initialUpsellKey(closure_2[14]).t.cpT0Cq);
    obj1.onClose = onClose;
    obj1.onConfirm = onViewAllPerks;
    obj2 = { style: legacyClassComponentStyles.carousel, width: diff, pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle, children: null };
    tmp14 = analyticsLocation(closure_2[44]);
    obj2.children = sorted.map((key) => closure_2_14(UpsellItem, { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth }, key.key));
    tmp12Result = jsx(tmp14, obj2);
    tmp16 = UpsellTypes;
    if (UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
      tmp29 = GlobalEmojiUpsell;
      obj3 = { alertWidth: null, useTier0Description: null };
      obj3.alertWidth = diff;
      obj3.useTier0Description = useTier0UpsellContent;
      tmp12Result = tmp12(GlobalEmojiUpsell, obj3);
    } else if (tmp16.ANIMATED_EMOJI === initialUpsellKey) {
      tmp28 = AnimatedEmojiUpsell;
      obj4 = { alertWidth: null, useTier0Description: null };
      obj4.alertWidth = diff;
      obj4.useTier0Description = useTier0UpsellContent;
      tmp12Result = tmp12(AnimatedEmojiUpsell, obj4);
    } else if (tmp16.GLOBAL_STICKER === initialUpsellKey) {
      tmp27 = GlobalStickerUpsell;
      obj5 = { alertWidth: null, useTier0Description: null };
      obj5.alertWidth = diff;
      obj5.useTier0Description = useTier0UpsellContent;
      tmp12Result = tmp12(GlobalStickerUpsell, obj5);
    } else if (tmp16.CUSTOM_PROFILES === initialUpsellKey) {
      tmp26 = CustomProfilesUpsell;
      obj6 = { alertWidth: null };
      obj6.alertWidth = diff;
      tmp12Result = tmp12(CustomProfilesUpsell, obj6);
    } else if (tmp16.APP_ICONS === initialUpsellKey) {
      tmp25 = CustomAppIconsUpsell;
      obj7 = { alertWidth: null, imageSource: null };
      obj7.alertWidth = diff;
      obj7.imageSource = imageSource;
      tmp12Result = tmp12(CustomAppIconsUpsell, obj7);
    } else if (tmp16.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
      tmp24 = PremiumGuildIdentityUpsell;
      obj8 = { alertWidth: null };
      obj8.alertWidth = diff;
      tmp12Result = tmp12(PremiumGuildIdentityUpsell, obj8);
    } else if (tmp16.LONGER_MESSAGE === initialUpsellKey) {
      tmp23 = LongerMessageUpsell;
      obj9 = { alertWidth: null };
      obj9.alertWidth = diff;
      tmp12Result = tmp12(LongerMessageUpsell, obj9);
    } else if (tmp16.GUILD_CAP === initialUpsellKey) {
      tmp22 = GuildCapUpsell;
      obj10 = { alertWidth: null };
      obj10.alertWidth = diff;
      tmp12Result = tmp12(GuildCapUpsell, obj10);
    } else if (tmp16.UPLOAD === initialUpsellKey) {
      obj11 = { key: null, image: null, activeTitle: null, passiveTitle: null, description: null };
      obj11.key = tmp16.UPLOAD;
      tmp30 = UploadUpsell;
      obj11.image = tmp4(tmp2[45]);
      intl4 = tmp(tmp2[14]).intl;
      obj11.activeTitle = intl4.string(tmp(tmp2[14]).t["1EOZqw"]);
      intl5 = tmp(tmp2[14]).intl;
      obj11.passiveTitle = intl5.string(tmp(tmp2[14]).t.tB51W4);
      if (useTier0UpsellContent) {
        intl3 = tmp(tmp2[14]).intl;
        obj12 = { premiumPlan: null, premiumMaxSize: null };
        tmpResult = tmp(tmp2[15]);
        tmp21 = PremiumTypes;
        obj12.premiumPlan = tmpResult.getPremiumTypeDisplayName(PremiumTypes.TIER_0);
        tmpResult1 = tmp(tmp2[15]);
        obj12.premiumMaxSize = tmpResult1.getMaxFileSizeForPremiumType(PremiumTypes.TIER_0);
        formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[14]).t.Z7Xb7H, obj12);
      } else {
        tmpResult2 = tmp(tmp2[38]);
        userMaxFileSize = tmpResult2.getUserMaxFileSize(stateFromStores);
        result = userMaxFileSize / tmp(tmp2[39]).BYTE_IN_KB;
        intl2 = tmp(tmp2[14]).intl;
        obj13 = { maxUploadStandard: null, maxUploadPremium: null };
        tmpResult3 = tmp(tmp2[39]);
        obj13.maxUploadStandard = tmpResult3.formatSize(result, { useKibibytes: true });
        tmpResult4 = tmp(tmp2[15]);
        tmp19 = PremiumTypes;
        obj13.maxUploadPremium = tmpResult4.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
        formatToPlainStringResult = intl2.format(tmp(tmp2[14]).t.DUT5IC, obj13);
      }
      obj14 = { item: null, alertWidth: null };
      obj11.description = formatToPlainStringResult;
      obj14.item = obj11;
      obj14.alertWidth = diff;
      tmp12Result = tmp12(tmp30, obj14);
    }
    obj1.children = tmp12Result;
    return tmp12(tmp13, obj1);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, UpsellTypes: c10 } = Constants);
const getIcons = fn(9323).getIcons;
const PremiumConstants = fn(1373);
({ PremiumSubscriptionSKUs: closure_12, PremiumTypes: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
fn(4560);
let createStyles = { carousel: { alignItems: "center" }, upsellContainer: { alignItems: "center" }, premiumUpsellContainer: { alignItems: "center", paddingHorizontal: 8 }, nitroWheel: { width: 32, height: 32, marginVertical: -8 }, upsellImage: { height: 80, width: 120 }, upsellTitle: { marginBottom: 8, textAlign: "center" }, premiumUpsellTitle: null, upsellDescription: null, premiumUpsellDescription: null, pageIndicatorStyle: null, largerUpsellImage: null, customProfileUpsellImage: null, loadingIndicator: null, customAppIconUpsellLightImage: null, customAppIconsUpsellImage: null };
createStyles = { marginVertical: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.premiumUpsellTitle = createStyles;
createStyles.upsellDescription = { textAlign: "center" };
createStyles.premiumUpsellDescription = { textAlign: "center" };
createStyles.pageIndicatorStyle = { marginTop: 16 };
createStyles.largerUpsellImage = { height: 154, width: 226 };
createStyles.customProfileUpsellImage = { width: 240, height: 194 };
createStyles.loadingIndicator = { height: 170 };
createStyles.customAppIconUpsellLightImage = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 2 };
let size = { height: 80, width: 80, borderRadius: nativeDefault.radii.lg };
createStyles.customAppIconsUpsellImage = size;
let closure_17 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class UpsellItem extends PureComponent {
}
UpsellItem.prototype["render"] = function render() {
  const tmp = closure_17(this.context);
  const props = this.props;
  const upsellItem = props.upsellItem;
  let passiveTitle = upsellItem.passiveTitle;
  let obj = { style: null, children: null };
  const items = [tmp.upsellContainer, { width: props.alertWidth }];
  obj.style = items;
  obj = { style: tmp.upsellImage, source: upsellItem.image, resizeMode: "contain" };
  ({ activeTitle, description } = upsellItem);
  const items1 = [closure_1_14(timestampProducer, obj), , ];
  obj = { style: tmp.upsellTitle, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
  if (props.isInitial) {
    passiveTitle = activeTitle;
  }
  obj.children = passiveTitle;
  items1[1] = closure_1_14(Text_Text.Text, obj);
  items1[2] = closure_1_14(Text_Text.Text, { style: tmp.upsellDescription, variant: "text-sm/medium", children: description });
  obj.children = items1;
  return __initData(hasOwnProperty, obj);
};
UpsellItem.contextType = fn(4271).ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let c29 = 500;
let c30 = 32;
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default PremiumUpsellAlert;
export { PremiumUpsellItem };
export { PremiumUpsellAlert };