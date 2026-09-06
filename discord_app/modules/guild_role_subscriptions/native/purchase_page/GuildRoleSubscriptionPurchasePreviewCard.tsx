// === Module 16545: GuildRoleSubscriptionPurchasePreviewCard ===

// Module 16545 (GuildRoleSubscriptionPurchasePreviewCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import LayoutUtils from "LayoutUtils" /* 10346 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import EmojiIconDefault from "EmojiIcon" /* 15240 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const tmp = closure_11();
  let obj = { variant: "text-xs/bold", color: "text-muted", style: tmp.contentHeader, children: null };
  obj = { variant: "text-xs/bold", color: "text-default", style: tmp.contentHeader, children: count };
  const items = [React6(Text_Text.Text, obj), " ", title];
  obj.children = items;
  return React7(Text_Text.Text, obj);
}
function Separator() {
  return React6(timestampProducer, { style: closure_11().separator });
}
function EmojiGallery(arg0) {
  ({ emojiIds, maxEmojis, guildId: require } = arg0);
  const tmp = closure_11();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  let obj = { style: tmp.emojiGallery, children: null };
  const items = [...substr.map((id) => React6(EmojiIconDefault, { size: 30, fontSize: 20, guildId, id }, id))];
  let tmp3Result = diff > 0;
  if (tmp3Result) {
    obj = { style: tmp.emojiTruncatedContainer, children: null };
    obj = { variant: "text-sm/bold", color: "text-default", children: null };
    const items1 = ["+", diff];
    obj.children = items1;
    obj.children = closure_9(Text_Text.Text, obj);
    tmp3Result = closure_8(closure_6, obj, "andMore");
  }
  items[tmp7] = tmp3Result;
  obj.children = closure_8(LayoutUtils.GappedList, { gap: 18, children: items });
  return closure_8(closure_6, obj);
}
function BenefitShowCase(arg0) {
  ({ title, description } = arg0);
  let tmp3 = title;
  if (typeof title === "string") {
    let obj = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = React6(Text_Text.Text, obj);
  }
  const children = [tmp3, ];
  let tmpResult = null != description;
  if (tmpResult) {
    obj = { children: null };
    const items1 = [React6(native.Spacer, { size: 2 }), ];
    obj = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
    items1[1] = React6(Text_Text.Text, obj);
    obj.children = items1;
    tmpResult = React7(closure_1_10, obj);
  }
  children[1] = tmpResult;
  return React7(timestampProducer, { children });
}
function ChannelBenefitShowCase(description) {
  const channelId = description.channelId;
  let obj = channelId(504);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const intl = channelId(1114).intl;
  let title = intl.string(channelId(1114).t.bz1PZX);
  if (null != stateFromStores) {
    obj = { style: { flexDirection: "row", alignItems: "center" }, children: null };
    obj = { size: tmp(1178).Icon.Sizes.REFRESH_SMALL_16, source: tmp(5028).getChannelIcon(stateFromStores) };
    const items2 = [closure_8(tmp(1178).Icon, obj), closure_8(tmp(1178).Spacer, { size: 4 }), ];
    const obj1 = { variant: "text-md/semibold", color: "text-default", children: tmp4 };
    items2[2] = closure_8(tmp(4556).Text, obj1);
    obj.children = items2;
    title = closure_9(closure_6, obj);
    const tmpResult = tmp(5028);
  }
  return closure_8(BenefitShowCase, { title, description: description.description });
}
function ShowAllButton(onPress) {
  const tmp = closure_11();
  let obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: null };
  obj = { children: null };
  obj = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["hub6t/"]);
  const items = [React6(Text_Text.Text, obj), React6(native.Spacer, { size: 3 }), React6(timestampProducer, { style: tmp.showAllButtonUnderline })];
  obj.children = items;
  obj.children = React7(timestampProducer, obj);
  return React6(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, header: null, image: null, separator: null, contentContainer: null, contentHeader: null, emojiGallery: null, emojiTruncatedContainer: null, showAllButton: null, showAllButtonUnderline: null };
createStyles = { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles.container = createStyles;
createStyles.header = { flexDirection: "row" };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.xl };
createStyles.image = size;
const size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
createStyles.separator = size1;
createStyles.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
createStyles.contentHeader = { textTransform: "uppercase" };
createStyles.emojiGallery = { flexDirection: "row" };
const size2 = { width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: 1 };
createStyles.emojiTruncatedContainer = size2;
let obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16 };
createStyles.showAllButton = { paddingVertical: 16, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm };
const rect = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.showAllButtonUnderline = rect;
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx");

