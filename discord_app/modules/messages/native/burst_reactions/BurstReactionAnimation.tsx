// === Module 7611: BurstReactionAnimation ===

// Module 7611 (BurstReactionAnimation)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import _generateAnimationSource from "_generateAnimationSource" /* 7569 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
noopAll;
let closure_5 = createCacheKey.createStyles({ content: { width: "100%" } });
const result = require("set").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default function BurstReactionAnimation(arg0) {
  ({ onComplete, withFadeOut } = arg0);
  ({ channelId, messageId, emoji, isFullscreen } = arg0);
  if (withFadeOut === undefined) {
    withFadeOut = true;
  }
  const merged = Object.assign(arg0, Object.create(null));
  let obj = _generateAnimationSource;
  const burstReactionAnimationSource = obj.useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  initialize;
  [][0] = closure_3;
  if (null == burstReactionAnimationSource) {
    return null;
  } else {
    if (withFadeOut) {
      obj = { onComplete: null };
      obj[0] = onComplete;
    } else {
      obj = { onAnimationFinish: null };
      obj[0] = onComplete;
    }
    obj1 = { style: null, loop: false, speed: null };
    obj1[0] = tmp2.content;
    let num = 1.2;
    if (tmp6) {
      num = 0.5;
    }
    obj1[2] = num;
    const merged1 = Object.assign(merged);
    const merged2 = Object.assign(obj);
    obj1.source = burstReactionAnimationSource;
    return jsx(importDefault(withFadeOut ? 7612 : 7168), { style: null, loop: false, speed: null });
  }
  tmp2 = callback();
};