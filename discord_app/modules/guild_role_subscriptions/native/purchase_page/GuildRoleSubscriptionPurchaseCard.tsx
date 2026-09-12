// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetModal from "../../../../../_runtime/06728_BottomSheetModal.js";
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
fn(4636);
let createStyles = { container: null, header: null, content: null, headerText: null, headerDot: null, seperator: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
createStyles.container = createStyles;
createStyles.header = { padding: 16, paddingBottom: 24 };
createStyles.content = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.headerText = { flexDirection: "row", alignItems: "center" };
let size = {
  width: 3,
  height: 3,
  borderRadius: 1.5,
  backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  marginHorizontal: 8,
};
createStyles.headerDot = size;
let obj1 = { padding: 16, paddingTop: 24, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.seperator = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx",
);

export default function GuildRoleSubscriptionPurchaseCard(guildId) {
  const listingId = guildId.listingId;
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationTextTransform = obj.useTypeConsolidationTextTransform("PurchaseCard");
  const tmp2 = closure_8();
  let obj3 = Elements;
  const formattedSubscriptionPlan = obj3.useFormattedSubscriptionPlan(listingId);
  obj = { scrollable: true, startExpanded: true, children: null };
  obj = { style: tmp2.container, children: null };
  const obj1 = { style: tmp2.header, children: null };
  const obj2 = { style: tmp2.headerText, children: null };
  const items = [
    timestampProducer(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: _slicedToArray(obj2.useName(listingId), 1)[0],
    }),
    ,
  ];
  obj3 = { style: tmp2.headerDot };
  items[1] = timestampProducer(View, obj3);
  items[2] = timestampProducer(Text_Text.Text, {
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    children: formattedSubscriptionPlan,
  });
  obj2.children = items;
  const items1 = [
    React5(View, obj2),
    timestampProducer(native.Spacer, { size: 16 }),
    timestampProducer(Elements.TruncatedText, {
      variant: "text-sm/normal",
      color: "text-default",
      lineClamp: 2,
      children: _slicedToArray(obj1.useDescription(listingId), 1)[0],
    }),
    timestampProducer(native.Spacer, { size: 24 }),
    timestampProducer(SubscribeButtonDefault, { listingId }),
  ];
  obj1.children = items1;
  const items2 = [React5(View, obj1), timestampProducer(View, { style: tmp2.seperator })];
  const obj5 = {
    scrollsToTop: false,
    style: tmp2.content,
    contentContainerStyle: { paddingBottom: 16 + useSafeAreaInsetsDefault().bottom },
    children: null,
  };
  const obj7 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
  const items3 = [{ textTransform: "uppercase" }, typeConsolidationTextTransform];
  obj7.style = items3;
  const intl = util.intl;
  obj7.children = intl.string(util.t.UdEvUi);
  const items4 = [
    timestampProducer(Text_Text.Text, obj7),
    timestampProducer(native.Spacer, { size: 24 }),
    timestampProducer(GuildRoleSubscriptionCard.Content, { listingId, guildId: guildId.guildId }),
  ];
  obj5.children = items4;
  items2[2] = React5(BottomSheetModal.BottomSheetScrollView, obj5);
  obj.children = items2;
  obj.children = React5(View, obj);
  return timestampProducer(Sheet_BottomSheet.BottomSheet, obj);
}
