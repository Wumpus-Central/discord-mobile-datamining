// === Module 11502: SoundmojiActionSheet ===

// Module 11502 (SoundmojiActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import set from "set" /* 500 */;

const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, soundmojiContainer: null, emoji: null, textContainer: null };
createCacheKey = { padding: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignItems: "center" };
let num;
if (set.isIOS()) {
  num = 32;
}
createCacheKey[2] = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: ThemesDefault.space.PX_16 };
let obj1 = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: ThemesDefault.space.PX_16 };
createCacheKey[3] = { gap: ThemesDefault.space.PX_4, display: "flex", flex: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default function SoundmojiActionSheet(guildId) {
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  const messageId = guildId.messageId;
  const soundId = guildId.soundId;
  const tmp = callback();
  const items = [guildId, channelId, messageId, soundId];
  const memo = soundId.useMemo(() => guildId(messageId[6]).getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []), items);
  let tmp4Result = null;
  if (null != memo) {
    let obj = { startExpanded: true, bodyStyles: null, children: null };
    obj[1] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.soundmojiContainer;
    tmp4Result = null != memo.emojiId;
    if (!tmp4Result) {
      tmp4Result = null != memo.emojiName;
    }
    if (tmp4Result) {
      obj = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
      ({ emoji: obj3[0], emoji: obj3[1] } = tmp);
      obj[2] = channelId(tmp6[9])(memo, 32);
      let str = memo.emojiName;
      if (str == null) {
        str = "";
      }
      obj[3] = str;
      tmp4Result = tmp4(channelId(tmp6[8]), obj);
      const tmp11 = channelId(tmp6[8]);
    }
    const items1 = [tmp4Result, ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.textContainer;
    const obj2 = { variant: "text-sm/bold", children: null };
    obj2[1] = memo.name;
    const items2 = [closure_5(guildId(messageId[10]).Text, obj2), ];
    const obj3 = { variant: "text-sm/normal", children: null };
    const intl = tmp5(tmp6[11]).intl;
    obj3[1] = intl.string(guildId(messageId[11]).t.Tj5Nwi);
    items2[1] = closure_5(guildId(messageId[10]).Text, obj3);
    obj1[1] = items2;
    items1[1] = closure_6(View, obj1);
    obj[1] = items1;
    obj[2] = closure_6(View, obj);
    tmp4Result = tmp4(guildId(messageId[7]).BottomSheet, obj);
  }
  return tmp4Result;
};