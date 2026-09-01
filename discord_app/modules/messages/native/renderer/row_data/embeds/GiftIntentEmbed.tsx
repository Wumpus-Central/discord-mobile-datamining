// discord_app/modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import nameFromUserDefault from "../../../../../../utils/UserUtils.tsx";
import frozen from "../../EmbedUtils.tsx";
import _sendGiftMessage from "../../../../../premium/PremiumGiftingUtils.tsx";
import closure_3 from "../../../../../premium/gifting/PremiumGiftingIntentStore.tsx";
import closure_4 from "../../../../../../stores/UserStore.tsx";
import { GiftIntentType } from "../../../../../premium/PremiumConstants.tsx";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
createCacheKey = {
  headerTextColor: ThemesDefault.colors.TEXT_STRONG,
  subHeaderTextColor: ThemesDefault.colors.TEXT_SUBTLE,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: ThemesDefault.colors.BORDER_MUTED,
};
let closure_6 = createCacheKey.createNativeStyleProperties(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx",
);

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
        obj1 = {
          recipientAvatarUrl: null,
          currentUserAvatarUrl: null,
          recipientName: null,
          headerText: null,
          subHeaderParts: null,
          recipientUserId: null,
          giftIntentType: null,
          headerTextColor: null,
          subHeaderTextColor: null,
          backgroundColor: null,
          borderColor: null,
          subHeaderIconUrl: null,
          primaryCtaLabel: null,
          primaryCtaIconUrl: null,
          secondaryCtaIconUrl: null,
          secondaryCtaAccessibilityLabel: null,
        };
        obj1[0] = combined;
        obj1[1] = combined1;
        obj1[2] = name;
        ({ headerText: obj4[3], subHeaderParts: obj4[4] } = tmp);
        obj1[5] = recipientUserId;
        obj1[6] = giftIntentType;
        ({
          headerTextColor: obj4[7],
          subHeaderTextColor: obj4[8],
          backgroundColor: obj4[9],
          borderColor: obj4[10],
        } = callback(theme));
        const tmp6 = callback(theme);
        obj1[11] = frozen.getAssetUriForEmbed(tmp8(4414));
        const intl3 = getSystemLocale.intl;
        obj1[12] = intl3.string(getSystemLocale.t.ilhtIa);
        const obj5 = frozen;
        obj1[13] = frozen.getAssetUriForEmbed(tmp8(7992));
        const obj6 = frozen;
        obj1[14] = frozen.getAssetUriForEmbed(tmp8(7993));
        const intl4 = getSystemLocale.intl;
        obj1[15] = intl4.string(getSystemLocale.t.I5gL2H);
        return obj1;
      }
      const obj10 = nameFromUserDefault;
    }
    obj8 = user;
  }
};
