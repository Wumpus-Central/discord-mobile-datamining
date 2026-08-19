// discord_app/modules/visual_effect_view/native/overrides/VEVOOSlider.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _getRequireWildcardCacheDefault from "../../../../../_runtime/08105__getRequireWildcardCache.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import obj132 from "../../../../utils/PlatformUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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