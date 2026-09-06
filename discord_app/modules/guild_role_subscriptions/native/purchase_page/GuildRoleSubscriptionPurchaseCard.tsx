// === Module 16546: GuildRoleSubscriptionPurchaseCard ===

// Module 16546 (GuildRoleSubscriptionPurchaseCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7150 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 15237 */;
import Elements from "Elements" /* 16541 */;
import SubscribeButtonDefault from "SubscribeButton" /* 16547 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, content: null, headerText: null, headerDot: null, seperator: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createStyles.container = createStyles;
createStyles.header = { padding: 16, paddingBottom: 24 };
createStyles.content = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.headerText = { flexDirection: "row", alignItems: "center" };
let size = { width: 3, height: 3, borderRadius: 1.5, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginHorizontal: 8 };
createStyles.headerDot = size;
let obj1 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.seperator = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx");

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  const tmp = closure_8();
  let obj2 = Elements;
  const formattedSubscriptionPlan = obj2.useFormattedSubscriptionPlan(listingId);
  let obj = { scrollable: true, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  const obj1 = { style: tmp.header, children: null };
  obj2 = { style: tmp.headerText, children: null };
  const items = [timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: _slicedToArray(obj1.useName(listingId), 1)[0] }), timestampProducer(View, { style: tmp.headerDot }), timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: formattedSubscriptionPlan })];
  obj2.children = items;
  const items1 = [React5(View, obj2), timestampProducer(native.Spacer, { size: 16 }), timestampProducer(Elements.TruncatedText, { variant: "text-sm/normal", color: "text-default", lineClamp: 2, children: _slicedToArray(obj.useDescription(listingId), 1)[0] }), timestampProducer(native.Spacer, { size: 24 }), timestampProducer(SubscribeButtonDefault, { listingId })];
  obj1.children = items1;
  const items2 = [React5(View, obj1), timestampProducer(View, { style: tmp.seperator }), ];
  const obj5 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom }, children: null };
  const obj7 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl = util.intl;
  obj7.children = intl.string(util.t.UdEvUi);
  const items3 = [timestampProducer(Text_Text.Text, obj7), timestampProducer(native.Spacer, { size: 24 }), timestampProducer(GuildRoleSubscriptionCard.Content, { listingId, guildId: guildId.guildId })];
  obj5.children = items3;
  items2[2] = React5(BottomSheetModal.BottomSheetScrollView, obj5);
  obj.children = items2;
  obj.children = React5(View, obj);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
};