// discord_app/modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import registerAssetDefault from "../../../../../../_runtime/08276_registerAsset.js";
import createCommonMessageDefault from "createCommonMessage.tsx";
import createGiftIntentEmbed from "../row_data/embeds/GiftIntentEmbed.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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
    let tmpResult = tmp(8405);
    obj.ephemeralIndication = tmpResult.createEphemeralIndication(message);
    tmpResult = tmp(8273);
    obj.iconUrl = tmpResult.getAssetUriForEmbed(registerAssetDefault);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = callback(theme));
    return obj;
  }
};