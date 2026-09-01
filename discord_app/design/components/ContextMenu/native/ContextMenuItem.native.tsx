// discord_app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CONTEXT_MENU_LONG_PRESS_DURATION_MS from "ContextMenuConstants.native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = importDefaultResult.createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_7 = createCacheKey.createStyles((arg0) => {
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
    padding: CONTEXT_MENU_LONG_PRESS_DURATION_MS.CONTEXT_MENU_ITEM_PADDING,
    minHeight: CONTEXT_MENU_LONG_PRESS_DURATION_MS.CONTEXT_MENU_ITEM_BASE_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  };
  obj[0] = obj;
  obj[1] = { justifyContent: "flex-start" };
  obj = { borderTopLeftRadius: ThemesDefault.radii.lg, borderTopRightRadius: ThemesDefault.radii.lg };
  obj[2] = obj;
  obj[3] = { borderBottomLeftRadius: ThemesDefault.radii.lg, borderBottomRightRadius: ThemesDefault.radii.lg };
  obj1 = { borderBottomLeftRadius: ThemesDefault.radii.lg, borderBottomRightRadius: ThemesDefault.radii.lg };
  obj[4] = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
  const obj2 = { borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[5] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  if ("destructive" === arg0) {
    let TEXT_STRONG = tmp2(712).colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = tmp2(712).colors.TEXT_STRONG;
  }
  obj[6] = { width: 20, height: 20, tintColor: TEXT_STRONG };
  obj[7] = { flexShrink: 1 };
  obj[8] = { marginLeft: "auto" };
  return obj;
});
let closure_8 = { code: "function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}" };
let closure_9 = {
  code: "function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}",
};
let closure_10 = {
  code: "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}",
};
let result = require("set").fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

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
  let animatedRef;
  let pan;
  let itemMeasurements;
  let activeIndex;
  let sharedValue;
  let backgroundColor;
  let obj = index(pan[3]);
  animatedRef = obj.useAnimatedRef();
  const tmp4 = callback(variant);
  pan = state.pan;
  itemMeasurements = state.itemMeasurements;
  activeIndex = state.activeIndex;
  obj1 = index(pan[3]);
  sharedValue = obj1.useSharedValue(0);
  let obj2 = index(pan[3]);
  class U {
    constructor() {
      return pan.get();
    }
  }
  U.__closure = { pan };
  U.__workletHash = 11852115418144;
  U.__initData = closure_8;
  const fn = function p(arg0, arg1) {
    if (null != arg1) {
      if (arg0 !== arg1) {
        const measureResult = index(pan[3]).measure(animatedRef);
        if (null != measureResult) {
          ({ pageX, pageY, width, height } = measureResult);
          const result = index * tmp2(tmp3[7]).INDEX_BOUNDS_OFFSET;
          let value = itemMeasurements.get();
          value[result + tmp2(tmp3[7]).INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
          value = itemMeasurements.get();
          value[result + tmp2(tmp3[7]).INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
          const value1 = itemMeasurements.get();
          value1[result + tmp2(tmp3[7]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
          const value2 = itemMeasurements.get();
          value2[result + tmp2(tmp3[7]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        }
        const obj = index(pan[3]);
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
  fn.__initData = closure_9;
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
      tmp3 = index;
      tmp4 = pan;
      obj = index(pan[8]);
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
  P.__initData = closure_10;
  const animatedStyle = obj4.useAnimatedStyle(P);
  if (null != IconComponent) {
    obj1 = { size: "sm", color: null };
    obj1[1] = tmp4.icon.tintColor;
    let tmp8 = activeIndex(IconComponent, obj1);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      obj2 = { source: null, style: null };
      obj2[0] = iconSource;
      obj2[1] = tmp4.icon;
      tmp8 = activeIndex(animatedRef(tmp2[10]), obj2);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj3 = { size: "sm", color: null };
    obj3[1] = tmp4.icon.tintColor;
    tmp12 = activeIndex(trailingIndicator, obj3);
  }
  const items = [index, itemMeasurements];
  const items1 = [activeIndex, index];
  callback = itemMeasurements.useCallback((nativeEvent) => {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (0 !== height) {
      if (0 !== width) {
        const result = index * index(pan[7]).INDEX_BOUNDS_OFFSET;
        let value = itemMeasurements.get();
        value[result + index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
        value = itemMeasurements.get();
        value[result + index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
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
  obj4[1] = items3;
  obj4[2] = callback;
  obj4[3] = callback1;
  obj4[4] = callback2;
  obj4[5] = onPress;
  obj4[6] = str;
  const items4 = [activeIndex(animatedRef(pan[3]).View, { children: tmp8 }), ,];
  const obj5 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: null, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  obj5[3] = str2;
  obj5[4] = label;
  items4[1] = activeIndex(index(pan[11]).Text, obj5);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp4.trailingIndicator;
    obj6[1] = tmp12;
    tmp19Result = tmp19(animatedRef(tmp2[3]).View, obj6);
  }
  items4[2] = tmp19Result;
  obj4[7] = items4;
  return sharedValue(backgroundColor, obj4);
};
