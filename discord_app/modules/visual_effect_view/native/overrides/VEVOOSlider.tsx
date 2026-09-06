// === Module 15928: ? ===

// Module 15928
import ThemesDefault from "Themes" /* 576 */;
import _modDef8278 from "module_8278" /* 8278 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import set from "set" /* 1115 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let num = 0;
if (set.isAndroid()) {
  num = ThemesDefault.space.PX_8;
}
let closure_4 = createCacheKey.createStyles({ slider: { marginTop: num } });
const result = set.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default importAllResult.memo(function VEVOOSlider(disabled) {
  let flag = disabled.disabledOpacity;
  if (flag === undefined) {
    flag = false;
  }
  ({ initialValue, onValueChange } = disabled);
  const items = [callback().slider, ];
  let num = 1;
  const tmp = callback();
  const tmp2 = jsx;
  if (flag) {
    num = 0.5;
  }
  const obj = { style: items, disabled: disabled.disabled, value: current, minimumValue: 0, maximumValue: 1, minimumTrackTintColor: ThemesDefault.unsafe_rawColors.BRAND_500, maximumTrackTintColor: ThemesDefault.unsafe_rawColors.PRIMARY_400, onValueChange, onResponderGrant: null };
  items[1] = { opacity: num };
  current = initialValue.current;
  const tmp5 = _modDef8278;
  let fn;
  if (obj2.isAndroid()) {
    fn = () => true;
  }
  obj[8] = fn;
  return tmp2(tmp5, obj);
});