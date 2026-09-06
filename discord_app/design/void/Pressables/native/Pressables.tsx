// discord_app/design/void/Pressables/native/Pressables.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import StyleSheetUtilsDefault from "../../../../utils/native/StyleSheetUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function PressableBase(androidRippleConfig) {
  androidRippleConfig = androidRippleConfig.androidRippleConfig;
  const style = androidRippleConfig.style;
  const type = androidRippleConfig.type;
  const activeOpacity = androidRippleConfig.activeOpacity;
  const underlayColor = androidRippleConfig.underlayColor;
  ({ children, innerRef } = androidRippleConfig);
  let merged = Object.assign(
    androidRippleConfig,
    Object.assign({
      children: 0,
      androidRippleConfig: 0,
      style: 0,
      type: 0,
      activeOpacity: 0,
      underlayColor: 0,
      innerRef: 0,
    }),
  );
  const backgroundColor = closure_8().pressedHighlight.backgroundColor;
  let items = [type, activeOpacity, underlayColor, style, backgroundColor];
  const items1 = [androidRippleConfig, style];
  const memo = activeOpacity.useMemo(
    () =>
      PlatformUtils.isAndroid()
        ? style
        : (pressed) => {
            const items = [style, ,];
            if (!pressed.pressed) {
              items[1] = null;
              items[2] = backgroundColor;
              return items;
            } else if ("highlight" === type) {
              let tmp2 = underlayColor;
              if (underlayColor == null) {
                tmp2 = closure_1_5;
              }
              let obj = { backgroundColor: tmp2 };
            } else {
              let num = activeOpacity;
              if (activeOpacity == null) {
                num = 0.2;
              }
              obj = { opacity: num };
            }
          },
    items,
  );
  let obj = {
    android_ripple: activeOpacity.useMemo(() => {
      let obj = PlatformUtils;
      if (obj.isAndroid()) {
        obj = androidRippleConfig;
        if (androidRippleConfig == null) {
          obj = {};
        }
        const cornerRadius = obj.cornerRadius;
        let tmp4 = cornerRadius;
        if (null == cornerRadius) {
          const styleProp = StyleSheetUtilsDefault.getStyleProp(style, "borderRadius");
          tmp4 = cornerRadius;
          if (null != styleProp) {
            tmp4 = styleProp;
          }
        }
        obj = {};
        const merged = Object.assign(androidRippleConfig);
        obj.cornerRadius = tmp4;
        return getThemedRippleConfig(obj);
      }
    }, items1),
    style: memo,
    ref: innerRef,
  };
  const merged1 = Object.assign(merged);
  obj.children = children;
  return (
    <underlayColor
      android_ripple={activeOpacity.useMemo(() => {
        let obj = PlatformUtils;
        if (obj.isAndroid()) {
          obj = androidRippleConfig;
          if (androidRippleConfig == null) {
            obj = {};
          }
          const cornerRadius = obj.cornerRadius;
          let tmp4 = cornerRadius;
          if (null == cornerRadius) {
            const styleProp = StyleSheetUtilsDefault.getStyleProp(style, "borderRadius");
            tmp4 = cornerRadius;
            if (null != styleProp) {
              tmp4 = styleProp;
            }
          }
          obj = {};
          const merged = Object.assign(androidRippleConfig);
          obj.cornerRadius = tmp4;
          return getThemedRippleConfig(obj);
        }
      }, items1)}
      style={memo}
      ref={innerRef}
    />
  );
}
const Pressable = fn(17).Pressable;
const IOS_POINTER_STYLE = fn(4984).IOS_POINTER_STYLE;
const getThemedRippleConfig = fn(1182).getThemedRippleConfig;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { pressedHighlight: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj.pressedHighlight = obj;
let closure_8 = createStyles.createStyles(obj);
const forwardRefResult = noop.forwardRef((activeOpacity, innerRef) => {
  let num = activeOpacity.activeOpacity;
  if (num === undefined) {
    num = 0.2;
  }
  const merged = Object.assign(Object.assign(activeOpacity, Object.assign({ activeOpacity: 0 })));
  return <PressableBase innerRef={innerRef} type="opacity" activeOpacity={num} />;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Pressables/native/Pressables.tsx");

export const PressableOpacity = forwardRefResult;
export const PressableHighlight = noop.forwardRef((underlayColor, innerRef) => {
  const merged = Object.assign(Object.assign(underlayColor, Object.assign({ underlayColor: 0 })));
  return <PressableBase innerRef={innerRef} type="highlight" underlayColor={underlayColor.underlayColor} />;
});
