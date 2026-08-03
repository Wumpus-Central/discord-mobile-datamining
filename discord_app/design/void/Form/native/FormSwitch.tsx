// === Module 7655: FormSwitch ===

// Module 7655 (FormSwitch)
import "noop";
import { Switch } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { switch: { marginVertical: -5 }, track: null };
createCacheKey = { color: require("Themes").colors.REDESIGN_INPUT_CONTROL_SELECTED };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default function FormSwitch(value) {
  let accessibilityHint;
  let accessibilityLabel;
  let accessible;
  let borderColor;
  let onValueChange;
  let renderIosBackground;
  let style;
  value = value.value;
  const disabled = value.disabled;
  ({ borderColor, renderIosBackground } = value);
  let tmp3 = undefined !== renderIosBackground;
  ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
  if (tmp3) {
    tmp3 = renderIosBackground;
  }
  const tmp4 = createCacheKey();
  let color = value.tintColor;
  if (color == null) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    let obj = require(4039) /* AccessibilityAnnouncer */;
    if (obj.isThemeDark(tmp7)) {
      borderColor = importDefault(712).unsafe_rawColors.PRIMARY_400;
    }
  }
  obj = { accessible, trackColor: { true: color, false: borderColor }, ios_backgroundColor: null, value: null, disabled: null, style: null, onValueChange: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null };
  let tmp11;
  if (false === (undefined !== value && value)) {
    if (tmp3) {
      tmp11 = borderColor;
    }
  }
  obj[2] = tmp11;
  obj[3] = undefined !== value && value;
  obj[4] = undefined !== disabled && disabled;
  const items = [tmp4.switch, style];
  obj[5] = items;
  obj[6] = onValueChange;
  obj[7] = { disabled: undefined !== disabled && disabled, selected: undefined !== value && value };
  obj[8] = accessibilityLabel;
  obj[9] = accessibilityHint;
  return <Switch accessible={accessible} trackColor={{ true: color, false: borderColor }} ios_backgroundColor={null} value={null} disabled={null} style={null} onValueChange={null} accessibilityState={null} accessibilityLabel={null} accessibilityHint={null} />;
};