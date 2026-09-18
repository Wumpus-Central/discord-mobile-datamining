// === Module 7195: ChangeEmailComplete ===

// Module 7195 (ChangeEmailComplete)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import components_Button_Button from "components/Button/Button" /* 5144 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 5791 */;
import _modDef6795 from "module_6795" /* 6795 */;
import noop from "module_19" /* 19 */;

require = fn;
function handlePress() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const resetChangeEmailStore = fn(5793).resetChangeEmailStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4722);
const obj2 = { contentContainer: { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: 20, alignItems: "center" }, image: { height: 190, width: 220, resizeMode: "contain" }, title: { textAlign: "center" }, body: { textAlign: "center" }, bodyInner: { gap: 2 }, tooltip: null };
let obj3 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: 20, alignItems: "center" };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.tooltip = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", padding: 12, borderWidth: 1, borderStyle: "solid", borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  const tmp = closure_9();
  const obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
  const items = [React5(React4, { style: tmp.image, source: _modDef6795 }), , , ];
  const obj3 = { style: tmp.bodyInner, children: null };
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["8O+nF7"]);
  const items1 = [React5(Text_Text.Text, obj4), ];
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
};