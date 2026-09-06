// discord_app/modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSoundmojiASTFromString from "../../utils/getSoundmojiASTFromString.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, soundmojiContainer: null, emoji: null, textContainer: null };
createStyles = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.soundmojiContainer = { flexDirection: "row", alignItems: "center" };
const PlatformUtils = fn(1115);
let num;
if (PlatformUtils.isIOS()) {
  num = 32;
}
let size = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: nativeDefault.space.PX_16 };
createStyles.emoji = size;
createStyles.textContainer = { gap: nativeDefault.space.PX_4, display: "flex", flex: 1 };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default function SoundmojiActionSheet(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const messageId = guildId.messageId;
  const soundId = guildId.soundId;
  const tmp = closure_7();
  const items = [guildId, channelId, messageId, soundId];
  const memo = soundId.useMemo(
    () => getSoundmojiASTFromString.getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []),
    items,
  );
  let tmp4Result = null;
  if (null != memo) {
    let obj = { startExpanded: true, bodyStyles: tmp.container, children: null };
    obj = { style: tmp.soundmojiContainer, children: null };
    tmp4Result = null != memo.emojiId;
    if (!tmp4Result) {
      tmp4Result = null != memo.emojiName;
    }
    if (tmp4Result) {
      obj = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
      ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = tmp);
      obj.src = channelId(tmp6[9])(memo, 32);
      let str = memo.emojiName;
      if (str == null) {
        str = "";
      }
      obj.name = str;
      tmp4Result = closure_5(channelId(tmp6[8]), obj);
      const tmp11 = channelId(tmp6[8]);
    }
    const items1 = [tmp4Result];
    const obj1 = { style: tmp.textContainer, children: null };
    const obj2 = { variant: "text-sm/bold", children: memo.name };
    const items2 = [closure_5(guildId(messageId[10]).Text, obj2)];
    const obj3 = { variant: "text-sm/normal", children: null };
    const intl = tmp5(tmp6[11]).intl;
    obj3.children = intl.string(guildId(messageId[11]).t.Tj5Nwi);
    items2[1] = closure_5(guildId(messageId[10]).Text, obj3);
    obj1.children = items2;
    items1[1] = closure_6(View, obj1);
    obj.children = items1;
    obj.children = closure_6(View, obj);
    tmp4Result = closure_5(guildId(messageId[7]).BottomSheet, obj);
  }
  return tmp4Result;
}
