// === Module 9955: getEmojiPopoutMessage ===

// Module 9955 (getEmojiPopoutMessage)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef3951 from "module_3951" /* 3951 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 5979 */;
import size from "module_2" /* 2 */;

const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
const HelpdeskArticles = Constants.HelpdeskArticles;
const constants = { DEFAULT: "Custom Emoji Popout", CROSS_SERVER: "Custom Emoji Popout (Cross-Server)", UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)", UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)", UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)", NITRO_EMOJI_PACK: "Custom Emoji Popout (Nitro Emoji Pack)" };
const EmojiPopoutType = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = size.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

export { EmojiPopoutType };
export const getEmojiPopoutData = function getEmojiPopoutData(sourceType) {
  if (sourceType.sourceType === EmojiSourceDataTypes.PACK) {
    const obj2 = { type: obj.UNAVAILABLE, text: null, description: null, emojiDescription: null, analyticsType: null };
    const intl11 = util.intl;
    const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    obj2.emojiDescription = intl11.format(_modDef3951["/jdd/7"], obj3);
    obj2.analyticsType = constants.NITRO_EMOJI_PACK;
    return obj2;
  } else {
    ({ expressionSourceApplication, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild3, isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji2, isDiscoverable: isDiscoverable3, emojiComesFromCurrentGuild: emojiComesFromCurrentGuild2, userIsRoleSubscriber, shouldHideRoleSubscriptionCTA, isPremium: isPremium3, isRoleSubscriptionEmoji, onOpenPremiumSettings } = sourceType);
    if (sourceType.sourceType === tmp.APPLICATION) {
      if (null != expressionSourceApplication) {
        const intl8 = util.intl;
        const obj4 = { appName: expressionSourceApplication.name };
        let formatToPlainStringResult = intl8.formatToPlainString(util.t.uERlTd, obj4);
        let tmp7 = require;
      }
      ({ isPremium, hasJoinedEmojiSourceGuild, isDiscoverable } = sourceType);
      ({ isUnusableRoleSubscriptionEmoji, emojiComesFromCurrentGuild } = sourceType);
      if (isPremium) {
        if (!hasJoinedEmojiSourceGuild) {
          if (isDiscoverable) {
            let DEFAULT = constants.CROSS_SERVER;
          }
          ({ isPremium: isPremium2, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild2 } = sourceType);
          let isDiscoverable2 = !hasJoinedEmojiSourceGuild2;
          if (!hasJoinedEmojiSourceGuild2) {
            isDiscoverable2 = sourceType.isDiscoverable;
          }
          if (isPremium2) {
            if (isDiscoverable2) {
              const obj5 = { type: obj.JOIN_GUILD, text: null, description: null };
              const intl10 = tmp7(1126).intl;
              obj5.text = intl10.string(tmp7(1126).t.riu2R5);
              let obj7 = obj5;
            }
            const obj6 = {};
            const merged = Object.assign(obj7);
            obj6.emojiDescription = formatToPlainStringResult;
            obj6.analyticsType = DEFAULT;
            return obj6;
          }
          if (!isPremium2) {
            obj7 = { type: obj.GET_PREMIUM, text: null, description: null };
            const intl9 = tmp7(1126).intl;
            obj7.text = intl9.string(tmp7(1126).t["gl/XHJ"]);
          }
          const obj8 = { type: obj.UNAVAILABLE, text: null, description: null };
          obj7 = obj8;
        }
      }
      if (!isPremium) {
        if (hasJoinedEmojiSourceGuild) {
          if (!isUnusableRoleSubscriptionEmoji) {
            DEFAULT = emojiComesFromCurrentGuild ? constants.UPSELL_CURRENT_SERVER_JOINED : constants.UPSELL_CROSS_SERVER_JOINED;
          }
        }
      }
      if (!isPremium) {
        isPremium = hasJoinedEmojiSourceGuild;
      }
      DEFAULT = constants.DEFAULT;
    }
    if (isPremium3) {
      if (!hasJoinedEmojiSourceGuild3) {
        const intl4 = util.intl;
        const string2 = intl4.string;
        const t = util.t;
        if (isDiscoverable3) {
          let string2Result = string2(t.xE9WGt);
        } else {
          string2Result = string2(t["0LMpW+"]);
        }
      }
      if (!isRoleSubscriptionEmoji) {
        const intl5 = util.intl;
        const string3 = intl5.string;
        const t2 = util.t;
        if (emojiComesFromCurrentGuild2) {
          let string3Result = string3(t2.hU4kIe);
        } else {
          string3Result = string3(t2.GM0xaX);
        }
      }
      if (!shouldHideRoleSubscriptionCTA) {
        const intl6 = util.intl;
        const string4 = intl6.string;
        let vLklfF2 = util.t;
        if (isUnusableRoleSubscriptionEmoji2) {
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
      const intl7 = util.intl;
      string4Result1 = intl7.string(util.t.xFb68j);
    } else if (hasJoinedEmojiSourceGuild3) {
      if (!shouldHideRoleSubscriptionCTA) {
        const intl2 = util.intl;
        const string = intl2.string;
        let vLklfF = util.t;
        if (isUnusableRoleSubscriptionEmoji2) {
          if (userIsRoleSubscriber) {
            vLklfF = vLklfF.vLklfF;
            let stringResult = string(vLklfF);
          } else {
            stringResult = string(vLklfF["g8i/bf"]);
          }
        } else if (emojiComesFromCurrentGuild2) {
          let stringResult1 = string(vLklfF.ICPhqa);
        } else {
          stringResult1 = string(vLklfF.jQy3aM);
        }
      }
      const intl3 = util.intl;
      stringResult1 = intl3.string(util.t.xFb68j);
    } else {
      const intl = util.intl;
      if (isDiscoverable3) {
        formatToPlainStringResult = intl.string(util.t.FJ6Z01);
        tmp7 = require;
      } else {
        obj = { openPremiumSettings: onOpenPremiumSettings };
        formatToPlainStringResult = intl.format(util.t.U6vLcA, obj);
        tmp7 = require;
      }
    }
  }
};