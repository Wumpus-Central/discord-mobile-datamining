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
    tmp = closure_14();
    closure_3 = tmp;
    ref = closure_6.useRef(null);
    closure_4 = ref;
    tmp3 = closure_5(closure_6.useState(null), 2);
    [tmp4, closure_5] = tmp3;
    tmp5 = imgSource;
    tmp6 = renderImgComponent;
    tmp7 = imgSource(renderImgComponent[8])(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
    adjustmentX = tmp7.adjustmentX;
    tmp8 = graphic;
    ({ tooltipX, tooltipY } = tmp7);
    obj = graphic(renderImgComponent[5]);
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
    obj2 = graphic(renderImgComponent[9]);
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
    obj = {
      ref,
      accessibilityRole: "alert",
      style: tmp.center,
      accessible: true,
      onLayout() {
        const obj = { ref, delay: 100 };
        const result = obj.setAccessibilityFocus(obj);
      },
      children: null,
    };
    items3 = [,];
    items3[0] = closure_6.useMemo(() => {
      if (null != graphic) {
        let obj = { style: null, children: null };
        const items = [closure_3.bottomMargin];
        obj.style = items;
        obj = {};
        const merged = Object.assign(tmp);
        let str = tmp.aspectRatio;
        if (str == null) {
          str = "1/1";
        }
        const size = { height: closure_15[str], width: "auto" };
        obj.style = size;
        obj.children = closure_2_10(Graphic.Graphic, obj);
        return closure_2_10(React5, obj);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = tmp21();
        }
        if (null != imgSource) {
          obj = { source: tmp3, style: closure_3.image };
          tmp2 = closure_2_10(Image, obj);
        }
        let tmp7 = null;
        if (null != tmp2) {
          const obj1 = { style: closure_3.bottomMargin, children: tmp2 };
          tmp7 = closure_2_10(React5, obj1);
        }
        return tmp7;
      }
    }, items2);
    obj1 = { style: tmp.textGap, children: null };
    tmp17 = jsx;
    items4 = [,];
    items4[0] = tmp.text;
    textOnlyPadding = undefined;
    if (null == graphic) {
      textOnlyPadding = tmp.textOnlyPadding;
    }
    items4[1] = textOnlyPadding;
    items5 = [,];
    items5[0] = tmp17(graphic(renderImgComponent[12]).Text, {
      style: items4,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: title,
    });
    obj2 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
    items5[1] = tmp17(tmp8(tmp6[12]).Text, obj2);
    obj1.children = items5;
    items3[1] = tmp14(tmp16, obj1);
    obj.children = items3;
    items6 = [, ,];
    items6[0] = tmp14(tmp16, obj);
    tmp19 = null;
    if (null != buttonLabel) {
      tmp19 = null;
      if (null != onButtonPress) {
        obj3 = { style: null };
        obj3.style = tmp.buttonSpacing;
        items7 = [,];
        items7[0] = tmp17(tmp16, obj3);
        if (experimental_withBlurBackground) {
          obj4 = { variant: "secondary-overlay", size: "lg", icon: null, text: null, onPress: null, grow: true };
          obj4.icon = buttonIcon;
          obj4.text = buttonLabel;
          obj4.onPress = onButtonPress;
          obj5 = obj4;
        } else {
          if (buttonVariant == null) {
            buttonVariant = "secondary";
          }
          obj5 = { variant: null, size: "sm", icon: null, text: null, onPress: null, shiny: null, grow: true };
          obj5.variant = buttonVariant;
          obj5.icon = buttonIcon;
          obj5.text = buttonLabel;
          obj5.onPress = onButtonPress;
          obj5.shiny = buttonShiny;
        }
        obj6 = { children: null };
        items7[1] = tmp17(tmp8(tmp6[13]).Button, obj5);
        obj6.children = items7;
        tmp14Result = tmp14(tmp15, obj6);
      }
    }
    obj7 = { children: null };
    items6[1] = tmp19;
    obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: null,
      style: null,
      onPress: null,
      onPressIn: null,
      onPressOut: null,
      children: null,
    };
    intl = tmp8(tmp6[14]).intl;
    obj8.accessibilityLabel = intl.string(tmp8(tmp6[14]).t.cpT0Cq);
    obj8.style = tmp.closeButton;
    obj8.onPress = onDismiss;
    obj8.onPressIn = callback;
    obj8.onPressOut = callback1;
    obj9 = { size: "xs", color: tmp5(tmp6[7]).colors.ICON_STRONG };
    obj8.children = tmp17(tmp8(tmp6[15]).XSmallIcon, obj9);
    items6[2] = tmp17(Pressable, obj8);
    obj7.children = items6;
    tmp14Result1 = tmp14(tmp15, obj7);
    if (experimental_withBlurBackground) {
      obj10 = { style: null, blurTheme: "dark", pressed: null, children: null };
      obj10.style = tmp.bodyContainer;
      obj10.pressed = sharedValue;
      obj10.children = tmp14Result1;
      tmp17Result = tmp17(tmp8(tmp6[16]).BackgroundBlurView, obj10);
    } else {
      obj11 = { style: null, children: null };
      items8 = [,];
      ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
      obj11.style = items8;
      tmp17Result1 = null;
      if (null != gradientColor) {
        obj12 = { style: null, color: null, backgroundColor: null };
        obj12.style = tmp.gradient;
        obj12.color = gradientColor;
        obj12.backgroundColor = tmp5(tmp6[7]).colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
        tmp17Result1 = tmp17(tmp8(tmp6[17]).ExpressiveGradient, obj12);
      }
      items9 = [,];
      items9[0] = tmp17Result1;
      items9[1] = tmp14Result1;
      obj11.children = items9;
      tmp17Result = tmp14(tmp16, obj11);
    }
    obj13 = {
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
    tmp8Result = tmp8(tmp6[18]);
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
    obj13.style = items10;
    tmp17Result2 = "bottom" === position;
    if (tmp17Result2) {
      tmp26 = Cursor;
      obj14 = { position: "bottom", adjustmentX: null };
      obj14.adjustmentX = adjustmentX;
      tmp17Result2 = tmp17(Cursor, obj14);
    }
    items11 = [, ,];
    items11[0] = tmp17Result2;
    obj15 = {};
    tmp27 = closure_13;
    merged = Object.assign(tmp13);
    obj15.onAccessibilityEscape = onDismiss;
    obj15.accessible = false;
    obj15.onPress = onDismiss;
    items12 = [,];
    items12[0] = tmp.body;
    tmp8Result1 = tmp8(tmp6[18]);
    if (tmp8Result1.isAndroid()) {
      items13 = [,];
      items13[0] = tmp.shadow;
      items13[1] = enterExitAnimatedStyles;
      items14 = items13;
    } else {
      items14 = [];
    }
    items12[HermesBuiltin.arraySpread(items14, 1)] = buttonPressAnimationProps.style;
    obj15.style = items12;
    obj15.children = tmp17Result;
    items11[1] = tmp17(tmp27, obj15);
    tmp17Result3 = "top" === position;
    if (tmp17Result3) {
      tmp30 = Cursor;
      obj16 = { position: "top", adjustmentX: null };
      obj16.adjustmentX = adjustmentX;
      tmp17Result3 = tmp17(Cursor, obj16);
    }
    items11[2] = tmp17Result3;
    obj13.children = items11;
    return tmp14(tmp16, obj13);
  }
}
function Cursor(arg0) {
  ({ position, adjustmentX } = arg0);
  const tmp = closure_14();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  let obj = { style: null, children: null };
  const items = [
    tmp.cursorContainer,
    "top" === position ? { marginTop: -6 } : { marginBottom: -6 },
    { flexDirection: str, left: -adjustmentX },
  ];
  obj.style = items;
  obj = { style: tmp.cursorHead };
  const items1 = [closure_1_10(React5, obj)];
  obj = { style: tmp.cursorSpine };
  items1[1] = closure_1_10(React5, obj);
  obj.children = items1;
  return closure_1_11(React5, obj);
}
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ View: closure_7, Pressable } = get_ActivityIndicator);
const Image = get_ActivityIndicator.Image;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let closure_13 = ReanimatedRexport.createAnimatedComponent(Pressable);
fn(4560);
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
obj = {};
let merged = Object.assign(nativeDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj.shadow = obj;
const createStyles = {
  width: nativeDefault.modules.mobile.COACHMARK_BODY_WIDTH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
  zIndex: 1,
};
obj.body = createStyles;
obj.textGap = { gap: 4 };
obj.textOnlyPadding = { paddingHorizontal: nativeDefault.space.PX_24 };
let obj2 = { paddingHorizontal: nativeDefault.space.PX_24 };
obj.bodyBgColor = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let obj3 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT,
  backgroundColor: nativeDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
obj.gradient = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let obj4 = { borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.bodyContainer = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj.center = { alignItems: "center", justifyContent: "center" };
let obj5 = { padding: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
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
let obj6 = { height: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj.bottomMargin = { marginBottom: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
const rect = {
  position: "absolute",
  top: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING,
  right: nativeDefault.modules.mobile.COACHMARK_BUTTON_SPACING,
};
obj.closeButton = rect;
const value = createStyles.createStyles(obj);
let closure_15 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
size = fn(2);
let result = size.fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let obj = native;
  let str = "dark";
  if (!experimental_withBlurBackground.experimental_withBlurBackground) {
    str = obj.useThemeContext().theme;
  }
  obj = { theme: str, children: null };
  obj = {};
  const merged = Object.assign(experimental_withBlurBackground);
  obj.children = closure_1_10(Coachmark, obj);
  return closure_1_10(native.ThemeContextProvider, obj);
};
