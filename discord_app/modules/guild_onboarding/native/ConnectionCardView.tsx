// discord_app/modules/guild_onboarding/native/ConnectionCardView.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CircleCheckIcon from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ActivityIndicator: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { card: null, leftContent: null, icon: null, textContent: null, connectedStatus: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  padding: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
createStyles.card = createStyles;
createStyles.leftContent = {
  flexDirection: "row",
  alignItems: "center",
  flex: 1,
  marginRight: nativeDefault.space.PX_12,
};
let size = {
  width: 32,
  height: 32,
  marginRight: nativeDefault.space.PX_12,
  justifyContent: "center",
  alignItems: "center",
};
createStyles.icon = size;
createStyles.textContent = { flex: 1 };
let obj1 = { flexDirection: "row", alignItems: "center", flex: 1, marginRight: nativeDefault.space.PX_12 };
createStyles.connectedStatus = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCardView.tsx");

export default function ConnectionCardView(description) {
  description = description.description;
  ({ displayName, icon, isLoading, isConnected, canConnect, onConnect } = description);
  const tmp = closure_6();
  let obj = { style: tmp.card, children: null };
  obj = { style: tmp.leftContent, children: null };
  obj = { style: tmp.icon, children: icon };
  const items = [React4(React2, obj)];
  const obj1 = { style: tmp.textContent, children: null };
  const items1 = [React4(Text_Text.Text, { variant: "text-md/medium", color: "text-strong", children: displayName })];
  let tmp4Result = null != description;
  if (tmp4Result) {
    tmp4Result = description.length > 0;
  }
  if (tmp4Result) {
    const obj2 = { variant: "text-sm/normal", color: "text-subtle", children: description };
    tmp4Result = React4(Text_Text.Text, obj2);
  }
  items1[1] = tmp4Result;
  obj1.children = items1;
  items[1] = hasOwnProperty(React2, obj1);
  obj.children = items;
  const items2 = [hasOwnProperty(React2, obj)];
  if (isLoading) {
    tmp4Result = React4(React3, { size: "small" });
  } else if (isConnected) {
    const obj3 = { style: tmp.connectedStatus, children: null };
    const obj4 = { variant: "text-sm/medium", color: "text-feedback-positive", children: null };
    const intl2 = util.intl;
    obj4.children = intl2.string(util.t["LV+CXH"]);
    const items3 = [
      React4(Text_Text.Text, obj4),
      React4(CircleCheckIcon.CircleCheckIcon, { size: "sm", color: "status-positive" }),
    ];
    obj3.children = items3;
    tmp4Result = hasOwnProperty(React2, obj3);
  } else {
    const obj5 = { variant: "primary", size: "sm", onPress: onConnect, text: null, disabled: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t.S0W8Z5);
    obj5.disabled = !canConnect;
    tmp4Result = React4(components_Button_Button.Button, obj5);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  return hasOwnProperty(React2, obj);
}
