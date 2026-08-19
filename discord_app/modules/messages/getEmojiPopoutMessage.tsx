// === Module 9409: EmojiPopoutType ===

// Module 9409 (EmojiPopoutType)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getEmojiSourceData from "getEmojiSourceData" /* 7189 */;

const EmojiSourceDataTypes = getEmojiSourceData.EmojiSourceDataTypes;
let closure_3 = { DEFAULT: "Custom Emoji Popout", CROSS_SERVER: "Custom Emoji Popout (Cross-Server)", UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)", UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)", UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)" };
let obj = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = obj132.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

export const EmojiPopoutType = obj;
export const getEmojiPopoutData = function getEmojiPopoutData(sourceType) {
  ({ expressionSourceApplication, hasJoinedEmojiSourceGuild, isUnusableRoleSubscriptionEmoji, isDiscoverable, emojiComesFromCurrentGuild, userIsRoleSubscriber, shouldHideRoleSubscriptionCTA } = sourceType);
  ({ isPremium, isRoleSubscriptionEmoji, onOpenPremiumSettings } = sourceType);
  if (sourceType.sourceType === EmojiSourceDataTypes.APPLICATION) {
    if (null != expressionSourceApplication) {
      const intl8 = getSystemLocale.intl;
      obj = { appName: null };
      obj[0] = expressionSourceApplication.name;
      let formatToPlainStringResult = intl8.formatToPlainString(getSystemLocale.t.uERlTd, obj);
      let tmp6 = require;
    }
    ({ isPremium: isPremium2, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild2, isDiscoverable: isDiscoverable2 } = sourceType);
    ({ isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji2, emojiComesFromCurrentGuild: emojiComesFromCurrentGuild2 } = sourceType);
    if (isPremium2) {
      if (!hasJoinedEmojiSourceGuild2) {
        if (isDiscoverable2) {
          let DEFAULT = constants.CROSS_SERVER;
        }
        ({ isPremium: isPremium3, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild3 } = sourceType);
        let isDiscoverable3 = !hasJoinedEmojiSourceGuild3;
        if (!hasJoinedEmojiSourceGuild3) {
          isDiscoverable3 = sourceType.isDiscoverable;
        }
        if (isPremium3) {
          if (isDiscoverable3) {
            obj = { type: null, text: null, description: null };
            obj[0] = obj.JOIN_GUILD;
            const intl10 = tmp6(1236).intl;
            obj[1] = intl10.string(tmp6(1236).t.riu2R5);
            let obj2 = obj;
          }
          obj1 = {};
          const merged = Object.assign(obj2);
          obj1.emojiDescription = formatToPlainStringResult;
          obj1.analyticsType = DEFAULT;
          return obj1;
        }
        if (!isPremium3) {
          obj2 = { type: null, text: null, description: null };
          obj2[0] = obj.GET_PREMIUM;
          const intl9 = tmp6(1236).intl;
          obj2[1] = intl9.string(tmp6(1236).t["gl/XHJ"]);
        }
        const obj3 = { type: null, text: null, description: null };
        obj3[0] = obj.UNAVAILABLE;
        obj2 = obj3;
      }
    }
    if (!isPremium2) {
      if (hasJoinedEmojiSourceGuild2) {
        if (!isUnusableRoleSubscriptionEmoji2) {
          DEFAULT = emojiComesFromCurrentGuild2 ? constants.UPSELL_CURRENT_SERVER_JOINED : constants.UPSELL_CROSS_SERVER_JOINED;
        }
      }
    }
    if (!isPremium2) {
      isPremium2 = hasJoinedEmojiSourceGuild2;
    }
    DEFAULT = constants.DEFAULT;
  }
  if (isPremium) {
    if (!hasJoinedEmojiSourceGuild) {
      const intl4 = getSystemLocale.intl;
      const string2 = intl4.string;
      const t = getSystemLocale.t;
      if (isDiscoverable) {
        let string2Result = string2(t.xE9WGt);
      } else {
        string2Result = string2(t["0LMpW+"]);
      }
    }
    if (!isRoleSubscriptionEmoji) {
      const intl5 = getSystemLocale.intl;
      const string3 = intl5.string;
      const t2 = getSystemLocale.t;
      if (emojiComesFromCurrentGuild) {
        let string3Result = string3(t2.hU4kIe);
      } else {
        string3Result = string3(t2.GM0xaX);
      }
    }
    if (!shouldHideRoleSubscriptionCTA) {
      const intl6 = getSystemLocale.intl;
      const string4 = intl6.string;
      let vLklfF2 = getSystemLocale.t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF2 = vLklfF2.vLklfF;
          let string4Result = string4(vLklfF2);
        } else {
          string4Result = string4(vLklfF2["g8i/bf"]);
        }
      } else {
        let string4Result1 = string4(vLklfF2.Eoynp0);
      }
    }
    const intl7 = getSystemLocale.intl;
    string4Result1 = intl7.string(getSystemLocale.t.xFb68j);
  } else if (hasJoinedEmojiSourceGuild) {
    if (!shouldHideRoleSubscriptionCTA) {
      const intl2 = getSystemLocale.intl;
      const string = intl2.string;
      let vLklfF = getSystemLocale.t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF = vLklfF.vLklfF;
          let stringResult = string(vLklfF);
        } else {
          stringResult = string(vLklfF["g8i/bf"]);
        }
      } else if (emojiComesFromCurrentGuild) {
        let stringResult1 = string(vLklfF.ICPhqa);
      } else {
        stringResult1 = string(vLklfF.jQy3aM);
      }
    }
    const intl3 = getSystemLocale.intl;
    stringResult1 = intl3.string(getSystemLocale.t.xFb68j);
  } else {
    const intl = getSystemLocale.intl;
    if (isDiscoverable) {
      formatToPlainStringResult = intl.string(getSystemLocale.t.FJ6Z01);
      tmp6 = require;
    } else {
      obj = { openPremiumSettings: null };
      obj[0] = onOpenPremiumSettings;
      formatToPlainStringResult = intl.format(getSystemLocale.t.U6vLcA, obj);
      tmp6 = require;
    }
  }
};