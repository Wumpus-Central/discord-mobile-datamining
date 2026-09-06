// === Module 8077: createGiftIntentEmbed ===

// Module 8077 (createGiftIntentEmbed)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import nameFromUserDefault from "nameFromUser" /* 4404 */;
import frozen from "frozen" /* 7946 */;
import _sendGiftMessage from "_sendGiftMessage" /* 8082 */;
import closure_3 from "getCurrentTime" /* 8078 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import { GiftIntentType } from "GuildFeatures" /* 1373 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
createCacheKey = { headerTextColor: ThemesDefault.colors.TEXT_STRONG, subHeaderTextColor: ThemesDefault.colors.TEXT_SUBTLE, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: ThemesDefault.colors.BORDER_MUTED };
let closure_6 = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export const createGiftIntentEmbed = function createGiftIntentEmbed(message, theme) {
  const giftingPrompt = message.giftingPrompt;
  if (null == giftingPrompt) {
    return null;
  } else {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    user = user.getUser(recipientUserId);
    if (null == user) {
      return null;
    } else {
      const name = nameFromUserDefault.getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        let obj = { headerText: null, subHeaderParts: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(getSystemLocale.t.CeQIwZ);
        obj = { text: null };
        const intl2 = getSystemLocale.intl;
        obj = { numberOfYears: null };
        obj[0] = tmp12;
        obj[0] = intl2.formatToPlainString(getSystemLocale.t.PpG27s, obj);
        const items = [obj];
        obj[1] = items;
        let tmp = obj;
      } else {
        tmp = null;
        if (tmp13.UNSPECIFIED !== giftIntentType) {
          _sendGiftMessage.unhandledGiftIntent(giftIntentType);
          tmp = null;
          const obj11 = _sendGiftMessage;
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
        obj1 = { recipientAvatarUrl: null, currentUserAvatarUrl: null, recipientName: null, headerText: null, subHeaderParts: null, recipientUserId: null, giftIntentType: null, headerTextColor: null, subHeaderTextColor: null, backgroundColor: null, borderColor: null, subHeaderIconUrl: null, primaryCtaLabel: null, primaryCtaIconUrl: null, secondaryCtaIconUrl: null, secondaryCtaAccessibilityLabel: null };
        obj1[0] = combined;
        obj1[1] = combined1;
        obj1[2] = name;
        ({ headerText: obj4[3], subHeaderParts: obj4[4] } = tmp);
        obj1[5] = recipientUserId;
        obj1[6] = giftIntentType;
        ({ headerTextColor: obj4[7], subHeaderTextColor: obj4[8], backgroundColor: obj4[9], borderColor: obj4[10] } = callback(theme));
        const tmp6 = callback(theme);
        obj1[11] = frozen.getAssetUriForEmbed(tmp8(4496));
        const intl3 = getSystemLocale.intl;
        obj1[12] = intl3.string(getSystemLocale.t.ilhtIa);
        const obj5 = frozen;
        obj1[13] = frozen.getAssetUriForEmbed(tmp8(8083));
        const obj6 = frozen;
        obj1[14] = frozen.getAssetUriForEmbed(tmp8(8084));
        const intl4 = getSystemLocale.intl;
        obj1[15] = intl4.string(getSystemLocale.t.I5gL2H);
        return obj1;
      }
      const obj10 = nameFromUserDefault;
    }
    obj8 = user;
  }
};