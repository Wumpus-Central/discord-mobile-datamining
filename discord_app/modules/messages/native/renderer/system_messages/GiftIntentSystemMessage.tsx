// === Module 8078: GiftIntentSystemMessage ===

// Module 8078 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 587 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7863 */;
import _modDef7866 from "module_7866" /* 7866 */;
import createCommonMessageDefault from "createCommonMessage" /* 7955 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8079 */;
import EphemeralIndication from "EphemeralIndication" /* 8086 */;
import createStyles from "createStyles" /* 5090 */;
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef7866);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};