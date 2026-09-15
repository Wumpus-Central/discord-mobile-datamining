// discord_app/modules/verification/native/components/ChangeEmailComplete.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import _modDef6707 from "../../../../../_runtime/metro/06707__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function handlePress() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const resetChangeEmailStore = fn(5708).resetChangeEmailStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
const obj2 = {
  contentContainer: {
    flexGrow: 2,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
    gap: 20,
    alignItems: "center",
  },
  image: { height: 190, width: 220, resizeMode: "contain" },
  title: { textAlign: "center" },
  body: { textAlign: "center" },
  bodyInner: { gap: 2 },
  tooltip: null,
};
let obj3 = {
  flexGrow: 2,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  gap: 20,
  alignItems: "center",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.tooltip = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: "100%",
  padding: 12,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  const tmp = closure_9();
  const obj = {
    keyboardShouldPersistTaps: "handled",
    alwaysBounceVertical: false,
    contentContainerStyle: tmp.contentContainer,
    children: null,
  };
  const items = [React5(React4, { style: tmp.image, source: _modDef6707 }), , ,];
  const obj3 = { style: tmp.bodyInner, children: null };
  const obj4 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t["8O+nF7"]);
  const items1 = [React5(Text_Text.Text, obj4)];
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.format(util.t.Zvx0O3, { email: email.email });
  items1[1] = React5(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = React6(React3, obj3);
  const obj6 = { style: tmp.tooltip, variant: "text-sm/normal", children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(util.t.yb7itQ);
  items[2] = React5(Text_Text.Text, obj6);
  const obj7 = { text: null, onPress: null, grow: true };
  const intl4 = util.intl;
  obj7.text = intl4.string(util.t.BddRzS);
  obj7.onPress = handlePress;
  items[3] = React5(components_Button_Button.Button, obj7);
  obj.children = items;
  return React6(hasOwnProperty, obj);
}
