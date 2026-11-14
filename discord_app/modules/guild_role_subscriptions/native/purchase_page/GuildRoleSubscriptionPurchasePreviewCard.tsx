// === Module 19385: GuildRoleSubscriptionPurchasePreviewCard ===

// Module 19385 (GuildRoleSubscriptionPurchasePreviewCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import Text_Text from "Text/Text" /* 5929 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17844 */;
import EmojiIconDefault from "EmojiIcon" /* 17858 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 5155 */;

require = fn;
function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const obj = { variant: "body-sm/medium", color: "text-muted", children: null };
  items = [React5(Text_Text.Text, { variant: "body-sm/medium", color: "text-default", children: count }), " ", title];
  obj.children = items;
  return React6(Text_Text.Text, obj);
}
function Separator() {
  return React5(timestampProducer, { style: closure_11().separator });
}
function EmojiGallery(arg0) {
  ({ emojiIds, maxEmojis, guildId: require } = arg0);
  const tmp = closure_11();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  const obj = { style: tmp.emojiGallery, children: null };
  items = [substr.map((id) => React5(EmojiIconDefault, { size: 30, fontSize: 20, guildId, id }, id)), ];
  let tmp5 = diff > 0;
  if (tmp5) {
    const obj2 = { style: tmp.emojiTruncatedContainer, children: null };
    const obj3 = { variant: "body-sm/semibold", color: "text-default", children: null };
    const items1 = ["+", diff];
    obj3.children = items1;
    obj2.children = closure_9(Text_Text.Text, obj3);
    tmp5 = closure_8(closure_6, obj2);
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_9(closure_6, obj);
}
function BenefitShowCase(arg0) {
  ({ title, description } = arg0);
  let tmp3 = title;
  if (typeof title === "string") {
    const obj2 = { variant: "body-md/semibold", color: "text-default", children: title };
    tmp3 = React5(Text_Text.Text, obj2);
  }
  const children = [tmp3, ];
  let tmpResult = null != description;
  if (tmpResult) {
    const obj = { children: null };
    const items1 = [React5(native.Spacer, { size: 2 }), ];
    const obj3 = { variant: "body-sm/medium", color: "interactive-text-default", children: description };
    items1[1] = React5(Text_Text.Text, obj3);
    obj.children = items1;
    tmpResult = React6(refs, obj);
  }
  children[1] = tmpResult;
  return React6(timestampProducer, { children });
}
function ChannelBenefitShowCase(description) {
  const channelId = description.channelId;
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const intl = channelId(1113).intl;
  let title = intl.string(channelId(1113).t.bz1PZX);
  if (null != stateFromStores) {
    const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
    const obj3 = { size: tmp(1187).Icon.Sizes.REFRESH_SMALL_16, source: tmp(8033).getChannelIcon(stateFromStores) };
    const items2 = [closure_8(tmp(1187).Icon, obj3), closure_8(tmp(1187).Spacer, { size: 4 }), ];
    const obj4 = { variant: "body-md/semibold", color: "text-default", children: tmp4 };
    items2[2] = closure_8(tmp(5929).Text, obj4);
    obj2.children = items2;
    title = closure_9(closure_6, obj2);
    const tmpResult = tmp(8033);
  }
  return closure_8(BenefitShowCase, { title, description: description.description });
}
function ShowAllButton(onPress) {
  const tmp = closure_11();
  const obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: null };
  const obj2 = { children: null };
  const obj3 = { variant: "body-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["hub6t/"]);
  items = [React5(Text_Text.Text, obj3), React5(native.Spacer, { size: 3 }), React5(timestampProducer, { style: tmp.showAllButtonUnderline })];
  obj2.children = items;
  obj.children = React6(timestampProducer, obj2);
  return React5(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, header: null, image: null, separator: null, contentContainer: null, emojiGallery: null, emojiTruncatedContainer: null, showAllButton: null, showAllButtonUnderline: null };
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj2.header = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.xl };
obj2.image = size;
const size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
obj2.separator = size1;
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
obj2.emojiGallery = { flexDirection: "row", gap: 18 };
const size2 = { width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: 1 };
obj2.emojiTruncatedContainer = size2;
let obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
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
  const formattedSubscriptionPlan = listingId(19381).useFormattedSubscriptionPlan(listingId);
  const obj6 = listingId(19381);
  const tmp11 = guildId;
  if (str == null) {
    str = "";
  }
  items = [closure_8(guildId(6020), { source: { uri: str }, style: tmp.image }), ];
  const obj10 = { children: null };
  const items1 = [closure_8(listingId(5929).Text, { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: _slicedToArray(obj2.useName(listingId), 1)[0] }), closure_8(listingId(1187).Spacer, { size: 4 }), closure_8(listingId(5929).Text, { variant: "heading-sm/medium", color: "text-default", children: formattedSubscriptionPlan })];
  obj10.children = items1;
  items[1] = closure_9(closure_6, obj10);
  obj8.children = items;
  const items2 = [closure_9(closure_6, obj8), closure_8(listingId(1187).Spacer, { size: 16 }), closure_8(tmp11(19387), { listingId }), ];
  let tmp8Result6 = length > 0 || size > 0 || length2 > 0;
  if (tmp8Result6) {
    const items3 = [closure_8(tmp4(1187).Spacer, { size: 24 }), , ];
    const obj11 = { style: tmp.contentContainer, children: null };
    const obj12 = { separator: closure_8(Separator, {}), children: null };
    let tmp8Result = null;
    if (size > 0) {
      const obj13 = { children: null };
      const obj14 = { title: null, count: null };
      const intl = tmp4(1113).intl;
      obj14.title = intl.string(tmp4(1113).t.ebOU2b);
      obj14.count = size;
      const items4 = [closure_8(ContentHeader, obj14), closure_8(tmp4(1187).Spacer, { size: 8 }), , ];
      const obj15 = { emojiIds: null, guildId: null, maxEmojis: 5 };
      const items5 = [];
      HermesBuiltin.arraySpread(first, 0);
      obj15.emojiIds = items5;
      obj15.guildId = guildId;
      items4[2] = closure_8(EmojiGallery, obj15);
      items4[3] = closure_8(tmp4(1187).Spacer, { size: 4 });
      obj13.children = items4;
      tmp8Result = closure_9(closure_6, obj13);
    }
    const items6 = [tmp8Result, , ];
    let tmp8Result4 = null;
    if (null != first3) {
      const obj16 = { children: null };
      const obj17 = { title: null, count: null };
      const intl2 = tmp4(1113).intl;
      const obj18 = { numChannels: length };
      obj17.title = intl2.formatToPlainString(tmp4(1113).t.y7dUrm, obj18);
      obj17.count = length;
      const items7 = [closure_8(ContentHeader, obj17), closure_8(tmp4(1187).Spacer, { size: 12 }), , ];
      ({ ref_id: obj19.channelId, description: obj19.description } = first3);
      items7[2] = closure_8(ChannelBenefitShowCase, { channelId: null, description: null });
      items7[3] = closure_8(tmp4(1187).Spacer, { size: 6 });
      obj16.children = items7;
      tmp8Result4 = closure_9(closure_6, obj16);
      const obj20 = { channelId: null, description: null };
    }
    items6[1] = tmp8Result4;
    let tmp8Result5 = null;
    if (null != first4) {
      const obj21 = { children: null };
      const obj22 = { title: null, count: null };
      const intl3 = tmp4(1113).intl;
      const obj24 = { numBenefits: length2 };
      obj22.title = intl3.formatToPlainString(tmp4(1113).t.MR7oOF, obj24);
      obj22.count = length2;
      const items8 = [closure_8(ContentHeader, obj22), closure_8(tmp4(1187).Spacer, { size: 12 }), , ];
      ({ name: obj23.title, description: obj23.description } = first4);
      items8[2] = closure_8(BenefitShowCase, { title: null, description: null });
      items8[3] = closure_8(tmp4(1187).Spacer, { size: 6 });
      obj21.children = items8;
      tmp8Result5 = closure_9(closure_6, obj21);
      const obj25 = { title: null, description: null };
    }
    const obj44 = { children: null };
    items6[2] = tmp8Result5;
    obj12.children = items6;
    obj11.children = closure_9(tmp4(17855).SeparatedList, obj12);
    items3[1] = closure_8(closure_6, obj11);
    const obj45 = {
      onPress: function handleShowAllPerks() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequireImpl(19386, dependencyMap.paths), "PurchaseCard:" + listingId, { listingId, guildId });
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