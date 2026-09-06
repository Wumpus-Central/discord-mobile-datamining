// === Module 13896: FormDropdown ===

// Module 13896 (FormDropdown)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import _modDef9939 from "module_9939" /* 9939 */;
import _modDef13897 from "module_13897" /* 13897 */;
import FormStylesDefault from "FormStyles" /* 13898 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

const TouchableHitBoxDefault = tmp2(9050);
require = fn;
function LockedIcon() {
  return React3(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: _modDef13897 });
}
function DropdownIcon() {
  let obj = { style: null, size: null, source: null };
  obj = { transform: null };
  const items = [{ rotate: "90deg" }];
  obj.transform = items;
  obj.style = obj;
  obj.size = native.Icon.Sizes.MEDIUM;
  obj.source = _modDef9939;
  return React3(native.Icon, obj);
}
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
createStyles = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
createStyles.placeholder = createStyles;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
createStyles.text = {};
createStyles = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = createStyles();
  const tmp4 = FormStylesDefault();
  let obj = { style: null, accessibilityRole: "spinbutton", disabled, onPress: null, children: null };
  const items = [tmp.container, tmp4.dropdownInput];
  obj.style = items;
  let tmp9;
  const tmp5Result = React3(disabled ? LockedIcon : DropdownIcon, {});
  const tmp7 = React4;
  if (!disabled) {
    tmp9 = onPress;
  }
  obj.onPress = tmp9;
  const items1 = [leading, , ];
  const items2 = [tmp.content, ];
  obj = { style: items2, children: null };
  items2[1] = null != label ? tmp.text : tmp.placeholder;
  if (label == null) {
    label = placeholder;
  }
  obj.children = label;
  items1[1] = React3(native.LegacyText, obj);
  items1[2] = tmp5Result;
  obj.children = items1;
  return tmp7(TouchableHitBoxDefault, obj);
};
export const useFormDropdownStyles = createStyles;