// discord_app/components_native/premium/EntitlementGiftGroupCard.tsx
import importAllResult from "Button";
import get_ActivityIndicator from "getPrice";
import importDefaultResult from "addApplication";
import importDefaultResult1 from "fetchFingerprint";
import importDefaultResult2 from "updateGiftCode";
import importDefaultResult4 from "addSku";
import GuildFeatures from "GuildFeatures";
import jsxProd from "ChevronSmallDownIcon";
import createCacheKey from "createCacheKey";
import importDefaultResult3 from "addSubscriptionPlan";
import importDefaultResult5 from "initialize";
import { registerAsset } from "../../../_runtime/12647_registerAsset.js";
import { registerAsset } from "../../../_runtime/12648_registerAsset.js";
import { registerAsset } from "../../../_runtime/12649_registerAsset.js";
import { registerAsset } from "../../../_runtime/12650_registerAsset.js";
import { registerAsset } from "../../../_runtime/12651_registerAsset.js";
import { registerAsset } from "../../../_runtime/12652_registerAsset.js";
import { registerAsset } from "../../../_runtime/12653_registerAsset.js";
import { registerAsset } from "../../../_runtime/12654_registerAsset.js";
import { registerAsset } from "../../../_runtime/12655_registerAsset.js";
import { registerAsset } from "../../../_runtime/12658_registerAsset.js";
import { registerAsset } from "../../../_runtime/12659_registerAsset.js";
import { metadata } from "../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import { Button } from "../../design/components/Button/native/Button.native.tsx";
import { Text } from "../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
import { GameIcon } from "../../modules/game_detection/native/GameIcon.tsx";
import { SlayerStorefrontItemCard } from "../../modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import { getPrice } from "../../modules/slayer_storefront/SlayerStorefrontUtils.tsx";
import { getSubscriptionPlans } from "../../utils/SubscriptionUtils.tsx";

