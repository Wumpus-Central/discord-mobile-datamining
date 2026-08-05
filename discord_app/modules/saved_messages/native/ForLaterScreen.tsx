// discord_app/modules/saved_messages/native/ForLaterScreen.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "ForLaterNitroUpsellBar";
import { View } from "IntroDemo";
import getTimeSafe from "getTimeSafe";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
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
  const arr = require("../useSavedMessagesForPage.tsx")(type);
  const tmp5 = type === first(8192).SavedMessageSortTypes.REMINDER;
  let obj = first(8186);
  const forLaterLimit = obj.useForLaterLimit(ForLaterScreen, tmp5);
  let obj1 = first(8186);
  let isForLaterLimitUpgradable = obj1.useIsForLaterLimitUpgradable(ForLaterScreen);
  if (isForLaterLimitUpgradable) {
    isForLaterLimitUpgradable = forLaterLimit > 0;
  }
  if (isForLaterLimitUpgradable) {
    isForLaterLimitUpgradable = arr.length >= forLaterLimit;
  }
  const items = [getTimeSafe];
  const stateFromStores = first(589).useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  obj = { type: null, name: null, properties: null };
  const tmp4Result = first(589);
  obj[0] = first(503).ImpressionTypes.MODAL;
  obj[1] = first(503).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj[2] = { total_count: arr.length, overdue_count: stateFromStores };
  const items1 = [arr.length, stateFromStores];
  require("../../app_analytics/useTrackImpression.tsx")(obj, {}, items1);
  const tmp2Result = require("../../app_analytics/useTrackImpression.tsx");
  const tmp12 = callback(importAllResult.useState(new Date()), 2);
  first = tmp12[0];
  importDefault = tmp12[1];
  const effect = importAllResult.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), callback(outer1_2[15]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = first;
  if (0 === arr.length) {
    obj = { type: null };
    obj[0] = type;
    let tmp19Result = callback2(tmp2(12475), obj);
  } else {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.listContainer;
    const obj2 = { data: null, renderItem: null, contentContainerStyle: null, keyExtractor: null, onScroll: null };
    obj2[0] = arr;
    obj2[1] = tmp15;
    obj2[2] = tmp.cardContainer;
    obj2[3] = keyExtractor;
    obj2[4] = type.handleScroll;
    obj1[1] = callback2(tmp4(7666).FlashList, obj2);
    const items2 = [callback2(View, obj1), ];
    let tmp21Result = null;
    if (isForLaterLimitUpgradable) {
      const obj3 = { isReminder: null };
      obj3[0] = tmp5;
      tmp21Result = tmp21(tmp2(12478), obj3);
    }
    const obj4 = { children: null };
    items2[1] = tmp21Result;
    obj4[0] = items2;
    tmp19Result = closure_8(closure_9, obj4);
    const tmp19 = closure_8;
    const tmp20 = closure_9;
    tmp21 = callback2;
  }
  return tmp19Result;
}
let c4 = importAllResult;
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
const ForLaterScreen = "ForLaterScreen";
let obj = { container: null, headerBorder: null, cardContainer: null, listContainer: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj[0] = obj;
createCacheKey = { height: 1, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[1] = createCacheKey;
obj[2] = { paddingHorizontal: 16, paddingVertical: 8 };
obj[3] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((type) => {
  let sharedValue;
  const tmp = callback4();
  let obj = sharedValue(4146);
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
  fn.__initData = closure_12;
  obj = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4146).useAnimatedStyle(fn);
  const items1 = [tmp.headerBorder, animatedStyle];
  const items2 = [callback2(require("../../reanimated/ReanimatedRexport.tsx").View, { style: items1 }), callback2(ForLaterPage, { type: type.type, handleScroll: callback })];
  obj[1] = items2;
  return callback3(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;