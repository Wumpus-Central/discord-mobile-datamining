// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { chunk } from "../../../../../../_runtime/08801_chunk.js";
import { GappedList } from "../LayoutUtils.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default function EmojiGallery(emojiIds) {
  let maxPerRow;
  let require;
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = { children: null };
  obj = { gap: 8, children: null };
  obj[1] = chunk(emojiIds.emojiIds, maxPerRow).map((arr) => {
    let obj = { style: { flexDirection: "row" }, children: null };
    obj = { gap: 16, children: null };
    obj[1] = arr.map((id) => outer1_4(outer1_1(outer1_2[5]), { size: 22, fontSize: 18, guildId: closure_0, id }, id));
    obj[1] = outer1_4(outer1_0(outer1_2[4]).GappedList, obj);
    return outer1_4(outer1_3, obj, arg1);
  });
  obj[0] = jsx(GappedList.GappedList, { gap: 8, children: null });
  return <View gap={8}>{null}</View>;
};