import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";
import { LocationText } from "MessageNotificationHeader.tsx";
// discord_app/modules/in_app_notifications/native/NotificationContent.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function DragHandle(onAccessibilityExpand) {
  onAccessibilityExpand = onAccessibilityExpand.onAccessibilityExpand;
  let sharedValue;
  let sharedValue1;
  let first;
  let callback;
  let first1;
  let c5;
  let tmp = createCacheKey();
  let obj = sharedValue(first[6]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let obj1 = sharedValue(first[7]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = sharedValue(first[7]);
  sharedValue1 = obj2.useSharedValue(0);
  let obj3 = first1;
  const tmp8 = callback(first1.useState(0), 2);
  first = tmp8[0];
  callback = tmp8[1];
  first1 = callback(first1.useState(() => Date.now()), 1)[0];
  let items = [first1];
  const memo = first1.useMemo(() => {
    const expandNUXState = sharedValue(first[8]).getExpandNUXState();
    if (expandNUXState.numTimesShown >= sharedValue(first[8]).MAX_TIMES_SHOWN) {
      return false;
    } else {
      const diff = first1 - expandNUXState.lastShownAtMs;
      return diff >= tmp(tmp2[8]).ONE_DAY_MS;
    }
    const obj = sharedValue(first[8]);
    tmp = sharedValue;
    tmp2 = first;
  }, items);
  let obj4 = sharedValue(first[9]);
  if (memo) {
    const items1 = [tmp2(tmp3[10]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX];
    let items2 = items1;
  } else {
    items2 = [];
  }
  const tmp12 = callback(obj4.useSelectedDismissibleContent(items2, undefined, true), 1)[0] === sharedValue(first[10]).DismissibleContent.IN_APP_NOTIFICATION_EXPAND_NUX;
  c5 = tmp12;
  callback = obj3.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    callback((arg0) => {
      let tmp = height;
      if (arg0 === height) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  let tmp2Result = tmp2(tmp3[7]);
  const fn = function c() {
    const obj = { opacity: sharedValue1.get(), height: null };
    const items = [0, first];
    obj[1] = sharedValue(first[7]).interpolate(sharedValue1.get(), [0, 1], items);
    return obj;
  };
  obj = { textRevealProgress: sharedValue1, interpolate: tmp2(tmp3[7]).interpolate, textHeight: first };
  fn.__closure = obj;
  fn.__workletHash = 11744264899632;
  fn.__initData = closure_12;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  tmp2Result = tmp2(tmp3[7]);
  class A {
    constructor() {
      obj = { transform: null };
      obj = { translateY: c0.get() };
      items = [];
      items[0] = obj;
      obj[0] = items;
      return obj;
    }
  }
  A.__closure = { dragHandleBounceProgress: sharedValue };
  A.__workletHash = 16018166575562;
  A.__initData = closure_13;
  const items3 = [tmp12, sharedValue1, sharedValue];
  const animatedStyle1 = tmp2Result.useAnimatedStyle(A);
  const effect = obj3.useEffect(() => {
    if (c5) {
      let obj = sharedValue(first[8]);
      const result = obj.markExpandNUXStateAsShown();
      const obj2 = sharedValue(first[7]);
      obj = { duration: null };
      obj[0] = sharedValue(first[8]).NUX_REVEAL_DURATION_MS;
      const result1 = sharedValue1.set(obj2.withDelay(sharedValue(first[8]).NUX_REVEAL_DELAY_MS, sharedValue(first[11]).withTiming(1, obj)));
      const obj3 = sharedValue(first[11]);
      const sum = sharedValue(first[8]).NUX_REVEAL_DELAY_MS + sharedValue(first[8]).NUX_REVEAL_DURATION_MS;
      const obj5 = sharedValue(first[7]);
      const obj6 = sharedValue(first[7]);
      obj = { duration: null };
      obj[0] = sharedValue(first[8]).DRAG_HANDLE_BOUNCE_DURATION_MS;
      const result2 = sharedValue.set(obj5.withDelay(sum, obj6.withRepeat(sharedValue(first[11]).withTiming(sharedValue(first[8]).DRAG_HANDLE_BOUNCE_DISTANCE, obj), -1, true)));
      return () => {
        outer1_0(outer1_2[7]).cancelAnimation(closure_1);
        const obj = outer1_0(outer1_2[7]);
        outer1_0(outer1_2[7]).cancelAnimation(closure_0);
      };
    }
  }, items3);
  if (tmp12) {
    obj = { children: null };
    obj1 = { style: null, children: null };
    const items4 = [tmp.dragHandleTextContainer, animatedStyle];
    obj1[0] = items4;
    obj2 = { onLayout: null, variant: "text-xs/normal", color: "text-subtle", style: null, children: null };
    obj2[0] = callback;
    obj2[3] = tmp.dragHandleText;
    const intl = tmp2(tmp3[13]).intl;
    obj2[4] = intl.string(tmp2(tmp3[13]).t["vos6/N"]);
    obj1[1] = callback2(tmp2(tmp3[12]).Text, obj2);
    const items5 = [callback2(sharedValue1(tmp3[7]).View, obj1), ];
    obj3 = { style: null };
    const items6 = [tmp.dragHandle, animatedStyle1];
    obj3[0] = items6;
    items5[1] = callback2(sharedValue1(tmp3[7]).View, obj3);
    obj[0] = items5;
    let tmp19 = callback3(closure_8, obj);
    let tmp17 = callback2;
  } else {
    tmp17 = callback2;
    obj4 = { style: null };
    obj4[0] = tmp.dragHandle;
    tmp19 = callback2(closure_6, obj4);
  }
  let tmp17Result = tmp19;
  if (isScreenReaderEnabled) {
    tmp17Result = tmp19;
    if (null != onAccessibilityExpand) {
      let obj5 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
      obj5[0] = onAccessibilityExpand;
      const intl2 = tmp2(tmp3[13]).intl;
      obj5[2] = intl2.string(tmp2(tmp3[13]).t["PbxI/x"]);
      obj5[3] = tmp19;
      tmp17Result = tmp17(c5, obj5);
    }
  }
  return tmp17Result;
}
({ Pressable: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { dragHandleTextContainer: { overflow: "hidden" }, dragHandleText: null, dragHandle: null };
createCacheKey = { position: "absolute", left: 0, right: 0, textAlign: "center", paddingBottom: require("Themes").space.PX_4 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 32, height: 4, alignSelf: "center", backgroundColor: require("Themes").colors.BACKGROUND_ACCENT, borderRadius: require("Themes").radii.xs, marginBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { body: { flex: 1 }, iconContainer: null, contentContainer: null, contentContainerExpanded: null, headerContainer: null, labelContainer: null };
let obj1 = { width: 32, height: 4, alignSelf: "center", backgroundColor: require("Themes").colors.BACKGROUND_ACCENT, borderRadius: require("Themes").radii.xs, marginBottom: require("Themes").space.PX_8 };
obj2[1] = { marginRight: require("Themes").space.PX_8 };
createCacheKey = { padding: require("Themes").space.PX_12, flexDirection: "row" };
obj2[2] = createCacheKey;
let obj3 = { marginRight: require("Themes").space.PX_8 };
obj2[3] = { padding: require("Themes").space.PX_12, paddingBottom: 0, flexDirection: "row" };
obj2[4] = { flex: 1 };
obj2[5] = { flexDirection: "row", alignItems: "center" };
let closure_11 = createCacheKey.createStyles(obj2);
let closure_12 = { code: "function NotificationContentTsx1(){const{textRevealProgress,interpolate,textHeight}=this.__closure;return{opacity:textRevealProgress.get(),height:interpolate(textRevealProgress.get(),[0,1],[0,textHeight])};}" };
let closure_13 = { code: "function NotificationContentTsx2(){const{dragHandleBounceProgress}=this.__closure;return{transform:[{translateY:dragHandleBounceProgress.get()}]};}" };
let obj5 = { padding: require("Themes").space.PX_12, paddingBottom: 0, flexDirection: "row" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/in_app_notifications/native/NotificationContent.tsx");

export default function NotificationContent(arg0) {
  let accessoryLabelNode;
  let bodyStyle;
  let children;
  let expandedContentVisible;
  let header;
  let icon;
  let onAccessibilityExpand;
  let rightAccessory;
  let showDragHandle;
  ({ icon, accessoryLabelNode, header, showDragHandle } = arg0);
  ({ children, rightAccessory } = arg0);
  if (showDragHandle === undefined) {
    showDragHandle = false;
  }
  ({ expandedContentVisible, onAccessibilityExpand, bodyStyle } = arg0);
  if (expandedContentVisible === undefined) {
    expandedContentVisible = false;
  }
  const tmp = callback4();
  let obj = { style: expandedContentVisible ? tmp.contentContainerExpanded : tmp.contentContainer, children: null };
  let tmp5 = null;
  if (null != icon) {
    obj = { style: null, children: null };
    obj[0] = tmp.iconContainer;
    obj[1] = icon;
    tmp5 = callback2(tmp4, obj);
  }
  const items = [tmp5, , ];
  obj = { style: items1, children: null };
  items1 = [tmp.body, bodyStyle];
  const obj1 = { style: tmp.labelContainer, children: null };
  let tmp9 = null;
  if (null != accessoryLabelNode) {
    tmp9 = accessoryLabelNode;
  }
  const items2 = [tmp9, ];
  const obj2 = { style: tmp.headerContainer, children: null };
  if ("message" === header.type) {
    const obj3 = {};
    const merged = Object.assign(header);
    let tmp10Result = tmp10(LocationText, obj3);
    const tmp7Result = LocationText;
  } else {
    const obj4 = {};
    const merged1 = Object.assign(header);
    tmp10Result = tmp10(LocationText /* LocationText */.SimpleNotificationHeader, obj4);
  }
  obj2[1] = tmp10Result;
  items2[1] = callback2(closure_6, obj2);
  obj1[1] = items2;
  const items3 = [closure_9(closure_6, obj1), children];
  obj[1] = items3;
  items[1] = closure_9(ReanimatedRexport.View, obj);
  items[2] = rightAccessory;
  obj[1] = items;
  children = [closure_9(closure_6, obj), ];
  tmp10Result = null;
  if (showDragHandle) {
    const obj5 = { onAccessibilityExpand: null };
    obj5[0] = onAccessibilityExpand;
    tmp10Result = tmp10(DragHandle, obj5);
  }
  children[1] = tmp10Result;
  return closure_9(closure_8, { children });
};