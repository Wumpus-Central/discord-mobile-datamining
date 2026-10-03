// discord_app/modules/scheduled_messages/native/ScheduledMessagesModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import _mod6019 from "../../../../_runtime/metro/06019__.js";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import ScheduledMessageActionCreators from "../ScheduledMessageActionCreators.tsx";
import HeaderShared from "../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import PremiumUpsellUtils from "../../../utils/native/PremiumUpsellUtils.tsx";
import usePremiumFeatureUpsellGetNitroDefault from "../../premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx";
import ScheduledMessageCardDefault from "ScheduledMessageCard.tsx";
import NitroLimitUpsellBarDefault from "../../saved_messages/native/NitroLimitUpsellBar.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ScheduledMessageStore from "../ScheduledMessageStore.tsx";

const NavigatorHeader = tmp4(6010);
require = fn;
function keyExtractor(scheduledMessageId) {
  return scheduledMessageId.scheduledMessageId;
}
const View = fn(17).View;
const AnalyticsPages = fn(1085).AnalyticsPages;
const PremiumTypes = fn(1379).PremiumTypes;
const premiumMax = fn(7476).MAX_SCHEDULED_MESSAGES_PER_USER;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const ScheduledMessagesMobileModal = "ScheduledMessagesMobileModal";
let items = [AnalyticsLocationDefault.SCHEDULED_MESSAGES_LIST];
const createStyles = fn(4890);
let obj2 = {
  modal: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    borderBottomWidth: 0,
    shadowColor: "transparent",
    height: "100%",
  },
  headerLeftContainer: null,
  headerRightContainer: null,
  headerBorder: null,
  cardContainer: null,
  listContainer: null,
  loading: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderBottomWidth: 0,
  shadowColor: "transparent",
  height: "100%",
};
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.headerBorder = size;
obj2.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj2.listContainer = { flex: 1 };
obj2.loading = { flex: 1, alignItems: "center", justifyContent: "center" };
let closure_15 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
const __initData2 = {
  code: "function ScheduledMessagesModalTsx2(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
fn(558);
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (handleScroll) => {
      let tmp2 = dependencyMap;
      const cResult = require("c").c(31);
      handleScroll = handleScroll.handleScroll;
      const tmp4 = closure_15();
      const tmp5 = _slicedToArray(noop.useState(false), 2);
      _require = tmp5[1];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          const scheduledMessages = ScheduledMessageActionCreators.fetchScheduledMessages();
          scheduledMessages.then(() => closure_1_0(true));
        };
        items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp6 = fn;
        tmp7 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ScheduledMessageStore];
        const fn2 = function y() {
          return ScheduledMessageStore.getScheduledMessagesForInbox();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [ScheduledMessageStore];
        class R {
          constructor() {
            return closure_1_6.loading;
          }
        }
        cResult[4] = items2;
        cResult[5] = R;
        let tmp14 = R;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[4];
        tmp14 = cResult[5];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp13, tmp14);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [ScheduledMessageStore];
        class O {
          constructor() {
            return closure_1_6.getMessagesPendingRemoval();
          }
        }
        cResult[6] = items3;
        cResult[7] = O;
        let tmp18 = O;
        let tmp17 = items3;
      } else {
        tmp17 = cResult[6];
        tmp18 = cResult[7];
      }
      const tmpResult4 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp17, tmp18);
      if (cResult[8] !== stateFromStores) {
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0, arg1) {
              date = new Date(handleScroll.sendAtTimestamp);
              valueOfResult = date.valueOf();
              date1 = new Date(arg1.sendAtTimestamp);
              return valueOfResult - date1.valueOf();
            }
          }
          cResult[10] = H;
          class O {
            constructor() {
              return closure_1_6.getMessagesPendingRemoval();
            }
          }
        } else {
          class H {
            constructor(arg0, arg1) {
              date = new Date(handleScroll.sendAtTimestamp);
              valueOfResult = date.valueOf();
              date1 = new Date(arg1.sendAtTimestamp);
              return valueOfResult - date1.valueOf();
            }
          }
        }
        class O {
          constructor() {
            return closure_1_6.getMessagesPendingRemoval();
          }
        }
        const values = Object.values(stateFromStores);
        const sorted = values.sort(tmp21);
        cResult[8] = stateFromStores;
        cResult[9] = sorted;
      } else {
        class H {
          constructor(arg0, arg1) {
            date = new Date(handleScroll.sendAtTimestamp);
            valueOfResult = date.valueOf();
            date1 = new Date(arg1.sendAtTimestamp);
            return valueOfResult - date1.valueOf();
          }
        }
        if (cResult[11] !== stateFromStores2) {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
          cResult[11] = stateFromStores2;
          class O {
            constructor() {
              return closure_1_6.getMessagesPendingRemoval();
            }
          }
          cResult[12] = B;
        } else {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
        }
        class O {
          constructor() {
            return closure_1_6.getMessagesPendingRemoval();
          }
        }
        const scheduledMessagesLimit = tmp(7475).useScheduledMessagesLimit(ScheduledMessagesMobileModal);
        ({ limit, isUpgradable } = scheduledMessagesLimit);
        if (!tmp5[0]) {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
        } else {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
        }
        if (0 !== arr5.length) {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
          const obj3 = {
            data: null,
            renderItem: null,
            contentContainerStyle: null,
            keyExtractor: null,
            onScroll: null,
          };
          class O {
            constructor() {
              return closure_1_6.getMessagesPendingRemoval();
            }
          }
          obj3.renderItem = B;
          obj3.contentContainerStyle = tmp4.cardContainer;
          obj3.keyExtractor = keyExtractor;
          obj3.onScroll = handleScroll;
          const tmp30 = closure_10(tmp(8371).FlashList, obj3);
          cResult[17] = handleScroll;
          cResult[18] = B;
          cResult[19] = arr5;
          cResult[20] = tmp4.cardContainer;
          cResult[21] = tmp30;
        }
        const _Symbol2 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
          tmp2 = closure_10(stateFromStores2(11848), {});
          class O {
            constructor() {
              return closure_1_6.getMessagesPendingRemoval();
            }
          }
          cResult[16] = tmp2;
        } else {
          class B {
            constructor(arg0) {
              item = handleScroll.item;
              obj = { scheduledMessage: item, isPendingRemoval: null };
              tmp = closure_1(closure_2[24]);
              obj.isPendingRemoval = closure_1.has(item.scheduledMessageId);
              return jsx(tmp, obj);
            }
          }
        }
        const tmpResult6 = tmp(7475);
      }
      const tmpResult5 = require("initialize");
    }
  : (handleScroll) => {
      _require = undefined;
      let stateFromStores2;
      const tmp = closure_15();
      [tmp3, c0] = noop.useState(false);
      const effect = noop.useEffect(() => {
        const scheduledMessages = ScheduledMessageActionCreators.fetchScheduledMessages();
        scheduledMessages.then(() => closure_1_0(true));
      }, []);
      let obj = stateFromStores2;
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      items = [ScheduledMessageStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        ScheduledMessageStore.getScheduledMessagesForInbox(),
      );
      const obj2 = require("initialize");
      const items1 = [ScheduledMessageStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ScheduledMessageStore.loading);
      const obj3 = require("initialize");
      const items2 = [ScheduledMessageStore];
      stateFromStores2 = require("initialize").useStateFromStores(items2, () =>
        ScheduledMessageStore.getMessagesPendingRemoval(),
      );
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
        return v65535(ScheduledMessageCardDefault, obj);
      }, items4);
      const obj4 = require("initialize");
      const scheduledMessagesLimit =
        require("ScheduledMessageUtils").useScheduledMessagesLimit(ScheduledMessagesMobileModal);
      const limit = scheduledMessagesLimit.limit;
      let tmp11 = limit > 0;
      if (tmp11) {
        tmp11 = memo.length >= limit;
      }
      if (!tmp3) {
        if (0 === memo.length) {
          const obj6 = { style: tmp.loading, children: closure_10(tmp5(obj[26]).ActivityIndicator, { size: "large" }) };
          return closure_10(View, obj6);
        }
      }
      if (0 === memo.length) {
        obj = {};
        closure_10(stateFromStores(obj[27]), obj);
        const tmp19 = stateFromStores(obj[27]);
      } else {
        const obj7 = { style: tmp.listContainer, children: null };
        const obj8 = {
          data: memo,
          renderItem: callback,
          contentContainerStyle: tmp.cardContainer,
          keyExtractor,
          onScroll: handleScroll.handleScroll,
        };
        obj7.children = closure_10(tmp5(obj[28]).FlashList, obj8);
        const items5 = [closure_10(View, obj7)];
        let tmp22Result = null;
        if (scheduledMessagesLimit.isUpgradable) {
          const obj9 = { isAtLimit: tmp11 };
          tmp22Result = closure_10(closure_20, obj9);
        }
        const obj10 = { children: null };
        items5[1] = tmp22Result;
        obj10.children = items5;
        closure_11(closure_12, obj10);
      }
      const obj5 = require("ScheduledMessageUtils");
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isAtLimit) => {
      const cResult = c.c(9);
      isAtLimit = isAtLimit.isAtLimit;
      const premiumUpsellConfig = PremiumUpsellUtils.usePremiumUpsellConfig(
        ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES,
        useAnalyticsLocationsDefault(items).analyticsLocations,
      );
      ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
      const loading = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES,
        undefined,
        items,
      ).loading;
      if (cResult[0] !== isAtLimit) {
        let premiumTypeDisplayName = PremiumUtils.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
        const tmp4Result = NitroLimitUpsellBarDefault;
        const intl = util.intl;
        const formatToPlainString = intl.formatToPlainString;
        let t = util.t;
        if (isAtLimit) {
          t = { nitroTierName: premiumTypeDisplayName, premiumMax: null };
          premiumTypeDisplayName = premiumMax;
          t.premiumMax = premiumMax;
          let formatToPlainStringResult = formatToPlainString(t["7GgYhg"], t);
        } else {
          const obj3 = { nitroTierName: premiumTypeDisplayName };
          formatToPlainStringResult = formatToPlainString(t.WfTDdG, obj3);
        }
        cResult[0] = isAtLimit;
        cResult[1] = tmp4Result;
        cResult[2] = formatToPlainStringResult;
        const tmpResult = PremiumUtils;
      } else {
        let tmp16 = null;
        if (!loading) {
          tmp16 = tmp7;
        }
        if (cResult[3] === cResult[1]) {
          if (cResult[4] === isAtLimit) {
            if (cResult[5] === loading) {
              if (cResult[6] === tmp9) {
                if (cResult[7] === tmp16) {
                  let tmp17 = cResult[8];
                }
                return tmp17;
              }
            }
          }
        }
        const obj4 = { text: cResult[2], isAtLimit, onPress: tmp16, loading };
        const tmp19 = v65535(cResult[1], obj4);
        cResult[3] = cResult[1];
        cResult[4] = isAtLimit;
        cResult[5] = loading;
        cResult[6] = cResult[2];
        cResult[7] = tmp16;
        cResult[8] = tmp19;
        tmp17 = tmp19;
      }
      const tmp6 = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES,
        undefined,
        items,
      );
    }
  : (isAtLimit) => {
      isAtLimit = isAtLimit.isAtLimit;
      const premiumUpsellConfig = PremiumUpsellUtils.usePremiumUpsellConfig(
        ConstantsIOS.UpsellTypes.SCHEDULED_MESSAGES,
        useAnalyticsLocationsDefault(items).analyticsLocations,
      );
      ({ useTier0UpsellContent, onViewAllPerks } = premiumUpsellConfig);
      ({ loading, onPress } = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES,
        undefined,
        items,
      ));
      const tmp2 = usePremiumFeatureUpsellGetNitroDefault(
        useTier0UpsellContent,
        onViewAllPerks,
        AnalyticsPages.PREMIUM_UPSELL_SCHEDULED_MESSAGES,
        undefined,
        items,
      );
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
      return v65535(NitroLimitUpsellBarDefault, obj5);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = title(576).c(21);
      const tmp4 = closure_15();
      const top = sharedValue(1618)().top;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.SZVs3K);
        cResult[0] = stringResult;
        title = stringResult;
      } else {
        title = cResult[0];
      }
      let obj = title(576);
      sharedValue = title(4612).useSharedValue(0);
      if (cResult[1] !== sharedValue) {
        const fn = function s(nativeEvent) {
          let num = 0;
          if (nativeEvent.nativeEvent.contentOffset.y > 8) {
            num = 1;
          }
          const result = sharedValue.set(spring.withSpring(num));
        };
        cResult[1] = sharedValue;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = title(4612);
      const fn2 = function _() {
        return { opacity: sharedValue.get() };
      };
      fn2.__closure = { borderOpacity: sharedValue };
      fn2.__workletHash = 2142182513871;
      fn2.__initData = __initData;
      const animatedStyle = title(4612).useAnimatedStyle(fn2);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function f() {
          return v65535(HeaderShared.GenericHeaderTitle, { title });
        };
        cResult[3] = fn3;
        let tmp11 = fn3;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== top) {
        let num5 = 0;
        if (!tmpResult5.isIOS()) {
          num5 = top;
        }
        cResult[4] = top;
        cResult[5] = num5;
        let tmp12 = num5;
        tmpResult5 = tmp(1369);
      } else {
        tmp12 = cResult[5];
      }
      const sum = tmp12 + tmp5(587).space.PX_8;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const headerCloseButton = tmp(6010).getHeaderCloseButton(tmp5(5093).pop);
        cResult[6] = headerCloseButton;
        let tmp14 = headerCloseButton;
        const tmpResult6 = tmp(6010);
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp4.headerLeftContainer) {
        if (cResult[8] === tmp4.headerRightContainer) {
          if (cResult[9] === sum) {
            let tmp16 = cResult[10];
          }
          if (cResult[11] === animatedStyle) {
            if (cResult[12] === tmp4.headerBorder) {
              let tmp18 = cResult[13];
            }
            if (cResult[14] !== tmp9) {
              const obj2 = { handleScroll: tmp9 };
              const tmp24 = closure_10(closure_19, obj2);
              cResult[14] = tmp9;
              cResult[15] = tmp24;
              let tmp21 = tmp24;
            } else {
              tmp21 = cResult[15];
            }
            if (cResult[16] === tmp4.modal) {
              if (cResult[17] === tmp16) {
                if (cResult[18] === tmp18) {
                  if (cResult[19] === tmp21) {
                    let tmp25 = cResult[20];
                  }
                  return tmp25;
                }
              }
            }
            const obj3 = { style: tmp4.modal, children: null };
            items = [tmp16, tmp18, tmp21];
            obj3.children = items;
            const tmp28 = closure_11(View, obj3);
            cResult[16] = tmp4.modal;
            cResult[17] = tmp16;
            cResult[18] = tmp18;
            cResult[19] = tmp21;
            cResult[20] = tmp28;
            tmp25 = tmp28;
          }
          const obj4 = { style: null };
          const items1 = [tmp4.headerBorder, animatedStyle];
          obj4.style = items1;
          const tmp20 = closure_10(tmp5(4612).View, obj4);
          cResult[11] = animatedStyle;
          cResult[12] = tmp4.headerBorder;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const tmp17 = closure_10(title(6019).Header, {
        title,
        headerTitle: tmp11,
        headerTitleAlign: "center",
        headerStatusBarHeight: sum,
        headerLeft: tmp14,
        headerLeftContainerStyle: tmp4.headerLeftContainer,
        headerRightContainerStyle: tmp4.headerRightContainer,
      });
      cResult[7] = tmp4.headerLeftContainer;
      cResult[8] = tmp4.headerRightContainer;
      cResult[9] = sum;
      cResult[10] = tmp17;
      tmp16 = tmp17;
      const obj5 = {
        title,
        headerTitle: tmp11,
        headerTitleAlign: "center",
        headerStatusBarHeight: sum,
        headerLeft: tmp14,
        headerLeftContainerStyle: tmp4.headerLeftContainer,
        headerRightContainerStyle: tmp4.headerRightContainer,
      };
      const tmpResult4 = title(4612);
    }
  : () => {
      const tmp = closure_15();
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
      fn.__workletHash = 17093474325708;
      fn.__initData = __initData2;
      const obj3 = { style: tmp.modal, children: null };
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
      const obj6 = {
        title: stringResult,
        headerTitle() {
          return v65535(HeaderShared.GenericHeaderTitle, { title: stringResult });
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: null,
        headerLeft: null,
        headerLeftContainerStyle: null,
        headerRightContainerStyle: null,
      };
      let num = 0;
      if (!obj5.isIOS()) {
        num = sharedValue(1618)().top;
      }
      obj6.headerStatusBarHeight = num + sharedValue(587).space.PX_8;
      obj5 = PlatformUtils;
      obj6.headerLeft = NavigatorHeader.getHeaderCloseButton(sharedValue(5093).pop);
      ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } =
        tmp);
      const items1 = [closure_10(_mod6019.Header, obj6), ,];
      const obj7 = { style: null };
      const items2 = [tmp.headerBorder, animatedStyle];
      obj7.style = items2;
      items1[1] = closure_10(sharedValue(4612).View, obj7);
      items1[2] = closure_10(closure_19, { handleScroll: callback });
      obj3.children = items1;
      return closure_11(View, obj3);
    };
