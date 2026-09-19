// === Module 17228: AddFriendsContactSyncEmptyState ===

// Module 17228 (AddFriendsContactSyncEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import components_Button_Button from "components/Button/Button" /* 5186 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12927 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12931 */;
import _modDef12944 from "module_12944" /* 12944 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4756);
let obj2 = { content: { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg }, headerImage: null, title: null, subtitle: null, subtitleText: null, trailing: null };
let size = { height: 135, width: 216, marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj2.headerImage = size;
let obj3 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj2.title = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.subtitleText = { textAlign: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.trailing = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  const tmp = closure_7();
  const obj = { style: tmp.content, children: null };
  const items = [hasOwnProperty(React4, { resizeMode: "contain", style: tmp.headerImage, source: _modDef12944 }), , , ];
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["/G+nci"]);
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.subtitle, children: null };
  const obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  const obj2 = { resizeMode: "contain", style: tmp.headerImage, source: _modDef12944 };
  obj5.children = intl2.format(util.t.OXdOPf, { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink });
  obj4.children = hasOwnProperty(Text_Text.Text, obj5);
  items[2] = hasOwnProperty(React3, obj4);
  const obj7 = { style: tmp.trailing, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(util.t.QUXSpo);
  obj8.onPress = function onPress() {
    ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj7.children = hasOwnProperty(components_Button_Button.Button, obj8);
  items[3] = hasOwnProperty(React3, obj7);
  obj.children = items;
  return timestampProducer(React3, obj);
};