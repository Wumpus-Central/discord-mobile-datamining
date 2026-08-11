// discord_app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import importAllResult from "noop";
import set from "createCacheKey";
import { _getRequireWildcardCache } from "../../../../../_runtime/07991__getRequireWildcardCache.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

const require = arg1;
let num = 0;
if (set.isAndroid()) {
  num = require("Themes").space.PX_8;
}
let closure_4 = createCacheKey.createStyles({ slider: { marginTop: num } });
const result = set.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOSlider.tsx");

export default require("noop").memo(function VEVOOSlider(disabled) {
  let initialValue;
  let onValueChange;
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
  const obj = { style: items, disabled: disabled.disabled, value: null, minimumValue: 0, maximumValue: 1, minimumTrackTintColor: null, maximumTrackTintColor: null, onValueChange: null, onResponderGrant: null };
  items[1] = { opacity: num };
  const current = initialValue.current;
  obj[2] = current;
  obj[5] = Themes.unsafe_rawColors.BRAND_500;
  obj[6] = Themes.unsafe_rawColors.PRIMARY_400;
  obj[7] = onValueChange;
  const tmp5 = _getRequireWildcardCache;
  let fn;
  if (obj2.isAndroid()) {
    fn = () => true;
  }
  obj[8] = fn;
  return tmp2(tmp5, obj);
});