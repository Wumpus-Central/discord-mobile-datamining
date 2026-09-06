// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx
import chunkDefault from "../../../../../../_runtime/10344_chunk.js";
import LayoutUtils from "../LayoutUtils.tsx";
import EmojiIconDefault from "../EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx",
);

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
      obj.children = jsx(LayoutUtils.GappedList, {
        gap: 16,
        children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)),
      });
      return (
        <View key={arg1} gap={16}>
          {arg0.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}
        </View>
      );
    }),
  };
  obj.children = jsx(LayoutUtils.GappedList, {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => {
      let obj = { style: { flexDirection: "row" }, children: null };
      obj = { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) };
      obj.children = jsx(LayoutUtils.GappedList, {
        gap: 16,
        children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)),
      });
      return (
        <View key={arg1} gap={16}>
          {arg0.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}
        </View>
      );
    }),
  });
  return (
    <View gap={8}>
      {chunkDefault(arg0.emojiIds, maxPerRow).map((arr, index) => {
        let obj = { style: { flexDirection: "row" }, children: null };
        obj = {
          gap: 16,
          children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)),
        };
        obj.children = jsx(LayoutUtils.GappedList, {
          gap: 16,
          children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)),
        });
        return (
          <View key={arg1} gap={16}>
            {arg0.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id))}
          </View>
        );
      })}
    </View>
  );
}
