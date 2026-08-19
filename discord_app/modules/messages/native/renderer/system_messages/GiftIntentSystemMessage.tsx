// === Module 8288: createGiftIntentSystemMessage ===

// Module 8288 (createGiftIntentSystemMessage)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import frozen from "frozen" /* 8171 */;
import registerAssetDefault from "registerAsset" /* 8174 */;
import createCommonMessageDefault from "createCommonMessage" /* 8188 */;
import createGiftIntentEmbed from "createGiftIntentEmbed" /* 8289 */;
import createEphemeralIndication from "createEphemeralIndication" /* 8297 */;
import createCacheKey from "createCacheKey" /* 4661 */;

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: ThemesDefault.colors.BACKGROUND_BRAND, iconDividerColor: ThemesDefault.colors.ICON_STRONG });
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  let obj = createGiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = createEphemeralIndication;
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = frozen;
    obj.iconUrl = tmpResult.getAssetUriForEmbed(registerAssetDefault);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};