// discord_app/components_native/premium/EntitlementGiftGroupCard.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Text from "../../design/components/Text/native/Text.tsx";
import Button from "../../design/components/Button/native/Button.native.tsx";
import GameIconDefault from "../../modules/game_detection/native/GameIcon.tsx";
import getPrice from "../../modules/slayer_storefront/SlayerStorefrontUtils.tsx";
import SlayerStorefrontItemCardDefault from "../../modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import getSubscriptionPlans from "../../utils/SubscriptionUtils.tsx";
import metadataDefault from "../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import registerAssetDefault from "../../../_runtime/12860_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/12861_registerAsset.js";
import registerAssetDefault3 from "../../../_runtime/12862_registerAsset.js";
import registerAssetDefault4 from "../../../_runtime/12863_registerAsset.js";
import registerAssetDefault5 from "../../../_runtime/12864_registerAsset.js";
import registerAssetDefault6 from "../../../_runtime/12865_registerAsset.js";
import registerAssetDefault7 from "../../../_runtime/12866_registerAsset.js";
import registerAssetDefault8 from "../../../_runtime/12867_registerAsset.js";
import registerAssetDefault9 from "../../../_runtime/12868_registerAsset.js";
import registerAssetDefault10 from "../../../_runtime/12871_registerAsset.js";
import registerAssetDefault11 from "../../../_runtime/12872_registerAsset.js";
import importAllResult from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import importDefaultResult from "../../modules/applications/ApplicationStore.tsx";
import importDefaultResult1 from "../../stores/AuthenticationStore.tsx";
import importDefaultResult2 from "../../stores/GiftCodeStore.tsx";
import importDefaultResult4 from "../../stores/game_store/SKUStore.tsx";
import GuildFeatures from "../../modules/premium/PremiumConstants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult3 from "../../stores/billing/SubscriptionPlanStore.tsx";
import importDefaultResult5 from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
let c3 = importAllResult;
({ View: c4, ActivityIndicator: c5, TouchableWithoutFeedback: closure_6 } = get_ActivityIndicator);
let error = importDefaultResult;
({ SubscriptionIntervalTypes: unpackModuleId, PremiumSubscriptionSKUs: closure_12, PremiumGiftStyles: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { giftGroupCard: { overflow: "hidden", marginTop: 8 }, giftGroupCardRefresh: null, title: null, arrow: null, subtitle: null, titleContainer: null, groupCardHeader: null, groupCardHeaderLegacy: null, rowArrow: null, giftIcon: null, generateGiftRow: null, generateGiftRowLegacy: null, generateGiftRowText: null, generateGiftButton: null, loading: null, generateButtonContainer: null, groupCardHeaderOpen: null, groupCardHeaderOpenRefresh: null, subtitleContainer: null, socialLayerSubtitleContainer: null };
createCacheKey = { borderWidth: 1, borderColor: ThemesDefault.colors.CARD_BORDER_DEFAULT, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { color: ThemesDefault.colors.ICON_SUBTLE };
createCacheKey[4] = { fontSize: 14, lineHeight: 18 };
createCacheKey[5] = { marginLeft: 8, flex: 1 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 };
let obj2 = { color: ThemesDefault.colors.ICON_SUBTLE };
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[8] = { height: 8, width: 12, marginRight: 8 };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[9] = { borderRadius: ThemesDefault.radii.xs };
createCacheKey[10] = { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj4 = { borderRadius: ThemesDefault.radii.xs };
createCacheKey[11] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[12] = { flexShrink: 1 };
createCacheKey[13] = { marginLeft: 12 };
createCacheKey[14] = { marginTop: 8 };
createCacheKey[15] = { flexGrow: 1, flexShrink: 0 };
let obj5 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[16] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let obj6 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[17] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[18] = { flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[19] = { marginTop: 2 };
let closure_16 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const Component = importAllResult.Component;
class EntitlementGiftGroupCard extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._mountedAt = null;
    applyArgumentsResult.state = { isOpen: false };
    applyArgumentsResult.handleToggleOpen = function handleToggleOpen() {
      const props = applyArgumentsResult.props;
      let tmp2 = null != props.loadedAt;
      ({ skuId, subscriptionPlanId } = props);
      if (tmp2) {
        tmp2 = null != obj._mountedAt;
      }
      if (!tmp2) {
        tmp2 = !tmp;
      }
      if (!tmp2) {
        const userGiftCodesForSKU = closure_1_1(closure_1_2[13]).fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
        const obj2 = closure_1_1(closure_1_2[13]);
      }
      applyArgumentsResult.setState({ isOpen: !applyArgumentsResult.state.isOpen });
    };
    applyArgumentsResult.handleGenerateGiftCode = function handleGenerateGiftCode() {
      ({ skuId, subscriptionPlanId, giftStyle } = applyArgumentsResult.props);
      const giftCode = closure_1_1(closure_1_2[13]).createGiftCode(skuId, subscriptionPlanId, giftStyle);
    };
    return applyArgumentsResult;
  }
}
const prototype = EntitlementGiftGroupCard.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._mountedAt = Date.now();
};
prototype["renderGenerateGiftCodeRow"] = function renderGenerateGiftCodeRow() {
  const tmp = callback2(this.context);
  const items = [tmp.generateGiftRow, ];
  let prop = null;
  if (!this.props.isRefreshEnabled) {
    prop = tmp.generateGiftRowLegacy;
  }
  let obj = { style: items, children: null };
  items[1] = prop;
  obj = { variant: "text-xs/medium", color: "text-subtle", style: tmp.generateGiftRowText, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.lELyPj);
  const items1 = [callback(Text.Text, obj), ];
  obj = { style: tmp.generateButtonContainer, children: null };
  obj1 = { style: tmp.generateGiftButton, children: null };
  const obj2 = { text: null, size: "sm", onPress: null };
  const intl2 = getSystemLocale.intl;
  obj2[0] = intl2.string(getSystemLocale.t["w4+/BA"]);
  obj2[2] = this.handleGenerateGiftCode;
  obj1[1] = callback(Button.Button, obj2);
  obj[1] = callback(closure_4, obj1);
  items1[1] = callback(closure_4, obj);
  obj[1] = items1;
  return closure_15(closure_4, obj);
};
prototype["renderHeader"] = function renderHeader(arg0, children) {
  const tmp = callback2(this.context);
  const isOpen = this.state.isOpen;
  ({ entitlements, application, sku, isRefreshEnabled } = this.props);
  let obj = dependencyMap;
  obj1 = getPrice;
  let isGameItemSKUResult = obj1.isGameItemSKU(sku);
  if (isGameItemSKUResult) {
    isGameItemSKUResult = null != application;
  }
  obj = { accessibilityRole: "button", onPress: this.handleToggleOpen, children: null };
  const items = [tmp.groupCardHeader, , ];
  let prop = null;
  if (!isRefreshEnabled) {
    prop = tmp.groupCardHeaderLegacy;
  }
  items[1] = prop;
  let tmp11 = null;
  if (isOpen) {
    tmp11 = tmp5;
  }
  obj = { style: items, children: null };
  items[2] = tmp11;
  if (isGameItemSKUResult) {
    obj1 = { sku: null, size: null, containerStyle: null };
    obj1[0] = sku;
    const tmp15 = SlayerStorefrontItemCardDefault;
    obj1[1] = tmp2(1297).getIconSize(tmp2(1297).Icon.Sizes.LARGE);
    obj1[2] = tmp.giftIcon;
    let tmp6Result = tmp6(tmp15, obj1);
    const tmp2Result = tmp2(1297);
  } else {
    tmp6Result = null;
    if (null != arg0) {
      const obj2 = { resizeMode: "contain", source: null, disableColor: true, size: null, style: null };
      obj2[1] = arg0;
      obj2[3] = tmp2(1297).Icon.Sizes.LARGE;
      obj2[4] = tmp.giftIcon;
      tmp6Result = tmp6(tmp2(1297).Icon, obj2);
    }
  }
  const items1 = [tmp6Result, , ];
  const obj3 = { style: tmp.titleContainer, children: null };
  const items2 = [closure_14(Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children }), ];
  let socialLayerSubtitleContainer = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    socialLayerSubtitleContainer = tmp.socialLayerSubtitleContainer;
  }
  const obj5 = { style: items3, children: null };
  items3 = [socialLayerSubtitleContainer, tmp.subtitleContainer];
  tmp6Result = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    const obj6 = { game: null, size: null, skuId: null };
    obj6[0] = application;
    obj6[1] = GameIconDefault.Sizes.SIZE_24;
    obj6[2] = sku.id;
    tmp6Result = tmp6(GameIconDefault, obj6);
    const tmp18 = GameIconDefault;
  }
  const items4 = [tmp6Result, ];
  const obj7 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, children: null };
  const intl = tmp2(1236).intl;
  const format = intl.format;
  const t = tmp2(1236).t;
  if (isGameItemSKUResult) {
    const obj8 = { applicationName: null, copies: null };
    obj8[0] = application.name;
    obj8[1] = entitlements.length;
    let formatResult = format(t["6plpZi"], obj8);
  } else {
    const obj9 = { copies: null };
    obj9[0] = entitlements.length;
    formatResult = format(t.zMcvcA, obj9);
  }
  obj7[3] = formatResult;
  items4[1] = closure_14(Text.Text, obj7);
  obj5[1] = items4;
  items2[1] = closure_15(closure_4, obj5);
  obj3[1] = items2;
  items1[1] = closure_15(closure_4, obj3);
  if (isRefreshEnabled) {
    if (isOpen) {
      let ChevronSmallRightIcon = tmp2(9693).ChevronSmallDownIcon;
    } else {
      ChevronSmallRightIcon = tmp2(5950).ChevronSmallRightIcon;
    }
    obj = {};
    tmp6(ChevronSmallRightIcon, obj);
  } else {
    const obj10 = { style: null, size: null, source: null, color: null };
    obj10[0] = tmp.rowArrow;
    obj10[1] = tmp2(1297).Icon.Sizes.LARGE;
    obj10[2] = importDefault(isOpen ? 13111 : 13112);
    obj10[3] = tmp.arrow.color;
    items1[2] = tmp6(tmp2(1297).Icon, obj10);
    obj[1] = items1;
    obj[2] = tmp8(tmp9, obj);
    return tmp6(closure_6, obj);
  }
};
prototype["getCardHeaderThumbnail"] = function getCardHeaderThumbnail(id, giftStyle) {
  if (constants2.STANDARD_BOX === giftStyle) {
    return registerAssetDefault;
  } else if (tmp.CAKE === giftStyle) {
    return registerAssetDefault3;
  } else if (tmp.CHEST === giftStyle) {
    return registerAssetDefault4;
  } else if (tmp.COFFEE === giftStyle) {
    return registerAssetDefault2;
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    return registerAssetDefault5;
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    return registerAssetDefault6;
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    return registerAssetDefault7;
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    return registerAssetDefault8;
  } else if (tmp.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: null };
    obj[0] = metadataDefault;
    return obj;
  } else if (TIER_0.TIER_0 === id) {
    return registerAssetDefault9;
  } else if (tmp3.TIER_1 === id) {
    return registerAssetDefault10;
  } else {
    if (tmp3.TIER_2 !== id) {
      if (tmp3.LEGACY !== id) {
        return null;
      }
    }
    return registerAssetDefault11;
  }
};
prototype["renderCardHeader"] = function renderCardHeader(sku) {
  const self = this;
  const props = this.props;
  ({ application, subscriptionPlan } = props);
  ({ id, name } = sku);
  const cardHeaderThumbnail = this.getCardHeaderThumbnail(id, props.giftStyle);
  const values = Object.values(closure_12);
  if (values.includes(id)) {
    if (null == subscriptionPlan) {
      return null;
    } else {
      const intl = getSystemLocale.intl;
      if (subscriptionPlan.interval === constants.MONTH) {
        let Vd3Iu8 = tmp4(1236).t.rCJvqo;
      } else {
        Vd3Iu8 = tmp4(1236).t.Vd3Iu8;
      }
      const obj = { skuName: null, intervalCount: null };
      obj[0] = sku.name;
      obj[1] = subscriptionPlan.intervalCount;
      return self.renderHeader(cardHeaderThumbnail, intl.formatToPlainString(Vd3Iu8, obj));
    }
  } else {
    let renderHeaderResult = null;
    if (null != application) {
      let iconSource = application.getIconSource(32);
      if (iconSource == null) {
        iconSource = cardHeaderThumbnail;
      }
      renderHeaderResult = self.renderHeader(iconSource, name);
    }
    return renderHeaderResult;
  }
};
prototype["render"] = function render() {
  const self = this;
  let loading = callback2(this.context);
  const props = this.props;
  ({ giftCodes, sku } = props);
  const isRefreshEnabled = props.isRefreshEnabled;
  const items = [loading.giftGroupCard, ];
  let giftGroupCardRefresh = null;
  ({ entitlements, isFetching } = props);
  if (isRefreshEnabled) {
    giftGroupCardRefresh = loading.giftGroupCardRefresh;
  }
  let obj = { style: items, children: null };
  items[1] = giftGroupCardRefresh;
  const items1 = [self.renderCardHeader(sku), ];
  if (!this.state.isOpen) {
    items1[1] = null;
    obj[1] = items1;
    return tmp(tmp2, obj);
  } else {
    if (isFetching) {
      obj = { style: null };
      loading = loading.loading;
      obj[0] = loading;
      let tmpResult = tmp4(closure_5, obj);
    } else {
      let result = null;
      if (giftCodes.length < entitlements.length) {
        result = self.renderGenerateGiftCodeRow();
      }
      obj = { children: null };
      const items2 = [result, giftCodes.map((code) => closure_1_14(isRefreshEnabled(closure_1_2[37]), { giftCode: code, sku, isFirst: 0 === arg1, isRefreshEnabled }, code.code))];
      obj[0] = items2;
      tmpResult = tmp(importAllResult.Fragment, obj);
    }
    obj1 = { children: null };
    obj1[0] = tmpResult;
    closure_14(tmp2, obj1);
  }
};
EntitlementGiftGroupCard.contextType = require("ManaContext").ThemeContext;
let obj7 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
let items = [importDefaultResult1, importDefaultResult4, importDefaultResult, importDefaultResult2, importDefaultResult3];
let tmp11 = importDefaultResult5.connectStores(items, (arg0) => {
  ({ skuId, subscriptionPlanId, giftStyle: require } = arg0);
  const value = importDefaultResult4.get(skuId);
  if (null == value) {
    const _Error = Error;
    error = new Error("SKU was unavailable while rendering gift.");
    throw error;
  } else {
    let obj = { sku: null, isFetching: null, loadedAt: null, application: null, subscriptionPlan: null, giftCodes: null };
    obj[0] = value;
    obj[1] = importDefaultResult2.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId);
    obj[2] = importDefaultResult2.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId);
    obj[3] = importDefaultResult.getApplication(value.applicationId);
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      obj = getSubscriptionPlans;
      orFetchSubscriptionPlan = obj.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj[4] = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = importDefaultResult2.getForGifterSKUAndPlan(importDefaultResult1.getId(), skuId, subscriptionPlanId);
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj[5] = found.filter((giftStyle) => giftStyle.giftStyle === closure_0);
    return obj;
  }
})(EntitlementGiftGroupCard);
let result = require("set").fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default tmp11;