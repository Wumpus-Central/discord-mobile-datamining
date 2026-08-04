// discord_app/modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx
import getCurrentTime from "getCurrentTime";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GiftIntentType } from "GuildFeatures";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { headerTextColor: require("Themes").colors.TEXT_STRONG, subHeaderTextColor: require("Themes").colors.TEXT_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderColor: require("Themes").colors.BORDER_MUTED };
createCacheKey = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("GuildFeatures").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export const createGiftIntentEmbed = function createGiftIntentEmbed(message, theme) {
  let giftIntentType;
  let recipientUserId;
  const giftingPrompt = message.giftingPrompt;
  if (null == giftingPrompt) {
    return null;
  } else {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    user = user.getUser(recipientUserId);
    if (null == user) {
      return null;
    } else {
      const name = importDefault(4032).getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        let obj = { headerText: null, subHeaderParts: null };
        const intl = require(1236) /* getSystemLocale */.intl;
        obj[0] = intl.string(require(1236) /* getSystemLocale */.t.CeQIwZ);
        obj = { text: null };
        const intl2 = require(1236) /* getSystemLocale */.intl;
        obj = { numberOfYears: null };
        obj[0] = tmp12;
        obj[0] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t.PpG27s, obj);
        const items = [obj];
        obj[1] = items;
        let tmp = obj;
      } else {
        tmp = null;
        if (tmp13.UNSPECIFIED !== giftIntentType) {
          require(7862) /* _sendGiftMessage */.unhandledGiftIntent(giftIntentType);
          tmp = null;
          const obj11 = require(7862) /* _sendGiftMessage */;
        }
      }
      if (null == tmp) {
        return null;
      } else {
        const currentUser = obj8.getCurrentUser();
        const _HermesInternal2 = HermesInternal;
        let combined1;
        const combined = "" + user.getAvatarURL(undefined, 40);
        if (null != currentUser) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + currentUser.getAvatarURL(undefined, 40);
        }
        const obj1 = { recipientAvatarUrl: null, currentUserAvatarUrl: null, recipientName: null, headerText: null, subHeaderParts: null, recipientUserId: null, giftIntentType: null, headerTextColor: null, subHeaderTextColor: null, backgroundColor: null, borderColor: null, subHeaderIconUrl: null, primaryCtaLabel: null, primaryCtaIconUrl: null, secondaryCtaIconUrl: null, secondaryCtaAccessibilityLabel: null };
        obj1[0] = combined;
        obj1[1] = combined1;
        obj1[2] = name;
        ({ headerText: obj4[3], subHeaderParts: obj4[4] } = tmp);
        obj1[5] = recipientUserId;
        obj1[6] = giftIntentType;
        ({ headerTextColor: obj4[7], subHeaderTextColor: obj4[8], backgroundColor: obj4[9], borderColor: obj4[10] } = createCacheKey(theme));
        const tmp6 = createCacheKey(theme);
        obj1[11] = require(7734) /* frozen */.getAssetUriForEmbed(tmp8(4130));
        const intl3 = require(1236) /* getSystemLocale */.intl;
        obj1[12] = intl3.string(require(1236) /* getSystemLocale */.t.ilhtIa);
        const obj5 = require(7734) /* frozen */;
        obj1[13] = require(7734) /* frozen */.getAssetUriForEmbed(tmp8(7863));
        const obj6 = require(7734) /* frozen */;
        obj1[14] = require(7734) /* frozen */.getAssetUriForEmbed(tmp8(7864));
        const intl4 = require(1236) /* getSystemLocale */.intl;
        obj1[15] = intl4.string(require(1236) /* getSystemLocale */.t.I5gL2H);
        return obj1;
      }
      const obj10 = importDefault(4032);
    }
    obj8 = user;
  }
};