// === Module 15854: ContextMenuItem ===

// Module 15854 (ContextMenuItem)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 5095 */;
import spring from "spring" /* 5637 */;
import springPresets from "springPresets" /* 5638 */;
import ContextMenuState from "ContextMenuState" /* 9875 */;
import ContextMenuConstants from "ContextMenuConstants" /* 9876 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles((arg0) => {
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
let closure_12 = { code: "function ContextMenuItemNativeTsx4(){const{activeIndex,index}=this.__closure;activeIndex.set(index);}" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export function ContextMenuItem(accessibilityRole) {
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
  const tmp4 = closure_8(variant);
  pan = state.pan;
  const itemMeasurements = state.itemMeasurements;
  const activeIndex = state.activeIndex;
  let obj = index(pan[3]);
  const sharedValue = index(pan[3]).useSharedValue(0);
  const obj2 = index(pan[3]);
  let fn = function v() {
    return pan.get();
  };
  fn.__closure = { pan };
  fn.__workletHash = 11852115418144;
  fn.__initData = __initData;
  class U {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = accessibilityRole;
        if (accessibilityRole !== arg1) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[3]);
          tmp4 = closure_1;
          measureResult = obj.measure(closure_1);
          if (null != measureResult) {
            tmp6 = index;
            ({ pageX, pageY, width, height } = measureResult);
            result = index * tmp2(tmp3[7]).INDEX_BOUNDS_OFFSET;
            tmp8 = itemMeasurements;
            value = itemMeasurements.get();
            value[result + tmp2(tmp3[7]).INDEX_BOUNDS_PAGE_X_OFFSET] = pageX;
            value1 = itemMeasurements.get();
            value1[result + tmp2(tmp3[7]).INDEX_BOUNDS_PAGE_Y_OFFSET] = pageY;
            value2 = itemMeasurements.get();
            value2[result + tmp2(tmp3[7]).INDEX_BOUNDS_WIDTH_OFFSET] = width;
            value3 = itemMeasurements.get();
            value3[result + tmp2(tmp3[7]).INDEX_BOUNDS_HEIGHT_OFFSET] = height;
          }
        }
      }
      return;
    }
  }
  const obj3 = index(pan[3]);
  U.__closure = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET };
  U.__workletHash = 9571959267234;
  U.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, U);
  backgroundColor = tmp4.pressed.backgroundColor;
  const obj4 = { measure: index(pan[3]).measure, ref: animatedRef, index, INDEX_BOUNDS_OFFSET: index(pan[7]).INDEX_BOUNDS_OFFSET, itemMeasurements, INDEX_BOUNDS_PAGE_X_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_X_OFFSET, INDEX_BOUNDS_PAGE_Y_OFFSET: index(pan[7]).INDEX_BOUNDS_PAGE_Y_OFFSET, INDEX_BOUNDS_WIDTH_OFFSET: index(pan[7]).INDEX_BOUNDS_WIDTH_OFFSET, INDEX_BOUNDS_HEIGHT_OFFSET: index(pan[7]).INDEX_BOUNDS_HEIGHT_OFFSET };
  class A {
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
  A.__closure = { activeIndex, index, pressed: sharedValue, withSpring: index(pan[8]).withSpring, backgroundColor, SUBTLE_SPRING: index(pan[9]).SUBTLE_SPRING };
  A.__workletHash = 624481847983;
  A.__initData = __initData3;
  const animatedStyle = obj5.useAnimatedStyle(A);
  if (null != IconComponent) {
    const obj7 = { size: "sm", color: tmp4.icon.tintColor };
    let tmp8 = sharedValue(IconComponent, obj7);
  } else {
    tmp8 = null;
    if (null != iconSource) {
      const obj8 = { source: iconSource, style: tmp4.icon };
      tmp8 = sharedValue(animatedRef(tmp2[10]), obj8);
    }
  }
  let tmp12 = null;
  if (null != trailingIndicator) {
    const obj9 = { size: "sm", color: tmp4.icon.tintColor };
    tmp12 = sharedValue(trailingIndicator, obj9);
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
    const fn = function t() {
      const result = activeIndex.set(index);
    };
    fn.__closure = { activeIndex, index };
    fn.__workletHash = 14761332236151;
    fn.__initData = __initData;
    ReanimatedRexport2.executeOnUIRuntimeSync(fn)();
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
  const items4 = [sharedValue(activeIndex, { children: tmp8 }), , ];
  const obj11 = { animated: true, variant: "text-md/medium", style: tmp4.label, color: null, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  obj11.color = str2;
  obj11.children = label;
  items4[1] = sharedValue(index(pan[11]).Text, obj11);
  let tmp19Result = null != tmp12;
  if (tmp19Result) {
    const obj12 = { style: tmp4.trailingIndicator, children: tmp12 };
    tmp19Result = tmp19(activeIndex, obj12);
  }
  items4[2] = tmp19Result;
  obj10.children = items4;
  return backgroundColor(closure_7, obj10);
}