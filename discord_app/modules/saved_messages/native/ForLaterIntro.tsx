// discord_app/modules/saved_messages/native/ForLaterIntro.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ClockIcon from "../../../design/components/Icon/native/redesign/generated/ClockIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ActionSheetConstants from "../../action_sheet/native/ActionSheetConstants.tsx";
import ChevronSmallRightIcon from "../../../design/components/Icon/native/redesign/generated/ChevronSmallRightIcon.tsx";
import SavedMessagesTypes from "../SavedMessagesTypes.tsx";
import BookmarkIcon from "../../../design/components/Icon/native/redesign/generated/BookmarkIcon.tsx";
import _modDef13293 from "../../../../discord_assets/assets/premium/wumpus-avatar.png.js";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function IntroDemo(isReminder) {
  isReminder = isReminder.isReminder;
  const tmp = closure_8();
  let obj = {
    style: tmp.demo,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  obj = { style: tmp.messages, children: null };
  obj = { source: { uri: _modDef13293 }, style: tmp.avatar };
  const items = [timestampProducer(React3, obj)];
  const obj2 = { style: tmp.messageLines, children: null };
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.cqpybK);
  const items1 = [timestampProducer(Text_Text.Text, obj3), , ,];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t["h+KPxy"]);
  items1[1] = timestampProducer(Text_Text.Text, obj4);
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t["63EVpI"]);
  items1[2] = timestampProducer(Text_Text.Text, obj5);
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl4 = util.intl;
  obj6.children = intl4.string(util.t["KT/TDX"]);
  items1[3] = timestampProducer(Text_Text.Text, obj6);
  obj2.children = items1;
  items[1] = React5(hasOwnProperty, obj2);
  obj.children = items;
  const items2 = [React5(hasOwnProperty, obj)];
  const obj7 = { style: tmp.sheet, children: null };
  const items3 = [timestampProducer(hasOwnProperty, { style: tmp.grabber }), ,];
  const obj9 = { icon: BookmarkIcon.BookmarkIcon, label: null, highlighted: null };
  const intl5 = util.intl;
  obj9.label = intl5.string(util.t.tpxJto);
  obj9.highlighted = !isReminder;
  items3[1] = timestampProducer(SheetRow, obj9);
  const obj10 = { icon: ClockIcon.ClockIcon, label: null, highlighted: null, hasArrow: true };
  const intl6 = util.intl;
  obj10.label = intl6.string(util.t.mJ3P0N);
  obj10.highlighted = isReminder;
  items3[2] = timestampProducer(SheetRow, obj10);
  obj7.children = items3;
  items2[1] = React5(hasOwnProperty, obj7);
  obj.children = items2;
  return React5(hasOwnProperty, obj);
}
function SheetRow(hasArrow) {
  let flag = hasArrow.hasArrow;
  ({ icon, label, highlighted } = hasArrow);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const items = [tmp.sheetRow];
  let sheetRowHighlighted = null;
  if (highlighted) {
    sheetRowHighlighted = tmp.sheetRowHighlighted;
  }
  let obj = { style: items, children: null };
  items[1] = sheetRowHighlighted;
  obj = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const items1 = [timestampProducer(icon, obj), ,];
  obj = { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label };
  items1[1] = timestampProducer(Text_Text.Text, obj);
  let tmp5Result = null;
  if (flag) {
    const obj1 = { size: "sm", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
    tmp5Result = timestampProducer(ChevronSmallRightIcon.ChevronSmallRightIcon, obj1);
  }
  items1[2] = tmp5Result;
  obj.children = items1;
  return React5(hasOwnProperty, obj);
}
({ Image: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ACTION_SHEET_BORDER_RADIUS = ActionSheetConstants.ACTION_SHEET_BORDER_RADIUS;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  scrollView: { flex: 1 },
  pageContainer: null,
  container: null,
  upsellImage: null,
  textContainer: null,
  text: null,
  demo: null,
  messages: null,
  avatar: null,
  messageLines: null,
  sheet: null,
  grabber: null,
  sheetRow: null,
  sheetRowHighlighted: null,
  sheetRowLabel: null,
};
obj = {
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_32,
  paddingBottom: nativeDefault.space.PX_32,
};
obj.pageContainer = obj;
obj.container = { alignItems: "center" };
let size = { width: 180, height: 144, marginBottom: nativeDefault.space.PX_16 };
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
  marginTop: nativeDefault.space.PX_24,
  overflow: "hidden",
};
let obj2 = {
  alignSelf: "stretch",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  marginTop: nativeDefault.space.PX_24,
  overflow: "hidden",
};
obj.messages = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
const size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.round };
obj.avatar = size1;
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12 };
obj.messageLines = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj.sheet = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS,
  borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS,
  marginInline: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
};
const size2 = {
  alignSelf: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.round,
  height: 4,
  marginVertical: nativeDefault.space.PX_8,
  width: 36,
};
obj.grabber = size2;
let obj5 = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS,
  borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS,
  marginInline: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj.sheetRow = {
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
};
let obj6 = {
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_12,
};
obj.sheetRowHighlighted = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj.sheetRowLabel = { flex: 1 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default function ForLaterIntro(type) {
  const tmp = closure_8();
  const tmp4 = type.type === SavedMessagesTypes.SavedMessageSortTypes.REMINDER;
  let obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  obj = { style: tmp.container, children: null };
  obj = { source: importDefault(tmp4 ? 13291 : 13292), style: tmp.upsellImage };
  const items = [timestampProducer(React3, obj), ,];
  const obj1 = { style: tmp.textContainer, children: null };
  const obj2 = {
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    style: tmp.text,
    children: null,
  };
  const intl = util.intl;
  const t = util.t;
  obj2.children = intl.string(tmp4 ? t["5Iw19e"] : t["93WOd1"]);
  const items1 = [timestampProducer(Text_Text.Heading, obj2)];
  const obj3 = {
    variant: "text-sm/medium",
    color: "text-default",
    style: tmp.text,
    includeFontPadding: true,
    children: null,
  };
  const intl2 = util.intl;
  const t2 = util.t;
  const intl3 = util.intl;
  const t3 = util.t;
  obj3.children = intl2.format(tmp4 ? t2.YI4UjI : t2["5TSj/g"], {
    itemName: intl3.string(tmp4 ? t3.mJ3P0N : t3.tpxJto),
  });
  items1[1] = timestampProducer(Text_Text.Text, obj3);
  obj1.children = items1;
  items[1] = React5(hasOwnProperty, obj1);
  items[2] = timestampProducer(IntroDemo, { isReminder: tmp4 });
  obj.children = items;
  obj.children = React5(hasOwnProperty, obj);
  return timestampProducer(React4, obj);
}
