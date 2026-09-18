// === Module 13190: SuspiciousDownloadActionSheet ===

// Module 13190 (SuspiciousDownloadActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import openURLDefault from "openURL" /* 4411 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { padding: nativeDefault.space.PX_12 }, title: { textAlign: "center" }, body: { textAlign: "center" } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default function SuspiciousDownloadActionSheet(href) {
  href = href.href;
  const tmp = closure_5();
  const obj = { startExpanded: true, children: null };
  const obj2 = { spacing: 16, justify: "center", align: "center", style: null, children: null };
  const items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.style = items;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: null };
  const items1 = [closure_3(href(5862).TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = href(1115).intl;
  obj4.children = intl.string(href(1115).t.XtDo9Z);
  items1[1] = closure_3(href(4718).Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-md/medium", children: null };
  const intl2 = href(1115).intl;
  obj5.children = intl2.string(href(1115).t.L9yFko);
  items1[2] = closure_3(href(4718).Text, obj5);
  obj3.children = items1;
  const items2 = [closure_4(href(5142).Stack, obj3), ];
  const obj6 = { spacing: 8, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = href(1115).intl;
  obj7.text = intl3.string(href(1115).t.j7Vi2i);
  obj7.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  const items3 = [closure_3(href(5144).Button, obj7), ];
  const obj8 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = href(1115).intl;
  obj8.text = intl4.string(href(1115).t["/bHu89"]);
  obj8.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openURLDefault(href, true);
  };
  items3[1] = closure_3(href(5144).Button, obj8);
  obj6.children = items3;
  items2[1] = closure_4(href(5142).Stack, obj6);
  obj2.children = items2;
  obj.children = closure_4(href(5142).Stack, obj2);
  return closure_3(href(7346).BottomSheet, obj);
};