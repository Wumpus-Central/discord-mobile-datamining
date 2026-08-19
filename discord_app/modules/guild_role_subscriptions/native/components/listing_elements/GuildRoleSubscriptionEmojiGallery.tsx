// === Module 14585: EmojiGallery ===

// Module 14585 (EmojiGallery)
import noopAll from "noop" /* 19 */;
import chunkDefault from "chunk" /* 9420 */;
import GappedList from "GappedList" /* 9422 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((item, index) => {
      const obj = { gap: 16, children: item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item)) };
      obj[1] = jsx(GappedList.GappedList, { gap: 16, children: item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item)) });
      return <View key={index} gap={16}>{item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item))}</View>;
    })
  };
  obj[0] = jsx(GappedList.GappedList, {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((item, index) => {
      const obj = { gap: 16, children: item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item)) };
      obj[1] = jsx(GappedList.GappedList, { gap: 16, children: item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item)) });
      return <View key={index} gap={16}>{item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item))}</View>;
    })
  });
  return <View gap={8}>{chunkDefault(emojiIds.emojiIds, maxPerRow).map((item, index) => {
    const obj = { gap: 16, children: item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item)) };
    obj[1] = jsx(GappedList.GappedList, { gap: 16, children: item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item)) });
    return <View key={index} gap={16}>{item.map((item, index) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id: item }, item))}</View>;
  })}</View>;
};