// discord_app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Slider from "../../../../design/components/Slider/native/Slider.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const PlatformUtils = fn(1375);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let closure_4 = createStyles.createStyles({ slider: { marginTop: num } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");
const memoResult = noop.memo(function VEVOOSlider(disabled) {
  let flag = disabled.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange, accessibilityLabel } = disabled);
  const items = [closure_4().slider];
  let num = 1;
  if (flag) {
    num = 0.5;
  }
  const obj = {
    style: items,
    children: jsx(Slider.Slider, {
      disabled: disabled.disabled,
      defaultValue: initialValue.current,
      minValue: 0,
      maxValue: 1,
      onChange: onValueChange,
      accessibilityLabel,
    }),
  };
  items[1] = { opacity: num };
  return (
    <View style={items}>
      {jsx(Slider.Slider, {
        disabled: disabled.disabled,
        defaultValue: initialValue.current,
        minValue: 0,
        maxValue: 1,
        onChange: onValueChange,
        accessibilityLabel,
      })}
    </View>
  );
});
let obj = { slider: { marginTop: num } };

export default noop.memo(function VEVOOSlider(disabled) {
  let flag = disabled.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange, accessibilityLabel } = disabled);
  const items = [closure_4().slider];
  let num = 1;
  if (flag) {
    num = 0.5;
  }
  const obj = {
    style: items,
    children: jsx(Slider.Slider, {
      disabled: disabled.disabled,
      defaultValue: initialValue.current,
      minValue: 0,
      maxValue: 1,
      onChange: onValueChange,
      accessibilityLabel,
    }),
  };
  items[1] = { opacity: num };
  return (
    <View style={items}>
      {jsx(Slider.Slider, {
        disabled: disabled.disabled,
        defaultValue: initialValue.current,
        minValue: 0,
        maxValue: 1,
        onChange: onValueChange,
        accessibilityLabel,
      })}
    </View>
  );
});
