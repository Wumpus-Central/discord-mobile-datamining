// discord_app/modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx
import DismissibleContent from "DismissibleContent";
import { isContentShown } from "withContent";
import getEmojiToGroupId from "getEmojiToGroupId";
import { NITRO_UPSELL_ALERT_KEY } from "NITRO_UPSELL_ALERT_KEY";
import { ContentDismissActionType } from "ContentDismissActionType";
import set from "set";
import { jsx } from "jsxProd";
import set from "getEmojiToGroupId";

let c9;
let metroImportAll;
const require = arg1;
({ EmojiDisabledReasons: metroImportAll, EmojiIntention: c9 } = set);
let result = set.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export const getFallbackDoubleTapDisambiguatedEmoji = function getFallbackDoubleTapDisambiguatedEmoji() {
  let byName = importDefault(3926).getByName("heart");
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
        let obj = importDefault(3926);
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
  obj[2] = animated;
  return obj;
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
    customEmojiById = store.getCustomEmojiById(tmp);
  }
  if (null == customEmojiById) {
    let byName = null;
    if (null != tmp2) {
      byName = importDefault(3926).getByName(tmp2);
      const obj = importDefault(3926);
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
  const DoubleTapReactionEmoji = obj(3958).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    let tmpResult = tmp(7888);
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
            let obj1 = importDefault(3926);
            result = obj1.convertNameToSurrogate(emojiName);
          }
          str2 = result;
        }
      }
      if (str2 == null) {
        str2 = "";
      }
      obj = { name: null, id: null, animated: null };
      obj[0] = str2;
      obj[1] = tmp5;
      if (animated == null) {
        animated = false;
      }
      obj[2] = animated;
      if (null == setting) {
        let obj3 = importDefault(3926);
        const result1 = obj3.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj = { name: null, id: "ct", animated: null };
          obj[0] = result1;
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
      if (reactions.some((emoji) => {
        obj = obj(outer1_2[10]);
        return obj.emojiEquals(emoji.emoji, obj) && emoji.me;
      })) {
        tmpResult = tmp(4254);
        const result2 = tmpResult.triggerHapticFeedback(tmp(4254).HapticFeedbackTypes.IMPACT_LIGHT);
        obj1 = { channelId: null, messageId: null, emoji: null, location: null };
        obj1[0] = channel.id;
        obj1[1] = message.id;
        obj1[2] = tmp8;
        obj1[3] = tmp(7143).ReactionLocations.DOUBLE_TAP;
        tmp(7143).removeReaction(obj1);
      } else {
        if (flag) {
          let obj7 = importDefault(3926);
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
            customEmojiById = store.getCustomEmojiById(tmp12);
          }
          if (null == customEmojiById) {
            let byName1 = null;
            if (null != tmp13) {
              let obj6 = importDefault(3926);
              byName1 = obj6.getByName(tmp13);
            }
            customEmojiById = byName1;
          }
        }
        if (null != customEmojiById) {
          if (null != customEmojiById) {
            obj3 = { emoji: null, channel: null, intention: null };
            obj3[0] = customEmojiById;
            obj3[1] = channel;
            obj3[2] = constants2.REACTION;
            const emojiUnavailableReason = importDefault(3930).getEmojiUnavailableReason(obj3);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = React.lazy(() => obj(paths[16])(paths[15], paths.paths));
              const obj4 = { emojiName: null };
              obj4[0] = customEmojiById.name;
              tmp(4625).openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={null} />);
            } else if (null != emojiUnavailableReason) {
              const obj5 = { emojiName: null, reason: null };
              obj5[0] = customEmojiById.name;
              obj5[1] = emojiUnavailableReason;
              const result3 = tmp(7889).showDoubleTapErrorToast(obj5);
            }
            const obj12 = importDefault(3930);
          }
          const result4 = tmp(4254).triggerHapticFeedback(tmp(4254).HapticFeedbackTypes.IMPACT_LIGHT);
          const tmpResult5 = tmp(7143);
          const id = channel.id;
          tmpResult5.addReaction(id, message.id, tmp8, tmp(7143).ReactionLocations.DOUBLE_TAP);
          const tmpResult4 = tmp(4254);
          obj6 = { dismissAction: null };
          obj6[0] = ContentDismissActionType.INDIRECT_ACTION;
          const result5 = tmp(4101).UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj6);
          if (isContentShown(tmp(1358).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            obj7 = { dismissAction: null, forceTrack: true };
            obj7[0] = tmp31.INDIRECT_ACTION;
            const result6 = tmp(4101).UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL, obj7);
            const tmpResult7 = tmp(4101);
          }
          tmp31 = ContentDismissActionType;
          const tmpResult6 = tmp(4101);
        } else if (!flag) {
          emojiName = undefined;
          if (setting != null) {
            emojiName = setting.emojiName;
          }
          const obj8 = { emojiName: null };
          obj8[0] = emojiName;
          const result7 = tmp(7889).showDoubleTapErrorToast(obj8);
          const tmpResult8 = tmp(7889);
        }
      }
    }
  }
};
export const areEmojisEqual = function areEmojisEqual(closure_0, emoji) {
  if (null == closure_0.id) {
    if (null == emoji.id) {
      let tmp = closure_0.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = closure_0.id === emoji.id && closure_0.name === emoji.name;
};