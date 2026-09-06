// discord_app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ContextMenuState from "ContextMenuState.native.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = ReanimatedRexport.createAnimatedComponent(fn(17).Pressable);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((arg0) => {
  let obj = {
    container: null,
    containerRefresh: null,
    roundedTop: null,
    roundedBottom: null,
    border: null,
    pressed: null,
    icon: null,
    label: null,
    trailingIndicator: null,
  };
  obj = {
    padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING,
    minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  };
  obj.container = obj;
  obj.containerRefresh = { justifyContent: "flex-start" };
  obj = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  obj.roundedTop = obj;
  obj.roundedBottom = {
    borderBottomLeftRadius: nativeDefault.radii.lg,
    borderBottomRightRadius: nativeDefault.radii.lg,
  };
  const obj1 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj2 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
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
const __initData2 = {
  code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}",
};
const __initData3 = {
  code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}",
};
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
  let obj = index(pan[3]);
  const animatedRef = obj.useAnimatedRef();
  const tmp4 = closure_7(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  let obj1 = index(pan[3]);
  const sharedValue = obj1.useSharedValue(0);
  let obj2 = index(pan[3]);
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
          value = itemMeasurements.get();
          value[result + ContextMenuState.INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
          const value1 = itemMeasurements.get();
          value1[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
          value2 = itemMeasurements.get();
          value2[result + ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        }
      }
    }
  };
  obj = {
    measure: index(pan[3]).measure,
    ref: animatedRef,
    index,
    INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET,
    itemMeasurements,
    INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET,
    INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET,
    INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET,
    INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET,
  };
  fn.__closure = obj;
  fn.__workletHash = 9571959267234;
  fn.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(U, fn);
  backgroundColor = tmp4.pressed.backgroundColor;
  let obj4 = index(pan[3]);
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
      obj = { backgroundColor: obj.withSpring(str, tmp3(tmp4[9]).SUBTLE_SPRING, "animate-always") };
      return obj;
    }
  }
  obj = {
    activeIndex,
    index,
    pressed: sharedValue,
    withSpring: index(pan[8]).withSpring,
    backgroundColor,
    SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING,
  };
  P.__closure = obj;
  P.__workletHash = 624481847983;
  P.__initData = __initData3;
  const animatedStyle = obj4.useAnimatedStyle(P);
  if (null != IconComponent) {
    obj1 = { size: "sm", color: tmp4.icon.tintColor };
    let tmp8 = activeIndex(IconComponent, obj1);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      obj2 = { source: iconSource, style: tmp4.icon };
      tmp8 = activeIndex(animatedRef(tmp2[10]), obj2);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj3 = { size: "sm", color: tmp4.icon.tintColor };
    tmp12 = activeIndex(trailingIndicator, obj3);
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
        value = itemMeasurements.get();
        value[result + ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET] = width;
      }
    }
  }, items);
  const items2 = [activeIndex];
  const callback1 = itemMeasurements.useCallback(() => {
    const result = activeIndex.set(index);
  }, items1);
  obj4 = {
    ref: animatedRef,
    style: null,
    onLayout: null,
    onPressIn: null,
    onPressOut: null,
    onPress: null,
    accessibilityRole: null,
    children: null,
  };
  const items3 = [, , , , ,];
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
  obj4.style = items3;
  obj4.onLayout = callback;
  obj4.onPressIn = callback1;
  obj4.onPressOut = callback2;
  obj4.onPress = onPress;
  obj4.accessibilityRole = str;
  const items4 = [activeIndex(animatedRef(pan[3]).View, { children: tmp8 }), ,];
  const obj5 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: null, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  obj5.color = str2;
  obj5.children = label;
  items4[1] = activeIndex(index(pan[11]).Text, obj5);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj6 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(animatedRef(tmp2[3]).View, obj6);
  }
  items4[2] = tmp19Result;
  obj4.children = items4;
  return sharedValue(backgroundColor, obj4);
};
