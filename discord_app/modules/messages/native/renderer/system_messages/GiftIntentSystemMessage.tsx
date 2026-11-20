// === Module 8756: GiftIntentSystemMessage ===

// Module 8756 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 575 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8125 */;
import _modDef8563 from "module_8563" /* 8563 */;
import createCommonMessageDefault from "createCommonMessage" /* 8582 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8757 */;
import EphemeralIndication from "EphemeralIndication" /* 8764 */;
import createStyles from "createStyles" /* 4794 */;
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8563);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
}