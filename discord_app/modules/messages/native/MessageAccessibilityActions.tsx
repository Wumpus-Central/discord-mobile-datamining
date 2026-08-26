// discord_app/modules/messages/native/MessageAccessibilityActions.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import explicitContentFromProto from "../../user_settings/UserSettings.tsx";
import _modDef8298 from "../../reactions/canAddNewReactions.tsx";

let obj = { VIEW_PROFILE: "view_profile", ADD_REACTION: "add_reaction", ADD_QUICK_REACTION: "add_quick_reaction", REPLY: "reply", MESSAGE_ACTIONS_MENU: "message_actions_menu", EDIT_GDM: "edit_gdm", OPEN_PINS: "open_pins", JUMP_TO_MESSAGE: "jump_to_message" };
let result = set.fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

export const MessageAccessibilityAction = obj;
export const getMessageAccessibilityActionFromLabel = function getMessageAccessibilityActionFromLabel(action) {
  obj = {};
  const intl = getSystemLocale.intl;
  obj[intl.string(getSystemLocale.t.iXAna6)] = obj.VIEW_PROFILE;
  const intl2 = getSystemLocale.intl;
  obj[intl2.string(getSystemLocale.t.lfIHs4)] = obj.ADD_REACTION;
  const intl3 = getSystemLocale.intl;
  obj[intl3.string(getSystemLocale.t["5IEsGx"])] = obj.REPLY;
  const intl4 = getSystemLocale.intl;
  obj[intl4.string(getSystemLocale.t.ChPNkN)] = obj.MESSAGE_ACTIONS_MENU;
  const intl5 = getSystemLocale.intl;
  obj[intl5.string(getSystemLocale.t["5Q9+/L"])] = obj.EDIT_GDM;
  const intl6 = getSystemLocale.intl;
  obj[intl6.string(getSystemLocale.t["mp1N/2"])] = obj.OPEN_PINS;
  const intl7 = getSystemLocale.intl;
  obj[intl7.string(getSystemLocale.t["+TSRGD"])] = obj.JUMP_TO_MESSAGE;
  const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
  const setting = DoubleTapReactionEmoji.getSetting();
  let disableDoubleTap;
  if (setting != null) {
    disableDoubleTap = setting.disableDoubleTap;
  }
  let formatToPlainStringResult = null;
  if (true !== disableDoubleTap) {
    if (null != setting) {
      const result = tmp(8295).disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl9 = tmp(1236).intl;
        obj = { emojiName: null };
        obj[0] = result.name;
        formatToPlainStringResult = intl9.formatToPlainString(tmp(1236).t.eQIttH, obj);
      }
      const tmpResult = tmp(8295);
    }
    const intl8 = tmp(1236).intl;
    formatToPlainStringResult = intl8.formatToPlainString(tmp(1236).t.eQIttH, { emojiName: "heart" });
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
    obj = { label: null, name: null };
    const intl6 = getSystemLocale.intl;
    obj[0] = intl6.string(getSystemLocale.t.iXAna6);
    obj[1] = obj.VIEW_PROFILE;
    const items = [obj];
    if (_modDef8298(channel)) {
      obj = { label: null, name: null };
      const intl = tmp10(1236).intl;
      obj[0] = intl.string(tmp10(1236).t.lfIHs4);
      obj[1] = tmp12.ADD_REACTION;
      items.push(obj);
      const DoubleTapReactionEmoji = tmp10(4134).DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.getSetting();
      let disableDoubleTap;
      if (setting != null) {
        disableDoubleTap = setting.disableDoubleTap;
      }
      let formatToPlainStringResult = null;
      if (true !== disableDoubleTap) {
        if (null != setting) {
          let tmp10Result = tmp10(8295);
          const result = tmp10Result.disambiguatedEmojiFromSettingsValue(setting);
          if (null != result) {
            const intl3 = tmp10(1236).intl;
            obj = { emojiName: null };
            obj[0] = result.name;
            formatToPlainStringResult = intl3.formatToPlainString(tmp10(1236).t.eQIttH, obj);
          }
        }
        const intl2 = tmp10(1236).intl;
        formatToPlainStringResult = intl2.formatToPlainString(tmp10(1236).t.eQIttH, { emojiName: "heart" });
      }
      if (null != formatToPlainStringResult) {
        obj1 = { label: null, name: null };
        obj1[0] = formatToPlainStringResult;
        obj1[1] = tmp12.ADD_QUICK_REACTION;
        items.push(obj1);
      }
    }
    tmp10Result = tmp10(8303);
    if (tmp10Result.canReplyToMessage(channel, message)) {
      const obj2 = { label: null, name: null };
      const intl4 = tmp10(1236).intl;
      obj2[0] = intl4.string(tmp10(1236).t["5IEsGx"]);
      obj2[1] = tmp12.REPLY;
      items.push(obj2);
    }
    const obj3 = { label: null, name: null };
    const intl5 = tmp10(1236).intl;
    obj3[0] = intl5.string(getSystemLocale.t.ChPNkN);
    obj3[1] = obj.MESSAGE_ACTIONS_MENU;
    items.push(obj3);
    return items;
  }
};