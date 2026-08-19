// === Module 8181: transformReactions ===

// Module 8181 (transformReactions)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import MAX_REACTIONS from "MAX_REACTIONS" /* 4032 */;
import apexExperiment from "apexExperiment" /* 8177 */;
import buildPlatformedThemedEmojiColorPalette from "buildPlatformedThemedEmojiColorPalette" /* 8182 */;

const result = obj132.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  ({ reactions, animateEmoji: require } = arg0);
  closure_1 = apexExperiment.shouldSkipAccessibilityLabels();
  return reactions.flatMap((item, index) => {
    const emoji = item.emoji;
    const merged = Object.assign(item, Object.create(null));
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
        let obj2 = callback(dependencyMap[1]);
        let uRL = obj2.getURL(emoji.name);
      } else {
        callback(dependencyMap[2]);
        let obj = { id: null, animated: null, size: 48 };
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
        const obj4 = MAX_REACTIONS;
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
          obj2[1] = obj1322.isIOS();
          obj.themedBurstColors = buildPlatformedThemedEmojiColorPalette.buildPlatformedThemedEmojiColorPalette(obj2);
        }
      }
      return obj;
    }
  }).map((item, index) => {
    const burst_count = item.burst_count;
    const merged = Object.assign(item, Object.create(null));
    let num = burst_count;
    if (null === burst_count) {
      callback(table[6]);
      let obj = { burst_count: null };
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