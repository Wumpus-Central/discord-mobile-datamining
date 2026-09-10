// === Module 15320: GuildRoleSubscriptionEmojiGallery ===

// Module 15320 (GuildRoleSubscriptionEmojiGallery)
import chunkDefault from "chunk" /* 10414 */;
import LayoutUtils from "LayoutUtils" /* 10416 */;
import EmojiIconDefault from "EmojiIcon" /* 15321 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = { children: null };
  obj = {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => {
      let obj = { style: { flexDirection: "row" }, children: null };
      obj = { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) };
      obj.children = jsx(LayoutUtils.GappedList, { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) });
      return <View key={index} gap={16}>{arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}</View>;
    })
  };
  obj.children = jsx(LayoutUtils.GappedList, {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => {
      let obj = { style: { flexDirection: "row" }, children: null };
      obj = { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) };
      obj.children = jsx(LayoutUtils.GappedList, { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) });
      return <View key={index} gap={16}>{arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}</View>;
    })
  });
  return <View gap={8}>{chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => {
    let obj = { style: { flexDirection: "row" }, children: null };
    obj = { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) };
    obj.children = jsx(LayoutUtils.GappedList, { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) });
    return <View key={index} gap={16}>{arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}</View>;
  })}</View>;
};