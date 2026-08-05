// discord_app/design/components/Menu/native/Menu.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "CONFIG_NEVER_ANIMATE";
import get_ActivityIndicator from "generateBoxShadowStyle";
import { NOOP } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { ReanimatedRexport } from "../../../../modules/reanimated/ReanimatedRexport.tsx";

let StyleSheet;
let c5;
const require = arg1;
let c4 = importAllResult;
({ ScrollView: c5, StyleSheet } = get_ActivityIndicator);
let closure_8 = { mass: 1, stiffness: 300, damping: 25, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let obj = { duration: 250, easing: require("STANDARD_EASING").STANDARD_EASING };
obj = { backdrop: null, menu: null };
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1.zIndex = 1;
obj[0] = obj1;
createCacheKey = { position: "absolute", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, width: 220 };
obj[1] = createCacheKey;
let closure_10 = createCacheKey.createStyles(obj);
const context = importAllResult.createContext({ menuClose: NOOP, menuDismiss: NOOP });
function measureButtonRef(arg0, arg1) {
  const measureResult = ReanimatedRexport.measure(arg0);
  if (null != measureResult) {
    ReanimatedRexport.runOnJS(arg1)(measureResult);
    const tmpResult = ReanimatedRexport;
  }
}
measureButtonRef.__closure = { measure: require("module_4146").measure, runOnJS: require("module_4146").runOnJS };
measureButtonRef.__workletHash = 15651320687527;
measureButtonRef.__initData = { code: "function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}" };
let closure_13 = { code: "function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}" };
let closure_14 = { code: "function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}" };
let closure_15 = { code: "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}" };
let obj3 = { measure: require("module_4146").measure, runOnJS: require("module_4146").runOnJS };
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export const Menu = function Menu(toggleButtonRef) {
  let children;
  let offset;
  let offsetAnimated;
  let onClose;
  let pageX;
  let pageY;
  let position;
  let style;
  toggleButtonRef = toggleButtonRef.toggleButtonRef;
  ({ onClose, position } = toggleButtonRef);
  if (position === undefined) {
    position = "right";
  }
  let str = toggleButtonRef.align;
  if (str === undefined) {
    str = "start";
  }
  ({ offset, offsetAnimated } = toggleButtonRef);
  let enabled;
  let callback;
  let size2;
  let closure_5;
  let sharedValue;
  let sharedValue1;
  onClose = undefined;
  let callback2;
  let redux;
  function openMenuCallback() {
    let obj = toggleButtonRef(enabled[12]);
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = tmp(tmp2[13]).AccessibilityAnnouncer;
      const intl = tmp(tmp2[14]).intl;
      AccessibilityAnnouncer.announce(intl.string(tmp(tmp2[14]).t.ZqK0uI));
    }
    obj = { ref: _slicedToArray };
    const result = toggleButtonRef(enabled[15]).setAccessibilityFocus(obj);
  }
  ({ style, children } = toggleButtonRef);
  let tmp = callback2();
  enabled = size2.useContext(toggleButtonRef(enabled[9]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const rect = offsetAnimated(enabled[10])();
  const size = offsetAnimated(enabled[11])();
  callback = size2.useRef(null);
  const tmp7 = callback(size2.useState(null), 2);
  size2 = tmp7[0];
  closure_5 = tmp7[1];
  let obj = toggleButtonRef(enabled[8]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = toggleButtonRef(enabled[8]);
  sharedValue1 = obj1.useSharedValue({ width: 0, height: 0 });
  let items = [toggleButtonRef, size2];
  const layoutEffect = size2.useLayoutEffect(() => {
    let current;
    if (toggleButtonRef != null) {
      current = tmp.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = null == size2;
    }
    if (tmp3) {
      toggleButtonRef(enabled[8]).runOnUI(outer1_12)(tmp, closure_5);
      const obj = toggleButtonRef(enabled[8]);
    }
  }, items);
  if (onClose == null) {
    onClose = sharedValue;
  }
  let tmp3Result = tmp3(tmp4[17]);
  const boxShadowStyle = tmp3Result.generateBoxShadowStyle(tmp3(tmp4[17]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  if ("left" === position) {
    let str2 = "column";
  } else {
    str2 = "row";
  }
  if (null == size2) {
    let point = { x: 0, y: 0 };
  } else {
    let num = 0;
    ({ pageX, pageY } = size2);
    if ("right" === position) {
      num = size2.width;
    }
    const sum = pageX + num;
    let num2 = 0;
    if ("bottom" === position) {
      num2 = size2.height;
    }
    const sum1 = pageY + num2;
    let sum3 = sum1;
    let tmp16 = sum;
    if ("end" === str) {
      let num3 = 0;
      if ("row" === str2) {
        num3 = size2.width;
      }
      let num4 = 0;
      const sum2 = sum + num3;
      if ("column" === str2) {
        num4 = size2.height;
      }
      sum3 = sum1 + num4;
      tmp16 = sum2;
    }
    point = { x: null, y: null };
    point[0] = tmp16;
    point[1] = sum3;
  }
  const height = size.height;
  if ("left" === position) {
    let str9 = "right";
  } else {
    str9 = "left";
    if ("row" === str2) {
      str9 = "left";
    }
  }
  if ("top" === position) {
    let str12 = "bottom";
  } else {
    str12 = "top";
    if ("column" === str2) {
      str12 = "top";
    }
  }
  if ("left" === str9) {
    let x = point.x;
  } else {
    x = size.width - point.x;
  }
  let y = point.y;
  const tmp19 = "top" === str12 ? y : height - y;
  if (null != offset) {
    let sum4 = x + offset.x;
    let sum5 = tmp19 + offset.y;
  } else {
    let num5 = 0;
    if ("column" === str2) {
      num5 = 10;
    }
    sum4 = x + num5;
    let num6 = 0;
    if ("row" === str2) {
      num6 = 10;
    }
    sum5 = tmp19 + num6;
  }
  function handleDismiss() {
    let obj = toggleButtonRef(enabled[15]);
    obj = { ref: toggleButtonRef };
    const result = obj.setAccessibilityFocus(obj);
    const fn = function t() {
      return outer1_0(outer1_2[8]).runOnJS(closure_9)();
    };
    obj = { runOnJS: toggleButtonRef(enabled[8]).runOnJS, closeMenuCallback: onClose };
    fn.__closure = obj;
    fn.__workletHash = 5879184549724;
    fn.__initData = outer1_14;
    const result1 = sharedValue.set(toggleButtonRef(enabled[16]).withTiming(0, onClose, "respect-motion-settings", fn));
  }
  obj = {};
  obj[str9] = sum4;
  obj[str12] = sum5;
  obj.maxHeight = height - sum5 - ("top" === str12 ? rect.bottom : rect.top) - 12;
  let items1 = [obj, str9, str12];
  function handleClose() {
    let obj = toggleButtonRef(enabled[16]);
    const fn = function t() {
      return outer1_0(outer1_2[8]).runOnJS(closure_9)();
    };
    obj = { runOnJS: toggleButtonRef(enabled[8]).runOnJS, closeMenuCallback: onClose };
    fn.__closure = obj;
    fn.__workletHash = 5879184549724;
    fn.__initData = outer1_14;
    const result = sharedValue.set(obj.withTiming(0, onClose, "respect-motion-settings", fn));
  }
  const tmp6Result = callback(items1, 3);
  callback2 = tmp23;
  redux = tmp24;
  tmp3Result = tmp3(tmp4[8]);
  class P {
    constructor() {
      obj = { opacity: c6.get(), transform: null };
      obj2 = c6;
      if (enabled) {
        items = [];
      } else {
        tmp = toggleButtonRef;
        tmp2 = enabled;
        obj3 = toggleButtonRef(enabled[8]);
        tmp4 = closure_10;
        num = 1;
        str = "left";
        num2 = 1;
        value = obj2.get();
        if ("left" === closure_10) {
          num2 = -1;
        }
        obj4 = c7;
        items1 = [, ];
        num3 = 4;
        items1[0] = num2 * c7.get().width / 4;
        obj5 = offsetAnimated;
        tmp5 = null;
        x = undefined;
        if (offsetAnimated != null) {
          value1 = obj5.get();
          if (value1 != null) {
            x = value1.x;
          }
        }
        num4 = 0;
        if (null != x) {
          value2 = obj5.get();
          x1 = undefined;
          if (value2 != null) {
            x1 = value2.x;
          }
          num4 = x1;
        }
        obj = { translateX: null };
        items1[1] = num4;
        obj[0] = obj3.interpolate(value, [0, 1], items1);
        items = [, , ];
        items[0] = obj;
        tmpResult = tmp(tmp2[8]);
        tmp11 = top;
        str2 = "top";
        value3 = obj2.get();
        if ("top" === top) {
          num = -1;
        }
        items2 = [, ];
        items2[0] = num * obj4.get().height / 4;
        y = undefined;
        if (obj5 != null) {
          value4 = obj5.get();
          if (value4 != null) {
            y = value4.y;
          }
        }
        num5 = 0;
        if (null != y) {
          value5 = obj5.get();
          y1 = undefined;
          if (value5 != null) {
            y1 = value5.y;
          }
          num5 = y1;
        }
        obj1 = { translateY: null };
        items2[1] = num5;
        obj1[0] = tmpResult.interpolate(value3, [0, 1], items2);
        items[1] = obj1;
        obj2 = { scale: null };
        num6 = 2;
        num7 = 0.5;
        obj2[0] = obj2.get() / 2 + 0.5;
        items[2] = obj2;
      }
      obj[1] = items;
      return obj;
    }
  }
  obj = { visible: sharedValue, useReducedMotion: enabled, interpolate: tmp3(tmp4[8]).interpolate, dirX: tmp23, size: sharedValue1, offsetAnimated, dirY: tmp24 };
  P.__closure = obj;
  P.__workletHash = 7884133597410;
  P.__initData = closure_15;
  const animatedStyle = tmp3Result.useAnimatedStyle(P);
  obj1 = { style: items2, accessibilityViewIsModal: true, importantForAccessibility: "yes", onTouchDown: handleDismiss, onAccessibilityEscape: handleDismiss, children: null };
  items2 = [tmp.backdrop];
  const obj2 = {
    accessibilityRole: "list",
    style: items3,
    onLayout(nativeEvent) {
      let obj = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(obj);
      const fn = function n() {
        return outer1_0(outer1_2[8]).runOnJS(closure_8)();
      };
      obj = { runOnJS: toggleButtonRef(enabled[8]).runOnJS, openMenuCallback };
      fn.__closure = obj;
      fn.__workletHash = 14966618105405;
      fn.__initData = outer1_13;
      const result1 = sharedValue.set(toggleButtonRef(enabled[19]).withSpring(1, openMenuCallback, "respect-motion-settings", fn));
    },
    children: null
  };
  items3 = [tmp.menu, boxShadowStyle, tmp6Result[0], animatedStyle, style];
  let obj3 = { children: null };
  let obj4 = { value: { menuClose: handleClose, menuDismiss: handleDismiss }, children: null };
  const Children = size2.Children;
  obj4[1] = Children.map(children, (icon) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      let obj = size2;
      cloneElementResult = icon;
      if (size2.isValidElement(icon)) {
        obj = { ref: null };
        obj[0] = _slicedToArray;
        cloneElementResult = obj.cloneElement(icon, obj);
      }
    }
    return cloneElementResult;
  });
  obj3[0] = sharedValue1(redux.Provider, obj4);
  obj2[3] = sharedValue1(closure_5, obj3);
  obj1[5] = sharedValue1(offsetAnimated(enabled[8]).View, obj2);
  return sharedValue1(offsetAnimated(enabled[18]), obj1);
};