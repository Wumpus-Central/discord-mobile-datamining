// discord_app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import DismissibleContentShownStateStore from "../../dismissible_content/DismissibleContentShownStateStore.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ReactionUtils from "../../reactions/ReactionUtils.tsx";
import UnicodeEmojisDefault from "../../emojis/UnicodeEmojis.tsx";
import EmojiUtilsDefault from "../../../utils/EmojiUtils.tsx";
import DoubleTapToRaectConstants from "../DoubleTapToRaectConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import EmojiStore from "../../emojis/EmojiStore.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
const isContentShown = DismissibleContentShownStateStore.isContentShown;
const NITRO_UPSELL_ALERT_KEY = DoubleTapToRaectConstants.NITRO_UPSELL_ALERT_KEY;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ EmojiDisabledReasons: metroImportAll, EmojiIntention: c9 } = EmojiConstants);
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export const getFallbackDoubleTapDisambiguatedEmoji = function getFallbackDoubleTapDisambiguatedEmoji() {
  const obj = UnicodeEmojisDefault;
  let byName = obj.getByName("heart");
  if (byName == null) {
    byName = null;
  }
  return byName;
};
export const reactionEmojiFromSettingsValue = function reactionEmojiFromSettingsValue(arg0) {
  let animated;
  let emojiId;
  let emojiName;
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
        const obj = UnicodeEmojisDefault;
        result = obj.convertNameToSurrogate(emojiName);
      }
      str2 = result;
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  const obj2 = { name: str2, id: tmp, animated };
  if (animated == null) {
    animated = false;
  }
  return obj2;
};
export const disambiguatedEmojiFromSettingsValue = function disambiguatedEmojiFromSettingsValue(setting) {
  let emojiId;
  let emojiName;
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
      const obj = UnicodeEmojisDefault;
      byName = obj.getByName(emojiName);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
};
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  let animated;
  let emojiId;
  let emojiId2;
  let emojiName;
  let emojiName2;
  let obj5;
  let paths;
  let tmp = obj5;
  const DoubleTapReactionEmoji = obj5(2028).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    const tmpResult = tmp(7640);
    if (tmpResult.canReactToMessage(message, channel)) {
      let flag;
      let tmp8;
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
            const obj2 = UnicodeEmojisDefault;
            result = obj2.convertNameToSurrogate(emojiName);
          }
          str2 = result;
        }
      }
      if (str2 == null) {
        str2 = "";
      }
      const obj3 = { name: str2, id: tmp5, animated };
      if (animated == null) {
        animated = false;
      }
      obj5 = obj3;
      if (null == setting) {
        const obj4 = UnicodeEmojisDefault;
        const result1 = obj4.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj5 = { name: result1, id: "Reflect", animated: null };
          tmp11 = obj5;
        }
        if (null != tmp11) {
          obj5 = tmp11;
          flag = true;
          tmp8 = tmp11;
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
      if (
        reactions.some((emoji) => {
          const obj = ReactionUtils;
          const tmp = obj.emojiEquals(emoji.emoji, obj5) && emoji.me;
          return tmp;
        })
      ) {
        const tmpResult10 = tmp(4861);
        const result2 = tmpResult10.triggerHapticFeedback(tmp(4861).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj6 = {
          channelId: channel.id,
          messageId: message.id,
          emoji: tmp8,
          location: tmp(7273).ReactionLocations.DOUBLE_TAP,
        };
        const removeReaction = tmp(7273).removeReaction;
        tmp(7273);
        removeReaction(obj6);
      } else {
        let customEmojiById;
        if (flag) {
          const obj8 = UnicodeEmojisDefault;
          let byName = obj8.getByName("heart");
          if (byName == null) {
            byName = null;
          }
          customEmojiById = byName;
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
              const obj7 = UnicodeEmojisDefault;
              byName1 = obj7.getByName(emojiName2);
            }
            customEmojiById = byName1;
          }
        }
        if (null != customEmojiById) {
          if (null != customEmojiById) {
            const obj10 = { emoji: customEmojiById, channel, intention: constants2.REACTION };
            const obj11 = EmojiUtilsDefault;
            const emojiUnavailableReason = obj11.getEmojiUnavailableReason(obj10);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              react.lazy(() => obj5(paths[16])(paths[15], paths.paths));
              const tmpResult12 = tmp(5716);
              tmpResult12.openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={customEmojiById.name} />);
            } else if (null != emojiUnavailableReason) {
              const obj13 = { emojiName: customEmojiById.name, reason: emojiUnavailableReason };
              const tmpResult13 = tmp(7642);
              const result3 = tmpResult13.showDoubleTapErrorToast(obj13);
            }
          }
          const tmpResult14 = tmp(4861);
          const result4 = tmpResult14.triggerHapticFeedback(tmp(4861).HapticFeedbackTypes.IMPACT_LIGHT);
          const id = channel.id;
          const tmpResult15 = tmp(7273);
          tmpResult15.addReaction(id, message.id, tmp8, tmp(7273).ReactionLocations.DOUBLE_TAP);
          const obj14 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          const tmpResult16 = tmp(4704);
          const result5 = tmpResult16.UNSAFE_markDismissibleContentAsDismissed(
            tmp(2036).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
            obj14,
          );
          if (isContentShown(tmp(2036).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            const obj15 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION, forceTrack: true };
            const tmpResult17 = tmp(4704);
            const result6 = tmpResult17.UNSAFE_markDismissibleContentAsDismissed(
              tmp(2036).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL,
              obj15,
            );
          }
        } else if (!flag) {
          let emojiName1;
          const showDoubleTapErrorToast = tmp(7642).showDoubleTapErrorToast;
          tmp(7642);
          if (setting != null) {
            emojiName1 = setting.emojiName;
          }
          const obj16 = { emojiName: emojiName1 };
          const result7 = showDoubleTapErrorToast(obj16);
        }
      }
    }
  }
};
export const areEmojisEqual = function areEmojisEqual(customEmojiById, emoji) {
  if (null == customEmojiById.id) {
    let tmp;
    if (null == emoji.id) {
      tmp = customEmojiById.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = customEmojiById.id === emoji.id && customEmojiById.name === emoji.name;
};
