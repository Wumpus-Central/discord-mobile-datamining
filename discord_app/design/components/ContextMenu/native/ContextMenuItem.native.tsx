// discord_app/design/components/ContextMenu/native/ContextMenuItem.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1706 from "../../../../../_runtime/metro/01706__.js";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import ContextMenuConstants from "ContextMenuConstants.native.tsx";
import ContextMenuState from "ContextMenuState.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import 01653__ from "../../../../../_runtime/metro/01653__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = module_1653.createAnimatedComponent(Pressable);
const createStyles = fn(4913);
let closure_8 = createStyles.createStyles((arg0) => {
  const obj = { container: { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: ContextMenuConstants.CONTEXT_MENU_ITEM_GAP }, containerRefresh: { justifyContent: "flex-start" }, roundedTop: null, roundedBottom: null, border: null, pressed: null, disabled: null, icon: null, label: null, trailingIndicator: null };
  const obj2 = { padding: ContextMenuConstants.CONTEXT_MENU_ITEM_PADDING, minHeight: ContextMenuConstants.CONTEXT_MENU_ITEM_BASE_HEIGHT, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: ContextMenuConstants.CONTEXT_MENU_ITEM_GAP };
  obj.roundedTop = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  const obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  obj.roundedBottom = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  const obj4 = { borderBottomLeftRadius: nativeDefault.radii.lg, borderBottomRightRadius: nativeDefault.radii.lg };
  obj.border = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.pressed = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.disabled = { opacity: 0.5 };
  const size = { width: ContextMenuConstants.CONTEXT_MENU_ITEM_ICON_SIZE, height: ContextMenuConstants.CONTEXT_MENU_ITEM_ICON_SIZE, tintColor: null };
  if ("destructive" === arg0) {
    let TEXT_STRONG = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_STRONG = nativeDefault.colors.TEXT_STRONG;
  }
  size.tintColor = TEXT_STRONG;
  obj.icon = size;
  obj.label = { flexShrink: 1 };
  obj.trailingIndicator = { marginLeft: "auto" };
  return obj;
});
let closure_9 = { code: "(function ContextMenuItemNativeTsx1(){let[pan]=this.__closure;return pan.get();})" };
let closure_10 = { code: "(function ContextMenuItemNativeTsx2(_current,previous){let[disabled,measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET]=this.__closure;if(previous==null||_current===previous)return;if(disabled)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}})" };
let closure_11 = { code: "(function ContextMenuItemNativeTsx3(){let[activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING]=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};})" };
let closure_12 = { code: "(function ContextMenuItemNativeTsx4(bounds){let[offset,INDEX_BOUNDS_HEIGHT_OFFSET,height,INDEX_BOUNDS_WIDTH_OFFSET,width]=this.__closure;bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;return bounds;})" };
let closure_13 = { code: "(function ContextMenuItemNativeTsx5(){let[activeIndex,index]=this.__closure;activeIndex.set(index);})" };
let size = fn(2);
let result = size.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuItem.native.tsx");

