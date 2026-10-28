// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import mergeProps from "../../../../../design/utils/native/mergeProps.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import native from "../../../../../design/components/experimental/native.tsx";
import ClipViewDefault from "../../../../../design/components/Icon/native/ClipView.tsx";
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const md = fn(14399).ICON_SIZE.md;
const padding = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
let c8 = "text-default";
const point = { shape: fn(9437).CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
const createStyles = fn(5004);
let closure_10 = createStyles.createStyles((width) => {
  const obj = {
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    width,
    minWidth: nativeDefault.space.PX_48,
    maxWidth: nativeDefault.space.PX_80,
    flexShrink: null,
    flexDirection: "column",
    alignItems: "center",
    padding: null,
  };
  let num = 1;
  if (null == width) {
    num = 0;
  }
  const obj2 = { container: obj, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, dot: null };
  obj.flexShrink = num;
  obj.padding = padding;
  const size = {
    backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION,
    borderRadius: nativeDefault.radii.round,
    height: 8,
    width: 8,
    position: "absolute",
    right: 0,
    top: 0,
  };
  obj2.dot = size;
  return obj2;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function YouScreenNavIcon(arg0) {
        const cResult = c.c(25);
        ({ onPress, IconComponent, icon, accessibilityLabel, label, showRedDot, dotStyle, ref, testID } = arg0);
        const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
        const containerRef = youScreenNavIconMeasurement.containerRef;
        const tmp6 = closure_10(youScreenNavIconMeasurement.width);
        if (cResult[0] === IconComponent) {
          if (cResult[1] === icon) {
            let tmp7 = cResult[2];
          }
          if (cResult[3] === dotStyle) {
            if (cResult[4] === tmp7) {
              if (cResult[5] === tmp4) {
                if (cResult[6] === tmp6.dot) {
                  let tmp11 = cResult[7];
                }
                if (cResult[8] !== tmp4) {
                  let tmp19;
                  if (tmp4) {
                    const obj2 = { text: null };
                    const intl = util.intl;
                    obj2.text = intl.string(util.t.y2b7CA);
                    tmp19 = obj2;
                  }
                  cResult[8] = tmp4;
                  cResult[9] = tmp19;
                  let tmp18 = tmp19;
                } else {
                  tmp18 = cResult[9];
                }
                if (cResult[10] === containerRef) {
                  if (cResult[11] === ref) {
                    let tmp20 = cResult[12];
                  }
                  if (label == null) {
                    label = accessibilityLabel;
                  }
                  if (cResult[13] === tmp6.label) {
                    if (cResult[14] === label) {
                      let tmp23 = cResult[15];
                    }
                    if (cResult[16] === accessibilityLabel) {
                      if (cResult[17] === tmp18) {
                        if (cResult[18] === tmp11) {
                          if (cResult[19] === onPress) {
                            if (cResult[20] === tmp6.container) {
                              if (cResult[21] === tmp20) {
                                if (cResult[22] === tmp23) {
                                  if (cResult[23] === testID) {
                                    let tmp27 = cResult[24];
                                  }
                                  return tmp27;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj3 = {
                      ref: tmp20,
                      style: tmp6.container,
                      accessibilityRole: "button",
                      accessibilityLabel,
                      accessibilityValue: tmp18,
                      onPress,
                      hitSlop: nativeDefault.space.PX_8,
                      testID,
                      children: null,
                    };
                    items = [tmp11, tmp23];
                    obj3.children = items;
                    const tmp30 = hasOwnProperty(native.PressableScale, obj3);
                    cResult[16] = accessibilityLabel;
                    cResult[17] = tmp18;
                    cResult[18] = tmp11;
                    cResult[19] = onPress;
                    cResult[20] = tmp6.container;
                    cResult[21] = tmp20;
                    cResult[22] = tmp23;
                    cResult[23] = testID;
                    cResult[24] = tmp30;
                    tmp27 = tmp30;
                  }
                  const obj4 = {
                    style: tmp6.label,
                    variant: "text-xs/semibold",
                    color,
                    maxFontSizeMultiplier: 2,
                    lineClamp: 1,
                    children: label,
                  };
                  const tmp26 = React4(Text_Text.Text, obj4);
                  cResult[13] = tmp6.label;
                  cResult[14] = label;
                  cResult[15] = tmp26;
                  tmp23 = tmp26;
                }
                const mergeRefsResult = mergeProps.mergeRefs(ref, containerRef);
                cResult[10] = containerRef;
                cResult[11] = ref;
                cResult[12] = mergeRefsResult;
                tmp20 = mergeRefsResult;
                const tmpResult2 = mergeProps;
              }
            }
          }
          let tmp12 = tmp7;
          if (tmp4) {
            const obj5 = { children: null };
            const obj6 = { cutouts: items, children: tmp7 };
            const items1 = [React4(ClipViewDefault, obj6)];
            const obj7 = { style: null };
            const items2 = [tmp6.dot, dotStyle];
            obj7.style = items2;
            items1[1] = React4(View, obj7);
            obj5.children = items1;
            tmp12 = hasOwnProperty(View, obj5);
          }
          cResult[3] = dotStyle;
          cResult[4] = tmp7;
          cResult[5] = tmp4;
          cResult[6] = tmp6.dot;
          cResult[7] = tmp12;
          tmp11 = tmp12;
        }
        let tmp8 = icon;
        if (icon == null) {
          const obj8 = { size: "md", color: TEXT_DEFAULT };
          tmp8 = React4(IconComponent, obj8);
        }
        cResult[0] = IconComponent;
        cResult[1] = icon;
        cResult[2] = tmp8;
        tmp7 = tmp8;
        const tmpResult = YouScreenNavIconMeasurer;
      }
    : function YouScreenNavIcon(arg0) {
        ({ icon, accessibilityLabel, label, showRedDot } = arg0);
        ({ onPress, IconComponent } = arg0);
        if (showRedDot === undefined) {
          showRedDot = false;
        }
        ({ dotStyle, ref, testID } = arg0);
        const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
        const tmp4 = closure_10(youScreenNavIconMeasurement.width);
        if (icon == null) {
          const obj2 = { size: "md", color: TEXT_DEFAULT };
          icon = React4(IconComponent, obj2);
        }
        let tmp7 = icon;
        if (showRedDot) {
          const obj3 = { children: null };
          const obj4 = { cutouts: items, children: icon };
          items = [React4(ClipViewDefault, obj4)];
          const obj5 = { style: null };
          const items1 = [tmp4.dot, dotStyle];
          obj5.style = items1;
          items[1] = React4(View, obj5);
          obj3.children = items;
          tmp7 = hasOwnProperty(View, obj3);
        }
        let tmp13;
        if (showRedDot) {
          const obj6 = { text: null };
          const intl = util.intl;
          obj6.text = intl.string(util.t.y2b7CA);
          tmp13 = obj6;
        }
        const obj7 = {
          ref: null,
          style: null,
          accessibilityRole: "button",
          accessibilityLabel: null,
          accessibilityValue: null,
          onPress: null,
          hitSlop: null,
          testID: null,
          children: null,
        };
        obj7.ref = mergeProps.mergeRefs(ref, youScreenNavIconMeasurement.containerRef);
        obj7.style = tmp4.container;
        obj7.accessibilityLabel = accessibilityLabel;
        obj7.accessibilityValue = tmp13;
        obj7.onPress = onPress;
        obj7.hitSlop = nativeDefault.space.PX_8;
        obj7.testID = testID;
        const items2 = [tmp7];
        const obj8 = {
          style: tmp4.label,
          variant: "text-xs/semibold",
          color,
          maxFontSizeMultiplier: 2,
          lineClamp: 1,
          children: null,
        };
        if (label == null) {
          label = accessibilityLabel;
        }
        obj8.children = label;
        items2[1] = React4(Text_Text.Text, obj8);
        obj7.children = items2;
        return hasOwnProperty(native.PressableScale, obj7);
      },
);
