import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import set from "set";
import get_ActivityIndicator from "TwinButtons";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4146";

let Pressable;
let c10;
let closure_12;
let error;
let unpackModuleId;
const require = arg1;
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
    tmp = createAnimatedComponent();
    Cursor = tmp;
    ref = set.useRef(null);
    Cursor = ref;
    tmp3 = Cursor(set.useState(null), 2);
    [tmp4, Cursor] = tmp3;
    tmp5 = imgSource;
    tmp6 = renderImgComponent;
    tmp7 = require("useTooltipPosition")(tmp4, surfaceMeasurements, targetMeasurements, position, -8 + num);
    adjustmentX = tmp7.adjustmentX;
    tmp8 = graphic;
    ({ tooltipX, tooltipY } = tmp7);
    obj = require("module_4146");
    sharedValue = require("_objectWithoutProperties");
    set = sharedValue;
    items = [];
    items[0] = sharedValue;
    items1 = [];
    items1[0] = sharedValue;
    callback = set.useCallback(() => {
      const result = sharedValue.set(1);
    }, items);
    callback1 = set.useCallback(() => {
      const result = sharedValue.set(0);
    }, items1);
    obj2 = require("styleProperties");
    buttonPressAnimationProps = obj2.useButtonPressAnimationProps(sharedValue);
    tmp13 = Cursor(buttonPressAnimationProps, Cursor);
    items2 = [, , , ];
    items2[0] = graphic;
    items2[1] = imgSource;
    items2[2] = renderImgComponent;
    items2[3] = tmp;
    memo = set.useMemo(() => {
      if (null != graphic) {
        let obj = { style: null, children: null };
        const items = [tmp.bottomMargin];
        obj[0] = items;
        obj = {};
        const merged = Object.assign(tmp);
        let str = tmp.aspectRatio;
        if (str == null) {
          str = "1/1";
        }
        const obj1 = { height: null, width: "auto" };
        obj1[0] = outer1_15[str];
        obj.style = obj1;
        obj[1] = outer1_10(graphic(renderImgComponent[10]).Graphic, obj);
        return outer1_10(outer1_7, obj);
      } else {
        let tmp2 = null;
        if (null != renderImgComponent) {
          tmp2 = tmp21();
        }
        if (null != imgSource) {
          obj = { source: null, style: null };
          obj[0] = tmp3;
          obj[1] = tmp.image;
          tmp2 = outer1_10(outer1_9, obj);
        }
        let tmp7 = null;
        if (null != tmp2) {
          const obj2 = { style: null, children: null };
          obj2[0] = tmp.bottomMargin;
          obj2[1] = tmp2;
          tmp7 = outer1_10(outer1_7, obj2);
        }
        return tmp7;
      }
    }, items2);
    tmp15 = require("useIsMobileVisualRefreshExperimentEnabled")("Coachmark");
    tmp16 = jsxs;
    tmp17 = Fragment;
    tmp18 = View;
    obj = {
      ref,
      accessibilityRole: "alert",
      style: tmp.center,
      accessible: true,
      onLayout() {
            let obj = graphic(renderImgComponent[12]);
            obj = { ref, delay: 100 };
            const result = obj.setAccessibilityFocus(obj);
          },
      children: null
    };
    items3 = [, ];
    items3[0] = memo;
    textGap = undefined;
    if (tmp15) {
      textGap = tmp.textGap;
    }
    obj1 = { style: textGap, children: null };
    tmp20 = jsx;
    items4 = [, ];
    items4[0] = tmp.text;
    textOnlyPadding = undefined;
    if (null == graphic) {
      textOnlyPadding = tmp.textOnlyPadding;
    }
    obj2 = { style: items4, variant: null, color: "mobile-text-heading-primary", children: null };
    items4[1] = textOnlyPadding;
    str = "heading-md/bold";
    if (tmp15) {
      str = "text-md/semibold";
    }
    obj2[1] = str;
    obj2[3] = title;
    items5 = [, ];
    items5[0] = tmp20(require("Text").Text, obj2);
    obj3 = { style: tmp.text, variant: "text-sm/medium", color: null, children: null };
    str2 = "text-default";
    if (tmp15) {
      str2 = "text-subtle";
    }
    obj3[2] = str2;
    obj3[3] = description;
    items5[1] = tmp20(require("Text").Text, obj3);
    obj1[1] = items5;
    items3[1] = tmp16(tmp18, obj1);
    obj[5] = items3;
    items6 = [, , ];
    items6[0] = tmp16(tmp18, obj);
    tmp22 = null;
    if (null != buttonLabel) {
      tmp22 = null;
      if (null != onButtonPress) {
        obj4 = { style: null };
        obj4[0] = tmp.buttonSpacing;
        items7 = [, ];
        items7[0] = tmp20(tmp18, obj4);
        if (experimental_withBlurBackground) {
          obj5 = { variant: "secondary-overlay", size: "lg", icon: null, text: null, onPress: null, grow: true };
          obj5[2] = buttonIcon;
          obj5[3] = buttonLabel;
          obj5[4] = onButtonPress;
          obj6 = obj5;
        } else {
          if (buttonVariant == null) {
            buttonVariant = "secondary";
          }
          obj6 = { variant: null, size: null, icon: null, text: null, onPress: null, shiny: null, grow: true };
          obj6[0] = buttonVariant;
          str3 = "lg";
          if (tmp15) {
            str3 = "sm";
          }
          obj6[1] = str3;
          obj6[2] = buttonIcon;
          obj6[3] = buttonLabel;
          obj6[4] = onButtonPress;
          obj6[5] = buttonShiny;
        }
        obj7 = { children: null };
        items7[1] = tmp20(require("Button").Button, obj6);
        obj7[0] = items7;
        tmp16Result = tmp16(tmp17, obj7);
      }
    }
    items6[1] = tmp22;
    obj8 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, onPressIn: null, onPressOut: null, children: null };
    tmp24 = Pressable;
    intl = require("getSystemLocale").intl;
    obj8[1] = intl.string(require("getSystemLocale").t.cpT0Cq);
    obj8[2] = tmp.closeButton;
    obj8[3] = onDismiss;
    obj8[4] = callback;
    obj8[5] = callback1;
    if (tmp15) {
      obj9 = { size: "xs", color: null };
      obj9[1] = require("Themes").colors.ICON_STRONG;
      obj10 = obj9;
    } else {
      obj10 = {};
    }
    obj11 = { children: null };
    obj8[6] = tmp20(require("XSmallIcon").XSmallIcon, obj10);
    items6[2] = tmp20(tmp24, obj8);
    obj11[0] = items6;
    tmp16Result1 = tmp16(tmp17, obj11);
    if (experimental_withBlurBackground) {
      obj12 = { style: null, blurTheme: "dark", pressed: null, children: null };
      obj12[0] = tmp.bodyContainer;
      obj12[2] = sharedValue;
      obj12[3] = tmp16Result1;
      tmp20Result = tmp20(require("TwinButtons").BackgroundBlurView, obj12);
    } else {
      obj13 = { style: null, children: null };
      items8 = [, ];
      ({ bodyContainer: arr9[0], bodyBgColor: arr9[1] } = tmp);
      obj13[0] = items8;
      tmp20Result1 = null;
      if (tmp15) {
        tmp20Result1 = null;
        if (null != gradientColor) {
          obj14 = { style: null, color: null, backgroundColor: null };
          obj14[0] = tmp.gradient;
          obj14[1] = gradientColor;
          obj14[2] = require("Themes").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT;
          tmp20Result1 = tmp20(require("ExpressiveGradient").ExpressiveGradient, obj14);
        }
      }
      items9 = [, ];
      items9[0] = tmp20Result1;
      items9[1] = tmp16Result1;
      obj13[1] = items9;
      tmp20Result = tmp16(tmp18, obj13);
    }
    obj15 = {
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
    obj15[1] = items10;
    tmp20Result2 = "bottom" === position;
    if (tmp20Result2) {
      tmp30 = Cursor;
      obj16 = { position: "bottom", adjustmentX: null };
      obj16[1] = adjustmentX;
      tmp20Result2 = tmp20(Cursor, obj16);
    }
    items11 = [, , ];
    items11[0] = tmp20Result2;
    obj17 = {};
    tmp31 = createAnimatedComponent;
    merged = Object.assign(tmp13);
    obj17.onAccessibilityEscape = onDismiss;
    obj17.accessible = false;
    obj17.onPress = onDismiss;
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
    obj17.style = items12;
    obj17.children = tmp20Result;
    items11[1] = tmp20(tmp31, obj17);
    tmp20Result3 = "top" === position;
    if (tmp20Result3) {
      tmp34 = Cursor;
      obj18 = { position: "top", adjustmentX: null };
      obj18[1] = adjustmentX;
      tmp20Result3 = tmp20(Cursor, obj18);
    }
    items11[2] = tmp20Result3;
    obj15[2] = items11;
    return tmp16(tmp18, obj15);
  }
}
function Cursor(arg0) {
  let adjustmentX;
  let position;
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
let closure_13 = require("module_4146").createAnimatedComponent(Pressable);
let obj = { container: { position: "absolute", alignItems: "center" }, shadow: null, body: null, textGap: null, textOnlyPadding: null, bodyBgColor: null, gradient: null, bodyContainer: null, center: null, buttonSpacing: null, text: null, cursorContainer: null, cursorHead: null, cursorSpine: null, image: null, bottomMargin: null, closeButton: null };
obj = {};
let merged = Object.assign(require("Themes").shadows.SHADOW_BUTTON_OVERLAY);
obj[1] = obj;
createCacheKey = { width: require("Themes").modules.mobile.COACHMARK_BODY_WIDTH, borderRadius: require("Themes").radii.lg, overflow: "hidden", zIndex: 1 };
obj[2] = createCacheKey;
obj[3] = { gap: 4 };
obj[4] = { paddingHorizontal: require("Themes").space.PX_24 };
let obj2 = { paddingHorizontal: require("Themes").space.PX_24 };
obj[5] = { borderWidth: 1, borderColor: require("Themes").colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: require("Themes").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg };
let obj3 = { borderWidth: 1, borderColor: require("Themes").colors.MOBILE_COACHMARK_BORDER_DEFAULT, backgroundColor: require("Themes").colors.MOBILE_COACHMARK_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg };
obj[6] = { borderRadius: require("Themes").radii.lg, overflow: "hidden" };
let obj4 = { borderRadius: require("Themes").radii.lg, overflow: "hidden" };
obj[7] = { padding: require("Themes").space.PX_16, alignItems: "center", justifyContent: "center" };
obj[8] = { alignItems: "center", justifyContent: "center" };
let obj5 = { padding: require("Themes").space.PX_16, alignItems: "center", justifyContent: "center" };
obj[9] = { height: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING };
obj[10] = { maxWidth: 200, textAlign: "center" };
obj[11] = { alignItems: "center", zIndex: 0 };
let obj6 = { height: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING };
obj[12] = { height: 8, width: 8, borderRadius: require("Themes").radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
let obj7 = { height: 8, width: 8, borderRadius: require("Themes").radii.xs, borderWidth: 2, backgroundColor: "transparent", borderColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
obj[13] = { width: 2, height: 16, backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
obj[14] = { height: 40, width: 40 };
let obj8 = { width: 2, height: 16, backgroundColor: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
obj[15] = { marginBottom: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING };
let obj9 = { marginBottom: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING };
obj[16] = { position: "absolute", top: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING, right: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING };
let closure_14 = createCacheKey.createStyles(obj);
let closure_15 = { "21/9": 90, "16/9": 90, "6/4": 60, "2/1": 40, "1/1": 40 };
let obj10 = { position: "absolute", top: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING, right: require("Themes").modules.mobile.COACHMARK_BUTTON_SPACING };
let result = require("noop").fileFinishedImporting("design/components/Coachmark/native/Coachmark.native.tsx");

export { Coachmark };
export const CoachmarkContainer = function CoachmarkContainer(experimental_withBlurBackground) {
  let obj = require(3997) /* ManaContext */;
  let str = "dark";
  if (!experimental_withBlurBackground.experimental_withBlurBackground) {
    str = obj.useThemeContext().theme;
  }
  obj = { theme: str, children: null };
  obj = {};
  const merged = Object.assign(experimental_withBlurBackground);
  obj[1] = callback2(Coachmark, obj);
  return callback2(require(3997) /* ManaContext */.ThemeContextProvider, obj);
};