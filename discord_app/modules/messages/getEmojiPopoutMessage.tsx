// discord_app/modules/messages/getEmojiPopoutMessage.tsx
import Constants from "../../Constants.tsx";
import intl12 from "../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../utils/HelpdeskUtils.tsx";
import _modDef3951 from "../emojis/default_emojis/DefaultEmojis.messages.js";
import ExpressionSourceRecord from "../emojis/records/ExpressionSourceRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
const HelpdeskArticles = Constants.HelpdeskArticles;
const constants = {
  DEFAULT: "Custom Emoji Popout",
  CROSS_SERVER: "Custom Emoji Popout (Cross-Server)",
  UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)",
  UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)",
  UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)",
  UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)",
  NITRO_EMOJI_PACK: "Custom Emoji Popout (Nitro Emoji Pack)",
};
const EmojiPopoutType = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = size.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

export { EmojiPopoutType };
export const getEmojiPopoutData = function getEmojiPopoutData(sourceType) {
  let emojiComesFromCurrentGuild;
  let emojiComesFromCurrentGuild2;
  let expressionSourceApplication;
  let format;
  let hasJoinedEmojiSourceGuild;
  let hasJoinedEmojiSourceGuild2;
  let hasJoinedEmojiSourceGuild3;
  let intl10;
  let intl9;
  let isDiscoverable;
  let isDiscoverable3;
  let isPremium;
  let isPremium2;
  let isPremium3;
  let isRoleSubscriptionEmoji;
  let isUnusableRoleSubscriptionEmoji;
  let isUnusableRoleSubscriptionEmoji3;
  let obj;
  let obj3;
  let obj9;
  let onOpenPremiumSettings;
  let prop;
  let shouldHideRoleSubscriptionCTA;
  let userIsRoleSubscriber;
  if (sourceType.sourceType === EmojiSourceDataTypes.PACK) {
    const obj2 = {
      type: obj.UNAVAILABLE,
      text: null,
      description: null,
      emojiDescription: format(prop, obj3),
      analyticsType: constants.NITRO_EMOJI_PACK,
    };
    const intl11 = intl12.intl;
    format = intl11.format;
    obj3 = { helpdeskArticle: obj9.getArticleURL(HelpdeskArticles.NITRO_EMOJI_PACKS) };
    prop = _modDef3951["/jdd/7"];
    obj9 = HelpdeskUtilsDefault;
    return obj2;
  } else {
    let tmp7;
    let formatToPlainStringResult;
    ({
      expressionSourceApplication,
      hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild3,
      isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji3,
      isDiscoverable: isDiscoverable3,
      emojiComesFromCurrentGuild: emojiComesFromCurrentGuild2,
      userIsRoleSubscriber,
      shouldHideRoleSubscriptionCTA,
      isPremium: isPremium3,
      isRoleSubscriptionEmoji,
      onOpenPremiumSettings,
    } = sourceType);
    if (sourceType.sourceType === tmp.APPLICATION) {
      let CROSS_SERVER;
      if (null != expressionSourceApplication) {
        const intl8 = intl12.intl;
        const obj4 = { appName: expressionSourceApplication.name };
        formatToPlainStringResult = intl8.formatToPlainString(intl12.t.uERlTd, obj4);
        tmp7 = require;
      }
      ({ isPremium, hasJoinedEmojiSourceGuild, isDiscoverable } = sourceType);
      ({ isUnusableRoleSubscriptionEmoji, emojiComesFromCurrentGuild } = sourceType);
      const DEFAULT = constants.DEFAULT;
      if (isPremium) {
        if (!hasJoinedEmojiSourceGuild) {
          let obj7;
          if (isDiscoverable) {
            CROSS_SERVER = constants.CROSS_SERVER;
          }
          ({ isPremium: isPremium2, hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild2 } = sourceType);
          let isDiscoverable2 = !hasJoinedEmojiSourceGuild2;
          const isUnusableRoleSubscriptionEmoji2 = sourceType.isUnusableRoleSubscriptionEmoji;
          if (!hasJoinedEmojiSourceGuild2) {
            isDiscoverable2 = sourceType.isDiscoverable;
          }
          if (isPremium2) {
            if (isDiscoverable2) {
              const obj5 = { type: obj.JOIN_GUILD, text: intl10.string(tmp7(1126).t.riu2R5), description: null };
              intl10 = tmp7(1126).intl;
              obj7 = obj5;
            }
            const obj6 = { emojiDescription: formatToPlainStringResult, analyticsType: CROSS_SERVER };
            const merged = Object.assign(obj7);
            return obj6;
          }
          if (!isPremium2) {
            obj7 = { type: obj.GET_PREMIUM, text: intl9.string(tmp7(1126).t["gl/XHJ"]), description: null };
            intl9 = tmp7(1126).intl;
          }
          obj7 = { type: obj.UNAVAILABLE, text: null, description: null };
          const obj8 = { type: obj.UNAVAILABLE, text: null, description: null };
        }
      }
      if (!isPremium) {
        if (hasJoinedEmojiSourceGuild) {
          if (!isUnusableRoleSubscriptionEmoji) {
            CROSS_SERVER = emojiComesFromCurrentGuild
              ? constants.UPSELL_CURRENT_SERVER_JOINED
              : constants.UPSELL_CROSS_SERVER_JOINED;
          }
        }
      }
      if (!isPremium) {
        isPremium = hasJoinedEmojiSourceGuild;
      }
      CROSS_SERVER = DEFAULT;
      if (!isPremium) {
        CROSS_SERVER = isDiscoverable
          ? constants.UPSELL_CROSS_SERVER_JOINABLE
          : constants.UPSELL_CROSS_SERVER_UNJOINABLE;
      }
    }
    if (isPremium3) {
      let tmp22;
      let string2Result;
      if (hasJoinedEmojiSourceGuild3) {
        let tmp27;
        let string3Result;
        if (isRoleSubscriptionEmoji) {
          let tmp32;
          let stringResult;
          if (shouldHideRoleSubscriptionCTA) {
            if (isUnusableRoleSubscriptionEmoji3) {
              const intl7 = intl12.intl;
              stringResult = intl7.string(intl12.t.xFb68j);
              tmp32 = require;
            }
            tmp27 = tmp32;
            string3Result = stringResult;
          }
          const intl6 = intl12.intl;
          const string4 = intl6.string;
          const t4 = intl12.t;
          if (isUnusableRoleSubscriptionEmoji3) {
            let string4Result;
            let tmp35;
            if (userIsRoleSubscriber) {
              string4Result = string4(t4.vLklfF);
              let tmp34 = dependencyMap;
              tmp35 = require;
            } else {
              string4Result = string4(t4["g8i/bf"]);
              tmp34 = dependencyMap;
              tmp35 = require;
            }
            tmp32 = tmp35;
            stringResult = string4Result;
          } else {
            stringResult = string4(t4.Eoynp0);
            tmp32 = require;
          }
        } else {
          const intl5 = intl12.intl;
          const string3 = intl5.string;
          const t3 = intl12.t;
          if (emojiComesFromCurrentGuild2) {
            string3Result = string3(t3.hU4kIe);
            tmp27 = require;
          } else {
            string3Result = string3(t3.GM0xaX);
            tmp27 = require;
          }
        }
        tmp22 = tmp27;
        string2Result = string3Result;
      } else {
        const intl4 = intl12.intl;
        const string2 = intl4.string;
        const t2 = intl12.t;
        if (isDiscoverable3) {
          string2Result = string2(t2.xE9WGt);
          tmp22 = require;
        } else {
          string2Result = string2(t2["0LMpW+"]);
          tmp22 = require;
        }
      }
      tmp7 = tmp22;
      formatToPlainStringResult = string2Result;
    } else if (hasJoinedEmojiSourceGuild3) {
      let tmp12;
      let stringResult1;
      if (shouldHideRoleSubscriptionCTA) {
        if (isUnusableRoleSubscriptionEmoji3) {
          const intl3 = intl12.intl;
          stringResult1 = intl3.string(intl12.t.xFb68j);
          tmp12 = require;
        }
        tmp7 = tmp12;
        formatToPlainStringResult = stringResult1;
      }
      const intl2 = intl12.intl;
      const string = intl2.string;
      const t = intl12.t;
      if (isUnusableRoleSubscriptionEmoji3) {
        let stringResult2;
        let tmp15;
        if (userIsRoleSubscriber) {
          stringResult2 = string(t.vLklfF);
          tmp15 = require;
        } else {
          stringResult2 = string(t["g8i/bf"]);
          tmp15 = require;
        }
        tmp12 = tmp15;
        stringResult1 = stringResult2;
      } else if (emojiComesFromCurrentGuild2) {
        stringResult1 = string(t.ICPhqa);
        tmp12 = require;
      } else {
        stringResult1 = string(t.jQy3aM);
        tmp12 = require;
      }
    } else {
      const intl = intl12.intl;
      if (isDiscoverable3) {
        formatToPlainStringResult = intl.string(intl12.t.FJ6Z01);
        tmp7 = require;
      } else {
        obj = { openPremiumSettings: onOpenPremiumSettings };
        formatToPlainStringResult = intl.format(intl12.t.U6vLcA, obj);
        tmp7 = require;
      }
    }
  }
};
