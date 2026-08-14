// discord_app/modules/guild_role_subscriptions/native/components/FormDropdown.tsx
import "noop";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import { registerAsset } from "../../../../../_runtime/10807_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/13325_registerAsset.js";
import { Button } from "../../../../design/void/native.tsx";
import { styles } from "FormStyles.tsx";

let c3;
let c4;
const require = arg1;
function LockedIcon() {
  const obj = { size: null, source: null };
  obj[0] = Button.Icon.Sizes.MEDIUM;
  obj[1] = registerAsset;
  return callback(Button.Icon, obj);
}
function DropdownIcon() {
  const obj = { style: { transform: items }, size: null, source: null };
  items = [{ rotate: "90deg" }];
  obj[1] = Button.Icon.Sizes.MEDIUM;
  obj[2] = registerAsset;
  return callback(Button.Icon, obj);
}
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
createCacheKey = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_MUTED, 16));
createCacheKey[2] = createCacheKey;
const obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_DEFAULT, 16));
createCacheKey[3] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  let disabled;
  let label;
  let leading;
  let onPress;
  let placeholder;
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = createCacheKey();
  const tmp2 = importDefault;
  const tmp4 = styles();
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
  return tmp7(tmp2(9120), obj);
};
export const useFormDropdownStyles = createCacheKey;