// === Module 13615: EntitlementGiftGroupCard ===

// Module 13615 (EntitlementGiftGroupCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4602 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import GameIconDefault from "GameIcon" /* 7245 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 7282 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7299 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8917 */;
import _modDef11117 from "module_11117" /* 11117 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11248 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11524 */;
import SubscriptionUtils from "SubscriptionUtils" /* 11535 */;
import _modDef13290 from "module_13290" /* 13290 */;
import _modDef13291 from "module_13291" /* 13291 */;
import _modDef13292 from "module_13292" /* 13292 */;
import _modDef13293 from "module_13293" /* 13293 */;
import _modDef13294 from "module_13294" /* 13294 */;
import _modDef13295 from "module_13295" /* 13295 */;
import _modDef13296 from "module_13296" /* 13296 */;
import _modDef13297 from "module_13297" /* 13297 */;
import _modDef13298 from "module_13298" /* 13298 */;
import _modDef13301 from "module_13301" /* 13301 */;
import _modDef13302 from "module_13302" /* 13302 */;
import GiftCodeRowDefault from "GiftCodeRow" /* 13616 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4834 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11523 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4269 */;
import SKUStore from "SKUStore" /* 5561 */;
import initialize from "initialize" /* 504 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = get_ActivityIndicator);
const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes: closure_11, PremiumSubscriptionSKUs: closure_12, PremiumGiftStyles: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4606);
let createStyles = { giftGroupCard: { overflow: "hidden", marginTop: 8 }, giftGroupCardRefresh: null, title: null, arrow: null, subtitle: null, titleContainer: null, groupCardHeader: null, groupCardHeaderLegacy: null, rowArrow: null, giftIcon: null, generateGiftRow: null, generateGiftRowLegacy: null, generateGiftRowText: null, generateGiftButton: null, loading: null, generateButtonContainer: null, groupCardHeaderOpen: null, groupCardHeaderOpenRefresh: null, subtitleContainer: null, socialLayerSubtitleContainer: null };
createStyles = { borderWidth: 1, borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
createStyles.giftGroupCardRefresh = createStyles;
createStyles.title = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.arrow = { color: nativeDefault.colors.ICON_SUBTLE };
createStyles.subtitle = { fontSize: 14, lineHeight: 18 };
createStyles.titleContainer = { marginLeft: 8, flex: 1 };
createStyles.groupCardHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 };
let obj2 = { color: nativeDefault.colors.ICON_SUBTLE };
createStyles.groupCardHeaderLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.rowArrow = { height: 8, width: 12, marginRight: 8 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.giftIcon = { borderRadius: nativeDefault.radii.xs };
createStyles.generateGiftRow = { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj4 = { borderRadius: nativeDefault.radii.xs };
createStyles.generateGiftRowLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.generateGiftRowText = { flexShrink: 1 };
createStyles.generateGiftButton = { marginLeft: 12 };
createStyles.loading = { marginTop: 8 };
createStyles.generateButtonContainer = { flexGrow: 1, flexShrink: 0 };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.groupCardHeaderOpen = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.groupCardHeaderOpenRefresh = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.subtitleContainer = { flexDirection: "row", alignItems: "center", gap: 4 };
createStyles.socialLayerSubtitleContainer = { marginTop: 2 };
let closure_16 = createStyles.createLegacyClassComponentStyles(createStyles);
const Component = noop.Component;
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
        tmp2 = null != applyArgumentsResult._mountedAt;
      }
      if (!tmp2) {
        tmp2 = !tmp;
      }
      if (!tmp2) {
        const userGiftCodesForSKU = GiftCodeActionCreatorsDefault.fetchUserGiftCodesForSKU(skuId, subscriptionPlanId);
      }
      applyArgumentsResult.setState({ isOpen: !applyArgumentsResult.state.isOpen });
    };
    applyArgumentsResult.handleGenerateGiftCode = function handleGenerateGiftCode() {
      ({ skuId, subscriptionPlanId, giftStyle } = applyArgumentsResult.props);
      const giftCode = GiftCodeActionCreatorsDefault.createGiftCode(skuId, subscriptionPlanId, giftStyle);
    };
    return applyArgumentsResult;
  }
}
const prototype = EntitlementGiftGroupCard.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._mountedAt = Date.now();
};
prototype["renderGenerateGiftCodeRow"] = function renderGenerateGiftCodeRow() {
  const tmp = closure_16(this.context);
  let obj = { style: tmp.generateGiftRow, children: null };
  obj = { variant: "text-xs/medium", color: "text-subtle", style: tmp.generateGiftRowText, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.lELyPj);
  const items = [closure_1_14(Text_Text.Text, obj), ];
  obj = { style: tmp.generateButtonContainer, children: null };
  const obj1 = { style: tmp.generateGiftButton, children: null };
  const obj2 = { text: null, size: "sm", onPress: null };
  const intl2 = util.intl;
  obj2.text = intl2.string(util.t["w4+/BA"]);
  obj2.onPress = this.handleGenerateGiftCode;
  obj1.children = closure_1_14(components_Button_Button.Button, obj2);
  obj.children = closure_1_14(React4, obj1);
  items[1] = closure_1_14(React4, obj);
  obj.children = items;
  return __initData(React4, obj);
};
prototype["renderHeader"] = function renderHeader(source, children) {
  const tmp = closure_16(this.context);
  const isOpen = this.state.isOpen;
  ({ entitlements, application, sku } = this.props);
  let obj = SlayerStorefrontUtils;
  let isGameItemSKUResult = obj.isGameItemSKU(sku);
  if (isGameItemSKUResult) {
    isGameItemSKUResult = null != application;
  }
  obj = { accessibilityRole: "button", accessibilityState: { expanded: isOpen }, onPress: this.handleToggleOpen, children: null };
  const items = [tmp.groupCardHeader, ];
  let prop = null;
  if (isOpen) {
    prop = tmp.groupCardHeaderOpenRefresh;
  }
  obj = { style: items, children: null };
  items[1] = prop;
  if (isGameItemSKUResult) {
    const obj1 = { sku, size: null, containerStyle: null };
    const tmp14 = SlayerStorefrontItemCardDefault;
    obj1.size = native.getIconSize(native.Icon.Sizes.LARGE);
    obj1.containerStyle = tmp.giftIcon;
    let tmp6Result = closure_1_14(tmp14, obj1);
    const tmp2Result = native;
  } else {
    tmp6Result = null;
    if (null != source) {
      const obj2 = { resizeMode: "contain", source, disableColor: true, size: native.Icon.Sizes.LARGE, style: tmp.giftIcon };
      tmp6Result = closure_1_14(native.Icon, obj2);
    }
  }
  const items1 = [tmp6Result, , ];
  const obj3 = { style: tmp.titleContainer, children: null };
  const items2 = [closure_1_14(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children }), ];
  let socialLayerSubtitleContainer = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    socialLayerSubtitleContainer = tmp.socialLayerSubtitleContainer;
  }
  const obj5 = { style: null, children: null };
  const items3 = [socialLayerSubtitleContainer, tmp.subtitleContainer];
  obj5.style = items3;
  tmp6Result = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    const obj6 = { game: application, size: GameIconDefault.Sizes.SIZE_24, skuId: sku.id };
    tmp6Result = closure_1_14(GameIconDefault, obj6);
  }
  const items4 = [tmp6Result, ];
  const obj7 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, children: null };
  const intl = util.intl;
  const format = intl.format;
  const t = util.t;
  if (isGameItemSKUResult) {
    const obj8 = { applicationName: application.name, copies: entitlements.length };
    let formatResult = format(t["6plpZi"], obj8);
  } else {
    const obj9 = { copies: entitlements.length };
    formatResult = format(t.zMcvcA, obj9);
  }
  obj7.children = formatResult;
  items4[1] = closure_1_14(Text_Text.Text, obj7);
  obj5.children = items4;
  items2[1] = __initData(React4, obj5);
  obj3.children = items2;
  items1[1] = __initData(React4, obj3);
  if (isOpen) {
    let ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
  }
  items1[2] = closure_1_14(ChevronSmallRightIcon, {});
  obj.children = items1;
  obj.children = __initData(React4, obj);
  return closure_1_14(timestampProducer, obj);
};
prototype["getCardHeaderThumbnail"] = function getCardHeaderThumbnail(id, giftStyle) {
  if (constants2.STANDARD_BOX === giftStyle) {
    return _modDef13290;
  } else if (constants2.CAKE === giftStyle) {
    return _modDef13292;
  } else if (constants2.CHEST === giftStyle) {
    return _modDef13293;
  } else if (constants2.COFFEE === giftStyle) {
    return _modDef13291;
  } else if (constants2.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13294;
  } else if (constants2.SEASONAL_CAKE === giftStyle) {
    return _modDef13295;
  } else if (constants2.SEASONAL_CHEST === giftStyle) {
    return _modDef13296;
  } else if (constants2.SEASONAL_COFFEE === giftStyle) {
    return _modDef13297;
  } else if (constants2.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11117 };
    return obj;
  } else if (TIER_0.TIER_0 === id) {
    return _modDef13298;
  } else if (TIER_0.TIER_1 === id) {
    return _modDef13301;
  } else {
    if (TIER_0.TIER_2 !== id) {
      if (TIER_0.LEGACY !== id) {
        return null;
      }
    }
    return _modDef13302;
  }
};
prototype["renderCardHeader"] = function renderCardHeader(sku) {
  const self = this;
  const props = this.props;
  ({ application, subscriptionPlan } = props);
  ({ id, name } = sku);
  const cardHeaderThumbnail = this.getCardHeaderThumbnail(id, props.giftStyle);
  const values = Object.values(TIER_0);
  if (values.includes(id)) {
    if (null == subscriptionPlan) {
      return null;
    } else {
      const intl = util.intl;
      if (subscriptionPlan.interval === constants.MONTH) {
        let Vd3Iu8 = util.t.rCJvqo;
      } else {
        Vd3Iu8 = util.t.Vd3Iu8;
      }
      const obj = { skuName: sku.name, intervalCount: subscriptionPlan.intervalCount };
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
  let loading = closure_16(this.context);
  const props = this.props;
  ({ giftCodes, sku } = props);
  let obj = { style: null, children: null };
  const items = [, ];
  ({ giftGroupCard: arr[0], giftGroupCardRefresh: arr[1] } = loading);
  obj.style = items;
  ({ entitlements, isFetching } = props);
  const items1 = [this.renderCardHeader(sku), ];
  if (!this.state.isOpen) {
    items1[1] = null;
    obj.children = items1;
    return closure_15(closure_4, obj);
  } else {
    if (isFetching) {
      obj = { style: null };
      loading = loading.loading;
      obj.style = loading;
      let tmpResult = closure_14(closure_5, obj);
    } else {
      let result = null;
      if (giftCodes.length < entitlements.length) {
        result = self.renderGenerateGiftCodeRow();
      }
      obj = { children: null };
      const items2 = [result, giftCodes.map((giftCode, index) => closure_2_14(GiftCodeRowDefault, { giftCode, sku, isFirst: 0 === index }, giftCode.code))];
      obj.children = items2;
      tmpResult = closure_15(noop.Fragment, obj);
    }
    const obj1 = { children: tmpResult };
    closure_14(closure_4, obj1);
  }
};
EntitlementGiftGroupCard.contextType = fn(4317).ThemeContext;
let items = [AuthenticationStore, SKUStore, ApplicationStore, GiftCodeStore, SubscriptionPlanStore];
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/EntitlementGiftGroupCard.tsx");

export default initialize.connectStores(items, (arg0) => {
  ({ skuId, subscriptionPlanId, giftStyle: require } = arg0);
  value = SKUStore.get(skuId);
  if (null == value) {
    const _Error = Error;
    const error = new Error("SKU was unavailable while rendering gift.");
    throw error;
  } else {
    let obj = { sku: value, isFetching: GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId), loadedAt: GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId), application: ApplicationStore.getApplication(value.applicationId), subscriptionPlan: null, giftCodes: null };
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      obj = SubscriptionUtils;
      orFetchSubscriptionPlan = obj.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj.subscriptionPlan = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = GiftCodeStore.getForGifterSKUAndPlan(AuthenticationStore.getId(), skuId, subscriptionPlanId);
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj.giftCodes = found.filter((giftStyle) => giftStyle.giftStyle === require);
    return obj;
  }
})(EntitlementGiftGroupCard);