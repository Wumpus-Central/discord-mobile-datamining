// === Module 8614: GiftIntentSystemMessage ===

// Module 8614 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 575 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8467 */;
import _modDef8470 from "module_8470" /* 8470 */;
import createCommonMessageDefault from "createCommonMessage" /* 8493 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8615 */;
import EphemeralIndication from "EphemeralIndication" /* 8622 */;
import createStyles from "createStyles" /* 5140 */;
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8470);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
}