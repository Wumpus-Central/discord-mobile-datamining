// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimation.tsx
import "noop";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ content: { width: "100%" } });
const result = require("jsxProd").fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default function BurstReactionAnimation(arg0) {
  let channelId;
  let emoji;
  let isFullscreen;
  let messageId;
  let onComplete;
  let withFadeOut;
  ({ onComplete, withFadeOut } = arg0);
  ({ channelId, messageId, emoji, isFullscreen } = arg0);
  if (withFadeOut === undefined) {
    withFadeOut = true;
  }
  const merged = Object.assign(arg0, Object.create(null));
  let obj = require(6099) /* _generateAnimationSource */;
  const burstReactionAnimationSource = obj.useBurstReactionAnimationSource({ emoji, messageId, channelId, isFullscreen });
  require(589) /* initialize */;
  [][0] = maybeApplyNoTextColorForLightCustomTheme;
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
    const obj1 = { style: null, loop: false, speed: null };
    obj1[0] = tmp2.content;
    let num = 1.2;
    if (tmp6) {
      num = 0.5;
    }
    obj1[2] = num;
    const merged1 = Object.assign(merged);
    const merged2 = Object.assign(obj);
    obj1.source = burstReactionAnimationSource;
    return jsx(importDefault(withFadeOut ? 6142 : 5510), { style: null, loop: false, speed: null });
  }
  tmp2 = callback();
};