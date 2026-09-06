// discord_app/modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import native from "../../../../design/assets/native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import URLCallout from "../../../safety_common/native/URLCallout.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, warningMessage: null };
createStyles = { padding: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.title = { textAlign: "center" };
createStyles.warningMessage = { textAlign: "center" };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default function BlockedDomainActionSheet(url) {
  const tmp = closure_5();
  let obj = { startExpanded: true, children: null };
  obj = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: null };
  obj = { spacing: 8, justify: "center", align: "center", children: null };
  const items = [React3(native.TrafficConeSpotIllustration, {}), ,];
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t["2B3wj8"]);
  items[1] = React3(Text_Text.Text, obj1);
  const obj2 = { style: tmp.warningMessage, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.jnHyYU, {});
  items[2] = React3(Text_Text.Text, obj2);
  obj.children = items;
  const items1 = [React4(Stack_Stack.Stack, obj), React3(URLCallout.URLCallout, { url: url.url })];
  const obj3 = { grow: true, text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["/g10LC"]);
  obj3.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  items1[2] = React3(components_Button_Button.Button, obj3);
  obj.children = items1;
  obj.children = React4(Stack_Stack.Stack, obj);
  return React3(Sheet_BottomSheet.BottomSheet, obj);
}
