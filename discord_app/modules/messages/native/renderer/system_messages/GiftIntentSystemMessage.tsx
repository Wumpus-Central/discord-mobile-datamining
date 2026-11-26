// === Module 14439: GiftIntentSystemMessage ===

// Module 14439 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 575 */;
import _modDef8598 from "module_8598" /* 8598 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8821 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 14440 */;
import EphemeralIndication from "EphemeralIndication" /* 14441 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export function createGiftIntentSystemMessage(message) {
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8598);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
}