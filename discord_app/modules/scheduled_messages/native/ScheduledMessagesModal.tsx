// === Module 11574: keyExtractor ===

// Module 11574 (keyExtractor)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _mod4120 from "module_4120" /* 4120 */;
import HeaderBackImage from "HeaderBackImage" /* 5376 */;
import Background from "Background" /* 5383 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "reset" /* 11575 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

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
    const scheduledMessages = _undefined(stateFromStores2[16]).fetchScheduledMessages();
    scheduledMessages.then(() => callback(true));
  }, []);
  let obj = stateFromStores2;
  obj1 = _require(stateFromStores2[17]);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => store.getScheduledMessagesForInbox());
  const tmp2 = callback(React.useState(false), 2);
  const items1 = [closure_6];
  const stateFromStores1 = _require(stateFromStores2[17]).useStateFromStores(items1, () => store.loading);
  const obj3 = _require(stateFromStores2[17]);
  const items2 = [closure_6];
  stateFromStores2 = _require(stateFromStores2[17]).useStateFromStores(items2, () => store.getMessagesPendingDeletion());
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
    const obj = { scheduledMessage: item, isPendingDeletion: stateFromStores2.has(item.scheduledMessageId) };
    return closure_1_7(stateFromStores(stateFromStores2[18]), obj);
  }, items4);
  if (!tmp3) {
    if (0 === memo.length) {
      obj = { style: null, children: null };
      obj[0] = tmp.loading;
      obj[1] = callback2(tmp5(obj[19]).ActivityIndicator, { size: "large" });
      return callback2(View, obj);
    }
  }
  if (0 === memo.length) {
    obj = {};
    callback2(stateFromStores(obj[20]), obj);
    const tmp18 = stateFromStores(obj[20]);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.listContainer;
    obj1 = { data: null, renderItem: null, contentContainerStyle: null, keyExtractor: null, onScroll: null };
    obj1[0] = memo;
    obj1[1] = callback;
    obj1[2] = tmp.cardContainer;
    obj1[3] = keyExtractor;
    obj1[4] = handleScroll.handleScroll;
    obj[1] = callback2(tmp5(obj[21]).FlashList, obj1);
    callback2(View, obj);
  }
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
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
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function ScheduledMessagesModalTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}" };
let obj3 = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesModal.tsx");

export default function ScheduledMessagesModal() {
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.SZVs3K);
  require = stringResult;
  let obj = _mod4120;
  const sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  const callback = React.useCallback((nativeEvent) => {
    let num = 0;
    if (nativeEvent.nativeEvent.contentOffset.y > 8) {
      num = 1;
    }
    const result = sharedValue.set(stringResult(closure_1_2[10]).withSpring(num));
  }, items);
  const fn = function t() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { borderOpacity: sharedValue };
  fn.__workletHash = 2142182513871;
  fn.__initData = closure_10;
  obj = { style: tmp.modal, children: null };
  const animatedStyle = _mod4120.useAnimatedStyle(fn);
  obj = {
    title: stringResult,
    headerTitle() {
      return closure_1_7(stringResult(closure_1_2[12]).GenericHeaderTitle, { title: closure_0 });
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const obj2 = _mod4120;
  const tmp10 = View;
  const tmp4 = require;
  const tmp9 = closure_8;
  let num = 0;
  if (!obj5.isIOS()) {
    num = sharedValue(1629)().top;
  }
  obj[3] = num + sharedValue(712).space.PX_8;
  obj5 = set;
  obj[4] = HeaderBackImage.getHeaderCloseButton(sharedValue(4611).pop);
  ({ headerLeftContainer: obj4[5], headerRightContainer: obj4[6] } = tmp);
  const items1 = [closure_7(Background.Header, obj), , ];
  const items2 = [tmp.headerBorder, animatedStyle];
  items1[1] = closure_7(sharedValue(4120).View, { style: items2 });
  items1[2] = closure_7(ScheduledMessagesPage, { handleScroll: callback });
  obj[1] = items1;
  return tmp9(tmp10, obj);
};