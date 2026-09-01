// === Module 13635: LockedIcon ===

// Module 13635 (LockedIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import renderDefault from "render" /* 9067 */;
import registerAssetDefault from "registerAsset" /* 10030 */;
import registerAssetDefault2 from "registerAsset" /* 13636 */;
import stylesDefault from "styles" /* 13637 */;
import { Fonts } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "createTextStyle" /* 5461 */;

require = arg1;
function LockedIcon() {
  return callback(Button.Icon, { size: Button.Icon.Sizes.MEDIUM, source: registerAssetDefault2 });
}
function DropdownIcon() {
  const items = [{ rotate: "90deg" }];
  return callback(Button.Icon, { style: { transform: items }, size: Button.Icon.Sizes.MEDIUM, source: registerAssetDefault });
}
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
createCacheKey = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_MUTED, 16));
createCacheKey[2] = createCacheKey;
const obj1 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_DEFAULT, 16));
createCacheKey[3] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const importDefaultResult1 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = createCacheKey();
  const tmp2 = importDefault;
  const tmp4 = stylesDefault();
  let obj = { style: items, accessibilityRole: "spinbutton", disabled, onPress: null, children: null };
  items = [tmp.container, tmp4.dropdownInput];
  let tmp9;
  const tmp5Result = closure_3(disabled ? LockedIcon : DropdownIcon, {});
  const tmp7 = closure_4;
  if (!disabled) {
    tmp9 = onPress;
  }
  obj[3] = tmp9;
  const items1 = [leading, , ];
  const items2 = [tmp.content, ];
  obj = { style: items2, children: null };
  items2[1] = null != label ? tmp.text : tmp.placeholder;
  if (label == null) {
    label = placeholder;
  }
  obj[1] = label;
  items1[1] = closure_3(Button.LegacyText, obj);
  items1[2] = tmp5Result;
  obj[4] = items1;
  return tmp7(renderDefault, obj);
};
export const useFormDropdownStyles = createCacheKey;