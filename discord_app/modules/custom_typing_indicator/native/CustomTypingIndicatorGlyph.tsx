// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomTypingIndicatorGlyph(config) {
      const cResult = emojis(576).c(23);
      emojis = config.config;
      const size = config.size;
      const tmp4 = closure_5();
      if (cResult[0] !== emojis) {
        const effectiveCustomTypingIndicatorAnimation = tmp(1410).getEffectiveCustomTypingIndicatorAnimation(emojis);
        cResult[0] = emojis;
        cResult[1] = effectiveCustomTypingIndicatorAnimation;
        let tmp5 = effectiveCustomTypingIndicatorAnimation;
        const tmpResult = tmp(1410);
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      const obj = emojis(576);
      if (tmpResult3.hasCustomTypingIndicatorEmojis(emojis.emojis)) {
        if (cResult[3] !== emojis.emojis) {
          const customTypingIndicatorEmojisKey = tmp(1410).getCustomTypingIndicatorEmojisKey(emojis.emojis);
          cResult[3] = emojis.emojis;
          cResult[4] = customTypingIndicatorEmojisKey;
          let tmp11 = customTypingIndicatorEmojisKey;
          const tmpResult4 = tmp(1410);
        } else {
          tmp11 = cResult[4];
        }
        const emojisKey = tmp11;
        if (null == size) {
          let PX_4 = size(587).space.PX_4;
        } else {
          PX_4 = size / 4;
        }
        if (cResult[5] !== PX_4) {
          const obj2 = { gap: PX_4 };
          cResult[5] = PX_4;
          cResult[6] = obj2;
          let tmp15 = obj2;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] === tmp4.emojiRow) {
          if (cResult[8] === tmp15) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp5) {
            if (cResult[11] === emojis.emojis) {
              if (cResult[12] === tmp11) {
                if (cResult[13] === size) {
                  if (cResult[20] === tmp16) {
                    if (cResult[21] === tmp17) {
                      let tmp21 = cResult[22];
                    }
                    return tmp21;
                  }
                  const obj3 = { style: tmp16, children: cResult[14] };
                  const tmp24 = <emojisKey style={tmp16}>{cResult[14]}</emojisKey>;
                  cResult[20] = tmp16;
                  cResult[21] = cResult[14];
                  cResult[22] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
          }
          if (cResult[15] === tmp5) {
            if (cResult[16] === emojis.emojis.length) {
              if (cResult[17] === tmp11) {
                if (cResult[18] === size) {
                  let tmp18 = cResult[19];
                }
                const emojis1 = emojis.emojis;
                const mapped = emojis1.map(tmp18);
                cResult[10] = tmp5;
                emojis = emojis.emojis;
                cResult[11] = emojis;
                cResult[12] = tmp11;
                cResult[13] = size;
                cResult[14] = mapped;
              }
            }
          }
          const fn = function _(emoji, index) {
            return jsx(
              CustomTypingIndicatorAnimatedEmojiDefault,
              { emoji, emojisKey, index, emojiCount: emojis.emojis.length, animation, size },
              index,
            );
          };
          cResult[15] = tmp5;
          cResult[16] = emojis.emojis.length;
          cResult[17] = tmp11;
          cResult[18] = size;
          cResult[19] = fn;
          tmp18 = fn;
        }
        const items = [tmp4.emojiRow, tmp15];
        cResult[7] = tmp4.emojiRow;
        cResult[8] = tmp15;
        cResult[9] = items;
        tmp16 = items;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = jsx(tmp(1200).Ellipsis, {});
          cResult[2] = tmp10;
          let tmp8 = tmp10;
        } else {
          tmp8 = cResult[2];
        }
        return tmp8;
      }
      tmpResult3 = emojis(1410);
    }
  : function CustomTypingIndicatorGlyph(config) {
      config = config.config;
      const size = config.size;
      let emojisKey;
      const tmp = closure_5();
      dependencyMap = config(1410).getEffectiveCustomTypingIndicatorAnimation(config);
      const obj = config(1410);
      if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
        emojisKey = tmp2(1410).getCustomTypingIndicatorEmojisKey(config.emojis);
        const items = [tmp.emojiRow];
        if (null == size) {
          let PX_4 = size(587).space.PX_4;
        } else {
          PX_4 = size / 4;
        }
        const obj3 = { style: null, children: null };
        const obj4 = { gap: PX_4 };
        items[1] = obj4;
        obj3.style = items;
        const emojis = config.emojis;
        obj3.children = emojis.map((emoji, index) =>
          jsx(
            CustomTypingIndicatorAnimatedEmojiDefault,
            { emoji, emojisKey, index, emojiCount: config.emojis.length, animation, size },
            index,
          ),
        );
        return <emojisKey style={null}>{null}</emojisKey>;
      } else {
        return jsx(tmp2(1200).Ellipsis, {});
      }
      obj2 = config(1410);
    };
