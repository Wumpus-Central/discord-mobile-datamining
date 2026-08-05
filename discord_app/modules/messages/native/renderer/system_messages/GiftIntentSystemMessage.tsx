// discord_app/modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = require("../row_data/embeds/GiftIntentEmbed.tsx") /* createGiftIntentEmbed */;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(require("createCommonMessage.tsx")(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(7995);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(7865);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(require("../../../../../../_runtime/07868_registerAsset.js"));
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};