// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import chunkDefault from "../../../../../../_runtime/09457_chunk.js";
import GappedList from "../LayoutUtils.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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