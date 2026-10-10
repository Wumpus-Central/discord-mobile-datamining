// discord_app/design/components/Menu/native/Menu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import timing from "../../../animation/reanimated/timing/timing.tsx";
import setAccessibilityFocus from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const NOOP = fn(1085).NOOP;
const jsx = fn(21).jsx;
let closure_8 = { mass: 1, stiffness: 300, damping: 25, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let __closure = { duration: 250, easing: fn(14196).STANDARD_EASING };
const createStyles = fn(5092);
let obj2 = { backdrop: null, menu: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.zIndex = 1;
obj2.backdrop = obj4;
obj2.menu = {
  position: "absolute",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  width: 220,
};
let closure_10 = createStyles.createStyles(obj2);
const context = noop.createContext({ menuClose: NOOP, menuDismiss: NOOP });
function measureButtonRef(arg0, arg1) {
  const measureResult = ReanimatedRexport.measure(arg0);
  if (null != measureResult) {
    ReanimatedRexport.runOnJS(arg1)(measureResult);
    const tmpResult = ReanimatedRexport;
  }
}
let obj5 = {
  position: "absolute",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  width: 220,
};
measureButtonRef.__closure = { measure: fn(4850).measure, runOnJS: fn(4850).runOnJS };
measureButtonRef.__workletHash = 15651320687527;
measureButtonRef.__initData = {
  code: "function measureButtonRef_MenuTsx1(ref,setDimensions){const{measure,runOnJS}=this.__closure;const measurements=measure(ref);if(measurements==null)return;runOnJS(setDimensions)(measurements);}",
};
let closure_13 = {
  code: "function MenuTsx2(){const{runOnJS,openMenuCallback}=this.__closure;return runOnJS(openMenuCallback)();}",
};
let closure_14 = {
  code: "function MenuTsx3(){const{runOnJS,closeMenuCallback}=this.__closure;return runOnJS(closeMenuCallback)();}",
};
let __initData = {
  code: "function MenuTsx4(){const{visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY}=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export const Menu = function Menu(toggleButtonRef) {
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
  size2 = undefined;
  closure_5 = undefined;
  onClose = undefined;
  let menuClose;
  let callback1;
  closure_12 = undefined;
  __initData = undefined;
  function openMenuCallback() {
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.ZqK0uI));
    }
    obj = PlatformUtils;
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
    const obj2 = { ref };
    const tmpResult = setAccessibilityFocus;
  }
  ({ style, children } = toggleButtonRef);
  const tmp = menuClose();
  enabled = size2.useContext(toggleButtonRef(enabled[9]).AccessibilityPreferencesContext).reducedMotion.enabled;
  const rect = offsetAnimated(enabled[10])();
  let size = offsetAnimated(enabled[11])();
  _slicedToArray = size2.useRef(null);
  [size2, closure_5] = size2.useState(null);
  const sharedValue = toggleButtonRef(enabled[8]).useSharedValue(0);
  let obj2 = toggleButtonRef(enabled[8]);
  const tmp5 = _slicedToArray;
  const sharedValue1 = toggleButtonRef(enabled[8]).useSharedValue({ width: 0, height: 0 });
  let items = [toggleButtonRef, size2];
  const layoutEffect = size2.useLayoutEffect(() => {
    let current;
    if (toggleButtonRef != null) {
      current = toggleButtonRef.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = null == size2;
    }
    if (tmp3) {
      ReanimatedRexport.runOnUI(measureButtonRef)(toggleButtonRef, closure_5);
    }
  }, items);
  if (onClose == null) {
    onClose = sharedValue;
  }
  let items1 = [onClose, sharedValue];
  menuClose = obj.useCallback(() => {
    const obj = timing;
    const fn = function t() {
      return toggleButtonRef(enabled[8]).runOnJS(onClose)();
    };
    fn.__closure = { runOnJS: ReanimatedRexport.runOnJS, closeMenuCallback: onClose };
    fn.__workletHash = 5879184549724;
    fn.__initData = __initData2;
    const result = sharedValue.set(obj.withTiming(0, obj, "respect-motion-settings", fn));
  }, items1);
  let items2 = [menuClose, toggleButtonRef];
  callback1 = obj.useCallback(() => {
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref: toggleButtonRef });
    callback();
  }, items2);
  const items3 = [callback1];
  const callback2 = obj.useCallback(() => {
    callback1();
    return true;
  }, items3);
  offsetAnimated(enabled[17])(callback2);
  let obj3 = toggleButtonRef(enabled[8]);
  const boxShadowStyle = toggleButtonRef(enabled[18]).generateBoxShadowStyle(
    tmp2(tmp3[18]).EIGHT_DP_ELEVATION_SHADOW_PARAMS,
  );
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
    let tmp19 = sum;
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
      tmp19 = sum2;
    }
    point = { x: tmp19, y: sum3 };
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
  const tmp22 = "top" === str12 ? y : height - y;
  if (null != offset) {
    let sum4 = x + offset.x;
    let sum5 = tmp22 + offset.y;
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
    sum5 = tmp22 + num6;
  }
  const obj4 = {};
  obj4[str9] = sum4;
  obj4[str12] = sum5;
  obj4.maxHeight = height - sum5 - ("top" === str12 ? rect.bottom : rect.top) - 12;
  const items4 = [obj4, str9, str12];
  const tmp5Result = tmp5(items4, 3);
  closure_12 = tmp26;
  __initData = tmp27;
  const tmp2Result = toggleButtonRef(enabled[18]);
  let fn = function z() {
    const obj = { opacity: sharedValue.get(), transform: null };
    if (enabled) {
      let items = [];
    } else {
      let num = 1;
      let num2 = 1;
      value = sharedValue.get();
      if ("left" === closure_12) {
        num2 = -1;
      }
      const items1 = [(num2 * sharedValue1.get().width) / 4];
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
      const obj6 = { translateX: null };
      items1[1] = num4;
      obj6.translateX = ReanimatedRexport.interpolate(value, [0, 1], items1);
      items = [obj6, ,];
      const value8 = sharedValue.get();
      if ("top" === closure_13) {
        num = -1;
      }
      const items2 = [(num * sharedValue1.get().height) / 4];
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
      const obj7 = { translateY: null };
      items2[1] = num5;
      obj7.translateY = ReanimatedRexport.interpolate(value8, [0, 1], items2);
      items[1] = obj7;
      const obj8 = { scale: sharedValue.get() / 2 + 0.5 };
      items[2] = obj8;
      const tmpResult = ReanimatedRexport;
    }
    obj.transform = items;
    return obj;
  };
  const tmp2Result2 = toggleButtonRef(enabled[8]);
  fn.__closure = {
    visible: sharedValue,
    useReducedMotion: enabled,
    interpolate: toggleButtonRef(enabled[8]).interpolate,
    dirX: tmp5Result[1],
    size: sharedValue1,
    offsetAnimated,
    dirY: tmp5Result[2],
  };
  fn.__workletHash = 7884133597410;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn);
  let obj6 = {
    style: tmp.backdrop,
    accessibilityViewIsModal: true,
    importantForAccessibility: "yes",
    onTouchDown: callback1,
    onAccessibilityEscape: callback1,
    children: null,
  };
  const obj5 = {
    visible: sharedValue,
    useReducedMotion: enabled,
    interpolate: toggleButtonRef(enabled[8]).interpolate,
    dirX: tmp5Result[1],
    size: sharedValue1,
    offsetAnimated,
    dirY: tmp5Result[2],
  };
  let obj7 = {
    accessibilityRole: "list",
    style: null,
    onLayout: function handleOpen(nativeEvent) {
      const size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = sharedValue1.set(size);
      const fn = function n() {
        return toggleButtonRef(enabled[8]).runOnJS(openMenuCallback)();
      };
      __closure = { runOnJS: ReanimatedRexport.runOnJS, openMenuCallback };
      fn.__closure = __closure;
      fn.__workletHash = 14966618105405;
      fn.__initData = __initData;
      const result1 = sharedValue.set(spring.withSpring(1, closure_8, "respect-motion-settings", fn));
    },
    children: null,
  };
  const items5 = [tmp.menu, boxShadowStyle, tmp5Result[0], animatedStyle, style];
  obj7.style = items5;
  let obj8 = { children: null };
  const obj9 = { value: { menuClose, menuDismiss: callback1 }, children: null };
  const Children = obj.Children;
  obj9.children = Children.map(children, (label, arg1) => {
    let cloneElementResult = label;
    if (0 === arg1) {
      cloneElementResult = label;
      if (noop.isValidElement(label)) {
        const obj2 = { ref };
        cloneElementResult = noop.cloneElement(label, obj2);
      }
    }
    return cloneElementResult;
  });
  obj8.children = sharedValue1(callback1.Provider, obj9);
  obj7.children = sharedValue1(closure_5, obj8);
  obj6.children = sharedValue1(offsetAnimated(enabled[8]).View, obj7);
  return sharedValue1(offsetAnimated(enabled[19]), obj6);
};
