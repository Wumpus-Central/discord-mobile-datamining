// === Module 13835: EntitlementGiftGroupCard ===

// Module 13835 (EntitlementGiftGroupCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4753 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import GameIconDefault from "GameIcon" /* 7419 */;
import ChevronSmallRightIcon2 from "ChevronSmallRightIcon" /* 7456 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7473 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9111 */;
import _modDef11297 from "module_11297" /* 11297 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11424 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11697 */;
import SubscriptionUtils from "SubscriptionUtils" /* 11708 */;
import _modDef13505 from "module_13505" /* 13505 */;
import _modDef13506 from "module_13506" /* 13506 */;
import _modDef13507 from "module_13507" /* 13507 */;
import _modDef13508 from "module_13508" /* 13508 */;
import _modDef13509 from "module_13509" /* 13509 */;
import _modDef13510 from "module_13510" /* 13510 */;
import _modDef13511 from "module_13511" /* 13511 */;
import _modDef13512 from "module_13512" /* 13512 */;
import _modDef13513 from "module_13513" /* 13513 */;
import _modDef13516 from "module_13516" /* 13516 */;
import _modDef13517 from "module_13517" /* 13517 */;
import GiftCodeRowDefault from "GiftCodeRow" /* 13836 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11696 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4420 */;
import SKUStore from "SKUStore" /* 5729 */;
import initialize from "initialize" /* 504 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, TouchableWithoutFeedback: metroRequire } = get_ActivityIndicator);
const PremiumConstants = fn(1374);
({ SubscriptionIntervalTypes: closure_11, PremiumSubscriptionSKUs: closure_12, PremiumGiftStyles: map1 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { giftGroupCard: { overflow: "hidden", marginTop: 8 }, giftGroupCardRefresh: { borderWidth: 1, borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT }, title: null, arrow: null, subtitle: null, titleContainer: null, groupCardHeader: null, groupCardHeaderLegacy: null, rowArrow: null, giftIcon: null, generateGiftRow: null, generateGiftRowLegacy: null, generateGiftRowText: null, generateGiftButton: null, loading: null, generateButtonContainer: null, groupCardHeaderOpen: null, groupCardHeaderOpenRefresh: null, subtitleContainer: null, socialLayerSubtitleContainer: null };
let obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
obj2.title = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.arrow = { color: nativeDefault.colors.ICON_SUBTLE };
obj2.subtitle = { fontSize: 14, lineHeight: 18 };
obj2.titleContainer = { marginLeft: 8, flex: 1 };
obj2.groupCardHeader = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 16 };
let obj5 = { color: nativeDefault.colors.ICON_SUBTLE };
obj2.groupCardHeaderLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.rowArrow = { height: 8, width: 12, marginRight: 8 };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.giftIcon = { borderRadius: nativeDefault.radii.xs };
obj2.generateGiftRow = { padding: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj7 = { borderRadius: nativeDefault.radii.xs };
obj2.generateGiftRowLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.generateGiftRowText = { flexShrink: 1 };
obj2.generateGiftButton = { marginLeft: 12 };
obj2.loading = { marginTop: 8 };
obj2.generateButtonContainer = { flexGrow: 1, flexShrink: 0 };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.groupCardHeaderOpen = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj9 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.groupCardHeaderOpenRefresh = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.subtitleContainer = { flexDirection: "row", alignItems: "center", gap: 4 };
obj2.socialLayerSubtitleContainer = { marginTop: 2 };
let closure_16 = createStyles.createLegacyClassComponentStyles(obj2);
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
  const obj = { style: tmp.generateGiftRow, children: null };
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.generateGiftRowText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.lELyPj);
  const items = [closure_1_14(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.generateButtonContainer, children: null };
  const obj4 = { style: tmp.generateGiftButton, children: null };
  const obj5 = { text: null, size: "sm", onPress: null };
  const intl2 = util.intl;
  obj5.text = intl2.string(util.t["w4+/BA"]);
  obj5.onPress = this.handleGenerateGiftCode;
  obj4.children = closure_1_14(components_Button_Button.Button, obj5);
  obj3.children = closure_1_14(React4, obj4);
  items[1] = closure_1_14(React4, obj3);
  obj.children = items;
  return __initData(React4, obj);
};
prototype["renderHeader"] = function renderHeader(source, children) {
  const tmp = closure_16(this.context);
  const isOpen = this.state.isOpen;
  ({ entitlements, application, sku } = this.props);
  let isGameItemSKUResult = SlayerStorefrontUtils.isGameItemSKU(sku);
  if (isGameItemSKUResult) {
    isGameItemSKUResult = null != application;
  }
  const obj2 = { accessibilityRole: "button", accessibilityState: { expanded: isOpen }, onPress: this.handleToggleOpen, children: null };
  const items = [tmp.groupCardHeader, ];
  let prop = null;
  if (isOpen) {
    prop = tmp.groupCardHeaderOpenRefresh;
  }
  const obj3 = { style: items, children: null };
  items[1] = prop;
  if (isGameItemSKUResult) {
    const obj4 = { sku, size: null, containerStyle: null };
    const tmp14 = SlayerStorefrontItemCardDefault;
    obj4.size = native.getIconSize(native.Icon.Sizes.LARGE);
    obj4.containerStyle = tmp.giftIcon;
    let tmp6Result = closure_1_14(tmp14, obj4);
    const tmp2Result = native;
  } else {
    tmp6Result = null;
    if (null != source) {
      const obj5 = { resizeMode: "contain", source, disableColor: true, size: native.Icon.Sizes.LARGE, style: tmp.giftIcon };
      tmp6Result = closure_1_14(native.Icon, obj5);
    }
  }
  const items1 = [tmp6Result, , ];
  const obj6 = { style: tmp.titleContainer, children: null };
  const items2 = [closure_1_14(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children }), ];
  let socialLayerSubtitleContainer = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    socialLayerSubtitleContainer = tmp.socialLayerSubtitleContainer;
  }
  const obj8 = { style: null, children: null };
  const items3 = [socialLayerSubtitleContainer, tmp.subtitleContainer];
  obj8.style = items3;
  let tmp6Result2 = isGameItemSKUResult;
  if (isGameItemSKUResult) {
    const obj9 = { game: application, size: GameIconDefault.Sizes.SIZE_24, skuId: sku.id };
    tmp6Result2 = closure_1_14(GameIconDefault, obj9);
  }
  const items4 = [tmp6Result2, ];
  const obj10 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, children: null };
  const intl = util.intl;
  const format = intl.format;
  const t = util.t;
  if (isGameItemSKUResult) {
    const obj11 = { applicationName: application.name, copies: entitlements.length };
    let formatResult = format(t["6plpZi"], obj11);
  } else {
    const obj12 = { copies: entitlements.length };
    formatResult = format(t.zMcvcA, obj12);
  }
  obj10.children = formatResult;
  items4[1] = closure_1_14(Text_Text.Text, obj10);
  obj8.children = items4;
  items2[1] = __initData(React4, obj8);
  obj6.children = items2;
  items1[1] = __initData(React4, obj6);
  if (isOpen) {
    let ChevronSmallRightIcon = ChevronSmallDownIcon.ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = ChevronSmallRightIcon2.ChevronSmallRightIcon;
  }
  items1[2] = closure_1_14(ChevronSmallRightIcon, {});
  obj3.children = items1;
  obj2.children = __initData(React4, obj3);
  return closure_1_14(timestampProducer, obj2);
};
prototype["getCardHeaderThumbnail"] = function getCardHeaderThumbnail(id, giftStyle) {
  if (constants2.STANDARD_BOX === giftStyle) {
    return _modDef13505;
  } else if (constants2.CAKE === giftStyle) {
    return _modDef13507;
  } else if (constants2.CHEST === giftStyle) {
    return _modDef13508;
  } else if (constants2.COFFEE === giftStyle) {
    return _modDef13506;
  } else if (constants2.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13509;
  } else if (constants2.SEASONAL_CAKE === giftStyle) {
    return _modDef13510;
  } else if (constants2.SEASONAL_CHEST === giftStyle) {
    return _modDef13511;
  } else if (constants2.SEASONAL_COFFEE === giftStyle) {
    return _modDef13512;
  } else if (constants2.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11297 };
    return obj;
  } else if (TIER_0.TIER_0 === id) {
    return _modDef13513;
  } else if (TIER_0.TIER_1 === id) {
    return _modDef13516;
  } else {
    if (TIER_0.TIER_2 !== id) {
      if (TIER_0.LEGACY !== id) {
        return null;
      }
    }
    return _modDef13517;
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
  const obj = { style: null, children: null };
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
      const obj2 = { style: null };
      loading = loading.loading;
      obj2.style = loading;
      let tmpResult = closure_14(closure_5, obj2);
    } else {
      let result = null;
      if (giftCodes.length < entitlements.length) {
        result = self.renderGenerateGiftCodeRow();
      }
      const obj3 = { children: null };
      const items2 = [result, giftCodes.map((giftCode, index) => closure_2_14(GiftCodeRowDefault, { giftCode, sku, isFirst: 0 === index }, giftCode.code))];
      obj3.children = items2;
      tmpResult = closure_15(noop.Fragment, obj3);
    }
    const obj4 = { children: tmpResult };
    closure_14(closure_4, obj4);
  }
};
EntitlementGiftGroupCard.contextType = fn(4467).ThemeContext;
let items = [AuthenticationStore, SKUStore, ApplicationStore, GiftCodeStore, SubscriptionPlanStore];
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
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
    const obj2 = { sku: value, isFetching: GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId), loadedAt: GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId), application: ApplicationStore.getApplication(value.applicationId), subscriptionPlan: null, giftCodes: null };
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      orFetchSubscriptionPlan = SubscriptionUtils.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj2.subscriptionPlan = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = GiftCodeStore.getForGifterSKUAndPlan(AuthenticationStore.getId(), skuId, subscriptionPlanId);
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj2.giftCodes = found.filter((giftStyle) => giftStyle.giftStyle === require);
    return obj2;
  }
})(EntitlementGiftGroupCard);