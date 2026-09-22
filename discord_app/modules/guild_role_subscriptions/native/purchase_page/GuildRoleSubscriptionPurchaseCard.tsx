// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetModal from "../../../../../_runtime/06871_BottomSheetModal.js";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionCard from "../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import Elements from "Elements.tsx";
import SubscribeButtonDefault from "SubscribeButton.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 },
  header: { padding: 16, paddingBottom: 24 },
  content: null,
  headerText: null,
  headerDot: null,
  seperator: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
obj2.content = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.headerText = { flexDirection: "row", alignItems: "center" };
let size = {
  width: 3,
  height: 3,
  borderRadius: 1.5,
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  marginHorizontal: 8,
};
obj2.headerDot = size;
let obj4 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.seperator = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx",
);

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  const typeConsolidationTextTransform =
    useTypeConsolidationTextTransform.useTypeConsolidationTextTransform("PurchaseCard");
  const tmp2 = closure_8();
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const formattedSubscriptionPlan = Elements.useFormattedSubscriptionPlan(listingId);
  const obj5 = { scrollable: true, startExpanded: true, children: null };
  const obj6 = { style: tmp2.container, children: null };
  const obj7 = { style: tmp2.header, children: null };
  const obj8 = { style: tmp2.headerText, children: null };
  const items = [
    timestampProducer(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: _slicedToArray(obj3.useName(listingId), 1)[0],
    }),
    timestampProducer(View, { style: tmp2.headerDot }),
    timestampProducer(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: formattedSubscriptionPlan,
    }),
  ];
  obj8.children = items;
  const items1 = [
    React5(View, obj8),
    timestampProducer(native.Spacer, { size: 16 }),
    timestampProducer(Elements.TruncatedText, {
      variant: "text-sm/normal",
      color: "text-default",
      lineClamp: 2,
      children: _slicedToArray(obj2.useDescription(listingId), 1)[0],
    }),
    timestampProducer(native.Spacer, { size: 24 }),
    timestampProducer(SubscribeButtonDefault, { listingId }),
  ];
  obj7.children = items1;
  const items2 = [React5(View, obj7), timestampProducer(View, { style: tmp2.seperator })];
  const obj11 = { scrollsToTop: false, style: tmp2.content, contentContainerStyle: null, children: null };
  const obj10 = { style: tmp2.seperator };
  const obj9 = { style: tmp2.headerDot };
  obj11.contentContainerStyle = { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom };
  const obj13 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
  const items3 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
  obj13.style = items3;
  const intl = util.intl;
  obj13.children = intl.string(util.t.UdEvUi);
  const items4 = [
    timestampProducer(Text_Text.Text, obj13),
    timestampProducer(native.Spacer, { size: 24 }),
    timestampProducer(GuildRoleSubscriptionCard.Content, { listingId, guildId: guildId.guildId }),
  ];
  obj11.children = items4;
  items2[2] = React5(BottomSheetModal.BottomSheetScrollView, obj11);
  obj6.children = items2;
  obj5.children = React5(View, obj6);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj5);
}
