// === Module 8304: transformReactions ===

// Module 8304 (transformReactions)
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ReactionUtils from "ReactionUtils" /* 4476 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4482 */;
import getAccessibilityLabelOrCheapFallbackUnsafe from "getAccessibilityLabelOrCheapFallbackUnsafe" /* 8299 */;
import EmojiColorUtils from "EmojiColorUtils" /* 8305 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  ({ reactions, animateEmoji: require } = arg0);
  return reactions.flatMap((emoji) => {
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
      let animated = closure_1_0;
      if (closure_1_0) {
        animated = emoji.animated;
      }
      if (null == emoji.id) {
        let uRL = EmojiUtilsDefault.getURL(emoji.name);
      } else {
        const obj2 = { id: emoji.id, animated, size: 48 };
        uRL = AvatarUtilsDefault.getEmojiURL(obj2);
      }
      const obj5 = {
        expensive() {
            return ReactionUtils.getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
          },
        cheap: null
      };
      let str = emoji.name;
      if (str == null) {
        str = "";
      }
      obj5.cheap = str;
      let combined = null;
      const accessibilityLabelOrCheapFallbackUnsafe = getAccessibilityLabelOrCheapFallbackUnsafe.getAccessibilityLabelOrCheapFallbackUnsafe(obj5);
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = "" + emoji.id;
      }
      const obj6 = {};
      const merged1 = Object.assign(merged);
      const obj7 = {};
      const merged2 = Object.assign(emoji);
      obj7.id = combined;
      obj7.src = uRL;
      obj7.displayName = accessibilityLabelOrCheapFallbackUnsafe;
      obj7.animated = animated;
      obj6.emoji = obj7;
      const _Array = Array;
      if (Array.isArray(obj6.burst_colors)) {
        if (obj6.burst_colors.length > 0) {
          const obj8 = { colors: obj6.burst_colors, shouldProcessMobileColors: PlatformUtils.isIOS() };
          obj6.themedBurstColors = EmojiColorUtils.buildPlatformedThemedEmojiColorPalette(obj8);
          const tmp8Result = PlatformUtils;
        }
      }
      return obj6;
    }
  }).map((burst_count) => {
    burst_count = burst_count.burst_count;
    const merged = Object.assign(burst_count, Object.assign({ burst_count: 0 }));
    let num = burst_count;
    if (null === burst_count) {
      const obj2 = { burst_count };
      const merged1 = Object.assign(merged);
      const _HermesInternal = HermesInternal;
      SentryUtilsDefault.captureMessage("Null burst_count while transforming reaction: " + obj2);
      num = 0;
    }
    const obj3 = {};
    const merged2 = Object.assign(merged);
    obj3.burst_count = num;
    return obj3;
  });
};