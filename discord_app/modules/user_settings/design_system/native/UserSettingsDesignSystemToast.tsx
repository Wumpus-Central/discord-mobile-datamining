// === Module 15594: UserSettingsDesignSystemToast ===

// Module 15594 (UserSettingsDesignSystemToast)
import nativeDefault from "native" /* 576 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4817 */;
import Stack_Stack from "Stack/Stack" /* 5475 */;
import Toast_Toast from "Toast/Toast" /* 14183 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "This is a toast message";
const createStyles = fn(4866);
let obj2 = { container: { flexGrow: 1, alignItems: "center", padding: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx");

export default function UserSettingsDesignSystemToast() {
  const obj = { contentContainerStyle: closure_7().container, children: null };
  const obj2 = { spacing: nativeDefault.space.PX_12, align: "center", children: null };
  const items = [React4(Toast_Toast.Toast, { text, variant: "default" }), React4(Toast_Toast.Toast, { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon }), , , ];
  const obj3 = { text, variant: "default" };
  const obj4 = { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon };
  items[2] = React4(Toast_Toast.Toast, { text, variant: "default", icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_BRAND, secondaryIconColor: nativeDefault.colors.ICON_DEFAULT });
  items[3] = React4(Toast_Toast.Toast, { text, variant: "success" });
  items[4] = React4(Toast_Toast.Toast, { text, variant: "critical" });
  obj2.children = items;
  obj.children = hasOwnProperty(Stack_Stack.Stack, obj2);
  return React4(ScrollView, obj);
};