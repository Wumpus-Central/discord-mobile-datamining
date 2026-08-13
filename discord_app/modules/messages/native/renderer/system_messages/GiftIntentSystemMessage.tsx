// discord_app/modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/08103_registerAsset.js";
import { createGiftIntentEmbed } from "../row_data/embeds/GiftIntentEmbed.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";

let closure_3 = createCacheKey.createNativeStyleProperties({ iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG });
let obj = { iconTintColor: require("Themes").colors.BACKGROUND_BRAND, iconDividerColor: require("Themes").colors.ICON_STRONG };
const result = require("createGiftIntentEmbed").fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  ({ message, theme } = message);
  let obj = createGiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    obj = {};
    const merged = Object.assign(createCommonMessage(message));
    obj.giftIntentInfo = giftIntentEmbed;
    let tmpResult = tmp(8230);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(8100);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(registerAsset);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};