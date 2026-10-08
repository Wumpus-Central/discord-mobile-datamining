// discord_app/design/components/Button/native/ImageButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import springPresets from "../../../animation/reanimated/spring/springPresets.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = [
  "size",
  "label",
  "grow",
  "image",
  "accessibilityLabel",
  "maxFontSizeMultiplier",
  "onPressIn",
  "onPressOut",
  "ref",
];
get_ActivityIndicator = fn(17);
({ View: metroRequire, Image: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles((arg0, arg1, arg2) => {
  let MEDIUM_BUTTON_PADDING = ButtonConstants.LARGE_BUTTON_PADDING;
  if ("sm" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.SMALL_BUTTON_PADDING;
  } else if ("md" === arg0) {
    MEDIUM_BUTTON_PADDING = ButtonConstants.MEDIUM_BUTTON_PADDING;
  }
  const sum = arg1 + 2 * MEDIUM_BUTTON_PADDING;
  const buttonBorderRadius = ButtonConstants.getButtonBorderRadius(arg0);
  const obj = {
    paddingBottom: nativeDefault.space.PX_4,
    gap: nativeDefault.space.PX_8,
    alignItems: "center",
    alignSelf: "center",
    flexGrow: null,
  };
  let num = 0;
  if (arg2) {
    num = 1;
  }
  const obj2 = { labelPressable: obj, pill: null, imageWrapper: null, image: null, imageDim: null };
  obj.flexGrow = num;
  const tmpResult = ButtonConstants;
  obj2.pill = {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minHeight: sum,
    minWidth: sum,
    borderRadius: buttonBorderRadius,
    borderWidth: 0,
    outlineWidth: ButtonConstants.BUTTON_BORDER_WIDTH,
    outlineColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT,
    outlineStyle: "solid",
  };
  obj2.imageWrapper = { width: sum, height: sum, position: "relative" };
  obj2.image = { width: sum, height: sum };
  const rect = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: nativeDefault.colors.REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND,
    borderRadius: buttonBorderRadius,
  };
  obj2.imageDim = rect;
  return obj2;
});
const __initData = {
  code: 'function ImageButtonNativeTsx1(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,"animate-always")};}',
};
const __initData2 = {
  code: "function ImageButtonNativeTsx2(){const{withSpring,pressed,ON_PRESS_SPRING}=this.__closure;return{opacity:withSpring(pressed.get()===1?1:0,ON_PRESS_SPRING,'animate-always')};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ImageButton.native.tsx");

export const ImageButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function ImageButton(onPressOut) {
      const cResult = require("c").c(53);
      if (cResult[0] !== onPressOut) {
        ({ size, label, grow, image, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = onPressOut);
        _require = onPressIn;
        onPressOut = onPressOut.onPressOut;
        importDefault = onPressOut;
        const tmp16 = _objectWithoutProperties(onPressOut, closure_3);
        cResult[0] = onPressOut;
        cResult[1] = accessibilityLabel;
        cResult[2] = grow;
        cResult[3] = image;
        cResult[4] = label;
        cResult[5] = maxFontSizeMultiplier;
        cResult[6] = onPressIn;
        cResult[7] = onPressOut;
        cResult[8] = tmp16;
        cResult[9] = onPressOut.ref;
        cResult[10] = size;
        let tmp13 = size;
        let tmp8 = maxFontSizeMultiplier;
        let tmp6 = image;
        let tmp5 = grow;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp8 = cResult[5];
        _require = cResult[6];
        importDefault = cResult[7];
        tmp13 = cResult[10];
      }
      let str = "lg";
      if (undefined !== tmp13) {
        str = tmp13;
      }
      let obj = require("c");
      const tmp17 = closure_10(str, require("ButtonHooks").useIconSizeStyles(str, true, tmp8).width, tmp5);
      const tmpResult = require("ButtonHooks");
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      if (cResult[11] === onPressIn) {
        if (cResult[14] === tmp10) {
          class T {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[11]);
              num = 0;
              if (1 === closure_2.get()) {
                num = 1;
              }
              obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
              return obj1;
            }
          }
          const obj2 = {
            withSpring: tmp(tmp2[11]).withSpring,
            pressed: sharedValue,
            ON_PRESS_SPRING: tmp(tmp2[12]).ON_PRESS_SPRING,
          };
          T.__closure = obj2;
          T.__workletHash = 12412199607843;
          T.__initData = __initData;
          const animatedStyle = tmp(tmp2[10]).useAnimatedStyle(T);
          if (cResult[17] === tmp6) {
            if (cResult[18] === tmp17.image) {
              let tmp23 = cResult[19];
            }
            if (cResult[20] === animatedStyle) {
              if (cResult[21] === tmp17.imageDim) {
                let tmp27 = cResult[22];
              }
              if (cResult[23] === tmp17.imageWrapper) {
                if (cResult[24] === tmp23) {
                  class T {
                    constructor() {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj = closure_0(closure_2[11]);
                      num = 0;
                      if (1 === closure_2.get()) {
                        num = 1;
                      }
                      obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                      return obj1;
                    }
                  }
                }
              }
              class T {
                constructor() {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj = closure_0(closure_2[11]);
                  num = 0;
                  if (1 === closure_2.get()) {
                    num = 1;
                  }
                  obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                  return obj1;
                }
              }
              const obj3 = { style: tmp17.imageWrapper, children: null };
              const items = [tmp23, tmp27];
              obj3.children = items;
              const tmp32 = closure_9(closure_6, obj3);
              cResult[23] = tmp17.imageWrapper;
              cResult[24] = tmp23;
              cResult[25] = tmp27;
              cResult[26] = tmp32;
            }
            class T {
              constructor() {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[11]);
                num = 0;
                if (1 === closure_2.get()) {
                  num = 1;
                }
                obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
                return obj1;
              }
            }
            const obj4 = { style: null };
            const items1 = [tmp17.imageDim, animatedStyle];
            obj4.style = items1;
            const tmp29 = closure_8(require("ReanimatedRexport").View, obj4);
            cResult[20] = animatedStyle;
            cResult[21] = tmp17.imageDim;
            cResult[22] = tmp29;
            tmp27 = tmp29;
          }
          const obj5 = { source: tmp6, style: tmp17.image };
          const tmp26 = closure_8(closure_7, obj5);
          cResult[17] = tmp6;
          cResult[18] = tmp17.image;
          cResult[19] = tmp26;
          tmp23 = tmp26;
          const tmpResult4 = tmp(tmp2[10]);
        }
        class G {
          constructor(arg0) {
            result = closure_2.set(0);
            if (closure_1 != null) {
              tmp3 = onPressOut;
              tmp2Result = tmp2(onPressOut);
            }
            return;
          }
        }
        cResult[14] = tmp10;
        cResult[15] = sharedValue;
        cResult[16] = G;
      }
      const fn = function v(arg0) {
        const result = sharedValue.set(1);
        if (closure_0 != null) {
          tmp2(arg0);
        }
      };
      cResult[11] = onPressIn;
      cResult[12] = sharedValue;
      cResult[13] = fn;
      const tmpResult3 = require("ReanimatedRexport");
    }
  : function ImageButton(size) {
      let str = size.size;
      if (str === undefined) {
        str = "lg";
      }
      ({ label, accessibilityLabel, maxFontSizeMultiplier, onPressIn } = size);
      const onPressOut = size.onPressOut;
      ({ grow, image } = size);
      const merged = Object.assign(
        size,
        Object.assign({
          size: 0,
          label: 0,
          grow: 0,
          image: 0,
          accessibilityLabel: 0,
          maxFontSizeMultiplier: 0,
          onPressIn: 0,
          onPressOut: 0,
          ref: 0,
        }),
      );
      let sharedValue;
      const tmp4 = closure_10(
        str,
        onPressIn(sharedValue[9]).useIconSizeStyles(str, true, maxFontSizeMultiplier).width,
        grow,
      );
      let obj = onPressIn(sharedValue[9]);
      sharedValue = onPressIn(sharedValue[10]).useSharedValue(0);
      const items = [sharedValue, onPressIn];
      const callback = noop.useCallback((arg0) => {
        const result = sharedValue.set(1);
        if (onPressIn != null) {
          tmp2(arg0);
        }
      }, items);
      const items1 = [sharedValue, onPressOut];
      const callback1 = noop.useCallback((arg0) => {
        const result = sharedValue.set(0);
        if (onPressOut != null) {
          tmp2(arg0);
        }
      }, items1);
      const obj2 = onPressIn(sharedValue[10]);
      class B {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[11]);
          num = 0;
          if (1 === closure_2.get()) {
            num = 1;
          }
          obj1 = { opacity: obj.withSpring(num, tmp(tmp2[12]).ON_PRESS_SPRING, "animate-always") };
          return obj1;
        }
      }
      const obj3 = onPressIn(sharedValue[10]);
      B.__closure = {
        withSpring: onPressIn(sharedValue[11]).withSpring,
        pressed: sharedValue,
        ON_PRESS_SPRING: onPressIn(sharedValue[12]).ON_PRESS_SPRING,
      };
      B.__workletHash = 2649796969632;
      B.__initData = __initData2;
      const obj5 = { style: tmp4.imageWrapper, children: null };
      const animatedStyle = obj3.useAnimatedStyle(B);
      const items2 = [closure_8(closure_7, { source: image, style: tmp4.image })];
      const obj7 = { style: null };
      const items3 = [tmp4.imageDim, animatedStyle];
      obj7.style = items3;
      items2[1] = closure_8(onPressOut(sharedValue[10]).View, obj7);
      obj5.children = items2;
      const tmp11 = closure_9(closure_6, obj5);
      if (null != label) {
        const obj8 = { style: tmp4.labelPressable };
        const merged1 = Object.assign(merged);
        obj8.variant = "none";
        obj8.accessibilityLabel = accessibilityLabel;
        const obj9 = { ref };
        const merged2 = Object.assign(merged);
        obj9.icon = tmp11;
        obj9.accessibilityRole = "none";
        obj9.accessibilityLabel = "";
        obj9.size = "lg";
        obj9.pillStyle = tmp4.pill;
        obj9.variant = "secondary";
        obj9.onPressIn = callback;
        obj9.onPressOut = callback1;
        obj9.maxFontSizeMultiplier = maxFontSizeMultiplier;
        const items4 = [closure_8(onPressIn(tmp3[13]).BaseIconButton, obj9)];
        const obj10 = {
          variant: "text-xs/medium",
          color: "interactive-text-default",
          maxFontSizeMultiplier,
          children: label,
        };
        items4[1] = closure_8(onPressIn(tmp3[14]).Text, obj10);
        obj8.children = items4;
        let tmp10Result = closure_9(onPressIn(tmp3[15]).BaseButton, obj8);
      } else {
        const obj11 = { ref };
        const merged3 = Object.assign(merged);
        obj11.size = str;
        obj11.icon = tmp11;
        obj11.accessibilityLabel = accessibilityLabel;
        obj11.pillStyle = tmp4.pill;
        obj11.variant = "secondary";
        obj11.onPressIn = callback;
        obj11.onPressOut = callback1;
        tmp10Result = closure_8(onPressIn(tmp3[13]).BaseIconButton, obj11);
      }
      return tmp10Result;
    };
