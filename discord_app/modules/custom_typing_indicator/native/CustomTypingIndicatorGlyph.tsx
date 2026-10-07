// === Module 11608: CustomTypingIndicatorGlyph ===

// Module 11608 (CustomTypingIndicatorGlyph)
import CustomTypingIndicatorAnimatedEmojiDefault from "CustomTypingIndicatorAnimatedEmoji" /* 11609 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles({ emojiRow: { flexDirection: "row", alignItems: "center" } });
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((config) => {
  const cResult = emojis(576).c(19);
  emojis = config.config;
  const size = config.size;
  const tmp4 = closure_5();
  if (cResult[0] !== emojis) {
    const effectiveCustomTypingIndicatorAnimation = tmp(1398).getEffectiveCustomTypingIndicatorAnimation(emojis);
    cResult[0] = emojis;
    cResult[1] = effectiveCustomTypingIndicatorAnimation;
    let tmp5 = effectiveCustomTypingIndicatorAnimation;
    const tmpResult = tmp(1398);
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const obj = emojis(576);
  if (tmpResult2.hasCustomTypingIndicatorEmojis(emojis.emojis)) {
    if (null == size) {
      let PX_4 = size(587).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    if (cResult[3] !== PX_4) {
      const obj2 = { gap: PX_4 };
      cResult[3] = PX_4;
      cResult[4] = obj2;
      let tmp14 = obj2;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === tmp4.emojiRow) {
      if (cResult[6] === tmp14) {
        let tmp15 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === emojis.emojis) {
          if (cResult[10] === size) {
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp16) {
                let tmp20 = cResult[18];
              }
              return tmp20;
            }
            class C {
              constructor(arg0, arg1) {
                obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
                return jsx(closure_1(closure_2[9]), obj, arg1);
              }
            }
            const obj3 = { style: tmp15, children: cResult[11] };
            const tmp22 = <View style={tmp15}>{cResult[11]}</View>;
            cResult[16] = tmp15;
            cResult[17] = cResult[11];
            cResult[18] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
      if (cResult[12] === tmp5) {
        if (cResult[13] === emojis.emojis.length) {
          if (cResult[14] === size) {
            let tmp17 = cResult[15];
          }
          const emojis1 = emojis.emojis;
          const mapped = emojis1.map(tmp17);
          class C {
            constructor(arg0, arg1) {
              obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
              return jsx(closure_1(closure_2[9]), obj, arg1);
            }
          }
          cResult[8] = tmp5;
          emojis = emojis.emojis;
          cResult[9] = emojis;
          cResult[10] = size;
          cResult[11] = mapped;
        }
      }
      class C {
        constructor(arg0, arg1) {
          obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
          return jsx(closure_1(closure_2[9]), obj, arg1);
        }
      }
      cResult[12] = tmp5;
      cResult[13] = emojis.emojis.length;
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
    const _Symbol = Symbol;
    class C {
      constructor(arg0, arg1) {
        obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
        return jsx(closure_1(closure_2[9]), obj, arg1);
      }
    }
    if (tmp7 === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0, arg1) {
          obj = { emoji: config, index: arg1, emojiCount: config.emojis.length, animation: closure_2, size };
          return jsx(closure_1(closure_2[9]), obj, arg1);
        }
      }
      let tmp9 = jsx(tmp(1188).Ellipsis, {});
      const tmp11 = jsx(tmp(1188).Ellipsis, {});
    } else {
      tmp9 = cResult[2];
    }
    return tmp9;
  }
  tmpResult2 = emojis(1398);
}) : ((config) => {
  let map = config.config;
  const size = config.size;
  dependencyMap = undefined;
  let obj = dependencyMap;
  const tmp = closure_5();
  const tmp2 = map;
  dependencyMap = map(1398).getEffectiveCustomTypingIndicatorAnimation(map);
  const obj2 = map(1398);
  if (obj3.hasCustomTypingIndicatorEmojis(map.emojis)) {
    let items = [tmp.emojiRow, ];
    if (null == size) {
      let PX_4 = size(587).space.PX_4;
    } else {
      PX_4 = size / 4;
    }
    obj = { style: null, children: null };
    const obj4 = { gap: PX_4 };
    items[1] = obj4;
    obj.style = items;
    items = map.emojis;
    map = items.map;
    obj.children = map((emoji, index) => jsx(CustomTypingIndicatorAnimatedEmojiDefault, { emoji, index, emojiCount: map.emojis.length, animation, size }, index));
    <View style={null}>{null}</View>;
  } else {
    return jsx(tmp2(1188).Ellipsis, {});
  }
  obj3 = map(1398);
});