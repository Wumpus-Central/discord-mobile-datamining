// === Module 9122: SuperReactionLocalImageAnimation ===

// Module 9122 (SuperReactionLocalImageAnimation)
import noopAll from "noop" /* 19 */;
import _generateAnimationSource from "_generateAnimationSource" /* 7528 */;
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation" /* 7571 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx");

export default function SuperReactionLocalImageAnimation(arg0) {
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = _generateAnimationSource;
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({ animationSource, localImageSource });
  if (null != superReactionAnimationSourceFromLocalImage) {
    obj = { loop: true, source: null };
    obj[1] = superReactionAnimationSourceFromLocalImage;
    const merged1 = Object.assign(merged);
    tmp = jsx(FadeOutLottieAnimationDefault, { loop: true, source: null });
    const tmp7 = FadeOutLottieAnimationDefault;
  }
  return tmp;
};