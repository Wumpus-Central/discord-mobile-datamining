// discord_app/modules/verification/native/components/ChangeEmailComplete.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import _modDef6602 from "../../../../../_runtime/metro/06602__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function handlePress() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const resetChangeEmailStore = fn(5623).resetChangeEmailStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { contentContainer: null, image: null, title: null, body: null, bodyInner: null, tooltip: null };
createStyles = {
  flexGrow: 2,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  gap: 20,
  alignItems: "center",
};
createStyles.contentContainer = createStyles;
createStyles.image = { height: 190, width: 220, resizeMode: "contain" };
createStyles.title = { textAlign: "center" };
createStyles.body = { textAlign: "center" };
createStyles.bodyInner = { gap: 2 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.tooltip = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: "100%",
  padding: 12,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  const tmp = closure_9();
  let obj = {
    keyboardShouldPersistTaps: "handled",
    alwaysBounceVertical: false,
    contentContainerStyle: tmp.contentContainer,
    children: null,
  };
  obj = { style: tmp.image, source: _modDef6602 };
  const items = [React5(React4, obj), , ,];
  obj = { style: tmp.bodyInner, children: null };
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t["8O+nF7"]);
  const items1 = [React5(Text_Text.Text, obj1)];
  const obj2 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.Zvx0O3, { email: email.email });
  items1[1] = React5(Text_Text.Text, obj2);
  obj.children = items1;
  items[1] = React6(React3, obj);
  const obj3 = { style: tmp.tooltip, variant: "text-sm/normal", children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.yb7itQ);
  items[2] = React5(Text_Text.Text, obj3);
  const obj4 = { text: null, onPress: null, grow: true };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t.BddRzS);
  obj4.onPress = handlePress;
  items[3] = React5(components_Button_Button.Button, obj4);
  obj.children = items;
  return React6(hasOwnProperty, obj);
}
