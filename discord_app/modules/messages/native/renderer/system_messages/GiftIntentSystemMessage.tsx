// === Module 7931: createGiftIntentSystemMessage ===

// Module 7931 (createGiftIntentSystemMessage)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import registerAssetDefault from "registerAsset" /* 7805 */;
import createCommonMessageDefault from "createCommonMessage" /* 7819 */;
import createGiftIntentEmbed from "createGiftIntentEmbed" /* 7932 */;
import createCacheKey from "createCacheKey" /* 4446 */;

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: ThemesDefault.colors.BACKGROUND_BRAND, iconDividerColor: ThemesDefault.colors.ICON_STRONG });
let obj = { iconTintColor: ThemesDefault.colors.BACKGROUND_BRAND, iconDividerColor: ThemesDefault.colors.ICON_STRONG };
const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

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
    let tmpResult = tmp(7940);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7802);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(registerAssetDefault);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};