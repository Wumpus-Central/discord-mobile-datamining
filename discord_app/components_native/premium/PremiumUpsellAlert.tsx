// discord_app/components_native/premium/PremiumUpsellAlert.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import createStyles2 from "../../design/components/Styles/native/createStyles.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import UserSettingsActionCreatorsDefault from "../../actions/UserSettingsActionCreators.tsx";
import TableSwitchRow from "../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import usePremiumTrialOffer from "../../modules/premium/hooks/usePremiumTrialOffer.android.tsx";
import useMessageMaxLengthDefault from "../../modules/messages/useMessageMaxLength.tsx";
import _modDef9918 from "../../../_runtime/metro/09918__.js";
import _modDef9919 from "../../../_runtime/metro/09919__.js";
import _modDef10139 from "../../../_runtime/metro/10139__.js";
import _modDef10140 from "../../../_runtime/metro/10140__.js";
import _modDef10141 from "../../../_runtime/metro/10141__.js";
import _modDef10142 from "../../../_runtime/metro/10142__.js";
import _modDef10143 from "../../../_runtime/metro/10143__.js";
import _modDef10144 from "../../../_runtime/metro/10144__.js";
import _modDef10145 from "../../../_runtime/metro/10145__.js";
import _modDef10146 from "../../../_runtime/metro/10146__.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UnsyncedUserSettingsStore from "../../modules/user_settings/UnsyncedUserSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
class PremiumUpsellItem {
  constructor(arg0) {
    ({ alertWidth, imageStyle, style } = global);
    obj = closure_0(closure_2[9]);
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
    obj1 = { style: null, children: null };
    items = [, ,];
    items[0] = legacyClassComponentStyles.premiumUpsellContainer;
    items[1] = { width: alertWidth };
    items[2] = style;
    obj1.style = items;
    ({ image, title, description } = global.upsellItem);
    obj6 = { style: null, source: image, resizeMode: "contain" };
    items1 = [,];
    items1[0] = legacyClassComponentStyles.upsellImage;
    items1[1] = imageStyle;
    obj6.style = items1;
    items2 = [, ,];
    items2[0] = jsx(closure_1(closure_2[12]), obj6);
    obj7 = {
      style: legacyClassComponentStyles.premiumUpsellTitle,
      variant: "heading-xl/semibold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: title,
    };
    items2[1] = jsx(closure_0(closure_2[13]).Text, obj7);
    obj8 = {
      style: legacyClassComponentStyles.premiumUpsellDescription,
      variant: "text-md/medium",
      children: description,
    };
    items2[2] = jsx(closure_0(closure_2[13]).Text, obj8);
    obj1.children = items2;
    return jsxs(View, obj1);
  }
}
function GlobalEmojiUpsell(arg0) {
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
    if (TIER_0.TIER_0 === skuId) {
      const intl3 = util.intl;
      const obj2 = { planName: PremiumUtils.getPremiumTypeDisplayName(application_id.TIER_0) };
      let formatResult1 = intl3.format(util.t["1P7x8p"], obj2);
      const tmpResult = PremiumUtils;
    } else {
      formatResult1 = formatResult;
      if (tmp8.TIER_2 === skuId) {
        const intl5 = util.intl;
        const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(application_id.TIER_2) };
        formatResult1 = intl5.format(util.t["1P7x8p"], obj3);
        const tmpResult3 = PremiumUtils;
      }
    }
  } else {
    formatResult1 = formatResult;
    if (useTier0Description) {
      const intl2 = util.intl;
      const obj4 = { planName: PremiumUtils.getPremiumTypeDisplayName(application_id.TIER_0) };
      formatResult1 = intl2.format(util.t.kWBwlJ, obj4);
      const tmpResult4 = PremiumUtils;
    }
  }
  const obj5 = { alertWidth, upsellItem: null };
  const obj6 = { image: _modDef9918, title: null, description: null };
  const intl4 = util.intl;
  obj6.title = intl4.string(util.t.UNtcBV);
  obj6.description = formatResult1;
  obj5.upsellItem = obj6;
  return state(PremiumUpsellItem, obj5);
}
function AnimatedEmojiUpsell(alertWidth) {
  const obj = { alertWidth: alertWidth.alertWidth, upsellItem: null };
  const obj2 = { image: _modDef9919, title: null, description: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.F6rmyq);
  const intl2 = util.intl;
  const format = intl2.format;
  const t = util.t;
  if (alertWidth.useTier0Description) {
    const obj3 = { planName: PremiumUtils.getPremiumTypeDisplayName(application_id.TIER_0) };
    let formatResult = format(t["1a36ee"], obj3);
    const tmp4Result = PremiumUtils;
  } else {
    formatResult = format(t.JxTzzb, {});
  }
  obj2.description = formatResult;
  obj.upsellItem = obj2;
  return state(PremiumUpsellItem, obj);
}
function PremiumGuildIdentityUpsell(alertWidth) {
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = {
    alertWidth: alertWidth.alertWidth,
    imageStyle: legacyClassComponentStyles.largerUpsellImage,
    upsellItem: null,
  };
  const tmp5 = useThemeDefault();
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = _modDef10139;
  } else {
    tmp4Result = _modDef10140;
  }
  const obj4 = { image: tmp4Result, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t.OVN9la);
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t.j0dyAG);
  obj2.upsellItem = obj4;
  return state(PremiumUpsellItem, obj2);
}
function CustomProfilesUpsell(alertWidth) {
  const obj2 = {
    alertWidth: alertWidth.alertWidth,
    imageStyle: createStyles2.useLegacyClassComponentStyles(closure_16).customProfileUpsellImage,
    upsellItem: null,
  };
  const obj3 = { image: _modDef10141, title: null, description: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t.rTY76D);
  const intl2 = util.intl;
  obj3.description = intl2.string(util.t["2LCxoj"]);
  obj2.upsellItem = obj3;
  return state(PremiumUpsellItem, obj2);
}
function CustomAppIconsUpsell(alertWidth) {
  let iconSource = alertWidth.imageSource;
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const arr = getIcons();
  const tmp4 = useThemeDefault();
  const obj3 = { alertWidth: alertWidth.alertWidth, imageStyle: null, upsellItem: null };
  items = [legacyClassComponentStyles.customAppIconsUpsellImage];
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
  return state(PremiumUpsellItem, obj3);
}
function LongerMessageUpsell(alertWidth) {
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = {
    alertWidth: alertWidth.alertWidth,
    imageStyle: legacyClassComponentStyles.largerUpsellImage,
    upsellItem: null,
  };
  const tmp5 = useThemeDefault();
  const tmp6 = useMessageMaxLengthDefault();
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = _modDef10142;
  } else {
    tmp4Result = _modDef10143;
  }
  const obj4 = { image: tmp4Result, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t["8cjmTj"]);
  const intl2 = util.intl;
  obj4.description = intl2.formatToPlainString(util.t.moN9wh, { maxLength: tmp6 });
  obj2.upsellItem = obj4;
  return state(PremiumUpsellItem, obj2);
}
function GuildCapUpsell(alertWidth) {
  const legacyClassComponentStyles = createStyles2.useLegacyClassComponentStyles(closure_16);
  const obj2 = {
    alertWidth: alertWidth.alertWidth,
    imageStyle: legacyClassComponentStyles.largerUpsellImage,
    upsellItem: null,
  };
  const tmp5 = useThemeDefault();
  if (obj3.isThemeDark(tmp5)) {
    let tmp4Result = _modDef10144;
  } else {
    tmp4Result = _modDef10145;
  }
  const obj4 = { image: tmp4Result, title: null, description: null };
  const intl = util.intl;
  obj4.title = intl.string(util.t["CoNXB+"]);
  const intl2 = util.intl;
  obj4.description = intl2.format(util.t.mkXb2F, {});
  obj2.upsellItem = obj4;
  return state(PremiumUpsellItem, obj2);
}
function UploadUpsell(arg0) {
  ({ item, alertWidth } = arg0);
  items = [UnsyncedUserSettingsStore];
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
  return gesture(closure_1_15, { children });
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
    legacyClassComponentStyles = obj.useLegacyClassComponentStyles(closure_16);
    closure_2 = legacyClassComponentStyles;
    tmp4 = analyticsLocation;
    size = analyticsLocation(closure_2[33])();
    diff = Math.min(0.9 * Math.min(size.width, size.height), c27) - c28;
    closure_3 = diff;
    obj2 = initialUpsellKey(closure_2[29]);
    items = [];
    items[0] = closure_7;
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
    analyticsLocations2 = tmp7(
      analyticsLocations,
      analyticsLocation(closure_2[35]).PREMIUM_UPSELL_ALERT,
    ).analyticsLocations;
    analyticsLocations = analyticsLocations2;
    tmp8 = analyticsLocation(closure_2[36])(() => {
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: "Nitro Upsell", location: analyticsLocation });
    });
    obj5 = initialUpsellKey(closure_2[32]);
    premiumUpsellConfig = obj5.usePremiumUpsellConfig(initialUpsellKey, analyticsLocations2, analyticsLocation);
    useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
    obj1 = { analyticsLocation, analyticsProperties, useTier0UpsellContent };
    closure_5 = obj1;
    ({ getNitroText, onViewAllPerks } = premiumUpsellConfig);
    closure_6 = analyticsLocations.useRef(obj1);
    effect = analyticsLocations.useEffect(() => {
      closure_6.current = obj4;
    });
    items1 = [];
    items1[0] = analyticsLocations2;
    effect1 = analyticsLocations.useEffect(() => {
      ({ analyticsLocation, analyticsProperties, useTier0UpsellContent } = ref.current);
      const obj2 = {};
      const merged = Object.assign(analyticsProperties);
      obj2.location = analyticsLocation;
      obj2.location_stack = analyticsLocations2;
      obj2.sku_id = useTier0UpsellContent ? TIER_0.TIER_0 : TIER_0.TIER_2;
      AnalyticsUtilsDefault.track(constants.PREMIUM_UPSELL_VIEWED, obj2);
    }, items1);
    tmp12 = jsx;
    obj25 = {
      confirmColor: null,
      confirmText: null,
      renderConfirmIcon: null,
      cancelText: null,
      onClose: null,
      onConfirm: null,
      children: null,
    };
    tmp13 = analyticsLocation(closure_2[40]);
    obj25.confirmColor = initialUpsellKey(closure_2[41]).ButtonColors.GREEN;
    obj25.confirmText = getNitroText;
    obj25.renderConfirmIcon = function renderConfirmIcon() {
      const obj = { source: _modDef10146, style: legacyClassComponentStyles.nitroWheel, resizeMode: "contain" };
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
    intl = initialUpsellKey(closure_2[15]).intl;
    obj25.cancelText = intl.string(initialUpsellKey(closure_2[15]).t.cpT0Cq);
    obj25.onClose = onClose;
    obj25.onConfirm = onViewAllPerks;
    obj26 = {
      style: legacyClassComponentStyles.carousel,
      width: diff,
      pageIndicatorStyle: legacyClassComponentStyles.pageIndicatorStyle,
      children: null,
    };
    tmp14 = analyticsLocation(closure_2[43]);
    obj26.children = sorted.map((key) =>
      state(UpsellItem, { isInitial: initialUpsellKey === key.key, upsellItem: key, alertWidth }, key.key),
    );
    tmp12Result = jsx(tmp14, obj26);
    tmp16 = UpsellTypes;
    if (UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
      tmp28 = GlobalEmojiUpsell;
      obj27 = { alertWidth: null, useTier0Description: null };
      obj27.alertWidth = diff;
      obj27.useTier0Description = useTier0UpsellContent;
      tmp12Result = tmp12(GlobalEmojiUpsell, obj27);
    } else if (tmp16.ANIMATED_EMOJI === initialUpsellKey) {
      tmp27 = AnimatedEmojiUpsell;
      obj28 = { alertWidth: null, useTier0Description: null };
      obj28.alertWidth = diff;
      obj28.useTier0Description = useTier0UpsellContent;
      tmp12Result = tmp12(AnimatedEmojiUpsell, obj28);
    } else if (tmp16.CUSTOM_PROFILES === initialUpsellKey) {
      tmp26 = CustomProfilesUpsell;
      obj29 = { alertWidth: null };
      obj29.alertWidth = diff;
      tmp12Result = tmp12(CustomProfilesUpsell, obj29);
    } else if (tmp16.APP_ICONS === initialUpsellKey) {
      tmp25 = CustomAppIconsUpsell;
      obj30 = { alertWidth: null, imageSource: null };
      obj30.alertWidth = diff;
      obj30.imageSource = imageSource;
      tmp12Result = tmp12(CustomAppIconsUpsell, obj30);
    } else if (tmp16.PREMIUM_GUILD_PROFILE === initialUpsellKey) {
      tmp24 = PremiumGuildIdentityUpsell;
      obj31 = { alertWidth: null };
      obj31.alertWidth = diff;
      tmp12Result = tmp12(PremiumGuildIdentityUpsell, obj31);
    } else if (tmp16.LONGER_MESSAGE === initialUpsellKey) {
      tmp23 = LongerMessageUpsell;
      obj32 = { alertWidth: null };
      obj32.alertWidth = diff;
      tmp12Result = tmp12(LongerMessageUpsell, obj32);
    } else if (tmp16.GUILD_CAP === initialUpsellKey) {
      tmp22 = GuildCapUpsell;
      obj33 = { alertWidth: null };
      obj33.alertWidth = diff;
      tmp12Result = tmp12(GuildCapUpsell, obj33);
    } else if (tmp16.UPLOAD === initialUpsellKey) {
      obj34 = { key: null, image: null, activeTitle: null, passiveTitle: null, description: null };
      obj34.key = tmp16.UPLOAD;
      tmp29 = UploadUpsell;
      obj34.image = tmp4(tmp2[44]);
      intl4 = tmp(tmp2[15]).intl;
      obj34.activeTitle = intl4.string(tmp(tmp2[15]).t["1EOZqw"]);
      intl5 = tmp(tmp2[15]).intl;
      obj34.passiveTitle = intl5.string(tmp(tmp2[15]).t.tB51W4);
      if (useTier0UpsellContent) {
        intl3 = tmp(tmp2[15]).intl;
        obj35 = { premiumPlan: null, premiumMaxSize: null };
        tmpResult = tmp(tmp2[16]);
        tmp21 = PremiumTypes;
        obj35.premiumPlan = tmpResult.getPremiumTypeDisplayName(PremiumTypes.TIER_0);
        tmpResult1 = tmp(tmp2[16]);
        obj35.premiumMaxSize = tmpResult1.getMaxFileSizeForPremiumType(PremiumTypes.TIER_0);
        formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[15]).t.Z7Xb7H, obj35);
      } else {
        tmpResult2 = tmp(tmp2[38]);
        userMaxFileSize = tmpResult2.getUserMaxFileSize(stateFromStores);
        result = userMaxFileSize / tmp(tmp2[39]).BYTE_IN_KB;
        intl2 = tmp(tmp2[15]).intl;
        obj36 = { maxUploadStandard: null, maxUploadPremium: null };
        tmpResult3 = tmp(tmp2[39]);
        obj36.maxUploadStandard = tmpResult3.formatSize(result, { useKibibytes: true });
        tmpResult4 = tmp(tmp2[16]);
        tmp19 = PremiumTypes;
        obj36.maxUploadPremium = tmpResult4.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
        formatToPlainStringResult = intl2.format(tmp(tmp2[15]).t.DUT5IC, obj36);
      }
      obj37 = { item: null, alertWidth: null };
      obj34.description = formatToPlainStringResult;
      obj37.item = obj34;
      obj37.alertWidth = diff;
      tmp12Result = tmp12(tmp29, obj37);
    }
    obj25.children = tmp12Result;
    return tmp12(tmp13, obj25);
  }
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_8, UpsellTypes: closure_9 } = Constants);
const getIcons = fn(10111).getIcons;
const PremiumConstants = fn(1387);
({ PremiumSubscriptionSKUs: closure_11, PremiumTypes: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const createStyles = fn(5141);
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
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class UpsellItem extends PureComponent {}
UpsellItem.prototype["render"] = function render() {
  const tmp = closure_16(this.context);
  const props = this.props;
  const upsellItem = props.upsellItem;
  let passiveTitle = upsellItem.passiveTitle;
  const obj = { style: null, children: null };
  items = [tmp.upsellContainer, { width: props.alertWidth }];
  obj.style = items;
  ({ image, activeTitle, description } = upsellItem);
  const items1 = [state(FastImageDefault, { style: tmp.upsellImage, source: image, resizeMode: "contain" }), ,];
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
  return gesture(View, obj);
};
UpsellItem.contextType = fn(5207).ThemeContext;
UpsellItem.defaultProps = { isInitial: false };
let c27 = 500;
let c28 = 32;
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumUpsellAlert.tsx");

export default PremiumUpsellAlert;
export { PremiumUpsellItem };
export { PremiumUpsellAlert };
