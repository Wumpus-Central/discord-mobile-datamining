// === Module 14490: CheckpointButton ===

// Module 14490 (CheckpointButton)
import nativeDefault from "native" /* 575 */;
import CheckpointPressableDefault from "CheckpointPressable" /* 14491 */;
import noop from "module_19" /* 19 */;

const Pressable = fn(17).Pressable;
const CheckpointConstants = fn(6377);
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE, CHECKPOINT_DARK_CYAN } = CheckpointConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5306);
const obj2 = { button: { width: CHECKPOINT_CONTROL_SIZE, height: CHECKPOINT_CONTROL_SIZE, alignItems: "center", justifyContent: "center" }, shadowContainer: { justifyContent: "center", marginRight: -fn(14491).SHADOW_OFFSET, marginBottom: -fn(14491).SHADOW_OFFSET }, shadow: null, shadowDisabled: null };
const obj3 = { justifyContent: "center", marginRight: -fn(14491).SHADOW_OFFSET, marginBottom: -fn(14491).SHADOW_OFFSET };
obj2.shadow = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2, borderColor: CHECKPOINT_DARK_CYAN };
obj2.shadowDisabled = { borderColor: CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export function CheckpointButton(disabled) {
  let flag = disabled.disabled;
  ({ accessibilityLabel, accessibilityHint, children, onPress, onPressIn } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  ({ hitSlop, style } = disabled);
  const obj = { style: null, onPress: null, onPressIn: null, disabled: null, hitSlop: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null };
  items = [closure_4().button, style];
  obj.style = items;
  obj.onPress = onPress;
  obj.onPressIn = onPressIn;
  obj.disabled = flag;
  obj.hitSlop = hitSlop;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  obj.accessibilityState = { disabled: flag };
  obj.children = children;
  return <Pressable style={null} onPress={null} onPressIn={null} disabled={null} hitSlop={null} accessibilityRole="button" accessibilityLabel={null} accessibilityHint={null} accessibilityState={null}>{null}</Pressable>;
}
export function CheckpointShadowButton(disabled) {
  let flag = disabled.disabled;
  ({ accessibilityLabel, accessibilityHint, children, onPress, onPressIn } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  ({ shadowColor, style } = disabled);
  const tmp = closure_4();
  const obj = { size: "lg", containerStyle: tmp.shadowContainer, style: null, shadowColor: null, onPress: null, onPressIn: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null };
  items = [tmp.shadow, , ];
  let shadowDisabled = flag;
  if (flag) {
    shadowDisabled = tmp.shadowDisabled;
  }
  items[1] = shadowDisabled;
  items[2] = style;
  obj.style = items;
  obj.shadowColor = shadowColor;
  obj.onPress = onPress;
  obj.onPressIn = onPressIn;
  obj.disabled = flag;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  obj.accessibilityState = { disabled: flag };
  obj.children = children;
  return jsx(CheckpointPressableDefault, { size: "lg", containerStyle: tmp.shadowContainer, style: null, shadowColor: null, onPress: null, onPressIn: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityState: null, children: null });
}