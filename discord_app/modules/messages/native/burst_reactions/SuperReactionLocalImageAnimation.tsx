// discord_app/modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import _generateAnimationSource from "BurstReactionEffectUtils.tsx";
import FadeOutLottieAnimationDefault from "FadeOutLottieAnimation.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/messages/native/burst_reactions/SuperReactionLocalImageAnimation.tsx",
);

export default function SuperReactionLocalImageAnimation(arg0) {
  let tmp = null;
  ({ localImageSource, animationSource } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let obj = _generateAnimationSource;
  const superReactionAnimationSourceFromLocalImage = obj.useSuperReactionAnimationSourceFromLocalImage({
    animationSource,
    localImageSource,
  });
  if (null != superReactionAnimationSourceFromLocalImage) {
    obj = { loop: true, source: null };
    obj[1] = superReactionAnimationSourceFromLocalImage;
    const merged1 = Object.assign(merged);
    tmp = jsx(FadeOutLottieAnimationDefault, { loop: true, source: null });
    const tmp7 = FadeOutLottieAnimationDefault;
  }
  return tmp;
}
