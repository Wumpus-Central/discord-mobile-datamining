// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import _modDef10372 from "../../../../../../_runtime/metro/10372__.js";
import EmojiIconDefault from "../../components/EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function GuildServerSubscriberCount(arg0) {
  ({ subscriberCount, style } = arg0);
  const tmp = closure_8();
  let obj = { style: null, children: null };
  const items = [, ,];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  obj.style = items;
  obj = {
    style: tmp.subscriberCount,
    variant: "text-sm/medium",
    color: "text-overlay-light",
    children: subscriberCount,
  };
  const items1 = [timestampProducer(Text_Text.Text, obj), ,];
  obj = {
    size: native.Icon.Sizes.SMALL,
    color: nativeDefault.unsafe_rawColors.WHITE,
    style: tmp.subscriberCountIcon,
    source: _modDef10372,
  };
  items1[1] = timestampProducer(native.Icon, obj);
  const obj1 = { variant: "text-sm/normal", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t["3NNXPW"]);
  items1[2] = timestampProducer(Text_Text.Text, obj1);
  obj.children = items1;
  return React5(React4, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("CreatorHighlightSection", "text-xs/semibold");
  const guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp6 = guild_id(17803)(guild_id, 3, 60);
  dependencyMap = tmp6;
  const hasAllImperativeDetails = tmp6.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp6];
  if (tmp6.isLoading) {
    obj = { style: tmp.cardContainer, children: closure_6(tmp5(17775), {}) };
    return closure_6(closure_4, obj);
  } else if (hasAllImperativeDetails) {
    const details = tmp6.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    obj = { style: tmp.cardContainer, children: null };
    const obj1 = { style: tmp.horizontalContainer, children: null };
    ({ guildName, guildAvatarUrl } = details);
    const obj2 = { style: tmp.guildIcon, source: null };
    const obj3 = { uri: guildAvatarUrl };
    obj2.source = obj3;
    const items1 = [closure_6(tmp5(5637), obj2)];
    const obj4 = { style: tmp.cardHeaderContainer, children: null };
    const obj5 = {
      variant: "heading-md/extrabold",
      color: "mobile-text-heading-primary",
      lineClamp: 1,
      lineBreakMode: "tail",
      children: guildName,
    };
    const items2 = [closure_6(tmp2(4601).Text, obj5)];
    let tmp11Result = null != subscriberCount;
    if (tmp11Result) {
      const obj6 = { subscriberCount, style: tmp.serverSubscriberCount };
      tmp11Result = closure_6(GuildServerSubscriberCount, obj6);
    }
    items2[1] = tmp11Result;
    obj4.children = items2;
    items1[1] = closure_7(closure_4, obj4);
    obj1.children = items1;
    const items3 = [closure_7(closure_4, obj1), , , ,];
    const obj7 = { style: tmp.ownerQuote, variant: "text-md/normal", color: "text-default", children: quote };
    items3[1] = closure_6(tmp2(4601).Text, obj7);
    const obj8 = {
      style: tmp.ownerUsername,
      variant: "text-sm/normal",
      color: "text-default",
      lineClamp: 1,
      lineBreakMode: "tail",
      children: null,
    };
    const intl = tmp2(1114).intl;
    const obj9 = { attributionName: quote_attribution, attributionTitle: null };
    if (quote_attribution_title == null) {
      const intl2 = tmp2(1114).intl;
      quote_attribution_title = intl2.string(tmp2(1114).t.pclUFJ);
    }
    obj9.attributionTitle = quote_attribution_title;
    obj8.children = intl.format(tmp2(1114).t.m0b6Kj, obj9);
    items3[2] = closure_6(tmp2(4601).Text, obj8);
    let tmp9Result = null != emojisToShow;
    if (tmp9Result) {
      tmp9Result = emojisToShow.length > 0;
    }
    if (tmp9Result) {
      const obj10 = { style: tmp.emojiSectionContainer, children: null };
      const obj11 = { style: null, variant: null, color: "text-default", children: null };
      const items4 = [tmp.premiumEmojisTitle, typeConsolidationEyebrow.style];
      obj11.style = items4;
      obj11.variant = typeConsolidationEyebrow.variant;
      const intl3 = tmp2(1114).intl;
      obj11.children = intl3.string(tmp2(1114).t.wg53L8);
      const items5 = [closure_6(tmp2(4601).Text, obj11)];
      const obj12 = { style: null, children: null };
      const items6 = [,];
      ({ horizontalContainer: arr7[0], emojiContainer: arr7[1] } = tmp);
      obj12.style = items6;
      const items7 = [
        emojisToShow.map((id) => {
          const obj = { style: null, size: 24, id: id.id, guildId: guild_id };
          const items = [,];
          ({ emoji: arr[0], emojiListItem: arr[1] } = closure_0);
          obj.style = items;
          return timestampProducer(EmojiIconDefault, obj, id.id);
        }),
      ];
      tmp11Result = null != notShownEmojiCount;
      if (tmp11Result) {
        const obj13 = { style: tmp.emojiListItem, variant: "text-sm/semibold", color: "text-default", children: null };
        const _HermesInternal = HermesInternal;
        obj13.children = "+" + notShownEmojiCount;
        tmp11Result = closure_6(tmp2(4601).Text, obj13);
      }
      items7[1] = tmp11Result;
      obj12.children = items7;
      items5[1] = closure_7(closure_4, obj12);
      obj10.children = items5;
      tmp9Result = closure_7(closure_4, obj10);
    }
    items3[3] = tmp9Result;
    const obj14 = { style: tmp.viewServerButtonContainer, children: null };
    const obj15 = { pillStyle: tmp.viewServerButton, text: null, onPress: null, shrink: true };
    const intl4 = tmp2(1114).intl;
    obj15.text = intl4.string(tmp2(1114).t.mQ2IGa);
    obj15.onPress = tmp7;
    obj14.children = closure_6(tmp2(5026).BaseTextButton, obj15);
    items3[4] = closure_6(closure_4, obj14);
    obj.children = items3;
    return closure_7(closure_4, obj);
  } else {
    return null;
  }
}
get_ActivityIndicator = fn(17);
({ View: closure_4, FlatList: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4605);
let createStyles = {
  horizontalContainer: { flexDirection: "row" },
  serverSubscriberCount: { marginTop: 8 },
  subscriberCountContainer: null,
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
createStyles = {
  alignItems: "center",
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_530,
  paddingEnd: 8,
  borderRadius: nativeDefault.radii.xs,
  overflow: "hidden",
};
createStyles.subscriberCountContainer = createStyles;
createStyles.subscriberCount = {
  backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
createStyles.subscriberCountIcon = { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" };
let obj1 = { backgroundColor: nativeDefault.unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
createStyles.cardContainer = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.cardHeaderContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
createStyles.guildIcon = { width: 60, height: 60, borderRadius: 6, marginEnd: 16 };
createStyles.ownerQuote = { marginTop: 24 };
createStyles.ownerUsername = { marginTop: 8 };
createStyles.premiumEmojisTitle = { marginTop: 32, textTransform: "uppercase" };
createStyles.viewServerButtonContainer = { flex: 1, justifyContent: "flex-end" };
let obj2 = {
  width: 276,
  marginEnd: 12,
  paddingHorizontal: 24,
  paddingVertical: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.viewServerButton = {
  width: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  marginTop: 16,
};
createStyles.emojiSectionContainer = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
let obj3 = { width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
createStyles.emojiContainer = {
  width: "100%",
  marginTop: 8,
  paddingHorizontal: 8,
  justifyContent: "space-around",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  alignItems: "center",
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.emojiListItem = { marginHorizontal: 8 };
createStyles.emoji = { height: 24, width: 24, marginVertical: 8 };
let closure_8 = createStyles.createStyles(createStyles);
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