export function ContextMenuItem(children) {
  ({ subLabel, disabled } = children);
  if (disabled === undefined) {
    disabled = false;
  }
  _require = disabled;
  ({ IconComponent, trailingIndicator, iconSource, start, end, index } = children);
  importDefault = index;
  ({ state, variant, lastInSection, onPress } = children);
  if (variant === undefined) {
    variant = "default";
  }
  let str = children.accessibilityRole;
  if (str === undefined) {
    str = "button";
  }
  const animatedRef = require("../../../../../_runtime/metro/01653__.js").useAnimatedRef();
  const tmp4 = c8(variant);
  const itemMeasurements = state.itemMeasurements;
  dependencyMap = itemMeasurements;
  const activeIndex = state.activeIndex;
  noop = activeIndex;
  const obj = require("../../../../../_runtime/metro/01653__.js");
  const sharedValue = require("../../../../../_runtime/metro/01653__.js").useSharedValue(0);
  const obj2 = require("../../../../../_runtime/metro/01653__.js");
  items = [c9, state.pan];
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
  const items2 = [closure_10, disabled, require("../../../../../_runtime/metro/01653__.js").measure, animatedRef, index, require("ContextMenuState").INDEX_BOUNDS_OFFSET, itemMeasurements, require("ContextMenuState").INDEX_BOUNDS_PAGE_X_OFFSET, require("ContextMenuState").INDEX_BOUNDS_PAGE_Y_OFFSET, require("ContextMenuState").INDEX_BOUNDS_WIDTH_OFFSET, require("ContextMenuState").INDEX_BOUNDS_HEIGHT_OFFSET];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  [tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class ContextMenuItemNativeTsx2 {
    constructor(arg0, arg1) {
      if (null != arg1) {
        tmp4 = children;
        if (children !== arg1) {
          tmp5 = closure_0;
          if (!closure_0) {
            tmp = closure_1;
            tmp2 = closure_2;
            tmp3 = closure_1(closure_2);
            if (null != tmp3) {
              tmp6 = closure_3;
              tmp7 = closure_4;
              result = closure_3 * closure_4;
              tmp9 = closure_5;
              ({ pageX, pageY, width, height } = tmp3);
              tmp10 = closure_6;
              closure_5.get()[result + closure_6] = pageX;
              tmp11 = closure_7;
              closure_5.get()[result + closure_7] = pageY;
              tmp12 = closure_8;
              closure_5.get()[result + closure_8] = width;
              tmp13 = closure_9;
              closure_5.get()[result + closure_9] = height;
            }
          }
        }
      }
      return;
    }
  }
  const items3 = [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18];
  ContextMenuItemNativeTsx2.__closure = items3;
  ContextMenuItemNativeTsx2.__workletHash = 1361143641064;
  ContextMenuItemNativeTsx2.__initData = tmp8;
  const animatedReaction = require("../../../../../_runtime/metro/01653__.js").useAnimatedReaction(ContextMenuItemNativeTsx1, ContextMenuItemNativeTsx2);
  const obj3 = require("../../../../../_runtime/metro/01653__.js");
  const items4 = [closure_11, activeIndex, index, sharedValue, require("spring/spring").withSpring, tmp4.pressed.backgroundColor, require("springPresets").SUBTLE_SPRING];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26] = items4;
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
  const items5 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26];
  ContextMenuItemNativeTsx3.__closure = items5;
  ContextMenuItemNativeTsx3.__workletHash = 5959605672534;
  ContextMenuItemNativeTsx3.__initData = tmp20;
  const animatedStyle = require("../../../../../_runtime/metro/01653__.js").useAnimatedStyle(ContextMenuItemNativeTsx3);
  if (null != IconComponent) {
    const obj4 = { size: "sm", color: tmp4.icon.tintColor };
    let tmp28 = c5(IconComponent, obj4);
  } else {
    tmp28 = null;
    if (null != iconSource) {
      const obj5 = { source: iconSource, style: tmp4.icon };
      tmp28 = c5(IconDefault, obj5);
    }
  }
  let tmp32 = null;
  if (null != trailingIndicator) {
    const obj6 = { size: "sm", color: tmp4.icon.tintColor };
    tmp32 = c5(trailingIndicator, obj6);
  }
  const items6 = [disabled, index, itemMeasurements];
  const items7 = [activeIndex, index];
  const callback = noop.useCallback((nativeEvent) => {
    ({ height, width } = nativeEvent.nativeEvent.layout);
    let tmp = c0;
    if (!c0) {
      tmp = 0 === height;
    }
    if (!tmp) {
      tmp = 0 === width;
    }
    if (!tmp) {
      items = [closure_12, c1 * ContextMenuState.INDEX_BOUNDS_OFFSET, ContextMenuState.INDEX_BOUNDS_HEIGHT_OFFSET, height, ContextMenuState.INDEX_BOUNDS_WIDTH_OFFSET, width];
      c0 = undefined;
      c1 = undefined;
      _undefined3 = undefined;
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
      _undefined3.modify(ContextMenuItemNativeTsx4, false);
    }
  }, items6);
  const items8 = [activeIndex];
  const callback1 = noop.useCallback(() => {
    items = [closure_13, c3, c1];
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
    _mod1706.runOnUISync(ContextMenuItemNativeTsx5);
  }, items7);
  const obj7 = { ref: animatedRef, style: null, onLayout: null, onPressIn: null, onPressOut: null, onPress: null, disabled: null, accessibilityRole: null, children: null };
  const items9 = [, , , , , , ];
  ({ container: arr10[0], containerRefresh: arr10[1] } = tmp4);
  let border = !end;
  const callback2 = noop.useCallback(() => {
    const result = _undefined4.set(-1);
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
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp4.disabled;
  }
  items9[5] = disabled2;
  items9[6] = animatedStyle;
  obj7.style = items9;
  obj7.onLayout = callback;
  obj7.onPressIn = callback1;
  obj7.onPressOut = callback2;
  obj7.onPress = onPress;
  obj7.disabled = disabled;
  obj7.accessibilityRole = str;
  const items10 = [c5(c4, { children: tmp28 }), , ];
  const obj8 = { style: tmp4.label, children: null };
  let str2 = "text-strong";
  if ("destructive" === variant) {
    str2 = "text-feedback-critical";
  }
  const items11 = [c5(require("Text/Text").Text, { animated: true, variant: "body-md/medium", color: str2, children: children.label }), ];
  let tmp39Result = null != subLabel;
  if (tmp39Result) {
    const obj9 = { variant: tmp(8659).CONTEXT_MENU_ITEM_SUB_LABEL_VARIANT, color: null, children: null };
    let str3 = "text-subtle";
    if (tmp41) {
      str3 = "text-feedback-critical";
    }
    obj9.color = str3;
    obj9.children = subLabel;
    tmp39Result = tmp39(tmp(5504).Text, obj9);
  }
  items11[1] = tmp39Result;
  obj8.children = items11;
  items10[1] = c6(c4, obj8);
  let tmp39Result2 = null != tmp32;
  if (tmp39Result2) {
    const obj10 = { style: tmp4.trailingIndicator, children: tmp32 };
    tmp39Result2 = tmp39(tmp40, obj10);
  }
  items10[2] = tmp39Result2;
  obj7.children = items10;
  return c6(c7, obj7);
}