// === Module 8091: GiftIntentSystemMessage ===

// Module 8091 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7960 */;
import _modDef7963 from "module_7963" /* 7963 */;
import createCommonMessageDefault from "createCommonMessage" /* 7978 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8092 */;
import EphemeralIndication from "EphemeralIndication" /* 8100 */;
import createStyles from "createStyles" /* 4574 */;
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
    obj.iconUrl = tmpResult.getAssetUriForEmbed(_modDef7963);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = closure_3(theme));
    return obj;
  }
};