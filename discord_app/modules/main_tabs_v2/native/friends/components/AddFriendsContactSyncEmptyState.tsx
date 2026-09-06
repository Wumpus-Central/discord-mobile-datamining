// === Module 16772: AddFriendsContactSyncEmptyState ===

// Module 16772 (AddFriendsContactSyncEmptyState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12676 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12680 */;
import _modDef12693 from "module_12693" /* 12693 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { content: null, headerImage: null, title: null, subtitle: null, subtitleText: null, trailing: null };
createStyles = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
createStyles.content = createStyles;
let size = { height: 135, width: 216, marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
createStyles.headerImage = size;
createStyles.title = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
let obj1 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
createStyles.subtitle = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
createStyles.subtitleText = { textAlign: "center" };
let obj2 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
createStyles.trailing = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  const tmp = closure_7();
  let obj = { style: tmp.content, children: null };
  obj = { resizeMode: "contain", style: tmp.headerImage, source: _modDef12693 };
  const items = [hasOwnProperty(React4, obj), , , ];
  obj = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["/G+nci"]);
  items[1] = hasOwnProperty(Text_Text.Text, obj);
  const obj1 = { style: tmp.subtitle, children: null };
  const obj2 = { style: tmp.subtitleText, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.format(util.t.OXdOPf, { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink });
  obj1.children = hasOwnProperty(Text_Text.Text, obj2);
  items[2] = hasOwnProperty(React3, obj1);
  const obj4 = { style: tmp.trailing, children: null };
  const obj5 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.QUXSpo);
  obj5.onPress = function onPress() {
    ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj4.children = hasOwnProperty(components_Button_Button.Button, obj5);
  items[3] = hasOwnProperty(React3, obj4);
  obj.children = items;
  return timestampProducer(React3, obj);
};