// === Module 16986: YouScreenNavIcon ===

// Module 16986 (YouScreenNavIcon)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import mergeProps from "mergeProps" /* 4591 */;
import Text_Text from "Text/Text" /* 4892 */;
import ClipView from "ClipView" /* 8502 */;
import native from "native" /* 8602 */;
import getIconSize from "getIconSize" /* 16387 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 16987 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const md = getIconSize.ICON_SIZE.md;
const padding = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
let c8 = "text-default";
const point = { shape: ClipView.CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
let closure_10 = createStyles.createStyles((width) => {
  let num;
  const obj = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, width, minWidth: nativeDefault.space.PX_48, maxWidth: nativeDefault.space.PX_80, flexShrink: num, flexDirection: "column", alignItems: "center", padding };
  num = 1;
  if (null == width) {
    num = 0;
  }
  const obj2 = { container: obj, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, dot: size };
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
  return obj2;
});
const forwardRef = react.forwardRef;
const memoResult = react.memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let intl;
  let items1;
  let label;
  let onPress;
  let showRedDot;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(22);
  ({ onPress, IconComponent, accessibilityLabel, label, showRedDot } = arg0);
  const tmpResult = YouScreenNavIconMeasurer;
  const youScreenNavIconMeasurement = tmpResult.useYouScreenNavIconMeasurement();
  const containerRef = youScreenNavIconMeasurement.containerRef;
  const tmp6 = closure_10(youScreenNavIconMeasurement.width);
  if (cResult[0] !== IconComponent) {
    const obj2 = { size: "md", color: TEXT_DEFAULT };
    const tmp10 = React3(IconComponent, obj2);
    cResult[0] = IconComponent;
    cResult[1] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp7) {
    if (cResult[3] === (undefined !== showRedDot && showRedDot)) {
      let tmp11;
      let tmp18;
      if (cResult[4] === tmp6.dot) {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== (undefined !== showRedDot && showRedDot)) {
        let tmp19;
        if (undefined !== showRedDot && showRedDot) {
          const obj3 = { text: intl.string(intl2.t.y2b7CA) };
          intl = intl2.intl;
          tmp19 = obj3;
        }
        cResult[6] = undefined !== showRedDot && showRedDot;
        cResult[7] = tmp19;
        tmp18 = tmp19;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === containerRef) {
        let tmp21;
        if (cResult[9] === ref) {
          tmp21 = cResult[10];
        }
        if (label == null) {
          label = accessibilityLabel;
        }
        if (cResult[11] === tmp6.label) {
          let tmp24;
          if (cResult[12] === label) {
            tmp24 = cResult[13];
          }
          if (cResult[14] === accessibilityLabel) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp11) {
                if (cResult[17] === onPress) {
                  if (cResult[18] === tmp6.container) {
                    if (cResult[19] === tmp21) {
                      let tmp28;
                      if (cResult[20] === tmp24) {
                        tmp28 = cResult[21];
                      }
                      return tmp28;
                    }
                  }
                }
              }
            }
          }
          const obj4 = { ref: tmp21, style: tmp6.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp18, onPress, hitSlop: nativeDefault.space.PX_8, children: items };
          const PressableScale = native.PressableScale;
          items = [tmp11, tmp24];
          const tmp31 = hasOwnProperty(PressableScale, obj4);
          cResult[14] = accessibilityLabel;
          cResult[15] = tmp18;
          cResult[16] = tmp11;
          cResult[17] = onPress;
          cResult[18] = tmp6.container;
          cResult[19] = tmp21;
          cResult[20] = tmp24;
          cResult[21] = tmp31;
          tmp28 = tmp31;
        }
        const obj5 = { style: tmp6.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, lineClamp: 1, children: label };
        const tmp27 = React3(Text_Text.Text, obj5);
        cResult[11] = tmp6.label;
        cResult[12] = label;
        cResult[13] = tmp27;
        tmp24 = tmp27;
      }
      const tmpResult2 = mergeProps;
      const mergeRefsResult = tmpResult2.mergeRefs(ref, containerRef);
      cResult[8] = containerRef;
      cResult[9] = ref;
      cResult[10] = mergeRefsResult;
      tmp21 = mergeRefsResult;
    }
  }
  let tmp12 = tmp7;
  if (undefined !== showRedDot && showRedDot) {
    const obj6 = { children: items1 };
    const obj7 = { cutouts: items, children: tmp7 };
    items1 = [React3(ClipViewDefault, obj7), ];
    const obj8 = { style: tmp6.dot };
    items1[1] = React3(View, obj8);
    tmp12 = hasOwnProperty(View, obj6);
  }
  cResult[2] = tmp7;
  cResult[3] = undefined !== showRedDot && showRedDot;
  cResult[4] = tmp6.dot;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((arg0, ref) => {
  let IconComponent;
  let accessibilityLabel;
  let intl;
  let items1;
  let label;
  let onPress;
  let showRedDot;
  let tmpResult;
  ({ accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const obj = YouScreenNavIconMeasurer;
  const youScreenNavIconMeasurement = obj.useYouScreenNavIconMeasurement();
  const containerRef = youScreenNavIconMeasurement.containerRef;
  const tmp4 = closure_10(youScreenNavIconMeasurement.width);
  const obj2 = { size: "md", color: TEXT_DEFAULT };
  const tmp6 = React3(IconComponent, obj2);
  let tmp7 = tmp6;
  if (showRedDot) {
    const obj3 = { children: items };
    const obj4 = { cutouts: items, children: tmp6 };
    items = [React3(ClipViewDefault, obj4), ];
    const obj5 = { style: tmp4.dot };
    items[1] = React3(View, obj5);
    tmp7 = hasOwnProperty(View, obj3);
  }
  let tmp12;
  if (showRedDot) {
    const obj6 = { text: intl.string(intl2.t.y2b7CA) };
    intl = intl2.intl;
    tmp12 = obj6;
  }
  const obj7 = { ref: tmpResult.mergeRefs(ref, containerRef), style: tmp4.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp12, onPress, hitSlop: nativeDefault.space.PX_8, children: items1 };
  const PressableScale = native.PressableScale;
  items1 = [tmp7, ];
  const obj8 = { style: tmp4.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, lineClamp: 1, children: label };
  tmpResult = mergeProps;
  const Text = Text_Text.Text;
  if (label == null) {
    label = accessibilityLabel;
  }
  items1[1] = React3(Text, obj8);
  return hasOwnProperty(PressableScale, obj7);
})));
let size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default memoResult;