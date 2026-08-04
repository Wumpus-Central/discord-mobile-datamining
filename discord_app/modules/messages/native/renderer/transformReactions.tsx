const result = require("getAvatarURL").fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  let reactions;
  let require;
  ({ reactions, animateEmoji: require } = arg0);
  let closure_1;
  closure_1 = require(7871) /* apexExperiment */.shouldSkipAccessibilityLabels();
  let obj = require(7871) /* apexExperiment */;
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
        let obj2 = callback(outer1_2[1]);
        let uRL = obj2.getURL(emoji.name);
      } else {
        let obj = callback(outer1_2[2]);
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
        const obj4 = outer1_0(outer1_2[3]);
        accessibleEmojiDisplayName = obj4.getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
      }
      let combined = null;
      if (null != emoji.id) {
        const _HermesInternal = HermesInternal;
        combined = "" + emoji.id;
      }
      obj = {};
      const merged1 = Object.assign(merged);
      const obj1 = {};
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
          obj2[1] = outer1_0(outer1_2[5]).isIOS();
          obj.themedBurstColors = outer1_0(outer1_2[4]).buildPlatformedThemedEmojiColorPalette(obj2);
          const obj8 = outer1_0(outer1_2[5]);
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