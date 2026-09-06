// === Module 11144: SuperReactionLocalImageAnimation ===

// Module 11144 (SuperReactionLocalImageAnimation)
import burst_reactions_BurstReactionEffectUtils from "burst_reactions/BurstReactionEffectUtils" /* 7784 */;
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation" /* 7827 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  const merged = Object.assign(arg0, Object.assign({ localImageSource: 0, animationSource: 0 }));
  let obj = burst_reactions_BurstReactionEffectUtils;
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    obj = { loop: true, source: superReactionAnimationSourceFromLocalImage };
    const merged1 = Object.assign(merged);
    tmp = jsx(FadeOutLottieAnimationDefault, { loop: true, source: superReactionAnimationSourceFromLocalImage });
  }
  return tmp;
};