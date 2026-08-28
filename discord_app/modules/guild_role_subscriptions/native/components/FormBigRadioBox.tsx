// === Module 17241: FormBigRadioBox ===

// Module 17241 (FormBigRadioBox)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import useCheckboxA11yNative from "useCheckboxA11yNative" /* 4174 */;
import Text from "Text" /* 4442 */;
import renderDefault from "render" /* 9006 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, containerSelected: null, indicator: null, iconContainer: null, iconContainerSelected: null, title: null, disabled: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[2] = { position: "absolute", right: 18, top: 18 };
const obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[3] = { height: 40, width: 40, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
const obj2 = { height: 40, width: 40, alignItems: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { marginBottom: 2 };
createCacheKey[6] = { opacity: 0.5 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default function FormBigRadioBox(arg0) {
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback2();
  let obj = useCheckboxA11yNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const items = [tmp.container, , , ];
  let containerSelected = selected;
  if (selected) {
    containerSelected = tmp.containerSelected;
  }
  items[1] = containerSelected;
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp.disabled;
  }
  obj = { style: items, accessibilityRole, accessibilityState, onPress: null, children: null };
  items[2] = disabled2;
  items[3] = style;
  let tmp7;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj[3] = tmp7;
  obj = { style: tmp.indicator, active: selected };
  const items1 = [callback(Button.RadioIndicator, obj), , , ];
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  const tmp5 = closure_5;
  const tmp6 = renderDefault;
  const tmp9 = View;
  items2[1] = selected;
  items1[1] = callback(tmp9, { style: items2, children: callback(Button.Icon, { source: icon }) });
  items1[2] = callback(Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title });
  items1[3] = callback(Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  obj[4] = items1;
  return tmp5(tmp6, obj);
};