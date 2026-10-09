// === Module 7949: BurstReactionAnimation ===

// Module 7949 (BurstReactionAnimation)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7907 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
let closure_3 = ["channelId", "messageId", "emoji", "isFullscreen", "onComplete", "withFadeOut"];
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ content: { width: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BurstReactionAnimation(arg0) {
  const cResult = c.c(25);
  if (cResult[0] !== arg0) {
    ({ channelId, messageId, emoji, isFullscreen, onComplete, withFadeOut } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = channelId;
    cResult[2] = emoji;
    cResult[3] = isFullscreen;
    cResult[4] = messageId;
    cResult[5] = onComplete;
    cResult[6] = tmp13;
    cResult[7] = withFadeOut;
    let tmp9 = tmp13;
    let tmp8 = onComplete;
    let tmp7 = messageId;
    let tmp6 = isFullscreen;
    let tmp5 = emoji;
    let tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
  }
  const tmp15 = closure_7();
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp7) {
          let tmp16 = cResult[12];
        }
        const burstReactionAnimationSource = burst_reactions_BurstReactionEffectUtils.useBurstReactionAnimationSource(tmp16);
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          class C {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[13] = items;
          cResult[14] = C;
        }
        initialize;
        if (null == burstReactionAnimationSource) {
          return null;
        } else {
          const tmp25 = importDefault(tmp14 ? 7950 : 6112);
          if (cResult[15] === tmp8) {
            if (cResult[16] === tmp14) {
              let num13 = 1.2;
              if (tmp23) {
                num13 = 0.5;
              }
              class C {
                constructor() {
                  return closure_1_5.useReducedMotion;
                }
              }
              const obj2 = { style: tmp15.content, loop: false, speed: num13 };
              const merged = Object.assign(tmp9);
              const merged1 = Object.assign(tmp26);
              obj2.source = burstReactionAnimationSource;
              const tmp36 = <tmp25 style={tmp15.content} loop={false} speed={num13} />;
              cResult[18] = tmp25;
              cResult[19] = burstReactionAnimationSource;
              cResult[20] = cResult[17];
              cResult[21] = tmp9;
              cResult[22] = tmp15.content;
              cResult[23] = num13;
              cResult[24] = tmp36;
            }
          }
          if (tmp14) {
            const obj3 = { onComplete: tmp8 };
            let obj4 = obj3;
          } else {
            obj4 = { onAnimationFinish: tmp8 };
          }
          class C {
            constructor() {
              return closure_1_5.useReducedMotion;
            }
          }
          cResult[15] = tmp8;
          cResult[16] = tmp14;
          cResult[17] = obj4;
        }
        const tmpResult = burst_reactions_BurstReactionEffectUtils;
      }
    }
  }
  const obj5 = { emoji: tmp5, messageId: tmp7, channelId: tmp4, isFullscreen: tmp6 };
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp6;
  cResult[11] = tmp7;
  cResult[12] = obj5;
  tmp16 = obj5;
}) : (function BurstReactionAnimation(arg0) {
  ({ onComplete, withFadeOut } = arg0);
  ({ channelId, messageId, emoji, isFullscreen } = arg0);
  if (withFadeOut === undefined) {
    withFadeOut = true;
  }
  const merged = Object.assign(arg0, Object.assign({ channelId: 0, messageId: 0, emoji: 0, isFullscreen: 0, onComplete: 0, withFadeOut: 0 }));
  const tmp2 = closure_7();
  const burstReactionAnimationSource = burst_reactions_BurstReactionEffectUtils.useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  initialize;
  [][0] = AccessibilityStore;
  if (null == burstReactionAnimationSource) {
    return null;
  } else {
    if (withFadeOut) {
      const obj2 = { onComplete };
      let obj3 = obj2;
    } else {
      obj3 = { onAnimationFinish: onComplete };
    }
    const obj4 = { style: tmp2.content, loop: false, speed: null };
    let num = 1.2;
    if (tmp6) {
      num = 0.5;
    }
    obj4.speed = num;
    const merged1 = Object.assign(merged);
    const merged2 = Object.assign(obj3);
    obj4.source = burstReactionAnimationSource;
    return jsx(importDefault(withFadeOut ? 7950 : 6112), { style: tmp2.content, loop: false, speed: null });
  }
});