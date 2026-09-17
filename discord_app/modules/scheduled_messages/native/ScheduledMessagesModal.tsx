// === Module 12363: ScheduledMessagesModal ===

// Module 12363 (ScheduledMessagesModal)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import PremiumUtils from "PremiumUtils" /* 4297 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import spring from "spring" /* 5061 */;
import _mod5719 from "module_5719" /* 5719 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7276 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7296 */;
import ScheduledMessageActionCreators from "ScheduledMessageActionCreators" /* 7964 */;
import HeaderShared from "HeaderShared" /* 7984 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 9467 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 10117 */;
import ScheduledMessageCardDefault from "ScheduledMessageCard" /* 12365 */;
import NitroLimitUpsellBarDefault from "NitroLimitUpsellBar" /* 12372 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ScheduledMessageStore from "ScheduledMessageStore" /* 12364 */;

const NavigatorHeader = tmp4(5712);
require = fn;
function keyExtractor(scheduledMessageId) {
  return scheduledMessageId.scheduledMessageId;
}
function ScheduledMessagesPage(handleScroll) {
  _require = undefined;
  let stateFromStores2;
  const tmp = closure_14();
  [tmp3, c0] = noop.useState(false);
  const effect = noop.useEffect(() => {
    const scheduledMessages = ScheduledMessageActionCreators.fetchScheduledMessages();
    scheduledMessages.then(() => closure_1_0(true));
  }, []);
  let obj = stateFromStores2;
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  items = [ScheduledMessageStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ScheduledMessageStore.getScheduledMessagesForInbox());
  const obj2 = require("initialize");
  const items1 = [ScheduledMessageStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ScheduledMessageStore.loading);
  const obj3 = require("initialize");
  const items2 = [ScheduledMessageStore];
  stateFromStores2 = require("initialize").useStateFromStores(items2, () => ScheduledMessageStore.getMessagesPendingRemoval());
  const items3 = [stateFromStores];
  const memo = noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.sort((sendAtTimestamp, sendAtTimestamp2) => {
      const date = new Date(sendAtTimestamp.sendAtTimestamp);
      const valueOfResult = new Date(sendAtTimestamp.sendAtTimestamp).valueOf();
      return valueOfResult - new Date(sendAtTimestamp2.sendAtTimestamp).valueOf();
    });
  }, items3);
  const items4 = [stateFromStores2];
  const callback = noop.useCallback((item) => {
    item = item.item;
    const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
    return closure_2_10(ScheduledMessageCardDefault, obj);
  }, items4);
  const obj4 = require("initialize");
  const scheduledMessagesLimit = require("ScheduledMessageUtils").useScheduledMessagesLimit("ScheduledMessagesMobileModal");
  const limit = scheduledMessagesLimit.limit;
  let tmp11 = limit > 0;
  if (tmp11) {
    tmp11 = memo.length >= limit;
  }
  if (!tmp3) {
    if (0 === memo.length) {
      const obj6 = { style: tmp.loading, children: closure_10(tmp5(obj[24]).ActivityIndicator, { size: "large" }) };
      return closure_10(View, obj6);
    }
  }
  if (0 === memo.length) {
    obj = {};
    closure_10(stateFromStores(obj[25]), obj);
    const tmp19 = stateFromStores(obj[25]);
  } else {
    const obj7 = { style: tmp.listContainer, children: null };
    const obj8 = { data: memo, renderItem: callback, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll.handleScroll };
    obj7.children = closure_10(tmp5(obj[26]).FlashList, obj8);
    const items5 = [closure_10(View, obj7), ];
    let tmp22Result = null;
    if (scheduledMessagesLimit.isUpgradable) {
      const obj9 = { isAtLimit: tmp11 };
      tmp22Result = closure_10(ScheduledMessageNitroUpsellBar, obj9);
    }
    const obj10 = { children: null };
    items5[1] = tmp22Result;
    obj10.children = items5;
    closure_11(closure_12, obj10);
  }
  const obj5 = require("ScheduledMessageUtils");
}
function ScheduledMessageNitroUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  const premiumUpsellConfig = PremiumUpsellUtils.usePremiumUpsellConfig(ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES, useAnalyticsLocationsDefault(items).analyticsLocations);
  ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items));
  const tmp2 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items);
  const premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (isAtLimit) {
    const obj3 = { nitroTierName: premiumTypeDisplayName, premiumMax };
    let formatToPlainStringResult = formatToPlainString(t["7GgYhg"], obj3);
  } else {
    const obj4 = { nitroTierName: premiumTypeDisplayName };
    formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj4);
  }
  const obj5 = { text: formatToPlainStringResult, isAtLimit, onPress: null, loading: null };
  let tmp8 = null;
  if (!loading) {
    tmp8 = onPress;
  }
  obj5.onPress = tmp8;
  obj5.loading = loading;
  return closure_1_10(NitroLimitUpsellBarDefault, obj5);
}
const View = fn(17).View;
const AnalyticsPages = fn(1074).AnalyticsPages;
const PremiumTypes = fn(1374).PremiumTypes;
const premiumMax = fn(7966).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let items = [AnalyticsLocationDefault.SCHEDULED_MESSAGES_LIST];
const createStyles = fn(4640);
let obj2 = { modal: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" }, headerLeftContainer: null, headerRightContainer: null, headerBorder: null, cardContainer: null, listContainer: null, loading: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.headerBorder = size;
obj2.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj2.listContainer = { flex: 1 };
obj2.loading = { flex: 1, alignItems: "center", justifyContent: "center" };
let closure_14 = createStyles.createStyles(obj2);
const __initData = { code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default function ScheduledMessagesModal() {
  const tmp = closure_14();
  const intl = util.intl;
  const stringResult = intl.string(util.t.SZVs3K);
  const require = stringResult;
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  const fn = function t() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2142182513871;
  fn.__initData = __initData;
  const obj3 = { style: tmp.modal, children: null };
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj6 = {
    title: stringResult,
    headerTitle() {
      return closure_2_10(HeaderShared.GenericHeaderTitle, { title: stringResult });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  let num = 0;
  if (!obj5.isIOS()) {
    num = sharedValue(1612)().top;
  }
  obj6.headerStatusBarHeight = num + sharedValue(576).space.PX_8;
  obj5 = PlatformUtils;
  obj6.headerLeft = NavigatorHeader.getHeaderCloseButton(sharedValue(4843).pop);
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  const items1 = [closure_10(_mod5719.Header, obj6), , ];
  const obj7 = { style: null };
  const items2 = [tmp.headerBorder, animatedStyle];
  obj7.style = items2;
  items1[1] = closure_10(sharedValue(4376).View, obj7);
  items1[2] = closure_10(ScheduledMessagesPage, { handleScroll: callback });
  obj3.children = items1;
  return closure_11(View, obj3);
};