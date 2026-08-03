// === Module 10094: keyExtractor ===

// Module 10094 (keyExtractor)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "set";
import getTimeSafe from "getTimeSafe";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

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
  const arr = importDefault(10095)(type);
  let obj = first(589);
  const items = [getTimeSafe];
  const stateFromStores = obj.useStateFromStores(items, () => overdueMessageReminderCount.getOverdueMessageReminderCount());
  obj = { type: null, name: null, properties: null };
  const tmp = callback4();
  obj[0] = first(503).ImpressionTypes.MODAL;
  obj[1] = first(503).ImpressionNames.FOR_LATER_LIST_VIEWED;
  obj[2] = { total_count: arr.length, overdue_count: stateFromStores };
  const items1 = [arr.length, stateFromStores];
  importDefault(8741)(obj, {}, items1);
  const tmp5 = importDefault(8741);
  const tmp8 = callback(importAllResult.useState(new Date()), 2);
  first = tmp8[0];
  importDefault = tmp8[1];
  const effect = importAllResult.useEffect(() => {
    const interval = setInterval(() => callback(new Date()), callback(outer1_2[13]).Millis.MINUTE);
    return () => {
      clearInterval(closure_0);
    };
  }, []);
  [][0] = first;
  if (0 === arr.length) {
    obj = { type: null };
    obj[0] = type;
    let tmp14 = callback2(tmp3(10109).ForLaterEmptyState, obj);
  } else {
    const obj1 = { data: null, renderItem: null, contentContainerStyle: null, keyExtractor: null, onScroll: null };
    obj1[0] = arr;
    obj1[1] = tmp11;
    obj1[2] = tmp.cardContainer;
    obj1[3] = keyExtractor;
    obj1[4] = type.handleScroll;
    tmp14 = callback2(tmp3(7654).FlashList, obj1);
  }
  return tmp14;
}
let c4 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let obj = { container: null, headerBorder: null, cardContainer: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, flexGrow: 1 };
obj[0] = obj;
createCacheKey = { height: 1, width: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[1] = createCacheKey;
obj[2] = { paddingHorizontal: 16, paddingVertical: 8 };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function ForLaterScreenTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
const memoResult = importAllResult.memo((type) => {
  let sharedValue;
  const tmp = callback4();
  let obj = sharedValue(4116);
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
  fn.__initData = closure_10;
  obj = { style: tmp.container, children: null };
  const animatedStyle = sharedValue(4116).useAnimatedStyle(fn);
  const items1 = [tmp.headerBorder, animatedStyle];
  const items2 = [callback2(importDefault(4116).View, { style: items1 }), callback2(ForLaterPage, { type: type.type, handleScroll: callback })];
  obj[1] = items2;
  return callback3(View, obj);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/saved_messages/native/ForLaterScreen.tsx");

export default memoResult;