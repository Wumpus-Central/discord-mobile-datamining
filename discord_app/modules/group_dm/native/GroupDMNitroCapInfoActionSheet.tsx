// === Module 12319: GroupDMNitroCapInfoActionSheet ===

// Module 12319 (GroupDMNitroCapInfoActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import Text_Text from "Text/Text" /* 4632 */;
import components_Button_Button from "components/Button/Button" /* 5056 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7253 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const number = fn(11723).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, title: null, body: null, button: null };
let obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.title = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
obj2.body = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
const obj5 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
obj2.button = { width: "100%", marginTop: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapInfoActionSheet.tsx");

export default function GroupDMNitroCapInfoActionSheet() {
  const tmp = closure_8();
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  const obj = { showGradient: true, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.u1ilug);
  const items = [timestampProducer(Text_Text.Text, obj3), , ];
  const obj4 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.formatToPlainString(util.t["mr27w/"], { number });
  items[1] = timestampProducer(Text_Text.Text, obj4);
  const obj6 = { style: tmp.button, children: null };
  const obj7 = { text: null, variant: "secondary", onPress: null, grow: true };
  const intl3 = util.intl;
  obj7.text = intl3.string(util.t.cpT0Cq);
  obj7.onPress = callback;
  obj6.children = timestampProducer(components_Button_Button.Button, obj7);
  items[2] = timestampProducer(View, obj6);
  obj2.children = items;
  obj.children = React5(View, obj2);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};