export default function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  const tmp = closure_11();
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  let str = _slicedToArray(obj.useImage(listingId), 1)[0];
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useChannelBenefits(listingId), 1)[0];
  let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useIntangibleBenefits(listingId), 1)[0];
  let obj5 = listingId(16541);
  const first3 = first1[0];
  const first4 = first2[0];
  const size = first.size;
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  const formattedSubscriptionPlan = obj5.useFormattedSubscriptionPlan(listingId);
  if (str == null) {
    str = "";
  }
  obj1 = { source: { uri: str }, style: tmp.image };
  const items = [closure_8(guildId(5587), obj1), closure_8(listingId(1178).Spacer, { size: 16 }), ];
  obj2 = { children: null };
  const items1 = [closure_8(listingId(4556).Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: _slicedToArray(obj1.useName(listingId), 1)[0] }), closure_8(listingId(1178).Spacer, { size: 4 }), closure_8(listingId(4556).Text, { variant: "heading-md/medium", color: "text-default", children: formattedSubscriptionPlan })];
  obj2.children = items1;
  items[2] = closure_9(closure_6, obj2);
  obj.children = items;
  const items2 = [closure_9(closure_6, obj), closure_8(listingId(1178).Spacer, { size: 16 }), closure_8(guildId(16547), { listingId }), ];
  let tmp8Result2 = length > 0 || size > 0 || length2 > 0;
  if (tmp8Result2) {
    const items3 = [closure_8(tmp4(1178).Spacer, { size: 24 }), , ];
    obj3 = { style: tmp.contentContainer, children: null };
    obj4 = {
      renderGap() {
          return closure_1_8(Separator, {});
        },
      children: null
    };
    let tmp8Result = null;
    if (size > 0) {
      obj5 = { children: null };
      const obj6 = { title: null, count: null };
      const intl = tmp4(1114).intl;
      obj6.title = intl.string(tmp4(1114).t.ebOU2b);
      obj6.count = size;
      const items4 = [closure_8(ContentHeader, obj6), closure_8(tmp4(1178).Spacer, { size: 8 }), , ];
      const obj7 = { emojiIds: null, guildId: null, maxEmojis: 5 };
      const items5 = [];
      HermesBuiltin.arraySpread(first, 0);
      obj7.emojiIds = items5;
      obj7.guildId = guildId;
      items4[2] = closure_8(EmojiGallery, obj7);
      items4[3] = closure_8(tmp4(1178).Spacer, { size: 4 });
      obj5.children = items4;
      tmp8Result = closure_9(closure_6, obj5);
    }
    const items6 = [tmp8Result, , ];
    tmp8Result = null;
    if (null != first3) {
      const obj8 = { children: null };
      const obj9 = { title: null, count: null };
      const intl2 = tmp4(1114).intl;
      const obj10 = { numChannels: length };
      obj9.title = intl2.formatToPlainString(tmp4(1114).t.y7dUrm, obj10);
      obj9.count = length;
      const items7 = [closure_8(ContentHeader, obj9), closure_8(tmp4(1178).Spacer, { size: 12 }), , ];
      ({ ref_id: obj19.channelId, description: obj19.description } = first3);
      items7[2] = closure_8(ChannelBenefitShowCase, { channelId: null, description: null });
      items7[3] = closure_8(tmp4(1178).Spacer, { size: 6 });
      obj8.children = items7;
      tmp8Result = closure_9(closure_6, obj8);
      const obj11 = { channelId: null, description: null };
    }
    items6[1] = tmp8Result;
    let tmp8Result1 = null;
    if (null != first4) {
      const obj12 = { children: null };
      const obj13 = { title: null, count: null };
      const intl3 = tmp4(1114).intl;
      const obj14 = { numBenefits: length2 };
      obj13.title = intl3.formatToPlainString(tmp4(1114).t.MR7oOF, obj14);
      obj13.count = length2;
      const items8 = [closure_8(ContentHeader, obj13), closure_8(tmp4(1178).Spacer, { size: 12 }), , ];
      ({ name: obj23.title, description: obj23.description } = first4);
      items8[2] = closure_8(BenefitShowCase, { title: null, description: null });
      items8[3] = closure_8(tmp4(1178).Spacer, { size: 6 });
      obj12.children = items8;
      tmp8Result1 = closure_9(closure_6, obj12);
      const obj15 = { title: null, description: null };
    }
    const obj16 = { children: null };
    items6[2] = tmp8Result1;
    obj4.children = items6;
    obj3.children = closure_9(tmp4(10346).GappedList, obj4);
    items3[1] = closure_8(closure_6, obj3);
    const obj17 = {
      onPress() {
          const obj = { listingId, guildId };
          obj.openLazy(asyncRequireImpl(16546, dependencyMap.paths), "PurchaseCard:" + listingId, obj);
        }
    };
    items3[2] = closure_8(ShowAllButton, obj17);
    obj16.children = items3;
    tmp8Result2 = closure_9(closure_10, obj16);
  }
  items2[3] = tmp8Result2;
  obj.children = items2;
  return closure_9(closure_6, obj);
};