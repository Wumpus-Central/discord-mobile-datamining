// discord_app/design/components/Button/native/BaseIconButton.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedRexport2 from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import IconDefault from "../../../void/Icon/native/Icon.tsx";
import ButtonConstants from "ButtonConstants.native.tsx";
import ButtonHooks from "ButtonHooks.native.tsx";
import Button_BaseButton from "BaseButton.native.tsx";
import ButtonPill from "ButtonPill.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexport = ReanimatedRexport2;

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  if ("sm" === arg1) {
    const obj2 = {
      paddingHorizontal: ButtonConstants.SMALL_BUTTON_PADDING,
      paddingVertical: ButtonConstants.SMALL_BUTTON_PADDING,
    };
    let obj = obj2;
  } else if ("md" === arg1) {
    const obj3 = {
      paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_PADDING,
      paddingVertical: ButtonConstants.MEDIUM_BUTTON_PADDING,
    };
    obj = obj3;
  } else {
    obj = {};
    if ("lg" === arg1) {
      const obj4 = {
        paddingHorizontal: ButtonConstants.LARGE_BUTTON_PADDING,
        paddingVertical: ButtonConstants.LARGE_BUTTON_PADDING,
      };
      obj = obj4;
    }
  }
  const obj5 = { button: { flexShrink: 0, flexGrow: 0, alignSelf: "center" }, pill: null };
  const merged = Object.assign(obj);
  obj5.pill = {};
  return obj5;
});
const Icon = ReanimatedRexport.createAnimatedComponent(IconDefault);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/BaseIconButton.native.tsx");

export const BaseIconButton = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseIconButton(ref) {
      let num = 2;
      const cResult = c.c(2);
      const tmp4 = _objectWithoutProperties(ref, closure_2);
      ({ variant, size, icon, scaleAmountInPx } = tmp4);
      let str = "primary";
      ({ style, pillStyle, maxFontSizeMultiplier, loading } = tmp4);
      if (undefined !== variant) {
        str = variant;
      }
      if (undefined === size) {
        size = ButtonConstants.DEFAULT_BUTTON_SIZE;
      }
      let num2 = 4;
      if (undefined !== scaleAmountInPx) {
        num2 = scaleAmountInPx;
      }
      const tmp5 = closure_6(str, size);
      let num3 = 0;
      const sharedValue = ReanimatedRexport2.useSharedValue(0);
      const tmpResult = ReanimatedRexport2;
      const iconTintStyles = ButtonHooks.useIconTintStyles(str, sharedValue);
      ButtonHooks;
      if (cResult[0] !== size) {
        let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
        if ("sm" === size) {
          MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
        } else if ("md" === size) {
          MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
        }
        const _Math = Math;
        num = (ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / num;
        const bound = Math.max(num, num3);
        cResult[num3] = size;
        num3 = 1;
        cResult[1] = bound;
      } else {
        const obj2 = {};
        const merged = Object.assign(tmp4);
        obj2.ref = ref.ref;
        const items = [tmp5.button, style];
        obj2.style = items;
        obj2.pressed = sharedValue;
        obj2.scaleAmountInPx = num2;
        obj2.hitSlop = cResult[1];
        const obj3 = {
          style: null,
          variant: null,
          size: null,
          loading: null,
          loaderSize: null,
          pressed: null,
          children: null,
        };
        const items1 = [tmp5.pill, pillStyle];
        obj3.style = items1;
        obj3.variant = str;
        obj3.size = size;
        obj3.loading = loading;
        let str4 = "xs";
        if ("lg" === size) {
          str4 = "sm";
        }
        obj3.loaderSize = str4;
        obj3.pressed = sharedValue;
        let tmp13Result = icon;
        if (!noop.isValidElement(icon)) {
          const obj4 = { source: icon, style: null };
          const items2 = [iconTintStyles, tmp9];
          obj4.style = items2;
          tmp13Result = <Icon source={icon} style={null} />;
        }
        obj3.children = tmp13Result;
        obj2.children = jsx(ButtonPill.ButtonPill, {
          style: null,
          variant: null,
          size: null,
          loading: null,
          loaderSize: null,
          pressed: null,
          children: null,
        });
        return jsx(Button_BaseButton.BaseButton, {});
      }
      const tmpResult3 = ButtonHooks;
    }
  : function BaseIconButton(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const variant = merged.variant;
      let str = "primary";
      ({ style, pillStyle } = merged);
      if (undefined !== variant) {
        str = variant;
      }
      let DEFAULT_BUTTON_SIZE = merged.size;
      if (undefined === DEFAULT_BUTTON_SIZE) {
        DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
      }
      ({ icon, scaleAmountInPx } = merged);
      let num = 4;
      ({ maxFontSizeMultiplier, loading } = merged);
      if (undefined !== scaleAmountInPx) {
        num = scaleAmountInPx;
      }
      const tmp4 = closure_6(str, DEFAULT_BUTTON_SIZE);
      const sharedValue = ReanimatedRexport2.useSharedValue(0);
      const iconTintStyles = ButtonHooks.useIconTintStyles(str, sharedValue);
      const iconSizeStyles = ButtonHooks.useIconSizeStyles(DEFAULT_BUTTON_SIZE, true, maxFontSizeMultiplier);
      let MEDIUM_BUTTON_HEIGHT = ButtonConstants.LARGE_BUTTON_HEIGHT;
      if ("sm" === DEFAULT_BUTTON_SIZE) {
        MEDIUM_BUTTON_HEIGHT = ButtonConstants.SMALL_BUTTON_HEIGHT;
      } else if ("md" === DEFAULT_BUTTON_SIZE) {
        MEDIUM_BUTTON_HEIGHT = ButtonConstants.MEDIUM_BUTTON_HEIGHT;
      }
      const bound = Math.max((ButtonConstants.MINIMUM_HIT_AREA - MEDIUM_BUTTON_HEIGHT) / 2, 0);
      const obj4 = {};
      const merged1 = Object.assign(merged);
      obj4.ref = ref.ref;
      const items = [tmp4.button, style];
      obj4.style = items;
      obj4.pressed = sharedValue;
      obj4.scaleAmountInPx = num;
      obj4.hitSlop = bound;
      const obj5 = {
        style: null,
        variant: str,
        size: DEFAULT_BUTTON_SIZE,
        loading,
        loaderSize: null,
        pressed: null,
        children: null,
      };
      const items1 = [tmp4.pill, pillStyle];
      obj5.style = items1;
      let str3 = "xs";
      if ("lg" === DEFAULT_BUTTON_SIZE) {
        str3 = "sm";
      }
      obj5.loaderSize = str3;
      obj5.pressed = sharedValue;
      let tmp11Result = icon;
      if (!noop.isValidElement(icon)) {
        const obj6 = { source: icon, style: null };
        const items2 = [iconTintStyles, iconSizeStyles];
        obj6.style = items2;
        tmp11Result = <Icon source={icon} style={null} />;
      }
      obj5.children = tmp11Result;
      obj4.children = jsx(ButtonPill.ButtonPill, {
        style: null,
        variant: str,
        size: DEFAULT_BUTTON_SIZE,
        loading,
        loaderSize: null,
        pressed: null,
        children: null,
      });
      return jsx(Button_BaseButton.BaseButton, {});
    };
