// discord_app/modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function OptionList(options) {
  options = options.options;
  const onSelectOption = options.onSelectOption;
  let c2;
  const tmp = createCacheKey();
  c2 = tmp;
  const items = [tmp.container, options.style];
  return <c2 style={items} collapsable={false}>{options.map((displayName) => {
    const options = displayName;
    let obj = {
      onPress() {
        return outer1_1(closure_0);
      },
      start: false,
      end: arg1 === options.length - 1,
      label: displayName.displayName,
      subLabel: displayName.displayDescription,
      trailing: null
    };
    obj = {
      accessibilityRole: "button",
      style: _undefined.addButton,
      onPress() {
        return outer1_1(closure_0);
      },
      children: null
    };
    obj = { variant: "text-sm/semibold", style: _undefined.addButtonText, children: null };
    const intl = options(onSelectOption[8]).intl;
    obj[2] = intl.string(options(onSelectOption[8]).t.OYkgVk);
    obj[3] = outer1_3(options(onSelectOption[7]).Text, obj);
    obj[5] = outer1_3(options(onSelectOption[6]).PressableOpacity, obj);
    return outer1_3(options(onSelectOption[5]).TableRow, obj, displayName.name);
  })}</c2>;
}
createCacheKey = { container: null, addButton: null, addButtonText: null };
createCacheKey = { overflow: "hidden", borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.lg };
const merged = Object.assign(require("Themes").shadows.SHADOW_BORDER);
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.round, minWidth: 48, height: 32, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
const obj1 = { borderRadius: require("Themes").radii.round, minWidth: 48, height: 32, justifyContent: "center", alignItems: "center", paddingHorizontal: 12, backgroundColor: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createCacheKey[2] = { color: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj2 = { color: require("Themes").colors.REDESIGN_BUTTON_TERTIARY_TEXT };
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/screens/command_view/OptionalCommandOptionList.tsx");

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