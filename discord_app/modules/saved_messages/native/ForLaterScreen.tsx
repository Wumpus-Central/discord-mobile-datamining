// === Module 13176: keyExtractor ===

// Module 13176 (keyExtractor)
import ThemesDefault from "Themes" /* 709 */;
import _modDef4217 from "module_4217" /* 4217 */;
import getSavedMessagesForTypeDefault from "getSavedMessagesForType" /* 13177 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getTimeSafe" /* 11471 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  type = type.type;
  let first;
  importDefault = undefined;
  const tmp = callback4();
  const arr = getSavedMessagesForTypeDefault(type);
  const tmp5 = type === first(7615).SavedMessageSortTypes.REMINDER;
  let obj = first(7610);
  const forLaterLimit = obj.useForLaterLimit(ForLaterScreen, tmp5);
  obj1 = first(7610);
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
  const items = [closure_6];
  const stateFromStores = first(586).useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  let tmp2Result = tmp2(5962);
  const analyticsLocations = tmp2Result(tmp2(5982).FOR_LATER_POPOUT).analyticsLocations;
  obj = { type: null, name: null, properties: null };
  tmp2Result = tmp2(8911);
  obj[0] = first(500).ImpressionTypes.MODAL;
  obj[1] = first(500).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj = { tab_type: type, total_count: arr.length, overdue_count: stateFromStores, nitro_upsell_bar_shown: null, nitro_roadblock_upsell_bar_shown: null };
  let tmp13 = tmp9;
  if (tmp9) {
    tmp13 = !tmp8;
  }
  obj[3] = tmp13;
  let tmp14 = tmp9;
  if (tmp9) {
    tmp14 = tmp8;
  }
  obj[4] = tmp14;
  obj[2] = obj;
  const items1 = [arr.length, stateFromStores, tmp9, tmp8];
  tmp2Result(obj, {}, items1);
  const tmp4Result = first(586);
  const tmp17 = callback(importAllResult.useState(new Date()), 2);
  first = tmp17[0];
  importDefault = tmp17[1];
  const effect = importAllResult.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), callback(closure_1_2[17]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = first;
  if (0 === arr.length) {
    obj1 = { value: null, children: null };
    obj1[0] = analyticsLocations;
    const obj2 = { type: null };
    obj2[0] = type;
    obj1[1] = callback2(tmp2(13185), obj2);
    let tmp24Result = callback2(tmp4(5962).AnalyticsLocationProvider, obj1);
  } else {
    const obj3 = { value: null, children: null };
    obj3[0] = analyticsLocations;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.listContainer;
    const obj5 = { data: null, renderItem: null, contentContainerStyle: null, keyExtractor: null, onScroll: null };
    obj5[0] = arr;
    obj5[1] = tmp20;
    obj5[2] = tmp.cardContainer;
    obj5[3] = keyExtractor;
    obj5[4] = type.handleScroll;
    obj4[1] = callback2(tmp4(8116).FlashList, obj5);
    const items2 = [callback2(View, obj4), ];
    let tmp25Result = null;
    if (tmp9) {
      const obj6 = { isReminder: null, isAtLimit: null };
      obj6[0] = tmp5;
      obj6[1] = tmp8;
      tmp25Result = tmp25(tmp2(13189), obj6);
    }
    items2[1] = tmp25Result;
    obj3[1] = items2;
    tmp24Result = closure_8(tmp4(5962).AnalyticsLocationProvider, obj3);
    const tmp24 = closure_8;
    tmp25 = callback2;
  }
  return tmp24Result;
}
let c4 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
const ForLaterScreen = "ForLaterScreen";
let obj = { container: null, headerBorder: null, cardContainer: null, listContainer: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj[0] = obj;
createCacheKey = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[1] = createCacheKey;
obj[2] = { paddingHorizontal: 16, paddingVertical: 8 };
obj[3] = { flex: 1 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((type) => {
  let sharedValue;
  const tmp = callback4();
  let obj = sharedValue(4217);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(sharedValue(closure_1_2[8]).withSpring(num));
  }, items);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = closure_11;
  obj = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4217).useAnimatedStyle(fn);
  const items1 = [tmp.headerBorder, animatedStyle];
  const items2 = [callback2(_modDef4217.View, { style: items1 }), callback2(ForLaterPage, { type: type.type, handleScroll: callback })];
  obj[1] = items2;
  return callback3(View, obj);
});
let result = require("set").fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;