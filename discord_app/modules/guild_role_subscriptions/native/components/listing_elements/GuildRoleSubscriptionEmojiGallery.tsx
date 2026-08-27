// === Module 14783: EmojiGallery ===

// Module 14783 (EmojiGallery)
import noopAll from "noop" /* 19 */;
import chunkDefault from "chunk" /* 9109 */;
import GappedList from "GappedList" /* 9111 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = { children: null };
  obj = {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr) => {
      let obj = { style: { flexDirection: "row" }, children: null };
      obj = { gap: 16, children: arr.map((id) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id }, id)) };
      obj[1] = closure_1_4(closure_1_0(closure_1_2[4]).GappedList, obj);
      return closure_1_4(closure_1_3, obj, arg1);
    })
  };
  obj[0] = jsx(GappedList.GappedList, {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr) => {
      let obj = { style: { flexDirection: "row" }, children: null };
      obj = { gap: 16, children: arr.map((id) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id }, id)) };
      obj[1] = closure_1_4(closure_1_0(closure_1_2[4]).GappedList, obj);
      return closure_1_4(closure_1_3, obj, arg1);
    })
  });
  return <View gap={8}>{chunkDefault(arg0.emojiIds, maxPerRow).map((arr) => {
    let obj = { style: { flexDirection: "row" }, children: null };
    obj = { gap: 16, children: arr.map((id) => closure_1_4(closure_1_1(closure_1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id }, id)) };
    obj[1] = closure_1_4(closure_1_0(closure_1_2[4]).GappedList, obj);
    return closure_1_4(closure_1_3, obj, arg1);
  })}</View>;
};