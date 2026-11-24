// === Module 16677: GuildRoleSubscriptionEmojiGallery ===

// Module 16677 (GuildRoleSubscriptionEmojiGallery)
import Stack_Stack from "Stack/Stack" /* 5989 */;
import chunkDefault from "chunk" /* 9632 */;
import EmojiIconDefault from "EmojiIcon" /* 16678 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  const arr = chunkDefault(emojiIds.emojiIds, maxPerRow);
  return jsx(Stack_Stack.Stack, { spacing: 8, children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => jsx(Stack_Stack.Stack, { direction: "horizontal", spacing: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) }, index)) });
};