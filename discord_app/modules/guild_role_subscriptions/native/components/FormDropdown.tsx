// === Module 14171: FormDropdown ===

// Module 14171 (FormDropdown)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 10017 */;
import _modDef10203 from "module_10203" /* 10203 */;
import _modDef14172 from "module_14172" /* 14172 */;
import FormStylesDefault from "FormStyles" /* 14173 */;
import noop from "module_19" /* 19 */;
import TextStyles_mod from "TextStyles" /* 5743 */;

require = fn;
function LockedIcon() {
  return React3(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: _modDef14172 });
}
function DropdownIcon() {
  const obj = { style: null, size: native.Icon.Sizes.MEDIUM, source: _modDef10203 };
  const obj2 = { transform: null };
  const items = [{ rotate: "90deg" }];
  obj2.transform = items;
  obj.style = obj2;
  return React3(native.Icon, obj);
}
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { alignItems: "center", flexDirection: "row" }, content: { marginStart: 8, flexGrow: 1 }, placeholder: null, text: null };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_MUTED, 16));
obj2.placeholder = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_DEFAULT, 16));
obj2.text = {};
const styles = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormDropdown.tsx");

export default function FormDropdown(arg0) {
  ({ disabled, label } = arg0);
  ({ leading, onPress, placeholder } = arg0);
  const tmp = styles();
  const tmp4 = FormStylesDefault();
  const obj = { style: null, accessibilityRole: "spinbutton", disabled, onPress: null, children: null };
  const items = [tmp.container, tmp4.dropdownInput];
  obj.style = items;
  let tmp9;
  const tmp5Result = React3(disabled ? LockedIcon : DropdownIcon, {});
  if (!disabled) {
    tmp9 = onPress;
  }
  obj.onPress = tmp9;
  const items1 = [leading, , ];
  const items2 = [tmp.content, ];
  const obj2 = { style: items2, children: null };
  items2[1] = null != label ? tmp.text : tmp.placeholder;
  if (label == null) {
    label = placeholder;
  }
  obj2.children = label;
  items1[1] = React3(native.LegacyText, obj2);
  items1[2] = tmp5Result;
  obj.children = items1;
  return React4(TouchableHitBoxDefault, obj);
};
export const useFormDropdownStyles = styles;