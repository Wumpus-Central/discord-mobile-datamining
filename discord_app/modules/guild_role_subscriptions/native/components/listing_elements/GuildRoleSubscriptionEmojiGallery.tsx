// discord_app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx
import chunkDefault from "../../../../../../_runtime/09558_chunk.js";
import LayoutUtils from "../LayoutUtils.tsx";
import EmojiIconDefault from "../EmojiIcon.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionEmojiGallery.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiGallery(maxPerRow) {
  const cResult = guildId(576).c(16);
  ({ emojiIds, guildId } = maxPerRow);
  maxPerRow = maxPerRow.maxPerRow;
  let num = 9;
  if (undefined !== maxPerRow) {
    num = maxPerRow;
  }
  if (cResult[0] === emojiIds) {
    if (cResult[1] === guildId) {
      if (cResult[2] === num) {
        if (cResult[9] === cResult[3]) {
          if (cResult[10] === tmp6) {
            if (cResult[11] === tmp7) {
              let tmp11 = cResult[12];
            }
            if (cResult[13] === tmp5) {
              if (cResult[14] === tmp11) {
                let tmp14 = cResult[15];
              }
              return tmp14;
            }
            const obj2 = { children: tmp11 };
            const tmp16 = <tmp5>{tmp11}</tmp5>;
            cResult[13] = tmp5;
            cResult[14] = tmp11;
            cResult[15] = tmp16;
            tmp14 = tmp16;
          }
        }
        const obj3 = { gap: cResult[5], children: cResult[6] };
        const tmp13 = jsx(cResult[3], { gap: cResult[5], children: cResult[6] });
        cResult[9] = cResult[3];
        cResult[10] = cResult[5];
        cResult[11] = cResult[6];
        cResult[12] = tmp13;
        tmp11 = tmp13;
      }
    }
  }
  let obj = guildId(576);
  if (cResult[7] !== guildId) {
    class I {
      constructor(arg0, arg1) {
        obj = { style: { flexDirection: "row" }, children: null };
        obj1 = { gap: 16, children: maxPerRow.map(() => { ... }) };
        obj.children = jsx(closure_0(closure_2[6]).GappedList, obj1);
        return jsx(View, obj, arg1);
      }
    }
    cResult[7] = guildId;
    cResult[8] = I;
  } else {
    class I {
      constructor(arg0, arg1) {
        obj = { style: { flexDirection: "row" }, children: null };
        obj1 = { gap: 16, children: maxPerRow.map(() => { ... }) };
        obj.children = jsx(closure_0(closure_2[6]).GappedList, obj1);
        return jsx(View, obj, arg1);
      }
    }
  }
  const mapped = chunkDefault(emojiIds, num).map(I);
  cResult[0] = emojiIds;
  cResult[1] = guildId;
  cResult[2] = num;
  cResult[3] = guildId(9560).GappedList;
  cResult[4] = View;
  cResult[5] = 8;
  cResult[6] = mapped;
  const arr = chunkDefault(emojiIds, num);
}) : (function EmojiGallery(emojiIds) {
  ({ guildId: require, maxPerRow } = emojiIds);
  if (maxPerRow === undefined) {
    maxPerRow = 9;
  }
  let obj = { children: null };
  const arr = chunkDefault(emojiIds.emojiIds, maxPerRow);
  obj.children = jsx(LayoutUtils.GappedList, {
    gap: 8,
    children: chunkDefault(emojiIds.emojiIds, maxPerRow).map((arr, index) => {
      const obj = { style: { flexDirection: "row" }, children: jsx(LayoutUtils.GappedList, { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) }) };
      return <View key={index} style={{ flexDirection: "row" }}>{jsx(LayoutUtils.GappedList, { gap: 16, children: arr.map((id) => jsx(EmojiIconDefault, { size: 22, fontSize: 18, guildId, id }, id)) })}</View>;
    })
  });
  return <View>{null}</View>;
});