// discord_app/modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../../../intl/index.native.tsx";
import PremiumConstants from "../../../../../premium/PremiumConstants.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import AssetRegistryDefault from "../../../../../../../_runtime/04832_AssetRegistry.js";
import renderer_EmbedUtils from "../../EmbedUtils.tsx";
import PremiumGiftingUtils from "../../../../../premium/PremiumGiftingUtils.tsx";
import AssetRegistryDefault2 from "../../../../../../../_runtime/07752_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../../../_runtime/07753_AssetRegistry.js";
import PremiumGiftingIntentStore from "../../../../../premium/gifting/PremiumGiftingIntentStore.tsx";
import UserStore from "../../../../../../stores/UserStore.tsx";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const GiftIntentType = PremiumConstants.GiftIntentType;
let obj = {
  headerTextColor: nativeDefault.colors.TEXT_STRONG,
  subHeaderTextColor: nativeDefault.colors.TEXT_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderColor: nativeDefault.colors.BORDER_MUTED,
};
let closure_6 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftIntentEmbed.tsx");

export const createGiftIntentEmbed = function createGiftIntentEmbed(message, theme) {
  let giftIntentType;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let recipientUserId;
  const giftingPrompt = message.giftingPrompt;
  if (null == giftingPrompt) {
    return null;
  } else {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    const user = UserStore.getUser(recipientUserId);
    if (null == user) {
      return null;
    } else {
      let tmp;
      const obj10 = UserUtilsDefault;
      const name = obj10.getName(user);
      if (GiftIntentType.FRIEND_ANNIVERSARY === giftIntentType) {
        const obj = { headerText: intl.string(intl5.t.CeQIwZ), subHeaderParts: items };
        intl = intl5.intl;
        const obj2 = { text: intl2.formatToPlainString(intl5.t.PpG27s, obj3) };
        intl2 = intl5.intl;
        items = [obj2];
        tmp = obj;
        obj3 = { numberOfYears: tmp12 };
      } else {
        tmp = null;
        if (tmp13.UNSPECIFIED !== giftIntentType) {
          const obj11 = PremiumGiftingUtils;
          obj11.unhandledGiftIntent(giftIntentType);
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
        ({ headerText: obj4.headerText, subHeaderParts: obj4.subHeaderParts } = tmp);
        const obj9 = {
          recipientAvatarUrl: combined,
          currentUserAvatarUrl: combined1,
          recipientName: name,
          headerText: null,
          subHeaderParts: null,
          recipientUserId,
          giftIntentType,
          headerTextColor: null,
          subHeaderTextColor: null,
          backgroundColor: null,
          borderColor: null,
          subHeaderIconUrl: obj5.getAssetUriForEmbed(AssetRegistryDefault),
          primaryCtaLabel: intl3.string(intl5.t.ilhtIa),
          primaryCtaIconUrl: obj6.getAssetUriForEmbed(AssetRegistryDefault2),
          secondaryCtaIconUrl: obj7.getAssetUriForEmbed(AssetRegistryDefault3),
          secondaryCtaAccessibilityLabel: intl4.string(intl5.t.I5gL2H),
        };
        ({
          headerTextColor: obj4.headerTextColor,
          subHeaderTextColor: obj4.subHeaderTextColor,
          backgroundColor: obj4.backgroundColor,
          borderColor: obj4.borderColor,
        } = closure_6(theme));
        closure_6(theme);
        obj5 = renderer_EmbedUtils;
        intl3 = intl5.intl;
        obj6 = renderer_EmbedUtils;
        obj7 = renderer_EmbedUtils;
        intl4 = intl5.intl;
        return obj9;
      }
    }
  }
};
