// === Module 17843: FormBigRadioBox ===

// Module 17843 (FormBigRadioBox)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4355 */;
import Text_Text from "Text/Text" /* 4632 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9179 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 }, containerSelected: null, indicator: null, iconContainer: null, iconContainerSelected: null, title: null, disabled: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
obj2.containerSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.indicator = { position: "absolute", right: 18, top: 18 };
let size = { height: 40, width: 40, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
obj2.iconContainer = size;
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.iconContainerSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.title = { marginBottom: 2 };
obj2.disabled = { opacity: 0.5 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default function FormBigRadioBox(arg0) {
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
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
  const obj2 = { style: items, accessibilityRole, accessibilityState, onPress: null, children: null };
  items[2] = disabled2;
  items[3] = style;
  let tmp7;
  if (!disabled) {
    tmp7 = onPress;
  }
  obj2.onPress = tmp7;
  const items1 = [React4(native.RadioIndicator, { style: tmp.indicator, active: selected }), , , ];
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  const obj3 = { style: tmp.indicator, active: selected };
  const tmp6 = TouchableHitBoxDefault;
  items2[1] = selected;
  items1[1] = React4(View, { style: items2, children: React4(native.Icon, { source: icon }) });
  items1[2] = React4(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title });
  items1[3] = React4(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  obj2.children = items1;
  return hasOwnProperty(tmp6, obj2);
};