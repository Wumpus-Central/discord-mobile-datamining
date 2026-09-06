// discord_app/modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import openURLDefault from "../../../lib/openURL.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, body: null };
createStyles = { padding: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.title = { textAlign: "center" };
createStyles.body = { textAlign: "center" };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default function SuspiciousDownloadActionSheet(href) {
  href = href.href;
  const tmp = closure_5();
  let obj = { startExpanded: true, children: null };
  obj = { spacing: 16, justify: "center", align: "center", style: null, children: null };
  const items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj.style = items;
  obj = { spacing: 8, justify: "center", align: "center", children: null };
  const items1 = [closure_3(href(5692).TrafficConeSpotIllustration, {}), ,];
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = href(1114).intl;
  obj1.children = intl.string(href(1114).t.XtDo9Z);
  items1[1] = closure_3(href(4556).Text, obj1);
  const obj2 = { style: tmp.body, variant: "text-md/medium", children: null };
  const intl2 = href(1114).intl;
  obj2.children = intl2.string(href(1114).t.L9yFko);
  items1[2] = closure_3(href(4556).Text, obj2);
  obj.children = items1;
  const items2 = [closure_4(href(4973).Stack, obj)];
  const obj3 = { spacing: 8, children: null };
  const obj4 = { text: null, onPress: null };
  const intl3 = href(1114).intl;
  obj4.text = intl3.string(href(1114).t.j7Vi2i);
  obj4.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  const items3 = [closure_3(href(4975).Button, obj4)];
  const obj5 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = href(1114).intl;
  obj5.text = intl4.string(href(1114).t["/bHu89"]);
  obj5.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openURLDefault(href, true);
  };
  items3[1] = closure_3(href(4975).Button, obj5);
  obj3.children = items3;
  items2[1] = closure_4(href(4973).Stack, obj3);
  obj.children = items2;
  obj.children = closure_4(href(4973).Stack, obj);
  return closure_3(href(7150).BottomSheet, obj);
}
