// discord_app/modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../../intl/index.native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import PremiumGiftingUtils from "../../../../../premium/PremiumGiftingUtils.tsx";
import PremiumGiftingIntentStore from "../../../../../premium/gifting/PremiumGiftingIntentStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";

require = fn;
const GiftIntentType = fn(1373).GiftIntentType;
fn(4560);
const createStyles = {
  headerTextColor: nativeDefault.colors.TEXT_STRONG,
  subHeaderTextColor: nativeDefault.colors.TEXT_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
let closure_6 = createStyles.createNativeStyleProperties(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export const createGiftIntentEmbed = function createGiftIntentEmbed(message, theme) {
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
        let obj = { headerText: null, subHeaderParts: null };
        const intl = util.intl;
        obj.headerText = intl.string(util.t.CeQIwZ);
        obj = { text: null };
        const intl2 = util.intl;
        obj = { numberOfYears: tmp12 };
        obj.text = intl2.formatToPlainString(util.t.PpG27s, obj);
        const items = [obj];
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
        const currentUser = obj8.getCurrentUser();
        const _HermesInternal2 = HermesInternal;
        let combined1;
        const combined = "" + user.getAvatarURL(undefined, 40);
        if (null != currentUser) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + currentUser.getAvatarURL(undefined, 40);
        }
        const obj1 = {
          recipientAvatarUrl: combined,
          currentUserAvatarUrl: combined1,
          recipientName: name,
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
        ({ headerText: obj4.headerText, subHeaderParts: obj4.subHeaderParts } = tmp);
        obj1.recipientUserId = recipientUserId;
        obj1.giftIntentType = giftIntentType;
        ({
          headerTextColor: obj4.headerTextColor,
          subHeaderTextColor: obj4.subHeaderTextColor,
          backgroundColor: obj4.backgroundColor,
          borderColor: obj4.borderColor,
        } = closure_6(theme));
        const tmp6 = closure_6(theme);
        obj1.subHeaderIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(tmp8(4496));
        const intl3 = util.intl;
        obj1.primaryCtaLabel = intl3.string(util.t.ilhtIa);
        obj1.primaryCtaIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(tmp8(8083));
        obj1.secondaryCtaIconUrl = renderer_EmbedUtils.getAssetUriForEmbed(tmp8(8084));
        const intl4 = util.intl;
        obj1.secondaryCtaAccessibilityLabel = intl4.string(util.t.I5gL2H);
        return obj1;
      }
    }
    obj8 = UserStore;
  }
};
