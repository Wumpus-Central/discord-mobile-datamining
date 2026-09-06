// discord_app/modules/messages/getEmojiPopoutMessage.tsx
import util from "../../intl/index.native.tsx";
import ExpressionSourceRecord from "../emojis/records/ExpressionSourceRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
const constants = {
  DEFAULT: "Custom Emoji Popout",
  CROSS_SERVER: "Custom Emoji Popout (Cross-Server)",
  UPSELL_CURRENT_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Current-Server)",
  UPSELL_CROSS_SERVER_JOINED: "Custom Emoji Popout (Upsell Joined Cross-Server)",
  UPSELL_CROSS_SERVER_JOINABLE: "Custom Emoji Popout (Upsell Not-Joined Cross-Server)",
  UPSELL_CROSS_SERVER_UNJOINABLE: "Custom Emoji Popout (Soft Upsell)",
};
const EmojiPopoutType = { GET_PREMIUM: "GET_PREMIUM", JOIN_GUILD: "JOIN_GUILD", UNAVAILABLE: "UNAVAILABLE" };
const result = size.fileFinishedImporting("modules/messages/getEmojiPopoutMessage.tsx");

export { EmojiPopoutType };
export const getEmojiPopoutData = function getEmojiPopoutData(sourceType) {
  ({
    expressionSourceApplication,
    hasJoinedEmojiSourceGuild,
    isUnusableRoleSubscriptionEmoji,
    isDiscoverable,
    emojiComesFromCurrentGuild,
    userIsRoleSubscriber,
    shouldHideRoleSubscriptionCTA,
  } = sourceType);
  ({ isPremium, isRoleSubscriptionEmoji, onOpenPremiumSettings } = sourceType);
  if (sourceType.sourceType === EmojiSourceDataTypes.APPLICATION) {
    if (null != expressionSourceApplication) {
      const intl8 = util.intl;
      let obj = { appName: expressionSourceApplication.name };
      let formatToPlainStringResult = intl8.formatToPlainString(util.t.uERlTd, obj);
      let tmp6 = require;
    }
    ({
      isPremium: isPremium2,
      hasJoinedEmojiSourceGuild: hasJoinedEmojiSourceGuild2,
      isDiscoverable: isDiscoverable2,
    } = sourceType);
    ({
      isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji2,
      emojiComesFromCurrentGuild: emojiComesFromCurrentGuild2,
    } = sourceType);
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
            obj.type = obj.JOIN_GUILD;
            const intl10 = tmp6(1114).intl;
            obj.text = intl10.string(tmp6(1114).t.riu2R5);
            let obj2 = obj;
          }
          const obj1 = {};
          const merged = Object.assign(obj2);
          obj1.emojiDescription = formatToPlainStringResult;
          obj1.analyticsType = DEFAULT;
          return obj1;
        }
        if (!isPremium3) {
          obj2 = { type: obj.GET_PREMIUM, text: null, description: null };
          const intl9 = tmp6(1114).intl;
          obj2.text = intl9.string(tmp6(1114).t["gl/XHJ"]);
        }
        const obj3 = { type: obj.UNAVAILABLE, text: null, description: null };
        obj2 = obj3;
      }
    }
    if (!isPremium2) {
      if (hasJoinedEmojiSourceGuild2) {
        if (!isUnusableRoleSubscriptionEmoji2) {
          DEFAULT = emojiComesFromCurrentGuild2
            ? constants.UPSELL_CURRENT_SERVER_JOINED
            : constants.UPSELL_CROSS_SERVER_JOINED;
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
      const intl4 = util.intl;
      const string2 = intl4.string;
      const t = util.t;
      if (isDiscoverable) {
        let string2Result = string2(t.xE9WGt);
      } else {
        string2Result = string2(t["0LMpW+"]);
      }
    }
    if (!isRoleSubscriptionEmoji) {
      const intl5 = util.intl;
      const string3 = intl5.string;
      const t2 = util.t;
      if (emojiComesFromCurrentGuild) {
        let string3Result = string3(t2.hU4kIe);
      } else {
        string3Result = string3(t2.GM0xaX);
      }
    }
    if (!shouldHideRoleSubscriptionCTA) {
      const intl6 = util.intl;
      const string4 = intl6.string;
      let vLklfF2 = util.t;
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
    const intl7 = util.intl;
    string4Result1 = intl7.string(util.t.xFb68j);
  } else if (hasJoinedEmojiSourceGuild) {
    if (!shouldHideRoleSubscriptionCTA) {
      const intl2 = util.intl;
      const string = intl2.string;
      let vLklfF = util.t;
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
    const intl3 = util.intl;
    stringResult1 = intl3.string(util.t.xFb68j);
  } else {
    const intl = util.intl;
    if (isDiscoverable) {
      formatToPlainStringResult = intl.string(util.t.FJ6Z01);
      tmp6 = require;
    } else {
      obj = { openPremiumSettings: onOpenPremiumSettings };
      formatToPlainStringResult = intl.format(util.t.U6vLcA, obj);
      tmp6 = require;
    }
  }
};
