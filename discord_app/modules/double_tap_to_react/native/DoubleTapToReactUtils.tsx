// discord_app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
import ReactionUtils from "../../reactions/ReactionUtils.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
const isContentShown = fn(1950).isContentShown;
const NITRO_UPSELL_ALERT_KEY = fn(8076).NITRO_UPSELL_ALERT_KEY;
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const EmojiConstants = fn(1375);
({ EmojiDisabledReasons: closure_8, EmojiIntention: closure_9 } = EmojiConstants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export const getFallbackDoubleTapDisambiguatedEmoji = function getFallbackDoubleTapDisambiguatedEmoji() {
  let byName = UnicodeEmojisDefault.getByName("heart");
  if (byName == null) {
    byName = null;
  }
  return byName;
};
export const reactionEmojiFromSettingsValue = function reactionEmojiFromSettingsValue(arg0) {
  ({ emojiName, emojiId, animated } = arg0);
  let tmp;
  if (null != emojiId) {
    if ("0" !== emojiId) {
      tmp = emojiId;
    }
  }
  let str2;
  if (null != emojiName) {
    if ("" !== emojiName) {
      let result = emojiName;
      if (null == tmp) {
        result = UnicodeEmojisDefault.convertNameToSurrogate(emojiName);
      }
      str2 = result;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj2 = { name: str2, id: tmp, animated: null };
  if (animated == null) {
    animated = false;
  }
  obj2.animated = animated;
  return obj2;
};
export const disambiguatedEmojiFromSettingsValue = function disambiguatedEmojiFromSettingsValue(setting) {
  ({ emojiName, emojiId } = setting);
  let tmp;
  if (null != emojiId) {
    if ("0" !== emojiId) {
      tmp = emojiId;
    }
  }
  let customEmojiById = null;
  if (null != tmp) {
    customEmojiById = EmojiStore.getCustomEmojiById(tmp);
  }
  if (null == customEmojiById) {
    let byName = null;
    if (null != emojiName) {
      byName = UnicodeEmojisDefault.getByName(emojiName);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
};
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  const DoubleTapReactionEmoji = obj5(1936).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    if (tmpResult.canReactToMessage(message, channel)) {
      let obj = setting;
      if (setting == null) {
        obj = {};
      }
      ({ emojiName, emojiId, animated } = obj);
      let tmp5;
      if (null != emojiId) {
        if ("0" !== emojiId) {
          tmp5 = emojiId;
        }
      }
      let str2;
      if (null != emojiName) {
        if ("" !== emojiName) {
          let result = emojiName;
          if (null == tmp5) {
            result = UnicodeEmojisDefault.convertNameToSurrogate(emojiName);
          }
          str2 = result;
        }
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { name: str2, id: tmp5, animated: null };
      if (animated == null) {
        animated = false;
      }
      obj3.animated = animated;
      obj5 = obj3;
      if (null == setting) {
        const result1 = UnicodeEmojisDefault.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj5 = { name: result1, id: "PX_16", animated: "2026-03-icymi-staff-debugging-utility" };
          tmp11 = obj5;
        }
        if (null != tmp11) {
          obj5 = tmp11;
          let flag = true;
          let tmp8 = tmp11;
        }
      } else {
        flag = false;
        tmp8 = obj3;
        if (null == obj3.id) {
          flag = false;
          tmp8 = obj3;
        }
      }
      const reactions = message.reactions;
      if (reactions.some((emoji) => ReactionUtils.emojiEquals(emoji.emoji, obj5) && emoji.me)) {
        const result2 = tmp(4607).triggerHapticFeedback(tmp(4607).HapticFeedbackTypes.IMPACT_LIGHT);
        const tmpResult10 = tmp(4607);
        const obj6 = {
          channelId: channel.id,
          messageId: message.id,
          emoji: tmp8,
          location: tmp(7869).ReactionLocations.DOUBLE_TAP,
        };
        tmp(7869).removeReaction(obj6);
        const tmpResult11 = tmp(7869);
      } else {
        if (flag) {
          let byName = UnicodeEmojisDefault.getByName("heart");
          if (byName == null) {
            byName = null;
          }
          let customEmojiById = byName;
        } else {
          let obj9 = setting;
          if (setting == null) {
            obj9 = {};
          }
          ({ emojiName: emojiName2, emojiId: emojiId2 } = obj9);
          let tmp12;
          if (null != emojiId2) {
            if ("0" !== emojiId2) {
              tmp12 = emojiId2;
            }
          }
          customEmojiById = null;
          if (null != tmp12) {
            customEmojiById = EmojiStore.getCustomEmojiById(tmp12);
          }
          if (null == customEmojiById) {
            let byName1 = null;
            if (null != emojiName2) {
              byName1 = UnicodeEmojisDefault.getByName(emojiName2);
            }
            customEmojiById = byName1;
          }
        }
        if (null != customEmojiById) {
          if (null != customEmojiById) {
            const obj10 = { emoji: customEmojiById, channel, intention: constants2.REACTION };
            const emojiUnavailableReason = EmojiUtilsDefault.getEmojiUnavailableReason(obj10);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = noop.lazy(() => obj5(paths[16])(paths[15], paths.paths));
              const obj11 = { emojiName: customEmojiById.name };
              tmp(4985).openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={customEmojiById.name} />);
              const tmpResult12 = tmp(4985);
            } else if (null != emojiUnavailableReason) {
              const obj13 = { emojiName: customEmojiById.name, reason: emojiUnavailableReason };
              const result3 = tmp(8079).showDoubleTapErrorToast(obj13);
              const tmpResult13 = tmp(8079);
            }
          }
          const result4 = tmp(4607).triggerHapticFeedback(tmp(4607).HapticFeedbackTypes.IMPACT_LIGHT);
          const tmpResult15 = tmp(7869);
          const id = channel.id;
          tmpResult15.addReaction(id, message.id, tmp8, tmp(7869).ReactionLocations.DOUBLE_TAP);
          const tmpResult14 = tmp(4607);
          const obj14 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const result5 = tmp(4460).UNSAFE_markDismissibleContentAsDismissed(
            tmp(1944).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
            obj14,
          );
          if (isContentShown(tmp(1944).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            const obj15 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION, forceTrack: true };
            const result6 = tmp(4460).UNSAFE_markDismissibleContentAsDismissed(
              tmp(1944).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL,
              obj15,
            );
            const tmpResult17 = tmp(4460);
          }
          const tmpResult16 = tmp(4460);
        } else if (!flag) {
          let emojiName1;
          if (setting != null) {
            emojiName1 = setting.emojiName;
          }
          const obj16 = { emojiName: emojiName1 };
          const result7 = tmp(8079).showDoubleTapErrorToast(obj16);
          const tmpResult18 = tmp(8079);
        }
      }
    }
    tmpResult = tmp(8077);
  }
};
export const areEmojisEqual = function areEmojisEqual(customEmojiById, emoji) {
  if (null == customEmojiById.id) {
    if (null == emoji.id) {
      let tmp = customEmojiById.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = customEmojiById.id === emoji.id && customEmojiById.name === emoji.name;
};
