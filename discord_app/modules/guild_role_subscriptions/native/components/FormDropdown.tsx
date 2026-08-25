// discord_app/modules/guild_role_subscriptions/native/components/FormDropdown.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import renderDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import registerAssetDefault from "../../../../../_runtime/10904_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/13450_registerAsset.js";
import stylesDefault from "FormStyles.tsx";
import { Fonts } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

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