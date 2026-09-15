// discord_app/modules/messages/native/burst_reactions/BurstReactionAnimation.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import burst_reactions_BurstReactionEffectUtils from "BurstReactionEffectUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let closure_5 = createStyles.createStyles({ content: { width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/burst_reactions/BurstReactionAnimation.tsx");

export default function BurstReactionAnimation(arg0) {
  ({ onComplete, withFadeOut } = arg0);
  ({ channelId, messageId, emoji, isFullscreen } = arg0);
  if (withFadeOut === undefined) {
    withFadeOut = true;
  }
  const merged = Object.assign(
    arg0,
    Object.assign({ channelId: 0, messageId: 0, emoji: 0, isFullscreen: 0, onComplete: 0, withFadeOut: 0 }),
  );
  const tmp2 = closure_5();
  const burstReactionAnimationSource = burst_reactions_BurstReactionEffectUtils.useBurstReactionAnimationSource({
    emoji,
    messageId,
    channelId,
    isFullscreen,
  });
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
    return jsx(importDefault(withFadeOut ? 7932 : 5614), { style: tmp2.content, loop: false, speed: null });
  }
}
