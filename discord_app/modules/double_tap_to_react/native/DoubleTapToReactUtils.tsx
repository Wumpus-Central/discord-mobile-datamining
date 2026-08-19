// === Module 8192: getFallbackDoubleTapDisambiguatedEmoji ===

// Module 8192 (getFallbackDoubleTapDisambiguatedEmoji)
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4034 */;
import getEmojiUnavailableReasonDefault from "getEmojiUnavailableReason" /* 4038 */;
import noop from "noop" /* 19 */;
import { isContentShown } from "withContent" /* 1383 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import { NITRO_UPSELL_ALERT_KEY } from "NITRO_UPSELL_ALERT_KEY" /* 8193 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import set from "set" /* 1925 */;

const require = fn;
({ EmojiDisabledReasons: closure_8, EmojiIntention: c9 } = require("set"));
let result = require("obj132").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapToReactUtils.tsx");

export const getFallbackDoubleTapDisambiguatedEmoji = function getFallbackDoubleTapDisambiguatedEmoji() {
  let byName = parseRawEmojiObjectDefault.getByName("heart");
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
        let obj = parseRawEmojiObjectDefault;
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
    if (null != emojiName) {
      byName = parseRawEmojiObjectDefault.getByName(emojiName);
    }
    customEmojiById = byName;
  }
  return customEmojiById;
};
export const handleAddDefaultDoubleTapReaction = function handleAddDefaultDoubleTapReaction(message, channel) {
  const DoubleTapReactionEmoji = obj(4066).DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  if (true !== disableDoubleTap) {
    let tmpResult = tmp(8194);
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
            obj1 = parseRawEmojiObjectDefault;
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
        let obj3 = parseRawEmojiObjectDefault;
        const result1 = obj3.convertNameToSurrogate("heart");
        let tmp11 = null;
        if ("" !== result1) {
          obj = { name: null, id: "ct", animated: "RNSVGFeBlend" };
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
      if (reactions.some((item, index) => {
        obj = obj(dependencyMap[10]);
        return obj.emojiEquals(item.emoji, obj) && item.me;
      })) {
        tmpResult = tmp(4343);
        const result2 = tmpResult.triggerHapticFeedback(tmp(4343).HapticFeedbackTypes.IMPACT_LIGHT);
        obj1 = { channelId: null, messageId: null, emoji: null, location: null };
        obj1[0] = channel.id;
        obj1[1] = message.id;
        obj1[2] = tmp8;
        obj1[3] = tmp(7511).ReactionLocations.DOUBLE_TAP;
        tmp(7511).removeReaction(obj1);
        const tmpResult1 = tmp(7511);
      } else {
        if (flag) {
          let obj7 = parseRawEmojiObjectDefault;
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
            if (null != emojiName2) {
              let obj6 = parseRawEmojiObjectDefault;
              byName1 = obj6.getByName(emojiName2);
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
            const emojiUnavailableReason = getEmojiUnavailableReasonDefault.getEmojiUnavailableReason(obj3);
            if (emojiUnavailableReason === constants.PREMIUM_LOCKED) {
              const lazyResult = React.lazy(() => obj(paths[16])(paths[15], paths.paths));
              const obj4 = { emojiName: null };
              obj4[0] = customEmojiById.name;
              tmp(4657).openAlert(NITRO_UPSELL_ALERT_KEY, <lazyResult emojiName={null} />);
              const tmpResult2 = tmp(4657);
            } else if (null != emojiUnavailableReason) {
              const obj5 = { emojiName: null, reason: null };
              obj5[0] = customEmojiById.name;
              obj5[1] = emojiUnavailableReason;
              const result3 = tmp(8195).showDoubleTapErrorToast(obj5);
              const tmpResult3 = tmp(8195);
            }
          }
          const result4 = tmp(4343).triggerHapticFeedback(tmp(4343).HapticFeedbackTypes.IMPACT_LIGHT);
          const tmpResult5 = tmp(7511);
          const id = channel.id;
          tmpResult5.addReaction(id, message.id, tmp8, tmp(7511).ReactionLocations.DOUBLE_TAP);
          const tmpResult4 = tmp(4343);
          obj6 = { dismissAction: null };
          obj6[0] = ContentDismissActionType.INDIRECT_ACTION;
          const result5 = tmp(4196).UNSAFE_markDismissibleContentAsDismissed(tmp(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj6);
          if (isContentShown(tmp(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
            obj7 = { dismissAction: null, forceTrack: true };
            obj7[0] = ContentDismissActionType.INDIRECT_ACTION;
            const result6 = tmp(4196).UNSAFE_markDismissibleContentAsDismissed(tmp(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL, obj7);
            const tmpResult7 = tmp(4196);
          }
          const tmpResult6 = tmp(4196);
        } else if (!flag) {
          emojiName = undefined;
          if (setting != null) {
            emojiName = setting.emojiName;
          }
          const obj8 = { emojiName: null };
          obj8[0] = emojiName;
          const result7 = tmp(8195).showDoubleTapErrorToast(obj8);
          const tmpResult8 = tmp(8195);
        }
      }
    }
  }
};
export const areEmojisEqual = function areEmojisEqual(closure_0, emoji) {
  if (null == _require.id) {
    if (null == emoji.id) {
      let tmp = _require.surrogates === emoji.surrogates;
    }
    return tmp;
  }
  tmp = _require.id === emoji.id && _require.name === emoji.name;
};