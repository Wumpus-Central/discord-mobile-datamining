// discord_app/modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import EmojiDefault from "../../../../../emojis/native/Emoji.tsx";
import getSoundboardEmojiUrlDefault from "../../../../../soundboard/native/utils/getSoundboardEmojiUrl.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const util = BottomSheet(1126);
const Text_Text = BottomSheet(5088);
const getSoundmojiASTFromString = BottomSheet(5427);
const Sheet_BottomSheet = BottomSheet(6839);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 },
  soundmojiContainer: { flexDirection: "row", alignItems: "center" },
  emoji: null,
  textContainer: null,
};
const PlatformUtils = fn(1382);
let num;
if (PlatformUtils.isIOS()) {
  num = 32;
}
let size = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: nativeDefault.space.PX_16 };
obj2.emoji = size;
const obj3 = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
obj2.textContainer = { gap: nativeDefault.space.PX_4, display: "flex", flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_4, display: "flex", flex: 1 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SoundmojiActionSheet(arg0) {
      BottomSheet = require;
      let tmp = dependencyMap;
      const cResult = c.c(21);
      ({ guildId, channelId, messageId, soundId } = arg0);
      let container = closure_7();
      if (cResult[0] === guildId) {
        if (cResult[1] === channelId) {
          if (cResult[2] === messageId) {
            if (cResult[3] === soundId) {
              let tmp3 = cResult[4];
            }
            if (null == tmp3) {
              return null;
            } else {
              if (cResult[5] === tmp3) {
                if (cResult[6] === container.emoji) {
                  let tmp7 = cResult[7];
                }
                if (cResult[8] !== tmp3.name) {
                  const obj2 = { variant: "text-sm/bold", children: tmp3.name };
                  const tmp14 = hasOwnProperty(Text_Text.Text, obj2);
                  cResult[8] = tmp3.name;
                  cResult[9] = tmp14;
                  let tmp12 = tmp14;
                } else {
                  tmp12 = cResult[9];
                }
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { variant: "text-sm/normal", children: null };
                  const intl = util.intl;
                  obj4.children = intl.string(util.t.Tj5Nwi);
                  const tmp18 = hasOwnProperty(Text_Text.Text, obj4);
                  cResult[10] = tmp18;
                  let tmp16 = tmp18;
                } else {
                  tmp16 = cResult[10];
                }
                if (cResult[11] === container.textContainer) {
                  if (cResult[12] === tmp12) {
                    let tmp19 = cResult[13];
                  }
                  if (cResult[14] === container.soundmojiContainer) {
                    if (cResult[15] === tmp7) {
                      if (cResult[16] === tmp19) {
                        let tmp23 = cResult[17];
                      }
                      if (cResult[18] === container.container) {
                      }
                      BottomSheet = Sheet_BottomSheet.BottomSheet;
                      const obj5 = { startExpanded: true, bodyStyles: container.container, children: tmp23 };
                      tmp = hasOwnProperty(BottomSheet, obj5);
                      container = container.container;
                      cResult[18] = container;
                      cResult[19] = tmp23;
                      cResult[20] = tmp;
                    }
                  }
                  const obj6 = { style: container.soundmojiContainer, children: null };
                  const items = [tmp7, tmp19];
                  obj6.children = items;
                  const tmp26 = timestampProducer(View, obj6);
                  cResult[14] = container.soundmojiContainer;
                  cResult[15] = tmp7;
                  cResult[16] = tmp19;
                  cResult[17] = tmp26;
                  tmp23 = tmp26;
                }
                const obj7 = { style: container.textContainer, children: null };
                const items1 = [tmp12, tmp16];
                obj7.children = items1;
                const tmp22 = timestampProducer(View, obj7);
                cResult[11] = container.textContainer;
                cResult[12] = tmp12;
                cResult[13] = tmp22;
                tmp19 = tmp22;
              }
              let tmp9Result = null != tmp3.emojiId || null != tmp3.emojiName;
              if (tmp9Result) {
                const obj8 = { fastImageStyle: null, textEmojiStyle: null, src: null, name: null };
                ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = container);
                obj8.src = getSoundboardEmojiUrlDefault(tmp3, 32);
                let str = tmp3.emojiName;
                if (str == null) {
                  str = "";
                }
                obj8.name = str;
                tmp9Result = hasOwnProperty(EmojiDefault, obj8);
              }
              cResult[5] = tmp3;
              cResult[6] = container.emoji;
              cResult[7] = tmp9Result;
              tmp7 = tmp9Result;
            }
          }
        }
      }
      const soundmojiFromMessage = getSoundmojiASTFromString.getSoundmojiFromMessage(
        guildId,
        channelId,
        messageId,
        soundId,
        [],
      );
      cResult[0] = guildId;
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = soundId;
      cResult[4] = soundmojiFromMessage;
      tmp3 = soundmojiFromMessage;
      const BottomSheetResult = getSoundmojiASTFromString;
    }
  : function SoundmojiActionSheet(guildId) {
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
          obj4.src = channelId(tmp6[10])(memo, 32);
          let str = memo.emojiName;
          if (str == null) {
            str = "";
          }
          obj4.name = str;
          tmp4Result = closure_5(channelId(tmp6[9]), obj4);
          const tmp11 = channelId(tmp6[9]);
        }
        const items1 = [tmp4Result];
        const obj5 = { style: tmp.textContainer, children: null };
        const obj6 = { variant: "text-sm/bold", children: memo.name };
        const items2 = [closure_5(guildId(messageId[11]).Text, obj6)];
        const obj11 = { variant: "text-sm/normal", children: null };
        const intl = tmp5(tmp6[12]).intl;
        obj11.children = intl.string(guildId(messageId[12]).t.Tj5Nwi);
        items2[1] = closure_5(guildId(messageId[11]).Text, obj11);
        obj5.children = items2;
        items1[1] = closure_6(View, obj5);
        obj2.children = items1;
        obj.children = closure_6(View, obj2);
        tmp4Result2 = closure_5(guildId(messageId[13]).BottomSheet, obj);
      }
      return tmp4Result2;
    };
