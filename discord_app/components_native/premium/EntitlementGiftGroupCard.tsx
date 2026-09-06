// discord_app/components_native/premium/EntitlementGiftGroupCard.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../design/components/Button/native/Button.native.tsx";
import GameIconDefault from "../../modules/game_detection/native/GameIcon.tsx";
import SlayerStorefrontUtils from "../../modules/slayer_storefront/SlayerStorefrontUtils.tsx";
import SlayerStorefrontItemCardDefault from "../../modules/slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import _modDef11022 from "../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import GiftCodeActionCreatorsDefault from "../../actions/GiftCodeActionCreators.tsx";
import SubscriptionUtils from "../../utils/SubscriptionUtils.tsx";
import _modDef13193 from "../../../_runtime/metro/13193__.js";
import _modDef13194 from "../../../_runtime/metro/13194__.js";
import _modDef13195 from "../../../_runtime/metro/13195__.js";
import _modDef13196 from "../../../_runtime/metro/13196__.js";
import _modDef13197 from "../../../_runtime/metro/13197__.js";
import _modDef13198 from "../../../_runtime/metro/13198__.js";
import _modDef13199 from "../../../_runtime/metro/13199__.js";
import _modDef13200 from "../../../_runtime/metro/13200__.js";
import _modDef13201 from "../../../_runtime/metro/13201__.js";
import _modDef13204 from "../../../_runtime/metro/13204__.js";
import _modDef13205 from "../../../_runtime/metro/13205__.js";
import GiftCodeRowDefault from "GiftCodeRow.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../modules/applications/ApplicationStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GiftCodeStore from "../../stores/GiftCodeStore.tsx";
import SubscriptionPlanStore from "../../stores/billing/SubscriptionPlanStore.tsx";
import SKUStore from "../../stores/game_store/SKUStore.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({
  View: closure_4,
  ActivityIndicator: hasOwnProperty,
  TouchableWithoutFeedback: metroRequire,
} = get_ActivityIndicator);
const PremiumConstants = fn(1373);
({
  SubscriptionIntervalTypes: closure_11,
  PremiumSubscriptionSKUs: closure_12,
  PremiumGiftStyles: map1,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = {
  giftGroupCard: { overflow: "hidden", marginTop: 8 },
  giftGroupCardRefresh: null,
  title: null,
  arrow: null,
  subtitle: null,
  titleContainer: null,
  groupCardHeader: null,
  groupCardHeaderLegacy: null,
  rowArrow: null,
  giftIcon: null,
  generateGiftRow: null,
  generateGiftRowLegacy: null,
  generateGiftRowText: null,
  generateGiftButton: null,
  loading: null,
  generateButtonContainer: null,
  groupCardHeaderOpen: null,
  groupCardHeaderOpenRefresh: null,
  subtitleContainer: null,
  socialLayerSubtitleContainer: null,
};
createStyles = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.CARD_BORDER_DEFAULT,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
};
createStyles.giftGroupCardRefresh = createStyles;
createStyles.title = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
let obj1 = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
};
createStyles.arrow = { color: nativeDefault.colors.ICON_SUBTLE };
createStyles.subtitle = { fontSize: 14, lineHeight: 18 };
createStyles.titleContainer = { marginLeft: 8, flex: 1 };
createStyles.groupCardHeader = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 16,
};
let obj2 = { color: nativeDefault.colors.ICON_SUBTLE };
createStyles.groupCardHeaderLegacy = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.rowArrow = { height: 8, width: 12, marginRight: 8 };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.giftIcon = { borderRadius: nativeDefault.radii.xs };
createStyles.generateGiftRow = {
  padding: 8,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
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
        tmp2 = null != obj._mountedAt;
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
  const items = [closure_1_14(Text_Text.Text, obj)];
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
  obj = {
    accessibilityRole: "button",
    accessibilityState: { expanded: isOpen },
    onPress: this.handleToggleOpen,
    children: null,
  };
  const items = [tmp.groupCardHeader];
  let prop = null;
  if (isOpen) {
    prop = tmp.groupCardHeaderOpenRefresh;
  }
  obj = { style: items, children: null };
  items[1] = prop;
  if (isGameItemSKUResult) {
    const obj1 = { sku, size: null, containerStyle: null };
    const tmp14 = SlayerStorefrontItemCardDefault;
    obj1.size = tmp2(1178).getIconSize(tmp2(1178).Icon.Sizes.LARGE);
    obj1.containerStyle = tmp.giftIcon;
    let tmp6Result = tmp6(tmp14, obj1);
    const tmp2Result = tmp2(1178);
  } else {
    tmp6Result = null;
    if (null != source) {
      const obj2 = {
        resizeMode: "contain",
        source,
        disableColor: true,
        size: tmp2(1178).Icon.Sizes.LARGE,
        style: tmp.giftIcon,
      };
      tmp6Result = tmp6(tmp2(1178).Icon, obj2);
    }
  }
  const items1 = [tmp6Result, ,];
  const obj3 = { style: tmp.titleContainer, children: null };
  const items2 = [
    closure_1_14(Text_Text.Text, {
      variant: "heading-sm/semibold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children,
    }),
  ];
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
    tmp6Result = tmp6(GameIconDefault, obj6);
  }
  const items4 = [tmp6Result];
  const obj7 = { variant: "text-md/normal", color: "text-subtle", style: tmp.subtitle, children: null };
  const intl = tmp2(1114).intl;
  const format = intl.format;
  const t = tmp2(1114).t;
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
    let ChevronSmallRightIcon = tmp2(11153).ChevronSmallDownIcon;
  } else {
    ChevronSmallRightIcon = tmp2(7209).ChevronSmallRightIcon;
  }
  items1[2] = closure_1_14(ChevronSmallRightIcon, {});
  obj.children = items1;
  obj.children = __initData(React4, obj);
  return closure_1_14(timestampProducer, obj);
};
prototype["getCardHeaderThumbnail"] = function getCardHeaderThumbnail(id, giftStyle) {
  if (constants2.STANDARD_BOX === giftStyle) {
    return _modDef13193;
  } else if (tmp.CAKE === giftStyle) {
    return _modDef13195;
  } else if (tmp.CHEST === giftStyle) {
    return _modDef13196;
  } else if (tmp.COFFEE === giftStyle) {
    return _modDef13194;
  } else if (tmp.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13197;
  } else if (tmp.SEASONAL_CAKE === giftStyle) {
    return _modDef13198;
  } else if (tmp.SEASONAL_CHEST === giftStyle) {
    return _modDef13199;
  } else if (tmp.SEASONAL_COFFEE === giftStyle) {
    return _modDef13200;
  } else if (tmp.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11022 };
    return obj;
  } else if (TIER_0.TIER_0 === id) {
    return _modDef13201;
  } else if (tmp3.TIER_1 === id) {
    return _modDef13204;
  } else {
    if (tmp3.TIER_2 !== id) {
      if (tmp3.LEGACY !== id) {
        return null;
      }
    }
    return _modDef13205;
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
        let Vd3Iu8 = tmp4(1114).t.rCJvqo;
      } else {
        Vd3Iu8 = tmp4(1114).t.Vd3Iu8;
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
  const items = [,];
  ({ giftGroupCard: arr[0], giftGroupCardRefresh: arr[1] } = loading);
  obj.style = items;
  ({ entitlements, isFetching } = props);
  const items1 = [this.renderCardHeader(sku)];
  if (!this.state.isOpen) {
    items1[1] = null;
    obj.children = items1;
    return tmp(tmp2, obj);
  } else {
    if (isFetching) {
      obj = { style: null };
      loading = loading.loading;
      obj.style = loading;
      let tmpResult = tmp3(closure_5, obj);
    } else {
      let result = null;
      if (giftCodes.length < entitlements.length) {
        result = self.renderGenerateGiftCodeRow();
      }
      obj = { children: null };
      const items2 = [
        result,
        giftCodes.map((giftCode, index) =>
          closure_2_14(GiftCodeRowDefault, { giftCode, sku, isFirst: 0 === index }, giftCode.code),
        ),
      ];
      obj.children = items2;
      tmpResult = tmp(noop.Fragment, obj);
    }
    const obj1 = { children: tmpResult };
    closure_14(tmp2, obj1);
  }
};
EntitlementGiftGroupCard.contextType = fn(4271).ThemeContext;
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
    let obj = {
      sku: value,
      isFetching: GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(skuId, subscriptionPlanId),
      loadedAt: GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(skuId, subscriptionPlanId),
      application: ApplicationStore.getApplication(value.applicationId),
      subscriptionPlan: null,
      giftCodes: null,
    };
    let orFetchSubscriptionPlan = null;
    if (null != subscriptionPlanId) {
      obj = SubscriptionUtils;
      orFetchSubscriptionPlan = obj.getOrFetchSubscriptionPlan(subscriptionPlanId);
    }
    obj.subscriptionPlan = orFetchSubscriptionPlan;
    const forGifterSKUAndPlan = GiftCodeStore.getForGifterSKUAndPlan(
      AuthenticationStore.getId(),
      skuId,
      subscriptionPlanId,
    );
    const found = forGifterSKUAndPlan.filter((isClaimed) => !isClaimed.isClaimed);
    obj.giftCodes = found.filter((giftStyle) => giftStyle.giftStyle === require);
    return obj;
  }
})(EntitlementGiftGroupCard);
