// === Module 8760: Form/FormSwitch ===

// Module 8760 (Form/FormSwitch)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4491 */;
import noop from "module_19" /* 19 */;

require = fn;
const Switch = fn(17).Switch;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = { switch: { marginVertical: -5 }, track: { color: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default function FormSwitch(value) {
  value = value.value;
  const disabled = value.disabled;
  ({ borderColor, renderIosBackground } = value);
  let tmp3 = undefined !== renderIosBackground;
  ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
  if (tmp3) {
    tmp3 = renderIosBackground;
  }
  const tmp4 = closure_5();
  let color = value.tintColor;
  if (color == null) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    if (obj.isThemeDark(tmp7)) {
      borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
    }
    obj = shared;
  }
  const obj2 = { accessible, trackColor: { true: color, false: borderColor }, ios_backgroundColor: null, value: null, disabled: null, style: null, onValueChange: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null };
  let tmp11;
  if (false === (undefined !== value && value)) {
    if (tmp3) {
      tmp11 = borderColor;
    }
  }
  obj2.ios_backgroundColor = tmp11;
  obj2.value = undefined !== value && value;
  obj2.disabled = undefined !== disabled && disabled;
  const items = [tmp4.switch, style];
  obj2.style = items;
  obj2.onValueChange = onValueChange;
  obj2.accessibilityState = { disabled: undefined !== disabled && disabled, selected: undefined !== value && value };
  obj2.accessibilityLabel = accessibilityLabel;
  obj2.accessibilityHint = accessibilityHint;
  return <Switch accessible={accessible} trackColor={{ true: color, false: borderColor }} ios_backgroundColor={null} value={null} disabled={null} style={null} onValueChange={null} accessibilityState={null} accessibilityLabel={null} accessibilityHint={null} />;
};