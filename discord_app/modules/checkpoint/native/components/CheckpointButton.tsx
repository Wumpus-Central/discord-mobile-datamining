// === Module 15252: CheckpointButton ===

// Module 15252 (CheckpointButton)
import nativeDefault from "native" /* 576 */;
import CheckpointTextDefault from "CheckpointText" /* 15236 */;
import CheckpointPressable from "CheckpointPressable" /* 15253 */;
import CheckpointConstants from "CheckpointConstants" /* 5054 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const CheckpointPressableDefault = CheckpointPressable;

({ CHECKPOINT_PRIMARY: c2, CHECKPOINT_BUTTON_BORDER } = CheckpointConstants);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let obj = { container: { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET }, button: null, label: null };
let obj2 = { justifyContent: "center", marginRight: -CheckpointPressable.SHADOW_OFFSET, marginBottom: -CheckpointPressable.SHADOW_OFFSET };
obj.button = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_BUTTON_BORDER, height: 48 };
obj.label = { textTransform: "uppercase" };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(onPress) {
  ({ Icon, label } = onPress);
  const tmp = closure_5();
  const obj = { containerStyle: tmp.container, style: tmp.button, onPress: onPress.onPress, accessibilityRole: "button", accessibilityLabel: label, children: null };
  let tmp6 = null != Icon;
  if (tmp6) {
    const obj2 = { color, size: "sm" };
    tmp6 = React3(Icon, obj2);
  }
  const items = [tmp6, ];
  let tmp9 = null != label;
  if (tmp9) {
    const obj3 = { variant: "text-lg/medium", style: tmp.label, children: label };
    tmp9 = React3(CheckpointTextDefault, obj3);
  }
  items[1] = tmp9;
  obj.children = items;
  return React4(CheckpointPressableDefault, obj);
};