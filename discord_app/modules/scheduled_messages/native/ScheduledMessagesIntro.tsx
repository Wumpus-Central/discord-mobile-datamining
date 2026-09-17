// === Module 12370: ScheduledMessagesIntro ===

// Module 12370 (ScheduledMessagesIntro)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4636 */;
import AttachmentIcon from "AttachmentIcon" /* 10261 */;
import PlusLargeIcon from "PlusLargeIcon" /* 11109 */;
import CalendarPlusIcon from "CalendarPlusIcon" /* 12360 */;
import _modDef12371 from "module_12371" /* 12371 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4640 */;
import size_mod from "module_2" /* 2 */;

function MenuRow(arg0) {
  ({ icon, label, highlighted } = arg0);
  const tmp = closure_8();
  const items = [tmp.menuRow, ];
  let menuRowHighlighted = null;
  if (highlighted) {
    menuRowHighlighted = tmp.menuRowHighlighted;
  }
  const obj = { style: items, children: null };
  items[1] = menuRowHighlighted;
  const items1 = [timestampProducer(icon, { size: "sm", color: nativeDefault.colors.TEXT_STRONG }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label })];
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { scrollView: { flex: 1 }, pageContainer: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 }, container: { alignItems: "center" }, upsellImage: null, textContainer: null, text: null, demo: null, menu: null, menuRow: null, menuRowHighlighted: null, menuDivider: null, chatInput: null, plusButton: null };
let size = { height: 144, marginBottom: nativeDefault.space.PX_16, width: 180 };
obj.upsellImage = size;
let obj2 = { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingBottom: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_32 };
obj.textContainer = { gap: nativeDefault.space.PX_8 };
obj.text = { textAlign: "center" };
let obj3 = { gap: nativeDefault.space.PX_8 };
obj.demo = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
let obj4 = { alignSelf: "stretch", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.md, borderWidth: 1, gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_24, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj.menu = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
let obj5 = { alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
obj.menuRow = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
let obj6 = { alignItems: "center", flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8 };
obj.menuRowHighlighted = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.menuDivider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
let obj8 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj.chatInput = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, flexDirection: "row", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8 };
const size1 = { alignItems: "center", backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND, borderRadius: nativeDefault.radii.round, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, justifyContent: "center", width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE };
obj.plusButton = size1;
let closure_8 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default function ScheduledMessagesIntro() {
  const tmp = closure_8();
  const obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(React3, { source: _modDef12371, style: tmp.upsellImage }), , ];
  const obj4 = { style: tmp.textContainer, children: null };
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t["C/j9NE"]);
  const items1 = [timestampProducer(Text_Text.Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: null };
  const intl2 = util.intl;
  obj6.children = intl2.format(util.t.PqmI8J, {});
  items1[1] = timestampProducer(Text_Text.Text, obj6);
  obj4.children = items1;
  items[1] = React5(hasOwnProperty, obj4);
  const obj7 = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj8 = { style: tmp.menu, children: null };
  const obj9 = { icon: AttachmentIcon.AttachmentIcon, label: null, highlighted: false };
  const intl3 = util.intl;
  obj9.label = intl3.string(util.t["8Hvr3+"]);
  const items2 = [timestampProducer(MenuRow, obj9), timestampProducer(hasOwnProperty, { style: tmp.menuDivider }), ];
  const obj11 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: null, highlighted: true };
  const intl4 = util.intl;
  obj11.label = intl4.string(util.t["3+ii4F"]);
  items2[2] = timestampProducer(MenuRow, obj11);
  obj8.children = items2;
  const items3 = [React5(hasOwnProperty, obj8), ];
  const obj12 = { style: tmp.chatInput, children: null };
  const obj13 = { style: tmp.plusButton, children: null };
  const obj10 = { style: tmp.menuDivider };
  const obj3 = { source: _modDef12371, style: tmp.upsellImage };
  obj13.children = timestampProducer(PlusLargeIcon.PlusLargeIcon, { size: "xs", color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT });
  const items4 = [timestampProducer(hasOwnProperty, obj13), ];
  const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl5 = util.intl;
  obj15.children = intl5.string(util.t.fxxYiB);
  items4[1] = timestampProducer(Text_Text.Text, obj15);
  obj12.children = items4;
  items3[1] = React5(hasOwnProperty, obj12);
  obj7.children = items3;
  items[2] = React5(hasOwnProperty, obj7);
  obj2.children = items;
  obj.children = React5(hasOwnProperty, obj2);
  return timestampProducer(React4, obj);
};