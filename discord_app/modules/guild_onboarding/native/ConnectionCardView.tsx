// === Module 6593: ConnectionCardView ===

// Module 6593 (ConnectionCardView)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4788 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ActivityIndicator: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = { card: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, leftContent: null, icon: null, textContent: null, connectedStatus: null };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.leftContent = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
let size = { width: 32, height: 32, marginRight: nativeDefault.space.PX_12, justifyContent: "center", alignItems: "center" };
obj2.icon = size;
obj2.textContent = { flex: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
obj2.connectedStatus = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default function ConnectionCardView(description) {
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = closure_6();
  const obj = { style: tmp.card, children: null };
  const obj2 = { style: tmp.leftContent, children: null };
  const items = [React4(React2, { style: tmp.icon, children: icon }), ];
  const obj4 = { style: tmp.textContent, children: null };
  const items1 = [React4(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: displayName }), ];
  let tmp4Result = null != description;
  if (tmp4Result) {
    tmp4Result = description.length > 0;
  }
  if (tmp4Result) {
    const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp4Result = React4(Text_Text.Text, obj5);
  }
  items1[1] = tmp4Result;
  obj4.children = items1;
  items[1] = hasOwnProperty(React2, obj4);
  obj2.children = items;
  const items2 = [hasOwnProperty(React2, obj2), ];
  if (isLoading) {
    let tmp4Result2 = React4(React3, { size: "small" });
  } else if (isConnected) {
    const obj6 = { style: tmp.connectedStatus, children: null };
    const obj7 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
    const intl2 = util.intl;
    obj7.children = intl2.string(util.t["LV+CXH"]);
    const items3 = [React4(Text_Text.Text, obj7), React4(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" })];
    obj6.children = items3;
    tmp4Result2 = hasOwnProperty(React2, obj6);
  } else {
    const obj8 = { variant: "primary", size: "sm", onPress: onConnect, text: null, disabled: null };
    const intl = util.intl;
    obj8.text = intl.string(util.t.S0W8Z5);
    obj8.disabled = !canConnect;
    tmp4Result2 = React4(components_Button_Button.Button, obj8);
  }
  items2[1] = tmp4Result2;
  obj.children = items2;
  return hasOwnProperty(React2, obj);
};