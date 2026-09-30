// === Module 7714: GiftIntentSystemMessage ===

// Module 7714 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7583 */;
import _modDef7586 from "module_7586" /* 7586 */;
import createCommonMessageDefault from "createCommonMessage" /* 7601 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 7715 */;
import EphemeralIndication from "EphemeralIndication" /* 7723 */;
import createStyles from "createStyles" /* 4866 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  const giftIntentEmbed = GiftIntentEmbed.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj3.giftIntentInfo = giftIntentEmbed;
    const tmp5 = closure_3(theme);
    obj3.ephemeralIndication = EphemeralIndication.createEphemeralIndication(message);
    const tmpResult = EphemeralIndication;
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7586);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};