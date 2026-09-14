// discord_app/modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import renderer_EmbedUtils from "../EmbedUtils.tsx";
import _modDef8053 from "../../../../../../_runtime/metro/08053__.js";
import createCommonMessageDefault from "createCommonMessage.tsx";
import GiftIntentEmbed from "../row_data/embeds/GiftIntentEmbed.tsx";
import EphemeralIndication from "../row_data/EphemeralIndication.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let closure_3 = createStyles.createNativeStyleProperties({
  iconTintColor: nativeDefault.colors.BACKGROUND_BRAND,
  iconDividerColor: nativeDefault.colors.ICON_STRONG,
});
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx",
);

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8053);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
