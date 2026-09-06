// === Module 8076: GiftIntentSystemMessage ===

// Module 8076 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7946 */;
import _modDef7949 from "module_7949" /* 7949 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8077 */;
import EphemeralIndication from "EphemeralIndication" /* 8085 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  let obj = GiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = EphemeralIndication;
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = renderer_EmbedUtils;
    obj.iconUrl = tmpResult.getAssetUriForEmbed(_modDef7949);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = closure_3(theme));
    return obj;
  }
};