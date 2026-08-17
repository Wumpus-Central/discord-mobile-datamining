// discord_app/design/void/Form/native/FormSwitch.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityAnnouncer from "../../../shared.tsx";
import { Switch } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { switch: { marginVertical: -5 }, track: null };
createCacheKey = { color: ThemesDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
createCacheKey[1] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("design/void/Form/native/FormSwitch.tsx");

export default function FormSwitch(value) {
  value = value.value;
  const disabled = value.disabled;
  ({ borderColor, renderIosBackground } = value);
  let tmp3 = undefined !== renderIosBackground;
  ({ style, onValueChange, accessible, accessibilityLabel, accessibilityHint } = value);
  if (tmp3) {
    tmp3 = renderIosBackground;
  }
  const tmp4 = callback();
  let color = value.tintColor;
  if (color == null) {
    color = tmp4.track.color;
  }
  if (null == borderColor) {
    let obj = AccessibilityAnnouncer;
    if (obj.isThemeDark(tmp7)) {
      borderColor = ThemesDefault.unsafe_rawColors.PRIMARY_400;
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