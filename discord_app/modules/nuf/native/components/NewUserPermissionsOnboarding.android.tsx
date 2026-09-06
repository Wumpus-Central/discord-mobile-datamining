// === Module 12688: NewUserPermissionsOnboarding ===

// Module 12688 (NewUserPermissionsOnboarding)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, ScrollView: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { scrollContainer: { minHeight: "100%" }, container: { flexGrow: 1, alignItems: "center", justifyContent: "center" }, alertContainer: null, alert: null, alertContent: null, alertTitle: null, alertSubtitle: null, buttonWrapper: null, primaryButtonContainer: null, trailing: null };
createStyles = { paddingTop: 80 + fn(5682).NAV_BAR_HEIGHT };
createStyles.alertContainer = createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
createStyles.alert = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
createStyles.alertContent = { paddingVertical: 24, paddingHorizontal: 24, alignItems: "center" };
createStyles.alertTitle = { paddingBottom: 8, textAlign: "center" };
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE, alignItems: "center", maxWidth: 290 };
createStyles.alertSubtitle = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
createStyles.buttonWrapper = { flexDirection: "row" };
let obj2 = { paddingBottom: nativeDefault.space.PX_16, textAlign: "center" };
createStyles.primaryButtonContainer = { marginBottom: nativeDefault.space.PX_12 };
const obj3 = { marginBottom: nativeDefault.space.PX_12 };
createStyles.trailing = { flexGrow: 0, padding: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(createStyles);
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
  let obj = { contentContainerStyle: tmp.scrollContainer, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.alertContainer, children: null };
  const items = [header, ];
  const obj1 = { style: tmp.alert, children: null };
  const obj2 = { style: tmp.alertContent, children: null };
  const items1 = [React4(Text_Text.Text, { style: tmp.alertTitle, variant: "heading-lg/bold", color: "text-default", children: title }), React4(Text_Text.Text, { style: tmp.alertSubtitle, variant: "text-sm/medium", color: "text-default", children: subtitle }), , ];
  const items2 = [tmp.buttonWrapper, ];
  let primaryButtonContainer = flag;
  if (flag) {
    primaryButtonContainer = tmp.primaryButtonContainer;
  }
  const obj5 = { style: items2, children: null };
  items2[1] = primaryButtonContainer;
  const obj6 = { variant: "primary", size: "md", text: null, onPress: null, loading: null, grow: true };
  const intl = tmp6(1114).intl;
  obj6.text = intl.string(util.t["2nYlT2"]);
  obj6.onPress = onAllow;
  obj6.loading = loading;
  obj5.children = React4(components_Button_Button.Button, obj6);
  items1[2] = React4(React2, obj5);
  if (flag) {
    const obj7 = { style: tmp.buttonWrapper, children: null };
    const obj8 = { variant: "secondary", text: null, onPress: null, grow: true };
    const intl2 = tmp6(1114).intl;
    obj8.text = intl2.string(tmp6(1114).t["5Wxrcd"]);
    obj8.onPress = onDontAllow;
    obj7.children = tmp4(tmp6(4975).Button, obj8);
    flag = tmp4(tmp5, obj7);
  }
  const obj9 = { children: null };
  items1[3] = flag;
  obj2.children = items1;
  obj1.children = hasOwnProperty(React2, obj2);
  items[1] = React4(React2, obj1);
  obj9.children = items;
  obj.children = hasOwnProperty(React2, obj9);
  obj.children = React4(React2, obj);
  const items3 = [React4(React2, obj), React4(React2, { style: tmp.trailing, children: trailing })];
  obj.children = items3;
  return hasOwnProperty(React3, obj);
};