// discord_app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
import ReactionUtils from "../../reactions/ReactionUtils.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";

require = fn;
const isContentShown = fn(1949).isContentShown;
const NITRO_UPSELL_ALERT_KEY = fn(7969).NITRO_UPSELL_ALERT_KEY;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const EmojiConstants = fn(1374);
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
        let obj = UnicodeEmojisDefault;
        result = obj.convertNameToSurrogate(emojiName);
      }
      str2 = result;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  obj = { name: str2, id: tmp, animated: null };
  if (animated == null) {
    animated = false;
  }
  obj.animated = animated;
  return obj;
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
    if (null != tmp2) {
      byName = UnicodeEmojisDefault.getByName(tmp2);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
};
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  const DoubleTapReactionEmoji = obj(1935).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    let tmpResult = tmp(7970);
    if (tmpResult.canReactToMessage(message, channel)) {
      obj = setting;
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
            let obj1 = UnicodeEmojisDefault;
            result = obj1.convertNameToSurrogate(emojiName);
          }
          str2 = result;
        }
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = { name: str2, id: tmp5, animated: null };
      if (animated == null) {
        animated = false;
      }
      obj.animated = animated;
      if (null == setting) {
        let obj3 = UnicodeEmojisDefault;
        const result1 = obj3.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj = { name: result1, id: "PX_16", animated: "2026-05-mana-type-consolidation" };
          tmp11 = obj;
        }
        if (null != tmp11) {
          obj = tmp11;
          let flag = true;
          let tmp8 = tmp11;
        }
      } else {
        flag = false;
        tmp8 = obj;
        if (null == obj.id) {
          flag = false;
          tmp8 = obj;
        }
      }
      const reactions = message.reactions;
      if (
        reactions.some((emoji) => {
          obj = ReactionUtils;
          return obj.emojiEquals(emoji.emoji, obj) && emoji.me;
        })
      ) {
        tmpResult = tmp(4528);
        const result2 = tmpResult.triggerHapticFeedback(tmp(4528).HapticFeedbackTypes.IMPACT_LIGHT);
        obj1 = {
          channelId: channel.id,
          messageId: message.id,
          emoji: tmp8,
          location: tmp(7764).ReactionLocations.DOUBLE_TAP,
        };
        tmp(7764).removeReaction(obj1);
      } else {
        if (flag) {
          let obj7 = UnicodeEmojisDefault;
          let byName = obj7.getByName("heart");
          if (byName == null) {
            byName = null;
          }
          let customEmojiById = byName;
        } else {
          let obj2 = setting;
          if (setting == null) {
            obj2 = {};
          }
          ({ emojiName: emojiName2, emojiId: emojiId2 } = obj2);
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
            if (null != tmp13) {
              let obj6 = UnicodeEmojisDefault;
              byName1 = obj6.getByName(tmp13);
            }
            customEmojiById = byName1;
          }
        }
        if (null != customEmojiById) {
          if (null != customEmojiById) {
            obj3 = { emoji: customEmojiById, channel, intention: constants2.REACTION };
            const emojiUnavailableReason = EmojiUtilsDefault.getEmojiUnavailableReason(obj3);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = noop.lazy(() => obj(paths[16])(paths[15], paths.paths));
              const obj4 = { emojiName: customEmojiById.name };
              tmp(4906).openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={customEmojiById.name} />);
            } else if (null != emojiUnavailableReason) {
              const obj5 = { emojiName: customEmojiById.name, reason: emojiUnavailableReason };
              const result3 = tmp(7972).showDoubleTapErrorToast(obj5);
            }
          }
          const result4 = tmp(4528).triggerHapticFeedback(tmp(4528).HapticFeedbackTypes.IMPACT_LIGHT);
          const tmpResult5 = tmp(7764);
          const id = channel.id;
          tmpResult5.addReaction(id, message.id, tmp8, tmp(7764).ReactionLocations.DOUBLE_TAP);
          const tmpResult4 = tmp(4528);
          obj6 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const result5 = tmp(4380).UNSAFE_markDismissibleContentAsDismissed(
            tmp(1943).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
            obj6,
          );
          if (isContentShown(tmp(1943).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            obj7 = { dismissAction: tmp31.INDIRECT_ACTION, forceTrack: true };
            const result6 = tmp(4380).UNSAFE_markDismissibleContentAsDismissed(
              tmp(1943).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL,
              obj7,
            );
            const tmpResult7 = tmp(4380);
          }
          tmp31 = ContentDismissActionType;
          const tmpResult6 = tmp(4380);
        } else if (!flag) {
          emojiName = undefined;
          if (setting != null) {
            emojiName = setting.emojiName;
          }
          const obj8 = { emojiName };
          const result7 = tmp(7972).showDoubleTapErrorToast(obj8);
          const tmpResult8 = tmp(7972);
        }
      }
    }
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
