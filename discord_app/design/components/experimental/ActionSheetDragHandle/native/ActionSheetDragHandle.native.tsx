// === Module 8613: ActionSheetDragHandle ===

// Module 8613 (ActionSheetDragHandle)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4618 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableWithoutFeedback: c3, View: closure_4 } = get_ActivityIndicator);
const ActionSheetDragHandleConstants = fn(8603);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = ActionSheetDragHandleConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj = { container: { height: DRAG_HANDLE_HEIGHT }, containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 }, handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING }, bar: null };
let size = { backgroundColor: nativeDefault.colors.ICON_MUTED, borderRadius: nativeDefault.radii.xs, height: DRAG_HANDLE_BAR_HEIGHT, width: 31 };
obj.bar = size;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx");

export const ActionSheetDragHandle = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let obj = dependencyMap;
  const cResult = c.c(17);
  ({ onPress, accessibilityLabel, animatedBarStyles, aria-hidden: tmp3, overlay } = arg0);
  if (cResult[0] !== accessibilityLabel) {
    let stringResult = accessibilityLabel;
    if (undefined === accessibilityLabel) {
      const intl = util.intl;
      stringResult = intl.string(util.t.WAI6xu);
    }
    cResult[0] = accessibilityLabel;
    cResult[1] = stringResult;
    let tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  const tmp6 = closure_6();
  let containerOverlay = null;
  if (null != overlay) {
    containerOverlay = tmp6.containerOverlay;
  }
  if (cResult[2] === tmp6.container) {
    if (cResult[3] === containerOverlay) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === animatedBarStyles) {
      if (cResult[6] === tmp6.bar) {
        if (cResult[8] === tmp6.handle) {
          if (cResult[9] === tmp9) {
            let tmp16 = cResult[10];
          }
          if (cResult[11] === tmp4) {
            if (cResult[12] === tmp3) {
              if (cResult[13] === onPress) {
                if (cResult[14] === tmp8) {
                  if (cResult[15] === tmp16) {
                    let tmp20 = cResult[16];
                  }
                  return tmp20;
                }
              }
            }
          }
          const obj3 = { style: tmp8, accessibilityLabel: tmp4, accessibilityRole: "button", "aria-hidden": tmp3, onPress, children: tmp16 };
          const tmp23 = <React3 style={tmp8} accessibilityLabel={tmp4} accessibilityRole="button" aria-hidden={tmp3} onPress={onPress}>{tmp16}</React3>;
          cResult[11] = tmp4;
          cResult[12] = tmp3;
          cResult[13] = onPress;
          cResult[14] = tmp8;
          cResult[15] = tmp16;
          cResult[16] = tmp23;
          tmp20 = tmp23;
        }
        const obj4 = { style: tmp6.handle, children: cResult[7] };
        const tmp19 = <React4 style={tmp6.handle}>{cResult[7]}</React4>;
        cResult[8] = tmp6.handle;
        cResult[9] = cResult[7];
        cResult[10] = tmp19;
        tmp16 = tmp19;
      }
    }
    if (null != animatedBarStyles) {
      obj = { style: null };
      const items = [tmp6.bar, animatedBarStyles];
      obj.style = items;
      let tmp12 = jsx(ReanimatedRexportDefault.View, { style: null });
    } else {
      const obj5 = { style: tmp6.bar };
      tmp12 = <React4 style={tmp6.bar} />;
    }
    cResult[5] = animatedBarStyles;
    animatedBarStyles = tmp6.bar;
    cResult[6] = animatedBarStyles;
    cResult[7] = tmp12;
  }
  const items1 = [tmp6.container, containerOverlay];
  cResult[2] = tmp6.container;
  cResult[3] = containerOverlay;
  cResult[4] = items1;
  tmp8 = items1;
}) : ((accessibilityLabel) => {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ onPress, overlay } = accessibilityLabel);
  if (accessibilityLabel === undefined) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.WAI6xu);
  }
  const animatedBarStyles = accessibilityLabel.animatedBarStyles;
  const tmp3 = closure_6();
  const items = [tmp3.container, ];
  let containerOverlay = null;
  if (null != overlay) {
    containerOverlay = tmp3.containerOverlay;
  }
  const obj = { style: items, accessibilityLabel, accessibilityRole: "button", "aria-hidden": accessibilityLabel["aria-hidden"], onPress, children: null };
  items[1] = containerOverlay;
  const obj2 = { style: tmp3.handle, children: null };
  if (null != animatedBarStyles) {
    const obj3 = { style: null };
    const items1 = [tmp3.bar, animatedBarStyles];
    obj3.style = items1;
    let tmp4Result = jsx(ReanimatedRexportDefault.View, { style: null });
  } else {
    const obj4 = { style: tmp3.bar };
    tmp4Result = <React4 style={tmp3.bar} />;
  }
  obj2.children = tmp4Result;
  obj.children = <React4 style={tmp3.handle}>{null}</React4>;
  return <React3 style={items} accessibilityLabel={accessibilityLabel} accessibilityRole="button" aria-hidden={accessibilityLabel["aria-hidden"]} onPress={onPress}>{null}</React3>;
}));