// discord_app/modules/messages/native/emoji/EmojiGrid.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiDefault from "../../../emojis/native/Emoji.tsx";
import LayoutUtils from "../../../guild_role_subscriptions/native/components/LayoutUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function Emoji(guildEmoji) {
  guildEmoji = guildEmoji.guildEmoji;
  const tmp = closure_5();
  if (null == guildEmoji.id) {
    let tmp3Result = tmp3(4217);
    let uRL = tmp3Result.getURL(guildEmoji.name);
  } else {
    tmp3Result = tmp3(1396);
    let obj = { id: null, animated: null, size: 48 };
    ({ id: obj2.id, animated: obj2.animated } = guildEmoji);
    uRL = tmp3Result.getEmojiURL(obj);
  }
  obj = { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name };
  return jsx(
    EmojiDefault,
    { src: uRL, fastImageStyle: tmp.gridEmojiFastImage, textEmojiStyle: tmp.gridEmojiText, name: guildEmoji.name },
    guildEmoji.id,
  );
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = {
  gridEmojiFastImage: null,
  gridEmojiText: null,
  emojiGridRowContainer: null,
  emojiGridContainer: null,
};
let size = { height: 40, width: 40, borderRadius: nativeDefault.radii.sm };
createStyles.gridEmojiFastImage = size;
createStyles.gridEmojiText = { fontSize: 18, lineHeight: 44 };
createStyles.emojiGridRowContainer = { marginTop: 16, flexDirection: "row" };
createStyles.emojiGridContainer = { marginTop: 8, alignItems: "center" };
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiGrid.tsx");

export const EmojiGrid = function EmojiGrid(numberToShow) {
  ({ expressionSourceGuild, doNotDisplayEmojiIds } = numberToShow);
  if (doNotDisplayEmojiIds === undefined) {
    doNotDisplayEmojiIds = [];
  }
  let num = numberToShow.numberToShow;
  if (num === undefined) {
    num = 10;
  }
  let num2 = numberToShow.maxPerRow;
  if (num2 === undefined) {
    num2 = 5;
  }
  let obj = {};
  const merged = Object.assign(doNotDisplayEmojiIds(10331).useSharedMessageEmojiStyles());
  const merged1 = Object.assign(closure_5());
  let emojis;
  if (expressionSourceGuild != null) {
    emojis = expressionSourceGuild.emojis;
  }
  if (emojis == null) {
    emojis = [];
  }
  const substr = emojis.slice(0, num + 1);
  const found = substr.filter((id) => !doNotDisplayEmojiIds.includes(id.id));
  const substr1 = found.slice(0, num);
  const obj2 = doNotDisplayEmojiIds(10331);
  const tmp = doNotDisplayEmojiIds;
  obj = { style: obj.emojiGridContainer, children: null };
  obj = {
    gap: 8,
    children: obj(10344)(substr1, num2).map((arr, index) => {
      obj = { style: obj.emojiGridRowContainer, children: null };
      obj = { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) };
      obj.children = jsx(LayoutUtils.GappedList, {
        gap: 32,
        children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)),
      });
      return (
        <View key={arg1} gap={32}>
          {arg0.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id))}
        </View>
      );
    }),
  };
  obj.children = jsx(tmp(10346).GappedList, {
    gap: 8,
    children: obj(10344)(substr1, num2).map((arr, index) => {
      obj = { style: obj.emojiGridRowContainer, children: null };
      obj = { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) };
      obj.children = jsx(LayoutUtils.GappedList, {
        gap: 32,
        children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)),
      });
      return (
        <View key={arg1} gap={32}>
          {arg0.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id))}
        </View>
      );
    }),
  });
  return (
    <View gap={8}>
      {obj(10344)(substr1, num2).map((arr, index) => {
        obj = { style: obj.emojiGridRowContainer, children: null };
        obj = { gap: 32, children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)) };
        obj.children = jsx(LayoutUtils.GappedList, {
          gap: 32,
          children: arr.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id)),
        });
        return (
          <View key={arg1} gap={32}>
            {arg0.map((guildEmoji) => closure_1_4(closure_1_6, { guildEmoji }, guildEmoji.id))}
          </View>
        );
      })}
    </View>
  );
};
