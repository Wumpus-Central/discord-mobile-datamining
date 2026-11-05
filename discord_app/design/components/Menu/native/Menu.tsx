// discord_app/design/components/Menu/native/Menu.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../../../modules/screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../../modules/safe_area/useSafeAreaInsets.native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import _mod1705 from "../../../../../_runtime/metro/01705__.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import timing_timing from "../../../animation/reanimated/timing/timing.tsx";
import spring_spring from "../../../animation/reanimated/spring/spring.tsx";
import setAccessibilityFocus from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import useBackPressHandlerDefault from "../../../../modules/routing/native/useBackPressHandler.tsx";
import PassthroughTouchViewDefault from "../../../void/PassthroughTouchView/native/PassthroughTouchView.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const NOOP = fn(1072).NOOP;
const jsx = fn(21).jsx;
let closure_8 = { mass: 1, stiffness: 300, damping: 25 };
let obj = { duration: 250, easing: fn(16076).STANDARD_EASING };
const createStyles = fn(5143);
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
let items = [
  {
    code: "(function measureButtonRef_MenuTsx1(ref,setDimensions){let[measure,scheduleOnRN]=this.__closure;const measurements=measure(ref);if(measurements==null)return;scheduleOnRN(setDimensions,measurements);})",
  },
  fn(1652).measure,
  fn(1705).scheduleOnRN,
];
let closure_129_0;
let closure_129_1;
[tmp5, tmp6, tmp7] = items;
function measureButtonRef(arg0, arg1) {
  const tmp = require(arg0);
  if (null != tmp) {
    importDefault(arg1, tmp);
  }
}
let items1 = [tmp6, tmp7];
measureButtonRef.__closure = items1;
measureButtonRef.__workletHash = 5907268262035;
measureButtonRef.__initData = tmp5;
let closure_13 = {
  code: "(function MenuTsx2(){let[scheduleOnRN,openMenuCallback]=this.__closure;return scheduleOnRN(openMenuCallback);})",
};
let closure_14 = {
  code: "(function MenuTsx3(){let[scheduleOnRN,closeMenuCallback]=this.__closure;return scheduleOnRN(closeMenuCallback);})",
};
let closure_15 = {
  code: "(function MenuTsx4(){let[visible,useReducedMotion,interpolate,dirX,size,offsetAnimated,dirY]=this.__closure;var _offsetAnimated,_offsetAnimated$get,_offsetAnimated2,_offsetAnimated$get2;return{opacity:visible.get(),transform:useReducedMotion?[]:[{translateX:interpolate(visible.get(),[0,1],[(dirX==='left'?-1:1)*size.get().width/4,((_offsetAnimated=offsetAnimated)===null||_offsetAnimated===void 0||(_offsetAnimated=_offsetAnimated.get())===null||_offsetAnimated===void 0?void 0:_offsetAnimated.x)!=null?(_offsetAnimated$get=offsetAnimated.get())===null||_offsetAnimated$get===void 0?void 0:_offsetAnimated$get.x:0])},{translateY:interpolate(visible.get(),[0,1],[(dirY==='top'?-1:1)*size.get().height/4,((_offsetAnimated2=offsetAnimated)===null||_offsetAnimated2===void 0||(_offsetAnimated2=_offsetAnimated2.get())===null||_offsetAnimated2===void 0?void 0:_offsetAnimated2.y)!=null?(_offsetAnimated$get2=offsetAnimated.get())===null||_offsetAnimated$get2===void 0?void 0:_offsetAnimated$get2.y:0])},{scale:visible.get()/2+0.5}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("design/components/Menu/native/Menu.tsx");

export const MENU_OFFSET = 10;
export const MenuContext = context;
export function Menu(toggleButtonRef) {
  toggleButtonRef = toggleButtonRef.toggleButtonRef;
  _require = toggleButtonRef;
  ({ onClose, position } = toggleButtonRef);
  if (position === undefined) {
    position = "right";
  }
  let str = toggleButtonRef.align;
  if (str === undefined) {
    str = "start";
  }
  const offset = toggleButtonRef.offset;
  _slicedToArray = undefined;
  noop = undefined;
  onClose = undefined;
  let menuClose;
  let callback1;
  c6 = function openMenuCallback() {
    if (obj.isAndroid()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      AccessibilityAnnouncer.announce(intl.string(util.t.ZqK0uI));
    }
    obj = PlatformUtils;
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref: ref2 });
    const obj2 = { ref: ref2 };
    const tmpResult = setAccessibilityFocus;
  };
  ({ offsetAnimated, style, children } = toggleButtonRef);
  const tmp = closure_10();
  const rect = useSafeAreaInsetsDefault();
  let size = useWindowDimensionsDefault();
  importDefault = noop.useRef(null);
  [size2, _slicedToArray] = noop.useState(null);
  dependencyMap = size2;
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  noop = sharedValue;
  let obj2 = require("../../../../../_runtime/metro/01652__.js");
  const tmp5 = _slicedToArray;
  const sharedValue1 = require("../../../../../_runtime/metro/01652__.js").useSharedValue({ width: 0, height: 0 });
  c5 = sharedValue1;
  items = [toggleButtonRef, size2];
  const layoutEffect = noop.useLayoutEffect(() => {
    let current;
    if (ref != null) {
      current = ref.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = null == c2;
    }
    if (tmp3) {
      _mod1705.scheduleOnUI(measureButtonRef, ref, c3);
    }
  }, items);
  if (onClose == null) {
    onClose = c6;
  }
  let items1 = [onClose, sharedValue];
  menuClose = obj.useCallback(() => {
    obj = timing_timing;
    items = [closure_14, _mod1705.scheduleOnRN, onClose];
    c0 = undefined;
    c1 = undefined;
    [tmp3, tmp4, tmp5] = items;
    class MenuTsx3 {
      constructor() {
        return closure_0(closure_1);
      }
    }
    const items1 = [tmp4, tmp5];
    MenuTsx3.__closure = items1;
    MenuTsx3.__workletHash = 8034387170500;
    MenuTsx3.__initData = tmp3;
    const result = _undefined.set(obj.withTiming(0, obj, "respect-motion-settings", MenuTsx3));
  }, items1);
  let items2 = [menuClose, toggleButtonRef];
  callback1 = obj.useCallback(() => {
    const result = setAccessibilityFocus.setAccessibilityFocus({ ref });
    callback();
  }, items2);
  const items3 = [callback1];
  const callback2 = obj.useCallback(() => {
    callback1();
    return true;
  }, items3);
  useBackPressHandlerDefault(callback2);
  const items4 = [menuClose, callback1];
  const memo = obj.useMemo(() => ({ menuClose, menuDismiss: callback1 }), items4);
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  const boxShadowStyle = require("Shadows").generateBoxShadowStyle(tmp2(16077).EIGHT_DP_ELEVATION_SHADOW_PARAMS);
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
    let tmp20 = sum;
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
      tmp20 = sum2;
    }
    point = { x: tmp20, y: sum3 };
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
  const tmp23 = "top" === str12 ? y : height - y;
  if (null != offset) {
    let sum4 = x + offset.x;
    let sum5 = tmp23 + offset.y;
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
    sum5 = tmp23 + num6;
  }
  const obj4 = {};
  obj4[str9] = sum4;
  obj4[str12] = sum5;
  obj4.maxHeight = height - sum5 - ("top" === str12 ? rect.bottom : rect.top) - 12;
  const items5 = [obj4, str9, str12];
  const tmp2Result = require("Shadows");
  [tmp27, tmp28, tmp29] = tmp5(items5, 3);
  const tmp5Result = tmp5(items5, 3);
  const items6 = [
    closure_15,
    sharedValue,
    noop.useContext(require("AccessibilityPreferencesContext").AccessibilityPreferencesContext).reducedMotion.enabled,
    require("../../../../../_runtime/metro/01652__.js").interpolate,
    tmp28,
    sharedValue1,
    offsetAnimated,
    tmp29,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37] = items6;
  class MenuTsx4 {
    constructor() {
      obj = { opacity: closure_0.get(), transform: null };
      obj2 = closure_0;
      if (closure_1) {
        items = [];
      } else {
        tmp = closure_2;
        tmp3 = closure_3;
        num = 1;
        str = "left";
        num2 = 1;
        value = obj2.get();
        if ("left" === closure_3) {
          num2 = -1;
        }
        obj3 = closure_4;
        items1 = [,];
        num3 = 4;
        items1[0] = (num2 * closure_4.get().width) / 4;
        obj4 = closure_5;
        tmp4 = null;
        x = undefined;
        if (closure_5 != null) {
          value1 = obj4.get();
          if (value1 != null) {
            x = value1.x;
          }
        }
        num4 = 0;
        if (null != x) {
          value2 = obj4.get();
          x1 = undefined;
          if (value2 != null) {
            x1 = value2.x;
          }
          num4 = x1;
        }
        obj1 = { translateX: null };
        items1[1] = num4;
        obj1.translateX = tmp(value, [0, 1], items1);
        items = [, ,];
        items[0] = obj1;
        tmp10 = closure_6;
        str2 = "top";
        value3 = obj2.get();
        if ("top" === closure_6) {
          num = -1;
        }
        items2 = [,];
        items2[0] = (num * obj3.get().height) / 4;
        y = undefined;
        if (obj4 != null) {
          value4 = obj4.get();
          if (value4 != null) {
            y = value4.y;
          }
        }
        num5 = 0;
        if (null != y) {
          value5 = obj4.get();
          y1 = undefined;
          if (value5 != null) {
            y1 = value5.y;
          }
          num5 = y1;
        }
        obj8 = { translateY: null };
        items2[1] = num5;
        obj8.translateY = tmp(value3, [0, 1], items2);
        items[1] = obj8;
        obj9 = { scale: null };
        num6 = 2;
        num7 = 0.5;
        obj9.scale = obj2.get() / 2 + 0.5;
        items[2] = obj9;
      }
      obj.transform = items;
      return obj;
    }
  }
  const items7 = [tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37];
  MenuTsx4.__closure = items7;
  MenuTsx4.__workletHash = 14672287725499;
  MenuTsx4.__initData = tmp30;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(MenuTsx4);
  let obj5 = {
    style: tmp.backdrop,
    accessibilityViewIsModal: true,
    importantForAccessibility: "yes",
    onTouchDown: callback1,
    onAccessibilityEscape: callback1,
    children: null,
  };
  const tmp2Result2 = require("../../../../../_runtime/metro/01652__.js");
  let obj6 = {
    accessibilityRole: "list",
    style: null,
    onLayout: function handleOpen(nativeEvent) {
      const size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
      const result = _undefined2.set(size);
      items = [closure_13, _mod1705.scheduleOnRN, c6];
      c0 = undefined;
      c1 = undefined;
      [tmp4, tmp5, tmp6] = items;
      class MenuTsx2 {
        constructor() {
          return closure_0(closure_1);
        }
      }
      const items1 = [tmp5, tmp6];
      MenuTsx2.__closure = items1;
      MenuTsx2.__workletHash = 9487274314277;
      MenuTsx2.__initData = tmp4;
      const result1 = _undefined.set(spring_spring.withSpring(1, closure_8, "respect-motion-settings", MenuTsx2));
    },
    children: null,
  };
  const items8 = [tmp.menu, boxShadowStyle, tmp27, animatedStyle, style];
  obj6.style = items8;
  let obj7 = { children: null };
  const obj8 = { value: memo, children: null };
  const Children = obj.Children;
  obj8.children = Children.map(children, (icon, arg1) => {
    let cloneElementResult = icon;
    if (0 === arg1) {
      cloneElementResult = icon;
      if (noop.isValidElement(icon)) {
        const obj2 = { ref: ref2 };
        cloneElementResult = noop.cloneElement(icon, obj2);
      }
    }
    return cloneElementResult;
  });
  obj7.children = onClose(context.Provider, obj8);
  obj6.children = onClose(c5, obj7);
  obj5.children = onClose(_modDef1652.View, obj6);
  return onClose(PassthroughTouchViewDefault, obj5);
}
