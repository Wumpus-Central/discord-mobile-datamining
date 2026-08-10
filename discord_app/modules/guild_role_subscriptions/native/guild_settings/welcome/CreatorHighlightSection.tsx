// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/08688_registerAsset.js";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { CollapsingText } from "../../../../../design/components/Button/native/BaseTextButton.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
function GuildServerSubscriberCount(arg0) {
  let style;
  let subscriberCount;
  ({ subscriberCount, style } = arg0);
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [, , ];
  ({ horizontalContainer: arr[0], subscriberCountContainer: arr[1] } = tmp);
  items[2] = style;
  obj = { style: tmp.subscriberCount, variant: "text-sm/medium", color: "text-overlay-light", children: subscriberCount };
  const items1 = [callback(Text.Text, obj), , ];
  obj = { size: null, color: null, style: null, source: null };
  obj[0] = Button.Icon.Sizes.SMALL;
  obj[1] = Themes.unsafe_rawColors.WHITE;
  obj[2] = tmp.subscriberCountIcon;
  obj[3] = registerAsset;
  items1[1] = callback(Button.Icon, obj);
  const obj1 = { variant: "text-sm/normal", color: "text-overlay-light", children: null };
  const intl = getSystemLocale.intl;
  obj1[2] = intl.string(getSystemLocale.t["3NNXPW"]);
  items1[2] = callback(Text.Text, obj1);
  obj[1] = items1;
  return callback2(closure_4, obj);
}
function CreatorGuildCard(highlightedCreatorGuild) {
  let emojisToShow;
  let guildAvatarUrl;
  let guildName;
  let notShownEmojiCount;
  let quote;
  let quote_attribution;
  let subscriberCount;
  highlightedCreatorGuild = highlightedCreatorGuild.highlightedCreatorGuild;
  let _require;
  let guild_id;
  let dependencyMap;
  let hasAllImperativeDetails;
  const tmp = createCacheKey();
  _require = tmp;
  guild_id = highlightedCreatorGuild.guild_id;
  let quote_attribution_title = highlightedCreatorGuild.quote_attribution_title;
  ({ quote, quote_attribution } = highlightedCreatorGuild);
  const tmp4 = guild_id(16795)(guild_id, 3, 60);
  dependencyMap = tmp4;
  hasAllImperativeDetails = tmp4.hasAllImperativeDetails;
  let items = [hasAllImperativeDetails, tmp4];
  if (tmp4.isLoading) {
    let obj = { style: null, children: null };
    obj[0] = tmp.cardContainer;
    obj[1] = callback(tmp2(16767), {});
    return callback(closure_4, obj);
  } else if (hasAllImperativeDetails) {
    const details = tmp4.details;
    ({ subscriberCount, emojisToShow, notShownEmojiCount } = details);
    obj = { style: null, children: null };
    obj[0] = tmp.cardContainer;
    obj = { style: null, children: null };
    obj[0] = tmp.horizontalContainer;
    ({ guildName, guildAvatarUrl } = details);
    const obj1 = { style: null, source: null };
    obj1[0] = tmp.guildIcon;
    const obj2 = { uri: null };
    obj2[0] = guildAvatarUrl;
    obj1[1] = obj2;
    const items1 = [callback(tmp2(5268), obj1), ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.cardHeaderContainer;
    const obj4 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", lineClamp: 1, lineBreakMode: "tail", children: null };
    obj4[4] = guildName;
    const items2 = [callback(_Text.Text, obj4), ];
    let tmp9Result = null != subscriberCount;
    if (tmp9Result) {
      const obj5 = { subscriberCount: null, style: null };
      obj5[0] = subscriberCount;
      obj5[1] = tmp.serverSubscriberCount;
      tmp9Result = tmp9(GuildServerSubscriberCount, obj5);
    }
    items2[1] = tmp9Result;
    obj3[1] = items2;
    items1[1] = closure_7(closure_4, obj3);
    obj[1] = items1;
    const items3 = [closure_7(closure_4, obj), , , , ];
    const obj6 = { style: null, variant: "text-md/normal", color: "text-default", children: null };
    obj6[0] = tmp.ownerQuote;
    obj6[3] = quote;
    items3[1] = callback(_Text.Text, obj6);
    const obj7 = { style: null, variant: "text-sm/normal", color: "text-default", lineClamp: 1, lineBreakMode: "tail", children: null };
    obj7[0] = tmp.ownerUsername;
    const intl = tmp10(1236).intl;
    const obj8 = { attributionName: null, attributionTitle: null };
    obj8[0] = quote_attribution;
    if (quote_attribution_title == null) {
      const intl2 = tmp10(1236).intl;
      quote_attribution_title = intl2.string(tmp10(1236).t.pclUFJ);
    }
    obj8[1] = quote_attribution_title;
    obj7[5] = intl.format(_getSystemLocale.t.m0b6Kj, obj8);
    items3[2] = callback(_Text.Text, obj7);
    let tmp7Result = null != emojisToShow;
    if (tmp7Result) {
      tmp7Result = emojisToShow.length > 0;
    }
    if (tmp7Result) {
      const obj9 = { style: null, children: null };
      obj9[0] = tmp.emojiSectionContainer;
      const obj10 = { style: null, variant: "text-xs/semibold", color: "text-default", children: null };
      obj10[0] = tmp.premiumEmojisTitle;
      const intl3 = tmp10(1236).intl;
      obj10[3] = intl3.string(tmp10(1236).t.wg53L8);
      const items4 = [tmp9(tmp10(4299).Text, obj10), ];
      const obj11 = { style: null, children: null };
      const items5 = [, ];
      ({ horizontalContainer: arr6[0], emojiContainer: arr6[1] } = tmp);
      obj11[0] = items5;
      const items6 = [
        emojisToShow.map((id) => {
              const items = [, ];
              ({ emoji: arr[0], emojiListItem: arr[1] } = c0);
              return outer1_6(guild_id(_undefined[13]), { style: items, size: 24, id: id.id, guildId: guild_id }, id.id);
            }),

      ];
      tmp9Result = null != notShownEmojiCount;
      if (tmp9Result) {
        const obj12 = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
        obj12[0] = tmp.emojiListItem;
        const _HermesInternal = HermesInternal;
        obj12[3] = "+" + notShownEmojiCount;
        tmp9Result = tmp9(tmp10(4299).Text, obj12);
      }
      items6[1] = tmp9Result;
      obj11[1] = items6;
      items4[1] = tmp7(tmp8, obj11);
      obj9[1] = items4;
      tmp7Result = tmp7(tmp8, obj9);
    }
    items3[3] = tmp7Result;
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.viewServerButtonContainer;
    const obj14 = { pillStyle: null, text: null, onPress: null, shrink: true };
    obj14[0] = tmp.viewServerButton;
    const intl4 = tmp10(1236).intl;
    obj14[1] = intl4.string(_getSystemLocale.t.mQ2IGa);
    obj14[2] = tmp5;
    obj13[1] = callback(_CollapsingText.BaseTextButton, obj14);
    items3[4] = callback(closure_4, obj13);
    obj[1] = items3;
    return closure_7(closure_4, obj);
  } else {
    return null;
  }
}
({ View: c4, FlatList: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { horizontalContainer: { flexDirection: "row" }, serverSubscriberCount: { marginTop: 8 }, subscriberCountContainer: null, subscriberCount: null, subscriberCountIcon: null, cardContainer: null, cardHeaderContainer: null, guildIcon: null, ownerQuote: null, ownerUsername: null, premiumEmojisTitle: null, viewServerButtonContainer: null, viewServerButton: null, emojiSectionContainer: null, emojiContainer: null, emojiListItem: null, emoji: null };
createCacheKey = { alignItems: "center", backgroundColor: require("Themes").unsafe_rawColors.BRAND_530, paddingEnd: 8, borderRadius: require("Themes").radii.xs, overflow: "hidden" };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
createCacheKey[4] = { marginStart: 8, marginEnd: 6, marginVertical: 4, alignSelf: "center" };
let obj1 = { backgroundColor: require("Themes").unsafe_rawColors.BRAND_630, paddingHorizontal: 8, paddingVertical: 4 };
createCacheKey[5] = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[6] = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
createCacheKey[7] = { width: 60, height: 60, borderRadius: 6, marginEnd: 16 };
createCacheKey[8] = { marginTop: 24 };
createCacheKey[9] = { marginTop: 8 };
createCacheKey[10] = { marginTop: 32, textTransform: "uppercase" };
createCacheKey[11] = { flex: 1, justifyContent: "flex-end" };
let obj2 = { width: 276, marginEnd: 12, paddingHorizontal: 24, paddingVertical: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[12] = { width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
createCacheKey[13] = { flex: 1, justifyContent: "flex-start", alignItems: "flex-start" };
let obj3 = { width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, marginTop: 16 };
createCacheKey[14] = { width: "100%", marginTop: 8, paddingHorizontal: 8, justifyContent: "space-around", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, alignItems: "center", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[15] = { marginHorizontal: 8 };
createCacheKey[16] = { height: 24, width: 24, marginVertical: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
function renderItem(highlightedCreatorGuild) {
  return callback(CreatorGuildCard, { highlightedCreatorGuild: highlightedCreatorGuild.item });
}
let obj4 = { width: "100%", marginTop: 8, paddingHorizontal: 8, justifyContent: "space-around", backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, alignItems: "center", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/CreatorHighlightSection.tsx");

export default function CreatorHighlightSection(data) {
  return callback(closure_5, {
    data: data.highlightedCreators,
    horizontal: true,
    keyExtractor(guild_id) {
      return guild_id.guild_id;
    },
    renderItem
  });
};