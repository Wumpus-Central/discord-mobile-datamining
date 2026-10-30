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
const createStyles = fn(5009);
let obj2 = {
  scrollContainer: { minHeight: "100%" },
  container: { flexGrow: 1, alignItems: "center", justifyContent: "center" },
  alertContainer: { paddingTop: 80 + fn(5581).NAV_BAR_HEIGHT },
  alertContainerInsideCard: null,
  alert: null,
  alertInsideCard: null,
  alertContent: null,
  alertContentInsideCard: null,
  header: null,
  alertTitle: null,
  alertSubtitle: null,
  buttonWrapper: null,
  primaryButtonContainer: null,
  trailing: null,
};
let obj3 = { paddingTop: 80 + fn(5581).NAV_BAR_HEIGHT };
obj2.alertContainerInsideCard = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: 0 };
let obj4 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, paddingTop: 0 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.alert = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
obj2.alertInsideCard = { width: "100%", maxWidth: 320, alignSelf: "center" };
obj2.alertContent = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
obj2.alertContentInsideCard = { width: "100%" };
let obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.xl,
  borderWidth: 1,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE,
  alignItems: "center",
  maxWidth: 290,
};
obj2.header = { alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.alertTitle = { paddingBottom: 8, textAlign: "center" };
let obj6 = { alignItems: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.alertSubtitle = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.buttonWrapper = { flexDirection: "row" };
const obj7 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
obj2.primaryButtonContainer = { marginBottom: nativeDefault.space.PX_12 };
const obj8 = { marginBottom: nativeDefault.space.PX_12 };
obj2.trailing = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/NewUserPermissionsOnboarding.android.tsx");

export default function NewUserPermissionsOnboarding(arg0) {
  ({ header, headerInsideCard } = arg0);
  ({ title, subtitle } = arg0);
  if (headerInsideCard === undefined) {
    headerInsideCard = false;
  }
  ({ showSkip, trailing, loading } = arg0);
  if (showSkip === undefined) {
    showSkip = true;
  }
  ({ onAllow, onDontAllow } = arg0);
  const tmp = closure_6();
  const obj = { contentContainerStyle: tmp.scrollContainer, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [tmp.alertContainer];
  let alertContainerInsideCard = headerInsideCard;
  if (headerInsideCard) {
    alertContainerInsideCard = tmp.alertContainerInsideCard;
  }
  const obj3 = { style: items, children: null };
  items[1] = alertContainerInsideCard;
  let tmp6 = !headerInsideCard;
  if (!headerInsideCard) {
    tmp6 = header;
  }
  const items1 = [tmp6];
  const items2 = [tmp.alert];
  let alertInsideCard = headerInsideCard;
  if (headerInsideCard) {
    alertInsideCard = tmp.alertInsideCard;
  }
  const obj4 = { style: items2, children: null };
  items2[1] = alertInsideCard;
  const items3 = [tmp.alertContent];
  let alertContentInsideCard = headerInsideCard;
  if (headerInsideCard) {
    alertContentInsideCard = tmp.alertContentInsideCard;
  }
  const obj5 = { style: items3, children: null };
  items3[1] = alertContentInsideCard;
  if (headerInsideCard) {
    headerInsideCard = null != header;
  }
  if (headerInsideCard) {
    const obj6 = { style: tmp.header, children: header };
    headerInsideCard = React4(React2, obj6);
  }
  const items4 = [
    headerInsideCard,
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
  const items5 = [tmp.buttonWrapper];
  let primaryButtonContainer = showSkip;
  if (showSkip) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  const obj9 = { style: items5, children: null };
  items5[1] = primaryButtonContainer;
  const obj10 = { variant: "primary", size: "md", text: null, onPress: null, loading: null, grow: true };
  const intl = util.intl;
  obj10.text = intl.string(util.t["2nYlT2"]);
  obj10.onPress = onAllow;
  obj10.loading = loading;
  obj9.children = React4(components_Button_Button.Button, obj10);
  items4[3] = React4(React2, obj9);
  if (showSkip) {
    const obj11 = { style: tmp.buttonWrapper, children: null };
    const obj12 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl2 = util.intl;
    obj12.text = intl2.string(util.t["5Wxrcd"]);
    obj12.onPress = onDontAllow;
    obj11.children = React4(components_Button_Button.Button, obj12);
    showSkip = React4(React2, obj11);
  }
  const obj13 = { children: null };
  items4[4] = showSkip;
  obj5.children = items4;
  obj4.children = hasOwnProperty(React2, obj5);
  items1[1] = React4(React2, obj4);
  obj13.children = items1;
  obj3.children = hasOwnProperty(React2, obj13);
  obj2.children = React4(React2, obj3);
  const items6 = [React4(React2, obj2), React4(React2, { style: tmp.trailing, children: trailing })];
  obj.children = items6;
  return hasOwnProperty(React3, obj);
}
