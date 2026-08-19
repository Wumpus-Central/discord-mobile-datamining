// === Module 11367: OptionList ===

// Module 11367 (OptionList)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function OptionList(options) {
  options = options.options;
  const onSelectOption = options.onSelectOption;
  const tmp = callback();
  closure_2 = tmp;
  const items = [tmp.container, options.style];
  return <closure_2 style={items} collapsable={false}>{options.map((item, index) => {
    options = item;
    const obj = { variant: "text-sm/semibold", style: closure_2.addButtonText, children: null };
    const intl = options(onSelectOption[8]).intl;
    obj[2] = intl.string(options(onSelectOption[8]).t.OYkgVk);
    obj[3] = jsx(options(onSelectOption[7]).Text, { variant: "text-sm/semibold", style: closure_2.addButtonText, children: null });
    obj[5] = jsx(options(onSelectOption[6]).PressableOpacity, { variant: "text-sm/semibold", style: closure_2.addButtonText, children: null });
    return jsx(options(onSelectOption[5]).TableRow, { variant: "text-sm/semibold", style: closure_2.addButtonText, children: null }, item.name);
  })}</closure_2>;
}
noopAll;
const createCacheKey = { overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_BORDER);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.round, minWidth: 48, height: 32, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[2] = { color: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

export default function OptionalCommandOptionList(options) {
  options = options.options;
  let tmp3 = null;
  if (options.length > 0) {
    const obj = { style: null, options: null, onSelectOption: null };
    obj[0] = tmp2;
    obj[1] = options;
    obj[2] = tmp;
    tmp3 = <OptionList style={null} options={null} onSelectOption={null} />;
  }
  return tmp3;
};