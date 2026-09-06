// discord_app/modules/messages/native/renderer/transformReactions.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import ReactionUtils from "../../../reactions/ReactionUtils.tsx";
import EmojiUtilsDefault from "../../../../utils/EmojiUtils.tsx";
import getAccessibilityLabelOrCheapFallbackUnsafe from "../../../a11y/native/getAccessibilityLabelOrCheapFallbackUnsafe.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/native/renderer/transformReactions.tsx");

export default function transformReactions(arg0) {
  ({ reactions, animateEmoji: require } = arg0);
  return reactions
    .flatMap((emoji) => {
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
          let obj2 = EmojiUtilsDefault;
          let uRL = obj2.getURL(emoji.name);
        } else {
          let obj = { id: emoji.id, animated, size: 48 };
          uRL = obj.getEmojiURL(obj);
        }
        let obj3 = getAccessibilityLabelOrCheapFallbackUnsafe;
        obj = {
          expensive() {
            return ReactionUtils.getAccessibleEmojiDisplayName(merged.me, merged.count, emoji, merged.burst_count > 0);
          },
          cheap: null,
        };
        let str = emoji.name;
        if (str == null) {
          str = "";
        }
        obj.cheap = str;
        let combined = null;
        const accessibilityLabelOrCheapFallbackUnsafe = obj3.getAccessibilityLabelOrCheapFallbackUnsafe(obj);
        if (null != emoji.id) {
          const _HermesInternal = HermesInternal;
          combined = "" + emoji.id;
        }
        const obj1 = {};
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
            obj3 = { colors: obj1.burst_colors, shouldProcessMobileColors: tmp8(1115).isIOS() };
            obj1.themedBurstColors = tmp8(7957).buildPlatformedThemedEmojiColorPalette(obj3);
            const tmp8Result = tmp8(1115);
          }
        }
        return obj1;
      }
    })
    .map((burst_count) => {
      burst_count = burst_count.burst_count;
      const merged = Object.assign(burst_count, Object.assign({ burst_count: 0 }));
      let num = burst_count;
      if (null === burst_count) {
        let obj = { burst_count };
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
}
