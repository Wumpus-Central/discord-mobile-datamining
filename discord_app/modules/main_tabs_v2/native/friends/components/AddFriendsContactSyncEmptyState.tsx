// === Module 18839: AddFriendsContactSyncEmptyState ===

// Module 18839 (AddFriendsContactSyncEmptyState)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 14232 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14236 */;
import CompassSpotIllustration from "CompassSpotIllustration" /* 18840 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { content: { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg }, headerIllustration: null, title: null, subtitle: null, subtitleText: null, trailing: null };
let obj3 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj2.headerIllustration = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.subtitleText = { textAlign: "center" };
const obj6 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.trailing = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  const tmp = closure_5();
  const obj = { style: tmp.content, children: null };
  const items = [React3(View, { style: tmp.headerIllustration, children: React3(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false }) }), , , ];
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["/G+nci"]);
  items[1] = React3(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.subtitle, children: null };
  const obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  const obj2 = { style: tmp.headerIllustration, children: React3(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false }) };
  obj5.children = intl2.format(util.t.OXdOPf, { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink });
  obj4.children = React3(Text_Text.Text, obj5);
  items[2] = React3(View, obj4);
  const obj7 = { style: tmp.trailing, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(util.t.QUXSpo);
  obj8.onPress = function handleNext() {
    ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj7.children = React3(components_Button_Button.Button, obj8);
  items[3] = React3(View, obj7);
  obj.children = items;
  return React4(View, obj);
};