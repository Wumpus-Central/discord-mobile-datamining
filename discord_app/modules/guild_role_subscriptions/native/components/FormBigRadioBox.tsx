// === Module 17726: FormBigRadioBox ===

// Module 17726 (FormBigRadioBox)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import Text_Text from "Text/Text" /* 4556 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, containerSelected: null, indicator: null, iconContainer: null, iconContainerSelected: null, title: null, disabled: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, alignSelf: "stretch", alignItems: "flex-start", padding: 16 };
createStyles.container = createStyles;
createStyles.containerSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.indicator = { position: "absolute", right: 18, top: 18 };
let size = { height: 40, width: 40, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, justifyContent: "center", marginBottom: 16 };
createStyles.iconContainer = size;
const obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.iconContainerSelected = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.title = { marginBottom: 2 };
createStyles.disabled = { opacity: 0.5 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormBigRadioBox.tsx");

export default function FormBigRadioBox(arg0) {
  ({ selected, disabled } = arg0);
  ({ description, icon, title, style, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_6();
  let obj = useA11yRolesNative;
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
  obj.onPress = tmp7;
  obj = { style: tmp.indicator, active: selected };
  const items1 = [React4(native.RadioIndicator, obj), , , ];
  const items2 = [tmp.iconContainer, ];
  if (selected) {
    selected = tmp.iconContainerSelected;
  }
  const tmp5 = hasOwnProperty;
  const tmp6 = TouchableHitBoxDefault;
  const tmp9 = View;
  items2[1] = selected;
  items1[1] = React4(tmp9, { style: items2, children: React4(native.Icon, { source: icon }) });
  items1[2] = React4(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "text-md/semibold", color: "interactive-text-default", children: title });
  items1[3] = React4(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description });
  obj.children = items1;
  return tmp5(tmp6, obj);
};