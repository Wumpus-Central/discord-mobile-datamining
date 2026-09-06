// === Module 12212: ScheduledMessagesModal ===

// Module 12212 (ScheduledMessagesModal)
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import spring from "spring" /* 4974 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import _mod5631 from "module_5631" /* 5631 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import ScheduledMessageActionCreators from "ScheduledMessageActionCreators" /* 7844 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 9313 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9967 */;
import ScheduledMessageCardDefault from "ScheduledMessageCard" /* 12214 */;
import NitroLimitUpsellBarDefault from "NitroLimitUpsellBar" /* 12221 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ScheduledMessageStore from "ScheduledMessageStore" /* 12213 */;

require = fn;
function keyExtractor(scheduledMessageId) {
  return scheduledMessageId.scheduledMessageId;
}
function ScheduledMessagesPage(handleScroll) {
  _require = undefined;
  let stateFromStores2;
  const tmp = closure_14();
  [tmp3, c0] = _slicedToArray(noop.useState(false), 2);
  const effect = noop.useEffect(() => {
    const scheduledMessages = ScheduledMessageActionCreators.fetchScheduledMessages();
    scheduledMessages.then(() => closure_1_0(true));
  }, []);
  let obj = stateFromStores2;
  let obj1 = require("initialize");
  items = [ScheduledMessageStore];
  const stateFromStores = obj1.useStateFromStores(items, () => ScheduledMessageStore.getScheduledMessagesForInbox());
  let obj2 = require("initialize");
  const items1 = [ScheduledMessageStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ScheduledMessageStore.loading);
  let obj3 = require("initialize");
  const items2 = [ScheduledMessageStore];
  stateFromStores2 = obj3.useStateFromStores(items2, () => ScheduledMessageStore.getMessagesPendingRemoval());
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
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const scheduledMessagesLimit = require("ScheduledMessageUtils").useScheduledMessagesLimit("ScheduledMessagesMobileModal");
  const limit = scheduledMessagesLimit.limit;
  let tmp11 = limit > 0;
  if (tmp11) {
    tmp11 = memo.length >= limit;
  }
  if (!tmp3) {
    if (0 === memo.length) {
      obj = { style: tmp.loading, children: null };
      obj.children = closure_10(tmp5(obj[24]).ActivityIndicator, { size: "large" });
      return closure_10(View, obj);
    }
  }
  if (0 === memo.length) {
    obj = {};
    closure_10(stateFromStores(obj[25]), obj);
    const tmp19 = stateFromStores(obj[25]);
  } else {
    obj = { style: tmp.listContainer, children: null };
    obj1 = { data: memo, renderItem: callback, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll.handleScroll };
    obj.children = closure_10(tmp5(obj[26]).FlashList, obj1);
    const items5 = [closure_10(View, obj), ];
    let tmp22Result = null;
    if (scheduledMessagesLimit.isUpgradable) {
      obj2 = { isAtLimit: tmp11 };
      tmp22Result = tmp22(ScheduledMessageNitroUpsellBar, obj2);
    }
    obj3 = { children: null };
    items5[1] = tmp22Result;
    obj3.children = items5;
    closure_11(closure_12, obj3);
    tmp22 = closure_10;
  }
}
function ScheduledMessageNitroUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  let obj = PremiumUpsellUtils;
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES, useAnalyticsLocationsDefault(items).analyticsLocations);
  ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items));
  let obj1 = PremiumUtils;
  const premiumTypeDisplayName = obj1.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const tmp2 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items);
  const tmp4 = closure_1_10;
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (isAtLimit) {
    obj = { nitroTierName: premiumTypeDisplayName, premiumMax };
    let formatToPlainStringResult = formatToPlainString(t["7GgYhg"], obj);
  } else {
    obj = { nitroTierName: premiumTypeDisplayName };
    formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj);
  }
  obj1 = { text: formatToPlainStringResult, isAtLimit, onPress: null, loading: null };
  let tmp8 = null;
  if (!loading) {
    tmp8 = onPress;
  }
  obj1.onPress = tmp8;
  obj1.loading = loading;
  return tmp4(NitroLimitUpsellBarDefault, obj1);
}
const View = fn(17).View;
const AnalyticsPages = fn(1074).AnalyticsPages;
const PremiumTypes = fn(1373).PremiumTypes;
const premiumMax = fn(7846).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let items = [AnalyticsLocationDefault.SCHEDULED_MESSAGES_LIST];
fn(4560);
let createStyles = { modal: null, headerLeftContainer: null, headerRightContainer: null, headerBorder: null, cardContainer: null, listContainer: null, loading: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createStyles.modal = createStyles;
createStyles.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj1 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.headerBorder = size;
createStyles.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
createStyles.listContainer = { flex: 1 };
createStyles.loading = { flex: 1, alignItems: "center", justifyContent: "center" };
let closure_14 = createStyles.createStyles(createStyles);
const __initData = { code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default function ScheduledMessagesModal() {
  const tmp = closure_14();
  const intl = util.intl;
  const stringResult = intl.string(util.t.SZVs3K);
  const require = stringResult;
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0);
  items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  let obj1 = ReanimatedRexport;
  const fn = function t() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2142182513871;
  fn.__initData = __initData;
  obj = { style: tmp.modal, children: null };
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = {
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
    num = sharedValue(1611)().top;
  }
  obj.headerStatusBarHeight = num + sharedValue(576).space.PX_8;
  obj5 = PlatformUtils;
  const tmp10 = View;
  const tmp9 = closure_11;
  obj.headerLeft = NavigatorHeader.getHeaderCloseButton(sharedValue(4763).pop);
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  const items1 = [closure_10(_mod5631.Header, obj), , ];
  obj1 = { style: null };
  const items2 = [tmp.headerBorder, animatedStyle];
  obj1.style = items2;
  items1[1] = closure_10(sharedValue(4296).View, obj1);
  items1[2] = closure_10(ScheduledMessagesPage, { handleScroll: callback });
  obj.children = items1;
  return tmp9(tmp10, obj);
};