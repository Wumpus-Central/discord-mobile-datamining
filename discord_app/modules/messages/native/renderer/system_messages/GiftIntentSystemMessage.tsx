// === Module 8446: GiftIntentSystemMessage ===

// Module 8446 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8277 */;
import _modDef8280 from "module_8280" /* 8280 */;
import createCommonMessageDefault from "createCommonMessage" /* 8322 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8447 */;
import EphemeralIndication from "EphemeralIndication" /* 8454 */;
import createStyles from "createStyles" /* 4971 */;
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8280);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};