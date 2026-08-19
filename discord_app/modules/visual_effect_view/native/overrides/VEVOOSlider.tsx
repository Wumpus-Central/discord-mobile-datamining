// === Module 15195: ? ===

// Module 15195
import ThemesDefault from "Themes" /* 712 */;
import _getRequireWildcardCacheDefault from "_getRequireWildcardCache" /* 8105 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import obj132 from "obj132" /* 500 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
let num = 0;
if (obj132.isAndroid()) {
  num = ThemesDefault.space.PX_8;
}
let closure_4 = createCacheKey.createStyles({ slider: { marginTop: num } });
const result = obj132.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default importAllResult.memo(function VEVOOSlider(disabled) {
  let flag = disabled.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange } = disabled);
  const items = [callback().slider, ];
  let num = 1;
  const tmp = callback();
  if (flag) {
    num = 0.5;
  }
  const obj = { style: items, disabled: disabled.disabled, value: current, minimumValue: 0, maximumValue: 1, minimumTrackTintColor: ThemesDefault.unsafe_rawColors.BRAND_500, maximumTrackTintColor: ThemesDefault.unsafe_rawColors.PRIMARY_400, onValueChange, onResponderGrant: null };
  items[1] = { opacity: num };
  current = initialValue.current;
  let fn;
  if (obj2.isAndroid()) {
    fn = () => true;
  }
  obj[8] = fn;
  return <tmp5 style={items} disabled={disabled.disabled} value={current} minimumValue={0} maximumValue={1} minimumTrackTintColor={ThemesDefault.unsafe_rawColors.BRAND_500} maximumTrackTintColor={ThemesDefault.unsafe_rawColors.PRIMARY_400} onValueChange={onValueChange} onResponderGrant={null} />;
});