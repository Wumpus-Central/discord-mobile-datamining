// === Module 17267: YouScreenNavIcon ===

// Module 17267 (YouScreenNavIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import mergeProps from "mergeProps" /* 4783 */;
import Text_Text from "Text/Text" /* 5086 */;
import native from "native" /* 8517 */;
import ClipViewDefault from "ClipView" /* 8986 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 17268 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const md = fn(16647).ICON_SIZE.md;
const padding = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
let c8 = "text-default";
const point = { shape: fn(8986).CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles((width) => {
  const obj = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, width, minWidth: nativeDefault.space.PX_48, maxWidth: nativeDefault.space.PX_80, flexShrink: null, flexDirection: "column", alignItems: "center", padding: null };
  let num = 1;
  if (null == width) {
    num = 0;
  }
  const obj2 = { container: obj, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, dot: null };
  obj.flexShrink = num;
  obj.padding = padding;
  const size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
  obj2.dot = size;
  return obj2;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function YouScreenNavIcon(arg0) {
  const cResult = c.c(22);
  ({ onPress, IconComponent, accessibilityLabel, label, showRedDot, ref } = arg0);
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  const containerRef = youScreenNavIconMeasurement.containerRef;
  const tmp6 = closure_10(youScreenNavIconMeasurement.width);
  if (cResult[0] !== IconComponent) {
    const obj2 = { size: "md", color: TEXT_DEFAULT };
    const tmp10 = React4(IconComponent, obj2);
    cResult[0] = IconComponent;
    cResult[1] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === tmp7) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === tmp6.dot) {
        let tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        let tmp19;
        if (tmp4) {
          const obj3 = { text: null };
          const intl = util.intl;
          obj3.text = intl.string(util.t.y2b7CA);
          tmp19 = obj3;
        }
        cResult[6] = tmp4;
        cResult[7] = tmp19;
        let tmp18 = tmp19;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === containerRef) {
        if (cResult[9] === ref) {
          let tmp20 = cResult[10];
        }
        if (label == null) {
          label = accessibilityLabel;
        }
        if (cResult[11] === tmp6.label) {
          if (cResult[12] === label) {
            let tmp23 = cResult[13];
          }
          if (cResult[14] === accessibilityLabel) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp11) {
                if (cResult[17] === onPress) {
                  if (cResult[18] === tmp6.container) {
                    if (cResult[19] === tmp20) {
                      if (cResult[20] === tmp23) {
                        let tmp27 = cResult[21];
                      }
                      return tmp27;
                    }
                  }
                }
              }
            }
          }
          const obj4 = { ref: tmp20, style: tmp6.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp18, onPress, hitSlop: nativeDefault.space.PX_8, children: null };
          items = [tmp11, tmp23];
          obj4.children = items;
          const tmp30 = hasOwnProperty(native.PressableScale, obj4);
          cResult[14] = accessibilityLabel;
          cResult[15] = tmp18;
          cResult[16] = tmp11;
          cResult[17] = onPress;
          cResult[18] = tmp6.container;
          cResult[19] = tmp20;
          cResult[20] = tmp23;
          cResult[21] = tmp30;
          tmp27 = tmp30;
        }
        const obj5 = { style: tmp6.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, lineClamp: 1, children: label };
        const tmp26 = React4(Text_Text.Text, obj5);
        cResult[11] = tmp6.label;
        cResult[12] = label;
        cResult[13] = tmp26;
        tmp23 = tmp26;
      }
      const mergeRefsResult = mergeProps.mergeRefs(ref, containerRef);
      cResult[8] = containerRef;
      cResult[9] = ref;
      cResult[10] = mergeRefsResult;
      tmp20 = mergeRefsResult;
      const tmpResult2 = mergeProps;
    }
  }
  let tmp12 = tmp7;
  if (undefined !== showRedDot && showRedDot) {
    const obj6 = { children: null };
    const obj7 = { cutouts: items, children: tmp7 };
    const items1 = [React4(ClipViewDefault, obj7), ];
    const obj8 = { style: tmp6.dot };
    items1[1] = React4(View, obj8);
    obj6.children = items1;
    tmp12 = hasOwnProperty(View, obj6);
  }
  cResult[2] = tmp7;
  cResult[3] = undefined !== showRedDot && showRedDot;
  cResult[4] = tmp6.dot;
  cResult[5] = tmp12;
  tmp11 = tmp12;
  const tmpResult = YouScreenNavIconMeasurer;
}) : (function YouScreenNavIcon(ref) {
  ({ accessibilityLabel, label, showRedDot } = ref);
  ({ onPress, IconComponent } = ref);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  const tmp4 = closure_10(youScreenNavIconMeasurement.width);
  const tmp6 = React4(IconComponent, { size: "md", color: TEXT_DEFAULT });
  let tmp7 = tmp6;
  if (showRedDot) {
    const obj3 = { children: null };
    const obj4 = { cutouts: items, children: tmp6 };
    items = [React4(ClipViewDefault, obj4), ];
    const obj5 = { style: tmp4.dot };
    items[1] = React4(View, obj5);
    obj3.children = items;
    tmp7 = hasOwnProperty(View, obj3);
  }
  let tmp12;
  if (showRedDot) {
    const obj6 = { text: null };
    const intl = util.intl;
    obj6.text = intl.string(util.t.y2b7CA);
    tmp12 = obj6;
  }
  const obj7 = { ref: null, style: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, children: null };
  const obj2 = { size: "md", color: TEXT_DEFAULT };
  obj7.ref = mergeProps.mergeRefs(ref.ref, youScreenNavIconMeasurement.containerRef);
  obj7.style = tmp4.container;
  obj7.accessibilityLabel = accessibilityLabel;
  obj7.accessibilityValue = tmp12;
  obj7.onPress = onPress;
  obj7.hitSlop = nativeDefault.space.PX_8;
  const items1 = [tmp7, ];
  const obj8 = { style: tmp4.label, variant: "text-xs/semibold", color, maxFontSizeMultiplier: 2, lineClamp: 1, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj8.children = label;
  items1[1] = React4(Text_Text.Text, obj8);
  obj7.children = items1;
  return hasOwnProperty(native.PressableScale, obj7);
}));