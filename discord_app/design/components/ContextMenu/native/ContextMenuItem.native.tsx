// === Module 16197: ContextMenuItem ===

// Module 16197 (ContextMenuItem)
import nativeDefault from "native" /* 575 */;
import _mod1705 from "module_1705" /* 1705 */;
import IconDefault from "Icon" /* 5762 */;
import ContextMenuState from "ContextMenuState" /* 10003 */;
import ContextMenuConstants from "ContextMenuConstants" /* 10004 */;
import noop from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = module_1652.createAnimatedComponent(Pressable);
const createStyles = fn(5142);
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
let closure_9 = { code: "(function ContextMenuItemNativeTsx1(){let[pan]=this.__closure;return pan.get();})" };
let closure_10 = { code: "(function ContextMenuItemNativeTsx2(_current,previous){let[measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET]=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}})" };
let closure_11 = { code: "(function ContextMenuItemNativeTsx3(){let[activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING]=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};})" };
let closure_12 = { code: "(function ContextMenuItemNativeTsx4(bounds){let[offset,INDEX_BOUNDS_HEIGHT_OFFSET,height,INDEX_BOUNDS_WIDTH_OFFSET,width]=this.__closure;bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;return bounds;})" };
let closure_13 = { code: "(function ContextMenuItemNativeTsx5(){let[activeIndex,index]=this.__closure;activeIndex.set(index);})" };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export function ContextMenuItem(accessibilityRole) {
  ({ IconComponent, trailingIndicator, iconSource, start, end, index } = accessibilityRole);
  _require = index;
  ({ state, variant } = accessibilityRole);
  ({ label, lastInSection, onPress } = accessibilityRole);
  if (variant === undefined) {
    variant = "default";
  }
  let str = accessibilityRole.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  const animatedRef = require("module_1652").useAnimatedRef();
  let tmp4 = c8(variant);
  const itemMeasurements = state.itemMeasurements;
  importDefault = itemMeasurements;
  const activeIndex = state.activeIndex;
  dependencyMap = activeIndex;
  const obj = require("module_1652");
  const sharedValue = require("module_1652").useSharedValue(0);
  const obj2 = require("module_1652");
  items = [closure_9, state.pan];
  _require = undefined;
  [tmp6, tmp7] = items;
  class ContextMenuItemNativeTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  let items1 = [tmp7];
  ContextMenuItemNativeTsx1.__closure = items1;
  ContextMenuItemNativeTsx1.__workletHash = 10932936281465;
  ContextMenuItemNativeTsx1.__initData = tmp6;
  const items2 = [closure_10, require("module_1652").measure, animatedRef, index, require("ContextMenuState").INDEX_BOUNDS_OFFSET, itemMeasurements, require("ContextMenuState").INDEX_BOUNDS_PAGE_X_OFFSET, require("ContextMenuState").INDEX_BOUNDS_PAGE_Y_OFFSET, require("ContextMenuState").INDEX_BOUNDS_WIDTH_OFFSET, require("ContextMenuState").INDEX_BOUNDS_HEIGHT_OFFSET];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17] = items2;
  class ContextMenuItemNativeTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp = accessibilityRole;
        if (accessibilityRole !== arg1) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          tmp4 = closure_0(closure_1);
          if (null != tmp4) {
            tmp5 = closure_2;
            tmp6 = closure_3;
            result = closure_2 * closure_3;
            tmp8 = closure_4;
            ({ pageX, pageY, width, height } = tmp4);
            tmp9 = closure_5;
            closure_4.get()[result + closure_5] = pageX;
            tmp10 = closure_6;
            closure_4.get()[result + closure_6] = pageY;
            tmp11 = closure_7;
            closure_4.get()[result + closure_7] = width;
            tmp12 = closure_8;
            closure_4.get()[result + closure_8] = height;
          }
        }
      }
      return;
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17];
  ContextMenuItemNativeTsx2.__closure = items3;
  ContextMenuItemNativeTsx2.__workletHash = 15799031050779;
  ContextMenuItemNativeTsx2.__initData = tmp8;
  const animatedReaction = require("module_1652").useAnimatedReaction(ContextMenuItemNativeTsx1, ContextMenuItemNativeTsx2);
  const obj3 = require("module_1652");
  const items4 = [closure_11, activeIndex, index, sharedValue, require("spring/spring").withSpring, tmp4.pressed.backgroundColor, require("springPresets").SUBTLE_SPRING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25] = items4;
  class ContextMenuItemNativeTsx3 {
    constructor() {
      tmp = closure_0.get() === closure_1;
      if (!tmp) {
        tmp2 = closure_2;
        num = 1;
        tmp = 1 === closure_2.get();
      }
      str = "transparent";
      tmp3 = closure_3;
      if (tmp) {
        str = closure_4;
      }
      obj = { backgroundColor: tmp3(str, closure_5, "animate-always") };
      return obj;
    }
  }
  const items5 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25];
  ContextMenuItemNativeTsx3.__closure = items5;
  ContextMenuItemNativeTsx3.__workletHash = 5959605672534;
  ContextMenuItemNativeTsx3.__initData = tmp19;
  const animatedStyle = require("module_1652").useAnimatedStyle(ContextMenuItemNativeTsx3);
  if (null != IconComponent) {
    const obj4 = { size: "sm", color: tmp4.icon.tintColor };
    let tmp27 = c5(IconComponent, obj4);
  } else {
    tmp27 = null;
    if (null != iconSource) {
      const obj5 = { source: iconSource, style: tmp4.icon };
      tmp27 = c5(IconDefault, obj5);
    }
  }
  let tmp31 = null;
  if (null != trailingIndicator) {
    const obj6 = { size: "sm", color: tmp4.icon.tintColor };
    tmp31 = c5(trailingIndicator, obj6);
  }
  const items6 = [index, itemMeasurements];
  const items7 = [activeIndex, index];
  const callback = noop.useCallback((nativeEvent) => {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    if (tmp) {
      items = [closure_12, c0 * ContextMenuState.INDEX_BOUNDS_OFFSET, ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET, height, ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET, width];
      c0 = undefined;
      _undefined2 = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13] = items;
      class ContextMenuItemNativeTsx4 {
        constructor(arg0) {
          nativeEvent[closure_0 + closure_1] = closure_2;
          nativeEvent[closure_0 + closure_3] = closure_4;
          return nativeEvent;
        }
      }
      const items1 = [tmp9, tmp10, tmp11, tmp12, tmp13];
      ContextMenuItemNativeTsx4.__closure = items1;
      ContextMenuItemNativeTsx4.__workletHash = 7995786915080;
      ContextMenuItemNativeTsx4.__initData = tmp8;
      _undefined2.modify(ContextMenuItemNativeTsx4, false);
    }
    tmp = 0 !== height && 0 !== width;
  }, items6);
  const items8 = [activeIndex];
  const callback1 = noop.useCallback(() => {
    items = [closure_13, c2, c0];
    c0 = undefined;
    c1 = undefined;
    [tmp, tmp2, tmp3] = items;
    class ContextMenuItemNativeTsx5 {
      constructor() {
        result = closure_0.set(closure_1);
        return;
      }
    }
    const items1 = [tmp2, tmp3];
    ContextMenuItemNativeTsx5.__closure = items1;
    ContextMenuItemNativeTsx5.__workletHash = 3832423612687;
    ContextMenuItemNativeTsx5.__initData = tmp;
    _mod1705.runOnUISync(ContextMenuItemNativeTsx5);
  }, items7);
  const obj7 = { ref: animatedRef, style: null, onLayout: null, onPressIn: null, onPressOut: null, onPress: null, accessibilityRole: null, children: null };
  const items9 = [, , , , , ];
  ({ container: arr10[0], containerRefresh: arr10[1] } = tmp4);
  let border = !end;
  const callback2 = noop.useCallback(() => {
    const result = _undefined3.set(-1);
  }, items8);
  if (!end) {
    border = !lastInSection;
  }
  if (border) {
    border = tmp4.border;
  }
  items9[2] = border;
  if (start) {
    start = tmp4.roundedTop;
  }
  items9[3] = start;
  if (end) {
    end = tmp4.roundedBottom;
  }
  items9[4] = end;
  items9[5] = animatedStyle;
  obj7.style = items9;
  obj7.onLayout = callback;
  obj7.onPressIn = callback1;
  obj7.onPressOut = callback2;
  obj7.onPress = onPress;
  obj7.accessibilityRole = str;
  const items10 = [c5(c4, { children: tmp27 }), , ];
  const obj8 = { animated: true, variant: "body-md/medium", style: tmp4.label, color: null, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  obj8.color = str2;
  obj8.children = label;
  items10[1] = c5(require("Text/Text").Text, obj8);
  let tmp38Result = null != tmp31;
  if (tmp38Result) {
    const obj9 = { style: tmp4.trailingIndicator, children: tmp31 };
    tmp38Result = tmp38(c4, obj9);
  }
  items10[2] = tmp38Result;
  obj7.children = items10;
  return c6(c7, obj7);
}