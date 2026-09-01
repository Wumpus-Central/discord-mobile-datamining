// === Module 7865: transformReactions ===

// Module 7865 (transformReactions)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  ({ reactions, animateEmoji: require } = arg0);
  return reactions.flatMap((emoji) => {
    emoji = emoji.emoji;
    const merged = Object.assign(emoji, Object.create(null));
    const count_details = merged.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    if (null != vote) {
      return [];
    } else {
      let animated = emoji;
      if (emoji) {
        animated = emoji.animated;
      }
      if (null == emoji.id) {
        let obj2 = closure_1_1(closure_1_2[0]);
        let uRL = obj2.getURL(emoji.name);
        let tmp4 = closure_1_2;
      } else {
        tmp4 = closure_1_2;
        let obj = closure_1_1(closure_1_2[1]);
        obj = { id: null, animated: null, size: 48 };
        obj[0] = emoji.id;
        obj[1] = animated;
        uRL = obj.getEmojiURL(obj);
      }
      let obj3 = closure_1_0(tmp4[2]);
      obj = { expensive: null, cheap: null };
      obj[0] = function expensive() {
        return emoji(closure_1_2[3]).getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
      };
      let str = emoji.name;
      if (str == null) {
        str = "";
      }
      obj[1] = str;
      let combined = null;
      const accessibilityLabelOrCheapFallbackUnsafe = obj3.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = "" + emoji.id;
      }
      obj1 = {};
      const merged1 = Object.assign(merged);
      obj2 = {};
      const merged2 = Object.assign(emoji);
      obj2.id = combined;
      obj2.src = uRL;
      obj2.displayName = accessibilityLabelOrCheapFallbackUnsafe;
      obj2.animated = animated;
      obj1.emoji = obj2;
      const _Array = Array;
      if (Array.isArray(obj1.burst_colors)) {
        if (obj1.burst_colors.length > 0) {
          obj3 = { colors: null, shouldProcessMobileColors: null };
          obj3[0] = obj1.burst_colors;
          obj3[1] = tmp8(tmp4[5]).isIOS();
          obj1.themedBurstColors = tmp8(tmp4[4]).buildPlatformedThemedEmojiColorPalette(obj3);
          const tmp8Result = tmp8(tmp4[5]);
        }
      }
      return obj1;
    }
  }).map((burst_count) => {
    burst_count = burst_count.burst_count;
    const merged = Object.assign(burst_count, Object.create(null));
    let num = burst_count;
    if (null === burst_count) {
      let obj = callback(table[6]);
      obj = { burst_count: null };
      obj[0] = burst_count;
      const merged1 = Object.assign(merged);
      const _HermesInternal = HermesInternal;
      obj.captureMessage("Null burst_count while transforming reaction: " + obj);
      num = 0;
    }
    obj = {};
    const merged2 = Object.assign(merged);
    obj.burst_count = num;
    return obj;
  });
};