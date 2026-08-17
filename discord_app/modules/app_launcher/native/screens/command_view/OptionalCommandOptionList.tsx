// discord_app/modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
function OptionList(options) {
  options = options.options;
  const onSelectOption = options.onSelectOption;
  closure_2 = undefined;
  const tmp = callback();
  closure_2 = tmp;
  const items = [tmp.container, options.style];
  return <closure_2 style={items} collapsable={false}>{options.map((displayName) => {
    options = displayName;
    let obj = {
      onPress() {
        return closure_1_1(closure_0);
      },
      start: false,
      end: arg1 === options.length - 1,
      label: displayName.displayName,
      subLabel: displayName.displayDescription,
      trailing: null
    };
    obj = {
      accessibilityRole: "button",
      style: closure_2.addButton,
      onPress() {
        return closure_1_1(closure_0);
      },
      children: null
    };
    obj = { variant: "text-sm/semibold", style: closure_2.addButtonText, children: null };
    const intl = options(onSelectOption[8]).intl;
    obj[2] = intl.string(options(onSelectOption[8]).t.OYkgVk);
    obj[3] = closure_1_3(options(onSelectOption[7]).Text, obj);
    obj[5] = closure_1_3(options(onSelectOption[6]).PressableOpacity, obj);
    return closure_1_3(options(onSelectOption[5]).TableRow, obj, displayName.name);
  })}</closure_2>;
}
noopAll;
createCacheKey = { container: null, addButton: null, addButtonText: null };
createCacheKey = { overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_BORDER);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.round, minWidth: 48, height: 32, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
const obj1 = { borderRadius: ThemesDefault.radii.round, minWidth: 48, height: 32, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, backgroundColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[2] = { color: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj2 = { color: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

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