let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let closure_6;
let map1;
let unpackModuleId;
let require = arg1;
let c3 = importAllResult;
({ View: c4, ActivityIndicator: c5, TouchableWithoutFeedback: closure_6 } = get_ActivityIndicator);
let error = importDefaultResult;
({ SubscriptionIntervalTypes: unpackModuleId, PremiumSubscriptionSKUs: closure_12, PremiumGiftStyles: map1 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { giftGroupCard: { overflow: "hidden", marginTop: 8 }, giftGroupCardRefresh: null, title: null, arrow: null, subtitle: null, titleContainer: null, groupCardHeader: null, groupCardHeaderLegacy: null, rowArrow: null, giftIcon: null, generateGiftRow: null, generateGiftRowLegacy: null, generateGiftRowText: null, generateGiftButton: null, loading: null, generateButtonContainer: null, groupCardHeaderOpen: null, groupCardHeaderOpenRefresh: null, subtitleContainer: null, socialLayerSubtitleContainer: null };
createCacheKey = { borderWidth: 1, borderColor: require("Themes").colors.CARD_BORDER_DEFAULT, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.TABLEROW_BACKGROUND_DEFAULT };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[3] = { color: require("Themes").colors.ICON_SUBTLE };
createCacheKey[4] = { fontSize: 14, lineHeight: 18 };
createCacheKey[5] = { marginLeft: 8, flex: 1 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 };
let obj2 = { color: require("Themes").colors.ICON_SUBTLE };
createCacheKey[7] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[8] = { height: 8, width: 12, marginRight: 8 };
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[9] = { borderRadius: require("Themes").radii.xs };
createCacheKey[10] = { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj4 = { borderRadius: require("Themes").radii.xs };
createCacheKey[11] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[12] = { flexShrink: 1 };
createCacheKey[13] = { marginLeft: 12 };
createCacheKey[14] = { marginTop: 8 };
createCacheKey[15] = { flexGrow: 1, flexShrink: 0 };
let obj5 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[16] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let obj6 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey[17] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey[18] = { flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[19] = { marginTop: 2 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const Component = importAllResult.Component;
class EntitlementGiftGroupCard extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._mountedAt = null;
    applyArgumentsResult.state = { isOpen: false };
    applyArgumentsResult.handleToggleOpen = function handleToggleOpen() {
      let skuId;
      let subscriptionPlanId;
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
        const userGiftCodesForSKU = outer1_1(outer1_2[13]).fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
        const obj2 = outer1_1(outer1_2[13]);
      }
      applyArgumentsResult.setState({ isOpen: !applyArgumentsResult.state.isOpen });
    };
    applyArgumentsResult.handleGenerateGiftCode = function handleGenerateGiftCode() {
      let giftStyle;
      let skuId;
      let subscriptionPlanId;
      ({ skuId, subscriptionPlanId, giftStyle } = applyArgumentsResult.props);
      const giftCode = outer1_1(outer1_2[13]).createGiftCode(skuId, subscriptionPlanId, giftStyle);
    };
    return applyArgumentsResult;
  }
}
const prototype = EntitlementGiftGroupCard.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._mountedAt = Date.now();
};
prototype["renderGenerateGiftCodeRow"] = function renderGenerateGiftCodeRow() {
  const tmp = createCacheKey(this.context);
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
  const obj1 = { style: tmp.generateGiftButton, children: null };
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
  let application;
  let entitlements;
  let isRefreshEnabled;
  let sku;
  const tmp = createCacheKey(this.context);
  const isOpen = this.state.isOpen;
  ({ entitlements, application, sku, isRefreshEnabled } = this.props);
  let obj = dependencyMap;
  let obj1 = getPrice;
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
    const tmp15 = SlayerStorefrontItemCard;
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
    obj6[1] = GameIcon.Sizes.SIZE_24;
    obj6[2] = sku.id;
    tmp6Result = tmp6(GameIcon, obj6);
    const tmp18 = GameIcon;
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
      let ChevronSmallRightIcon = tmp2(9528).ChevronSmallDownIcon;
    } else {
      ChevronSmallRightIcon = tmp2(5818).ChevronSmallRightIcon;
    }
    obj = {};
    tmp6(ChevronSmallRightIcon, obj);
  } else {
    const obj10 = { style: null, size: null, source: null, color: null };
    obj10[0] = tmp.rowArrow;
    obj10[1] = tmp2(1297).Icon.Sizes.LARGE;
    obj10[2] = importDefault(isOpen ? 12898 : 12899);
    obj10[3] = tmp.arrow.color;
    items1[2] = tmp6(tmp2(1297).Icon, obj10);
    obj[1] = items1;
    obj[2] = tmp8(tmp9, obj);
    return tmp6(closure_6, obj);
  }
};
prototype["getCardHeaderThumbnail"] = function getCardHeaderThumbnail(id, giftStyle) {
  if (constants2.STANDARD_BOX === giftStyle) {
    return registerAsset;
  } else if (tmp.CAKE === giftStyle) {
    return registerAsset;
  } else if (tmp.CHEST === giftStyle) {
    return registerAsset;
  } else if (tmp.COFFEE === giftStyle) {
    return registerAsset;
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    return registerAsset;
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    return registerAsset;
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    return registerAsset;
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    return registerAsset;
  } else if (tmp.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: null };
    obj[0] = metadata;
    return obj;
  } else if (TIER_0.TIER_0 === id) {
    return registerAsset;
  } else if (tmp3.TIER_1 === id) {
    return registerAsset;
  } else {
    if (tmp3.TIER_2 !== id) {
      if (tmp3.LEGACY !== id) {
        return null;
      }
    }
    return registerAsset;
  }
};
prototype["renderCardHeader"] = function renderCardHeader(sku) {
  let application;
  let id;
  let name;
  let subscriptionPlan;
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
  let entitlements;
  let giftCodes;
  let isFetching;
  let sku;
  const self = this;
  let loading = createCacheKey(this.context);
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
      const items2 = [result, giftCodes.map((code) => outer1_14(isRefreshEnabled(outer1_2[37]), { giftCode: code, sku, isFirst: 0 === arg1, isRefreshEnabled }, code.code))];
      obj[0] = items2;
      tmpResult = tmp(importAllResult.Fragment, obj);
    }
    const obj1 = { children: null };
    obj1[0] = tmpResult;
    closure_14(tmp2, obj1);
  }
};
EntitlementGiftGroupCard.contextType = require("ManaContext").ThemeContext;
let obj7 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
let items = [importDefaultResult1, importDefaultResult4, importDefaultResult, importDefaultResult2, importDefaultResult3];
let tmp11 = require("initialize").connectStores(items, (arg0) => {
  let require;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId, giftStyle: require } = arg0);
  const value = importDefaultResult4.get(skuId);
  if (null == value) {
    const _Error = Error;
    const error = new Error("SKU was unavailable while rendering gift.");
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
let result = require("addApplication").fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default tmp11;