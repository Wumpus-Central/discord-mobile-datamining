// === Module 11595: CustomTypingIndicatorGlyph ===

// Module 11595 (CustomTypingIndicatorGlyph)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 11596 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let config, dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  let animation;
  let tmp5;
  const obj = config(576);
  const cResult = obj.c(19);
  config = config.config;
  size = config.size;
  const tmp4 = closure_5();
  if (cResult[0] !== config) {
    const tmpResult = config(1398);
    const effectiveCustomTypingIndicatorAnimation = tmpResult.getEffectiveCustomTypingIndicatorAnimation(config);
    cResult[0] = config;
    cResult[1] = effectiveCustomTypingIndicatorAnimation;
    tmp5 = effectiveCustomTypingIndicatorAnimation;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmpResult2 = config(1398);
  if (tmpResult2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let PX_4;
    let tmp14;
    if (null == size) {
      PX_4 = size(587).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    if (cResult[3] !== PX_4) {
      const obj2 = { gap: PX_4 };
      cResult[3] = PX_4;
      cResult[4] = obj2;
      tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === tmp4.emojiRow) {
      let tmp15;
      let tmp16;
      if (cResult[6] === tmp14) {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === config.emojis) {
          if (cResult[10] === size) {
            tmp16 = cResult[11];
          }
          if (cResult[16] === tmp15) {
            let tmp19;
            if (cResult[17] === tmp16) {
              tmp19 = cResult[18];
            }
            return tmp19;
          }
          class C {
            constructor(arg0, arg1) {
              obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
              return jsx(closure_1(closure_2[9]), obj, arg1);
            }
          }
          const tmp21 = <View style={tmp15}>{tmp16}</View>;
          cResult[16] = tmp15;
          cResult[17] = tmp16;
          cResult[18] = tmp21;
          tmp19 = tmp21;
        }
      }
      if (cResult[12] === tmp5) {
        if (cResult[13] === config.emojis.length) {
          let tmp17;
          if (cResult[14] === size) {
            tmp17 = cResult[15];
          }
          const emojis = config.emojis;
          const mapped = emojis.map(tmp17);
          class C {
            constructor(arg0, arg1) {
              obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
              return jsx(closure_1(closure_2[9]), obj, arg1);
            }
          }
          cResult[8] = tmp5;
          cResult[9] = config.emojis;
          cResult[10] = size;
          cResult[11] = mapped;
          tmp16 = mapped;
        }
      }
      class C {
        constructor(arg0, arg1) {
          obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
          return jsx(closure_1(closure_2[9]), obj, arg1);
        }
      }
      cResult[12] = tmp5;
      cResult[13] = config.emojis.length;
      cResult[14] = size;
      cResult[15] = C;
      tmp17 = C;
    }
    const items = [tmp4.emojiRow, tmp14];
    cResult[5] = tmp4.emojiRow;
    cResult[6] = tmp14;
    cResult[7] = items;
    tmp15 = items;
  } else {
    let tmp9;
    const _Symbol = Symbol;
    class C {
      constructor(arg0, arg1) {
        obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
        return jsx(closure_1(closure_2[9]), obj, arg1);
      }
    }
    if (tmp7 === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = jsx(config(1188).Ellipsis, {});
      class C {
        constructor(arg0, arg1) {
          obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
          return jsx(closure_1(closure_2[9]), obj, arg1);
        }
      }
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[2];
    }
    return tmp9;
  }
}) : ((config) => {
  let animation;
  let tmp4Result;
  config = config.config;
  size = config.size;
  const tmp = closure_5();
  const obj = config(1398);
  dependencyMap = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const obj2 = config(1398);
  const tmp2 = config;
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    let PX_4;
    const items = [tmp.emojiRow, ];
    if (null == size) {
      PX_4 = size(587).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    const obj4 = { gap: PX_4 };
    items[1] = obj4;
    const emojis = config.emojis;
    tmp4Result = <View style={items}>{emojis.map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, index, emojiCount: config.emojis.length, animation, size }, index))}</View>;
  } else {
    tmp4Result = jsx(tmp2(1188).Ellipsis, {});
  }
  return tmp4Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default tmp3;