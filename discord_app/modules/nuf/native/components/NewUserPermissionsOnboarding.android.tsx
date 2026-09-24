// discord_app/modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  scrollContainer: { minHeight: "100%" },
  container: { flexGrow: 1, alignItems: "center", justifyContent: "center" },
  alertContainer: { paddingTop: 80 + fn(5987).NAV_BAR_HEIGHT },
  alert: null,
  alertContent: null,
  alertTitle: null,
  alertSubtitle: null,
  buttonWrapper: null,
  primaryButtonContainer: null,
  trailing: null,
};
let obj3 = { paddingTop: 80 + fn(5987).NAV_BAR_HEIGHT };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.alert = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
obj2.alertContent = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
obj2.alertTitle = { paddingBottom: 8, textAlign: "center" };
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
obj2.alertSubtitle = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.buttonWrapper = { flexDirection: "row" };
let obj5 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.primaryButtonContainer = { marginBottom: nativeDefault.space.PX_12 };
const obj6 = { marginBottom: nativeDefault.space.PX_12 };
obj2.trailing = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(showSkip) {
  let flag = showSkip.showSkip;
  ({ title, subtitle, header, trailing, loading } = showSkip);
  if (flag === undefined) {
    flag = true;
  }
  ({ onAllow, onDontAllow } = showSkip);
  const tmp = closure_6();
  const obj = { contentContainerStyle: tmp.scrollContainer, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.alertContainer, children: null };
  const items = [header];
  const obj4 = { style: tmp.alert, children: null };
  const obj5 = { style: tmp.alertContent, children: null };
  const items1 = [
    React4(Text_Text.Text, {
      style: tmp.alertTitle,
      variant: "heading-lg/bold",
      color: "text-default",
      children: title,
    }),
    React4(Text_Text.Text, {
      style: tmp.alertSubtitle,
      variant: "text-sm/medium",
      color: "text-default",
      children: subtitle,
    }),
    ,
  ];
  const items2 = [tmp.buttonWrapper];
  let primaryButtonContainer = flag;
  if (flag) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  const obj8 = { style: items2, children: null };
  items2[1] = primaryButtonContainer;
  const obj9 = { variant: "primary", size: "md", text: null, onPress: null, loading: null, grow: true };
  const intl = util.intl;
  obj9.text = intl.string(util.t["2nYlT2"]);
  obj9.onPress = onAllow;
  obj9.loading = loading;
  obj8.children = React4(components_Button_Button.Button, obj9);
  items1[2] = React4(React2, obj8);
  if (flag) {
    const obj10 = { style: tmp.buttonWrapper, children: null };
    const obj11 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl2 = util.intl;
    obj11.text = intl2.string(util.t["5Wxrcd"]);
    obj11.onPress = onDontAllow;
    obj10.children = React4(components_Button_Button.Button, obj11);
    flag = React4(React2, obj10);
  }
  const obj12 = { children: null };
  items1[3] = flag;
  obj5.children = items1;
  obj4.children = hasOwnProperty(React2, obj5);
  items[1] = React4(React2, obj4);
  obj12.children = items;
  obj3.children = hasOwnProperty(React2, obj12);
  obj2.children = React4(React2, obj3);
  const items3 = [React4(React2, obj2), React4(React2, { style: tmp.trailing, children: trailing })];
  obj.children = items3;
  return hasOwnProperty(React3, obj);
}
