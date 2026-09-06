// === Module 15928: VEVOOSlider ===

// Module 15928 (VEVOOSlider)
import nativeDefault from "native" /* 576 */;
import _modDef8278 from "module_8278" /* 8278 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = nativeDefault.space.PX_8;
}
let closure_4 = createStyles.createStyles({ slider: { marginTop: num } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default noop.memo(function VEVOOSlider(disabled) {
  let flag = disabled.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange } = disabled);
  const items = [closure_4().slider, ];
  let num = 1;
  const tmp = closure_4();
  if (flag) {
    num = 0.5;
  }
  const obj = { style: items, disabled: disabled.disabled, value: null, minimumValue: 0, maximumValue: 1, minimumTrackTintColor: nativeDefault.unsafe_rawColors.BRAND_500, maximumTrackTintColor: nativeDefault.unsafe_rawColors.PRIMARY_400, onValueChange, onResponderGrant: null };
  items[1] = { opacity: num };
  const current = initialValue.current;
  obj.value = current;
  let fn;
  if (obj2.isAndroid()) {
    fn = () => true;
  }
  obj.onResponderGrant = fn;
  return <tmp5 style={items} disabled={disabled.disabled} value={null} minimumValue={0} maximumValue={1} minimumTrackTintColor={nativeDefault.unsafe_rawColors.BRAND_500} maximumTrackTintColor={nativeDefault.unsafe_rawColors.PRIMARY_400} onValueChange={onValueChange} onResponderGrant={null} />;
});