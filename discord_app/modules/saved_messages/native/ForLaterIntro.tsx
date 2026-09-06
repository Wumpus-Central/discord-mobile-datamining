// === Module 13290: IntroDemo ===

// Module 13290 (IntroDemo)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import ClockIcon from "ClockIcon" /* 4523 */;
import Text from "Text" /* 4556 */;
import ACTION_SHEET_START_HEIGHT_RATIO from "ACTION_SHEET_START_HEIGHT_RATIO" /* 7151 */;
import ChevronSmallRightIcon from "ChevronSmallRightIcon" /* 7209 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7860 */;
import BookmarkIcon from "BookmarkIcon" /* 11707 */;
import setDefault from "set" /* 13293 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

function IntroDemo(isReminder) {
  isReminder = isReminder.isReminder;
  const tmp = callback3();
  let obj = { style: tmp.demo, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  obj = { style: tmp.messages, children: null };
  obj = { source: { uri: setDefault }, style: tmp.avatar };
  const items = [callback(closure_3, obj), ];
  const obj2 = { style: tmp.messageLines, children: null };
  const obj3 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj3[2] = intl.string(getSystemLocale.t.cqpybK);
  const items1 = [callback(Text.Text, obj3), , , ];
  const obj4 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj4[2] = intl2.string(getSystemLocale.t["h+KPxy"]);
  items1[1] = callback(Text.Text, obj4);
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl3 = getSystemLocale.intl;
  obj5[2] = intl3.string(getSystemLocale.t["63EVpI"]);
  items1[2] = callback(Text.Text, obj5);
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl4 = getSystemLocale.intl;
  obj6[2] = intl4.string(getSystemLocale.t["KT/TDX"]);
  items1[3] = callback(Text.Text, obj6);
  obj2[1] = items1;
  items[1] = callback2(closure_5, obj2);
  obj[1] = items;
  const items2 = [callback2(closure_5, obj), ];
  const obj7 = { style: tmp.sheet, children: null };
  const items3 = [callback(closure_5, { style: tmp.grabber }), , ];
  const obj9 = { icon: BookmarkIcon.BookmarkIcon, label: null, highlighted: null };
  const intl5 = getSystemLocale.intl;
  obj9[1] = intl5.string(getSystemLocale.t.tpxJto);
  obj9[2] = !isReminder;
  items3[1] = callback(SheetRow, obj9);
  const obj10 = { icon: ClockIcon.ClockIcon, label: null, highlighted: null, hasArrow: true };
  const intl6 = getSystemLocale.intl;
  obj10[1] = intl6.string(getSystemLocale.t.mJ3P0N);
  obj10[2] = isReminder;
  items3[2] = callback(SheetRow, obj10);
  obj7[1] = items3;
  items2[1] = callback2(closure_5, obj7);
  obj[3] = items2;
  return callback2(closure_5, obj);
}
function SheetRow(hasArrow) {
  let flag = hasArrow.hasArrow;
  ({ icon, label, highlighted } = hasArrow);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback3();
  const items = [tmp.sheetRow, ];
  let sheetRowHighlighted = null;
  if (highlighted) {
    sheetRowHighlighted = tmp.sheetRowHighlighted;
  }
  let obj = { style: items, children: null };
  items[1] = sheetRowHighlighted;
  obj = { size: "sm", color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const items1 = [callback(icon, obj), , ];
  obj = { variant: "text-sm/medium", color: "text-default", style: tmp.sheetRowLabel, children: label };
  items1[1] = callback(Text.Text, obj);
  let tmp5Result = null;
  if (flag) {
    obj1 = { size: "sm", color: null };
    obj1[1] = ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT;
    tmp5Result = callback(ChevronSmallRightIcon.ChevronSmallRightIcon, obj1);
  }
  items1[2] = tmp5Result;
  obj[1] = items1;
  return closure_7(closure_5, obj);
}
({ Image: c3, ScrollView: c4, View: c5 } = get_ActivityIndicator);
const ACTION_SHEET_BORDER_RADIUS = ACTION_SHEET_START_HEIGHT_RATIO.ACTION_SHEET_BORDER_RADIUS;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { scrollView: { flex: 1 }, pageContainer: null, container: null, upsellImage: null, textContainer: null, text: null, demo: null, messages: null, avatar: null, messageLines: null, sheet: null, grabber: null, sheetRow: null, sheetRowHighlighted: null, sheetRowLabel: null };
obj = { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_32, paddingBottom: ThemesDefault.space.PX_32 };
obj[1] = obj;
obj[2] = { alignItems: "center" };
obj[3] = { width: 180, height: 144, marginBottom: ThemesDefault.space.PX_16 };
let obj1 = { width: 180, height: 144, marginBottom: ThemesDefault.space.PX_16 };
obj[4] = { gap: ThemesDefault.space.PX_8 };
obj[5] = { textAlign: "center" };
let obj2 = { gap: ThemesDefault.space.PX_8 };
obj[6] = { alignSelf: "stretch", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: ThemesDefault.colors.BORDER_NORMAL, borderRadius: ThemesDefault.radii.md, borderWidth: 1, marginTop: ThemesDefault.space.PX_24, overflow: "hidden" };
let obj3 = { alignSelf: "stretch", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: ThemesDefault.colors.BORDER_NORMAL, borderRadius: ThemesDefault.radii.md, borderWidth: 1, marginTop: ThemesDefault.space.PX_24, overflow: "hidden" };
obj[7] = { flexDirection: "row", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_12 };
let obj4 = { flexDirection: "row", gap: ThemesDefault.space.PX_8, padding: ThemesDefault.space.PX_12 };
obj[8] = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round };
let obj5 = { width: 32, height: 32, borderRadius: ThemesDefault.radii.round };
obj[9] = { flex: 1, gap: ThemesDefault.space.PX_4 };
let obj6 = { flex: 1, gap: ThemesDefault.space.PX_4 };
obj[10] = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_8 };
let obj7 = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, borderTopLeftRadius: ACTION_SHEET_BORDER_RADIUS, borderTopRightRadius: ACTION_SHEET_BORDER_RADIUS, marginInline: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_8 };
obj[11] = { alignSelf: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.round, height: 4, marginVertical: ThemesDefault.space.PX_8, width: 36 };
const obj8 = { alignSelf: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.round, height: 4, marginVertical: ThemesDefault.space.PX_8, width: 36 };
obj[12] = { alignItems: "center", borderRadius: ThemesDefault.radii.sm, flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_12 };
let obj9 = { alignItems: "center", borderRadius: ThemesDefault.radii.sm, flexDirection: "row", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, paddingVertical: ThemesDefault.space.PX_12 };
obj[13] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
obj[14] = { flex: 1 };
let closure_8 = createCacheKey.createStyles(obj);
let obj10 = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
const result = set.fileFinishedImporting("modules/saved_messages/native/ForLaterIntro.tsx");

export default function ForLaterIntro(type) {
  const tmp = callback3();
  const tmp4 = type.type === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER;
  let obj = { style: tmp.scrollView, contentContainerStyle: tmp.pageContainer, children: null };
  obj = { style: tmp.container, children: null };
  obj = { source: importDefault(tmp4 ? 13291 : 13292), style: tmp.upsellImage };
  const items = [closure_6(closure_3, obj), , ];
  obj1 = { style: tmp.textContainer, children: null };
  const obj2 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = tmp2(1114).intl;
  const t = tmp2(1114).t;
  obj2[3] = intl.string(tmp4 ? t["5Iw19e"] : t["93WOd1"]);
  const items1 = [closure_6(Text.Heading, obj2), ];
  const obj3 = { variant: "text-sm/medium", color: "text-default", style: tmp.text, includeFontPadding: true, children: null };
  const intl2 = tmp2(1114).intl;
  const t2 = tmp2(1114).t;
  const intl3 = tmp2(1114).intl;
  const t3 = tmp2(1114).t;
  obj3[4] = intl2.format(tmp4 ? t2.YI4UjI : t2["5TSj/g"], { itemName: intl3.string(tmp4 ? t3.mJ3P0N : t3.tpxJto) });
  items1[1] = closure_6(Text.Text, obj3);
  obj1[1] = items1;
  items[1] = closure_7(closure_5, obj1);
  items[2] = closure_6(IntroDemo, { isReminder: tmp4 });
  obj[1] = items;
  obj[2] = closure_7(closure_5, obj);
  return closure_6(closure_4, obj);
};