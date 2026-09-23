// discord_app/modules/saved_messages/native/ForLaterScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import useTrackImpressionDefault from "../../app_analytics/useTrackImpression.tsx";
import useSavedMessagesForPageDefault from "../useSavedMessagesForPage.tsx";
import ForLaterMessageCardDefault from "ForLaterMessageCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SavedMessagesStore from "../SavedMessagesStore.tsx";

require = fn;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  type = type.type;
  throttledNow = undefined;
  importDefault = undefined;
  const tmp = closure_10();
  const arr = useSavedMessagesForPageDefault(type);
  const tmp5 = type === throttledNow(8189).SavedMessageSortTypes.REMINDER;
  const forLaterLimit = throttledNow(8183).useForLaterLimit(ForLaterScreen, tmp5);
  const obj = throttledNow(8183);
  const isForLaterLimitUpgradable = throttledNow(8183).useIsForLaterLimitUpgradable(ForLaterScreen);
  let tmp8 = isForLaterLimitUpgradable;
  if (isForLaterLimitUpgradable) {
    tmp8 = forLaterLimit > 0;
  }
  if (tmp8) {
    tmp8 = arr.length >= forLaterLimit;
  }
  let tmp9 = isForLaterLimitUpgradable;
  if (isForLaterLimitUpgradable) {
    tmp9 = arr.length > 0;
  }
  const obj2 = throttledNow(8183);
  const items = [SavedMessagesStore];
  const stateFromStores = throttledNow(504).useStateFromStores(items, () =>
    overdueMessageReminderCount.getOverdueMessageReminderCount(),
  );
  const tmp4Result = throttledNow(504);
  const analyticsLocations = useAnalyticsLocationsDefault(tmp2(7513).FOR_LATER_POPOUT).analyticsLocations;
  const obj3 = { type: null, name: null, properties: null };
  const tmp2Result = useAnalyticsLocationsDefault;
  obj3.type = throttledNow(1249).ImpressionTypes.MODAL;
  obj3.name = throttledNow(1249).ImpressionNames.FOR_LATER_LIST_VIEWED;
  const obj4 = {
    tab_type: type,
    total_count: arr.length,
    overdue_count: stateFromStores,
    nitro_upsell_bar_shown: null,
    nitro_roadblock_upsell_bar_shown: null,
  };
  let tmp13 = tmp9;
  if (tmp9) {
    tmp13 = !tmp8;
  }
  obj4.nitro_upsell_bar_shown = tmp13;
  let tmp14 = tmp9;
  if (tmp9) {
    tmp14 = tmp8;
  }
  obj4.nitro_roadblock_upsell_bar_shown = tmp14;
  obj3.properties = obj4;
  const items1 = [arr.length, stateFromStores, tmp9, tmp8];
  useTrackImpressionDefault(obj3, {}, items1);
  const tmp2Result2 = useTrackImpressionDefault;
  [throttledNow, importDefault] = noop.useState(new Date());
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[17]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === arr.length) {
    const obj5 = { value: analyticsLocations, children: null };
    const obj6 = { type };
    obj5.children = closure_7(tmp2(13689), obj6);
    let tmp24Result = closure_7(tmp4(7493).AnalyticsLocationProvider, obj5);
  } else {
    const obj7 = { value: analyticsLocations, children: null };
    const obj8 = { style: tmp.listContainer, children: null };
    const obj9 = {
      data: arr,
      renderItem: tmp20,
      contentContainerStyle: tmp.cardContainer,
      keyExtractor,
      onScroll: type.handleScroll,
    };
    obj8.children = closure_7(tmp4(9073).FlashList, obj9);
    const items2 = [closure_7(View, obj8)];
    let tmp25Result = null;
    if (tmp9) {
      const obj10 = { isReminder: tmp5, isAtLimit: tmp8 };
      tmp25Result = closure_7(tmp2(13693), obj10);
    }
    items2[1] = tmp25Result;
    obj7.children = items2;
    tmp24Result = closure_8(tmp4(7493).AnalyticsLocationProvider, obj7);
  }
  return tmp24Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ForLaterScreen = "ForLaterScreen";
const createStyles = fn(4827);
let obj = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 },
  headerBorder: null,
  cardContainer: null,
  listContainer: null,
};
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo((type) => {
  let sharedValue;
  const tmp = closure_10();
  sharedValue = sharedValue(4559).useSharedValue(0);
  const items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  let obj = sharedValue(4559);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = __initData;
  const obj3 = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4559).useAnimatedStyle(fn);
  const obj4 = { style: null };
  const items1 = [tmp.headerBorder, animatedStyle];
  obj4.style = items1;
  const items2 = [
    closure_7(ReanimatedRexportDefault.View, obj4),
    closure_7(ForLaterPage, { type: type.type, handleScroll: callback }),
  ];
  obj3.children = items2;
  return closure_8(View, obj3);
});
