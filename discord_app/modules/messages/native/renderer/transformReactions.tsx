// === Module 7615: transformReactions ===

// Module 7615 (transformReactions)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4527 */;
import getAccessibilityLabelOrCheapFallbackUnsafe2 from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 7610 */;
import EmojiColorUtils from "EmojiColorUtils" /* 7616 */;
import size from "module_2" /* 2 */;

let burst_count, emoji;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  let reactions;
  ({ reactions, animateEmoji: require } = arg0);
  const flatMapResult = reactions.flatMap((emoji) => {
    let obj6;
    let str;
    let tmp9Result;
    emoji = emoji.emoji;
    const merged = Object.assign(emoji, Object.assign({ emoji: 0 }));
    const count_details = merged.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    if (null != vote) {
      return [];
    } else {
      let uRL;
      if (null == emoji.id) {
        const obj3 = EmojiUtilsDefault;
        uRL = obj3.getURL(emoji.name);
      } else {
        let obj = AvatarUtilsDefault;
        const obj2 = { id: emoji.id, animated: require && emoji.animated, size: 48 };
        uRL = obj.getEmojiURL(obj2);
      }
      const obj4 = {
        expensive() {
            const obj = closure_2_0(closure_2_2[3]);
            return obj.getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
          },
        cheap: str
      };
      str = emoji.name;
      const getAccessibilityLabelOrCheapFallbackUnsafe = getAccessibilityLabelOrCheapFallbackUnsafe2.getAccessibilityLabelOrCheapFallbackUnsafe;
      getAccessibilityLabelOrCheapFallbackUnsafe2;
      if (str == null) {
        str = "";
      }
      let combined = null;
      const accessibilityLabelOrCheapFallbackUnsafe = getAccessibilityLabelOrCheapFallbackUnsafe(obj4);
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = "" + emoji.id;
      }
      const obj5 = { emoji: obj6 };
      const merged1 = Object.assign(merged);
      obj6 = { id: combined, src: uRL, displayName: accessibilityLabelOrCheapFallbackUnsafe, animated: require && emoji.animated };
      const merged2 = Object.assign(emoji);
      const _Array = Array;
      if (Array.isArray(obj5.burst_colors)) {
        if (obj5.burst_colors.length > 0) {
          const obj7 = { colors: obj5.burst_colors, shouldProcessMobileColors: tmp9Result.isIOS() };
          const buildPlatformedThemedEmojiColorPalette = EmojiColorUtils.buildPlatformedThemedEmojiColorPalette;
          tmp9Result = PlatformUtils;
          obj5.themedBurstColors = buildPlatformedThemedEmojiColorPalette(obj7);
        }
      }
      return obj5;
    }
  });
  return flatMapResult.map((burst_count) => {
    burst_count = burst_count.burst_count;
    const merged = Object.assign(burst_count, Object.assign({ burst_count: 0 }));
    let num = burst_count;
    if (null === burst_count) {
      const obj = { burst_count };
      const captureMessage = SentryUtilsDefault.captureMessage;
      SentryUtilsDefault;
      const merged1 = Object.assign(merged);
      const _HermesInternal = HermesInternal;
      captureMessage("Null burst_count while transforming reaction: " + obj);
      num = 0;
    }
    const obj2 = { burst_count: num };
    const merged2 = Object.assign(merged);
    return obj2;
  });
};