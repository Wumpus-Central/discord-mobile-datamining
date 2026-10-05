// discord_app/design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../intl/index.native.tsx";
import ReanimatedRexportDefault from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import ActionSheetDragHandleConstants from "ActionSheetDragHandleConstants.tsx";
import createStyles from "../../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let DRAG_HANDLE_BAR_HEIGHT;
let DRAG_HANDLE_HEIGHT;
let DRAG_HANDLE_PADDING;
let c3;
let closure_4;
let size;
({ TouchableWithoutFeedback: c3, View: closure_4 } = react_native);
({ DRAG_HANDLE_BAR_HEIGHT, DRAG_HANDLE_PADDING, DRAG_HANDLE_HEIGHT } = ActionSheetDragHandleConstants);
const jsx = Fragment.jsx;
let obj = {
  container: { height: DRAG_HANDLE_HEIGHT },
  containerOverlay: { position: "absolute", top: 0, left: 0, right: 0 },
  handle: { alignItems: "center", paddingVertical: DRAG_HANDLE_PADDING },
  bar: size,
};
size = {
  backgroundColor: nativeDefault.colors.ICON_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: DRAG_HANDLE_BAR_HEIGHT,
  width: 31,
};
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let accessibilityLabel;
        let animatedBarStyles;
        let onPress;
        let overlay;
        let tmp4;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(17);
        ({ onPress, accessibilityLabel, animatedBarStyles, "aria-hidden": tmp4, overlay } = arg0);
        if (cResult[0] !== accessibilityLabel) {
          let stringResult = accessibilityLabel;
          if (undefined === accessibilityLabel) {
            const intl = intl2.intl;
            stringResult = intl.string(intl2.t.WAI6xu);
          }
          cResult[0] = accessibilityLabel;
          cResult[1] = stringResult;
          tmp5 = stringResult;
        } else {
          tmp5 = cResult[1];
        }
        const tmp7 = closure_6();
        let containerOverlay = null;
        if (null != overlay) {
          containerOverlay = tmp7.containerOverlay;
        }
        if (cResult[2] === tmp7.container) {
          let tmp9;
          let tmp13;
          if (cResult[3] === containerOverlay) {
            tmp9 = cResult[4];
          }
          if (cResult[5] === animatedBarStyles) {
            let tmp10;
            if (cResult[6] === tmp7.bar) {
              tmp10 = cResult[7];
            }
            if (cResult[8] === tmp7.handle) {
              let tmp16;
              if (cResult[9] === tmp10) {
                tmp16 = cResult[10];
              }
              if (cResult[11] === tmp5) {
                if (cResult[12] === tmp4) {
                  if (cResult[13] === onPress) {
                    if (cResult[14] === tmp9) {
                      let tmp20;
                      if (cResult[15] === tmp16) {
                        tmp20 = cResult[16];
                      }
                      return tmp20;
                    }
                  }
                }
              }
              const tmp23 = (
                <_false
                  style={tmp9}
                  accessibilityLabel={tmp5}
                  accessibilityRole="button"
                  aria-hidden={tmp4}
                  onPress={onPress}
                >
                  {tmp16}
                </_false>
              );
              cResult[11] = tmp5;
              cResult[12] = tmp4;
              cResult[13] = onPress;
              cResult[14] = tmp9;
              cResult[15] = tmp16;
              cResult[16] = tmp23;
              tmp20 = tmp23;
            }
            const tmp19 = <React3 style={tmp7.handle}>{tmp10}</React3>;
            cResult[8] = tmp7.handle;
            cResult[9] = tmp10;
            cResult[10] = tmp19;
            tmp16 = tmp19;
          }
          if (null != animatedBarStyles) {
            const items = [tmp7.bar, animatedBarStyles];
            tmp13 = jsx(ReanimatedRexportDefault.View, { style: items });
          } else {
            tmp13 = <React3 style={tmp7.bar} />;
          }
          cResult[5] = animatedBarStyles;
          cResult[6] = tmp7.bar;
          cResult[7] = tmp13;
          tmp10 = tmp13;
        }
        const items1 = [tmp7.container, containerOverlay];
        cResult[2] = tmp7.container;
        cResult[3] = containerOverlay;
        cResult[4] = items1;
        tmp9 = items1;
      }
    : (accessibilityLabel) => {
        let onPress;
        let overlay;
        accessibilityLabel = accessibilityLabel.accessibilityLabel;
        ({ onPress, overlay } = accessibilityLabel);
        if (accessibilityLabel === undefined) {
          const intl = intl2.intl;
          accessibilityLabel = intl.string(intl2.t.WAI6xu);
        }
        const animatedBarStyles = accessibilityLabel.animatedBarStyles;
        const prop = accessibilityLabel["aria-hidden"];
        const tmp4 = closure_6();
        const items = [tmp4.container];
        let containerOverlay = null;
        if (null != overlay) {
          containerOverlay = tmp4.containerOverlay;
        }
        items[1] = containerOverlay;
        if (null != animatedBarStyles) {
          const items1 = [tmp4.bar, animatedBarStyles];
          let tmp5Result = jsx(ReanimatedRexportDefault.View, { style: items1 });
        } else {
          tmp5Result = <React3 style={tmp4.bar} />;
        }
        return (
          <_false
            style={items}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole="button"
            aria-hidden={prop}
            onPress={onPress}
          >
            {null}
          </_false>
        );
      },
);
size = size_mod;
const result = size.fileFinishedImporting(
  "design/components/experimental/ActionSheetDragHandle/native/ActionSheetDragHandle.native.tsx",
);

export const ActionSheetDragHandle = memoResult;
