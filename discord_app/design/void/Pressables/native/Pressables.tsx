// === Module 4783: PressableBase ===

// Module 4783 (PressableBase)
import importAllResult from "noop";
import { Pressable } from "get ActivityIndicator";
import { IOS_POINTER_STYLE } from "IOS_POINTER_STYLE";
import { getThemedRippleConfig } from "semanticColor";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function PressableBase(androidRippleConfig) {
  let children;
  let innerRef;
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const style = androidRippleConfig.style;
  const type = androidRippleConfig.type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  ({ children, innerRef } = androidRippleConfig);
  let merged = Object.assign(androidRippleConfig, Object.create(null));
  let backgroundColor;
  backgroundColor = callback().pressedHighlight.backgroundColor;
  let items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = activeOpacity.useMemo(() => androidRippleConfig(type[7]).isAndroid() ? style : ((pressed) => {
    const items = [closure_1, , ];
    if (!pressed.pressed) {
      items[1] = null;
      items[2] = outer1_5;
      return items;
    } else if ("highlight" === closure_2) {
      let tmp2 = closure_4;
      if (closure_4 == null) {
        tmp2 = closure_5;
      }
      let obj = { backgroundColor: null };
      obj[0] = tmp2;
    } else {
      let num = closure_3;
      if (closure_3 == null) {
        num = 0.2;
      }
      obj = { opacity: null };
      obj[0] = num;
    }
  }), items);
  let obj = {
    android_ripple: activeOpacity.useMemo(() => {
      let obj = androidRippleConfig(type[7]);
      if (obj.isAndroid()) {
        obj = androidRippleConfig;
        if (androidRippleConfig == null) {
          obj = {};
        }
        const cornerRadius = obj.cornerRadius;
        let tmp4 = cornerRadius;
        if (null == cornerRadius) {
          const styleProp = style(tmp[8]).getStyleProp(style, "borderRadius");
          tmp4 = cornerRadius;
          if (null != styleProp) {
            tmp4 = styleProp;
          }
          const obj3 = style(tmp[8]);
        }
        obj = {};
        const merged = Object.assign(tmp2);
        obj.cornerRadius = tmp4;
        return outer1_6(obj);
      }
      tmp = type;
    }, items1),
    style: memo,
    ref: innerRef
  };
  const merged1 = Object.assign(merged);
  obj.children = children;
  return <underlayColor android_ripple={activeOpacity.useMemo(() => {
    let obj = androidRippleConfig(type[7]);
    if (obj.isAndroid()) {
      obj = androidRippleConfig;
      if (androidRippleConfig == null) {
        obj = {};
      }
      const cornerRadius = obj.cornerRadius;
      let tmp4 = cornerRadius;
      if (null == cornerRadius) {
        const styleProp = style(tmp[8]).getStyleProp(style, "borderRadius");
        tmp4 = cornerRadius;
        if (null != styleProp) {
          tmp4 = styleProp;
        }
        const obj3 = style(tmp[8]);
      }
      obj = {};
      const merged = Object.assign(tmp2);
      obj.cornerRadius = tmp4;
      return outer1_6(obj);
    }
    tmp = type;
  }, items1)} style={memo} ref={innerRef} />;
}
let c3 = importAllResult;
let obj = { pressedHighlight: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  const merged = Object.assign(Object.assign(activeOpacity, Object.create(null)));
  return <PressableBase innerRef={arg1} type="opacity" activeOpacity={num} />;
});
const forwardRefResult1 = importAllResult.forwardRef((underlayColor, innerRef) => {
  const merged = Object.assign(Object.assign(underlayColor, Object.create(null)));
  return <PressableBase innerRef={arg1} type="highlight" underlayColor={arg0.underlayColor} />;
});
const result = require("IOS_POINTER_STYLE").fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = forwardRefResult1;