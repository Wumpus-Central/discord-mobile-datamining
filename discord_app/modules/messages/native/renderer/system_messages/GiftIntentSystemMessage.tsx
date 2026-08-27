// === Module 7917: createGiftIntentSystemMessage ===

// Module 7917 (createGiftIntentSystemMessage)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import registerAssetDefault from "registerAsset" /* 7791 */;
import createCommonMessageDefault from "createCommonMessage" /* 7805 */;
import createGiftIntentEmbed from "createGiftIntentEmbed" /* 7918 */;
import createCacheKey from "createCacheKey" /* 4445 */;

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
    let tmpResult = tmp(7926);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7788);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(registerAssetDefault);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};