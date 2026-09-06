// === Module 12189: GroupDMNitroCapInfoActionSheet ===

// Module 12189 (GroupDMNitroCapInfoActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const number = fn(11593).MAX_GROUP_DM_NITRO_PARTICIPANTS;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, body: null, button: null };
createStyles = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.title = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let obj1 = { marginTop: nativeDefault.space.PX_8, textAlign: "center" };
createStyles.body = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
const obj2 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
createStyles.button = { width: "100%", marginTop: nativeDefault.space.PX_24 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/GroupDMNitroCapInfoActionSheet.tsx");

export default function GroupDMNitroCapInfoActionSheet() {
  const tmp = closure_8();
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, []);
  let obj = { showGradient: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.u1ilug);
  const items = [timestampProducer(Text_Text.Text, obj), , ];
  const obj1 = { style: tmp.body, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj1.children = intl2.formatToPlainString(util.t["mr27w/"], { number });
  items[1] = timestampProducer(Text_Text.Text, obj1);
  const obj3 = { style: tmp.button, children: null };
  const obj4 = { text: null, variant: "secondary", onPress: null, grow: true };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.cpT0Cq);
  obj4.onPress = callback;
  obj3.children = timestampProducer(components_Button_Button.Button, obj4);
  items[2] = timestampProducer(View, obj3);
  obj.children = items;
  obj.children = React5(View, obj);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};