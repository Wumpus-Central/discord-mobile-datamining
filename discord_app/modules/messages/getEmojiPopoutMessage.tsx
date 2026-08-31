// === Module 9141: EmojiPopoutType ===

// Module 9141 (EmojiPopoutType)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getEmojiSourceData from "getEmojiSourceData" /* 5973 */;

const EmojiSourceDataTypes = getEmojiSourceData.EmojiSourceDataTypes;
let closure_3 = { DEFAULT: "Custom Emoji Popout", CROSS_SERVER: "Custom Emoji Popout (Cross-Server)", UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)", UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)", UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)" };
let obj = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = set.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

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
          let DEFAULT = tmp57.CROSS_SERVER;
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
          DEFAULT = emojiComesFromCurrentGuild2 ? tmp57.UPSELL_CURRENT_SERVER_JOINED : tmp57.UPSELL_CROSS_SERVER_JOINED;
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
        let tmp26 = tmp24;
        let tmp27 = tmp23;
      } else {
        string2Result = string2(t["0LMpW+"]);
        tmp26 = tmp24;
        tmp27 = tmp23;
      }
    }
    if (!isRoleSubscriptionEmoji) {
      const intl5 = getSystemLocale.intl;
      const string3 = intl5.string;
      const t2 = getSystemLocale.t;
      if (emojiComesFromCurrentGuild) {
        let string3Result = string3(t2.hU4kIe);
        let tmp31 = tmp29;
        let tmp32 = tmp28;
      } else {
        string3Result = string3(t2.GM0xaX);
        tmp31 = tmp29;
        tmp32 = tmp28;
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
          let tmp39 = tmp34;
          let tmp40 = tmp33;
        } else {
          string4Result = string4(vLklfF2["g8i/bf"]);
          tmp39 = tmp34;
          tmp40 = tmp33;
        }
      } else {
        let string4Result1 = string4(vLklfF2.Eoynp0);
        let tmp36 = tmp34;
        let tmp37 = tmp33;
      }
    }
    const intl7 = getSystemLocale.intl;
    string4Result1 = intl7.string(getSystemLocale.t.xFb68j);
    tmp36 = dependencyMap;
    tmp37 = require;
  } else if (hasJoinedEmojiSourceGuild) {
    if (!shouldHideRoleSubscriptionCTA) {
      const intl2 = getSystemLocale.intl;
      const string = intl2.string;
      let vLklfF = getSystemLocale.t;
      if (isUnusableRoleSubscriptionEmoji) {
        if (userIsRoleSubscriber) {
          vLklfF = vLklfF.vLklfF;
          let stringResult = string(vLklfF);
          let tmp13 = tmp8;
          let tmp14 = tmp7;
        } else {
          stringResult = string(vLklfF["g8i/bf"]);
          tmp13 = tmp8;
          tmp14 = tmp7;
        }
      } else if (emojiComesFromCurrentGuild) {
        let stringResult1 = string(vLklfF.ICPhqa);
        let tmp10 = tmp8;
        let tmp11 = tmp7;
      } else {
        stringResult1 = string(vLklfF.jQy3aM);
        tmp10 = tmp8;
        tmp11 = tmp7;
      }
    }
    const intl3 = getSystemLocale.intl;
    stringResult1 = intl3.string(getSystemLocale.t.xFb68j);
    tmp10 = dependencyMap;
    tmp11 = require;
  } else {
    const intl = getSystemLocale.intl;
    if (isDiscoverable) {
      formatToPlainStringResult = intl.string(tmp2(1236).t.FJ6Z01);
      tmp6 = tmp2;
    } else {
      obj = { openPremiumSettings: null };
      obj[0] = onOpenPremiumSettings;
      formatToPlainStringResult = intl.format(tmp2(1236).t.U6vLcA, obj);
      tmp6 = tmp2;
    }
  }
};