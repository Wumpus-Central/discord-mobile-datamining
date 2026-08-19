// discord_app/design/void/Pressables/native/Pressables.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { Pressable } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { IOS_POINTER_STYLE } from "../../../components/Styles/native/styleConstants.tsx";
import { getThemedRippleConfig } from "../../Form/native/FormConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

const require = fn;
function PressableBase(androidRippleConfig) {
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const style = androidRippleConfig.style;
  const type = androidRippleConfig.type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  ({ children, innerRef } = androidRippleConfig);
  let merged = Object.assign(androidRippleConfig, Object.create(null));
  const backgroundColor = callback().pressedHighlight.backgroundColor;
  let items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = activeOpacity.useMemo(() => androidRippleConfig(type[7]).isAndroid() ? style : ((pressed) => {
    const items = [closure_1, , ];
    if (!pressed.pressed) {
      items[1] = null;
      items[2] = backgroundColor;
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
          const styleProp = style(type[8]).getStyleProp(style, "borderRadius");
          tmp4 = cornerRadius;
          if (null != styleProp) {
            tmp4 = styleProp;
          }
          const obj3 = style(type[8]);
        }
        obj = {};
        const merged = Object.assign(androidRippleConfig);
        obj.cornerRadius = tmp4;
        return getThemedRippleConfig(obj);
      }
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
        const styleProp = style(type[8]).getStyleProp(style, "borderRadius");
        tmp4 = cornerRadius;
        if (null != styleProp) {
          tmp4 = styleProp;
        }
        const obj3 = style(type[8]);
      }
      obj = {};
      const merged = Object.assign(androidRippleConfig);
      obj.cornerRadius = tmp4;
      return getThemedRippleConfig(obj);
    }
  }, items1)} style={memo} ref={innerRef} />;
}
let c3 = importAllResult;
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  const merged = Object.assign(Object.assign(activeOpacity, Object.create(null)));
  return <PressableBase innerRef={innerRef} type="opacity" activeOpacity={num} />;
});
const forwardRefResult1 = importAllResult.forwardRef((underlayColor, innerRef) => {
  const merged = Object.assign(Object.assign(underlayColor, Object.create(null)));
  return <PressableBase innerRef={innerRef} type="highlight" underlayColor={underlayColor.underlayColor} />;
});
const result = require("obj132").fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = forwardRefResult1;