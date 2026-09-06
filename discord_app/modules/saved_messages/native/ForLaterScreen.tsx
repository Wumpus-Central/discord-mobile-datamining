// discord_app/modules/saved_messages/native/ForLaterScreen.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
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
  let throttledNow;
  importDefault = undefined;
  const tmp = closure_10();
  const arr = useSavedMessagesForPageDefault(type);
  const tmp5 = type === throttledNow(7860).SavedMessageSortTypes.REMINDER;
  let obj = throttledNow(7855);
  const forLaterLimit = obj.useForLaterLimit(ForLaterScreen, tmp5);
  let obj1 = throttledNow(7855);
  const isForLaterLimitUpgradable = obj1.useIsForLaterLimitUpgradable(ForLaterScreen);
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
  const items = [SavedMessagesStore];
  const stateFromStores = throttledNow(504).useStateFromStores(items, () =>
    overdueMessageReminderCount.getOverdueMessageReminderCount(),
  );
  let tmp2Result = tmp2(7162);
  const analyticsLocations = tmp2Result(tmp2(7182).FOR_LATER_POPOUT).analyticsLocations;
  obj = { type: null, name: null, properties: null };
  tmp2Result = tmp2(8768);
  obj.type = throttledNow(1250).ImpressionTypes.MODAL;
  obj.name = throttledNow(1250).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj = {
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
  obj.nitro_upsell_bar_shown = tmp13;
  let tmp14 = tmp9;
  if (tmp9) {
    tmp14 = tmp8;
  }
  obj.nitro_roadblock_upsell_bar_shown = tmp14;
  obj.properties = obj;
  const items1 = [arr.length, stateFromStores, tmp9, tmp8];
  tmp2Result(obj, {}, items1);
  const tmp4Result = throttledNow(504);
  const tmp17 = _slicedToArray(noop.useState(new Date()), 2);
  throttledNow = tmp17[0];
  importDefault = tmp17[1];
  const effect = noop.useEffect(() => {
    const interval = setInterval(() => closure_1_1(new Date()), closure_1(dependencyMap[17]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = throttledNow;
  if (0 === arr.length) {
    obj1 = { value: analyticsLocations, children: null };
    const obj2 = { type };
    obj1.children = closure_7(tmp2(13290), obj2);
    let tmp24Result = closure_7(tmp4(7162).AnalyticsLocationProvider, obj1);
  } else {
    const obj3 = { value: analyticsLocations, children: null };
    const obj4 = { style: tmp.listContainer, children: null };
    const obj5 = {
      data: arr,
      renderItem: tmp20,
      contentContainerStyle: tmp.cardContainer,
      keyExtractor,
      onScroll: type.handleScroll,
    };
    obj4.children = closure_7(tmp4(8874).FlashList, obj5);
    const items2 = [closure_7(View, obj4)];
    let tmp25Result = null;
    if (tmp9) {
      const obj6 = { isReminder: tmp5, isAtLimit: tmp8 };
      tmp25Result = closure_7(tmp2(13294), obj6);
    }
    items2[1] = tmp25Result;
    obj3.children = items2;
    tmp24Result = closure_8(tmp4(7162).AnalyticsLocationProvider, obj3);
  }
  return tmp24Result;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ForLaterScreen = "ForLaterScreen";
const createStyles = fn(4560);
let obj = { container: null, headerBorder: null, cardContainer: null, listContainer: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj.container = obj;
let size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerBorder = size;
obj.cardContainer = { paddingHorizontal: 16, paddingVertical: 8 };
obj.listContainer = { flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default noop.memo((type) => {
  let sharedValue;
  const tmp = closure_10();
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = noop.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(spring.withSpring(num));
  }, items);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = __initData;
  obj = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4296).useAnimatedStyle(fn);
  obj = { style: null };
  const items1 = [tmp.headerBorder, animatedStyle];
  obj.style = items1;
  const items2 = [
    closure_7(ReanimatedRexportDefault.View, obj),
    closure_7(ForLaterPage, { type: type.type, handleScroll: callback }),
  ];
  obj.children = items2;
  return closure_8(View, obj);
});
