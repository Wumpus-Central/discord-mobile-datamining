// === Module 16888: GuildRoleSubscriptionPurchasePreviewCard ===

// Module 16888 (GuildRoleSubscriptionPurchasePreviewCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import Text_Text from "Text/Text" /* 4752 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7219 */;
import LayoutUtils from "LayoutUtils" /* 10604 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15491 */;
import EmojiIconDefault from "EmojiIcon" /* 15504 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

require = fn;
function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const tmp = closure_11();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("PurchasePreviewCard", "text-xs/bold");
  const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: null, children: null };
  const items = [tmp.contentHeader, typeConsolidationEyebrow.style];
  obj2.style = items;
  const items1 = [React6(Text_Text.Text, { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp.contentHeader, children: count }), " ", title];
  obj2.children = items1;
  return React7(Text_Text.Text, obj2);
}
function Separator() {
  return React6(timestampProducer, { style: closure_11().separator });
}
function EmojiGallery(arg0) {
  ({ emojiIds, maxEmojis, guildId: require } = arg0);
  const tmp = closure_11();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  const obj = { style: tmp.emojiGallery, children: null };
  const items = [...substr.map((id) => React6(EmojiIconDefault, { size: 30, fontSize: 20, guildId, id }, id))];
  let tmp3Result = diff > 0;
  if (tmp3Result) {
    const obj2 = { style: tmp.emojiTruncatedContainer, children: null };
    const obj3 = { variant: "text-sm/bold", color: "text-default", children: null };
    const items1 = ["+", diff];
    obj3.children = items1;
    obj2.children = closure_9(Text_Text.Text, obj3);
    tmp3Result = closure_8(closure_6, obj2, "andMore");
  }
  items[tmp7] = tmp3Result;
  obj.children = closure_8(LayoutUtils.GappedList, { gap: 18, children: items });
  return closure_8(closure_6, obj);
}
function BenefitShowCase(arg0) {
  ({ title, description } = arg0);
  let tmp3 = title;
  if (typeof title === "string") {
    const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = React6(Text_Text.Text, obj2);
  }
  const children = [tmp3, ];
  let tmpResult = null != description;
  if (tmpResult) {
    const obj = { children: null };
    const items1 = [React6(native.Spacer, { size: 2 }), ];
    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
    items1[1] = React6(Text_Text.Text, obj3);
    obj.children = items1;
    tmpResult = React7(closure_1_10, obj);
  }
  children[1] = tmpResult;
  return React7(timestampProducer, { children });
}
function ChannelBenefitShowCase(description) {
  const channelId = description.channelId;
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const intl = channelId(1115).intl;
  let title = intl.string(channelId(1115).t.bz1PZX);
  if (null != stateFromStores) {
    const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
    const obj3 = { size: tmp(1177).Icon.Sizes.REFRESH_SMALL_16, source: tmp(5239).getChannelIcon(stateFromStores) };
    const items2 = [closure_8(tmp(1177).Icon, obj3), closure_8(tmp(1177).Spacer, { size: 4 }), ];
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: tmp4 };
    items2[2] = closure_8(tmp(4752).Text, obj4);
    obj2.children = items2;
    title = closure_9(closure_6, obj2);
    const tmpResult = tmp(5239);
  }
  return closure_8(BenefitShowCase, { title, description: description.description });
}
function ShowAllButton(onPress) {
  const tmp = closure_11();
  const obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: null };
  const obj2 = { children: null };
  const obj3 = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["hub6t/"]);
  const items = [React6(Text_Text.Text, obj3), React6(native.Spacer, { size: 3 }), React6(timestampProducer, { style: tmp.showAllButtonUnderline })];
  obj2.children = items;
  obj.children = React7(timestampProducer, obj2);
  return React6(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, header: { flexDirection: "row" }, image: null, separator: null, contentContainer: null, contentHeader: null, emojiGallery: null, emojiTruncatedContainer: null, showAllButton: null, showAllButtonUnderline: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.xl };
obj2.image = size;
const size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
obj2.separator = size1;
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
obj2.contentHeader = { textTransform: "uppercase" };
obj2.emojiGallery = { flexDirection: "row" };
const size2 = { width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: 1 };
obj2.emojiTruncatedContainer = size2;
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
obj2.showAllButton = { paddingVertical: 16, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
const rect = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.showAllButtonUnderline = rect;
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx");

export default function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  const tmp = closure_11();
  let str = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(listingId), 1)[0];
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useTierEmojiIds(listingId, guildId), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useChannelBenefits(listingId), 1)[0];
  const first2 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useIntangibleBenefits(listingId), 1)[0];
  const first3 = first1[0];
  const first4 = first2[0];
  const size = first.size;
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.header, children: null };
  const formattedSubscriptionPlan = listingId(16884).useFormattedSubscriptionPlan(listingId);
  const obj6 = listingId(16884);
  const tmp11 = guildId;
  if (str == null) {
    str = "";
  }
  const items = [closure_8(guildId(5799), { source: { uri: str }, style: tmp.image }), closure_8(listingId(1177).Spacer, { size: 16 }), ];
  const obj10 = { children: null };
  const items1 = [closure_8(listingId(4752).Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: _slicedToArray(obj2.useName(listingId), 1)[0] }), closure_8(listingId(1177).Spacer, { size: 4 }), closure_8(listingId(4752).Text, { variant: "heading-md/medium", color: "text-default", children: formattedSubscriptionPlan })];
  obj10.children = items1;
  items[2] = closure_9(closure_6, obj10);
  obj8.children = items;
  const items2 = [closure_9(closure_6, obj8), closure_8(listingId(1177).Spacer, { size: 16 }), closure_8(tmp11(16890), { listingId }), ];
  let tmp8Result6 = length > 0 || size > 0 || length2 > 0;
  if (tmp8Result6) {
    const items3 = [closure_8(tmp4(1177).Spacer, { size: 24 }), , ];
    const obj11 = { style: tmp.contentContainer, children: null };
    const obj12 = {
      renderGap() {
          return closure_1_8(Separator, {});
        },
      children: null
    };
    let tmp8Result = null;
    if (size > 0) {
      const obj13 = { children: null };
      const obj14 = { title: null, count: null };
      const intl = tmp4(1115).intl;
      obj14.title = intl.string(tmp4(1115).t.ebOU2b);
      obj14.count = size;
      const items4 = [closure_8(ContentHeader, obj14), closure_8(tmp4(1177).Spacer, { size: 8 }), , ];
      const obj15 = { emojiIds: null, guildId: null, maxEmojis: 5 };
      const items5 = [];
      HermesBuiltin.arraySpread(first, 0);
      obj15.emojiIds = items5;
      obj15.guildId = guildId;
      items4[2] = closure_8(EmojiGallery, obj15);
      items4[3] = closure_8(tmp4(1177).Spacer, { size: 4 });
      obj13.children = items4;
      tmp8Result = closure_9(closure_6, obj13);
    }
    const items6 = [tmp8Result, , ];
    let tmp8Result4 = null;
    if (null != first3) {
      const obj16 = { children: null };
      const obj17 = { title: null, count: null };
      const intl2 = tmp4(1115).intl;
      const obj18 = { numChannels: length };
      obj17.title = intl2.formatToPlainString(tmp4(1115).t.y7dUrm, obj18);
      obj17.count = length;
      const items7 = [closure_8(ContentHeader, obj17), closure_8(tmp4(1177).Spacer, { size: 12 }), , ];
      ({ ref_id: obj19.channelId, description: obj19.description } = first3);
      items7[2] = closure_8(ChannelBenefitShowCase, { channelId: null, description: null });
      items7[3] = closure_8(tmp4(1177).Spacer, { size: 6 });
      obj16.children = items7;
      tmp8Result4 = closure_9(closure_6, obj16);
      const obj20 = { channelId: null, description: null };
    }
    items6[1] = tmp8Result4;
    let tmp8Result5 = null;
    if (null != first4) {
      const obj21 = { children: null };
      const obj22 = { title: null, count: null };
      const intl3 = tmp4(1115).intl;
      const obj24 = { numBenefits: length2 };
      obj22.title = intl3.formatToPlainString(tmp4(1115).t.MR7oOF, obj24);
      obj22.count = length2;
      const items8 = [closure_8(ContentHeader, obj22), closure_8(tmp4(1177).Spacer, { size: 12 }), , ];
      ({ name: obj23.title, description: obj23.description } = first4);
      items8[2] = closure_8(BenefitShowCase, { title: null, description: null });
      items8[3] = closure_8(tmp4(1177).Spacer, { size: 6 });
      obj21.children = items8;
      tmp8Result5 = closure_9(closure_6, obj21);
      const obj25 = { title: null, description: null };
    }
    const obj44 = { children: null };
    items6[2] = tmp8Result5;
    obj12.children = items6;
    obj11.children = closure_9(tmp4(10604).GappedList, obj12);
    items3[1] = closure_8(closure_6, obj11);
    const obj45 = {
      onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(16889, dependencyMap.paths), "PurchaseCard:" + listingId, { listingId, guildId });
        }
    };
    items3[2] = closure_8(ShowAllButton, obj45);
    obj44.children = items3;
    tmp8Result6 = closure_9(closure_10, obj44);
  }
  items2[3] = tmp8Result6;
  obj7.children = items2;
  return closure_9(closure_6, obj7);
};