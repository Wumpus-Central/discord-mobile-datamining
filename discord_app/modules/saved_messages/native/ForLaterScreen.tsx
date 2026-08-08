// discord_app/modules/saved_messages/native/ForLaterScreen.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "IntroDemo";
import { View } from "set";
import getTimeSafe from "getTimeSafe";
import jsxProd from "ForLaterNitroUpsellBar";
import createCacheKey from "createCacheKey";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";
import { getSavedMessagesForType } from "../useSavedMessagesForPage.tsx";

let error;
let metroImportAll;
const require = arg1;
function keyExtractor(saveData) {
  return saveData.saveData.messageId;
}
function ForLaterPage(type) {
  type = type.type;
  let first;
  let importDefault;
  const tmp = callback4();
  const arr = getSavedMessagesForType(type);
  const tmp5 = type === first(8381).SavedMessageSortTypes.REMINDER;
  let obj = first(8375);
  const forLaterLimit = obj.useForLaterLimit(ForLaterScreen, tmp5);
  let obj1 = first(8375);
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
  const items = [getTimeSafe];
  const stateFromStores = first(589).useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  let tmp2Result = tmp2(5728);
  const analyticsLocations = tmp2Result(tmp2(5748).FOR_LATER_POPOUT).analyticsLocations;
  obj = { type: null, name: null, properties: null };
  tmp2Result = tmp2(9349);
  obj[0] = first(503).ImpressionTypes.MODAL;
  obj[1] = first(503).ImpressionNames.FOR_LATER_LIST_VIEWED;
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
  const tmp4Result = first(589);
  const tmp17 = callback(importAllResult.useState(new Date()), 2);
  first = tmp17[0];
  importDefault = tmp17[1];
  const effect = importAllResult.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), callback(outer1_2[17]).Millis.MINUTE);
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
    obj1[1] = callback2(tmp2(12569), obj2);
    let tmp24Result = callback2(tmp4(5728).AnalyticsLocationProvider, obj1);
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
    obj4[1] = callback2(tmp4(7745).FlashList, obj5);
    const items2 = [callback2(View, obj4), ];
    let tmp25Result = null;
    if (tmp9) {
      const obj6 = { isReminder: null, isAtLimit: null };
      obj6[0] = tmp5;
      obj6[1] = tmp8;
      tmp25Result = tmp25(tmp2(12572), obj6);
    }
    items2[1] = tmp25Result;
    obj3[1] = items2;
    tmp24Result = closure_8(tmp4(5728).AnalyticsLocationProvider, obj3);
    const tmp24 = closure_8;
    tmp25 = callback2;
  }
  return tmp24Result;
}
let c4 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
const ForLaterScreen = "ForLaterScreen";
let obj = { container: null, headerBorder: null, cardContainer: null, listContainer: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj[0] = obj;
createCacheKey = { height: 1, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[1] = createCacheKey;
obj[2] = { paddingHorizontal: 16, paddingVertical: 8 };
obj[3] = { flex: 1 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_11 = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((type) => {
  let sharedValue;
  const tmp = callback4();
  let obj = sharedValue(4036);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = importAllResult.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(sharedValue(outer1_2[8]).withSpring(num));
  }, items);
  const fn = function s() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 16693192032676;
  fn.__initData = closure_11;
  obj = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4036).useAnimatedStyle(fn);
  const items1 = [tmp.headerBorder, animatedStyle];
  const items2 = [callback2(ReanimatedRexport.View, { style: items1 }), callback2(ForLaterPage, { type: type.type, handleScroll: callback })];
  obj[1] = items2;
  return callback3(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;