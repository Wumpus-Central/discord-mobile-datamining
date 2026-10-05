// discord_app/modules/messages/native/MessageAccessibilityActions.tsx
import intl10 from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import DoubleTapToReactUtils from "../../double_tap_to_react/native/DoubleTapToReactUtils.tsx";
import canAddNewReactionsDefault from "../../reactions/canAddNewReactions.tsx";
import canReplyToMessage from "../../replies/canReplyToMessage.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const MessageAccessibilityAction = {
  VIEW_PROFILE: "view_profile",
  ADD_REACTION: "add_reaction",
  ADD_QUICK_REACTION: "add_quick_reaction",
  REPLY: "reply",
  MESSAGE_ACTIONS_MENU: "message_actions_menu",
  EDIT_GDM: "edit_gdm",
  OPEN_PINS: "open_pins",
  JUMP_TO_MESSAGE: "jump_to_message",
};
let result = size.fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

export { MessageAccessibilityAction };
export const getMessageAccessibilityActionFromLabel = function getMessageAccessibilityActionFromLabel(action) {
  const obj = {};
  const intl = intl10.intl;
  obj[intl.string(intl10.t.iXAna6)] = obj.VIEW_PROFILE;
  const intl2 = intl10.intl;
  obj[intl2.string(intl10.t.lfIHs4)] = obj.ADD_REACTION;
  const intl3 = intl10.intl;
  obj[intl3.string(intl10.t["5IEsGx"])] = obj.REPLY;
  const intl4 = intl10.intl;
  obj[intl4.string(intl10.t.ChPNkN)] = obj.MESSAGE_ACTIONS_MENU;
  const intl5 = intl10.intl;
  obj[intl5.string(intl10.t["5Q9+/L"])] = obj.EDIT_GDM;
  const intl6 = intl10.intl;
  obj[intl6.string(intl10.t["mp1N/2"])] = obj.OPEN_PINS;
  const intl7 = intl10.intl;
  obj[intl7.string(intl10.t["+TSRGD"])] = obj.JUMP_TO_MESSAGE;
  const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  const tmp3 = obj;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  let formatToPlainStringResult = null;
  if (true !== disableDoubleTap) {
    if (null != setting) {
      const tmpResult = DoubleTapToReactUtils;
      const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl9 = intl10.intl;
        const obj2 = { emojiName: result.name };
        formatToPlainStringResult = intl9.formatToPlainString(intl10.t.eQIttH, obj2);
      }
    }
    const intl8 = intl10.intl;
    formatToPlainStringResult = intl8.formatToPlainString(intl10.t.eQIttH, { emojiName: "heart" });
  }
  if (null != formatToPlainStringResult) {
    obj[formatToPlainStringResult] = tmp3.ADD_QUICK_REACTION;
  }
  return obj[action];
};
export const createMessageAccessibilityActions = function createMessageAccessibilityActions(message, channel) {
  let intl;
  let intl4;
  let intl5;
  let intl6;
  let obj;
  if (null == channel) {
    return [];
  } else {
    const obj2 = { label: intl6.string(intl10.t.iXAna6), name: obj.VIEW_PROFILE };
    intl6 = intl10.intl;
    const items = [obj2];
    if (canAddNewReactionsDefault(channel)) {
      obj = { label: intl.string(intl10.t.lfIHs4), name: obj.ADD_REACTION };
      const push = items.push;
      intl = intl10.intl;
      push(obj);
      const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.getSetting();
      let disableDoubleTap;
      if (setting != null) {
        disableDoubleTap = setting.disableDoubleTap;
      }
      let formatToPlainStringResult = null;
      if (true !== disableDoubleTap) {
        if (null != setting) {
          const tmp10Result = DoubleTapToReactUtils;
          const result = tmp10Result.disambiguatedEmojiFromSettingsValue(setting);
          if (null != result) {
            const intl3 = intl10.intl;
            const obj3 = { emojiName: result.name };
            formatToPlainStringResult = intl3.formatToPlainString(intl10.t.eQIttH, obj3);
          }
        }
        const intl2 = intl10.intl;
        formatToPlainStringResult = intl2.formatToPlainString(intl10.t.eQIttH, { emojiName: "heart" });
      }
      if (null != formatToPlainStringResult) {
        const obj4 = { label: formatToPlainStringResult, name: obj.ADD_QUICK_REACTION };
        items.push(obj4);
      }
    }
    const tmp10Result2 = canReplyToMessage;
    if (tmp10Result2.canReplyToMessage(channel, message)) {
      const push2 = items.push;
      const obj5 = { label: intl4.string(intl10.t["5IEsGx"]), name: obj.REPLY };
      intl4 = intl10.intl;
      push2(obj5);
    }
    const push3 = items.push;
    const obj6 = { label: intl5.string(intl10.t.ChPNkN), name: obj.MESSAGE_ACTIONS_MENU };
    intl5 = intl10.intl;
    push3(obj6);
    return items;
  }
};
