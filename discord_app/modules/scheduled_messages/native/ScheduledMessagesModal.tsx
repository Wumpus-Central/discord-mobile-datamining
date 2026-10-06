// === Module 11855: ScheduledMessagesModal ===

// Module 11855 (ScheduledMessagesModal)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import spring from "spring" /* 5604 */;
import _mod6026 from "module_6026" /* 6026 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import ScheduledMessageActionCreators from "ScheduledMessageActionCreators" /* 7485 */;
import ScheduledMessagesConstants from "ScheduledMessagesConstants" /* 7487 */;
import HeaderShared from "HeaderShared" /* 7509 */;
import PremiumUpsellUtils from "PremiumUpsellUtils" /* 8848 */;
import usePremiumFeatureUpsellGetNitroDefault from "usePremiumFeatureUpsellGetNitro" /* 9658 */;
import ScheduledMessageCardDefault from "ScheduledMessageCard" /* 11857 */;
import NitroLimitUpsellBarDefault from "NitroLimitUpsellBar" /* 11864 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ScheduledMessageStore from "ScheduledMessageStore" /* 11856 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let _require, handleScroll, isAtLimit, set;

let c10;
let closure_12;
let obj2;
let obj3;
let obj4;
let size;
let tmp4;
let unpackModuleId;
const NavigatorHeader = tmp4(6017);
function keyExtractor(scheduledMessageId) {
  return scheduledMessageId.scheduledMessageId;
}
const View = react_native.View;
const AnalyticsPages = Constants.AnalyticsPages;
const PremiumTypes = PremiumConstants.PremiumTypes;
const premiumMax = ScheduledMessagesConstants.MAX_SCHEDULED_MESSAGES_PER_USER;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const ScheduledMessagesMobileModal = "ScheduledMessagesMobileModal";
let items = [AnalyticsLocationDefault.SCHEDULED_MESSAGES_LIST];
let createStyles = createStyles_mod;
let obj = { modal: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, headerBorder: size, cardContainer: { paddingHorizontal: 16, paddingVertical: 8 }, listContainer: { flex: 1 }, loading: { flex: 1, alignItems: "center", justifyContent: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderBottomWidth: 0, shadowColor: "transparent", height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_15 = createStyles(obj);
const __initData = { code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const __initData2 = { code: "function ScheduledMessagesModalTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items1;
  let sharedValue;
  let title;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp9;
  let obj = title(576);
  const cResult = obj.c(21);
  const tmp4 = closure_15();
  const top = sharedValue(1618)().top;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(title(1126).t.SZVs3K);
    let num = 0;
    cResult[0] = stringResult;
    title = stringResult;
  } else {
    title = cResult[0];
  }
  const tmpResult = title(4618);
  sharedValue = tmpResult.useSharedValue(0);
  if (cResult[1] !== sharedValue) {
    const fn = function s(nativeEvent) {
      let num = 0;
      set = sharedValue.set;
      const withSpring = spring.withSpring;
      spring;
      if (nativeEvent.nativeEvent.contentOffset.y > 8) {
        num = 1;
      }
      const result = set(withSpring(num));
    };
    cResult[1] = sharedValue;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const fn2 = function _() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn2.__closure = { borderOpacity: sharedValue };
  fn2.__workletHash = 2142182513871;
  fn2.__initData = __initData;
  const tmpResult4 = title(4618);
  const animatedStyle = tmpResult4.useAnimatedStyle(fn2);
  const modal = tmp4.modal;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      const obj = { title };
      return authStore(HeaderShared.GenericHeaderTitle, obj);
    };
    cResult[3] = fn3;
    tmp11 = fn3;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== top) {
    let num5 = 0;
    const tmpResult5 = title(1369);
    if (!tmpResult5.isIOS()) {
      num5 = top;
    }
    cResult[4] = top;
    cResult[5] = num5;
    tmp12 = num5;
  } else {
    tmp12 = cResult[5];
  }
  const sum = tmp12 + tmp5(587).space.PX_8;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult6 = title(6017);
    const headerCloseButton = tmpResult6.getHeaderCloseButton(tmp5(5099).pop);
    cResult[6] = headerCloseButton;
    tmp14 = headerCloseButton;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === tmp4.headerLeftContainer) {
    if (cResult[8] === tmp4.headerRightContainer) {
      let tmp16;
      if (cResult[9] === sum) {
        tmp16 = cResult[10];
      }
      if (cResult[11] === animatedStyle) {
        let tmp18;
        let tmp21;
        if (cResult[12] === tmp4.headerBorder) {
          tmp18 = cResult[13];
        }
        if (cResult[14] !== tmp9) {
          const obj2 = { handleScroll: tmp9 };
          const tmp24 = closure_10(closure_19, obj2);
          cResult[14] = tmp9;
          cResult[15] = tmp24;
          tmp21 = tmp24;
        } else {
          tmp21 = cResult[15];
        }
        if (cResult[16] === tmp4.modal) {
          if (cResult[17] === tmp16) {
            if (cResult[18] === tmp18) {
              let tmp25;
              if (cResult[19] === tmp21) {
                tmp25 = cResult[20];
              }
              return tmp25;
            }
          }
        }
        const obj3 = { style: modal, children: items };
        items = [tmp16, tmp18, tmp21];
        const tmp28 = closure_11(View, obj3);
        cResult[16] = tmp4.modal;
        cResult[17] = tmp16;
        cResult[18] = tmp18;
        cResult[19] = tmp21;
        cResult[20] = tmp28;
        tmp25 = tmp28;
      }
      const obj4 = { style: items1 };
      items1 = [tmp4.headerBorder, animatedStyle];
      const tmp20 = closure_10(sharedValue(4618).View, obj4);
      cResult[11] = animatedStyle;
      cResult[12] = tmp4.headerBorder;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
  }
  const obj5 = { title, headerTitle: tmp11, headerTitleAlign: "center", headerStatusBarHeight: sum, headerLeft: tmp14, headerLeftContainerStyle: tmp4.headerLeftContainer, headerRightContainerStyle: tmp4.headerRightContainer };
  const tmp17 = closure_10(title(6026).Header, obj5);
  cResult[7] = tmp4.headerLeftContainer;
  cResult[8] = tmp4.headerRightContainer;
  cResult[9] = sum;
  cResult[10] = tmp17;
  tmp16 = tmp17;
}) : (() => {
  let items1;
  let items2;
  let num;
  let sharedValue;
  let tmp4Result;
  const tmp = closure_15();
  const tmp2 = sharedValue;
  const top = sharedValue(1618)().top;
  const intl = intl2.intl;
  const stringResult = intl.string(intl2.t.SZVs3K);
  const require = stringResult;
  let obj = ReanimatedRexport;
  sharedValue = obj.useSharedValue(0);
  items = [sharedValue];
  const callback = react.useCallback((nativeEvent) => {
    let num = 0;
    set = sharedValue.set;
    const withSpring = spring.withSpring;
    spring;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = set(withSpring(num));
  }, items);
  const fn = function t() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 17093474325708;
  fn.__initData = __initData2;
  const obj3 = { style: tmp.modal, children: items1 };
  const obj2 = ReanimatedRexport;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj6 = {
    title: stringResult,
    headerTitle() {
      const obj = { title: require };
      return authStore(HeaderShared.GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: num + tmp2(587).space.PX_8,
    headerLeft: tmp4Result.getHeaderCloseButton(tmp2(5099).pop),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const Header = _mod6026.Header;
  num = 0;
  const obj5 = PlatformUtils;
  if (!obj5.isIOS()) {
    num = top;
  }
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  tmp4Result = NavigatorHeader;
  items1 = [closure_10(Header, obj6), , ];
  const obj7 = { style: items2 };
  items2 = [tmp.headerBorder, animatedStyle];
  items1[1] = closure_10(tmp2(4618).View, obj7);
  items1[2] = closure_10(closure_19, { handleScroll: callback });
  return closure_11(View, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((handleScroll) => {
  let closure_0;
  let first;
  let isUpgradable;
  let limit;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(31);
  handleScroll = handleScroll.handleScroll;
  const tmp4 = closure_15();
  [first, _require] = react.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      const obj = ScheduledMessageActionCreators;
      const scheduledMessages = obj.fetchScheduledMessages();
      scheduledMessages.then(() => closure_1_0(true));
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp7 = fn;
    tmp8 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const effect = react.useEffect(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ScheduledMessageStore];
    const fn2 = function y() {
      return ScheduledMessageStore.getScheduledMessagesForInbox();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp10, tmp11);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ScheduledMessageStore];
    class R {
      constructor() {
        return ScheduledMessageStore.loading;
      }
    }
    cResult[4] = items2;
    cResult[5] = R;
    tmp15 = R;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, tmp15);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [ScheduledMessageStore];
    class O {
      constructor() {
        return ScheduledMessageStore.getMessagesPendingRemoval();
      }
    }
    cResult[6] = items3;
    cResult[7] = O;
    tmp19 = O;
    tmp18 = items3;
  } else {
    tmp18 = cResult[6];
    tmp19 = cResult[7];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp18, tmp19);
  if (cResult[8] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor(sendAtTimestamp, sendAtTimestamp2) {
          const date = new Date(sendAtTimestamp.sendAtTimestamp);
          const valueOfResult = date.valueOf();
          const date1 = new Date(sendAtTimestamp2.sendAtTimestamp);
          return valueOfResult - date1.valueOf();
        }
      }
      cResult[10] = H;
      class O {
        constructor() {
          return ScheduledMessageStore.getMessagesPendingRemoval();
        }
      }
    } else {
      class H {
        constructor(sendAtTimestamp, sendAtTimestamp2) {
          const date = new Date(sendAtTimestamp.sendAtTimestamp);
          const valueOfResult = date.valueOf();
          const date1 = new Date(sendAtTimestamp2.sendAtTimestamp);
          return valueOfResult - date1.valueOf();
        }
      }
    }
    class O {
      constructor() {
        return ScheduledMessageStore.getMessagesPendingRemoval();
      }
    }
    const values = Object.values(stateFromStores);
    const sorted = values.sort(tmp22);
    cResult[8] = stateFromStores;
    cResult[9] = sorted;
  } else {
    class H {
      constructor(sendAtTimestamp, sendAtTimestamp2) {
        const date = new Date(sendAtTimestamp.sendAtTimestamp);
        const valueOfResult = date.valueOf();
        const date1 = new Date(sendAtTimestamp2.sendAtTimestamp);
        return valueOfResult - date1.valueOf();
      }
    }
  }
  if (cResult[11] !== stateFromStores2) {
    class B {
      constructor(item) {
        item = item.item;
        const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
        const tmp = ScheduledMessageCardDefault;
        return authStore(tmp, obj);
      }
    }
    cResult[11] = stateFromStores2;
    class O {
      constructor() {
        return ScheduledMessageStore.getMessagesPendingRemoval();
      }
    }
    cResult[12] = B;
  } else {
    class B {
      constructor(item) {
        item = item.item;
        const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
        const tmp = ScheduledMessageCardDefault;
        return authStore(tmp, obj);
      }
    }
  }
  const tmpResult6 = tmp(7486);
  const scheduledMessagesLimit = tmpResult6.useScheduledMessagesLimit(ScheduledMessagesMobileModal);
  ({ limit, isUpgradable } = scheduledMessagesLimit);
  if (!first) {
    class B {
      constructor(item) {
        item = item.item;
        const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
        const tmp = ScheduledMessageCardDefault;
        return authStore(tmp, obj);
      }
    }
    return tmp30;
  } else {
    class B {
      constructor(item) {
        item = item.item;
        const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
        const tmp = ScheduledMessageCardDefault;
        return authStore(tmp, obj);
      }
    }
  }
  if (0 === arr5.length) {
    class B {
      constructor(item) {
        item = item.item;
        const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
        const tmp = ScheduledMessageCardDefault;
        return authStore(tmp, obj);
      }
    }
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor(item) {
          item = item.item;
          const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
          const tmp = ScheduledMessageCardDefault;
          return authStore(tmp, obj);
        }
      }
      const tmp33 = closure_10(stateFromStores2(11862), {});
      class O {
        constructor() {
          return ScheduledMessageStore.getMessagesPendingRemoval();
        }
      }
      cResult[16] = tmp33;
    } else {
      class B {
        constructor(item) {
          item = item.item;
          const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
          const tmp = ScheduledMessageCardDefault;
          return authStore(tmp, obj);
        }
      }
    }
    class O {
      constructor() {
        return ScheduledMessageStore.getMessagesPendingRemoval();
      }
    }
  } else {
    class B {
      constructor(item) {
        item = item.item;
        const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
        const tmp = ScheduledMessageCardDefault;
        return authStore(tmp, obj);
      }
    }
    const obj3 = { data: null, renderItem: B, contentContainerStyle: tmp4.cardContainer, keyExtractor, onScroll: handleScroll };
    class O {
      constructor() {
        return ScheduledMessageStore.getMessagesPendingRemoval();
      }
    }
    cResult[17] = handleScroll;
    cResult[18] = B;
    cResult[19] = arr5;
    cResult[20] = tmp4.cardContainer;
    cResult[21] = closure_10(tmp(8404).FlashList, obj3);
    const tmp29 = closure_10(tmp(8404).FlashList, obj3);
  }
}) : ((handleScroll) => {
  let c0;
  let obj7;
  let tmp21Result;
  let tmp3;
  _require = undefined;
  let stateFromStores2;
  handleScroll = handleScroll.handleScroll;
  let tmp = closure_15();
  [tmp3, c0] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const effect = react.useEffect(() => {
    const obj = ScheduledMessageActionCreators;
    const scheduledMessages = obj.fetchScheduledMessages();
    scheduledMessages.then(() => closure_1_0(true));
  }, []);
  let obj = require("get initialized");
  items = [ScheduledMessageStore];
  const stateFromStores = obj.useStateFromStores(items, () => ScheduledMessageStore.getScheduledMessagesForInbox());
  const items1 = [ScheduledMessageStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ScheduledMessageStore.loading);
  const items2 = [ScheduledMessageStore];
  const obj3 = require("get initialized");
  stateFromStores2 = obj3.useStateFromStores(items2, () => ScheduledMessageStore.getMessagesPendingRemoval());
  const items3 = [stateFromStores];
  const memo = react.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.sort((sendAtTimestamp, sendAtTimestamp2) => {
      const date = new Date(sendAtTimestamp.sendAtTimestamp);
      const valueOfResult = date.valueOf();
      const date1 = new Date(sendAtTimestamp2.sendAtTimestamp);
      return valueOfResult - date1.valueOf();
    });
  }, items3);
  const items4 = [stateFromStores2];
  const callback = react.useCallback((item) => {
    item = item.item;
    const obj = { scheduledMessage: item, isPendingRemoval: stateFromStores2.has(item.scheduledMessageId) };
    const tmp = ScheduledMessageCardDefault;
    return authStore(tmp, obj);
  }, items4);
  const obj4 = require("ScheduledMessageUtils");
  const scheduledMessagesLimit = obj4.useScheduledMessagesLimit(ScheduledMessagesMobileModal);
  const limit = scheduledMessagesLimit.limit;
  let tmp12 = limit > 0;
  const isUpgradable = scheduledMessagesLimit.isUpgradable;
  if (tmp12) {
    tmp12 = memo.length >= limit;
  }
  if (!tmp3) {
    let tmp15;
    if (0 === memo.length) {
      const obj5 = { style: tmp.loading, children: closure_10(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, { size: "large" }) };
      tmp15 = closure_10(View, obj5);
    }
    return tmp15;
  }
  if (0 === memo.length) {
    tmp21Result = closure_10(stateFromStores(tmp6[27]), {});
  } else {
    const obj6 = { style: tmp.listContainer, children: closure_10(require("defaultMVCPConfig").FlashList, obj7) };
    obj7 = { data: memo, renderItem: callback, contentContainerStyle: tmp.cardContainer, keyExtractor, onScroll: handleScroll };
    const items5 = [closure_10(View, obj6), ];
    let tmp23Result = null;
    if (isUpgradable) {
      const obj8 = { isAtLimit: tmp12 };
      tmp23Result = closure_10(closure_20, obj8);
    }
    const obj9 = { children: items5 };
    items5[1] = tmp23Result;
    tmp21Result = closure_11(closure_12, obj9);
  }
  tmp15 = tmp21Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((isAtLimit) => {
  let loading;
  let onPress;
  let onViewAllPerks;
  let tmp7;
  let tmp8;
  let useTier0UpsellContent;
  const obj = react2;
  const cResult = obj.c(9);
  isAtLimit = isAtLimit.isAtLimit;
  const analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  const obj2 = PremiumUpsellUtils;
  const premiumUpsellConfig = obj2.usePremiumUpsellConfig(ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES, analyticsLocations);
  ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items));
  usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items);
  if (cResult[0] !== isAtLimit) {
    let formatToPlainStringResult;
    const tmpResult = PremiumUtils;
    const premiumTypeDisplayName = tmpResult.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
    const tmp4Result = NitroLimitUpsellBarDefault;
    const intl = intl2.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl2.t;
    if (isAtLimit) {
      const obj3 = { nitroTierName: premiumTypeDisplayName, premiumMax };
      formatToPlainStringResult = formatToPlainString(t["7GgYhg"], obj3);
    } else {
      const obj4 = { nitroTierName: premiumTypeDisplayName };
      formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj4);
    }
    cResult[0] = isAtLimit;
    cResult[1] = tmp4Result;
    cResult[2] = formatToPlainStringResult;
    tmp8 = formatToPlainStringResult;
    tmp7 = tmp4Result;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  let tmp14 = null;
  if (!loading) {
    tmp14 = onPress;
  }
  if (cResult[3] === tmp7) {
    if (cResult[4] === isAtLimit) {
      if (cResult[5] === loading) {
        if (cResult[6] === tmp8) {
          let tmp15;
          if (cResult[7] === tmp14) {
            tmp15 = cResult[8];
          }
          return tmp15;
        }
      }
    }
  }
  const tmp16 = authStore(tmp7, { text: tmp8, isAtLimit, onPress: tmp14, loading });
  cResult[3] = tmp7;
  cResult[4] = isAtLimit;
  cResult[5] = loading;
  cResult[6] = tmp8;
  cResult[7] = tmp14;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : ((isAtLimit) => {
  let formatToPlainStringResult;
  let loading;
  let onPress;
  let onViewAllPerks;
  let tmp8;
  let useTier0UpsellContent;
  isAtLimit = isAtLimit.isAtLimit;
  const analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  const obj = PremiumUpsellUtils;
  const premiumUpsellConfig = obj.usePremiumUpsellConfig(ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES, analyticsLocations);
  ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
  ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items));
  usePremiumFeatureUpsellGetNitroDefault(useTier0UpsellContent, onViewAllPerks, AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES, undefined, items);
  const obj2 = PremiumUtils;
  const premiumTypeDisplayName = obj2.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const tmp5 = NitroLimitUpsellBarDefault;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl2.t;
  if (isAtLimit) {
    const obj3 = { nitroTierName: premiumTypeDisplayName, premiumMax };
    formatToPlainStringResult = formatToPlainString(t["7GgYhg"], obj3);
  } else {
    const obj4 = { nitroTierName: premiumTypeDisplayName };
    formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj4);
  }
  const obj5 = { text: formatToPlainStringResult, isAtLimit, onPress: tmp8, loading };
  tmp8 = null;
  if (!loading) {
    tmp8 = onPress;
  }
  return authStore(tmp5, obj5);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default tmp4;