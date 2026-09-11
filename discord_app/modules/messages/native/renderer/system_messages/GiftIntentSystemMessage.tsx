// === Module 8151: GiftIntentSystemMessage ===

// Module 8151 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8020 */;
import _modDef8023 from "module_8023" /* 8023 */;
import createCommonMessageDefault from "createCommonMessage" /* 8038 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8152 */;
import EphemeralIndication from "EphemeralIndication" /* 8160 */;
import createStyles from "createStyles" /* 4606 */;
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
    obj.iconUrl = tmpResult.getAssetUriForEmbed(_modDef8023);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = closure_3(theme));
    return obj;
  }
};