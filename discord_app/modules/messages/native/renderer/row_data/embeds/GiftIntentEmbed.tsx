// === Module 9328: GiftIntentEmbed ===

// Module 9328 (GiftIntentEmbed)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import UserUtilsDefault from "UserUtils" /* 5372 */;
import _modDef6022 from "module_6022" /* 6022 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8655 */;
import PremiumGiftingUtils from "PremiumGiftingUtils" /* 9332 */;
import _modDef9333 from "module_9333" /* 9333 */;
import _modDef9334 from "module_9334" /* 9334 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 9329 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
const GiftIntentType = fn(1390).GiftIntentType;
const createStyles = fn(5306);
let closure_6 = createStyles.createNativeStyleProperties({ headerTextColor: nativeDefault.colors.TEXT_STRONG, subHeaderTextColor: nativeDefault.colors.TEXT_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BORDER_MUTED });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export function createGiftIntentEmbed(message, theme) {
  const giftingPrompt = message.giftingPrompt;
  if (null == giftingPrompt) {
    return null;
  } else {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    const user = UserStore.getUser(recipientUserId);
    if (null == user) {
      return null;
    } else {
      const name = UserUtilsDefault.getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        const obj = { headerText: null, subHeaderParts: null };
        const intl = util.intl;
        obj.headerText = intl.string(util.t.CeQIwZ);
        const obj2 = { text: null };
        const intl2 = util.intl;
        const obj3 = { numberOfYears: tmp12 };
        obj2.text = intl2.formatToPlainString(util.t.PpG27s, obj3);
        items = [obj2];
        obj.subHeaderParts = items;
        let tmp = obj;
      } else {
        tmp = null;
        if (tmp13.UNSPECIFIED !== giftIntentType) {
          PremiumGiftingUtils.unhandledGiftIntent(giftIntentType);
          tmp = null;
        }
      }
      if (null == tmp) {
        return null;
      } else {
        const currentUser = UserStore.getCurrentUser();
        const _HermesInternal2 = HermesInternal;
        let combined1;
        const combined = "" + user.getAvatarURL(undefined, 40);
        if (null != currentUser) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + currentUser.getAvatarURL(undefined, 40);
        }
        const obj9 = { recipientAvatarUrl: combined, currentUserAvatarUrl: combined1, recipientName: name, headerText: null, subHeaderParts: null, recipientUserId: null, giftIntentType: null, headerTextColor: null, subHeaderTextColor: null, backgroundColor: null, borderColor: null, subHeaderIconUrl: null, primaryCtaLabel: null, primaryCtaIconUrl: null, secondaryCtaIconUrl: null, secondaryCtaAccessibilityLabel: null };
        ({ headerText: obj4.headerText, subHeaderParts: obj4.subHeaderParts } = tmp);
        obj9.recipientUserId = recipientUserId;
        obj9.giftIntentType = giftIntentType;
        ({ headerTextColor: obj4.headerTextColor, subHeaderTextColor: obj4.subHeaderTextColor, backgroundColor: obj4.backgroundColor, borderColor: obj4.borderColor } = closure_6(theme));
        const tmp6 = closure_6(theme);
        obj9.subHeaderIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef6022);
        const intl3 = util.intl;
        obj9.primaryCtaLabel = intl3.string(util.t.ilhtIa);
        obj9.primaryCtaIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef9333);
        obj9.secondaryCtaIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef9334);
        const intl4 = util.intl;
        obj9.secondaryCtaAccessibilityLabel = intl4.string(util.t.I5gL2H);
        return obj9;
      }
    }
  }
}