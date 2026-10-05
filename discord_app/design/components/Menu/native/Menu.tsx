// === Module 14205: Menu ===

// Module 14205 (Menu)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4590 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import spring from "spring" /* 5597 */;
import react_native from "react-native" /* 5779 */;
import Easing from "Easing" /* 13935 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import createStyles_mod from "createStyles" /* 4890 */;
import size_mod from "module_2" /* 2 */;

let set;

let StyleSheet;
let hasOwnProperty;
let obj3;
let obj4;
let _slicedToArray = _slicedToArray_mod;
({ ScrollView: hasOwnProperty, StyleSheet } = react_native2);
const NOOP = Constants.NOOP;
const jsx = Fragment.jsx;
let closure_8 = { mass: 1, stiffness: 300, damping: 25, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let __closure = { duration: 250, easing: Easing.STANDARD_EASING };
let createStyles = createStyles_mod;
let obj2 = { backdrop: obj3, menu: obj4 };
obj3 = { zIndex: 1 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "absolute", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, width: 220 };
let closure_10 = createStyles(obj2);
let context = react.createContext({ menuClose: NOOP, menuDismiss: NOOP });
function measureButtonRef(arg0, arg1) {
  const obj = ReanimatedRexport;
  const measureResult = obj.measure(arg0);
  if (null != measureResult) {
    const tmpResult = ReanimatedRexport;
    tmpResult.runOnJS(arg1)(measureResult);
  }
}
let obj5 = { measure: ReanimatedRexport.measure, runOnJS: ReanimatedRexport.runOnJS };
measureButtonRef.__closure = obj5;
measureButtonRef.__workletHash = 15651320687527;
measureButtonRef.__initData = { code: "function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}" };
let closure_13 = { code: "function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}" };
let closure_14 = { code: "function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}" };
const __initData = { code: "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export const Menu = function Menu(toggleButtonRef) {
  let Children;
  let Provider;
  let View;
  let children;
  let closure_11;
  let items2;
  let items3;
  let obj6;
  let obj7;
  let obj8;
  let offset;
  let offsetAnimated;
  let onClose;
  let pageX;
  let pageY;
  let point;
  let position;
  let ref;
  let str12;
  let str2;
  let str9;
  let style;
  let sum4;
  let sum5;
  let x;
  function t() {
    const obj = toggleButtonRef(enabled[8]);
    return obj.runOnJS(onClose)();
  }
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
  let size2;
  onClose = undefined;
  closure_10 = undefined;
  context = undefined;
  function openMenuCallback() {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl2.intl;
      announce(intl.string(intl2.t.ZqK0uI));
    }
    const obj2 = { ref };
    const tmpResult = react_native;
    const result = tmpResult.setAccessibilityFocus(obj2);
  }
  ({ style, children } = toggleButtonRef);
  const tmp = closure_10();
  let tmp3 = toggleButtonRef;
  const tmp4 = enabled;
  enabled = size2.useContext(toggleButtonRef(enabled[9]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const rect = offsetAnimated(enabled[10])();
  size = offsetAnimated(enabled[11])();
  _slicedToArray = size2.useRef(null);
  const tmp7 = _slicedToArray(size2.useState(null), 2);
  const tmp2 = size2;
  size2 = tmp7[0];
  let closure_5 = tmp7[1];
  let obj = toggleButtonRef(enabled[8]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = toggleButtonRef(enabled[8]);
  const sharedValue1 = obj2.useSharedValue({ width: 0, height: 0 });
  let items = [toggleButtonRef, size2];
  const layoutEffect = size2.useLayoutEffect(() => {
    let current;
    if (toggleButtonRef != null) {
      current = toggleButtonRef.current;
    }
    const tmp3 = null != current && null == size2;
    if (tmp3) {
      const obj = ReanimatedRexport;
      obj.runOnUI(measureButtonRef)(toggleButtonRef, closure_5);
    }
  }, items);
  const tmp6 = _slicedToArray;
  if (onClose == null) {
    onClose = sharedValue;
  }
  const tmp3Result = tmp3(tmp4[17]);
  const boxShadowStyle = tmp3Result.generateBoxShadowStyle(tmp3(tmp4[17]).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
  if ("left" === position) {
    str2 = "column";
  } else {
    str2 = "row";
  }
  if (null == size2) {
    point = { x: 0, y: 0 };
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
    point = { x: tmp16, y: sum3 };
  }
  const height = size.height;
  if ("left" === position) {
    str9 = "right";
  } else {
    str9 = "left";
    if ("row" === str2) {
      str9 = "left";
    }
  }
  if ("top" === position) {
    str12 = "bottom";
  } else {
    str12 = "top";
    if ("column" === str2) {
      str12 = "top";
    }
  }
  if ("left" === str9) {
    x = point.x;
  } else {
    x = size.width - point.x;
  }
  let y = point.y;
  const tmp19 = "top" === str12 ? y : height - y;
  if (null != offset) {
    sum4 = x + offset.x;
    sum5 = tmp19 + offset.y;
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
    let obj = react_native;
    const obj2 = { ref: toggleButtonRef };
    const result = obj.setAccessibilityFocus(obj2);
    const fn = t;
    set = sharedValue.set;
    const obj3 = timing;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose };
    fn.__workletHash = 5879184549724;
    fn.__initData = __initData2;
    ({ runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose });
    const result1 = set(obj3.withTiming(0, obj, "respect-motion-settings", fn));
  }
  let obj3 = { maxHeight: height - sum5 - ("top" === str12 ? rect.bottom : rect.top) - 12 };
  obj3[str9] = sum4;
  obj3[str12] = sum5;
  let items1 = [obj3, str9, str12];
  function handleClose() {
    set = sharedValue.set;
    const obj = timing;
    const fn = t;
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose };
    fn.__workletHash = 5879184549724;
    fn.__initData = __initData2;
    ({ runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose });
    const result = set(obj.withTiming(0, obj, "respect-motion-settings", fn));
  }
  closure_10 = tmp24;
  context = tmp25;
  const first = tmp6(items1, 3)[0];
  const tmp6Result = tmp6(items1, 3);
  const tmp3Result2 = tmp3(tmp4[8]);
  class P {
    constructor() {
      let items;
      const obj = { opacity: sharedValue.get(), transform: items };
      if (enabled) {
        items = [];
      } else {
        const interpolate = ReanimatedRexport.interpolate;
        let num = 1;
        let num2 = 1;
        ReanimatedRexport;
        const value = sharedValue.get();
        if ("left" === closure_10) {
          num2 = -1;
        }
        const items1 = [num2 * sharedValue1.get().width / 4, ];
        let x;
        if (offsetAnimated != null) {
          const value6 = offsetAnimated.get();
          if (value6 != null) {
            x = value6.x;
          }
        }
        let num4 = 0;
        if (null != x) {
          const value7 = offsetAnimated.get();
          let x1;
          if (value7 != null) {
            x1 = value7.x;
          }
          num4 = x1;
        }
        items1[1] = num4;
        items = [{ translateX: interpolate(value, [0, 1], items1) }, , ];
        const obj5 = { translateX: interpolate(value, [0, 1], items1) };
        const interpolate2 = ReanimatedRexport.interpolate;
        ReanimatedRexport;
        const value8 = sharedValue.get();
        if ("top" === closure_11) {
          num = -1;
        }
        const items2 = [num * sharedValue1.get().height / 4, ];
        let y;
        if (offsetAnimated != null) {
          const value9 = offsetAnimated.get();
          if (value9 != null) {
            y = value9.y;
          }
        }
        let num5 = 0;
        if (null != y) {
          const value10 = offsetAnimated.get();
          let y1;
          if (value10 != null) {
            y1 = value10.y;
          }
          num5 = y1;
        }
        items2[1] = num5;
        items[1] = { translateY: interpolate2(value8, [0, 1], items2) };
        const obj6 = { translateY: interpolate2(value8, [0, 1], items2) };
        items[2] = { scale: sharedValue.get() / 2 + 0.5 };
        const obj7 = { scale: sharedValue.get() / 2 + 0.5 };
      }
      return obj;
    }
  }
  const obj4 = { visible: sharedValue, useReducedMotion: enabled, interpolate: tmp3(tmp4[8]).interpolate, dirX: tmp24, size: sharedValue1, offsetAnimated, dirY: tmp25 };
  P.__closure = obj4;
  P.__workletHash = 7884133597410;
  P.__initData = __initData;
  const animatedStyle = tmp3Result2.useAnimatedStyle(P);
  let obj5 = { style: items2, accessibilityViewIsModal: true, importantForAccessibility: "yes", onTouchDown: handleDismiss, onAccessibilityEscape: handleDismiss, children: sharedValue1(View, obj6) };
  items2 = [tmp.backdrop];
  obj6 = {
    accessibilityRole: "list",
    style: items3,
    onLayout(nativeEvent) {
      size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(size);
      const fn = function n() {
        const obj = toggleButtonRef(enabled[8]);
        return obj.runOnJS(openMenuCallback)();
      };
      set = sharedValue.set;
      const obj2 = spring;
      __closure = { runOnJS: ReanimatedRexport.runOnJS, openMenuCallback };
      fn.__closure = __closure;
      fn.__workletHash = 14966618105405;
      fn.__initData = __initData;
      const result1 = set(obj2.withSpring(1, closure_8, "respect-motion-settings", fn));
    },
    children: sharedValue1(closure_5, obj7)
  };
  items3 = [tmp.menu, boxShadowStyle, first, animatedStyle, style];
  obj7 = { children: sharedValue1(Provider, obj8) };
  obj8 = {
    value: { menuClose: handleClose, menuDismiss: handleDismiss },
    children: Children.map(children, (label, arg1) => {
      let cloneElementResult = label;
      if (0 === arg1) {
        cloneElementResult = label;
        if (react.isValidElement(label)) {
          const obj2 = { ref };
          cloneElementResult = react.cloneElement(label, obj2);
        }
      }
      return cloneElementResult;
    })
  };
  Children = tmp2.Children;
  const tmp5Result = offsetAnimated(tmp4[18]);
  View = tmp5(tmp4[8]).View;
  Provider = context.Provider;
  return sharedValue1(tmp5Result, obj5);
};