// discord_app/modules/guild_role_subscriptions/native/components/FormDropdown.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef9939 from "../../../../../_runtime/metro/09939__.js";
import _modDef13897 from "../../../../../_runtime/metro/13897__.js";
import FormStylesDefault from "FormStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

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
let createStyles = {
  container: { alignItems: "center", flexDirection: "row" },
  content: { marginStart: 8, flexGrow: 1 },
  placeholder: null,
  text: null,
};
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
  if (!disabled) {
    tmp9 = onPress;
  }
  obj.onPress = tmp9;
  const items1 = [leading, ,];
  const items2 = [tmp.content];
  obj = { style: items2, children: null };
  items2[1] = null != label ? tmp.text : tmp.placeholder;
  if (label == null) {
    label = placeholder;
  }
  obj.children = label;
  items1[1] = React3(native.LegacyText, obj);
  items1[2] = tmp5Result;
  obj.children = items1;
  return React4(TouchableHitBoxDefault, obj);
}
export const useFormDropdownStyles = createStyles;
