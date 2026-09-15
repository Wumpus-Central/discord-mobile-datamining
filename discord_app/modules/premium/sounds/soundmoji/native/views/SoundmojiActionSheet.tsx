// === Module 12068: SoundmojiActionSheet ===

// Module 12068 (SoundmojiActionSheet)
import nativeDefault from "native" /* 576 */;
import getSoundmojiASTFromString from "getSoundmojiASTFromString" /* 5095 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 }, soundmojiContainer: { flexDirection: "row", alignItems: "center" }, emoji: null, textContainer: null };
const PlatformUtils = fn(1364);
let num;
if (PlatformUtils.isIOS()) {
  num = 32;
}
let size = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: nativeDefault.space.PX_16 };
obj2.emoji = size;
const obj3 = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.textContainer = { gap: nativeDefault.space.PX_4, display: "flex", flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default function SoundmojiActionSheet(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const messageId = guildId.messageId;
  const soundId = guildId.soundId;
  const tmp = closure_7();
  const items = [guildId, channelId, messageId, soundId];
  const memo = soundId.useMemo(() => getSoundmojiASTFromString.getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []), items);
  let tmp4Result2 = null;
  if (null != memo) {
    const obj = { startExpanded: true, bodyStyles: tmp.container, children: null };
    const obj2 = { style: tmp.soundmojiContainer, children: null };
    let tmp4Result = null != memo.emojiId;
    if (!tmp4Result) {
      tmp4Result = null != memo.emojiName;
    }
    if (tmp4Result) {
      const obj4 = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
      ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = tmp);
      obj4.src = channelId(tmp6[9])(memo, 32);
      let str = memo.emojiName;
      if (str == null) {
        str = "";
      }
      obj4.name = str;
      tmp4Result = closure_5(channelId(tmp6[8]), obj4);
      const tmp11 = channelId(tmp6[8]);
    }
    const items1 = [tmp4Result, ];
    const obj5 = { style: tmp.textContainer, children: null };
    const obj6 = { variant: "text-sm/bold", children: memo.name };
    const items2 = [closure_5(guildId(messageId[10]).Text, obj6), ];
    const obj11 = { variant: "text-sm/normal", children: null };
    const intl = tmp5(tmp6[11]).intl;
    obj11.children = intl.string(guildId(messageId[11]).t.Tj5Nwi);
    items2[1] = closure_5(guildId(messageId[10]).Text, obj11);
    obj5.children = items2;
    items1[1] = closure_6(View, obj5);
    obj2.children = items1;
    obj.children = closure_6(View, obj2);
    tmp4Result2 = closure_5(guildId(messageId[7]).BottomSheet, obj);
  }
  return tmp4Result2;
};