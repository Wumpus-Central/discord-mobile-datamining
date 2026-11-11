// discord_app/modules/checkpoint/native/components/CheckpointButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const CheckpointConstants = fn(6314);
({
  CHECKPOINT_DARK_CYAN: hasOwnProperty,
  CHECKPOINT_BUTTON_DISABLED_BORDER_MOBILE: closure_6,
  CHECKPOINT_CONTROL_ICON_SIZE,
  CHECKPOINT_PRIMARY: metroImportDefault,
} = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5243);
let obj2 = {
  container: {
    justifyContent: "center",
    marginRight: -fn(14404).SHADOW_OFFSET,
    marginBottom: -fn(14404).SHADOW_OFFSET,
  },
  button: null,
  label: null,
  icon: null,
};
let obj3 = { justifyContent: "center", marginRight: -fn(14404).SHADOW_OFFSET, marginBottom: -fn(14404).SHADOW_OFFSET };
obj2.button = { backgroundColor: nativeDefault.colors.BLACK, borderWidth: 2 };
obj2.label = { textTransform: "uppercase" };
obj2.icon = { width: CHECKPOINT_CONTROL_ICON_SIZE, height: CHECKPOINT_CONTROL_ICON_SIZE };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointButton.tsx");

export default function CheckpointButton(loading) {
  ({ Icon, label, labelVariant } = loading);
  ({ onPress, onPressIn } = loading);
  if (labelVariant === undefined) {
    labelVariant = disabled(color[5]).CHECKPOINT_PRESSABLE_SIZES.lg.textVariant;
  }
  ({ accessibilityLabel, disabled, labelStyle, accessibilityHint, accessibilityState } = loading);
  if (disabled === undefined) {
    disabled = false;
  }
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  let str = loading.iconPosition;
  if (str === undefined) {
    str = "start";
  }
  color = loading.color;
  if (color === undefined) {
    color = closure_7;
  }
  let borderColor = loading.borderColor;
  if (borderColor === undefined) {
    borderColor = closure_5;
  }
  color = undefined;
  ({ shadowColor, style } = loading);
  const tmp3 = closure_10();
  if (disabled) {
    color = obj.useToken("text-subtle");
  }
  items = [disabled, borderColor];
  const items1 = [color];
  const memo = noop.useMemo(() => ({ borderColor: disabled ? timestampProducer : borderColor }), items);
  const memo1 = noop.useMemo(() => ({ color }), items1);
  if (flag) {
    const obj2 = { color };
    let tmp7 = closure_8(ActivityIndicator, obj2);
  } else {
    tmp7 = null;
    if (null != Icon) {
      const obj3 = { color, size: "custom", style: tmp3.icon };
      tmp7 = closure_8(Icon, obj3);
    }
  }
  const obj4 = {
    size: "lg",
    containerStyle: tmp3.container,
    style: null,
    shadowColor,
    onPress,
    onPressIn,
    disabled,
    accessibilityRole: "button",
    accessibilityLabel: null,
    accessibilityHint: null,
    accessibilityState: null,
    children: null,
  };
  const items2 = [tmp3.button, memo, style];
  obj4.style = items2;
  obj = disabled(color[7]);
  const tmp12 = borderColor;
  if (accessibilityLabel == null) {
    accessibilityLabel = label;
  }
  obj4.accessibilityLabel = accessibilityLabel;
  obj4.accessibilityHint = accessibilityHint;
  obj4.accessibilityState = accessibilityState;
  const items3 = ["start" === str && tmp7, ,];
  let tmp15 = null != label;
  if (tmp15) {
    const obj5 = { variant: labelVariant, style: null, children: null };
    const items4 = [tmp3.label, memo1, labelStyle];
    obj5.style = items4;
    obj5.children = label;
    tmp15 = closure_8(tmp12(tmp4[8]), obj5);
  }
  items3[1] = tmp15;
  items3[2] = "end" === str && tmp7;
  obj4.children = items3;
  return closure_9(borderColor(color[5]), obj4);
}
