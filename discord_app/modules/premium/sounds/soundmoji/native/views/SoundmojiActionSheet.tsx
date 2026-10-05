// discord_app/modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import getSoundmojiASTFromString from "../../utils/getSoundmojiASTFromString.tsx";
import EmojiDefault from "../../../../../emojis/native/Emoji.tsx";
import Sheet_BottomSheet from "../../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import getSoundboardEmojiUrlDefault from "../../../../../soundboard/native/utils/getSoundboardEmojiUrl.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  soundmojiContainer: { flexDirection: "row", alignItems: "center" },
  emoji: size,
  textContainer: obj3,
};
obj2 = { padding: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
let num;
if (PlatformUtils.isIOS()) {
  num = 32;
}
size = { width: 32, height: 32, fontSize: num, lineHeight: 36, marginEnd: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_4, display: "flex", flex: 1 };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channelId;
      let guildId;
      let intl;
      let items;
      let items1;
      let messageId;
      let soundId;
      let str;
      const obj = react2;
      const cResult = obj.c(21);
      ({ guildId, channelId, messageId, soundId } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === guildId) {
        if (cResult[1] === channelId) {
          if (cResult[2] === messageId) {
            let tmp5;
            if (cResult[3] === soundId) {
              tmp5 = cResult[4];
            }
            let tmp8 = null;
            if (null != tmp5) {
              if (cResult[5] === tmp5) {
                let tmp9;
                let tmp14;
                let tmp18;
                if (cResult[6] === tmp4.emoji) {
                  tmp9 = cResult[7];
                }
                if (cResult[8] !== tmp5.name) {
                  const obj2 = { variant: "text-sm/bold", children: tmp5.name };
                  const tmp16 = hasOwnProperty(Text_Text.Text, obj2);
                  cResult[8] = tmp5.name;
                  cResult[9] = tmp16;
                  tmp14 = tmp16;
                } else {
                  tmp14 = cResult[9];
                }
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj4 = { variant: "text-sm/normal", children: intl.string(intl2.t.Tj5Nwi) };
                  const Text = Text_Text.Text;
                  intl = intl2.intl;
                  const tmp20 = hasOwnProperty(Text, obj4);
                  cResult[10] = tmp20;
                  tmp18 = tmp20;
                } else {
                  tmp18 = cResult[10];
                }
                if (cResult[11] === tmp4.textContainer) {
                  let tmp21;
                  if (cResult[12] === tmp14) {
                    tmp21 = cResult[13];
                  }
                  if (cResult[14] === tmp4.soundmojiContainer) {
                    if (cResult[15] === tmp9) {
                      let tmp25;
                      if (cResult[16] === tmp21) {
                        tmp25 = cResult[17];
                      }
                      if (cResult[18] === tmp4.container) {
                        let tmp29;
                        if (cResult[19] === tmp25) {
                          tmp29 = cResult[20];
                        }
                        tmp8 = tmp29;
                      }
                      const obj5 = { startExpanded: true, bodyStyles: tmp4.container, children: tmp25 };
                      const tmp31 = hasOwnProperty(Sheet_BottomSheet.BottomSheet, obj5);
                      cResult[18] = tmp4.container;
                      cResult[19] = tmp25;
                      cResult[20] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                  const obj6 = { style: tmp4.soundmojiContainer, children: items };
                  items = [tmp9, tmp21];
                  const tmp28 = metroRequire(View, obj6);
                  cResult[14] = tmp4.soundmojiContainer;
                  cResult[15] = tmp9;
                  cResult[16] = tmp21;
                  cResult[17] = tmp28;
                  tmp25 = tmp28;
                }
                const obj7 = { style: tmp4.textContainer, children: items1 };
                items1 = [tmp14, tmp18];
                const tmp24 = metroRequire(View, obj7);
                cResult[11] = tmp4.textContainer;
                cResult[12] = tmp14;
                cResult[13] = tmp24;
                tmp21 = tmp24;
              }
              let tmp11Result = null != tmp5.emojiId || null != tmp5.emojiName;
              if (tmp11Result) {
                ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = tmp4);
                const obj8 = {
                  fastImageStyle: null,
                  textEmojiStyle: null,
                  src: getSoundboardEmojiUrlDefault(tmp5, 32),
                  name: str,
                };
                str = tmp5.emojiName;
                const tmp13 = EmojiDefault;
                if (str == null) {
                  str = "";
                }
                tmp11Result = hasOwnProperty(tmp13, obj8);
              }
              cResult[5] = tmp5;
              cResult[6] = tmp4.emoji;
              cResult[7] = tmp11Result;
              tmp9 = tmp11Result;
            }
            return tmp8;
          }
        }
      }
      const tmpResult = getSoundmojiASTFromString;
      const soundmojiFromMessage = tmpResult.getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []);
      cResult[0] = guildId;
      cResult[1] = channelId;
      cResult[2] = messageId;
      cResult[3] = soundId;
      cResult[4] = soundmojiFromMessage;
      tmp5 = soundmojiFromMessage;
    }
  : (guildId) => {
      let intl;
      let items1;
      let items2;
      let obj2;
      let str;
      guildId = guildId.guildId;
      const channelId = guildId.channelId;
      const messageId = guildId.messageId;
      const soundId = guildId.soundId;
      const tmp = closure_7();
      const items = [guildId, channelId, messageId, soundId];
      const memo = soundId.useMemo(() => {
        const obj = getSoundmojiASTFromString;
        return obj.getSoundmojiFromMessage(guildId, channelId, messageId, soundId, []);
      }, items);
      let tmp4Result2 = null;
      if (null != memo) {
        let obj = { startExpanded: true, bodyStyles: tmp.container, children: closure_6(View, obj2) };
        let tmp4Result = null != memo.emojiId;
        obj2 = { style: tmp.soundmojiContainer, children: items1 };
        BottomSheet = guildId(messageId[13]).BottomSheet;
        if (!tmp4Result) {
          tmp4Result = null != memo.emojiName;
        }
        if (tmp4Result) {
          ({ emoji: obj3.fastImageStyle, emoji: obj3.textEmojiStyle } = tmp);
          const obj4 = {
            fastImageStyle: null,
            textEmojiStyle: null,
            src: channelId(messageId[10])(memo, 32),
            name: str,
          };
          str = memo.emojiName;
          const tmp11 = channelId(messageId[9]);
          if (str == null) {
            str = "";
          }
          tmp4Result = closure_5(tmp11, obj4);
        }
        items1 = [tmp4Result];
        const obj5 = { style: tmp.textContainer, children: items2 };
        const obj6 = { variant: "text-sm/bold", children: memo.name };
        items2 = [closure_5(guildId(messageId[11]).Text, obj6)];
        const obj11 = { variant: "text-sm/normal", children: intl.string(guildId(messageId[12]).t.Tj5Nwi) };
        const Text = tmp5(tmp6[11]).Text;
        intl = tmp5(tmp6[12]).intl;
        items2[1] = closure_5(Text, obj11);
        items1[1] = closure_6(View, obj5);
        tmp4Result2 = closure_5(BottomSheet, obj);
      }
      return tmp4Result2;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/views/SoundmojiActionSheet.tsx");

export default tmp4;
