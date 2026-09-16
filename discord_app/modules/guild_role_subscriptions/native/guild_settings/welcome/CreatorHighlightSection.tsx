// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import _modDef10441 from "../../../../../../_runtime/metro/10441__.js";
import EmojiIconDefault from "../../components/EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function GuildServerSubscriberCount(arg0) {
  ({ subscriberCount, style } = arg0);
  const tmp = closure_8();
  const obj = { style: null, children: null };
  const items = [, ,];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  obj.style = items;
  const items1 = [
    timestampProducer(Text_Text.Text, {
      style: tmp.subscriberCount,
      variant: "text-sm/medium",
      color: "text-overlay-light",
      children: subscriberCount,
    }),
    timestampProducer(native.Icon, {
      size: native.Icon.Sizes.SMALL,
      color: nativeDefault.unsafe_rawColors.WHITE,
      style: tmp.subscriberCountIcon,
      source: _modDef10441,
    }),
  ];
  const obj4 = { variant: "text-sm/normal", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["3NNXPW"]);
  items1[2] = timestampProducer(Text_Text.Text, obj4);
  obj.children = items1;
  return React5(React4, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  const tmp = closure_8();
  _require = tmp;
  const typeConsolidationEyebrow = require("useTypeConsolidationTextTransform").useTypeConsolidationEyebrow(
    "CreatorHighlightSection",
    "text-xs/semibold",
  );
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp6 = guild_id(17919)(guild_id, 3, 60);
  dependencyMap = tmp6;
  const hasAllImperativeDetails = tmp6.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp6];
  if (tmp6.isLoading) {
    const obj2 = { style: tmp.cardContainer, children: closure_6(tmp5(17891), {}) };
    return closure_6(closure_4, obj2);
  } else if (hasAllImperativeDetails) {
    const details = tmp6.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    const obj3 = { style: tmp.cardContainer, children: null };
    const obj4 = { style: tmp.horizontalContainer, children: null };
    ({ guildName, guildAvatarUrl } = details);
    const obj5 = { style: tmp.guildIcon, source: null };
    const obj6 = { uri: guildAvatarUrl };
    obj5.source = obj6;
    const items1 = [closure_6(tmp5(5673), obj5)];
    const obj7 = { style: tmp.cardHeaderContainer, children: null };
    const obj8 = {
      variant: "heading-md/extrabold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      lineBreakMode: "tail",
      children: guildName,
    };
    const items2 = [closure_6(tmp2(4634).Text, obj8)];
    let tmp11Result = null != subscriberCount;
    if (tmp11Result) {
      const obj9 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp11Result = closure_6(GuildServerSubscriberCount, obj9);
    }
    items2[1] = tmp11Result;
    obj7.children = items2;
    items1[1] = closure_7(closure_4, obj7);
    obj4.children = items1;
    const items3 = [closure_7(closure_4, obj4), , , ,];
    const obj10 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
    items3[1] = closure_6(tmp2(4634).Text, obj10);
    const obj11 = {
      style: tmp.ownerUsername,
      variant: "text-sm/normal",
      color: "text-default",
      lineClamp: 1,
      lineBreakMode: "tail",
      children: null,
    };
    const intl = tmp2(1115).intl;
    const obj12 = { attributionName: quote_attribution, attributionTitle: null };
    if (quote_attribution_title == null) {
      const intl2 = tmp2(1115).intl;
      quote_attribution_title = intl2.string(tmp2(1115).t.pclUFJ);
    }
    obj12.attributionTitle = quote_attribution_title;
    obj11.children = intl.format(tmp2(1115).t.m0b6Kj, obj12);
    items3[2] = closure_6(tmp2(4634).Text, obj11);
    let tmp9Result = null != emojisToShow;
    if (tmp9Result) {
      tmp9Result = emojisToShow.length > 0;
    }
    if (tmp9Result) {
      const obj13 = { style: tmp.emojiSectionContainer, children: null };
      const obj14 = { style: null, variant: null, color: "text-default", children: null };
      const items4 = [tmp.premiumEmojisTitle, typeConsolidationEyebrow.style];
      obj14.style = items4;
      obj14.variant = typeConsolidationEyebrow.variant;
      const intl3 = tmp2(1115).intl;
      obj14.children = intl3.string(tmp2(1115).t.wg53L8);
      const items5 = [closure_6(tmp2(4634).Text, obj14)];
      const obj15 = { style: null, children: null };
      const items6 = [,];
      ({ horizontalContainer: arr7[0], emojiContainer: arr7[1] } = tmp);
      obj15.style = items6;
      const items7 = [
        emojisToShow.map((id) => {
          const obj = { style: null, size: 24, id: id.id, guildId: guild_id };
          const items = [,];
          ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
          obj.style = items;
          return timestampProducer(EmojiIconDefault, obj, id.id);
        }),
      ];
      let tmp11Result2 = null != notShownEmojiCount;
      if (tmp11Result2) {
        const obj16 = { style: tmp.emojiListItem, variant: "text-sm/semibold", color: "text-default", children: null };
        const _HermesInternal = HermesInternal;
        obj16.children = "+" + notShownEmojiCount;
        tmp11Result2 = closure_6(tmp2(4634).Text, obj16);
      }
      items7[1] = tmp11Result2;
      obj15.children = items7;
      items5[1] = closure_7(closure_4, obj15);
      obj13.children = items5;
      tmp9Result = closure_7(closure_4, obj13);
    }
    items3[3] = tmp9Result;
    const obj17 = { style: tmp.viewServerButtonContainer, children: null };
    const obj18 = { pillStyle: tmp.viewServerButton, text: null, onPress: null, shrink: true };
    const intl4 = tmp2(1115).intl;
    obj18.text = intl4.string(tmp2(1115).t.mQ2IGa);
    obj18.onPress = tmp7;
    obj17.children = closure_6(tmp2(5061).BaseTextButton, obj18);
    items3[4] = closure_6(closure_4, obj17);
    obj3.children = items3;
    return closure_7(closure_4, obj3);
  } else {
    return null;
  }
  let obj = require("useTypeConsolidationTextTransform");
}
get_ActivityIndicator = fn(17);
({ View: closure_4, FlatList: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  horizontalContainer: { flexDirection: "row" },
  serverSubscriberCount: { marginTop: 8 },
  subscriberCountContainer: {
    alignItems: "center",
    backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530,
    paddingEnd: 8,
    borderRadius: nativeDefault.radii.xs,
    overflow: "hidden",
  },
  subscriberCount: null,
  subscriberCountIcon: null,
  cardContainer: null,
  cardHeaderContainer: null,
  guildIcon: null,
  ownerQuote: null,
  ownerUsername: null,
  premiumEmojisTitle: null,
  viewServerButtonContainer: null,
  viewServerButton: null,
  emojiSectionContainer: null,
  emojiContainer: null,
  emojiListItem: null,
  emoji: null,
};
let obj3 = {
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
obj2.subscriberCount = {
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
obj2.subscriberCountIcon = { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
obj2.cardContainer = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.cardHeaderContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
obj2.guildIcon = { width: 60, height: 60, borderRadius: 6, marginEnd: 16 };
obj2.ownerQuote = { marginTop: 24 };
obj2.ownerUsername = { marginTop: 8 };
obj2.premiumEmojisTitle = { marginTop: 32, textTransform: "uppercase" };
obj2.viewServerButtonContainer = { flex: 1, justifyContent: "flex-end" };
let obj5 = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.viewServerButton = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj2.emojiSectionContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
let obj6 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
obj2.emojiContainer = {
  width: "100%",
  marginTop: 8,
  paddingHorizontal: 8,
  justifyContent: "space-around",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
obj2.emojiListItem = { marginHorizontal: 8 };
obj2.emoji = { height: 24, width: 24, marginVertical: 8 };
let closure_8 = createStyles.createStyles(obj2);
function renderItem(highlightedCreatorGuild) {
  return timestampProducer(CreatorGuildCard, { highlightedCreatorGuild: highlightedCreatorGuild.item });
}
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx",
);

export default function CreatorHighlightSection(data) {
  return timestampProducer(hasOwnProperty, {
    data: data.highlightedCreators,
    horizontal: true,
    keyExtractor(guild_id) {
      return guild_id.guild_id;
    },
    renderItem,
  });
}
