// discord_app/modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/07608_AssetRegistry.js";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GiftIntentEmbed from "../row_data/embeds/GiftIntentEmbed.tsx";
import EphemeralIndication from "../row_data/EphemeralIndication.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = { iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG };
let closure_3 = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx",
);

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  let theme;
  let tmpResult;
  let tmpResult2;
  ({ message, theme } = message);
  const obj = GiftIntentEmbed;
  const giftIntentEmbed = obj.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const obj3 = {
      giftIntentInfo: giftIntentEmbed,
      ephemeralIndication: tmpResult.createEphemeralIndication(message),
      iconUrl: tmpResult2.getAssetUriForEmbed(AssetRegistryDefault),
    };
    const tmp5 = closure_3(theme);
    const merged = Object.assign(createCommonMessageDefault(message));
    tmpResult = EphemeralIndication;
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    tmpResult2 = renderer_EmbedUtils;
    return obj3;
  }
};
