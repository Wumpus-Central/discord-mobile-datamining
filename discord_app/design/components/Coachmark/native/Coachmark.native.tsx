// discord_app/design/components/Coachmark/native/Coachmark.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import setAccessibilityFocus from "../../../../modules/a11y/native/setAccessibilityFocus.android.tsx";
import Graphic from "../../Graphic/native/Graphic.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
class Coachmark {
  constructor(arg0) {
    ({ targetMeasurements, surfaceMeasurements, offsetY } = global);
    num = 0;
    ({ title, description } = global);
    if (undefined !== offsetY) {
      num = offsetY;
    }
    graphic = global.graphic;
    imgSource = global.imgSource;
    ({
      position,
      onDismiss,
      buttonLabel,
      buttonVariant,
      buttonIcon,
      onButtonPress,
      gradientColor,
      experimental_withBlurBackground,
      renderImgComponent,
    } = global);
    ({ buttonShiny, enterExitAnimatedStyles } = global);
    tmp = closure_15();
    closure_3 = tmp;
    ref = closure_6.useRef(null);
    closure_4 = ref;
    tmp3 = closure_5(closure_6.useState(null), 2);
    [tmp4, closure_5] = tmp3;
    tmp5 = imgSource;
    tmp6 = renderImgComponent;
    tmp7 = imgSource(renderImgComponent[9])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
    adjustmentX = tmp7.adjustmentX;
    tmp8 = graphic;
    ({ tooltipX, tooltipY } = tmp7);
    obj = graphic(renderImgComponent[6]);
    sharedValue = obj.useSharedValue(0);
    closure_6 = sharedValue;
    items = [];
    items[0] = sharedValue;
    items1 = [];
    items1[0] = sharedValue;
    callback = closure_6.useCallback(() => {
      const result = sharedValue.set(1);
    }, items);
    callback1 = closure_6.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1);
    obj2 = graphic(renderImgComponent[10]);
    buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
    tmp13 = closure_4(buttonPressAnimationProps, closure_3);
    items2 = [, , ,];
    items2[0] = graphic;
    items2[1] = imgSource;
    items2[2] = renderImgComponent;
    items2[3] = tmp;
    tmp14 = jsxs;
    tmp15 = Fragment;
    tmp16 = View;
    obj1 = {
      ref,
      accessibilityRole: "alert",
      style: tmp.center,
      accessible: true,
      onLayout() {
        const result = setAccessibilityFocus.setAccessibilityFocus({ ref, delay: 100 });
      },
      children: null,
    };
    items3 = [,];
    items3[0] = closure_6.useMemo(() => {
      if (null != graphic) {
        const obj2 = { style: null, children: null };
        const items = [closure_3.bottomMargin];
        obj2.style = items;
        const obj3 = {};
        const merged = Object.assign(graphic);
        let str = graphic.aspectRatio;
        if (str == null) {
          str = "1/1";
        }
        const size = { height: closure_16[str], width: "auto" };
        obj3.style = size;
        obj2.children = closure_2_11(Graphic.Graphic, obj3);
        return closure_2_11(React5, obj2);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = tmp21();
        }
        if (null != imgSource) {
          const obj = { source: tmp3, style: closure_3.image };
          tmp2 = closure_2_11(Image, obj);
        }
        let tmp7 = null;
        if (null != tmp2) {
          const obj4 = { style: closure_3.bottomMargin, children: tmp2 };
          tmp7 = closure_2_11(React5, obj4);
        }
        return tmp7;
      }
    }, items2);
    obj22 = { style: tmp.textGap, children: null };
    tmp17 = jsx;
    items4 = [,];
    items4[0] = tmp.text;
    textOnlyPadding = undefined;
    if (null == graphic) {
      textOnlyPadding = tmp.textOnlyPadding;
    }
    items4[1] = textOnlyPadding;
    items5 = [,];
    items5[0] = tmp17(graphic(renderImgComponent[13]).Text, {
      style: items4,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: title,
    });
    obj23 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
    items5[1] = tmp17(tmp8(tmp6[13]).Text, obj23);
    obj22.children = items5;
    items3[1] = tmp14(tmp16, obj22);
    obj1.children = items3;
    items6 = [, ,];
    items6[0] = tmp14(tmp16, obj1);
    tmp19 = null;
    if (null != buttonLabel) {
      tmp19 = null;
      if (null != onButtonPress) {
        obj24 = { style: null };
        obj24.style = tmp.buttonSpacing;
        items7 = [,];
        items7[0] = tmp17(tmp16, obj24);
        if (experimental_withBlurBackground) {
          obj25 = { variant: "secondary-overlay", size: "lg", icon: null, text: null, onPress: null, grow: true };
          obj25.icon = buttonIcon;
          obj25.text = buttonLabel;
          obj25.onPress = onButtonPress;
          obj26 = obj25;
        } else {
          if (buttonVariant == null) {
            buttonVariant = "secondary";
          }
          obj26 = { variant: null, size: "sm", icon: null, text: null, onPress: null, shiny: null, grow: true };
          obj26.variant = buttonVariant;
          obj26.icon = buttonIcon;
          obj26.text = buttonLabel;
          obj26.onPress = onButtonPress;
          obj26.shiny = buttonShiny;
        }
        obj27 = { children: null };
        items7[1] = tmp17(tmp8(tmp6[14]).Button, obj26);
        obj27.children = items7;
        tmp14Result = tmp14(tmp15, obj27);
      }
    }
    obj28 = { children: null };
    items6[1] = tmp19;
    obj29 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      onPress: null,
      onPressIn: null,
      onPressOut: null,
      children: null,
    };
    intl = tmp8(tmp6[15]).intl;
    obj29.accessibilityLabel = intl.string(tmp8(tmp6[15]).t.cpT0Cq);
    obj29.style = tmp.closeButton;
    obj29.onPress = onDismiss;
    obj29.onPressIn = callback;
    obj29.onPressOut = callback1;
    obj30 = { size: "xs", color: tmp5(tmp6[8]).colors.ICON_STRONG };
    obj29.children = tmp17(tmp8(tmp6[16]).XSmallIcon, obj30);
    items6[2] = tmp17(Pressable, obj29);
    obj28.children = items6;
    tmp14Result1 = tmp14(tmp15, obj28);
    if (experimental_withBlurBackground) {
      obj31 = { style: null, blurTheme: "dark", pressed: null, children: null };
      obj31.style = tmp.bodyContainer;
      obj31.pressed = sharedValue;
      obj31.children = tmp14Result1;
      tmp17Result = tmp17(tmp8(tmp6[17]).BackgroundBlurView, obj31);
    } else {
      obj32 = { style: null, children: null };
      items8 = [,];
      ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
      obj32.style = items8;
      tmp17Result1 = null;
      if (null != gradientColor) {
        obj33 = { style: null, color: null, backgroundColor: null };
        obj33.style = tmp.gradient;
        obj33.color = gradientColor;
        obj33.backgroundColor = tmp5(tmp6[8]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
        tmp17Result1 = tmp17(tmp8(tmp6[18]).ExpressiveGradient, obj33);
      }
      items9 = [,];
      items9[0] = tmp17Result1;
      items9[1] = tmp14Result1;
      obj32.children = items9;
      tmp17Result = tmp14(tmp16, obj32);
    }
    obj34 = {
      onLayout(nativeEvent) {
        nativeEvent = nativeEvent.nativeEvent;
        const size = { width: nativeEvent.layout.width, height: nativeEvent.layout.height };
        _slicedToArray(size);
      },
      style: null,
      children: null,
    };
    items10 = [, ,];
    items10[0] = tmp.container;
    tmp8Result = tmp8(tmp6[19]);
    shadow = undefined;
    if (tmp8Result.isIOS()) {
      shadow = tmp.shadow;
    }
    items10[1] = shadow;
    num2 = 0;
    if (null != tmp4) {
      num2 = 1;
    }
    items10[2] = { opacity: num2, top: tooltipY, left: tooltipX };
    obj34.style = items10;
    tmp17Result2 = "bottom" === position;
    if (tmp17Result2) {
      tmp26 = Cursor;
      obj35 = { position: "bottom", adjustmentX: null };
      obj35.adjustmentX = adjustmentX;
      tmp17Result2 = tmp17(Cursor, obj35);
    }
    items11 = [, ,];
    items11[0] = tmp17Result2;
    obj36 = {};
    tmp27 = closure_14;
    merged = Object.assign(tmp13);
    obj36.onAccessibilityEscape = onDismiss;
    obj36.accessible = false;
    obj36.onPress = onDismiss;
    items12 = [,];
    items12[0] = tmp.body;
    tmp8Result1 = tmp8(tmp6[19]);
    if (tmp8Result1.isAndroid()) {
      items13 = [,];
      items13[0] = tmp.shadow;
      items13[1] = enterExitAnimatedStyles;
      items14 = items13;
    } else {
      items14 = [];
    }
    items12[HermesBuiltin.arraySpread(items14, 1)] = buttonPressAnimationProps.style;
    obj36.style = items12;
    obj36.children = tmp17Result;
    items11[1] = tmp17(tmp27, obj36);
    tmp17Result3 = "top" === position;
    if (tmp17Result3) {
      tmp30 = Cursor;
      obj37 = { position: "top", adjustmentX: null };
      obj37.adjustmentX = adjustmentX;
      tmp17Result3 = tmp17(Cursor, obj37);
    }
    items11[2] = tmp17Result3;
    obj34.children = items11;
    return tmp14(tmp16, obj34);
  }
}
function Cursor(arg0) {
  ({ position, adjustmentX } = arg0);
  const tmp = closure_15();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  const obj = { style: null, children: null };
  const items = [
    tmp.cursorContainer,
    "top" === position ? { marginTop: -6 } : { marginBottom: -6 },
    { flexDirection: str, left: -adjustmentX },
  ];
  obj.style = items;
  const items1 = [closure_1_11(React5, { style: tmp.cursorHead }), closure_1_11(React5, { style: tmp.cursorSpine })];
  obj.children = items1;
  return closure_1_12(React5, obj);
}
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ View: closure_7, Pressable } = get_ActivityIndicator);
const Image = get_ActivityIndicator.Image;
const ThemeTypes = fn(1074).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
let closure_14 = ReanimatedRexport.createAnimatedComponent(Pressable);
const createStyles = fn(4836);
let obj = {
  container: { position: "absolute", alignItems: "center" },
  shadow: null,
  body: null,
  textGap: null,
  textOnlyPadding: null,
  bodyBgColor: null,
  gradient: null,
  bodyContainer: null,
  center: null,
  buttonSpacing: null,
  text: null,
  cursorContainer: null,
  cursorHead: null,
  cursorSpine: null,
  image: null,
  bottomMargin: null,
  closeButton: null,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj.shadow = {};
obj.body = {
  width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  zIndex: 1,
};
obj.textGap = { gap: 4 };
let obj3 = {};
let obj4 = {
  width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  zIndex: 1,
};
obj.textOnlyPadding = { paddingHorizontal: nativeDefault.space.PX_24 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_24 };
obj.bodyBgColor = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let obj6 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
obj.gradient = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let obj7 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.bodyContainer = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.center = { alignItems: "center", justifyContent: "center" };
let obj8 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.buttonSpacing = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj.text = { maxWidth: 200, textAlign: "center" };
obj.cursorContainer = { alignItems: "center", zIndex: 0 };
let size = {
  height: 8,
  width: 8,
  borderRadius: nativeDefault.radii.xs,
  borderWidth: 2,
  backgroundColor: "transparent",
  borderColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj.cursorHead = size;
const size1 = { width: 2, height: 16, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj.cursorSpine = size1;
obj.image = { height: 40, width: 40 };
let obj9 = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj.bottomMargin = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
const rect = {
  position: "absolute",
  top: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING,
  right: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING,
};
obj.closeButton = rect;
const __initData = createStyles.createStyles(obj);
let closure_16 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let DARK = native.useThemeContext().theme;
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    DARK = ThemeTypes.DARK;
  }
  const obj2 = { theme: DARK, children: null };
  const merged = Object.assign(experimental_withBlurBackground);
  obj2.children = closure_1_11(Coachmark, {});
  return closure_1_11(native.ThemeContextProvider, obj2);
};
