// === Module 9000: Coachmark ===

// Module 9000 (Coachmark)
import ThemesDefault from "Themes" /* 709 */;
import ManaContext from "ManaContext" /* 4204 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "module_4217" /* 4217 */;

require = arg1;
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
    ({ position, onDismiss, buttonLabel, buttonVariant, buttonIcon, onButtonPress, gradientColor, experimental_withBlurBackground, renderImgComponent } = global);
    ({ buttonShiny, enterExitAnimatedStyles } = global);
    tmp = closure_14();
    closure_3 = tmp;
    ref = closure_6.useRef(null);
    closure_4 = ref;
    tmp3 = closure_5(closure_6.useState(null), 2);
    [tmp4, closure_5] = tmp3;
    tmp5 = imgSource;
    tmp6 = renderImgComponent;
    tmp7 = require("useTooltipPosition")(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
    adjustmentX = tmp7.adjustmentX;
    tmp8 = graphic;
    ({ tooltipX, tooltipY } = tmp7);
    obj = require("module_4217");
    sharedValue = require("module_0");
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
    obj2 = require("styleProperties");
    buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
    tmp13 = closure_4(buttonPressAnimationProps, closure_3);
    items2 = [, , , ];
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
            let obj = graphic(renderImgComponent[11]);
            obj = { ref, delay: 100 };
            const result = obj.setAccessibilityFocus(obj);
          },
      children: null
    };
    items3 = [, ];
    items3[0] = closure_6.useMemo(() => {
      if (null != graphic) {
        let obj = { style: null, children: null };
        const items = [closure_3.bottomMargin];
        obj[0] = items;
        obj = {};
        const merged = Object.assign(tmp);
        let str = tmp.aspectRatio;
        if (str == null) {
          str = "1/1";
        }
        obj1 = { height: null, width: "auto" };
        obj1[0] = closure_1_15[str];
        obj.style = obj1;
        obj[1] = closure_1_10(graphic(renderImgComponent[10]).Graphic, obj);
        return closure_1_10(closure_1_7, obj);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = tmp21();
        }
        if (null != imgSource) {
          obj = { source: null, style: null };
          obj[0] = tmp3;
          obj[1] = closure_3.image;
          tmp2 = closure_1_10(closure_1_9, obj);
        }
        let tmp7 = null;
        if (null != tmp2) {
          const obj2 = { style: null, children: null };
          obj2[0] = closure_3.bottomMargin;
          obj2[1] = tmp2;
          tmp7 = closure_1_10(closure_1_7, obj2);
        }
        return tmp7;
      }
    }, items2);
    obj1 = { style: tmp.textGap, children: null };
    tmp17 = jsx;
    items4 = [, ];
    items4[0] = tmp.text;
    textOnlyPadding = undefined;
    if (null == graphic) {
      textOnlyPadding = tmp.textOnlyPadding;
    }
    items4[1] = textOnlyPadding;
    items5 = [, ];
    items5[0] = tmp17(require("Text").Text, { style: items4, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title });
    obj2 = { style: tmp.text, variant: "text-sm/medium", color: "text-subtle", children: description };
    items5[1] = tmp17(require("Text").Text, obj2);
    obj1[1] = items5;
    items3[1] = tmp14(tmp16, obj1);
    obj[5] = items3;
    items6 = [, , ];
    items6[0] = tmp14(tmp16, obj);
    tmp19 = null;
    if (null != buttonLabel) {
      tmp19 = null;
      if (null != onButtonPress) {
        obj3 = { style: null };
        obj3[0] = tmp.buttonSpacing;
        items7 = [, ];
        items7[0] = tmp17(tmp16, obj3);
        if (experimental_withBlurBackground) {
          obj4 = { variant: "secondary-overlay", size: "lg", icon: null, text: null, onPress: null, grow: true };
          obj4[2] = buttonIcon;
          obj4[3] = buttonLabel;
          obj4[4] = onButtonPress;
          obj5 = obj4;
        } else {
          if (buttonVariant == null) {
            buttonVariant = "secondary";
          }
          obj5 = { variant: null, size: "sm", icon: null, text: null, onPress: null, shiny: null, grow: true };
          obj5[0] = buttonVariant;
          obj5[2] = buttonIcon;
          obj5[3] = buttonLabel;
          obj5[4] = onButtonPress;
          obj5[5] = buttonShiny;
        }
        obj6 = { children: null };
        items7[1] = tmp17(require("Button").Button, obj5);
        obj6[0] = items7;
        tmp14Result = tmp14(tmp15, obj6);
      }
    }
    obj7 = { children: null };
    items6[1] = tmp19;
    obj8 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, onPressIn: null, onPressOut: null, children: null };
    intl = require("getSystemLocale").intl;
    obj8[1] = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj8[2] = tmp.closeButton;
    obj8[3] = onDismiss;
    obj8[4] = callback;
    obj8[5] = callback1;
    obj9 = { size: "xs", color: require("Themes").colors.ICON_STRONG };
    obj8[6] = tmp17(require("XSmallIcon").XSmallIcon, obj9);
    items6[2] = tmp17(Pressable, obj8);
    obj7[0] = items6;
    tmp14Result1 = tmp14(tmp15, obj7);
    if (experimental_withBlurBackground) {
      obj10 = { style: null, blurTheme: "dark", pressed: null, children: null };
      obj10[0] = tmp.bodyContainer;
      obj10[2] = sharedValue;
      obj10[3] = tmp14Result1;
      tmp17Result = tmp17(require("TwinButtons").BackgroundBlurView, obj10);
    } else {
      obj11 = { style: null, children: null };
      items8 = [, ];
      ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
      obj11[0] = items8;
      tmp17Result1 = null;
      if (null != gradientColor) {
        obj12 = { style: null, color: null, backgroundColor: null };
        obj12[0] = tmp.gradient;
        obj12[1] = gradientColor;
        obj12[2] = require("Themes").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
        tmp17Result1 = tmp17(require("ExpressiveGradient").ExpressiveGradient, obj12);
      }
      items9 = [, ];
      items9[0] = tmp17Result1;
      items9[1] = tmp14Result1;
      obj11[1] = items9;
      tmp17Result = tmp14(tmp16, obj11);
    }
    obj13 = {
      onLayout(nativeEvent) {
            nativeEvent = nativeEvent.nativeEvent;
            callback({ width: nativeEvent.layout.width, height: nativeEvent.layout.height });
          },
      style: null,
      children: null
    };
    items10 = [, , ];
    items10[0] = tmp.container;
    tmp8Result = require("set");
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
    obj13[1] = items10;
    tmp17Result2 = "bottom" === position;
    if (tmp17Result2) {
      tmp26 = Cursor;
      obj14 = { position: "bottom", adjustmentX: null };
      obj14[1] = adjustmentX;
      tmp17Result2 = tmp17(Cursor, obj14);
    }
    items11 = [, , ];
    items11[0] = tmp17Result2;
    obj15 = {};
    tmp27 = closure_13;
    merged = Object.assign(tmp13);
    obj15.onAccessibilityEscape = onDismiss;
    obj15.accessible = false;
    obj15.onPress = onDismiss;
    items12 = [, ];
    items12[0] = tmp.body;
    tmp8Result1 = require("set");
    if (tmp8Result1.isAndroid()) {
      items13 = [, ];
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
      obj16[1] = adjustmentX;
      tmp17Result3 = tmp17(Cursor, obj16);
    }
    items11[2] = tmp17Result3;
    obj13[2] = items11;
    return tmp14(tmp16, obj13);
  }
}
function Cursor(arg0) {
  ({ position, adjustmentX } = arg0);
  const tmp = callback4();
  let str = "column";
  if ("top" === position) {
    str = "column-reverse";
  }
  let obj = { style: items, children: null };
  items = [tmp.cursorContainer, "top" === position ? { marginTop: -6 } : { marginBottom: -6 }, { flexDirection: str, left: -adjustmentX }];
  obj = { style: tmp.cursorHead };
  const items1 = [callback2(closure_7, obj), ];
  obj = { style: tmp.cursorSpine };
  items1[1] = callback2(closure_7, obj);
  obj[1] = items1;
  return callback3(closure_7, obj);
}
let closure_3 = ["style"];
({ View: error, Pressable } = get_ActivityIndicator);
const Image = get_ActivityIndicator.Image;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let closure_13 = importDefaultResult.createAnimatedComponent(Pressable);
let obj = { container: { position: "absolute", alignItems: "center" }, shadow: null, body: null, textGap: null, textOnlyPadding: null, bodyBgColor: null, gradient: null, bodyContainer: null, center: null, buttonSpacing: null, text: null, cursorContainer: null, cursorHead: null, cursorSpine: null, image: null, bottomMargin: null, closeButton: null };
obj = {};
let merged = Object.assign(ThemesDefault.shadows.SHADOW_BUTTON_OVERLAY);
obj[1] = obj;
createCacheKey = { width: ThemesDefault.modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", zIndex: 1 };
obj[2] = createCacheKey;
obj[3] = { gap: 4 };
obj[4] = { paddingHorizontal: ThemesDefault.space.PX_24 };
let obj2 = { paddingHorizontal: ThemesDefault.space.PX_24 };
obj[5] = { borderWidth: 1, borderColor: ThemesDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: ThemesDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.lg };
let obj3 = { borderWidth: 1, borderColor: ThemesDefault.colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: ThemesDefault.colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.lg };
obj[6] = { borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
let obj4 = { borderRadius: ThemesDefault.radii.lg, overflow: "hidden" };
obj[7] = { padding: ThemesDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj[8] = { alignItems: "center", justifyContent: "center" };
let obj5 = { padding: ThemesDefault.space.PX_16, alignItems: "center", justifyContent: "center" };
obj[9] = { height: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj[10] = { maxWidth: 200, textAlign: "center" };
obj[11] = { alignItems: "center", zIndex: 0 };
let obj6 = { height: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj[12] = { height: 8, width: 8, borderRadius: ThemesDefault.radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
let obj7 = { height: 8, width: 8, borderRadius: ThemesDefault.radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[13] = { width: 2, height: 16, backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[14] = { height: 40, width: 40 };
const obj8 = { width: 2, height: 16, backgroundColor: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
obj[15] = { marginBottom: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let obj9 = { marginBottom: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
obj[16] = { position: "absolute", top: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING, right: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
let obj10 = { position: "absolute", top: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING, right: ThemesDefault.modules.mobile.COACHMARK_BUTTON_SPACING };
let result = require("set").fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let obj = ManaContext;
  let str = "dark";
  if (!experimental_withBlurBackground.experimental_withBlurBackground) {
    str = obj.useThemeContext().theme;
  }
  obj = { theme: str, children: null };
  obj = {};
  const merged = Object.assign(experimental_withBlurBackground);
  obj[1] = callback2(Coachmark, obj);
  return callback2(ManaContext.ThemeContextProvider, obj);
};