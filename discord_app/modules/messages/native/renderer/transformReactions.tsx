// discord_app/modules/messages/native/renderer/transformReactions.tsx
import set from "../../../../../_runtime/00002_set.js";
import apexExperiment from "../../../a11y/native/AccessibilityLabelOptimizationExperiment.tsx";

const result = set.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  ({ reactions, animateEmoji: require } = arg0);
  closure_1 = undefined;
  closure_1 = apexExperiment.shouldSkipAccessibilityLabels();
  let obj = apexExperiment;
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
      let animated = closure_0;
      if (closure_0) {
        animated = emoji.animated;
      }
      if (null == emoji.id) {
        let obj2 = callback(closure_1_2[1]);
        let uRL = obj2.getURL(emoji.name);
      } else {
        let obj = callback(closure_1_2[2]);
        obj = { id: null, animated: null, size: 48 };
        obj[0] = emoji.id;
        obj[1] = animated;
        uRL = obj.getEmojiURL(obj);
      }
      if (callback) {
        let str = emoji.name;
        if (str == null) {
          str = "";
        }
        let accessibleEmojiDisplayName = str;
      } else {
        const obj4 = closure_1_0(closure_1_2[3]);
        accessibleEmojiDisplayName = obj4.getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
      }
      let combined = null;
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = "" + emoji.id;
      }
      obj = {};
      const merged1 = Object.assign(merged);
      obj1 = {};
      const merged2 = Object.assign(emoji);
      obj1.id = combined;
      obj1.src = uRL;
      obj1.displayName = accessibleEmojiDisplayName;
      obj1.animated = animated;
      obj.emoji = obj1;
      const _Array = Array;
      if (Array.isArray(obj.burst_colors)) {
        if (obj.burst_colors.length > 0) {
          obj2 = { colors: null, shouldProcessMobileColors: null };
          obj2[0] = obj.burst_colors;
          obj2[1] = closure_1_0(closure_1_2[5]).isIOS();
          obj.themedBurstColors = closure_1_0(closure_1_2[4]).buildPlatformedThemedEmojiColorPalette(obj2);
          const obj8 = closure_1_0(closure_1_2[5]);
        }
      }
      return obj;
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