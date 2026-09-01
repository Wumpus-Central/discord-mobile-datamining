// discord_app/modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import GappedList from "../components/LayoutUtils.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/ChannelStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const tmp = callback4();
  let obj = { variant: "text-xs/bold", color: "text-muted", style: tmp.contentHeader, children: null };
  obj = { variant: "text-xs/bold", color: "text-default", style: tmp.contentHeader, children: count };
  const items = [callback2(Text.Text, obj), " ", title];
  obj[3] = items;
  return callback3(Text.Text, obj);
}
function Separator() {
  return callback2(closure_6, { style: callback4().separator });
}
function EmojiGallery(arg0) {
  ({ emojiIds, maxEmojis, guildId: require } = arg0);
  const tmp = callback4();
  const substr = emojiIds.slice(0, maxEmojis);
  const diff = emojiIds.length - maxEmojis;
  let obj = { style: tmp.emojiGallery, children: null };
  const items = [
    ...substr.map((id) =>
      closure_1_8(closure_1_1(closure_1_3[12]), { size: 30, fontSize: 20, guildId: closure_0, id }, id),
    ),
  ];
  let tmp3Result = diff > 0;
  if (tmp3Result) {
    obj = { style: null, children: null };
    obj[0] = tmp.emojiTruncatedContainer;
    obj = { variant: "text-sm/bold", color: "text-default", children: null };
    const items1 = ["+", diff];
    obj[2] = items1;
    obj[1] = callback3(Text.Text, obj);
    tmp3Result = tmp3(tmp4, obj, "andMore");
  }
  items[tmp7] = tmp3Result;
  obj[1] = closure_8(GappedList.GappedList, { gap: 18, children: items });
  return closure_8(closure_6, obj);
}
function BenefitShowCase(arg0) {
  ({ title, description } = arg0);
  let tmp3 = title;
  if (typeof title === "string") {
    let obj = { variant: "text-md/semibold", color: "text-default", children: null };
    obj[2] = title;
    tmp3 = callback2(Text.Text, obj);
  }
  const children = [tmp3];
  let tmpResult = null != description;
  if (tmpResult) {
    obj = { children: null };
    const items1 = [callback2(Button.Spacer, { size: 2 })];
    obj = { variant: "text-sm/medium", color: "interactive-text-default", children: null };
    obj[2] = description;
    items1[1] = callback2(Text.Text, obj);
    obj[0] = items1;
    tmpResult = tmp(closure_10, obj);
  }
  children[1] = tmpResult;
  return closure_9(closure_6, { children });
}
function ChannelBenefitShowCase(description) {
  const channelId = description.channelId;
  let obj = channelId(589);
  const items = [closure_7];
  const items1 = [channelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(channelId), items1);
  const intl = channelId(1236).intl;
  let title = intl.string(channelId(1236).t.bz1PZX);
  if (null != stateFromStores) {
    obj = { style: null, children: null };
    obj[0] = { flexDirection: "row", alignItems: "center" };
    obj = { size: null, source: null };
    obj[0] = tmp(1297).Icon.Sizes.REFRESH_SMALL_16;
    obj[1] = tmp(4981).getChannelIcon(stateFromStores);
    const items2 = [callback2(tmp(1297).Icon, obj), callback2(tmp(1297).Spacer, { size: 4 })];
    obj1 = { variant: "text-md/semibold", color: "text-default", children: null };
    obj1[2] = tmp4;
    items2[2] = callback2(tmp(4474).Text, obj1);
    obj[1] = items2;
    title = callback3(closure_6, obj);
    const tmpResult = tmp(4981);
  }
  return callback2(BenefitShowCase, { title, description: description.description });
}
function ShowAllButton(onPress) {
  const tmp = callback4();
  let obj = { onPress: onPress.onPress, style: tmp.showAllButton, activeOpacity: 0.5, children: null };
  obj = { children: null };
  obj = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["hub6t/"]);
  const items = [
    callback2(Text.Text, obj),
    callback2(Button.Spacer, { size: 3 }),
    callback2(closure_6, { style: tmp.showAllButtonUnderline }),
  ];
  obj[0] = items;
  obj[3] = callback3(closure_6, obj);
  return callback2(closure_5, obj);
}
noopAll;
({ TouchableOpacity: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
createCacheKey = {
  container: null,
  header: null,
  image: null,
  separator: null,
  contentContainer: null,
  contentHeader: null,
  emojiGallery: null,
  emojiTruncatedContainer: null,
  showAllButton: null,
  showAllButtonUnderline: null,
};
createCacheKey = {
  padding: 16,
  borderRadius: ThemesDefault.radii.md,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row" };
createCacheKey[2] = { width: 48, height: 48, borderRadius: ThemesDefault.radii.xl };
let obj1 = { width: 48, height: 48, borderRadius: ThemesDefault.radii.xl };
createCacheKey[3] = {
  width: "100%",
  height: 1,
  backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 16,
};
let obj2 = {
  width: "100%",
  height: 1,
  backgroundColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 16,
};
createCacheKey[4] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: ThemesDefault.radii.sm,
  borderTopLeftRadius: ThemesDefault.radii.sm,
  padding: 16,
};
createCacheKey[5] = { textTransform: "uppercase" };
createCacheKey[6] = { flexDirection: "row" };
let obj3 = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: ThemesDefault.radii.sm,
  borderTopLeftRadius: ThemesDefault.radii.sm,
  padding: 16,
};
createCacheKey[7] = {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.xs,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  paddingTop: 1,
};
let obj4 = {
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: ThemesDefault.radii.xs,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  paddingTop: 1,
};
createCacheKey[8] = {
  paddingVertical: 16,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: ThemesDefault.radii.sm,
  borderBottomRightRadius: ThemesDefault.radii.sm,
};
let obj5 = {
  paddingVertical: 16,
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: ThemesDefault.radii.sm,
  borderBottomRightRadius: ThemesDefault.radii.sm,
};
createCacheKey[9] = {
  position: "absolute",
  left: 0,
  right: 0,
  height: 1,
  bottom: 0,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj6 = {
  position: "absolute",
  left: 0,
  right: 0,
  height: 1,
  bottom: 0,
  backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED,
};
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchasePreviewCard.tsx",
);

export default function GuildRoleSubscriptionPurchasePreviewCard(listingId) {
  listingId = listingId.listingId;
  const guildId = listingId.guildId;
  const tmp = callback4();
  let obj = getRoleEmojisAll;
  let str = callback(obj.useImage(listingId), 1)[0];
  obj1 = getRoleEmojisAll;
  let obj2 = getRoleEmojisAll;
  const first = callback(obj2.useTierEmojiIds(listingId, guildId), 1)[0];
  let obj3 = getRoleEmojisAll;
  const first1 = callback(obj3.useChannelBenefits(listingId), 1)[0];
  let obj4 = getRoleEmojisAll;
  const first2 = callback(obj4.useIntangibleBenefits(listingId), 1)[0];
  let obj5 = listingId(16129);
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
  const items = [closure_8(guildId(5493), obj1), closure_8(listingId(1297).Spacer, { size: 16 })];
  obj2 = { children: null };
  const items1 = [
    closure_8(listingId(4474).Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: callback(obj1.useName(listingId), 1)[0],
    }),
    closure_8(listingId(1297).Spacer, { size: 4 }),
    closure_8(listingId(4474).Text, {
      variant: "heading-md/medium",
      color: "text-default",
      children: formattedSubscriptionPlan,
    }),
  ];
  obj2[0] = items1;
  items[2] = closure_9(closure_6, obj2);
  obj[1] = items;
  const items2 = [
    closure_9(closure_6, obj),
    closure_8(listingId(1297).Spacer, { size: 16 }),
    closure_8(guildId(16135), { listingId }),
  ];
  let tmp8Result2 = length > 0 || size > 0 || length2 > 0;
  if (tmp8Result2) {
    const items3 = [tmp10(tmp4(1297).Spacer, { size: 24 }), ,];
    obj3 = { style: null, children: null };
    obj3[0] = tmp.contentContainer;
    obj4 = { renderGap: null, children: null };
    obj4[0] = function renderGap() {
      return callback(closure_13, {});
    };
    let tmp8Result = null;
    if (size > 0) {
      obj5 = { children: null };
      const obj6 = { title: null, count: null };
      const intl = tmp4(1236).intl;
      obj6[0] = intl.string(tmp4(1236).t.ebOU2b);
      obj6[1] = size;
      const items4 = [tmp10(ContentHeader, obj6), tmp10(tmp4(1297).Spacer, { size: 8 }), ,];
      const obj7 = { emojiIds: null, guildId: null, maxEmojis: 5 };
      const items5 = [];
      HermesBuiltin.arraySpread(first, 0);
      obj7[0] = items5;
      obj7[1] = guildId;
      items4[2] = tmp10(EmojiGallery, obj7);
      items4[3] = tmp10(tmp4(1297).Spacer, { size: 4 });
      obj5[0] = items4;
      tmp8Result = tmp8(tmp9, obj5);
    }
    const items6 = [tmp8Result, ,];
    tmp8Result = null;
    if (null != first3) {
      const obj8 = { children: null };
      const obj9 = { title: null, count: null };
      const intl2 = tmp4(1236).intl;
      const obj10 = { numChannels: null };
      obj10[0] = length;
      obj9[0] = intl2.formatToPlainString(tmp4(1236).t.y7dUrm, obj10);
      obj9[1] = length;
      const items7 = [tmp10(ContentHeader, obj9), tmp10(tmp4(1297).Spacer, { size: 12 }), ,];
      ({ ref_id: obj19[0], description: obj19[1] } = first3);
      items7[2] = tmp10(ChannelBenefitShowCase, { channelId: null, description: null });
      items7[3] = tmp10(tmp4(1297).Spacer, { size: 6 });
      obj8[0] = items7;
      tmp8Result = tmp8(tmp9, obj8);
      const obj11 = { channelId: null, description: null };
    }
    items6[1] = tmp8Result;
    let tmp8Result1 = null;
    if (null != first4) {
      const obj12 = { children: null };
      const obj13 = { title: null, count: null };
      const intl3 = tmp4(1236).intl;
      const obj14 = { numBenefits: null };
      obj14[0] = length2;
      obj13[0] = intl3.formatToPlainString(tmp4(1236).t.MR7oOF, obj14);
      obj13[1] = length2;
      const items8 = [tmp10(ContentHeader, obj13), tmp10(tmp4(1297).Spacer, { size: 12 }), ,];
      ({ name: obj23[0], description: obj23[1] } = first4);
      items8[2] = tmp10(BenefitShowCase, { title: null, description: null });
      items8[3] = tmp10(tmp4(1297).Spacer, { size: 6 });
      obj12[0] = items8;
      tmp8Result1 = tmp8(tmp9, obj12);
      const obj15 = { title: null, description: null };
    }
    const obj16 = { children: null };
    items6[2] = tmp8Result1;
    obj4[1] = items6;
    obj3[1] = tmp8(tmp4(9191).GappedList, obj4);
    items3[1] = tmp10(tmp9, obj3);
    const obj17 = { onPress: null };
    obj17[0] = function onPress() {
      let obj = guildId(closure_1_3[8]);
      obj = { listingId, guildId };
      obj.openLazy(listingId(closure_1_3[10])(closure_1_3[9], closure_1_3.paths), "PurchaseCard:" + listingId, obj);
    };
    items3[2] = tmp10(ShowAllButton, obj17);
    obj16[0] = items3;
    tmp8Result2 = tmp8(closure_10, obj16);
    const tmp14 = closure_10;
  }
  items2[3] = tmp8Result2;
  obj[1] = items2;
  return closure_9(closure_6, obj);
}
