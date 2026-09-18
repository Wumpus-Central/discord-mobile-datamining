// === Module 14385: ContextMenuItem ===

// Module 14385 (ContextMenuItem)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4458 */;
import spring from "spring" /* 5143 */;
import springPresets from "springPresets" /* 5147 */;
import ContextMenuState from "ContextMenuState" /* 8136 */;
import ContextMenuConstants from "ContextMenuConstants" /* 8137 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(4722);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: null, roundedBottom: null, border: null, pressed: null, icon: null, label: null, trailingIndicator: null };
  const obj2 = { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 };
  obj.roundedTop = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  obj.roundedBottom = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.pressed = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  if ("destructive" === arg0) {
    let TEXT_STRONG = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = nativeDefault.colors.TEXT_STRONG;
  }
  obj.icon = { width: 20, height: 20, tintColor: TEXT_STRONG };
  obj.label = { flexShrink: 1 };
  obj.trailingIndicator = { marginLeft: "auto" };
  return obj;
});
const __initData = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
const __initData2 = { code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}" };
const __initData3 = { code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export const ContextMenuItem = function ContextMenuItem(accessibilityRole) {
  ({ IconComponent, trailingIndicator, iconSource, start, end, index } = accessibilityRole);
  ({ state, variant } = accessibilityRole);
  ({ label, lastInSection, onPress } = accessibilityRole);
  if (variant === undefined) {
    variant = "default";
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  let pan;
  let backgroundColor;
  const animatedRef = index(pan[3]).useAnimatedRef();
  const tmp4 = closure_7(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  let obj = index(pan[3]);
  let tmp = index;
  const sharedValue = index(pan[3]).useSharedValue(0);
  const obj2 = index(pan[3]);
  class U {
    constructor() {
      return pan.get();
    }
  }
  U.__closure = { pan };
  U.__workletHash = 11852115418144;
  U.__initData = __initData;
  const fn = function p(arg0, arg1) {
    if (null != arg1) {
      if (arg0 !== arg1) {
        const measureResult = ReanimatedRexport2.measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
          value = itemMeasurements.get();
          value[result + ContextMenuState.INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          const value4 = itemMeasurements.get();
          value4[result + ContextMenuState.INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
          const value5 = itemMeasurements.get();
          value5[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
          const value6 = itemMeasurements.get();
          value6[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        }
      }
    }
  };
  const obj3 = index(pan[3]);
  fn.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET };
  fn.__workletHash = 9571959267234;
  fn.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(U, fn);
  backgroundColor = tmp4.pressed.backgroundColor;
  const obj4 = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET };
  class P {
    constructor() {
      tmp = activeIndex.get() === index;
      if (!tmp) {
        tmp2 = closure_5;
        num = 1;
        tmp = 1 === closure_5.get();
      }
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj = closure_0(closure_2[8]);
      str = "transparent";
      if (tmp) {
        str = backgroundColor;
      }
      obj1 = { backgroundColor: obj.withSpring(str, tmp3(tmp4[9]).SUBTLE_SPRING, "animate-always") };
      return obj1;
    }
  }
  const obj5 = index(pan[3]);
  P.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[8]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING };
  P.__workletHash = 624481847983;
  P.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(P);
  if (null != IconComponent) {
    const obj7 = { size: "sm", color: tmp4.icon.tintColor };
    let tmp8 = activeIndex(IconComponent, obj7);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      const obj8 = { source: iconSource, style: tmp4.icon };
      tmp8 = activeIndex(animatedRef(tmp2[10]), obj8);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj9 = { size: "sm", color: tmp4.icon.tintColor };
    tmp12 = activeIndex(trailingIndicator, obj9);
  }
  const items = [index, itemMeasurements];
  const items1 = [activeIndex, index];
  const callback = itemMeasurements.useCallback((nativeEvent) => {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (0 !== height) {
      if (0 !== width) {
        const result = index * ContextMenuState.INDEX_BOUNDS_OFFSET;
        value = itemMeasurements.get();
        value[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        value2 = itemMeasurements.get();
        value2[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
      }
    }
  }, items);
  const items2 = [activeIndex];
  const callback1 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(index);
  }, items1);
  const obj10 = { ref: animatedRef, style: null, onLayout: null, onPressIn: null, onPressOut: null, onPress: null, accessibilityRole: null, children: null };
  const items3 = [, , , , , ];
  ({ container: arr4[0], containerRefresh: arr4[1] } = tmp4);
  let border = !end;
  const callback2 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(-1);
  }, items2);
  if (!end) {
    border = !lastInSection;
  }
  if (border) {
    border = tmp4.border;
  }
  items3[2] = border;
  if (start) {
    start = tmp4.roundedTop;
  }
  items3[3] = start;
  if (end) {
    end = tmp4.roundedBottom;
  }
  items3[4] = end;
  items3[5] = animatedStyle;
  obj10.style = items3;
  obj10.onLayout = callback;
  obj10.onPressIn = callback1;
  obj10.onPressOut = callback2;
  obj10.onPress = onPress;
  obj10.accessibilityRole = str;
  const items4 = [activeIndex(animatedRef(pan[3]).View, { children: tmp8 }), , ];
  const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: null, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  obj11.color = str2;
  obj11.children = label;
  items4[1] = activeIndex(tmp(pan[11]).Text, obj11);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(animatedRef(tmp2[3]).View, obj12);
  }
  items4[2] = tmp19Result;
  obj10.children = items4;
  return sharedValue(backgroundColor, obj10);
};