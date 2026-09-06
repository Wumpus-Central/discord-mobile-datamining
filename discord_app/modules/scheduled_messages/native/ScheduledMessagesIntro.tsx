// discord_app/modules/scheduled_messages/native/ScheduledMessagesIntro.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AttachmentIcon from "../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import PlusLargeIcon from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import CalendarPlusIcon from "../../../design/components/Icon/native/redesign/generated/CalendarPlusIcon.tsx";
import _modDef12220 from "../../../../_runtime/metro/12220__.js";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function MenuRow(arg0) {
  ({ icon, label, highlighted } = arg0);
  const tmp = closure_8();
  const items = [tmp.menuRow];
  let menuRowHighlighted = null;
  if (highlighted) {
    menuRowHighlighted = tmp.menuRowHighlighted;
  }
  let obj = { style: items, children: null };
  items[1] = menuRowHighlighted;
  obj = { size: "sm", color: nativeDefault.colors.TEXT_STRONG };
  const items1 = [
    timestampProducer(icon, obj),
    timestampProducer(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }),
  ];
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  scrollView: { flex: 1 },
  pageContainer: null,
  container: null,
  upsellImage: null,
  textContainer: null,
  text: null,
  demo: null,
  menu: null,
  menuRow: null,
  menuRowHighlighted: null,
  menuDivider: null,
  chatInput: null,
  plusButton: null,
};
obj = {
  alignItems: "center",
  flexGrow: 1,
  justifyContent: "center",
  paddingBottom: nativeDefault.space.PX_32,
  paddingHorizontal: nativeDefault.space.PX_32,
};
obj.pageContainer = obj;
obj.container = { alignItems: "center" };
let size = { height: 144, marginBottom: nativeDefault.space.PX_16, width: 180 };
obj.upsellImage = size;
obj.textContainer = { gap: nativeDefault.space.PX_8 };
obj.text = { textAlign: "center" };
let obj1 = { gap: nativeDefault.space.PX_8 };
obj.demo = {
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_24,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
let obj2 = {
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_24,
  overflow: "hidden",
  padding: nativeDefault.space.PX_12,
};
obj.menu = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
let obj3 = {
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
obj.menuRow = {
  alignItems: "center",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
};
let obj4 = {
  alignItems: "center",
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_8,
};
obj.menuRowHighlighted = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.menuDivider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
let obj6 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1 };
obj.chatInput = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
};
const size1 = {
  alignItems: "center",
  backgroundColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_BACKGROUND,
  borderRadius: nativeDefault.radii.round,
  height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  justifyContent: "center",
  width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
};
obj.plusButton = size1;
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessagesIntro.tsx");

export default function ScheduledMessagesIntro() {
  const tmp = closure_8();
  let obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  obj = { style: tmp.container, children: null };
  obj = { source: _modDef12220, style: tmp.upsellImage };
  const items = [timestampProducer(React3, obj), ,];
  const obj1 = { style: tmp.textContainer, children: null };
  const obj2 = {
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    style: tmp.text,
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t["C/j9NE"]);
  const items1 = [timestampProducer(Text_Text.Heading, obj2)];
  const obj3 = {
    variant: "text-sm/medium",
    color: "text-default",
    style: tmp.text,
    includeFontPadding: true,
    children: null,
  };
  const intl2 = util.intl;
  obj3.children = intl2.format(util.t.PqmI8J, {});
  items1[1] = timestampProducer(Text_Text.Text, obj3);
  obj1.children = items1;
  items[1] = React5(hasOwnProperty, obj1);
  const obj4 = {
    style: tmp.demo,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const obj5 = { style: tmp.menu, children: null };
  const obj6 = { icon: AttachmentIcon.AttachmentIcon, label: null, highlighted: false };
  const intl3 = util.intl;
  obj6.label = intl3.string(util.t["8Hvr3+"]);
  const items2 = [timestampProducer(MenuRow, obj6), timestampProducer(hasOwnProperty, { style: tmp.menuDivider })];
  const obj8 = { icon: CalendarPlusIcon.CalendarPlusIcon, label: null, highlighted: true };
  const intl4 = util.intl;
  obj8.label = intl4.string(util.t["3+ii4F"]);
  items2[2] = timestampProducer(MenuRow, obj8);
  obj5.children = items2;
  const items3 = [React5(hasOwnProperty, obj5)];
  const obj9 = { style: tmp.chatInput, children: null };
  const obj10 = {
    style: tmp.plusButton,
    children: timestampProducer(PlusLargeIcon.PlusLargeIcon, {
      size: "xs",
      color: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT,
    }),
  };
  const items4 = [timestampProducer(hasOwnProperty, obj10)];
  const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl5 = util.intl;
  obj12.children = intl5.string(util.t.fxxYiB);
  items4[1] = timestampProducer(Text_Text.Text, obj12);
  obj9.children = items4;
  items3[1] = React5(hasOwnProperty, obj9);
  obj4.children = items3;
  items[2] = React5(hasOwnProperty, obj4);
  obj.children = items;
  obj.children = React5(hasOwnProperty, obj);
  return timestampProducer(React4, obj);
}
