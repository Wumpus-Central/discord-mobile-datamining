// === Module 7967: MessageAccessibilityActions ===

// Module 7967 (MessageAccessibilityActions)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7968 */;
import canAddNewReactionsDefault from "canAddNewReactions" /* 7971 */;
import canReplyToMessage from "canReplyToMessage" /* 7976 */;
import size from "module_2" /* 2 */;

const MessageAccessibilityAction = { VIEW_PROFILE: "view_profile", ADD_REACTION: "add_reaction", ADD_QUICK_REACTION: "add_quick_reaction", REPLY: "reply", MESSAGE_ACTIONS_MENU: "message_actions_menu", EDIT_GDM: "edit_gdm", OPEN_PINS: "open_pins", JUMP_TO_MESSAGE: "jump_to_message" };
let result = size.fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

export { MessageAccessibilityAction };
export const getMessageAccessibilityActionFromLabel = function getMessageAccessibilityActionFromLabel(action) {
  let obj = {};
  const intl = util.intl;
  obj[intl.string(util.t.iXAna6)] = obj.VIEW_PROFILE;
  const intl2 = util.intl;
  obj[intl2.string(util.t.lfIHs4)] = obj.ADD_REACTION;
  const intl3 = util.intl;
  obj[intl3.string(util.t["5IEsGx"])] = obj.REPLY;
  const intl4 = util.intl;
  obj[intl4.string(util.t.ChPNkN)] = obj.MESSAGE_ACTIONS_MENU;
  const intl5 = util.intl;
  obj[intl5.string(util.t["5Q9+/L"])] = obj.EDIT_GDM;
  const intl6 = util.intl;
  obj[intl6.string(util.t["mp1N/2"])] = obj.OPEN_PINS;
  const intl7 = util.intl;
  obj[intl7.string(util.t["+TSRGD"])] = obj.JUMP_TO_MESSAGE;
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  let formatToPlainStringResult = null;
  if (true !== disableDoubleTap) {
    if (null != setting) {
      const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl9 = util.intl;
        obj = { emojiName: result.name };
        formatToPlainStringResult = intl9.formatToPlainString(util.t.eQIttH, obj);
      }
      const tmpResult = DoubleTapToReactUtils;
    }
    const intl8 = util.intl;
    formatToPlainStringResult = intl8.formatToPlainString(util.t.eQIttH, { emojiName: "heart" });
  }
  if (null != formatToPlainStringResult) {
    obj[formatToPlainStringResult] = obj.ADD_QUICK_REACTION;
  }
  return obj[action];
};
export const createMessageAccessibilityActions = function createMessageAccessibilityActions(message, channel) {
  if (null == channel) {
    return [];
  } else {
    let obj = { label: null, name: null };
    const intl6 = util.intl;
    obj.label = intl6.string(util.t.iXAna6);
    obj.name = obj.VIEW_PROFILE;
    const items = [obj];
    if (canAddNewReactionsDefault(channel)) {
      obj = { label: null, name: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.lfIHs4);
      obj.name = tmp12.ADD_REACTION;
      items.push(obj);
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.getSetting();
      let disableDoubleTap;
      if (setting != null) {
        disableDoubleTap = setting.disableDoubleTap;
      }
      let formatToPlainStringResult = null;
      if (true !== disableDoubleTap) {
        if (null != setting) {
          let tmp10Result = DoubleTapToReactUtils;
          const result = tmp10Result.disambiguatedEmojiFromSettingsValue(setting);
          if (null != result) {
            const intl3 = util.intl;
            obj = { emojiName: result.name };
            formatToPlainStringResult = intl3.formatToPlainString(util.t.eQIttH, obj);
          }
        }
        const intl2 = util.intl;
        formatToPlainStringResult = intl2.formatToPlainString(util.t.eQIttH, { emojiName: "heart" });
      }
      if (null != formatToPlainStringResult) {
        const obj1 = { label: formatToPlainStringResult, name: tmp12.ADD_QUICK_REACTION };
        items.push(obj1);
      }
    }
    tmp10Result = canReplyToMessage;
    if (tmp10Result.canReplyToMessage(channel, message)) {
      const obj2 = { label: null, name: null };
      const intl4 = util.intl;
      obj2.label = intl4.string(util.t["5IEsGx"]);
      obj2.name = tmp12.REPLY;
      items.push(obj2);
    }
    const obj3 = { label: null, name: null };
    const intl5 = util.intl;
    obj3.label = intl5.string(util.t.ChPNkN);
    obj3.name = obj.MESSAGE_ACTIONS_MENU;
    items.push(obj3);
    return items;
  }
};