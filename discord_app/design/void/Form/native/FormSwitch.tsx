// discord_app/design/void/Form/native/FormSwitch.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import shared from "../../../shared.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Switch = fn(17).Switch;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { switch: { marginVertical: -5 }, track: null };
createStyles = { color: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createStyles.track = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
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
    let obj = shared;
    if (obj.isThemeDark(tmp7)) {
      borderColor = nativeDefault.unsafe_rawColors.PRIMARY_400;
    }
  }
  obj = {
    accessible,
    trackColor: { true: color, false: borderColor },
    ios_backgroundColor: null,
    value: null,
    disabled: null,
    style: null,
    onValueChange: null,
    accessibilityState: null,
    accessibilityLabel: null,
    accessibilityHint: null,
  };
  let tmp11;
  if (false === (undefined !== value && value)) {
    if (tmp3) {
      tmp11 = borderColor;
    }
  }
  obj.ios_backgroundColor = tmp11;
  obj.value = undefined !== value && value;
  obj.disabled = undefined !== disabled && disabled;
  const items = [tmp4.switch, style];
  obj.style = items;
  obj.onValueChange = onValueChange;
  obj.accessibilityState = { disabled: undefined !== disabled && disabled, selected: undefined !== value && value };
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  return (
    <Switch
      accessible={accessible}
      trackColor={{ true: color, false: borderColor }}
      ios_backgroundColor={null}
      value={null}
      disabled={null}
      style={null}
      onValueChange={null}
      accessibilityState={null}
      accessibilityLabel={null}
      accessibilityHint={null}
    />
  );
}
