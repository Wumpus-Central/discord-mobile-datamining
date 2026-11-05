// === Module 18932: GuildRoleSubscriptionPurchaseCard ===

// Module 18932 (GuildRoleSubscriptionPurchaseCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5398 */;
import BottomSheetModal from "BottomSheetModal" /* 5402 */;
import Text_Text from "Text/Text" /* 5763 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17488 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 17498 */;
import Elements from "Elements" /* 18927 */;
import SubscribeButtonDefault from "SubscribeButton" /* 18933 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 }, header: { padding: 16, paddingBottom: 24 }, content: null, headerText: null, headerDot: null, seperator: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
obj2.content = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.headerText = { flexDirection: "row", alignItems: "center" };
let size = { width: 3, height: 3, borderRadius: 1.5, backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginHorizontal: 8 };
obj2.headerDot = size;
let obj4 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.seperator = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx");

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  const tmp = closure_8();
  const obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const formattedSubscriptionPlan = Elements.useFormattedSubscriptionPlan(listingId);
  const obj4 = { scrollable: true, startExpanded: true, children: null };
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.header, children: null };
  const obj7 = { style: tmp.headerText, children: null };
  items = [timestampProducer(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _slicedToArray(obj2.useName(listingId), 1)[0] }), timestampProducer(View, { style: tmp.headerDot }), timestampProducer(Text_Text.Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: formattedSubscriptionPlan })];
  obj7.children = items;
  const items1 = [metroImportDefault(View, obj7), timestampProducer(native.Spacer, { size: 16 }), timestampProducer(Elements.TruncatedText, { variant: "body-sm/normal", color: "text-default", lineClamp: 2, children: _slicedToArray(obj.useDescription(listingId), 1)[0] }), timestampProducer(native.Spacer, { size: 24 }), timestampProducer(SubscribeButtonDefault, { listingId })];
  obj6.children = items1;
  const items2 = [metroImportDefault(View, obj6), timestampProducer(View, { style: tmp.seperator }), ];
  const obj10 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: null, children: null };
  const obj8 = { style: tmp.headerDot };
  const obj9 = { style: tmp.seperator };
  obj10.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  const obj12 = { variant: "body-sm/semibold", color: "text-default", children: null };
  const intl = util.intl;
  obj12.children = intl.string(util.t.UdEvUi);
  const items3 = [timestampProducer(Text_Text.Text, obj12), timestampProducer(native.Spacer, { size: 24 }), timestampProducer(GuildRoleSubscriptionCard.Content, { listingId, guildId: guildId.guildId })];
  obj10.children = items3;
  items2[2] = metroImportDefault(BottomSheetModal.BottomSheetScrollView, obj10);
  obj5.children = items2;
  obj4.children = metroImportDefault(View, obj5);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj4);
};