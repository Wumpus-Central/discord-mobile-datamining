// === Module 15556: CheckpointButton ===

// Module 15556 (CheckpointButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CheckpointTextDefault from "CheckpointText" /* 15539 */;
import CheckpointPressable from "CheckpointPressable" /* 15557 */;
import CheckpointConstants from "CheckpointConstants" /* 5115 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

({ CHECKPOINT_PRIMARY: c3, CHECKPOINT_BUTTON_BORDER } = CheckpointConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET }, button: null, label: null };
let obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
obj.button = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 };
obj.label = { textTransform: "uppercase" };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ onPress, Icon, label } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] !== Icon) {
    let tmp6 = null != Icon;
    if (tmp6) {
      const obj2 = { color, size: "sm" };
      tmp6 = React4(Icon, obj2);
    }
    cResult[0] = Icon;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === label) {
    if (cResult[3] === tmp3.label) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === label) {
      if (cResult[6] === onPress) {
        if (cResult[7] === tmp3.button) {
          if (cResult[8] === tmp3.container) {
            if (cResult[9] === tmp4) {
              if (cResult[10] === tmp9) {
                let tmp13 = cResult[11];
              }
              return tmp13;
            }
          }
        }
      }
    }
    const obj3 = { containerStyle: null, style: null, onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
    ({ container: obj4.containerStyle, button: obj4.style } = tmp3);
    obj3.onPress = onPress;
    obj3.accessibilityLabel = label;
    const items = [tmp4, tmp9];
    obj3.children = items;
    const tmp16 = hasOwnProperty(CheckpointPressableDefault, obj3);
    cResult[5] = label;
    cResult[6] = onPress;
    cResult[7] = tmp3.button;
    cResult[8] = tmp3.container;
    cResult[9] = tmp4;
    cResult[10] = tmp9;
    cResult[11] = tmp16;
    tmp13 = tmp16;
  }
  let tmp10 = null != label;
  if (tmp10) {
    const obj7 = { variant: "text-lg/medium", style: tmp3.label, children: label };
    tmp10 = React4(CheckpointTextDefault, obj7);
  }
  cResult[2] = label;
  cResult[3] = tmp3.label;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((onPress) => {
  ({ Icon, label } = onPress);
  const tmp = closure_6();
  const obj = { containerStyle: tmp.container, style: tmp.button, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  let tmp6 = null != Icon;
  if (tmp6) {
    const obj2 = { color, size: "sm" };
    tmp6 = React4(Icon, obj2);
  }
  const items = [tmp6, ];
  let tmp9 = null != label;
  if (tmp9) {
    const obj3 = { variant: "text-lg/medium", style: tmp.label, children: label };
    tmp9 = React4(CheckpointTextDefault, obj3);
  }
  items[1] = tmp9;
  obj.children = items;
  return hasOwnProperty(CheckpointPressableDefault, obj);
});