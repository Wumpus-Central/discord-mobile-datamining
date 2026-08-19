// === Module 8191: MessageAccessibilityAction ===

// Module 8191 (MessageAccessibilityAction)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import getFallbackDoubleTapDisambiguatedEmoji from "getFallbackDoubleTapDisambiguatedEmoji" /* 8192 */;
import useCanReplyToMessage from "useCanReplyToMessage" /* 8199 */;
import recomputeGuild from "recomputeGuild" /* 4977 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

require = fn;
let obj = { VIEW_PROFILE: "view_profile", ADD_REACTION: "add_reaction", ADD_QUICK_REACTION: "add_quick_reaction", REPLY: "reply", MESSAGE_ACTIONS_MENU: "message_actions_menu", EDIT_GDM: "edit_gdm", OPEN_PINS: "open_pins", JUMP_TO_MESSAGE: "jump_to_message" };
let result = require("obj132").fileFinishedImporting("modules/messages/native/MessageAccessibilityActions.tsx");

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
      const result = getFallbackDoubleTapDisambiguatedEmoji.disambiguatedEmojiFromSettingsValue(setting);
      if (null != result) {
        const intl9 = getSystemLocale.intl;
        obj = { emojiName: null };
        obj[0] = result.name;
        formatToPlainStringResult = intl9.formatToPlainString(getSystemLocale.t.eQIttH, obj);
      }
      const tmpResult = getFallbackDoubleTapDisambiguatedEmoji;
    }
    const intl8 = getSystemLocale.intl;
    formatToPlainStringResult = intl8.formatToPlainString(getSystemLocale.t.eQIttH, { emojiName: "heart" });
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
    const guildId = channel.getGuildId();
    let canChatInGuildResult = null != guildId;
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_2.canChatInGuild(guildId);
    }
    if (canChatInGuildResult) {
      canChatInGuildResult = closure_3.can(Permissions.ADD_REACTIONS, channel);
    }
    if (!canChatInGuildResult) {
      canChatInGuildResult = channel.isPrivate();
    }
    obj = { label: null, name: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.iXAna6);
    obj[1] = obj.VIEW_PROFILE;
    const items = [obj];
    if (canChatInGuildResult) {
      obj = { label: null, name: null };
      const intl2 = getSystemLocale.intl;
      obj[0] = intl2.string(getSystemLocale.t.lfIHs4);
      obj[1] = tmp7.ADD_REACTION;
      items.push(obj);
      const DoubleTapReactionEmoji = explicitContentFromProto.DoubleTapReactionEmoji;
      const setting = DoubleTapReactionEmoji.getSetting();
      let disableDoubleTap;
      if (setting != null) {
        disableDoubleTap = setting.disableDoubleTap;
      }
      let formatToPlainStringResult = null;
      if (true !== disableDoubleTap) {
        if (null != setting) {
          let tmp5Result = getFallbackDoubleTapDisambiguatedEmoji;
          const result = tmp5Result.disambiguatedEmojiFromSettingsValue(setting);
          if (null != result) {
            const intl4 = getSystemLocale.intl;
            obj = { emojiName: null };
            obj[0] = result.name;
            formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t.eQIttH, obj);
          }
        }
        const intl3 = getSystemLocale.intl;
        formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.eQIttH, { emojiName: "heart" });
      }
      if (null != formatToPlainStringResult) {
        obj1 = { label: null, name: null };
        obj1[0] = formatToPlainStringResult;
        obj1[1] = tmp7.ADD_QUICK_REACTION;
        items.push(obj1);
      }
    }
    tmp5Result = useCanReplyToMessage;
    if (tmp5Result.canReplyToMessage(channel, message)) {
      const obj2 = { label: null, name: null };
      const intl5 = getSystemLocale.intl;
      obj2[0] = intl5.string(getSystemLocale.t["5IEsGx"]);
      obj2[1] = tmp7.REPLY;
      items.push(obj2);
    }
    const obj3 = { label: null, name: null };
    const intl6 = getSystemLocale.intl;
    obj3[0] = intl6.string(getSystemLocale.t.ChPNkN);
    obj3[1] = obj.MESSAGE_ACTIONS_MENU;
    items.push(obj3);
    return items;
  }
};