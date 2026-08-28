// discord_app/modules/scheduled_messages/native/ScheduledMessagesModal.tsx
import set from "../../../utils/PlatformUtils.tsx";
import keys from "../../../ConstantsIOS.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import _mod4186 from "../../reanimated/ReanimatedRexport.tsx";
import HeaderBackImage from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Background from "../../../../_runtime/05467_Background.js";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import usePremiumUpsellConfig from "../../../utils/native/PremiumUpsellUtils.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import NitroLimitUpsellBarDefault from "../../saved_messages/native/NitroLimitUpsellBar.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../ScheduledMessageStore.tsx";
import { AnalyticsPages } from "../../../Constants.tsx";
import { PremiumTypes } from "../../premium/PremiumConstants.tsx";
import { MAX_SCHEDULED_MESSAGES_PER_USER as closure_9 } from "../../../../discord_common/js/shared/shared-constants/ScheduledMessagesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function keyExtractor(scheduledMessageId) {
  return scheduledMessageId.scheduledMessageId;
}
function ScheduledMessagesPage(handleScroll) {
  let _require;
  let stateFromStores;
  let stateFromStores2;
  const tmp = callback3();
  [tmp3, c0] = callback(React.useState(false), 2);
  const effect = React.useEffect(() => {
    const scheduledMessages = _undefined(stateFromStores2[20]).fetchScheduledMessages();
    scheduledMessages.then(() => callback(true));
  }, []);
  let obj = stateFromStores2;
  obj1 = _require(stateFromStores2[21]);
  items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => store.getScheduledMessagesForInbox());
  let obj2 = _require(stateFromStores2[21]);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => store.loading);
  let obj3 = _require(stateFromStores2[21]);
  const items2 = [closure_6];
  stateFromStores2 = obj3.useStateFromStores(items2, () => store.getMessagesPendingRemoval());
  const items3 = [stateFromStores];
  const memo = React.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.sort((sendAtTimestamp, sendAtTimestamp2) => {
      const date = new Date(sendAtTimestamp.sendAtTimestamp);
      const valueOfResult = new Date(sendAtTimestamp.sendAtTimestamp).valueOf();
      return valueOfResult - new Date(sendAtTimestamp2.sendAtTimestamp).valueOf();
    });
  }, items3);
  const items4 = [stateFromStores2];
  callback = React.useCallback((item) => {
    item = item.item;
    const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
    return closure_1_10(stateFromStores(stateFromStores2[22]), obj);
  }, items4);
  const tmp2 = callback(React.useState(false), 2);
  const scheduledMessagesLimit = _require(stateFromStores2[23]).useScheduledMessagesLimit("ScheduledMessagesMobileModal");
  const limit = scheduledMessagesLimit.limit;
  let tmp11 = limit > 0;
  if (tmp11) {
    tmp11 = memo.length >= limit;
  }
  if (!tmp3) {
    if (0 === memo.length) {
      obj = { style: null, children: null };
      obj[0] = tmp.loading;
      obj[1] = callback2(tmp5(obj[24]).ActivityIndicator, { size: "large" });
      return callback2(View, obj);
    }
  }
  if (0 === memo.length) {
    obj = {};
    callback2(stateFromStores(obj[25]), obj);
    const tmp19 = stateFromStores(obj[25]);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.listContainer;
    obj1 = { data: null, renderItem: null, contentContainerStyle: null, keyExtractor: null, onScroll: null };
    obj1[0] = memo;
    obj1[1] = callback;
    obj1[2] = tmp.cardContainer;
    obj1[3] = keyExtractor;
    obj1[4] = handleScroll.handleScroll;
    obj[1] = callback2(tmp5(obj[26]).FlashList, obj1);
    const items5 = [callback2(View, obj), ];
    let tmp22Result = null;
    if (scheduledMessagesLimit.isUpgradable) {
      obj2 = { isAtLimit: null };
      obj2[0] = tmp11;
      tmp22Result = tmp22(ScheduledMessageNitroUpsellBar, obj2);
    }
    obj3 = { children: null };
    items5[1] = tmp22Result;
    obj3[0] = items5;
    closure_11(closure_12, obj3);
    const tmp20 = closure_11;
    const tmp21 = closure_12;
    tmp22 = callback2;
  }
}
function ScheduledMessageNitroUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  let obj = usePremiumUpsellConfig;
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(keys.UpsellTypes.SCHEDULED_MESSAGES, contextDefault(items).analyticsLocations);
  ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items));
  obj1 = getPremiumPlanItem;
  const premiumTypeDisplayName = obj1.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const tmp2 = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items);
  const tmp4 = closure_10;
  const intl = getSystemLocale.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = getSystemLocale.t;
  if (isAtLimit) {
    obj = { nitroTierName: null, premiumMax: null };
    obj[0] = premiumTypeDisplayName;
    obj[1] = closure_9;
    let formatToPlainStringResult = formatToPlainString(t["7GgYhg"], obj);
  } else {
    obj = { nitroTierName: null };
    obj[0] = premiumTypeDisplayName;
    formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj);
  }
  obj1 = { text: formatToPlainStringResult, isAtLimit, onPress: null, loading: null };
  let tmp8 = null;
  if (!loading) {
    tmp8 = onPress;
  }
  obj1[2] = tmp8;
  obj1[3] = loading;
  return tmp4(NitroLimitUpsellBarDefault, obj1);
}
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let items = [QUICK_SWITCHERDefault.SCHEDULED_MESSAGES_LIST];
createCacheKey = { modal: null, headerLeftContainer: null, headerRightContainer: null, headerBorder: null, cardContainer: null, listContainer: null, loading: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: ThemesDefault.space.PX_16 };
let obj1 = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingRight: ThemesDefault.space.PX_16 };
let obj2 = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[3] = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[4] = { paddingHorizontal: 16, paddingVertical: 8 };
createCacheKey[5] = { flex: 1 };
createCacheKey[6] = { flex: 1, alignItems: "center", justifyContent: "center" };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let closure_15 = { code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
let obj3 = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default function ScheduledMessagesModal() {
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.SZVs3K);
  require = stringResult;
  let obj = _mod4186;
  const sharedValue = obj.useSharedValue(0);
  items = [sharedValue];
  const callback = React.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(stringResult(closure_1_2[14]).withSpring(num));
  }, items);
  const fn = function t() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2142182513871;
  fn.__initData = closure_15;
  obj = { style: tmp.modal, children: null };
  const animatedStyle = _mod4186.useAnimatedStyle(fn);
  obj = {
    title: stringResult,
    headerTitle() {
      return closure_1_10(stringResult(closure_1_2[16]).GenericHeaderTitle, { title: closure_0 });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const obj2 = _mod4186;
  const tmp10 = View;
  const tmp4 = require;
  const tmp9 = closure_11;
  let num = 0;
  if (!obj5.isIOS()) {
    num = sharedValue(1629)().top;
  }
  obj[3] = num + sharedValue(712).space.PX_8;
  obj5 = set;
  obj[4] = HeaderBackImage.getHeaderCloseButton(sharedValue(4689).pop);
  ({ headerLeftContainer: obj4[5], headerRightContainer: obj4[6] } = tmp);
  const items1 = [closure_10(Background.Header, obj), , ];
  const items2 = [tmp.headerBorder, animatedStyle];
  items1[1] = closure_10(sharedValue(4186).View, { style: items2 });
  items1[2] = closure_10(ScheduledMessagesPage, { handleScroll: callback });
  obj[1] = items1;
  return tmp9(tmp10, obj);
};